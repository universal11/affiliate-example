import React from 'react';
import ReactDOM from 'react-dom/client';
import { toast } from "react-toastify";

import { AffiliateSearchControl } from "../Controls/Affiliate/AffiliateSearchControl";
import { AffiliateSearch } from '../../Classes/AffiliateSearch';
import { AffiliateHttpClient } from '../../HttpClients/AffiliateHttpClient';
import { DeepClone } from '../../Classes/DeepClone';
import { AffiliateCardList } from '../Controls/Affiliate/AffiliateCardList';

interface AffiliateListPageProps {
    affiliateSearch?: any;
    affiliateList?: any;
}

interface AffiliateListPageState {
    affiliateSearch: any;
    affiliateList: any;
}

export class AffiliateListPage extends React.Component<AffiliateListPageProps, AffiliateListPageState> {

    static defaultProps = {
        affiliateSearch: AffiliateSearch.initWith(
            53.3340285,
            -6.2535495,
            100
        ),
        affiliateList: {
            isLoading: false,
            affiliates: []
        }
    };

    constructor(props){
        super(props);
        this.state = this.getStateFromProps(props);
    }
    
    componentDidMount(){
        this.getAffiliates();
    }

    getStateFromProps(props){
        const defaultProps = AffiliateListPage.defaultProps;
        return {
            affiliateSearch: ( (props.affiliateSearch !== undefined) ? props.affiliateSearch : defaultProps.affiliateSearch ),
            affiliateList: ( (props.affiliateList !== undefined) ? props.affiliateList : defaultProps.affiliateList )
        };
    }

    affiliateSearchControl_onChange = (affiliateSearch) => {
        this.setState({
            affiliateSearch
        });
    }

    searchButton_onClick = (event) => {
        this.getAffiliates();
    }

    getAffiliates(){
        const affiliateList = DeepClone.make(this.state.affiliateList);
        affiliateList.isLoading = true;
        this.setState({
            affiliateList
        });
        AffiliateHttpClient.search(this.state.affiliateSearch).then((response) => {
            const affiliateList = DeepClone.make(this.state.affiliateList);
            affiliateList.isLoading = false;
            affiliateList.affiliates = response.data.data;
            this.setState({
                affiliateList
            });
        }).catch((error) => {
            console.log(error);
            const affiliateList = DeepClone.make(this.state.affiliateList);
            affiliateList.isLoading = false;
            affiliateList.affiliates = [];
            this.setState({
                affiliateList
            });
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <AffiliateSearchControl 
                                    affiliateSearch={this.state.affiliateSearch}
                                    onChange={this.affiliateSearchControl_onChange}
                                />
                                <button 
                                    type="button" 
                                    className="btn btn-secondary btn-dark" 
                                    onClick={this.searchButton_onClick}
                                    disabled={this.state.affiliateList.isLoading}
                                >
                                    Search
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <AffiliateCardList 
                    className="row mt-5"
                    itemContainerClassName={"col-md-3 mb-3"}
                    itemClassName="h-100 shadow-lg"
                    affiliates={this.state.affiliateList.affiliates}
                />
            </div>
        );
    }
    
}

