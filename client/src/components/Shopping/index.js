import React, {Component} from 'react';
import CardInfo from "./CardInfo";

class Shopping extends Component {

    render(){
        return (
            <div>
            <h3>Hola!  'XXXXXX'  </h3>
                <p>Encuentra los albums y canciones de  tus artistas favoritos y no olvides añádirlos a tu orden de compra</p>
                <br/>
                <div className='spacing'>
                    <CardInfo/>
                </div>
            </div>
        );
    }
}

export default Shopping;

