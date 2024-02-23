import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Animation from '../../hoc/Animation/Animation';

import * as classes from './Preface.module.scss';

const Preface = ({ image, main }) => (
	<div className={classes.Preface}>
		<GatsbyImage className={classes.Image} image={getImage(image)} alt={main} />

		<Animation>
			<h1 className={classes.Main}>{main}</h1>
		</Animation>
	</div>
);

export default Preface;
