import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Banner.module.css';

const banner = ({ image, imageAlt, main, description, linkLeftTo, linkLeftText, linkRightTo, linkRightText, scrollTo }) => (
    <section className = { classes.Banner }>
        <div className = { classes.Image }>
            <img src = { image } alt = { imageAlt } />
        </div>

        <div className = { classes.Wrapper }>
            <h1 className = { classes.Main }>{ main }</h1>
            <div className = { classes.Line } />
            <p className = { classes.Description }>{ description }</p>
        </div>

        <div className = { classes.Links }>
            { linkLeftTo && <Link className = { classes.Left } to = { linkLeftTo }>{ linkLeftText }</Link> }
            { linkRightTo && <a className = { classes.Right } href = { linkRightTo } target = '_blank' rel = 'noopener noreferrer'>{ linkRightText }</a> }
        </div>

        <a className = { classes.Scroll } onClick = { () => document.getElementById(scrollTo).scrollIntoView() }>
            <span className = { classes.Circle } />
            <span className = { classes.Knob } />
        </a>
    </section>
);

export default banner;
