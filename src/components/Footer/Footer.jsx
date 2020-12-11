import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-bs navbar-fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 footer-brand animated fadeInLeft">
                        <h2>Послуги які ми надаємо</h2>
                        <p>Купівля, продаж, оренда, обмін.
                            Допомога з документами (юридичний супровід і реєстрація угод з нерухомістю)
                            Безкоштовна консультація.
                            Виготовлення експертної оцінки на будь-яку нерухомість.
                            Виготовлення технічних паспортів.</p>
                    </div>
                    <div className="col-md-6 footer-ns animated fadeInRight">
                        <h4>Ми знаходимось</h4>
                        <p>м. Калуш, пл. Героїв 30 ( тц. Олімп, 2 пов.)</p>
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.1310980487208!2d24.367578753521133!3d49.024839686422965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730a2f9cf51188d%3A0x8bc42fe815440b97!2z0KLQpiDQntC70ZbQvNC_ICIg0JzQsNCz0LDQt9C40L0g0JTQldCa0J7QoNCjIg!5e0!3m2!1suk!2sua!4v1607709141420!5m2!1suk!2sua"
                                height="250" frameBorder="0" style={{border: "0", width: '100%'}} allowFullScreen=""
                                aria-hidden="false" tabIndex="0" title={'some'}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
