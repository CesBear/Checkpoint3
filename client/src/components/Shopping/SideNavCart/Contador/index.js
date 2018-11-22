import React, { Component } from 'react';
import  '../../../../assets/index.css';
export class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = { product: 0 };
    }

    btnAdd = () =>
    {
        this.setState({
            product: this.state.product + 1
        });
    };

    btnRemove = () =>
    {
        if (this.state.product >= 1) {

            this.setState({
                product: this.state.product - 1
            });
        }
        else if (this.state.product <= 0) {
            alert('No se puede poner numeros negativos');
        }

    };

    render() {
        return (
            <span>
                <button className='counterBtn' onClick={this.btnRemove}>-</button>
                { this.state.product }
                <button className='counterBtn' onClick={this.btnAdd}>+</button>
            </span>

        );
    }
}

export default Contador;
