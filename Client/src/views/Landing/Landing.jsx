import React from 'react'
import style from './Landing.module.css'
import NavBar from '../../components/NavBar/NavBar.jsx'

const Landing = () => {

	return (
		<>
			<div className={style.container}>
				<div className={style.image}>
					<div className={style.principalTitle}>Estilist &amp; Nails Salon</div>
    			<div className={style.logoTijeraYesmalte}>
						<div className={style.div}>
							<div className={style.esmalte}></div>
							<div className={style.tijeras}></div>
						</div>
					</div>
					<div className={style.label}>
						<p className={style.textWrapper}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Donec vel egestas dolor, nec dignissim metus. Donec<br/> 
							augue elit, rhoncus ac sodales id, porttitor vitae est.
						</p>
					</div>
					<div className={style.containerVerde}>
						<div className={style.ellipse1} ></div>
						<div className={style.ellipse2} ></div>
						<div className={style.ellipse3} ></div>
						<div className={style.ellipse4} ></div>
					</div>
					<div className={style.imagenSeccion}>
						<div className={style.overlapGroup}>
							<div className={style.img} ></div>
							<div className={style.cuadroRosa} />
							<div className={style.tituloSecundario}>
								<div className={style.textWrapper}>Peluquería</div>
							</div>
							<div className={style.text}>
								<p className={style.p}>
									Donec laoreet rutrum libero sed pharetra. <br/>Duis a arcu convallis, gravida <br/>purus eget, mollis diam.
								</p>
							</div>
						</div>
					</div>
    		</div>
			</div>
		</>
	)
}

export default Landing;