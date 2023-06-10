import React from 'react';
import ReactDOM from 'react-dom/client';
import { AffiliateSearch } from '../../../Classes/AffiliateSearch';
import { DeepClone } from '../../../Classes/DeepClone';

interface AffiliateSearchControlProps {
    className?: string;
    affiliateSearch?: any;
    onChange?: (affiliateSearch) => void
}

export class AffiliateSearchControl extends React.Component<AffiliateSearchControlProps> {

    static defaultProps = {
        className: "",
        affiliateSearch: new AffiliateSearch()
    };

    constructor(props){
        super(props);
    }
    
    componentDidMount(){

    }

    latitude_onChange = (event) => {
        const latitude = event.target.value;
        if(!isNaN(latitude)){
            const affiliateSearch = DeepClone.make(this.props.affiliateSearch);
            affiliateSearch.latitude = latitude;
            if(this.props.onChange){
                this.props.onChange(affiliateSearch);
            }
        }
    }

    longitude_onChange = (event) => {
        const longitude = event.target.value;
        if(!isNaN(longitude)){
            const affiliateSearch = DeepClone.make(this.props.affiliateSearch);
            affiliateSearch.longitude = longitude;
            if(this.props.onChange){
                this.props.onChange(affiliateSearch);
            }
        }
    }

    maxDistanceInKilometers_onChange = (event) => {
        const maxDistanceInKilometers = event.target.value;
        if(!isNaN(maxDistanceInKilometers)){
            const affiliateSearch = DeepClone.make(this.props.affiliateSearch);
            affiliateSearch.maxDistanceInKilometers = maxDistanceInKilometers;
            if(this.props.onChange){
                this.props.onChange(affiliateSearch);
            }
        }
    }

    render() {
        return (
            <div className={`${this.constructor.name} ${this.props.className}`}>
                <div className="mb-3">
                    <label className="form-label">Latitude</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={( (this.props.affiliateSearch.latitude != null) ? this.props.affiliateSearch.latitude : "" )} 
                        onChange={this.latitude_onChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Longitude</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={( (this.props.affiliateSearch.longitude != null) ? this.props.affiliateSearch.longitude : "" )} 
                        onChange={this.longitude_onChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Max Distance (Kilometers)</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={( (this.props.affiliateSearch.maxDistanceInKilometers != null) ? this.props.affiliateSearch.maxDistanceInKilometers : "" )} 
                        onChange={this.maxDistanceInKilometers_onChange}
                    />
                </div>
            </div>
        );
    }
    
}

