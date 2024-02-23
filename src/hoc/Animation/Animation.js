import React, { useState, useEffect, useRef } from 'react';

import * as classes from './Animation.module.scss';

const Animation = ({ style, className, children }) => {
	const [animate, setAnimate] = useState(false);

	const element = useRef(null);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		animationScroll();

		window.addEventListener('scroll', animationScroll);

		return () => {
			window.removeEventListener('scroll', animationScroll);
		};
	}, []);

	function animationScroll() {
		if (animate) return;

		let percentage = 15;

		if (window.screen.width >= 720) percentage = 20;

		let visible = (
			((window.screen.height - element.current.getBoundingClientRect().top) * 100) /
			window.screen.height
		).toFixed(0);

		if (visible >= percentage) setAnimate(true);
	}

	return (
		<div className={[animate ? classes.Animation : classes.Hide, className].join(' ')} style={style} ref={element}>
			{children}
		</div>
	);
};

export default Animation;
