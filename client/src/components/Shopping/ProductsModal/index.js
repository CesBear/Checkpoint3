import React, {Component} from 'react';
import {Modal, Button} from 'react-materialize';
import ModalTable from "./Table";


class ProductModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    header='Provider products'
                    fixedFooter
                    trigger={
                        <Button>Songs!</Button>
                    }>
                    <ModalTable/>
                </Modal>
            </div>
        );
    }
}

export default ProductModal;