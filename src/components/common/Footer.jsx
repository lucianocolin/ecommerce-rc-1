import React from 'react';
import "../../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="wrap-footer">
                    <div class="text-element-footer element-footer">
                        <h3 class="main-c">RC3 Shop</h3>
                        <p>Un nuevo concepto en moda y estilo.</p>
                        <p>Decile chau al “no tengo que ponerme”</p>
                    </div>
                    <div class="rrss-element-footer element-footer">
                        <h5>Redes Sociales</h5>
                        <ul>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferer">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferer">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferer">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </a>
                            </li>
                        </ul>
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