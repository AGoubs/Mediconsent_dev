import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import axios from 'axios';

class Dashboard extends React.Component {
    state = {
        hospital: [],
        exams: [],
        opinions: [],
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
        total: 0,
        average: 0,
        total_exams: 0
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const hospital = res.data;
                this.setState({ hospital });
            })

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const exams = res.data;
                this.setState({ exams });
            })

        axios.get(`http://194.183.220.233:9095/Mediconsent/rest/avis`)
            .then(res => {
                const opinions = res.data;
                this.setState({ opinions });
            })
    }

    render() {

        const examens = this.state.exams.map((exam, index) =>
            <tr className="unread" key={index} >
                <td>
                    <h6 className="mb-1">{exam.name.substring(0, 17)}</h6>
                    <p className="m-0">{exam.email.substring(0, 69)}...</p>
                </td>
                <td>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />{exam.username}</h6>
                </td>
            </tr >
        )


        const etablissement = this.state.hospital.slice(0, 1).map((value, index) =>
            <h4 key={index}>{value.title}</h4>
            // <h4>Clinique du Parc</h4>
        )


        this.state.exams.forEach((exam) => {
            this.state.total_exams++;
        })

        this.state.opinions.map((opinion, index) => {
            this.state.average += opinion.notes;
            switch (opinion.notes) {
                case 5:
                    this.state.five++
                    break;
                case 4:
                    this.state.four++
                    break;
                case 3:
                    this.state.three++
                    break;
                case 2:
                    this.state.two++
                    break;
                case 1:
                    this.state.one++
                    break;
                default:
                    break;
            }
        })

        this.state.total = this.state.five + this.state.four + this.state.three + this.state.two + this.state.one;

        this.state.five_pourcent = (this.state.five / this.state.total) * 100;
        this.state.five_pourcent = this.state.five_pourcent + '%';

        this.state.four_pourcent = (this.state.four / this.state.total) * 100;
        this.state.four_pourcent = this.state.four_pourcent + '%';

        this.state.three_pourcent = (this.state.three / this.state.total) * 100;
        this.state.three_pourcent = this.state.three_pourcent + '%';

        this.state.two_pourcent = (this.state.two / this.state.total) * 100;
        this.state.two_pourcent = this.state.two_pourcent + '%';

        this.state.one_pourcent = (this.state.one / this.state.total) * 100;
        this.state.one_pourcent = this.state.one_pourcent + '%';

        if (this.state.average != 0) {
            this.state.average = this.state.average / this.state.total;
        }
        return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                        <Card className='card-event'>
                            <Card.Header>
                                <Card.Title as='h5'>Etablissement</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {etablissement}
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
                                        <h3 className="f-w-300 m-b-0"><i className="feather icon-smartphone text-c-red  f-30 float-right" /> 06 51 02 95 59</h3>
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