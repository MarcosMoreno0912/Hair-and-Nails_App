import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.overlapGroup}>
                <div className={style.rectangle}></div>
                <div className={style.img}></div>
                <div className={style.line}></div>
                <div className={style.line2}></div>
                <p className={style.direccion}>
                    Pasaje La Calera 180
                    <br />y Leandro N. Alem.
                    <br />
                    <br />
                    Ciudad de San Luis, Argentina.
                </p>
                <div className={style.textWrapper}>Ubícanos</div>
                <div className={style.ellipse}></div>
                <div className={style.ellipse2}></div>
                <div className={style.div}>Síguenos</div>
                <div className={style.overlap}>
                    <div className={style.caroPeluqueria}>
                        @caro.peluqueria_
                        <br />
                        <br />
                        2664841130
                        <br />
                        <br />
                        <br />
                        @_.mynails
                        <br />
                        <br />
                        2634765094
                    </div>
                    <div className={style.page}></div>
                    <div className={style.vector}></div>
                </div>
                <div className={style.rectangle2}></div>
                <div className={style.rectangle3}></div>
                <div className={style.flexcontainer}>
                    <a href="https://back-glamourestetic.onrender.com/" className={style.text}>
                        <span className={style.span}>
                            Inicio
                        </span>
                    </a>
                    <a href="https://back-glamourestetic.onrender.com/services" className={style.text}>
                        <span className={style.span}>
                            Servicios
                        </span>
                    </a>
                    <a href="https://back-glamourestetic.onrender.com/jobs" className={style.text}>
                        <span className={style.span}>
                            Trabajos
                        </span>
                    </a>
                    <a href="https://back-glamourestetic.onrender.com/contact" className={style.text}>
                        <span className={style.span}>Contáctanos</span>
                    </a>
                </div>
                <div className={style.textWrapper2}>Descubre</div>
            </div>
            <p className={style.elementStilistNails}>
                2023 Glamour Estética - Todos los derechos reservados | Desarrollado por Marcos Moreno
            </p>
        </div>
    );
};

export default Footer;