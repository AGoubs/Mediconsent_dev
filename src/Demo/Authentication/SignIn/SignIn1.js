import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import axios from "axios";
class SignUp1 extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          loginErrors: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { secu, password } = this.state;
        console.log(secu);

        // axios
        //   .post(
        //     "http://localhost:3001/sessions",
        //     {
        //       user: {
        //         secu: secu,
        //         password: password
        //       }
        //     },
        //     { withCredentials: true }
        //   )
        //   .then(response => {
        //     if (response.data.logged_in) {
        //       this.props.handleSuccessfulAuth(response.data);
        //     }
        //   })
        //   .catch(error => {
        //     console.log("login error", error);
        //   });
        event.preventDefault();
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
                                            onChange={this.handleChange}
                                             />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" name="mot_de_passe_utilisateur" className="form-control" placeholder="Mot de passe"
                                            value={this.state.password}
                                            onChange={this.handleChange}
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