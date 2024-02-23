import React, { useState } from 'react';

import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';

import Animation from '../../hoc/Animation/Animation';

import * as classes from './Gallery.module.scss';

const Gallery = ({ data }) => {
	const [picture, setPicture] = useState(null);

	function openModal(index) {
		document.body.style.overflow = 'hidden';
		setPicture(index);
	}

	function closeModal(element) {
		if (element === document.getElementsByClassName(classes.Modal)[0]) {
			document.body.style.overflow = 'auto';
			setPicture(null);
		}
	}

	function previousPictureHandler() {
		if (picture - 1 >= 0) setPicture(picture - 1);
		else setPicture(data.length - 1);
	}

	function nextPictureHandler() {
		if (picture + 1 < data.length) setPicture(picture + 1);
		else setPicture(0);
	}

	return (
		<div className={classes.Gallery}>
			{data.map((picture, index) => (
				<div className={classes.Picture} key={index}>
					<Animation style={{ margin: '0' }}>
						<GatsbyImage className={classes.Image} image={getImage(picture.image)} alt={picture.alt} />
					</Animation>

					<div className={classes.Expand} onClick={() => openModal(index)}>
						Click to expand
					</div>
				</div>
			))}

			{picture != null && (
				<div className={classes.Modal} onClick={(event) => closeModal(event.target)}>
					<div className={classes.Wrapper}>
						<button className={classes.Previous} onClick={previousPictureHandler}>
							<StaticImage
								className={classes.Arrow}
								width={35}
								height={35}
								src='../../assets/icons/arrow.png'
								alt='arrow left'
							/>
						</button>

						<button
							className={classes.Close}
							onClick={() => closeModal(document.getElementsByClassName(classes.Modal)[0])}>
							<StaticImage
								className={classes.Icon}
								width={15}
								height={15}
								src='../../assets/icons/close.png'
								alt='close'
							/>
						</button>

						<GatsbyImage
							className={classes.FullImage}
							image={getImage(data[picture].image)}
							alt={data[picture].alt}
						/>

						<button className={classes.Next} onClick={nextPictureHandler}>
							<StaticImage
								className={classes.Arrow}
								width={35}
								height={35}
								src='../../assets/icons/arrow.png'
								alt='arrow right'
							/>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
