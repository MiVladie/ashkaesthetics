import React, { useState } from 'react';

import { BACKEND_DOMAIN, GOOGLE_MAPS_API_KEY } from '../../config/constants';
import { StaticImage } from 'gatsby-plugin-image';

import Line from '../UI/Line/Line';
import Form from '../Complementary/Form/Form';
import Map from '../Map/Map';
import Animation from '../../hoc/Animation/Animation';

import axios from 'axios';

import * as classes from './Contact.module.scss';

const Contact = ({ formDescription, contactDescription, phone, email, address, time, coordinates }) => {
	const [response, setResponse] = useState({ message: {}, result: null, loading: false });

	const sendMessageHandler = (message) => {
		setResponse({ message: message, result: null, loading: true });

		axios
			.post(BACKEND_DOMAIN + 'message/ashkaesthetics', { message: message })
			.then((response) => {
				setResponse({ message: null, result: 'Your message has been delivered.', loading: false });
			})
			.catch((error) => {
				setResponse({ ...response, result: 'Something went wrong! Please, try again.', loading: false });
			});
	};

	return (
		<div className={classes.Contact}>
			<div className={classes.Row}>
				<div className={classes.Block}>
					<Animation style={{ width: '100%', margin: '0' }}>
						<h2 className={classes.Name}>Get in touch</h2>
						<Line color='#B8925D' style={{ marginLeft: 0, marginRight: 0 }} />
						<p className={classes.Description}>{formDescription}</p>
					</Animation>

					<Animation style={{ width: '100%', margin: '0' }}>
						<div className={classes.Form}>
							<Form
								data={[
									{ name: 'name', placeholder: 'Your name', type: 'text', required: true },
									{ name: 'email', placeholder: 'Your email', type: 'email', required: true },
									{ name: 'phone', placeholder: 'Your phone', type: 'tel', required: false },
									{ name: 'message', placeholder: 'Write message', type: 'textarea', required: true }
								]}
								button='Send message'
								onSubmit={sendMessageHandler}
								inputs={response.message}
								response={response.result}
								loading={response.loading}
							/>
						</div>
					</Animation>
				</div>

				<div className={classes.Block}>
					<Animation style={{ width: '100%', margin: '0' }}>
						<h2 className={classes.Name}>Contact us</h2>
						<Line color='#B8925D' style={{ marginLeft: 0, marginRight: 0 }} />
						<p className={classes.Description}>{contactDescription}</p>
					</Animation>

					<Animation style={{ width: '100%', margin: '0' }}>
						<div className={classes.Methods}>
							{phone && (
								<div className={classes.Method}>
									<Animation style={{ width: '100%', margin: '0' }}>
										<StaticImage
											className={classes.Icon}
											src='../../assets/icons/phone.png'
											alt='phone'
										/>
										<p className={classes.Info}>{phone}</p>
									</Animation>
								</div>
							)}

							{email && (
								<div className={classes.Method}>
									<Animation style={{ width: '100%', margin: '0' }}>
										<StaticImage
											className={classes.Icon}
											src='../../assets/icons/email.png'
											alt='email'
										/>
										<p className={classes.Info}>{email}</p>
									</Animation>
								</div>
							)}

							{address && (
								<div className={classes.Method}>
									<Animation style={{ width: '100%', margin: '0' }}>
										<StaticImage
											className={classes.Icon}
											src='../../assets/icons/address.png'
											alt='adress'
										/>
										<p className={classes.Info}>{address}</p>
									</Animation>
								</div>
							)}

							{time && (
								<div className={classes.Method}>
									<Animation style={{ width: '100%', margin: '0' }}>
										<StaticImage
											className={classes.Icon}
											src='../../assets/icons/time.png'
											alt='time'
										/>
										<p className={classes.Info}>{time}</p>
									</Animation>
								</div>
							)}
						</div>
					</Animation>
				</div>
			</div>

			{coordinates && (
				<div className={classes.Map}>
					<Map
						location={coordinates}
						zoom={15}
						googleMapURL={'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAPS_API_KEY}
						loadingElement={<div style={{ height: `100vh`, width: '100vw' }} />}
					/>
				</div>
			)}
		</div>
	);
};

export default Contact;
