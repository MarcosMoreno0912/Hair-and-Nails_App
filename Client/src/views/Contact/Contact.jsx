import React from 'react'
import style from './Contact.module.css'
import Maps from '../../components/Map/Map.jsx'

const Contact = () => {

	return (
		<>
			<div className={style.tituloNuestros}>
      	<div className={style.textWrapper}>Contacto</div>
    	</div>
    	<div>
    		<Maps />
    	</div>
		</>
	)
}

export default Contact;