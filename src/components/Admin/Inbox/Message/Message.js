import React from 'react';

import * as classes from './Message.module.scss';

function correctDate(value) {
	let [date, time] = value.split(' ');

	let [day, month, year] = date.split('/');

	date = `${year}/${month}/${day}`;

	return date + ' ' + time;
}

const Message = ({ message, back, remove }) => {
	let name = message.name;
	let email = message.email;
	let phone = message.phone;
	let text = message.message;
	let date = correctDate(message.time);

	return (
		<section className={classes.Message}>
			<div className={classes.Row}>
				<div className={classes.Description}>
					<p className={classes.Name}>
						Name: <span className={classes.Text}>{name}</span>
					</p>
				</div>

				<div className={classes.Description}>
					<p className={classes.Name}>
						Email: <span className={classes.Text}>{email}</span>
					</p>
				</div>
			</div>

			<div className={classes.Row}>
				{phone && (
					<div className={classes.Description}>
						<p className={classes.Name}>
							Phone: <span className={classes.Text}>{phone}</span>
						</p>
					</div>
				)}

				<div className={classes.Description}>
					<p className={classes.Name}>
						Date:{' '}
						<span className={classes.Text}>
							{new Date(date).toLocaleString('en-UK', { dateStyle: 'long', timeStyle: 'short' })}
						</span>
					</p>
				</div>
			</div>

			<div className={classes.Description}>
				<p className={classes.Name}>
					Message: <span className={classes.Text}>{text}</span>
				</p>
			</div>

			<div className={[classes.Row, classes.Action].join(' ')}>
				<button className={classes.Button} onClick={back}>
					{'< back'}
				</button>
				<button className={classes.Button} onClick={remove}>
					Delete
				</button>
			</div>

			<div className={[classes.Row, classes.Response].join(' ')}>
				<button
					className={classes.Button}
					onClick={() => typeof window !== 'undefined' && window.location.assign('mailto:' + email)}>
					Send email
				</button>
				{phone && (
					<button
						className={classes.Button}
						onClick={() => typeof window !== 'undefined' && window.location.assign('tel:' + phone)}>
						Call on phone
					</button>
				)}
			</div>
		</section>
	);
};

export default Message;
