import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

//Dropzone for import
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

//axios for API
import axios from 'axios';

// //Pnotify for notification
// import { defaultModules, success } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
// import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';



// defaultModules.set(PNotifyBootstrap4, {});

// specify upload params and url for your files
const getUploadParams = ({ meta }) => { return { url: 'https://localhost/mediconsent' } }


// called every time a file's `status` changes
const handleChangeStatus = ({ meta, file }, status) => { }
// test
// receives array of files that are done uploading when submit button is clicked
const handleSubmit = (files, allFiles) => {
    console.log(files);
    // success({
    //     title: 'Succès !',s
    //     text: 'Importation réussie'
    // });
    allFiles.forEach(f => f.remove())
}


class FormsElements extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        const elements = this.state.persons.map((person, index) =>
            <tr key={index}><th scope="row">{person.id}</th><td>{person.title}</td><td>{person.body}</td></tr>
        )
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Importer des rendez-vous</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            onSubmit={handleSubmit}
                                            inputContent="Glisser ou importer votre fichier"
                                            inputWithFilesContent="Ajouter un fichier"
                                            submitButtonContent="Valider"
                                            accept=".xlsx, .ods, .csv"
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Title</th>
                                                    <th>Body</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {elements}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card >
                    </Col >
                </Row >
            </Aux >
        );
    }
}

export default FormsElements;
