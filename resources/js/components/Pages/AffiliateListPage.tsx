import React from 'react';
import ReactDOM from 'react-dom/client';

import { AffiliateSearchControl } from "../Controls/AffiliateSearchControl";
import { AffiliateSearch } from '../../Classes/AffiliateSearch';

interface AffiliateListPageProps {
    affiliateSearch?: any;
}

interface AffiliateListPageState {
    affiliateSearch: any;
}

export class AffiliateListPage extends React.Component<AffiliateListPageProps, AffiliateListPageState> {

    static defaultProps = {
        affiliateSearch: AffiliateSearch.initWithDistanceInKilometers(100)
    };

    constructor(props){
        super(props);
        this.state = this.getStateFromProps(props);
    }
    
    componentDidMount(){

    }

    getStateFromProps(props){
        const defaultProps = AffiliateListPage.defaultProps;
        return {
            affiliateSearch: ( (props.affiliateSearch !== undefined) ? props.affiliateSearch : defaultProps.affiliateSearch )
        };
    }

    affiliateSearchControl_onChange = (affiliateSearch) => {
        this.setState({
            affiliateSearch
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <AffiliateSearchControl 
                            affiliateSearch={this.state.affiliateSearch}
                            onChange={this.affiliateSearchControl_onChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    
}

