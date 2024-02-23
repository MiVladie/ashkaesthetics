import React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as classes from './Banner.module.scss';

const Banner = ({
	image,
	imageAlt,
	main,
	description,
	linkLeftTo,
	linkLeftText,
	linkRightTo,
	linkRightText,
	scrollTo
}) => {
	const scrollHandler = () => {
		document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className={classes.Banner}>
			<div className={classes.Image}>
				<GatsbyImage image={getImage(image)} alt={imageAlt} className={classes.Photo} />
			</div>

			<div className={classes.Wrapper}>
				{main && <h1 className={classes.Main}>{main}</h1>}
				{main && <div className={classes.Line} />}
				{description && <p className={classes.Description}>{description}</p>}
			</div>

			<div className={classes.Links}>
				{linkLeftTo && (
					<Link className={classes.Left} to={linkLeftTo}>
						{linkLeftText}
					</Link>
				)}
				{linkRightTo && (
					<a className={classes.Right} href={linkRightTo} target='_blank' rel='noopener noreferrer'>
						{linkRightText}
					</a>
				)}
			</div>

			{scrollTo && (
				<button className={classes.Scroll} onClick={scrollHandler}>
					<span className={classes.Circle} />
					<span className={classes.Knob} />
				</button>
			)}
		</section>
	);
};

export default Banner;
