import React from 'react';

import { useHistory } from 'react-router-dom';

import Line from '../UI/Line/Line';
import Animation from '../../hoc/Animation/Animation';

import classes from './Widgets.module.scss';

const Widgets = ({ data }) => {
    const history = useHistory();

    const navigateToLink = (url) => {
        history.push(url);
    };

    return (
        <div className = { classes.Widgets }>
            { data.map(widget =>
                <div className = { classes.Widget } key = { widget.name }>
                    <Animation style = {{ width: '100%', margin: '0' }}>
                        <div className = { classes.Icon } onClick = { () => navigateToLink(widget.url) }>
                            <img src = { widget.icon } alt = { widget.name } />
                        </div>
                    </Animation>
                    
                    <Animation style = {{ width: '100%', margin: '0' }}>
                        <p className = { classes.Name } onClick = { () => navigateToLink(widget.url) }>{ widget.name }</p>
                        <Line color = '#B87332' style = {{ marginBottom: '0' }} />
                    </Animation>
                </div>) }
        </div>
    );
};

export default Widgets;
