import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';

class ContactReact extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = event => {
        event.preventDefault();

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Daniel Yamamoto',
                address: {
                    street: 'Burgerland',
                    zipCode: '12345',
                    country: 'Mexico'
                },
                email: 'burger@land.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        const form = this.state.loading ? <Spinner /> : 
            <form>
                <input className={classes.input} type="text" name="name" placeholder="Your name" />
                <input className={classes.input} type="email" name="email" placeholder="Your email" />
                <input className={classes.input} type="text" name="street" placeholder="Street" />
                <input className={classes.input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="button__success" clicked={this.orderHandler} >ORDER</Button>
            </form>;

        return(
            <div className={classes.contactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactReact;