import React from 'react'
import { Maps, GoogleApiWrapper, Marker } from 'google-maps-react'
import style from './Map.module.css'

const GoogleMap = (props) => {

	return (
		<Map
			google={this.props.google}
			initialCenter={{ lat:-33.28283241461654, lng:-66.32206435287462 }}
			zoom={10}
		>
		<Marker
			position={{ lat: -33.28283241461654, lng:-66.32206435287462 }}
			title="Glamour Estética"
		/>
		</Map>
	)
};

export default GoogleMap;