export const PROD = process.env.NODE_ENV === 'production';

export const GOOGLE_MAPS_API_KEY = PROD ? 'AIzaSyBB0rZooauFiXOMMkkRNlwUELyYWwQXKLQ' : '';
export const BACKEND_DOMAIN = PROD
	? 'https://us-central1-letscomit-server.cloudfunctions.net/app/'
	: 'http://localhost:5000/';
export const GOOGLE_ANALYTICS_ID = '';

export const BOOKING_URL = 'https://www.fresha.com/book-now/ashk-aesthetics-gkjaixjh/all-offer?pId=259622';
