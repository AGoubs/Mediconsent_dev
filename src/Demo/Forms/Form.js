import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

class Form extends React.Component {

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.props.type
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5">Questionnaire {this.props.type}</Card.Title>
                        <Button variant="primary" type="submit" className="float-right">Sélectionner</Button>
                    </Card.Body>
                </Card>
            </form>
        );
    }
}

export default Form;
