import React, {Component} from 'react';
import CardInfo from "./CardInfo"

class Shopping extends Component {

    componentDidMount() {
    }


    render() {
        return (
            <div>
                <h3>Providers / Products</h3>
                <div className="spacing">
                    <CardInfo/>
                </div>
            </div>
        );
    }
}

export default Shopping;