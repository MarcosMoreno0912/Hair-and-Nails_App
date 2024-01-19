import style from './Landing.module.css'

const Landing = () => {

	return (
		<>
			<div className={style.container}>
				<div className={style.image}>
					<div className={style.principalTitle}>Glamour Beauty Salon</div>
    				<div className={style.logoTijeraYesmalte}>
						<div className={style.div}>
							<div className={style.esmalte}></div>
							<div className={style.tijeras}></div>
						</div>
					</div>
					<div className={style.label}>
						<p className={style.textWrapper}>
								Glamour Estética te ofrece servicios de calidad excepcional. 
							<br/> A través de trabajos de peluquería, cuidado de uñas y realce de pestañas,
							<br/> descubre una experiencia única donde la excelencia y la belleza convergen.
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
									Transforma tu estilo en nuestro espacio, <br/>donde la creatividad y la maestría <br/>se fusionan para resaltar tu belleza.
								</p>
							</div>
						</div>
					</div>
    		</div>
    		<div className={style.promosPeluqueria}>
					<div className={style.textWrapper}>Promo 2</div>
					<div className={style.div}>Promo 3</div>
					<div className={style.textWrapper2}>Promo 4</div>
					<div className={style.rectangle} />
					<div className={style.rectangle2} />
					<div className={style.rectangle3} />
					<div className={style.rectangle4} />
					<div className={style.textWrapper3}>Promo 1</div>
						<p className={style.donecLaoreetRutrum}>
							<span className={style.span}>Corte + Nutrición <br/>$7000</span>
						</p>
						<p className={style.p}>
							<span className={style.span}>Botox + Peinado <br/>$15000</span>
						</p>
						<p className={style.donecLaoreetRutrum2}>
							<span className={style.span}>Corte + Baño de Crema <br/>+ Color <br/>$10500</span>
						</p>
						<p className={style.donecLaoreetRutrum3}>
							<span className={style.span}>Corte + Alisado <br/>$9600</span>
						</p>
				</div>
				<div className={style.seccionManicura}>
					<div className={style.overlapGroup}>						<p className={style.textWrapper}>
							Descubre la perfección en cada detalle, <br/>donde cuidamos tus uñas y pestañas<br/> con precisión y elegancia.
						</p>
						<div className={style.textWrapper2}>Manicura</div>
					</div>
				</div>
				<div className={style.promosManicura}>
					<div className={style.overlap}>
						<p className={style.donecLaoreetRutrum}>
							<span className={style.textwrapper}>Semi manos <br/>+ pestañas clás. <br/>$6800</span>
						</p>
						<div className={style.div}>Promo 4</div>
					</div>
					<div className={style.overlapGroup}>
						<div className={style.div}>Promo 3</div>
						<p className={style.donecLaoreetRutrum}>
							<span className={style.textWrapper}>Soft gel + <br/>pestañas clásicas <br/>$7500</span>
						</p>
					</div>
					<div className={style.rectangle} />
					<div className={style.overlapGroup2}>
						<div className={style.textWrapper2}>Promo 1</div>
						<p className={style.donecLaoreetRutrum}>
							<span className={style.textWrapper}>Semi de manos <br/>y pies <br/>$5000</span>
						</p>
					</div>
					<div className={style.overlap2}>
						<div className={style.textWrapper3}>Promo 2</div>
						<p className={style.donecLaoreetRutrum}>
							<span className={style.textWrapper}>Pestañas clásicas <br/>$4800</span>
						</p>
					</div>
					<div className={style.rectangle2} />
					<div className={style.rectangle4} ></div>
					<div className={style.rectangle3} />
				</div>
			</div>
		</>
	)
}

export default Landing;