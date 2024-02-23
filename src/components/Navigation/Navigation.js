import React, { useState } from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';

import * as classes from './Navigation.module.scss';

const Navigation = () => {
	const [reveal, setReveal] = useState('');

	function menuHandler(turn) {
		if (turn === 'on') {
			document.body.style.overflow = 'hidden';
			setReveal(classes.Reveal);
		}

		if (turn === 'off') {
			document.body.style.overflow = 'visible';
			setReveal('');
		}

		if (turn === 'switch') {
			document.body.style.overflow = reveal === classes.Reveal ? 'visible' : 'hidden';
			setReveal(reveal === classes.Reveal ? '' : classes.Reveal);
		}
	}

	const { menu, close } = useStaticQuery(graphql`
		query {
			menu: file(relativePath: { eq: "assets/icons/menu.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			close: file(relativePath: { eq: "assets/icons/close.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	let upper = (
		<div className={classes.Upper}>
			<div className={classes.Social}>
				<a className={classes.Facebook} href='https://www.facebook.com/ashkaesthetics/' target='__blank'>
					<StaticImage src='../../assets/icons/facebook.png' alt='facebook' placeholder='none' />
				</a>

				<a className={classes.Instagram} href='https://www.instagram.com/ashk_aesthetics/' target='__blank'>
					<StaticImage src='../../assets/icons/instagram.png' alt='instagram' placeholder='none' />
				</a>
			</div>

			<Link to='/' className={classes.Logo}>
				<StaticImage width={85} height={50} src='../../assets/icons/logo.png' alt='logo' placeholder='none' />
			</Link>

			<div className={classes.Contacts}>
				<div
					className={classes.Contact}
					onClick={() => typeof window !== 'undefined' && window.location.assign('tel:07768 105 096')}>
					<StaticImage
						className={classes.Icon}
						src='../../assets/icons/phone.png'
						alt='phone'
						placeholder='none'
					/>
					<p className={classes.Info}>07768 105 096</p>
				</div>

				<div
					className={classes.Contact}
					onClick={() =>
						typeof window !== 'undefined' && window.location.assign('mailto:ask@ashk-aesthetics.co.uk')
					}>
					<StaticImage
						className={classes.Icon}
						src='../../assets/icons/email.png'
						alt='email'
						placeholder='none'
					/>
					<p className={classes.Info}>ask@ashk-aesthetics.co.uk</p>
				</div>
			</div>
		</div>
	);

	let lower = (
		<nav className={[classes.Lower, reveal].join(' ')}>
			<div className={classes.Social}>
				<a className={classes.Facebook} href='https://www.facebook.com/ashkaesthetics' target='__blank'>
					<StaticImage src='../../assets/icons/facebook.png' alt='facebook' placeholder='none' />
				</a>

				<a className={classes.Instagram} href='https://www.instagram.com/ashk_aesthetics/' target='__blank'>
					<StaticImage src='../../assets/icons/instagram.png' alt='instagram' placeholder='none' />
				</a>

				<a className={classes.Phone} href='tel:07768 105 096'>
					<StaticImage src='../../assets/icons/phone.png' alt='phone' placeholder='none' />
				</a>
			</div>

			<Link to='/' className={classes.Logo} onClick={() => menuHandler('off')}>
				<StaticImage width={85} height={50} src='../../assets/icons/logo.png' alt='logo' placeholder='none' />
			</Link>

			<ul className={classes.Links}>
				<li className={classes.Link}>
					<Link to='/' activeClassName={classes.Active} onClick={() => menuHandler('off')}>
						Home
						<div className={classes.Underline} />
					</Link>
				</li>

				<li className={classes.Link}>
					<Link to='/services' activeClassName={classes.Active} onClick={() => menuHandler('off')}>
						Services
						<div className={classes.Underline} />
					</Link>
				</li>

				<li className={classes.Link}>
					<Link to='/gallery' activeClassName={classes.Active} onClick={() => menuHandler('off')}>
						Gallery & Testimonials
						<div className={classes.Underline} />
					</Link>
				</li>

				<li className={classes.Link}>
					<Link to='/find-us' activeClassName={classes.Active} onClick={() => menuHandler('off')}>
						Find us
						<div className={classes.Underline} />
					</Link>
				</li>

				<li className={[classes.Link, classes.Book].join(' ')}>
					<a
						href='https://fresha.com/ashk-aesthetics-r6gk2ijg'
						onClick={() => menuHandler('off')}
						target='__blank'>
						Book now
					</a>
				</li>
			</ul>

			<button className={classes.Menu} onClick={() => menuHandler('switch')}>
				<GatsbyImage image={getImage(reveal ? close : menu)} alt='menu' placeholder='none' />
			</button>
		</nav>
	);

	return (
		<React.Fragment>
			{upper}

			<div className={classes.Line} />

			{lower}
		</React.Fragment>
	);
};

export default Navigation;
