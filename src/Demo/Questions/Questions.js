import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {
    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Question N°</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Question</Form.Label>
                                                <Form.Control as="textarea" rows="2" required />
                                            </Form.Group>
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check inline label="Oui" type={type} id={`inline-${type}-1`} />
                                                    <Form.Check inline label="Non" type={type} id={`inline-${type}-2`} />
                                                </div>
                                            ))}
                                            <Button variant="primary" type="submit">
                                                Enregistrer
                                            </Button>
                                        </Form>
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

export default FormsElements;
