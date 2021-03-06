import React from 'react';

import classes from './Line.module.scss';

const line = ({ color, style }) => (
    <div className = { classes.Line } style = {{ backgroundColor: color, ...style }} />
);

export default line;
