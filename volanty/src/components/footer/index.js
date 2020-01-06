import React, { Component } from 'react';
import './styles.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="logo">
                <img src="https://www.volanty.com/_nuxt/img/12848fa.svg" className="footer-logo-img"/>
            </div>  
                <div className="contacts">
                     <div className="telephone">
                        <span><a href="tel:4020-9731" title="4020-9731" className="telephone-text"><img src="https://www.volanty.com/_nuxt/img/2cf43dd.svg" alt="4020-9731"/> 4020-9731</a></span>
                    </div>
                        <div className="social-media">
                            <ul className="social-media-list">
                                <li><a href="https://www.facebook.com/volantybr" target="_blank"><img src="https://www.volanty.com/_nuxt/img/70df6ba.svg" alt="Facebook"/></a></li> 
                                <li><a href="https://www.instagram.com/volanty_br/" target="_blank"><img src="https://www.volanty.com/_nuxt/img/35a4401.svg" alt="Instagram"/></a></li> 
                                <li><a href="https://www.linkedin.com/company/volanty/" target="_blank"><img src="https://www.volanty.com/_nuxt/img/87871da.svg" alt="Linkedin"/></a></li>
                            </ul>
                        </div>
                    </div>
                        <div className="footer-list">
                            <ul className="footer-list-details">
                                <li><a href="https://www.volanty.com" title="Encontre um carro">Encontre um carro</a></li>
                                <li><a href="https://www.volanty.com/vender.html?utm_volanty=oferta_footer" title="Venda seu carro">Venda seu carro</a></li>
                                <li><a href="/quemSomos.html" title="Sobre a Volanty">Sobre a Volanty</a></li>
                                <li><a href="/contato.html" title="Localização">Localização</a></li>
                            </ul>
                            <ul className="footer-list-details">
                                <li><a href="http://blog.volanty.com/" title="Blog Volanty">Blog Volanty</a></li>
                                <li><a href="https://volanty.abler.com.br/" title="Trabalhe com a gente">Trabalhe com a gente</a></li>
                                <li><a href="https://www.volanty.com/politica-de-privacidade.html" title="Política de privacidade">Política de privacidade</a></li>
                                <li><a href="/termos-de-uso" title="Termos de uso" class="">Termos de Uso</a></li></ul></div> <div class="footer-description">
                                <p>® Volanty Tecnologia e Serviços Veiculares Ltda. CNPJ: 26.361.463/0001-72</p>
                    </div>
                </div>
    </footer>
);

export default Footer;