import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import axios from "axios";
class SignUp1 extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            secu: '',
            password: ''
        };
        this.handleChangeSecu = this.handleChangeSecu.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeSecu(e) {
        this.setState({ secu: e.target.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
            .post(
                `http://194.183.220.233:9095/Mediconsent/rest/checkLogin/${this.state.secu}/${this.state.password}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                },
            )
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("login error", error);
            });
    }

    render() {
        return (
            <Aux>
                <Breadcrumb />
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon" />
                                </div>
                                <form action="" method="post" onSubmit={this.handleSubmit}>
                                    <h3 className="mb-4">Connexion</h3>
                                    <div className="input-group mb-3">
                                        <input type="text" name="numero_securite_sociale" className="form-control" placeholder="Numéro de sécurité sociale"
                                            value={this.state.secu}
                                            onChange={(e) => { this.handleChangeSecu(e) }}
                                        />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" name="mot_de_passe_utilisateur" className="form-control" placeholder="Mot de passe"
                                            value={this.state.password}
                                            onChange={(e) => { this.handleChangePassword(e) }}
                                        />
                                    </div>
                                    <div className="form-group text-left">
                                        <div className="checkbox checkbox-fill d-inline">
                                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Enregistrer mes informations</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary shadow-2 mb-4" type="submit"> Se connecter</button>
                                    <p className="mb-0 text-muted">Pas de compte ? <NavLink to="/auth/signup-1">Créer un compte</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;