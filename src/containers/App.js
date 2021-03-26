import React, { Component } from 'react';
import classes from "./App.module.scss";
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
    render() {
        return(
            <div className={classes.app}>
                <Layout>
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;