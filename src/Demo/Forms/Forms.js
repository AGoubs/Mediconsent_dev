import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import Form from "./Form"
//axios for API
import axios from 'axios';


class Forms extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Choisir le questionnaire</Card.Title>
                            </Card.Header>
                        </Card>
                        <Form type="Scanner" />
                        <Form type="Radio" />
                    </Col >
                </Row >
            </Aux >
        );
    }
}

export default Forms;
