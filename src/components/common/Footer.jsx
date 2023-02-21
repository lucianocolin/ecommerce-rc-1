import React from 'react';
import "../../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faDove, faF, faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="wrap-footer">
                    <div className="row">
                        <div className="col-6">
                            <div class="text-element-footer element-footer">
                                <h4 class="main-c">RC3 Shop</h4>
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
                                            <FontAwesomeIcon icon={faF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferer">
                                            <FontAwesomeIcon icon={faDove} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferer">
                                            <FontAwesomeIcon icon={faCameraRetro} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-creds">
                    <div class="copy-creds">
                        <p>©2022 · Todos los derechos reservados.</p>
                    </div>
                    <div class="legal-creds">
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