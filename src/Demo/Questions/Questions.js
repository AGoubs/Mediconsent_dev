import React from 'react';
import Question from "./Question.js"
import axios from 'axios';
import { withRouter } from "react-router-dom";

class Questions extends React.Component {
    state = {
        questions: []
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({ questions: this.props.location.state.detail });
        }
        else {
            this.props.history.push({ pathname: '/forms' })
        }
    }


    render() {
        const elements = this.state.questions.map((question, index) =>
            <Question key={index} id={question.id_question} title={question.libelle_question} checked={question.checkbox} />
        )
        return (
            <div>{elements}</div>
        );
    }
}

export default withRouter(Questions);
