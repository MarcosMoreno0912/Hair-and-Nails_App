import React from 'react'
import style from './Contact.module.css'
import Maps from '../../components/Map/Map.jsx'

const Contact = () => {

	return (
		<>
			<div className={style.tituloContacto}>
      	<div className={style.textWrapper}>Contacto</div>
    	</div>
    	<div className={style.containMapForm}>
				<div className={style.pin}></div>
    		<div className={style.label}>
					<div className={style.textWrapper}>Ubicación</div>
				</div>
    		<div className={style.map} >
    			<Maps />
    		</div>
    		
    	</div>
		</>
	)
}

export default Contact;