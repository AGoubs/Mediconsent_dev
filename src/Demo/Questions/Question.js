import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import axios from 'axios';

class Question extends React.Component {

    state = {
        libelle_question: '',
        checkbox: false,
        message_validation: '',
        message_erreur: ''
    };

    libelle = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        axios.put(`http://194.183.220.233:9095/Mediconsent/rest/question/save`, 
        {
            id_question: this.props.id,
            libelle_question: this.libelle.current.value
        })
            .then(res => {
                this.setState({message_validation: "Valeur enregistrée avec succès"})
            })
            .catch(error => {
                this.setState({message_erreur: "Echec de l'enregistrement"})
            });
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Question N° {this.props.id}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId={this.props.id}>
                                                <Form.Label>Question</Form.Label>
                                                <Form.Control as="textarea" rows="2" required defaultValue={this.props.title}
                                                    ref={this.libelle}
                                                />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Enregistrer
                                            </Button>
                                        </form>
                                        <div className="text-success">{this.state.message_validation}</div>
                                        <div className="text-danger">{this.state.message_erreur}</div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Question;
