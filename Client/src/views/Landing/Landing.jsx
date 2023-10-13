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
    		</div>
			</div>
		</>
	)
}

export default Landing;