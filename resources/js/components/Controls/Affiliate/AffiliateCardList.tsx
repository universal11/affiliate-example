import React from "react";
import { AffiliateCardListItem } from "./AffiliateCardListItem";

interface AffiliateCardListProps {
    affiliates?: Array<any>;
    itemContainerClassName?: string;
    itemClassName?: string;
    className?: string;
}

export class AffiliateCardList extends React.Component<AffiliateCardListProps> {

    static defaultProps = {
        affiliates: [],
        itemContainerClassName: "",
        itemClassName: "",
        className: "",
        showActions: true
    };
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
  
        const listItems = this.props.affiliates.map( (affiliate) => {
            return (
                <div key={affiliate.id} className={this.props.itemContainerClassName}>
                    <AffiliateCardListItem 
                        key={affiliate.id} 
                        affiliate={affiliate} 
                        className={this.props.itemClassName}
                    />
                </div>
            );
        });

        return (
            <div className={`${this.constructor.name} ${this.props.className}`}>
                {listItems}
            </div>          
        );
    }

}
