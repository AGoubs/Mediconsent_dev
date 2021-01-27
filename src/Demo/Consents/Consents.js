import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import axios from 'axios';

class BootstrapTable extends React.Component {
    state = {
        consentements: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const consentements = res.data;
                this.setState({ consentements });
            })
    }

    render() {
        const elements = this.state.consentements.map((consentements, index) =>
            <tr key={index}><th scope="row">{consentements.userId} / 5</th><td>{consentements.body}</td></tr>
        )
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {elements}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;