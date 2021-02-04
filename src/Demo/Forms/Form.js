import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

class Form extends React.Component {

    state = {
        type_form: this.props.type == "Scanner" ? 1 : 2
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.get(`http://194.183.220.233:9095/Mediconsent/rest/questions/formulaire/${this.state.type_form}`)
            .then(res => {
                this.props.history.push({
                    pathname: '/questions',
                    state: { detail: res.data }
                  })
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

export default withRouter(Form);
