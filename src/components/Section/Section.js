import React from 'react';

import Line from '../UI/Line/Line';
import Button from '../UI/Button/Button';

import classes from './Section.module.css';

const section = ({ children, id, background, description, linkTo, linkText }) => (
    <section className = { classes.Section } style = {{ backgroundColor: background }} id = { id }>
        { children }
        { description && <p className = { classes.Description }>{ description }</p> }
        { linkTo && <Line color = '#B8925D' /> }
        { linkTo && <Button linkTo = { linkTo } centered>{ linkText }</Button> }
    </section>
);

export default section;
