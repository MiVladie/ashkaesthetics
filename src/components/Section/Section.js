import React from 'react';

import Line from '../UI/Line/Line';
import Button from '../UI/Button/Button';
import Animation from '../../hoc/Animation/Animation';

import classes from './Section.module.scss';

const section = ({ children, id, background, description, linkTo, linkText }) => (
    <section className = { classes.Section } style = {{ backgroundColor: background }} id = { id }>
        { children }
        { description && <Animation><p className = { classes.Description }>{ description }</p></Animation> }
        { linkTo && <Animation><Line color = '#B87332' /></Animation> }
        { linkTo && <Animation><Button linkTo = { linkTo } centered>{ linkText }</Button></Animation> }
    </section>
);

export default section;
