import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Line from '../UI/Line/Line';
import Button from '../UI/Button/Button';
import Animation from '../../hoc/Animation/Animation';

import * as classes from './Informative.module.scss';

const Informative = ({ id, image, main, description, linkTo, linkText, reversed, children }) => (
	<div className={[classes.Informative, reversed ? classes.Reverse : ''].join(' ')} id={id}>
		<div className={classes.Image}>
			<Animation style={{ width: '100%', height: '100%' }}>
				<GatsbyImage className={classes.Photo} image={getImage(image)} alt={main} />
			</Animation>
		</div>

		<div className={classes.Info}>
			<div className={classes.Wrapper}>
				<Animation style={{ width: '100%', margin: '0' }}>
					<h1 className={classes.Main}>{main}</h1>
					<Line color='#B87332' style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }} />
					{description && <p className={classes.Description}>{description}</p>}
				</Animation>

				{children && <div className={classes.Content}>{children}</div>}
			</div>

			{linkTo && (
				<Animation>
					<div className={classes.Button}>
						<Button linkTo={linkTo}>{linkText}</Button>
					</div>
				</Animation>
			)}
		</div>
	</div>
);

export default Informative;
