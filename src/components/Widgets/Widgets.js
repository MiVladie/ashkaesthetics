import React from 'react';

import Line from '../UI/Line/Line';

import classes from './Widgets.module.css';

const widgets = ({ data }) => (
    <div className = { classes.Widgets }>
        { data.map(widget =>
            <div className = { classes.Widget } key = { widget.name }>
                <div className = { classes.Icon }>
                    <img src = { widget.icon } alt = { widget.name } />
                </div>
                <p className = { classes.Name }>{ widget.name }</p>
                <Line color = '#B8925D' style = {{ marginBottom: '0' }} />
            </div>) }
    </div>
);

export default widgets;
