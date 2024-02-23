import React from 'react';

import * as classes from './Line.module.scss';

const Line = ({ color, style }) => <div className={classes.Line} style={{ backgroundColor: color, ...style }} />;

export default Line;
