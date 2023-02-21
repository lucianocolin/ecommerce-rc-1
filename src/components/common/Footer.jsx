import React from 'react';
import "../../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faDove, faF } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="wrap-footer">
                    <div className="row">
                        <div className="col-6">
                            <div className="text-element-footer element-footer">
                                <h4 className="main-c">RC3 Shop</h4>
                                Un nuevo concepto en moda y estilo.
                                <p>Decile chau al “no tengo que ponerme”</p>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end mb-1">
                            <div className='rrss-element-footer element-footer'>
                                <h5>Redes Sociales</h5>
                                <ul>
                                    <li>
                                        <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferer">
                                            <FontAwesomeIcon icon={faF} size="xl" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferer">
                                            <FontAwesomeIcon icon={faDove} size="xl" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferer">
                                            <FontAwesomeIcon icon={faCameraRetro} size="xl" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-creds">
                    <div className="copy-creds">
                        <p>©2022 · Todos los derechos reservados.</p>
                    </div>
                    <div className="legal-creds">
                        <ul>
                            <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                            <li><a href="/politica-cookies">Política de Cookies</a></li>
                            <li><a href="/aviso-legal">Aviso Legal</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;