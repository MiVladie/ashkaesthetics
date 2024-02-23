import React from 'react';

import Animation from '../../../hoc/Animation/Animation';

import * as classes from './Descriptive.module.scss';

const Descriptive = ({ data }) => (
	<div className={classes.Descriptive}>
		{data.map((paragraph) => (
			<div className={classes.Paragraph} key={paragraph.description}>
				<Animation>
					<h2 className={classes.Name}>{paragraph.name}</h2>
				</Animation>
				<Animation>
					<p className={classes.Description}>{paragraph.description}</p>
				</Animation>
			</div>
		))}
	</div>
);

export default Descriptive;
