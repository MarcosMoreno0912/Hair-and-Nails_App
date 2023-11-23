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
    		<div className={style.datosContacto}>
					<div className={style.rectangle} />
					<div className={style.img} />
					<div className={style.rectangle2} />
					<div className={style.rectangle3} />
					<div className={style.overlap}>
						<div className={style.vector} />
						<div className={style.overlapGroup}>
							<div className={style.textWrapper}>O</div>
							<p className={style.div}>Puedes contactarte mediante Wsp o Instagram :</p>
						</div>
					</div>
					<div className={style.vector2} />
					<div className={style.textWrapper2}>@caro.peluqueria_</div>
					<div className={style.textWrapper3}>@__.mynails</div>
					<div className={style.textWrapper4}>2664841130 (Carolina)</div>
					<div className={style.textWrapper5}>2634765094 (Micaela)</div>
				</div>
    	</div>
		</>
	)
}

export default Contact;