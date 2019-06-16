import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Home extends Component {
    render() {
        return (
            
	<div id="wrapper">
    
        <header id="header">
            <div className="container">
                <div className="holder center-block">
                    
                    <div className="logo">
                        <a href="#">
                            <img src="images/logo2.png" alt="cooper" className="light img-responsive"/>
                            <img src="images/logo.png" alt="cooper" className="dark img-responsive"/>
                        </a>
                    </div>
                    
                    
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <a href="#" className="btn btn-default btn-white">Try Demo</a>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" data-scroll-nav="0">Home</a></li>
                                <li><a href="#" data-scroll-nav="1">features</a></li>
                                <li><a href="#" data-scroll-nav="2">about</a></li>
                                <li><a href="#" data-scroll-nav="3">testimonial</a></li>
                                <li><a href="#" data-scroll-nav="4">pricing</a></li>
                            </ul>
                        </div>
                    </nav>
                    
                </div>
            </div>
        </header>
        
        
        <main id="main">
            
            <section className="hero-area text-center overlay" style={{backgroundImage: "url(http://placehold.it/1920x780)"}} data-scroll-index="0">
                <div id="particles-js"></div>
                <div className="container">
                    <div className="row">
                        <header className="heading-holder col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                            <h1><span className="text-small">best software for your office</span>Try Cooper Today!</h1>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </header>
                    </div>
                    <div className="aligncenter">
                        <img src="http://placehold.it/680x380" alt="image description" className="img-responsive"/>
                    </div>
                </div>
            </section>
            
            
            <section className="features-area container" data-scroll-index="1">
                <div className="row">
                    <header className="col-xs-12 heading-wrap col-sm-6 col-sm-offset-3 text-center">
                        <h2>Best software to manage <br/>your office <span className="text-bright">work and workers!</span></h2>
                    </header>
                </div>
                
                <ul className="features-list">
                    <li>
                        <div className="icon-holder">
                            <img src="images/id-card.svg" width="54" height="52" alt="icon id-card" className="img-responsive"/>
                        </div>
                        <h3><a href="#">Special Login System</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    </li>
                    <li>
                        <div className="icon-holder">
                            <img src="images/clock.svg" width="56" height="50" alt="icon clock" className="img-responsive"/>
                        </div>
                        <h3><a href="#">Time Tracking</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    </li>
                    <li>
                        <div className="icon-holder">
                            <img src="images/notes.svg" width="51" height="45" alt="icon notes" className="img-responsive"/>
                        </div>
                        <h3><a href="#">Make notes easily</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    </li>
                    <li>
                        <div className="icon-holder">
                            <img src="images/calculator.svg" width="52" height="60" alt="icon calculator" className="img-responsive"/>
                        </div>
                        <h3><a href="#">Calculate daily cost</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    </li>
                    <li>
                        <div className="icon-holder">
                            <img src="images/cleaning.png" width="37" height="51" alt="icon cleaning" className="img-responsive"/>
                        </div>
                        <h3><a href="#">One click cleaning</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    </li>
                    <li>
                        <div className="icon-holder">
                            <img src="images/calendar.svg" width="49" height="51" alt="icon calandar" className="img-responsive"/>
                        </div>
                        <h3><a href="#">Daily report</a></h3>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    </li>
                </ul>
                
            </section>
            
            
            <section className="container product-features" data-scroll-index="2">
                <div className="row sameheight-container">
                    
                    <div className="col-xs-12 col-sm-6 descr sameheight">
                        <div className="align">
                            <h2>No more confusion and complex to manage your office.</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            <ul className="facts-list">
                                <li>
                                    <h3><span className="counter">230</span><span className="text-block">Components</span></h3>
                                </li>
                                <li>
                                    <h3><span className="counter">10</span>+<span className="text-block">Themes</span></h3>
                                </li>
                                <li>
                                    <h3>Unlimited<span className="text-block">users</span></h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    
                    <div className="img-holder sameheight col-xs-12 col-sm-6">
                        <img src="http://placehold.it/765x745" alt="image description" className="img-responsive"/>
                    </div>
                    
                </div>
            </section>
            
            
            <aside className="demo-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <h2>Need a perfect software to manage everything?</h2>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.</p>
                        </div>
                        <div className="col-xs-12 col-md-5">
                            <ul>
                                <li><a href="#" className="btn btn-default btn-white">Purchase now</a></li>
                                <li><a href="#">Try our Demo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            
            
            <section className="testimonials text-center" data-scroll-index="3">
                <div className="container">
                    <div className="row">
                        <header className="col-xs-12 heading-wrap col-sm-6 col-sm-offset-3 text-center">
                            <h2>More than <span className="text-bright">20,000+ Customers</span>, <br/>see some wishes here.</h2>
                        </header>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="testimonials-gallery">
                            
                            <div className="testimonials-mask">
                                <div className="testimonials-slide">
                                    <blockquote>
                                        <q>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium<br/> lectorum. Mirum est notare quam littera gothica, </q>
                                        <cite>
                                            <strong className="name">David Ramon</strong>
                                            <span className="subtitle">Project Manager, D360-Studio</span>
                                        </cite>
                                    </blockquote>
                                </div>
                            </div>
                            
                            
                            <div className="testimonials-mask">
                                <div className="testimonials-slide">
                                    <blockquote>
                                        <q>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium<br/> lectorum. Mirum est notare quam littera gothica, </q>
                                        <cite>
                                            <strong className="name">David Ramon</strong>
                                            <span className="subtitle">Project Manager, D360-Studio</span>
                                        </cite>
                                    </blockquote>
                                </div>
                            </div>
                            
                            
                            <div className="testimonials-mask">
                                <div className="testimonials-slide">
                                    <blockquote>
                                        <q>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium<br/> lectorum. Mirum est notare quam littera gothica, </q>
                                        <cite>
                                            <strong className="name">David Ramon</strong>
                                            <span className="subtitle">Project Manager, D360-Studio</span>
                                        </cite>
                                    </blockquote>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <aside className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="aligncenter col-xs-12">
                                <img src="http://placehold.it/850x415" alt="image description" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 heading-wrap btn-holder col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center">
                            <h2>Our software is totally customisable and easy to use, <span className="text-bright">no need to know anything!</span></h2>
                            <a href="#" className="btn btn-info">Purchase now</a>
                        </div>
                    </div>
                </aside>
            </section>
            
            
            <aside className="video-block">
                <div className="video overlay">
                    <img src="http://placehold.it/1920x430" alt="image description" className="img-responsive"/>
                    <a href="http://www.youtube.com/embed/9bZkp7q19f0?autoplay=1" className="ico-play lightbox fancybox.iframe"></a>
                </div>
            </aside>
            
            
            <section className="container price-offers" data-scroll-index="4">
                <div className="row">
                    <header className="col-xs-12 heading-wrap col-sm-6 col-sm-offset-3 text-center">
                        <h2>Select your <span className="text-bright">plan as your choise</span>, <br/>no need to pay extra money.</h2>
                    </header>
                </div>
                <div className="cols-holder">
                    
                    <div className="price-col text-center col-xs-12 col-sm-6 col-md-3">
                        <strong className="title">free!</strong>
                        <div className="offer-heading">
                            <h3>$0<span className="text-light">/mo</span><span className="subtitle">30 Days Trial</span></h3>
                        </div>
                        <ul>
                            <li className="check"><span>1 User</span></li>
                            <li className="check"><span>Admin Dashboard</span></li>
                            <li className="un-check"><span>Live Chat Service</span></li>
                            <li className="un-check"><span>Special Offers</span></li>
                            <li className="check"><span>Free Support</span></li>
                        </ul>
                        <a href="#" className="btn btn-info">Get Started now</a>
                    </div>
                    
                    
                    <div className="price-col text-center col-xs-12 col-sm-6 col-md-3">
                        <strong className="title">Freelancer</strong>
                        <div className="offer-heading">
                            <h3>$3.99<span className="text-light">/mo</span><span className="subtitle">Best for Freelance Team</span></h3>
                        </div>
                        <ul>
                            <li className="check"><span>1 User</span></li>
                            <li className="check"><span>Admin Dashboard</span></li>
                            <li className="check"><span>Live Chat Service</span></li>
                            <li className="un-check"><span>Special Offers</span></li>
                            <li className="check"><span>Free Support</span></li>
                        </ul>
                        <a href="#" className="btn btn-info">Get Started now</a>
                    </div>
                    
                    
                    <div className="price-col active text-center over col-xs-12 col-sm-6 col-md-3">
                        <strong className="title">Startup</strong>
                        <div className="offer-heading">
                            <h3>$10<span className="text-light">/mo</span><span className="subtitle">Best for small startups</span></h3>
                        </div>
                        <ul>
                            <li className="check"><span>20 Users</span></li>
                            <li className="check"><span>Admin Dashboard</span></li>
                            <li className="check"><span>Live Chat Service</span></li>
                            <li className="check"><span>Special Offers</span></li>
                            <li className="check"><span>Free Support</span></li>
                        </ul>
                        <a href="#" className="btn btn-info">Get Started now</a>
                    </div>
                    
                    
                    <div className="price-col text-center col-xs-12 col-sm-6 col-md-3">
                        <strong className="title">Company</strong>
                        <div className="offer-heading">
                            <h3>$15.99<span className="text-light">/mo</span><span className="subtitle">Best for Big Team</span></h3>
                        </div>
                        <ul>
                            <li className="check"><span>1 Users</span></li>
                            <li className="check"><span>Admin Dashboard</span></li>
                            <li className="un-check"><span>Live Chat Service</span></li>
                            <li className="un-check"><span>Special Offers</span></li>
                            <li className="check"><span>Free Support</span></li>
                        </ul>
                        <a href="#" className="btn btn-info">Get Started now</a>
                    </div>
                    
                </div>
            </section>
            
            
            <section className="trial-block container">
                <div className="row">
                    <div className="alignleft">
                        <img src="http://placehold.it/665x460" alt="image description" className="img-responsive"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 descr">
                        <div className="align">
                            <header className="heading-wrap">
                                <h2>Try our free trial today. If you don’t like, you can cancel it anytime!</h2>
                            </header>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            <a href="#" className="btn btn-info">Try our demo</a>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <aside className="brands-area container">
                <div className="row">
                    <header className="col-xs-12 heading-wrap col-sm-6 col-sm-offset-3 text-center">
                        <h2>Some of our <span className="text-bright">trusted customers</span>, <br/>who are statisfied!</h2>
                    </header>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        
                        <ul className="list-unstyled line-slider">
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                            <li><a href="#"><img src="http://placehold.it/170x85" alt="image description" className="img-responsive"/></a></li>
                        </ul>
                        
                    </div>
                </div>
            </aside>
        </main>
        <footer id="footer">
            <aside className="aside">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center col-sm-6 col-sm-offset-3">
                            <div className="logo"><a href="#"><img src="images/logo2.png" alt="cooper"/></a></div>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore</p>
                            <ul className="social-networks">
                                <li><a href="#"><span className="icon ico-facebook"></span></a></li>
                                <li><a href="#"><span className="icon ico-twitter"></span></a></li>
                                <li><a href="#"><span className="icon ico-google-plus"></span></a></li>
                                <li><a href="#"><span className="icon ico-pinterest"></span></a></li>
                                <li><a href="#"><span className="icon ico-icon1"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-sm-offset-4 text-center">
                        <p>&copy; Copyright 2017, <a href="#">Cooper.com</a>. <br/>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
        
        
        <span id="back-top" className="fa fa-angle-up"></span>
        <div id="loader" className="loader-holder">
            <div className="block"><img src="images/svg/hearts.svg" width="100" alt="loader"/></div>
        </div>
    </div>
        );
    }
}

const app = document.getElementById("app");

if (app) {
    ReactDOM.render(<Home />, app);
}
