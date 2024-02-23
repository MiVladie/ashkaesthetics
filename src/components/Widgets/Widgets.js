import React from 'react';

import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Line from '../UI/Line/Line';
import Animation from '../../hoc/Animation/Animation';

import * as classes from './Widgets.module.scss';

const Widgets = ({ data }) => (
	<div className={classes.Widgets}>
		{data.map((widget) => (
			<div className={classes.Widget} key={widget.name}>
				<Animation style={{ width: '100%', margin: '0' }}>
					<div className={classes.Icon} onClick={() => navigate(widget.url)}>
						<GatsbyImage className={classes.Photo} image={getImage(widget.icon)} alt={widget.name} />
					</div>
				</Animation>

				<Animation style={{ width: '100%', margin: '0' }}>
					<p className={classes.Name} onClick={() => navigate(widget.url)}>
						{widget.name}
					</p>
					<Line color='#B87332' style={{ marginBottom: '0' }} />
				</Animation>
			</div>
		))}
	</div>
);

export default Widgets;
