import React from 'react';
import Question from "./Question.js"
import axios from 'axios';

class Questions extends React.Component {
    state = {
        questions: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const questions = res.data;
                this.setState({ questions });
            })
    }


    render() {
        const elements = this.state.questions.map((question, index) =>
           <Question key={index} id={question.id} title={question.title}/>
        )
        return (
            <div>{elements}</div>
        );
    }
}

export default Questions;
