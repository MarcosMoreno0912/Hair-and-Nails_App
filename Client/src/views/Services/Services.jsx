import React from 'react'
import style from './Services.module.css'

const Services = () => {

	return (
		<>
			<div className={style.tituloServicios}>
				<div className={style.textWrapper}>Servicios de Peluquería</div>
			</div>
			<div className={style.serviciosPelu}>
				<div className={style.flexcontainer}>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Alisados
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Keratina
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Tratamientos Capilares
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Peinados
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Cortes
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Tinturas
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Balayage
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Mechas
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							&gt; Maquillaje
							<br/>
							<br/>							
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>+ Además contamos con talleres personalizados!</span>
					</p>
				</div>
				<div className={style.fotosPeluqueria}></div>
			</div>
			<div className={style.tituloManicura}>
				<div className={style.textWrapper}>Servicios de Manicura</div>
			</div>
			<div className={style.serviciosManicura}>
				<div className={style.flexcontainer}>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Extensión de Pestañas &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Uñas esculpidas &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Soft Gel &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Kapping &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Esmaltado semipermanente &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Lifting y tinte de pestañas &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Permanente y tinte de pestañas &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Alisado y perfilado de cejas &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}>
							Laminado de cejas y pestañas &lt;
						</span>
					</p>
					<p className={style.text}>
						<span className={style.textWrapper}> Pedicura y Spa de pies &lt;</span>
					</p>
				</div>
				<div className={style.fotosManicura}></div>
				<div className={style.listadoPrecios}>
					<div className={style.rectangle} />
					<div className={style.img} />
				</div>
			</div>
		</>
	)
}

export default Services;