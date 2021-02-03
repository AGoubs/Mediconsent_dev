import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import Form from "./Form"
//axios for API
import axios from 'axios';


class Forms extends React.Component {
    state = {
        forms: []
    }

    constructor(props) {
        super(props);
        
      }


    componentDidMount() {
        console.log(this.props);


        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const forms = res.data;
                this.setState({ forms });
            })
    }

    render() {


        const elements = this.state.forms.map((form, index) =>
            <Form key={index} type={form.name} />

        )
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Choisir le questionnaire</Card.Title>
                            </Card.Header>
                        </Card>
                        {elements}
                    </Col >
                </Row >
            </Aux >
        );
    }
}

export default Forms;
