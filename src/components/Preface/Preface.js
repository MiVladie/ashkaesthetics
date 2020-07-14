import React from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Preface.module.css';

const preface = ({ image, main }) => (
    <div className = { classes.Preface }>
        <img className = { classes.Image } src = { image } alt = { main } />
        <Animation><h1 className = { classes.Main }>{ main }</h1></Animation>
    </div>
);

export default preface;
