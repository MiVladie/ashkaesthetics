import React from 'react';

import Line from '../UI/Line/Line';
import Button from '../UI/Button/Button';
import Animation from '../../hoc/Animation/Animation';

import * as classes from './Section.module.scss';

const Section = ({ children, id, background, description, linkTo, linkText }) => (
	<section className={classes.Section} style={{ backgroundColor: background }} id={id}>
		{children}
		{description && (
			<Animation>
				<p className={classes.Description}>{description}</p>
			</Animation>
		)}
		{linkTo && (
			<Animation>
				<Line color={description ? '#B87332' : 'transparent'} />
			</Animation>
		)}
		{linkTo && (
			<Animation>
				<Button linkTo={linkTo} centered>
					{linkText}
				</Button>
			</Animation>
		)}
	</section>
);

export default Section;
