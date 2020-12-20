import React from 'react'
import './CategorySort.css'

const CategorySort = () => {


    return (
        <div className="footer-bs navbar-fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-brand animated fadeInLeft">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                            <label className="custom-control-label" htmlFor="customCheck2">Квартири
                                checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                <label className="custom-control-label" htmlFor="customCheck2">1 кімнатна
                                    checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                <label className="custom-control-label" htmlFor="customCheck3">2 кімнатна
                                    checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                <label className="custom-control-label" htmlFor="customCheck4">3 кімнатна
                                    checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                <label className="custom-control-label" htmlFor="customCheck4">4+ кімнатна
                                    checkbox</label>
                        </div>
                    </div>
                    <div className="col-md-4 footer-ns animated fadeInRight">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Дачі</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Будинки</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Гаражі</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Земля</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Комерційна нерухомість</label>
                        </div>
                    </div>
                    <div className="col-md-4 footer-ns animated fadeInRight">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Оренда</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Продаж</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">Обмін</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4 justify-content-end text-right">
                        <button type="button" className="btn btn-success pull-right">Вибрати</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategorySort