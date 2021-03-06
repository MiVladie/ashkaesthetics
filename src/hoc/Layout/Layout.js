import React from 'react';

import classes from './Layout.module.scss';
import './reset.css';

const layout = ({ children }) => (
    <div className = { classes.Layout }>
        { children }
    </div>
);

export default layout;
