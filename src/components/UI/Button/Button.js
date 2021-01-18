import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

const button = ({ children, linkTo, centered }) => (
    <Link
        className = { classes.Button }
        to = { linkTo }
        style = {{ margin: centered ? '0 auto' : '0' }}>
        { children }
    </Link>
);

export default button;
