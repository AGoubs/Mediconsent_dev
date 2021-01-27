import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import axios from 'axios';


class BootstrapTable extends React.Component {
    state = {
        avis: []
    }

    componentDidMount() {
        axios.get(`http://194.183.220.41:9095/Mediconsent/rest/avis`)
            .then(res => {
                const avis = res.data;
                this.setState({ avis });
            })
    }

    render() {
        const elements = this.state.avis.map((avis, index) =>
            <tr key={index}><th scope="row">{avis.notes} / 5</th><td>{avis.commentaire}</td></tr>
        )

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Liste des avis client</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Notes</th>
                                            <th>Commentaire</th>
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