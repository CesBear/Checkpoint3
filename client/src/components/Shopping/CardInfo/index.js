import React, {Component} from 'react';
import {CardTitle, Card, Chip, Col, Icon, Row, Tag} from "react-materialize";

class CardInfo extends Component {

    render() {
        return (
            <Card header={<CardTitle reveal image={"default.png"} waves='light'/>}
                  title="Provider Products"
                  reveal={<Row>
                      <Col s={12}>
                          <Chip>
                              <Icon>build</Icon>
                               Llave Allen
                          </Chip>
                          <Tag>Disponible</Tag>
                      </Col>
                  </Row>}>
                <p>Click to check products</p>
            </Card>
        );
    }
}

export default CardInfo;