
import React from "react";

interface AffiliateCardListItemProps {
    affiliate?: any;
    className?: string;
}

export class AffiliateCardListItem extends React.Component<AffiliateCardListItemProps> {

    static defaultProps = {
        affiliate: null,
        className: "",
        showActions: true
    };
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (

            <div className={`card ${this.constructor.name} ${this.props.className}`} >
                <div className="card-body text-center">
                    <h6 className="card-title">{this.props.affiliate.name}</h6>
                    <h6 className="card-subtitle">#{this.props.affiliate.id}</h6>
                </div>
            </div>
        );

    }


}
