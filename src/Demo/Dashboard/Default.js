import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import axios from 'axios';

class Dashboard extends React.Component {
    state = {
        hospital: [],
        exams: [],
        five: 0,
        five_pourcent: 0,
        four: 0,
        four_pourcent: 0,
        three: 0,
        three_pourcent: 0,
        two: 0,
        two_pourcent: 0,
        one: 0,
        one_pourcent: 0,
        average: 0,
        total_exams: 0,
        total_notes: 0,
        total: 0,
    }

    componentDidMount() {
        axios.get(`http://194.183.220.233:9095/Mediconsent/rest/etablissement/utilisateur/7`)
            .then(res => {
                const hospital = res.data;
                this.setState({ hospital });

                axios.get(`http://194.183.220.233:9095/Mediconsent/rest/examens/etablissement/${hospital.id_etablissement}`)
                    .then(res => {
                        const exams = res.data;
                        this.setState({ exams });
                        this.setState({ total_exams: this.state.exams.length });

                        let total_notes = 0;
                        exams.map((exam) => {
                            total_notes += exam.avis.notes
                            switch (exam.avis.notes) {
                                case 5:
                                    this.setState({ five: this.state.five + 1 })
                                    break;
                                case 4:
                                    this.setState({ four: this.state.four + 1 })
                                    break;
                                case 3:
                                    this.setState({ three: this.state.three + 1 })
                                    break;
                                case 2:
                                    this.setState({ two: this.state.two + 1 })
                                    break;
                                case 1:
                                    this.setState({ one: this.state.one + 1 })
                                    break;
                                default:
                                    break;
                            }
                        })
                        this.setState({ total_notes: total_notes })
                        this.setState({ total: this.state.five + this.state.four + this.state.three + this.state.two + this.state.one })

                        this.setState({ five_pourcent: ((this.state.five / this.state.total) * 100) + '%' })
                        this.setState({ four_pourcent: ((this.state.four / this.state.total) * 100) + '%' })
                        this.setState({ three_pourcent: ((this.state.three / this.state.total) * 100) + '%' })
                        this.setState({ two_pourcent: ((this.state.two / this.state.total) * 100) + '%' })
                        this.setState({ one_pourcent: ((this.state.one / this.state.total) * 100) + '%' })

                        this.setState({ average: total_notes / exams.length })

                    })
            })
    }

    render() {
        const examens = this.state.exams.map((exam, index) =>
            <tr className="unread" key={index} >
                <td>
                    <h6 className="mb-1">{exam.type_examen.formulaire.libelle_formulaire}</h6>
                    <p className="m-0">...</p>
                </td>
                <td>
                    <h6 className="text-muted float-right mr-5"><i className="fa fa-star text-c-yellow f-10 m-r-15" />{exam.avis.notes} / 5</h6>
                </td>
            </tr >
        )

        return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                        <Card className='card-event'>
                            <Card.Header>
                                <Card.Title as='h5'>Etablissement</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h4>{this.state.hospital.nom_etablissement}</h4>
                                <i className="fa fa-hospital-o text-c-purple f-50" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Nombre d'examen</h6>
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="f-w-300 m-b-0">{this.state.total_exams}
                                            <i className="feather icon-user-check text-c-green f-30 float-right" />
                                        </h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Nombre d'avis</h6>
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="f-w-300 m-b-0"><i className="feather icon-star text-c-yellow f-30 float-right" /> {this.state.total}</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Téléphone de l'établissement</h6>
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="f-w-300 m-b-0"><i className="feather icon-smartphone text-c-red  f-30 float-right" /> {this.state.hospital.telephone_etablissement}</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Examens</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                        {examens}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Avis</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center m-b-20">
                                    <div className="col-6">
                                        <h2 className="f-w-300 d-flex align-items-center float-left m-0">{this.state.average} <i className="fa fa-star f-10 m-l-10 text-c-yellow" /></h2>
                                    </div>
                                    <div className="col-6">
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />5</h6>
                                        <h6 className="align-items-center float-right">{this.state.five}</h6>
                                        <div className="progress m-t-30 m-b-20" style={{ height: '6px' }}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: this.state.five_pourcent }} aria-valuenow={this.state.five_pourcent} aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />4</h6>
                                        <h6 className="align-items-center float-right">{this.state.four}</h6>
                                        <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: this.state.four_pourcent }} aria-valuenow={this.state.four_pourcent} aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />3</h6>
                                        <h6 className="align-items-center float-right">{this.state.three}</h6>
                                        <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: this.state.three_pourcent }} aria-valuenow={this.state.three_pourcent} aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />2</h6>
                                        <h6 className="align-items-center float-right">{this.state.two}</h6>
                                        <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: this.state.two_pourcent }} aria-valuenow={this.state.two_pourcent} aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />1</h6>
                                        <h6 className="align-items-center float-right">{this.state.one}</h6>
                                        <div className="progress m-t-30  m-b-5" style={{ height: '6px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: this.state.one_pourcent }} aria-valuenow={this.state.one_pourcent} aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Aux>
        );
    }
}

export default Dashboard;