import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner'

import classes from './Auth.module.scss';
import * as actions from '../../store/actions/index';
import { updateObject } from '../../shared/utility';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail Adress',
                    required: true,
                    pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}$'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                    required: true,
                    pattern: '[A-Za-z.#@_-]{6,20}'
                },
                value: ''
            }
        },
        isSignup: true    
    }

    componentDidMount() {
        if(!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls =  updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {value: event.target.value})
        });
        this.setState({controls: updatedControls}); // Update the state
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.config.value}
                changed={event => this.inputChangedHandler(event, formElement.id)}
            />
        ));

        if(this.props.loading) {
            form = <Spinner />;
        }

        const errorMessage = this.props.error ? <p>{this.props.error.message}</p> : null; // Getting error message

        return (
            <div className={classes.auth}>
                {this.props.isAuthenticated ? <Redirect to={this.props.authRedirectPath} /> : null}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="button__success">SUBMIT</Button>
                </form>
                <Button clicked={this.switchAuthModeHandler} btnType="button__danger">
                    SWICH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);