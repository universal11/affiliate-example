import React from 'react';
import ReactDOM from 'react-dom/client';

import { AffiliateSearchControl } from "../Controls/AffiliateSearchControl";

export class AffiliateListPage extends React.Component {

    static defaultProps = {
        
    };

    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount(){

    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <AffiliateSearchControl 
                        />
                    </div>
                </div>
            </div>
        );
    }
    
}

