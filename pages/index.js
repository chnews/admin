
import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import StyleLinks from '../components/StyleLinks';


const Index = ({ router }) => {
 
  
  const head = () => (
    <Head>
        <title>NewYork News | {APP_NAME}</title>
        <meta
            name="description"
            content="Daily newyork news news"
        />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`Latest newyork news for | ${APP_NAME}`} />
        <meta
            property="og:description"
            content="Newyork News"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );


 


  


  return ( 
    <>

    {head()}

    <>
    <>
  
  <div id="container" className="effect aside-float aside-bright mainnav-lg">
    {/*NAVBAR*/}
    {/*===================================================*/}
    <header id="navbar">
      <div id="navbar-container" className="boxed">
        {/*Brand logo & name*/}
        {/*================================*/}
        <div className="navbar-header">
          <a href="index.html" className="navbar-brand">
            <img src="img\logo.png" alt="Nifty Logo" className="brand-icon" />
            <div className="brand-title">
              <span className="brand-text">Nifty</span>
            </div>
          </a>
        </div>
        {/*================================*/}
        {/*End brand logo & name*/}
        {/*Navbar Dropdown*/}
        {/*================================*/}
        <div className="navbar-content">
          <ul className="nav navbar-top-links">
            {/*Navigation toogle button*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li className="tgl-menu-btn">
              <a className="mainnav-toggle" href="#">
                <i className="demo-pli-list-view" />
              </a>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End Navigation toogle button*/}
            {/*Search*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li>
              <div className="custom-search-form">
                <label
                  className="btn btn-trans"
                  htmlFor="search-input"
                  data-toggle="collapse"
                  data-target="#nav-searchbox"
                >
                  <i className="demo-pli-magnifi-glass" />
                </label>
                <form>
                  <div className="search-container collapse" id="nav-searchbox">
                    <input
                      id="search-input"
                      type="text"
                      className="form-control"
                      placeholder="Type for search..."
                    />
                  </div>
                </form>
              </div>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End Search*/}
          </ul>
          <ul className="nav navbar-top-links">
            {/*Mega dropdown*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li className="mega-dropdown">
              <a href="#" className="mega-dropdown-toggle">
                <i className="demo-pli-layout-grid" />
              </a>
              <div className="dropdown-menu mega-dropdown-menu">
                <div className="row">
                  <div className="col-sm-4 col-md-3">
                    {/*Mega menu list*/}
                    <ul className="list-unstyled">
                      <li className="dropdown-header">
                        <i className="demo-pli-file icon-lg icon-fw" /> Pages
                      </li>
                      <li>
                        <a href="#">Profile</a>
                      </li>
                      <li>
                        <a href="#">Search Result</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Sreen Lock</a>
                      </li>
                      <li>
                        <a href="#">Maintenance</a>
                      </li>
                      <li>
                        <a href="#">Invoice</a>
                      </li>
                      <li>
                        <a href="#" className="disabled">
                          Disabled
                        </a>
                      </li>{" "}
                    </ul>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    {/*Mega menu list*/}
                    <ul className="list-unstyled">
                      <li className="dropdown-header">
                        <i className="demo-pli-mail icon-lg icon-fw" /> Mailbox
                      </li>
                      <li>
                        <a href="#">
                          <span className="pull-right label label-danger">
                            Hot
                          </span>
                          Indox
                        </a>
                      </li>
                      <li>
                        <a href="#">Read Message</a>
                      </li>
                      <li>
                        <a href="#">Compose</a>
                      </li>
                      <li>
                        <a href="#">Template</a>
                      </li>
                    </ul>
                    <p className="pad-top text-main text-sm text-uppercase text-bold">
                      <i className="icon-lg demo-pli-calendar-4 icon-fw" />
                      News
                    </p>
                    <p className="pad-top mar-top bord-top text-sm">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes.
                    </p>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    {/*Mega menu list*/}
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="media mar-btm">
                          <span className="badge badge-success pull-right">
                            90%
                          </span>
                          <div className="media-left">
                            <i className="demo-pli-data-settings icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="text-semibold text-main mar-no">
                              Data Backup
                            </p>
                            <small className="text-muted">
                              This is the item description
                            </small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="media mar-btm">
                          <div className="media-left">
                            <i className="demo-pli-support icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="text-semibold text-main mar-no">
                              Support
                            </p>
                            <small className="text-muted">
                              This is the item description
                            </small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="media mar-btm">
                          <div className="media-left">
                            <i className="demo-pli-computer-secure icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="text-semibold text-main mar-no">
                              Security
                            </p>
                            <small className="text-muted">
                              This is the item description
                            </small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="media mar-btm">
                          <div className="media-left">
                            <i className="demo-pli-map-2 icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="text-semibold text-main mar-no">
                              Location
                            </p>
                            <small className="text-muted">
                              This is the item description
                            </small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <p className="dropdown-header">
                      <i className="demo-pli-file-jpg icon-lg icon-fw" />{" "}
                      Gallery
                    </p>
                    <div className="row img-gallery">
                      <div className="col-xs-4">
                        <img
                          className="img-responsive"
                          src="img\thumbs\img-1.jpeg"
                          alt="thumbs"
                        />
                      </div>
                      <div className="col-xs-4">
                        <img
                          className="img-responsive"
                          src="img\thumbs\img-3.jpeg"
                          alt="thumbs"
                        />
                      </div>
                      <div className="col-xs-4">
                        <img
                          className="img-responsive"
                          src="img\thumbs\img-2.jpeg"
                          alt="thumbs"
                        />
                      </div>
                      <div className="col-xs-4">
                        <img
                          className="img-responsive"
                          src="img\thumbs\img-4.jpeg"
                          alt="thumbs"
                        />
                      </div>
                      <div className="col-xs-4">
                        <img
                          className="img-responsive"
                          src="img\thumbs\img-6.jpeg"
                          alt="thumbs"
                        />
                      </div>
                      <div className="col-xs-4">
                        <img
                          className="img-responsive"
                          src="img\thumbs\img-5.jpeg"
                          alt="thumbs"
                        />
                      </div>
                    </div>
                    <a href="#" className="btn btn-block btn-primary">
                      Browse Gallery
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End mega dropdown*/}
            {/*Notification dropdown*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li className="dropdown">
              <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                <i className="demo-pli-bell" />
                <span className="badge badge-header badge-danger" />
              </a>
              {/*Notification dropdown menu*/}
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                <div className="nano scrollable">
                  <div className="nano-content">
                    <ul className="head-list">
                      <li>
                        <a
                          href="#"
                          className="media add-tooltip"
                          data-title="Used space : 95%"
                          data-container="body"
                          data-placement="bottom"
                        >
                          <div className="media-left">
                            <i className="demo-pli-data-settings icon-2x text-main" />
                          </div>
                          <div className="media-body">
                            <p className="text-nowrap text-main text-semibold">
                              HDD is full
                            </p>
                            <div className="progress progress-sm mar-no">
                              <div
                                style={{ width: "95%" }}
                                className="progress-bar progress-bar-danger"
                              >
                                <span className="sr-only">95% Complete</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="media" href="#">
                          <div className="media-left">
                            <i className="demo-pli-file-edit icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="mar-no text-nowrap text-main text-semibold">
                              Write a news article
                            </p>
                            <small>Last Update 8 hours ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="media" href="#">
                          <span className="label label-info pull-right">
                            New
                          </span>
                          <div className="media-left">
                            <i className="demo-pli-speech-bubble-7 icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="mar-no text-nowrap text-main text-semibold">
                              Comment Sorting
                            </p>
                            <small>Last Update 8 hours ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="media" href="#">
                          <div className="media-left">
                            <i className="demo-pli-add-user-star icon-2x" />
                          </div>
                          <div className="media-body">
                            <p className="mar-no text-nowrap text-main text-semibold">
                              New User Registered
                            </p>
                            <small>4 minutes ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="media" href="#">
                          <div className="media-left">
                            <img
                              className="img-circle img-sm"
                              alt="Profile Picture"
                              src="img\profile-photos\9.png"
                            />
                          </div>
                          <div className="media-body">
                            <p className="mar-no text-nowrap text-main text-semibold">
                              Lucy sent you a message
                            </p>
                            <small>30 minutes ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="media" href="#">
                          <div className="media-left">
                            <img
                              className="img-circle img-sm"
                              alt="Profile Picture"
                              src="img\profile-photos\3.png"
                            />
                          </div>
                          <div className="media-body">
                            <p className="mar-no text-nowrap text-main text-semibold">
                              Jackson sent you a message
                            </p>
                            <small>40 minutes ago</small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Dropdown footer*/}
                <div className="pad-all bord-top">
                  <a href="#" className="btn-link text-main box-block">
                    <i className="pci-chevron chevron-right pull-right" />
                    Show All Notifications
                  </a>
                </div>
              </div>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End notifications dropdown*/}
            {/*User dropdown*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <li id="dropdown-user" className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="dropdown-toggle text-right"
              >
                <span className="ic-user pull-right">
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  {/*You can use an image instead of an icon.*/}
                  {/*<img class="img-circle img-user media-object" src="img/profile-photos/1.png" alt="Profile Picture">*/}
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  <i className="demo-pli-male" />
                </span>
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                {/*You can also display a user name in the navbar.*/}
                {/*<div class="username hidden-xs">Aaron Chavez</div>*/}
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              </a>
              <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                <ul className="head-list">
                  <li>
                    <a href="#">
                      <i className="demo-pli-male icon-lg icon-fw" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="badge badge-danger pull-right">9</span>
                      <i className="demo-pli-mail icon-lg icon-fw" /> Messages
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-success pull-right">
                        New
                      </span>
                      <i className="demo-pli-gear icon-lg icon-fw" /> Settings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="demo-pli-computer-secure icon-lg icon-fw" />{" "}
                      Lock screen
                    </a>
                  </li>
                  <li>
                    <a href="pages-login.html">
                      <i className="demo-pli-unlock icon-lg icon-fw" /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End user dropdown*/}
            <li>
              <a href="#" className="aside-toggle">
                <i className="demo-pli-dot-vertical" />
              </a>
            </li>
          </ul>
        </div>
        {/*================================*/}
        {/*End Navbar Dropdown*/}
      </div>
    </header>
    {/*===================================================*/}
    {/*END NAVBAR*/}
    <div className="boxed">
      {/*CONTENT CONTAINER*/}
      {/*===================================================*/}
      <div id="content-container">
        <div id="page-head">
          <div className="pad-all text-center">
            <h3>Welcome back to the Dashboard.</h3>
            <p1>
              Scroll down to see quick links and overviews of your Server, To do
              list, Order status or get some Help using Nifty.<p></p>
            </p1>
          </div>
        </div>
        {/*Page content*/}
        {/*===================================================*/}
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              {/*Network Line Chart*/}
              {/*===================================================*/}
              <div id="demo-panel-network" className="panel">
                <div className="panel-heading">
                  <div className="panel-control">
                    <button
                      id="demo-panel-network-refresh"
                      className="btn btn-default btn-active-primary"
                      data-toggle="panel-overlay"
                      data-target="#demo-panel-network"
                    >
                      <i className="demo-psi-repeat-2" />
                    </button>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle btn btn-default btn-active-primary"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="demo-psi-dot-vertical" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a href="#">Action</a>
                        </li>
                        <li>
                          <a href="#">Another action</a>
                        </li>
                        <li>
                          <a href="#">Something else here</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Separated link</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="panel-title">Network</h3>
                </div>
                {/*chart placeholder*/}
                <div className="pad-all">
                  <div id="demo-chart-network" style={{ height: 255 }} />
                </div>
                {/*Chart information*/}
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-8">
                      <p className="text-semibold text-uppercase text-main">
                        CPU Temperature
                      </p>
                      <div className="row">
                        <div className="col-xs-5">
                          <div className="media">
                            <div className="media-left">
                              <span className="text-3x text-thin text-main">
                                43.7
                              </span>
                            </div>
                            <div className="media-body">
                              <p className="mar-no">°C</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-7 text-sm">
                          <p>
                            <span>Min Values</span>
                            <span className="pad-lft text-semibold">
                              <span className="text-lg">27°</span>
                              <span className="labellabel-success mar-lft">
                                <i className="pci-caret-down text-success" />
                                <smal>- 20</smal>
                              </span>
                            </span>
                          </p>
                          <p>
                            <span>Max Values</span>
                            <span className="pad-lft text-semibold">
                              <span className="text-lg">69°</span>
                              <span className="labellabel-danger mar-lft">
                                <i className="pci-caret-up text-danger" />
                                <smal>+ 57</smal>
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="pad-rgt">
                        <p className="text-semibold text-uppercase text-main">
                          Today Tips
                        </p>
                        <p className="text-muted mar-top">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <p className="text-uppercase text-semibold text-main">
                        Bandwidth Usage
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <div className="media pad-btm">
                            <div className="media-left">
                              <span className="text-2x text-thin text-main">
                                754.9
                              </span>
                            </div>
                            <div className="media-body">
                              <p className="mar-no">Mbps</p>
                            </div>
                          </div>
                        </li>
                        <li className="pad-btm">
                          <div className="clearfix">
                            <p className="pull-left mar-no">Income</p>
                            <p className="pull-right mar-no">70%</p>
                          </div>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar progress-bar-info"
                              style={{ width: "70%" }}
                            >
                              <span className="sr-only">70% Complete</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="clearfix">
                            <p className="pull-left mar-no">Outcome</p>
                            <p className="pull-right mar-no">10%</p>
                          </div>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar progress-bar-primary"
                              style={{ width: "10%" }}
                            >
                              <span className="sr-only">10% Complete</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*===================================================*/}
              {/*End network line chart*/}
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  {/*Sparkline Area Chart*/}
                  <div className="panel panel-success panel-colorful">
                    <div className="pad-all">
                      <p className="text-lg text-semibold">
                        <i className="demo-pli-data-storage icon-fw" /> HDD
                        Usage
                      </p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">132Gb</span> Free
                        Space
                      </p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">1,45Gb</span>{" "}
                        Used space
                      </p>
                    </div>
                    <div className="pad-top text-center">
                      {/*Placeholder*/}
                      <div
                        id="demo-sparkline-area"
                        className="sparklines-full-content"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  {/*Sparkline Line Chart*/}
                  <div className="panel panel-info panel-colorful">
                    <div className="pad-all">
                      <p className="text-lg text-semibold">Earning</p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">$764</span> Today
                      </p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">$1,332</span>{" "}
                        Last 7 Day
                      </p>
                    </div>
                    <div className="pad-top text-center">
                      {/*Placeholder*/}
                      <div
                        id="demo-sparkline-line"
                        className="sparklines-full-content"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  {/*Sparkline bar chart */}
                  <div className="panel panel-purple panel-colorful">
                    <div className="pad-all">
                      <p className="text-lg text-semibold">
                        <i className="demo-pli-basket-coins icon-fw" /> Sales
                      </p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">$764</span> Today
                      </p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">$1,332</span>{" "}
                        Last 7 Day
                      </p>
                    </div>
                    <div className="text-center">
                      {/*Placeholder*/}
                      <div id="demo-sparkline-bar" className="box-inline" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  {/*Sparkline pie chart */}
                  <div className="panel panel-warning panel-colorful">
                    <div className="pad-all">
                      <p className="text-lg text-semibold">Task Progress</p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">34</span>{" "}
                        Completed
                      </p>
                      <p className="mar-no">
                        <span className="pull-right text-bold">79</span> Total
                      </p>
                    </div>
                    <div className="pad-all">
                      <div className="pad-btm">
                        <div className="progress progress-sm">
                          <div
                            style={{ width: "45%" }}
                            className="progress-bar progress-bar-light"
                          >
                            <span className="sr-only">45%</span>
                          </div>
                        </div>
                      </div>
                      <div className="pad-btm">
                        <div className="progress progress-sm">
                          <div
                            style={{ width: "89%" }}
                            className="progress-bar progress-bar-light"
                          >
                            <span className="sr-only">89%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Extra Small Weather Widget*/}
              {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              <div className="panel">
                <div className="panel-body text-center clearfix">
                  <div className="col-sm-4 pad-top">
                    <div className="text-lg">
                      <p className="text-5x text-thin text-main">95</p>
                    </div>
                    <p className="text-sm text-bold text-uppercase">
                      New Friends
                    </p>
                  </div>
                  <div className="col-sm-8">
                    <button className="btn btn-pink mar-ver">
                      View Details
                    </button>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <ul className="list-unstyled text-center bord-top pad-top mar-no row">
                      <li className="col-xs-4">
                        <span className="text-lg text-semibold text-main">
                          1,345
                        </span>
                        <p className="text-sm text-muted mar-no">Following</p>
                      </li>
                      <li className="col-xs-4">
                        <span className="text-lg text-semibold text-main">
                          23K
                        </span>
                        <p className="text-sm text-muted mar-no">Followers</p>
                      </li>
                      <li className="col-xs-4">
                        <span className="text-lg text-semibold text-main">
                          278
                        </span>
                        <p className="text-sm text-muted mar-no">Post</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              {/*End Extra Small Weather Widget*/}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="panel panel-warning panel-colorful media middle pad-all">
                <div className="media-left">
                  <div className="pad-hor">
                    <i className="demo-pli-file-word icon-3x" />
                  </div>
                </div>
                <div className="media-body">
                  <p className="text-2x mar-no text-semibold">241</p>
                  <p className="mar-no">Documents</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-info panel-colorful media middle pad-all">
                <div className="media-left">
                  <div className="pad-hor">
                    <i className="demo-pli-file-zip icon-3x" />
                  </div>
                </div>
                <div className="media-body">
                  <p className="text-2x mar-no text-semibold">241</p>
                  <p className="mar-no">Zip Files</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-mint panel-colorful media middle pad-all">
                <div className="media-left">
                  <div className="pad-hor">
                    <i className="demo-pli-camera-2 icon-3x" />
                  </div>
                </div>
                <div className="media-body">
                  <p className="text-2x mar-no text-semibold">241</p>
                  <p className="mar-no">Photos</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="panel panel-danger panel-colorful media middle pad-all">
                <div className="media-left">
                  <div className="pad-hor">
                    <i className="demo-pli-video icon-3x" />
                  </div>
                </div>
                <div className="media-body">
                  <p className="text-2x mar-no text-semibold">241</p>
                  <p className="mar-no">Videos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              {/*List Todo*/}
              {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              <div className="panel panel-trans">
                <div className="panel-heading">
                  <h3 className="panel-title">To do list</h3>
                </div>
                <div className="pad-ver">
                  <ul className="list-group bg-trans list-todo mar-no">
                    <li className="list-group-item">
                      <input
                        id="demo-todolist-1"
                        className="magic-checkbox"
                        type="checkbox"
                      />
                      <label htmlFor="demo-todolist-1">
                        <span>
                          Find an idea.{" "}
                          <span className="label label-danger">Important</span>
                        </span>
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        id="demo-todolist-2"
                        className="magic-checkbox"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label htmlFor="demo-todolist-2">
                        <span>Do some work</span>
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        id="demo-todolist-3"
                        className="magic-checkbox"
                        type="checkbox"
                      />
                      <label htmlFor="demo-todolist-3">
                        <span>Read the book</span>
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        id="demo-todolist-4"
                        className="magic-checkbox"
                        type="checkbox"
                      />
                      <label htmlFor="demo-todolist-4">
                        <span>
                          Upgrade server{" "}
                          <span className="label label-warning">Warning</span>
                        </span>
                      </label>
                    </li>
                    <li className="list-group-item">
                      <input
                        id="demo-todolist-5"
                        className="magic-checkbox"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label htmlFor="demo-todolist-5">
                        <span>
                          Redesign my logo{" "}
                          <span className="label label-info">2 Mins</span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="input-group pad-all">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New task"
                    autoComplete="off"
                  />
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-success">
                      <i className="demo-pli-add" />
                    </button>
                  </span>
                </div>
              </div>
              {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              {/*End todo list*/}
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="panel panel-trans">
                <div className="panel-heading">
                  <div className="panel-control">
                    <a
                      title=""
                      data-html="true"
                      data-container="body"
                      data-original-title="<p class='h4 text-semibold'>Information</p><p style='width:150px'>This is an information bubble to help the user.</p>"
                      href="#"
                      className="demo-psi-information icon-lg icon-fw unselectable text-info add-tooltip"
                    />
                  </div>
                  <h3 className="panel-title">Services</h3>
                </div>
                <div className="bord-btm">
                  <ul className="list-group bg-trans">
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          id="demo-online-status-checkbox"
                          className="toggle-switch"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-online-status-checkbox" />
                      </div>
                      Online status
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          id="demo-show-off-contact-checkbox"
                          className="toggle-switch"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-show-off-contact-checkbox" />
                      </div>
                      Show offline contact
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          id="demo-show-device-checkbox"
                          className="toggle-switch"
                          type="checkbox"
                        />
                        <label htmlFor="demo-show-device-checkbox" />
                      </div>
                      Show my device icon
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="pad-btm">
                    <p className="text-semibold text-main">Upgrade Progress</p>
                    <div className="progress progress-md">
                      <div
                        className="progress-bar progress-bar-purple"
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "15%" }}
                        role="progressbar"
                      >
                        <span className="sr-only">15%</span>
                      </div>
                    </div>
                    <small>15% Completed</small>
                  </div>
                  <div>
                    <p className="text-semibold text-main">Database</p>
                    <div className="progress progress-md">
                      <div
                        className="progress-bar progress-bar-success"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "70%" }}
                        role="progressbar"
                      >
                        <span className="sr-only">70%</span>
                      </div>
                    </div>
                    <small>70% Completed</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="panel panel-trans">
                <div className="pad-all">
                  <div className="media mar-btm">
                    <div className="media-left">
                      <img
                        src="img\profile-photos\2.png"
                        className="img-md img-circle"
                        alt="Avatar"
                      />
                    </div>
                    <div className="media-body">
                      <p className="text-lg text-main text-semibold mar-no">
                        Ralph West
                      </p>
                      <p>Project manager</p>
                    </div>
                  </div>
                  <blockquote className="bq-sm bq-open bq-close">
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt.
                  </blockquote>
                </div>
                <div className="bord-top">
                  <ul className="list-group bg-trans bord-no">
                    <li className="list-group-item list-item-sm">
                      <div className="media-left">
                        <i className="demo-psi-facebook icon-lg" />
                      </div>
                      <div className="media-body">
                        <a href="#" className="btn-link text-semibold">
                          Facebook
                        </a>
                      </div>
                    </li>
                    <li className="list-group-item list-item-sm">
                      <div className="media-left">
                        <i className="demo-psi-twitter icon-lg" />
                      </div>
                      <div className="media-body">
                        <a href="#" className="btn-link text-semibold">
                          @RalphWe
                        </a>
                        <br /> Design my themes with{" "}
                        <a href="#" className="btn-link text-bold">
                          #Bootstrap
                        </a>{" "}
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </div>
                    </li>
                    <li className="list-group-item list-item-sm">
                      <div className="media-left">
                        <i className="demo-psi-instagram icon-lg" />
                      </div>
                      <div className="media-body">
                        <a href="#" className="btn-link text-semibold">
                          Ralphz
                        </a>
                      </div>
                    </li>
                    <li className="list-group-item list-item-sm">
                      <div className="media-body"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Order Status</h3>
                </div>
                {/*Data Table*/}
                {/*===================================================*/}
                <div className="panel-body">
                  <div className="pad-btm form-inline">
                    <div className="row">
                      <div className="col-sm-6 table-toolbar-left">
                        <button className="btn btn-purple">
                          <i className="demo-pli-add icon-fw" />
                          Add
                        </button>
                        <button className="btn btn-default">
                          <i className="demo-pli-printer icon-lg" />
                        </button>
                        <div className="btn-group">
                          <button className="btn btn-default">
                            <i className="demo-pli-information icon-lg" />
                          </button>
                          <button className="btn btn-default">
                            <i className="demo-pli-trash icon-lg" />
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 table-toolbar-right">
                        <div className="form-group">
                          <input
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Search"
                            id="demo-input-search2"
                          />
                        </div>
                        <div className="btn-group">
                          <button className="btn btn-default">
                            <i className="demo-pli-download-from-cloud icon-lg" />
                          </button>
                          <div className="btn-group dropdown">
                            <button
                              className="btn btn-default btn-active-primary dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              <i className="demo-pli-dot-vertical icon-lg" />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-right"
                              role="menu"
                            >
                              <li>
                                <a href="#">Action</a>
                              </li>
                              <li>
                                <a href="#">Another action</a>
                              </li>
                              <li>
                                <a href="#">Something else here</a>
                              </li>
                              <li className="divider" />
                              <li>
                                <a href="#">Separated link</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Invoice</th>
                          <th>User</th>
                          <th>Order date</th>
                          <th>Amount</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Tracking Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              {" "}
                              Order #53431
                            </a>
                          </td>
                          <td>Steve N. Horton</td>
                          <td>
                            <span className="text-muted">Oct 22, 2014</span>
                          </td>
                          <td>$45.00</td>
                          <td className="text-center">
                            <div className="label label-table label-success">
                              Paid
                            </div>
                          </td>
                          <td className="text-center">-</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              {" "}
                              Order #53432
                            </a>
                          </td>
                          <td>Charles S Boyle</td>
                          <td>
                            <span className="text-muted">Oct 24, 2014</span>
                          </td>
                          <td>$245.30</td>
                          <td className="text-center">
                            <div className="label label-table label-info">
                              Shipped
                            </div>
                          </td>
                          <td className="text-center">CGX0089734531</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              {" "}
                              Order #53433
                            </a>
                          </td>
                          <td>Lucy Doe</td>
                          <td>
                            <span className="text-muted">Oct 24, 2014</span>
                          </td>
                          <td>$38.00</td>
                          <td className="text-center">
                            <div className="label label-table label-info">
                              Shipped
                            </div>
                          </td>
                          <td className="text-center">CGX0089934571</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              {" "}
                              Order #53434
                            </a>
                          </td>
                          <td>Teresa L. Doe</td>
                          <td>
                            <span className="text-muted">Oct 15, 2014</span>
                          </td>
                          <td>$77.99</td>
                          <td className="text-center">
                            <div className="label label-table label-info">
                              Shipped
                            </div>
                          </td>
                          <td className="text-center">CGX0089734574</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              {" "}
                              Order #53435
                            </a>
                          </td>
                          <td>Teresa L. Doe</td>
                          <td>
                            <span className="text-muted">Oct 12, 2014</span>
                          </td>
                          <td>$18.00</td>
                          <td className="text-center">
                            <div className="label label-table label-success">
                              Paid
                            </div>
                          </td>
                          <td className="text-center">-</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              Order #53437
                            </a>
                          </td>
                          <td>Charles S Boyle</td>
                          <td>
                            <span className="text-muted">Oct 17, 2014</span>
                          </td>
                          <td>$658.00</td>
                          <td className="text-center">
                            <div className="label label-table label-danger">
                              Refunded
                            </div>
                          </td>
                          <td className="text-center">-</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-link">
                              Order #536584
                            </a>
                          </td>
                          <td>Scott S. Calabrese</td>
                          <td>
                            <span className="text-muted">Oct 19, 2014</span>
                          </td>
                          <td>$45.58</td>
                          <td className="text-center">
                            <div className="label label-table label-warning">
                              Unpaid
                            </div>
                          </td>
                          <td className="text-center">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr className="new-section-xs" />
                  <div className="pull-right">
                    <ul className="pagination text-nowrap mar-no">
                      <li className="page-pre disabled">
                        <a href="#">&lt;</a>
                      </li>
                      <li className="page-number active">
                        <span>1</span>
                      </li>
                      <li className="page-number">
                        <a href="#">2</a>
                      </li>
                      <li className="page-number">
                        <a href="#">3</a>
                      </li>
                      <li>
                        <span>...</span>
                      </li>
                      <li className="page-number">
                        <a href="#">9</a>
                      </li>
                      <li className="page-next">
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*===================================================*/}
                {/*End Data Table*/}
              </div>
            </div>
          </div>
        </div>
        {/*===================================================*/}
        {/*End page content*/}
      </div>
      {/*===================================================*/}
      {/*END CONTENT CONTAINER*/}
      {/*ASIDE*/}
      {/*===================================================*/}
      <aside id="aside-container">
        <div id="aside">
          <div className="nano">
            <div className="nano-content">
              {/*Nav tabs*/}
              {/*================================*/}
              <ul className="nav nav-tabs nav-justified">
                <li className="active">
                  <a href="#demo-asd-tab-1" data-toggle="tab">
                    <i className="demo-pli-speech-bubble-7 icon-lg" />
                  </a>
                </li>
                <li>
                  <a href="#demo-asd-tab-2" data-toggle="tab">
                    <i className="demo-pli-information icon-lg icon-fw" />{" "}
                    Report
                  </a>
                </li>
                <li>
                  <a href="#demo-asd-tab-3" data-toggle="tab">
                    <i className="demo-pli-wrench icon-lg icon-fw" /> Settings
                  </a>
                </li>
              </ul>
              {/*================================*/}
              {/*End nav tabs*/}
              {/* Tabs Content */}
              {/*================================*/}
              <div className="tab-content">
                {/*First tab (Contact list)*/}
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                <div className="tab-pane fade in active" id="demo-asd-tab-1">
                  <p className="pad-all text-main text-sm text-uppercase text-bold">
                    <span className="pull-right badge badge-warning">3</span>{" "}
                    Family
                  </p>
                  {/*Family*/}
                  <div className="list-group bg-trans">
                    <a href="#" className="list-group-item">
                      <div className="media-left pos-rel">
                        <img
                          className="img-circle img-xs"
                          src="img\profile-photos\2.png"
                          alt="Profile Picture"
                        />
                        <i className="badge badge-success badge-stat badge-icon pull-left" />
                      </div>
                      <div className="media-body">
                        <p className="mar-no text-main">Stephen Tran</p>
                        <small className="text-muteds">Availabe</small>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="media-left pos-rel">
                        <img
                          className="img-circle img-xs"
                          src="img\profile-photos\7.png"
                          alt="Profile Picture"
                        />
                      </div>
                      <div className="media-body">
                        <p className="mar-no text-main">Brittany Meyer</p>
                        <small className="text-muteds">I think so</small>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="media-left pos-rel">
                        <img
                          className="img-circle img-xs"
                          src="img\profile-photos\1.png"
                          alt="Profile Picture"
                        />
                        <i className="badge badge-info badge-stat badge-icon pull-left" />
                      </div>
                      <div className="media-body">
                        <p className="mar-no text-main">Jack George</p>
                        <small className="text-muteds">
                          Last Seen 2 hours ago
                        </small>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="media-left pos-rel">
                        <img
                          className="img-circle img-xs"
                          src="img\profile-photos\4.png"
                          alt="Profile Picture"
                        />
                      </div>
                      <div className="media-body">
                        <p className="mar-no text-main">Donald Brown</p>
                        <small className="text-muteds">
                          Lorem ipsum dolor sit amet.
                        </small>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="media-left pos-rel">
                        <img
                          className="img-circle img-xs"
                          src="img\profile-photos\8.png"
                          alt="Profile Picture"
                        />
                        <i className="badge badge-warning badge-stat badge-icon pull-left" />
                      </div>
                      <div className="media-body">
                        <p className="mar-no text-main">Betty Murphy</p>
                        <small className="text-muteds">Idle</small>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="media-left pos-rel">
                        <img
                          className="img-circle img-xs"
                          src="img\profile-photos\9.png"
                          alt="Profile Picture"
                        />
                        <i className="badge badge-danger badge-stat badge-icon pull-left" />
                      </div>
                      <div className="media-body">
                        <p className="mar-no text-main">Samantha Reid</p>
                        <small className="text-muteds">Offline</small>
                      </div>
                    </a>
                  </div>
                  <hr />
                  <p className="pad-all text-main text-sm text-uppercase text-bold">
                    <span className="pull-right badge badge-success">
                      Offline
                    </span>{" "}
                    Friends
                  </p>
                  {/*Works*/}
                  <div className="list-group bg-trans">
                    <a href="#" className="list-group-item">
                      <span className="badge badge-purple badge-icon badge-fw pull-left" />{" "}
                      Joey K. Greyson
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="badge badge-info badge-icon badge-fw pull-left" />{" "}
                      Andrea Branden
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="badge badge-success badge-icon badge-fw pull-left" />{" "}
                      Johny Juan
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="badge badge-danger badge-icon badge-fw pull-left" />{" "}
                      Susan Sun
                    </a>
                  </div>
                  <hr />
                  <p className="pad-all text-main text-sm text-uppercase text-bold">
                    News
                  </p>
                  <div className="pad-hor">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer
                      <a
                        data-title="45%"
                        className="add-tooltip text-semibold text-main"
                        href="#"
                      >
                        adipiscing elit
                      </a>
                      , sed diam nonummy nibh. Lorem ipsum dolor sit amet.
                    </p>
                    <small>
                      <em>Last Update : Des 12, 2014</em>
                    </small>
                  </div>
                </div>
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                {/*End first tab (Contact list)*/}
                {/*Second tab (Custom layout)*/}
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                <div className="tab-pane fade" id="demo-asd-tab-2">
                  {/*Monthly billing*/}
                  <div className="pad-all">
                    <p className="pad-ver text-main text-sm text-uppercase text-bold">
                      Billing &amp; reports
                    </p>
                    <p>
                      Get <strong className="text-main">$5.00</strong> off your
                      next bill by making sure your full payment reaches us
                      before August 5, 2018.
                    </p>
                  </div>
                  <hr className="new-section-xs" />
                  <div className="pad-all">
                    <span className="pad-ver text-main text-sm text-uppercase text-bold">
                      Amount Due On
                    </span>
                    <p className="text-sm">August 17, 2018</p>
                    <p className="text-2x text-thin text-main">$83.09</p>
                    <button className="btn btn-block btn-success mar-top">
                      Pay Now
                    </button>
                  </div>
                  <hr />
                  <p className="pad-all text-main text-sm text-uppercase text-bold">
                    Additional Actions
                  </p>
                  {/*Simple Menu*/}
                  <div className="list-group bg-trans">
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-information icon-lg icon-fw" />{" "}
                      Service Information
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-mine icon-lg icon-fw" /> Usage
                      Profile
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="label label-info pull-right">New</span>
                      <i className="demo-pli-credit-card-2 icon-lg icon-fw" />{" "}
                      Payment Options
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-support icon-lg icon-fw" /> Message
                      Center
                    </a>
                  </div>
                  <hr />
                  <div className="text-center">
                    <div>
                      <i className="demo-pli-old-telephone icon-3x" />
                    </div>
                    Questions?
                    <p className="text-lg text-semibold text-main">
                      {" "}
                      (415) 234-53454{" "}
                    </p>
                    <small>
                      <em>We are here 24/7</em>
                    </small>
                  </div>
                </div>
                {/*End second tab (Custom layout)*/}
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                {/*Third tab (Settings)*/}
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                <div className="tab-pane fade" id="demo-asd-tab-3">
                  <ul className="list-group bg-trans">
                    <li className="pad-top list-header">
                      <p className="text-main text-sm text-uppercase text-bold mar-no">
                        Account Settings
                      </p>
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          className="toggle-switch"
                          id="demo-switch-1"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-switch-1" />
                      </div>
                      <p className="mar-no text-main">
                        Show my personal status
                      </p>
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </small>
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          className="toggle-switch"
                          id="demo-switch-2"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-switch-2" />
                      </div>
                      <p className="mar-no text-main">Show offline contact</p>
                      <small className="text-muted">
                        Aenean commodo ligula eget dolor. Aenean massa.
                      </small>
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          className="toggle-switch"
                          id="demo-switch-3"
                          type="checkbox"
                        />
                        <label htmlFor="demo-switch-3" />
                      </div>
                      <p className="mar-no text-main">Invisible mode </p>
                      <small className="text-muted">
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.{" "}
                      </small>
                    </li>
                  </ul>
                  <hr />
                  <ul className="list-group pad-btm bg-trans">
                    <li className="list-header">
                      <p className="text-main text-sm text-uppercase text-bold mar-no">
                        Public Settings
                      </p>
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          className="toggle-switch"
                          id="demo-switch-4"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-switch-4" />
                      </div>
                      Online status
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          className="toggle-switch"
                          id="demo-switch-5"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-switch-5" />
                      </div>
                      Show offline contact
                    </li>
                    <li className="list-group-item">
                      <div className="pull-right">
                        <input
                          className="toggle-switch"
                          id="demo-switch-6"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <label htmlFor="demo-switch-6" />
                      </div>
                      Show my device icon
                    </li>
                  </ul>
                  <hr />
                  <p className="pad-hor text-main text-sm text-uppercase text-bold mar-no">
                    Task Progress
                  </p>
                  <div className="pad-all">
                    <p className="text-main">Upgrade Progress</p>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar progress-bar-success"
                        style={{ width: "15%" }}
                      >
                        <span className="sr-only">15%</span>
                      </div>
                    </div>
                    <small>15% Completed</small>
                  </div>
                  <div className="pad-hor">
                    <p className="text-main">Database</p>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar progress-bar-danger"
                        style={{ width: "75%" }}
                      >
                        <span className="sr-only">75%</span>
                      </div>
                    </div>
                    <small>17/23 Database</small>
                  </div>
                </div>
                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                {/*Third tab (Settings)*/}
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/*===================================================*/}
      {/*END ASIDE*/}
      {/*MAIN NAVIGATION*/}
      {/*===================================================*/}
      <nav id="mainnav-container">
        <div id="mainnav">
          {/*OPTIONAL : ADD YOUR LOGO TO THE NAVIGATION*/}
          {/*It will only appear on small screen devices.*/}
          {/*================================
              <div class="mainnav-brand">
                  <a href="index.html" class="brand">
                      <img src="img/logo.png" alt="Nifty Logo" class="brand-icon">
                      <span class="brand-text">Nifty</span>
                  </a>
                  <a href="#" class="mainnav-toggle"><i class="pci-cross pci-circle icon-lg"></i></a>
              </div>
              */}
          {/*Menu*/}
          {/*================================*/}
          <div id="mainnav-menu-wrap">
            <div className="nano">
              <div className="nano-content">
                {/*Profile Widget*/}
                {/*================================*/}
                <div id="mainnav-profile" className="mainnav-profile">
                  <div className="profile-wrap text-center">
                    <div className="pad-btm">
                      <img
                        className="img-circle img-md"
                        src="img\profile-photos\1.png"
                        alt="Profile Picture"
                      />
                    </div>
                    <a
                      href="#profile-nav"
                      className="box-block"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <span className="pull-right dropdown-toggle">
                        <i className="dropdown-caret" />
                      </span>
                      <p className="mnp-name">Aaron Chavez</p>
                      <span className="mnp-desc">aaron.cha@themeon.net</span>
                    </a>
                  </div>
                  <div
                    id="profile-nav"
                    className="collapse list-group bg-trans"
                  >
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-male icon-lg icon-fw" /> View
                      Profile
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-gear icon-lg icon-fw" /> Settings
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-information icon-lg icon-fw" />{" "}
                      Help
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="demo-pli-unlock icon-lg icon-fw" /> Logout
                    </a>
                  </div>
                </div>
                {/*Shortcut buttons*/}
                {/*================================*/}
                <div id="mainnav-shortcut" className="hidden">
                  <ul className="list-unstyled shortcut-wrap">
                    <li className="col-xs-3" data-content="My Profile">
                      <a className="shortcut-grid" href="#">
                        <div className="icon-wrap icon-wrap-sm icon-circle bg-mint">
                          <i className="demo-pli-male" />
                        </div>
                      </a>
                    </li>
                    <li className="col-xs-3" data-content="Messages">
                      <a className="shortcut-grid" href="#">
                        <div className="icon-wrap icon-wrap-sm icon-circle bg-warning">
                          <i className="demo-pli-speech-bubble-3" />
                        </div>
                      </a>
                    </li>
                    <li className="col-xs-3" data-content="Activity">
                      <a className="shortcut-grid" href="#">
                        <div className="icon-wrap icon-wrap-sm icon-circle bg-success">
                          <i className="demo-pli-thunder" />
                        </div>
                      </a>
                    </li>
                    <li className="col-xs-3" data-content="Lock Screen">
                      <a className="shortcut-grid" href="#">
                        <div className="icon-wrap icon-wrap-sm icon-circle bg-purple">
                          <i className="demo-pli-lock-2" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*================================*/}
                {/*End shortcut buttons*/}
                <ul id="mainnav-menu" className="list-group">
                  {/*Category name*/}
                  <li className="list-header">Navigation</li>
                  {/*Menu list item*/}
                  <li className="active-sub">
                    <a href="#">
                      <i className="demo-pli-home" />
                      <span className="menu-title">Dashboard</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse in">
                      <li className="active-link">
                        <a href="index.html">Dashboard 1</a>
                      </li>
                      <li>
                        <a href="dashboard-2.html">Dashboard 2</a>
                      </li>
                      <li>
                        <a href="dashboard-3.html">Dashboard 3</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-split-vertical-2" />
                      <span className="menu-title">Layouts</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="layouts-collapsed-navigation.html">
                          Collapsed Navigation
                        </a>
                      </li>
                      <li>
                        <a href="layouts-offcanvas-navigation.html">
                          Off-Canvas Navigation
                        </a>
                      </li>
                      <li>
                        <a href="layouts-offcanvas-slide-in-navigation.html">
                          Slide-in Navigation
                        </a>
                      </li>
                      <li>
                        <a href="layouts-offcanvas-revealing-navigation.html">
                          Revealing Navigation
                        </a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="layouts-aside-right-side.html">
                          Aside on the right side
                        </a>
                      </li>
                      <li>
                        <a href="layouts-aside-left-side.html">
                          Aside on the left side
                        </a>
                      </li>
                      <li>
                        <a href="layouts-aside-dark-theme.html">
                          Dark version of aside
                        </a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="layouts-fixed-navbar.html">Fixed Navbar</a>
                      </li>
                      <li>
                        <a href="layouts-fixed-footer.html">Fixed Footer</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="widgets.html">
                      <i className="demo-pli-gear" />
                      <span className="menu-title">
                        Widgets
                        <span className="pull-right badge badge-warning">
                          24
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="list-divider" />
                  {/*Category name*/}
                  <li className="list-header">Components</li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-boot-2" />
                      <span className="menu-title">UI Elements</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="ui-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="ui-panels.html">Panels</a>
                      </li>
                      <li>
                        <a href="ui-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="ui-progress-bars.html">Progress bars</a>
                      </li>
                      <li>
                        <a href="ui-components.html">Components</a>
                      </li>
                      <li>
                        <a href="ui-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="ui-list-group.html">List Group</a>
                      </li>
                      <li>
                        <a href="ui-tabs-accordions.html">
                          Tabs &amp; Accordions
                        </a>
                      </li>
                      <li>
                        <a href="ui-alerts-tooltips.html">
                          Alerts &amp; Tooltips
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-pen-5" />
                      <span className="menu-title">Forms</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="forms-general.html">General</a>
                      </li>
                      <li>
                        <a href="forms-components.html">Advanced Components</a>
                      </li>
                      <li>
                        <a href="forms-validation.html">Validation</a>
                      </li>
                      <li>
                        <a href="forms-wizard.html">Wizard</a>
                      </li>
                      <li>
                        <a href="forms-file-upload.html">File Upload</a>
                      </li>
                      <li>
                        <a href="forms-text-editor.html">Text Editor</a>
                      </li>
                      <li>
                        <a href="forms-markdown.html">Markdown</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-receipt-4" />
                      <span className="menu-title">Tables</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="tables-static.html">Static Tables</a>
                      </li>
                      <li>
                        <a href="tables-bootstrap.html">Bootstrap Tables</a>
                      </li>
                      <li>
                        <a href="tables-datatable.html">Data Tables</a>
                      </li>
                      <li>
                        <a href="tables-footable.html">Foo Tables</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-bar-chart" />
                      <span className="menu-title">Charts</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="charts-morris-js.html">Morris JS</a>
                      </li>
                      <li>
                        <a href="charts-flot-charts.html">Flot Charts</a>
                      </li>
                      <li>
                        <a href="charts-easy-pie-charts.html">
                          Easy Pie Charts
                        </a>
                      </li>
                      <li>
                        <a href="charts-sparklines.html">Sparklines</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-repair" />
                      <span className="menu-title">Miscellaneous</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="misc-timeline.html">Timeline</a>
                      </li>
                      <li>
                        <a href="misc-maps.html">Google Maps</a>
                      </li>
                      <li>
                        <a href="xplugins-notifications.html">
                          Notifications
                          <span className="label label-purple pull-right">
                            Improved
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="misc-nestable-list.html">Nestable List</a>
                      </li>
                      <li>
                        <a href="misc-animate-css.html">CSS Animations</a>
                      </li>
                      <li>
                        <a href="misc-css-loaders.html">CSS Loaders</a>
                      </li>
                      <li>
                        <a href="misc-spinkit.html">Spinkit</a>
                      </li>
                      <li>
                        <a href="misc-tree-view.html">Tree View</a>
                      </li>
                      <li>
                        <a href="misc-clipboard.html">Clipboard</a>
                      </li>
                      <li>
                        <a href="misc-x-editable.html">X-Editable</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-warning-window" />
                      <span className="menu-title">Grid System</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="grid-bootstrap.html">Bootstrap Grid</a>
                      </li>
                      <li>
                        <a href="grid-liquid-fixed.html">Liquid Fixed</a>
                      </li>
                      <li>
                        <a href="grid-match-height.html">Match Height</a>
                      </li>
                      <li>
                        <a href="grid-masonry.html">Masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li className="list-divider" />
                  {/*Category name*/}
                  <li className="list-header">More</li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-computer-secure" />
                      <span className="menu-title">App Views</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="app-file-manager.html">File Manager</a>
                      </li>
                      <li>
                        <a href="app-users.html">Users</a>
                      </li>
                      <li>
                        <a href="app-users-2.html">Users 2</a>
                      </li>
                      <li>
                        <a href="app-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="app-calendar.html">Calendar</a>
                      </li>
                      <li>
                        <a href="app-taskboard.html">Taskboard</a>
                      </li>
                      <li>
                        <a href="app-chat.html">Chat</a>
                      </li>
                      <li>
                        <a href="app-contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-speech-bubble-5" />
                      <span className="menu-title">Blog Apps</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-list-2.html">Blog List 2</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="blog-manage-posts.html">Manage Posts</a>
                      </li>
                      <li>
                        <a href="blog-add-edit-post.html">Add Edit Post</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-mail" />
                      <span className="menu-title">Email</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="mailbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="mailbox-message.html">View Message</a>
                      </li>
                      <li>
                        <a href="mailbox-compose.html">Compose Message</a>
                      </li>
                      <li>
                        <a href="mailbox-templates.html">Email Templates</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-file-html" />
                      <span className="menu-title">Other Pages</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="pages-blank.html">Blank Page</a>
                      </li>
                      <li>
                        <a href="pages-invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="pages-search-results.html">Search Results</a>
                      </li>
                      <li>
                        <a href="pages-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="pages-pricing.html">
                          Pricing
                          <span className="label label-success pull-right">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="pages-404-alt.html">Error 404 alt</a>
                      </li>
                      <li>
                        <a href="pages-500-alt.html">Error 500 alt</a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="pages-404.html">Error 404 </a>
                      </li>
                      <li>
                        <a href="pages-500.html">Error 500</a>
                      </li>
                      <li>
                        <a href="pages-maintenance.html">Maintenance</a>
                      </li>
                      <li>
                        <a href="pages-login.html">Login</a>
                      </li>
                      <li>
                        <a href="pages-register.html">Register</a>
                      </li>
                      <li>
                        <a href="pages-password-reminder.html">
                          Password Reminder
                        </a>
                      </li>
                      <li>
                        <a href="pages-lock-screen.html">Lock Screen</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-photo-2" />
                      <span className="menu-title">Gallery</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="gallery-columns.html">Columns</a>
                      </li>
                      <li>
                        <a href="gallery-justified.html">Justified</a>
                      </li>
                      <li>
                        <a href="gallery-nested.html">Nested</a>
                      </li>
                      <li>
                        <a href="gallery-grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="gallery-carousel.html">Carousel</a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="gallery-slider.html">Slider</a>
                      </li>
                      <li>
                        <a href="gallery-default-theme.html">Default Theme</a>
                      </li>
                      <li>
                        <a href="gallery-compact-theme.html">Compact Theme</a>
                      </li>
                      <li>
                        <a href="gallery-grid-theme.html">Grid Theme</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-tactic" />
                      <span className="menu-title">Menu Level</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="#">Second Level Item</a>
                      </li>
                      <li>
                        <a href="#">Second Level Item</a>
                      </li>
                      <li>
                        <a href="#">Second Level Item</a>
                      </li>
                      <li className="list-divider" />
                      <li>
                        <a href="#">
                          Third Level
                          <i className="arrow" />
                        </a>
                        {/*Submenu*/}
                        <ul className="collapse">
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Third Level
                          <i className="arrow" />
                        </a>
                        {/*Submenu*/}
                        <ul className="collapse">
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li className="list-divider" />
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#">Third Level Item</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="list-divider" />
                  {/*Category name*/}
                  <li className="list-header">Extras</li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-happy" />
                      <span className="menu-title">Icons Pack</span>
                      <i className="arrow" />
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="icons-ionicons.html">Ion Icons</a>
                      </li>
                      <li>
                        <a href="icons-themify.html">Themify</a>
                      </li>
                      <li>
                        <a href="icons-font-awesome.html">Font Awesome</a>
                      </li>
                      <li>
                        <a href="icons-flagicons.html">Flag Icon CSS</a>
                      </li>
                      <li>
                        <a href="icons-weather-icons.html">Weather Icons</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="#">
                      <i className="demo-pli-medal-2" />
                      <span className="menu-title">
                        PREMIUM ICONS
                        <span className="label label-danger pull-right">
                          BEST
                        </span>
                      </span>
                    </a>
                    {/*Submenu*/}
                    <ul className="collapse">
                      <li>
                        <a href="premium-line-icons.html">Line Icons Pack</a>
                      </li>
                      <li>
                        <a href="premium-solid-icons.html">Solid Icons Pack</a>
                      </li>
                    </ul>
                  </li>
                  {/*Menu list item*/}
                  <li>
                    <a href="helper-classes.html">
                      <i className="demo-pli-inbox-full" />
                      <span className="menu-title">Helper Classes</span>
                    </a>
                  </li>{" "}
                </ul>
                {/*Widget*/}
                {/*================================*/}
                <div className="mainnav-widget">
                  {/* Show the button on collapsed navigation */}
                  <div className="show-small">
                    <a
                      href="#"
                      data-toggle="menu-widget"
                      data-target="#demo-wg-server"
                    >
                      <i className="demo-pli-monitor-2" />
                    </a>
                  </div>
                  {/* Hide the content on collapsed navigation */}
                  <div
                    id="demo-wg-server"
                    className="hide-small mainnav-widget-content"
                  >
                    <ul className="list-group">
                      <li className="list-header pad-no mar-ver">
                        Server Status
                      </li>
                      <li className="mar-btm">
                        <span className="label label-primary pull-right">
                          15%
                        </span>
                        <p>CPU Usage</p>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar progress-bar-primary"
                            style={{ width: "15%" }}
                          >
                            <span className="sr-only">15%</span>
                          </div>
                        </div>
                      </li>
                      <li className="mar-btm">
                        <span className="label label-purple pull-right">
                          75%
                        </span>
                        <p>Bandwidth</p>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar progress-bar-purple"
                            style={{ width: "75%" }}
                          >
                            <span className="sr-only">75%</span>
                          </div>
                        </div>
                      </li>
                      <li className="pad-ver">
                        <a href="#" className="btn btn-success btn-bock">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*================================*/}
                {/*End widget*/}
              </div>
            </div>
          </div>
          {/*================================*/}
          {/*End menu*/}
        </div>
      </nav>
      {/*===================================================*/}
      {/*END MAIN NAVIGATION*/}
    </div>
    {/* FOOTER */}
    {/*===================================================*/}
    <footer id="footer">
      {/* Visible when footer positions are fixed */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="show-fixed pad-rgt pull-right">
        You have{" "}
        <a href="#" className="text-main">
          <span className="badge badge-danger">3</span> pending action.
        </a>
      </div>
      {/* Visible when footer positions are static */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="hide-fixed pull-right pad-rgt">
        14GB of <strong>512GB</strong> Free.
      </div>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* Remove the class "show-fixed" and "hide-fixed" to make the content always appears. */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <p className="pad-lft">© 2018 Your Company</p>
    </footer>
    {/*===================================================*/}
    {/* END FOOTER */}
    {/* SCROLL PAGE BUTTON */}
    {/*===================================================*/}
    <button className="scroll-top btn">
      <i className="pci-chevron chevron-up" />
    </button>
    {/*===================================================*/}
  </div>
<StyleLinks/>
</>

    </>
     
    </>
    
  )
};

  
export default withRouter(Index);