import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Créer un compte</h3>
                                <div className="input-group mb-3">
                                    <input type="text" name="nom_utilisateur" className="form-control" placeholder="Nom"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="prenom_utilisateur" className="form-control" placeholder="Prénom"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="numero_securite_sociale" className="form-control" placeholder="Numéro de sécurité sociale"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" name="mot_de_passe_utilisateur" className="form-control" placeholder="Mot de passe"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" type="submit">Créer un compte</button>
                                <p className="mb-0 text-muted">Déjà un compte ? <NavLink to="/auth/signin-1">Se connecter</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;