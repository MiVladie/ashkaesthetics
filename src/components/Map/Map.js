import React from 'react';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../config/constants';

const Map = ({ location, zoom }) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: GOOGLE_MAPS_API_KEY
	});

	return isLoaded ? (
		<GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={location} zoom={zoom}>
			<Marker position={location} />
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(Map);
