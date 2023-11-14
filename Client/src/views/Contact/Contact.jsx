import React from 'react'
import style from './Contact.module.css'
import Mapa from '../../components/Map/Map.jsx'
import FormContact from '../../components/Form/Form.jsx'

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
    			<Mapa />
    		</div>
    		<div className={style.titleEscribenos}>
					<div className={style.textWrapper}>Escríbenos</div>
					<div className={style.ellipse} />
				</div>
    		<div className={style.form} >
					<FormContact />
    		</div>
    	</div>
		</>
	)
}

export default Contact;