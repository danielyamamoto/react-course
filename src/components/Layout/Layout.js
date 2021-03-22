import React from 'react';
import Aux from '../../hoc/Aux';
import classes from '../../assets/css/style.css'

const layout = props => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;