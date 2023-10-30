import React from 'react'
import style from './Contact.module.css'
import Maps from '../../components/Map/Map.jsx'
import mapsApi from '../../../.env'

const mapURL= `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${mapsApi.mapsKey}`

const Contact = () => {

	return (
		<>
			<div className={style.tituloNuestros}>
      	<div className={style.textWrapper}>Contacto</div>
    	</div>
    	<div>
    		<Maps googlemapURL={mapURL}
    			containerElement={<div style={{height: '400px'}} />}
    			mapElement={<div style={{height: '100%'}} />}
    			loadingElement={<p>Cargando</p>}
    		/>
    	</div>
		</>
	)
}

export default Contact;