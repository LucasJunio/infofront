/*

[Master Stylesheet]

Project Name: winku (HMTL Template)
Version:    1.2
Last change:  26/August/19

====INDEX=====

01- general styling
02- sticky header 
03- login/landing page
04- home page topbar
05- timeline area
06- messages dropdowns
07- sidebar widgets
08- post sharing area
09- social icons
10- comment area 
11- search area
12- footer
13- widgets
14- side panel
15- short profile widget
16- svg button styling
17- 404 error page 
18- contact page
19- knowledge base page 
20- faq's page
21- photos page
22- favourit page 
23- edit basic info page
24- notification page
25- message page
26- loadmore 
27- responsive header
28- main menu
39- blog pages
40- blog detail

*/
import styled from 'styled-components';
// import { darken } from 'polished';

export const Style = styled.div`

/*=============== Fonts source Muli, Hobostd ===================*/

/*@import url('https://fonts.googleapis.com/css?family=Muli:300,400,400i,500,500,800');*/
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Satisfy');
@font-face {
    font-family: HoboStd;
    src: url('../fonts/HoboStd.ttf'), url('../fonts/HoboStd.eot');
}


/*===============
***General Styling 
===============*/
html,body{
	font-family: "Roboto", "Segoe Ui";
}
body {
    float: left;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: #545454;
    font-weight: 400;
    letter-spacing: 0.1px;

}

p {
    font-size: 14px;
    line-height: 26px;
    color: #8c8b8b;
}

a,
a:hover,
a:focus,
a:active {
    color: inherit;
    outline: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
}

input:focus,
textarea:focus,
select:focus,
button:focus {
    outline: none;
}

img {
    height: auto;
    max-width: 100%;
}

.theme-layout {
    float: left;
    position: relative;
    width: 100%;
}

.theme-layout.boxed {
    background: none repeat scroll 0 0 #FFFFFF;
    float: none;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 1230px;
    -webkit-box-shadow: 0 0 6px #747474;
    -moz-box-shadow: 0 0 6px #747474;
    -ms-box-shadow: 0 0 6px #747474;
    -o-box-shadow: 0 0 6px #747474;
    box-shadow: 0 0 6px #747474;
}

section {
    float: left;
    position: relative;
    width: 100%;
}

.gap {
    float: left;
    padding: 30px 0;
    position: relative;
    width: 100%;
}

.gap.no-gap {
    padding: 0;
}

.gap.no-top {
    padding-top: 0px;
}

.gap.no-bottom {
    padding-bottom: 0px;
}

.gap2 {
    padding: 30px 0;
    position: relative;
}

.gap100 {
    padding: 100px 0;
    position: relative;
    float: left;
    width: 100%;
}

.gap100.no-gap {
    padding: 0;
}

.gap100.no-top {
    padding-top: 0;
}

.gap100.no-bottom {
    padding-bottom: 0;
}

.ext-gap {
    padding: 100px 0;
    float: left;
    width: 100%;
    position: relative;
}

.remove-ext {
    float: left;
    width: 100%;
    margin-bottom: -30px;
}

.remove-ext-40 {
    margin-bottom: -40px;
}

.remove-ext-50 {
    margin-bottom: -50px;
}

.merged {
    margin: 0px;
    padding: 0;
}

.merged > div {
    padding: 0;
}

.row.merged > div {
    padding: 0;
}

.merged.row {
    margin: 0;
}

.merged.row > div {
    padding: 0;
}

.parallax-fixed {
    height: 100%;
    left: 0;
    margin: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
}

.parallax {
    height: 100%;
    left: 0;
    margin: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
}

.blackish:before,
.whitish:before,
.bluesh:before,
.pattern:before {
    background: #424242;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}

.pattern:before {
    background: #088dcd url("../images/dot-pattern.png") repeat scroll 0 0;
    opacity: 0.45;
}

.whitish:before {
    background: rgba(255, 255, 255, .9);
}

.bluesh:before {
    background: #088dcd;
}

.exthigh-opacity:before {
    -webkit-opacity: .98;
    -moz-opacity: .98;
    -ms-opacity: .98;
    -o-opacity: .98;
    opacity: .98;
}

.high-opacity:before {
    -webkit-opacity: .95;
    -moz-opacity: .95;
    -ms-opacity: .95;
    -o-opacity: .95;
    opacity: .95;
}

.medium-opacity:before {
    -webkit-opacity: .85;
    -moz-opacity: .85;
    -ms-opacity: .85;
    -o-opacity: .85;
    opacity: .85;
}

.low-opacity:before {
    -webkit-opacity: .75;
    -moz-opacity: .75;
    -ms-opacity: .75;
    -o-opacity: .75;
    opacity: .75;
}

.gray-bg {
    float: left;
    width: 100%;
    background: #f4f2f2;
}

[type="submit"],
button,
html [type="button"] {
    cursor: pointer;
}

textarea {
    resize: none;
}

a:hover.facebook {
    background: #516eab;
}

a:hover.instagram {
    background: #444;
}

a:hover.twitter {
    background: #55acee;
}

a:hover.google {
    background: #dd4b39;
}

a:hover.pinterest {
    background: #ca212a;
}

a:hover.youtube {
    background: #e62117;
}

a:hover.dribble {
    background: #1572b8;
}

a:hover.linkedin {
    background: #0077b5;
}

a:hover.tumblr {
    background: #36465d;
}

a:hover.rss {
    background: #e3a103;
}

a:hover.vk {
    background: #466991;
}

.checked {
    color: orange;
}


/*carousel nave style*/

ul.owl-carousel {
    padding-left: 0;
    list-style: none;
    float: left;
    width: 100%;
}

.owl-prev,
.owl-next {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.owl-next {
    left: auto;
    right: 0;
}

.owl-prev,
.owl-next {
    color: transparent;
}

.owl-prev::before,
.owl-next::before {
    background: #489fe2;
    border-radius: 50%;
    color: #fff;
    content: "\f0d9";
    display: inline-block;
    font-family: fontawesome;
    font-size: 18px;
    left: 20px;
    line-height: 30px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
}

.owl-next::before {
    content: "\f0da";
    left: auto;
    right: 20px;
}

#html5-watermark {
    display: none !important;
}

iframe#html5boxiframevideo {
    height: 100%;
}

iframe {
    width: 100%;
}

.pdng0 {
    padding: 0;
}

#main,
#mainb,
#echart_mini_pie,
#echart_pie,
#echart_pie2,
#echart_donut,
#echart_line {
    height: 350px;
}

#echart_bar_horizontal,
#echart_world_map {
    height: 370px;
}


/*======================/
***** Home page 1 
======================*/


/*-- page loader ----*/


/*.se-pre-con {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url(../images/loader.gif) center no-repeat #fff;
}*/
.postoverlay {
  background-color: rgba(0,0,0,.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  display: none;
}
.central-meta.new-pst {
    position: relative;
    z-index: 99;
}
#topcontrol {
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    transform: rotate(-15deg);
    transition: all 0.2s linear 0s;
    width: 40px;
    z-index: 99999;
}

#topcontrol:hover {
    transform: rotate(0);
}


/*--- sticky header ---*/

header.stick {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
}

header.sticky {
    position: fixed;
}


/*--- landing page ---*/

.log-reg-area > h2 {
    font-weight: 500;
    text-transform: capitalize;
}

.land-featurearea {
    background: #1fb6ff none repeat scroll 0 0;
    color: #fff;
    float: left;
    height: 100vh;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 100%;
}

.land-meta {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
}

.land-meta > h1 {
    font-family: hobo std;
}

.land-meta > p {
    color: #fff;
    letter-spacing: 0.5px;
}

.log-reg-area > p {
    color: #878787;
    font-size: 14px;
}

.friend-logo {
    display: inline-block;
    width: 100%;
}

.friend-logo > span {
    font-family: hobo std;
    font-size: 200px;
    position: relative;
}

.friend-logo > span::before,
.friend-logo > span::after {
    background: #0a98dc none repeat scroll 0 0;
    border: 16px solid rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    content: "";
    height: 180px;
    left: -42px;
    position: absolute;
    top: 20px;
    width: 180px;
    z-index: -1;
}

.land-meta > a.folow-me:hover {
    text-shadow: 0 1px 1px #454545;
}

.login-reg-bg {
    background: #f4f7f6 none repeat scroll 0 0;
    float: left;
    height: 100vh;
    position: relative;
    width: 100%;
}

.log-reg-area {
    background: #fff none repeat scroll 0 0;
    box-shadow: 0 0 35px #e2e2e2;
    display: block;
    float: none;
    left: 50%;
    padding: 35px 55px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 505px;
}

.log-reg-area form .checkbox {
    display: inline-block;
    width: 50%;
}

.log-reg-area form .forgot-pwd,
.log-reg-area form .already-have {
    display: inline-block;
    font-size: 14px;
    text-align: right;
    width: 48.9%;
}

.log-reg-area form .forgot-pwd:hover,
.log-reg-area form .already-have:hover {
    text-decoration: underline;
}

.log-reg-area .checkbox label,
.form-radio label {
    color: #999;
    font-size: 13px;
}

.submit-btns {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
}

.form-radio > .radio {
    display: inline-block;
    margin-bottom: 0;
    width: 20%;
}

.form-radio {
    margin: 0;
}

.form-group {
    margin-bottom: 15px;
    margin-top: 15px;
    display: inline-block;
    width: 100%;
}

.log-reg-area.reg {
    display: none;
}

.login-reg-bg.show .log-reg-area.reg {
    display: block;
}

.login-reg-bg.show .log-reg-area.sign {
    display: none;
}


/*--- topbar ---*/

.topbar {
    background: #fff;
    display: block;
    height: 60px;
    padding: 0 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 999;
    position: relative;
}

.logo {
    display: inline-block;
    vertical-align: inherit;
    width: 15%;
    position: relative;
    z-index: 10;
}

.topbar > form {
    display: inline-block;
    vertical-align: sub;
    width: 26%;
    position: relative;
}

.top-area {
    display: inline-block;
    text-align: right;
    vertical-align: middle;
    width: 84%;
}

.top-area > ul {
    display: inline-block;
    line-height: 56px;
    list-style: outside none none;
    margin-bottom: 0;
    margin-right: 35px;
    padding-left: 0;
    vertical-align: middle;
}

.top-area > ul > li {
    display: inline-block;
    position: relative;
    vertical-align: top;
    z-index: 2;
}

.top-area > ul > li > a {
    color: #999;
    display: inline-block;
    font-size: 18px;
    padding: 0 15px;
    vertical-align: middle;
}

.top-area .user-img {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    line-height: 60px;
}

.top-area .user-img > span.status {
    bottom: 10px;
    right: 5px;
}

.top-area > span.main-menu {
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    margin-left: 20px;
    margin-right: -10px;
    vertical-align: inherit;
}

.top-area .user-img > img {
    border-radius: 50%;
    display: inline-block;
    transform: scale(0.7);
    vertical-align: inherit;
}

.form-search {
    position: absolute;
    right: -15px;
    top: 100%;
    width: 300px;
    opacity: 0;
    visibility: hidden;
	line-height: initial;
}

.searched.active .form-search {
    opacity: 1;
    visibility: visible;
}

.form-search input {
    border-style: none none solid;
    border-width: medium medium 1px;
    box-shadow: 0 5px 9px rgba(0, 0, 0, 0.1);
    color: #999999;
    font-size: 15px;
    padding: 15px 18px;
    width: 100%;
}

.form-search button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    color: #999;
    position: absolute;
    right: 5px;
    top: 14px;
}

.top-area > ul > li > a > span {
    bottom: 10px;
    font-size: 11px;
    line-height: initial;
    position: absolute;
    right: 8px;
}


/*--- timeline area ---*/

.feature-photo .container-fluid {
    padding: 0 43px;
}

.feature-photo {
    display: block;
    position: relative;
    width: 100%;
}

.feature-photo > figure {
    margin-bottom: 0;
}

.feature-photo > figure img {
    display: inline-block;
    width: 100%;
}

.user-avatar {
    border: 5px solid rgba(255, 255, 255, 0.99);
    border-radius: 100%;
    box-shadow: 0 1px 0 #e1e8ed;
    float: right;
    margin-top: -138px;
    overflow: hidden;
    position: relative;
    width: auto;
}

.user-avatar > figure > img {
    width: 100%;
	border-radius: 100%;
}

.user-avatar > figure {
    display: inline-block;
    margin-bottom: 0;
    position: relative;
    width: 100%;
}

.timeline-info {
    background: #fff none repeat scroll 0 0;
    display: block;
    line-height: 59px;
    width: 100%;
}

.timeline-info > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 20px;
    vertical-align: middle;
    width: 100%;
}

.timeline-info > ul li {
    display: inline-block;
    margin-right: 50px;
    position: relative;
}

.timeline-info > ul li a {
    display: inline-block;
    font-size: 13.5px;
    margin-right: 40px;
    position: relative;
    line-height: initial;
    text-transform: capitalize;
    padding-bottom: 3px;
    font-weight: 500;
}

.timeline-info > ul li a:last-child {
    margin-right: 0;
}

.timeline-info .admin-name > span {
    bottom: 14px;
    color: #3a3a3a;
    font-size: 10px;
    line-height: 5px;
    position: absolute;
    right: 0;
}

.timeline-info .admin-name > h5 {
    color: #088dcd;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0;
    vertical-align: super;
}

.timeline-info > ul li a::before {
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: all 0.2s linear 0s;
    visibility: hidden;
    width: 0;
}

.timeline-info > ul li a::after {
    border-bottom: 8px solid;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    bottom: -12px;
    content: "";
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    display: none;
}

.timeline-info > ul li a.active::after {
    display: block;
}

.timeline-info > ul li a:hover::before {
    opacity: 1;
    visibility: visible;
    width: 100%;
}

.edit-phto {
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
    bottom: 100px;
    color: #fff;
    left: 275px;
    padding: 5px 20px;
    position: absolute;
    z-index: 9;
    border-radius: 3px;
    border: 1px solid transparent;
}

.edit-phto:hover {
    background: transparent none repeat scroll 0 0;
    border: 1px solid;
    color: #fff;
}

.fileContainer {
    color: #d8d8d8;
    font-size: 11px;
    margin: 0 0 0 5px;
    position: relative;
    text-transform: capitalize;
}

.fileContainer [type=file] {
    cursor: pointer;
    display: block;
    filter: alpha(opacity=0);
    opacity: 0;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0;
    width: 100%;
    overflow: hidden;
}

.edit-phto .fileContainer [type="file"] {
    height: 35px;
    top: -11px;
    width: 126px;
}

.user-avatar .edit-phto {
    border-radius: 80px;
    bottom: -40px;
    left: 20px;
    opacity: 0;
    padding: 5px;
    text-align: center;
    transition: all 0.3s linear 0s;
    visibility: hidden;
    width: 78%;
}

.user-avatar:hover .edit-phto {
    bottom: 30px;
    opacity: 1;
    visibility: visible;
}


/*--- dropdowns ---*/

.dropdowns {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e1e8ed;
    list-style: outside none none;
    max-height: 355px;
    overflow: auto;
    padding-left: 0;
    position: absolute;
    right: -50px;
    text-align: left;
    top: 100%;
    width: 260px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s linear 0s;
	line-height: initial;
}

.dropdowns.active {
    opacity: 1;
    visibility: visible;
}

.drops-menu {
    list-style: outside none none;
    padding-left: 0;
}

.drops-menu > li > a {
    border-bottom: 1px solid #e1e8ed;
    display: inline-block;
    padding: 10px;
    width: 100%;
}

.drops-menu > li {
    display: inline-block;
    position: relative;
    width: 100%;
}

.drops-menu > li > .tag {
    color: #fff;
    display: inline-block;
    font-size: 11px;
    padding: 0 6px;
    position: absolute;
    right: 0;
    top: 0;
}

.drops-menu > li:nth-child(2n) > a {
    background: whitesmoke none repeat scroll 0 0;
}

.drops-menu > li a img {
    display: inline-block;
    max-width: 16.7%;
    vertical-align: top;
    width: 16.7%;
    border-radius: 100%;
}

.mesg-meta {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: 81%;
}

.mesg-meta > h6 {
    font-size: 13.5px;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin-bottom: 0;
    text-transform: capitalize;
}

.mesg-meta > span {
    color: #757575;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.mesg-meta > i {
    color: #999;
    font-size: 12px;
    font-style: normal;
}

.drops-menu > li > a:hover {
    background: #fafafa none repeat scroll 0 0;
}

.dropdowns > span {
    border-bottom: 1px solid #ccc;
    color: #898989;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    padding: 5px 10px;
    width: 100%;
}

.dropdowns > a.more-mesg {
    display: inline-block;
    font-size: 14px;
    padding-bottom: 5px;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
}

.blue {
    background: #337ab7;
}

.red {
    background: #ed6b75;
}

.green {
    background: #33b7a0;
}

.dropdowns.active > a {
    background: #fafafa none repeat scroll 0 0;
    display: block;
    font-size: 13px;
    margin-bottom: 2px;
    padding: 5px 10px;
    text-align: center;
}

.dropdowns.active > a i {
    font-size: 11px;
    left: 8px;
    position: absolute;
    top: 10px;
}

.dropdowns.languages {
    width: 100px;
}

.dropdowns.active > a:hover {
    background: #f1f1f1 none repeat scroll 0 0;
}

.add-btn {
    bottom: 100px;
    position: absolute;
    right: 118px;
}

.add-btn > span {
    color: #fff;
    margin-right: 20px;
    text-shadow: 0 2px 0 #4a4a4a;
}

.add-btn > a:hover {
    background: transparent none repeat scroll 0 0;
    border: 1px solid;
}

.add-btn > a {
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    padding: 4px 20px;
    border: 1px solid transparent;
}


/*--- sidebar widgets ---*/

.sidebar {
    display: table;
    float: none;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 100%;
}

.sidebar .widget {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 18px;
    background: #fdfdfd;
    border: 1px solid #ede9e9;
    border-radius: 5px;
}

.sidebar .widget:last-child {
    margin-bottom: 0;
}

.sidebar .widget > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding: 0 25px 25px;
    width: 100%;
}

.sidebar .widget-title {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #424242;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 20px 20px 10px;
    position: relative;
    text-transform: capitalize;
    width: 100%;
}

.sidebar .widget-title::before {
    bottom: 0;
    content: "";
    height: 2px;
    left: 20px;
    position: absolute;
    width: 20%;
}

.sidebar .widget li {
    display: inline-block;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
}

.sidebar .widget li:last-child {
    margin-bottom: 0;
}

.sidebar .widget li i {
    color: #999;
    display: inline-block;
    font-size: 11px;
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
}

.sidebar .widget li > a {
    font-size: 14px;
    text-transform: capitalize;
    display: inline-block;
    position: relative;
    font-weight: 400;
    color: #797979;
    vertical-align: top;
}

.sidebar .widget li > a i {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    color: #fff;
    font-size: 25px;
}

.sidebar .widget ul.naves li i {
    display: inline-block;
    font-size: 16px;
    vertical-align: baseline;
}

.activity-meta {
    display: inline-block;
    width: 100%;
}

.activity-meta > i {
    color: #999;
    float: left;
    font-size: 12px;
    width: 100%;
}

.activity-meta > span {
    display: inline-block;
    width: 100%;
    font-size: 13px;
    font-weight: 500;
}

.activity-meta > h6 {
    float: left;
    font-size: 13px;
    margin-bottom: 0;
    margin-top: 7px;
    width: 100%;
}

.activity-meta > h6 a {}

.activitiez > li::before {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 2px;
}

.activitiez > li {
    padding-left: 12px;
}

.central-meta {
    background: #fdfdfd none repeat scroll 0 0;
    border: 1px solid #ede9e9;
    border-radius: 5px;
    display: inline-block;
    width: 100%;
    margin-bottom: 17px;
    padding: 25px;
}

.new-postbox {
    display: inline-block;
    width: 100%;
}

.new-postbox > figure {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: top;
    width: 10.4%;
}

.newpst-input {
    display: inline-block;
    margin-left: 10px;
    vertical-align: top;
    width: 85.5%;
}

.newpst-input > form {
    display: inline-block;
    width: 100%;
}
.newpst-input textarea {
    float: left;
    width: 100%;
}
.attachments {
    border: 1px solid #eee;
    display: block;
    padding: 10px;
    text-align: right;
    border-top: 0;
    background: #fff;
}

.attachments > ul {
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
}

.attachments li {
    display: inline-block;
    margin-left: 5px;
}

textarea {
    border: 1px solid #eeeeee;
    border-radius: 6px 6px 0 0;
    padding: 10px;
    width: 100%;
    border-bottom: 0;
}

form button {
    border: medium none;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 20px;
    border-radius: 4px;
}

.attachments .fileContainer [type="file"] {
    right: 6px;
    top: -18px;
    width: 20px;
}

.friend-info {
    display: inline-block;
    position: relative;
    width: 100%;
}

.friend-info > figure {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
    width: 8%;
}

.friend-name {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: 90%;
}

.friend-name > ins {
    float: left;
    font-weight: 500;
    width: 100%;
    font-size: 14.5px;
    text-decoration: none;
}

.friend-name > span {
    color: #999;
    float: left;
    font-size: 12px;
    text-transform: capitalize;
    width: 100%;
}

.post-meta {
    float: left;
    margin-top: 15px;
    width: 100%;
}

.post-meta > img {
    float: left;
    width: 100%;
}

.description {
    float: left;
    margin-top: 12px;
    width: 100%;
}

.description > p {
    margin-bottom: 20px;
}

.description > span {
    color: #424242;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    display: inline-block;
    margin-bottom: 5px;
}

/*-- sharing post area ----*/

.we-video-info {
    float: left;
    padding: 15px 0 10px;
    width: 100%;
    position: relative;
    z-index: 0;
}

.we-video-info > ul {
    float: left;
    width: 100%;
    line-height: 27px;
    padding-left: 0;
    margin-bottom: 0;
}

.social-media {
    vertical-align: sub;
}

.we-video-info > ul li {
    display: inline-block;
    font-size: 13px;
    margin-right: 40px;
}

.we-video-info > ul li span {
    font-size: 16px;
    font-weight: 400;
    margin-right: 3px;
    position: relative;
}

.we-video-info > ul li.upload-date {
    float: right;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}

.upload-date > i {
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
    margin-left: 5px;
    text-transform: capitalize;
}

.we-video-info > ul li span.dislike {
    color: red;
    cursor: pointer;
    transition: all 0.2s linear 0s;
}

.we-video-info > ul li span ins {
    font-size: 11px;
    left: 20px;
    position: absolute;
    text-decoration: none;
    top: -10px;
}

.we-video-info > ul li span.like {
    color: green;
    cursor: pointer;
    transition: all 0.2s linear 0s;
}

.we-video-info > ul li span.like:hover .we-video-info > ul li span.dislike:hover {
    trnsform: scale(1.1);
}


/*--- social icons opening hovers style ---*/

.absolute-center,
.menu,
.menu .btn .fa,
.menu .btn.trigger .line {
    color: #fff;
    line-height: 25px;
    position: relative;
    right: 0;
    text-align: center;
    top: 0;
}

.menu {
    width: 2em;
    height: 2em;
    z-index: 2;
}

.menu .btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #111;
    opacity: 0;
    z-index: -10;
    cursor: pointer;
    padding: 0;
    border: none;
    font-size: 13px;
    -webkit-transition: opacity 1s, z-index 0.3s, -webkit-transform 1s;
    transition: opacity 1s, z-index 0.3s, transform 1s;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}

.menu .btn .fa {
    font-size: 0.9em;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
}

.menu .btn:hover .fa {
    color: #f44535;
}

.menu .btn.trigger {
    opacity: 1;
    z-index: 100;
    cursor: pointer;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
}

.menu .btn.trigger:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
}

.menu .btn.trigger:hover .line {
    background-color: rgba(255, 255, 255, 0.7);
}

.menu .btn.trigger:hover .line:before,
.menu .btn.trigger:hover .line:after {
    background-color: rgba(255, 255, 255, 0.7);
}

.menu .btn.trigger .line {
    width: 60%;
    height: 6px;
    background: #424242;
    border-radius: 6px;
    -webkit-transition: background-color 0.3s, height 0.3s, top 0.3s;
    transition: background-color 0.3s, height 0.3s, top 0.3s;
}

.menu .btn.trigger .line:before,
.menu .btn.trigger .line:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 6px;
    background: #424242;
    border-radius: 6px;
    -webkit-transition: background-color 0.3s, -webkit-transform 0.3s;
    transition: background-color 0.3s, transform 0.3s;
}

.menu .btn.trigger .line:before {
    top: -12px;
    -webkit-transform-origin: 15% 100%;
    -ms-transform-origin: 15% 100%;
    transform-origin: 15% 100%;
}

.menu .btn.trigger .line:after {
    top: 12px;
    -webkit-transform-origin: 25% 30%;
    -ms-transform-origin: 25% 30%;
    transform-origin: 25% 30%;
}

.menu .rotater {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
}

.menu.active .btn-icon {
    opacity: 1;
    z-index: 50;
}

.menu.active .trigger .line {
    height: 0px;
    top: 45%;
}

.menu.active .trigger .line:before {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 110%;
}

.menu.active .trigger .line:after {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 110%;
}


/* horrible things are happening here
for some reason nth-child(1) is always busy and elements starting from 2 */

.rotater:nth-child(1) {
    -webkit-transform: rotate(-22.5deg);
    -ms-transform: rotate(-22.5deg);
    transform: rotate(-22.5deg);
}

.menu.active .rotater:nth-child(1) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(22.5deg);
    -ms-transform: translateX(-4em) rotate(22.5deg);
    transform: translateX(-4em) rotate(22.5deg);
}

.rotater:nth-child(2) {
    -webkit-transform: rotate(22.5deg);
    -ms-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
}

.menu.active .rotater:nth-child(2) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-22.5deg);
    -ms-transform: translateX(-4em) rotate(-22.5deg);
    transform: translateX(-4em) rotate(-22.5deg);
}

.rotater:nth-child(3) {
    -webkit-transform: rotate(67.5deg);
    -ms-transform: rotate(67.5deg);
    transform: rotate(67.5deg);
}

.menu.active .rotater:nth-child(3) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-67.5deg);
    -ms-transform: translateX(-4em) rotate(-67.5deg);
    transform: translateX(-4em) rotate(-67.5deg);
}

.rotater:nth-child(4) {
    -webkit-transform: rotate(112.5deg);
    -ms-transform: rotate(112.5deg);
    transform: rotate(112.5deg);
}

.menu.active .rotater:nth-child(4) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-112.5deg);
    -ms-transform: translateX(-4em) rotate(-112.5deg);
    transform: translateX(-4em) rotate(-112.5deg);
}

.rotater:nth-child(5) {
    -webkit-transform: rotate(157.5deg);
    -ms-transform: rotate(157.5deg);
    transform: rotate(157.5deg);
}

.menu.active .rotater:nth-child(5) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-157.5deg);
    -ms-transform: translateX(-4em) rotate(-157.5deg);
    transform: translateX(-4em) rotate(-157.5deg);
}

.rotater:nth-child(6) {
    -webkit-transform: rotate(202.5deg);
    -ms-transform: rotate(202.5deg);
    transform: rotate(202.5deg);
}

.menu.active .rotater:nth-child(6) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-202.5deg);
    -ms-transform: translateX(-4em) rotate(-202.5deg);
    transform: translateX(-4em) rotate(-202.5deg);
}

.rotater:nth-child(7) {
    -webkit-transform: rotate(247.5deg);
    -ms-transform: rotate(247.5deg);
    transform: rotate(247.5deg);
}

.menu.active .rotater:nth-child(7) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-247.5deg);
    -ms-transform: translateX(-4em) rotate(-247.5deg);
    transform: translateX(-4em) rotate(-247.5deg);
}

.rotater:nth-child(8) {
    -webkit-transform: rotate(292.5deg);
    -ms-transform: rotate(292.5deg);
    transform: rotate(292.5deg);
}

.menu.active .rotater:nth-child(8) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-292.5deg);
    -ms-transform: translateX(-4em) rotate(-292.5deg);
    transform: translateX(-4em) rotate(-292.5deg);
}

.rotater:nth-child(9) {
    -webkit-transform: rotate(337.5deg);
    -ms-transform: rotate(337.5deg);
    transform: rotate(337.5deg);
}

.menu.active .rotater:nth-child(9) .btn-icon {
    -webkit-transform: translateX(-4em) rotate(-337.5deg);
    -ms-transform: translateX(-4em) rotate(-337.5deg);
    transform: translateX(-4em) rotate(-337.5deg);
}


/*--- social media style end ---*/


/*--- comment area ---*/

.coment-area {
    display: inline-block;
    margin-top: 10px;
    width: 100%;
}

.we-comet {
    float: left;
    width: 100%;
    padding-left: 0;
    list-style: none;
}

.we-comet > li {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}

.we-comet > li:last-child {
    margin-bottom: 0;
}

.comet-avatar {
    display: table-cell;
    max-width: 7.6%;
    vertical-align: top;
    width: 7.6%;
}
.comet-avatar > img{
	max-width: 35px;
	width: 35px;
	min-width: 35px;
}
.we-comment {
    border: 1px solid #ede9e9;
    display: table-cell;
    margin-left: 20px;
    padding: 10px;
    vertical-align: top;
    position: relative;
    width: 65%;
}

.we-comment::before,
.peoples-mesg-box > ul > li p:before {
    border-bottom: 10px solid transparent;
    border-right: 11px solid #ede9e9;
    border-top: 10px solid transparent;
    left: -11px;
    top: 10px;
    position: absolute;
    content: '';
}

.we-comment::after,
.peoples-mesg-box > ul > li p:after {
    border-bottom: 8px solid transparent;
    border-right: 9px solid #fff;
    border-top: 8px solid transparent;
    left: -9px;
    top: 12px;
    position: absolute;
    content: '';
}

.we-comet > li ul {
    margin-left: 55px;
    margin-top: 20px;
    padding-left: 0;
    list-style: none;
}

.we-comet > li ul li {
    margin-bottom: 20px;
}

.we-comet li a.showmore {
    display: table;
    font-size: 12px;
    margin: 0 auto;
    text-transform: capitalize;
    font-weight: 500;
}

.we-comet > li ul li:last-child {
    margin-bottom: 0;
}

.coment-head {
    display: inline-block;
    width: 100%;
}

.coment-head > h5 {
    font-size: 13.5px;
    font-weight: 500;
    padding-bottom: 5px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 0;
    color: #2a2a2a;
}

.we-comment > p {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 0;
    max-width: 100%;
    margin-top: 5px;
}

.we-reply {
    text-transform: capitalize;
    font-size: 13px;
    display: inline-block;
    margin-left: 10px;
}

.coment-head > span {
    color: #999;
    font-size: 12px;
    padding-left: 10px;
    display: inline-block;
}

li.post-comment .comet-avatar {
    display: inline-block;
    max-width: 6%;
    vertical-align: top;
    width: 6%;
}

.post-comt-box {
    display: inline-block;
    padding-left: 15px;
    position: relative;
    width: 93%;
}

.post-comt-box form textarea {
    background: #f3f3f3 none repeat scroll 0 0;
    border-color: transparent;
    border-radius: 3px;
    color: #696969;
    font-size: 13px;
    font-weight: 400;
    height: 40px;
    line-height: 16px;
}

.add-smiles {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    line-height: 10px;
}

.add-smiles > span {
    font-size: 12px;
    cursor: pointer;
}

.smiles-bunch {
    background: #eaeaea none repeat scroll 0 0;
    border-radius: 5px;
    top: -63px;
    font-size: 13px;
    padding: 5px;
    position: absolute;
    right: 0;
    text-align: center;
    width: 150px;
    display: none;
}

.smiles-bunch.active {
    display: block;
}

.smiles-bunch > i {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 4px;
}

.smiles-bunch::before {
    border-top: 7px solid #eaeaea;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    content: "";
    position: absolute;
    right: 11px;
    bottom: -7px;
    width: auto;
}

.smiles-bunch > i:hover {
    transform: scale(1.1);
}

.post-comt-box form button {
    bottom: 2px;
    position: absolute;
    right: 0;
    background: none;
}


/*--- search friend widget ---*/

#searchDir .filterinput {
    border: 1px solid #eaeaea;
    color: #575757;
    font-size: 14px;
    padding: 5px 10px;
    width: 100%;
}

#searchDir {
    padding: 0 20px;
}

#people-list {
    margin-top: 20px;
    max-height: 450px;
    position: relative;
}

#people-list figure {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
    width: 23%;
    position: relative;
}

span.status {
    background: #bebebe none repeat scroll 0 0;
    border-radius: 50%;
    bottom: 0;
    display: inline-block;
    height: 12px;
    padding: 2px;
    position: absolute;
    right: 0;
    width: 12px;
}

span.status::after {
    background: white none repeat scroll 0 0;
    border-radius: 100%;
    content: "";
    height: 6px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
}

span.status.f-online {
    background: #7FBA00;
}


span.status.f-away {
    background: #ffd300;
}

span.status.f-off {
    background: #a9a9a9;
}

.friendz-meta {
    display: inline-block;
    line-height: 17px;
    padding-left: 10px;
    vertical-align: middle;
    width: 74%;
}

.friendz-meta > i {
    color: #999;
    display: inline-block;
    font-size: 13px;
    width: 100%;
}

.friendz-meta > a {
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    width: 100%;
}


/*--- footer ---*/

footer {
    background: #fff;
    float: left;
    padding: 75px 0;
    width: 100%;
    position: relative;
}

footer::before {
    background: rgba(0, 0, 0, 0) linear-gradient(to right, #ffffff 0%, #2fa7cd 50%, #ffffff 100%) repeat scroll 0 0;
    content: "";
    height: 5px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}

.widget {
    float: left;
    width: 100%;
}

.foot-logo > p {
    color: #545454;
}

.location {
    list-style: outside none none;
    padding-left: 0;
    margin: 0;
}

.location > li {
    display: block;
    margin-bottom: 15px;
}

.location > li:last-child {
    margin-bottom: 0;
}

.ti-map-alt {
    display: inline-block;
    margin-right: 10px;
    vertical-align: sub;
    width: 20px;
}

.location > li i {
    margin-right: 10px;
    color: #4b4b4b;
}

.location > li p {
    display: inline-block;
    font-size: 14px;
    vertical-align: top;
    width: 88%;
    margin-bottom: 0;
    color: #545454;
}

.widget > a {
    display: inline-block;
    margin-bottom: 32px;
}

.widget-title {
    float: left;
    margin-bottom: 35px;
    width: 100%;
}

footer .widget-title h4 {
    color: #424242;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    position: relative;
}

footer .widget-title h4::before {
    bottom: -6px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 20%;
}

footer .widget-title {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
}

.widget .list-style {
    list-style: outside none none;
    padding-left: 0;
    margin-bottom: 0;
}

.list-style > li {
    display: inline-block;
    font-size: 14px;
    margin-bottom: 12px;
    text-transform: capitalize;
    width: 100%;
}

.list-style > li:last-child {
    margin-bottom: 0;
}

.list-style > li > i {
    margin-right: 15px;
}

.list-style > li a {
    position: relative;
}

a.underline {
    position: relative;
}

a.underline:before,
.list-style li > a:before {
    background: #545454;
    bottom: -5px;
    content: "";
    height: 1px;
    left: 0;
    opacity: 0;
    position: absolute;
    visibility: hidden;
    width: 100%;
    transition: all 0.2s linear 0s;
}

a.underline:hover:before,
.list-style li > a:hover:before {
    opacity: 1;
    visibility: visible;
    bottom: 0;
}

.foot-logo {
    display: inline-block;
    width: 100%;
}

footer .logo {
    margin-bottom: 15px;
    width: 100%;
}

.logo > a {
    display: inline-block;
    vertical-align: middle;
}

.logo > h4 {
    display: inline-block;
    font-family: HoboStd;
    margin-bottom: 0;
    vertical-align: middle;
    width: 80%;
    color: #3e3e3e;
}


/*--- apps widget ---*/

.colla-apps {
    float: left;
    list-style: outside none none;
    padding-left: 0;
    width: 100%;
}

.colla-apps > li {
    display: inline-block;
    width: 100%;
}

.colla-apps > li a {
    border: 1px solid #5d6371;
    border-radius: 5px;
    display: inline-block;
    font-size: 16px;
    margin-bottom: 15px;
    padding: 5px 0;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    transition: all 0.2s linear 0s;
}

.colla-apps > li:last-child a {
    margin-bottom: 0;
}

.colla-apps > li a:hover {
    color: #fff;
}

.colla-apps > li a i {
    margin-right: 12px;
}


/*--- bottombar ---*/

.bottombar {
    background: #f6f6f6;
    float: left;
    padding: 20px 0;
    width: 100%;
}

.copyright {
    float: left;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.2px;
}

.bottombar i {
    float: right;
}

.followers {
    max-height: 260px;
    position: relative;
}

.followers > li figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 45px;
    min-width: 45px;
    vertical-align: middle;
    width: 45px;
}

.friend-meta {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: 72%;
}

.friend-meta > h4 {
    display: inline-block;
    font-size: 13.5px;
    margin-bottom: 0;
    width: 100%;
}

.friend-meta > h4 a {
    transition: all 0.2s linear 0s;
}

.friend-meta > a {
    display: inline-block;
    font-size: 12px;
    position: relative;
}

.user-setting {
    background: #fff none repeat scroll 0 0;
    border-radius: 0 0 3px 3px;
    position: absolute;
    right: -50px;
    text-align: left;
    top: 100%;
    width: 150px;
    opacity: 0;
    visibility: hidden;
    line-height: initial;
    border: 1px solid #e1e8ed;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

.user-setting.active {
    opacity: 1;
    visibility: visible;
}

.user-setting > a {
    display: inline-block;
    font-size: 13px;
    padding: 10px 15px;
    text-transform: capitalize;
    width: 100%;
    background: #fafafa;
    position: relative;
}

.user-setting .status {
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

.user-setting > a i {
    color: #999;
    font-size: 12px;
    margin-right: 8px;
}

.user-setting > a:hover {
    background: #f1f1f1;
}


/*---- setting panel side ---*/

.toggle-setting {
    border-bottom: 1px dotted #333333;
    float: left;
    padding: 15px 0;
    width: 100%;
}

.toggle-setting > span {
    color: #4f4f4f;
    float: left;
    font-family: Muli;
    font-size: 13px;
    letter-spacing: 0.3px;
}

.toggle-setting > .toggle-switch {
    float: right;
    margin: 0;
}


/*--- toogle switch button ---*/

.setting-row input {
    display: none;
}

.setting-row input + label {
    background-color: #bbbbbb;
    background-image: none;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 1em;
    height: 20px;
    line-height: 1;
    padding: 0.16667rem;
    position: relative;
    text-align: center;
    transition: all 0.1s ease-in-out 0s;
    width: 52px;
}

.setting-row input + label::before {
    color: #b7b7b7;
    content: attr(data-off-label);
    display: block;
    font-family: inherit;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 13px;
    margin: 0.21667rem;
    min-width: 20px;
    overflow: hidden;
    position: absolute;
    right: 0.21667rem;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    transition: all 0.1s ease-in-out 0s;
}

.setting-row input + label::after {
    background-color: #f7f7f7;
    border-radius: 0px;
    box-shadow: none;
    content: "";
    height: 14px;
    left: 0.267rem;
    top: 3px;
    position: absolute;
    transition: all 0.1s ease-in-out 0s;
    width: 14px;
}


/*input[switch]:checked + label {
    background-color: #33b7a0;
}*/

.setting-row input:checked + label::before {
    color: #fff;
    content: attr(data-on-label);
    left: 0.21667rem;
    right: auto;
}

.setting-row input:checked + label::after {
    background-color: #f7f7f7;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
    left: 2.16667rem;
}


/*input[switch="bool"] + label {
    background-color: #ed6b75;
}*/

.setting-row input + label::before {
    color: #fff;
}


/*input[switch="bool"]:checked + label {
    background-color: #bce954;
}*/

.side-panel {
    background: #fefefe;
    bottom: 0;
    float: left;
    padding: 20px 15px;
    position: fixed;
    right: -100%;
    top: 60px;
    width: 280px;
    z-index: 9999;
    transition: all 0.3s linear 0s;
    border: 1px solid #dfdfdf;
}

.side-panel.active {
    right: 0;
}

.panel-title {
    color: #303030;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.mm-panel.mm-hasnavbar .panel-title {
    margin-top: 20px;
}

.side-panel > form {
    float: left;
    width: 100%;
    margin-bottom: 20px;
}

.setting-row {
    border-bottom: 1px solid #e1e8ed;
    display: inline-block;
    margin-bottom: 7px;
    padding-bottom: 7px;
    text-align: center;
    width: 100%;
}

.setting-row > span,
.setting-row > label {
    display: inline-block;
    vertical-align: text-top;
}

.setting-row > span {
    font-size: 13px;
    line-height: initial;
    text-align: left;
    text-transform: capitalize;
    width: 76%;
}

.setting-row > label {
    margin-bottom: 0;
}

.theme-layout::before {
    background: rgba(0,0,0,.7);
    background-repeat: repeat;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
    transition: all 0.5s linear 0s;
    visibility: hidden;
    opacity: 0;
}

.theme-layout.active::before {
    opacity: 1;
    visibility: visible;
}


/*-- widgets ---*/

.sidebar .widget ul.recent-photos li {
    float: left;
    margin-bottom: 5px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    width: 31%;
}

.widget ul.recent-photos {
    display: inline-block;
    padding-bottom: 20px;
    width: 100%;
}
.widget ul.recent-photos li a i{
	overflow: unset;
}

/*-- short profile widget ---*/

.short-profile li span {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    text-transform: capitalize;
    width: 100%;
}

.short-profile > li {
    border-bottom: 1px solid #eaeaea;
}

.short-profile > li:last-child {
    border-bottom: 0 none;
}


/*--- social widget ---*/

.widget .socials > li {
    margin-bottom: 10px;
}

.socials > li a {
    color: #fff;
    padding: 3px 10px;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
}

.socials > li a i {
    color: #333;
    float: left;
}

li.facebook {
    background: #2f5b9d;
}

li.twitter {
    background: #38bff1;
}

li.google {
    background: #f24756;
}

.socials > li a span {
    font-size: 13px;
	color: #fff;
}

.socials > li a ins {
    float: right;
    font-size: 12px;
    margin-top: 4px;
    text-decoration: none;
	color: #fff;
}

.socials > li a:hover {
    color: #fff !important;
}


/*--- twitter feed widget ---*/

.twiter-feed {
    display: inline-block;
    position: relative;
    width: 100%;
    max-height: 395px;
}

.twiter-feed > li > i,
.twiter-feed > li span {
    display: inline-block;
    vertical-align: top;
}

.twiter-feed > li > span {
    color: #999;
    font-size: 12px;
    vertical-align: top;
    width: 82%;
}

.widget .twiter-feed > li > i {
    color: #38bff1;
    font-size: 20px;
    width: 20px;
}

.widget .twiter-feed > li > span i {
    color: #545454;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    width: 100%;
}

.widget .twiter-feed > li > em {
    color: #b8b8b8;
    font-size: 12px;
    font-style: normal;
    text-transform: capitalize;
}

.twiter-feed > li p,
.short-profile li p {
    color: #888888;
    line-height: 23px;
    margin-top: 8px;
    font-size: 14px;
}

.short-profile li p {
    margin-top: 0;
}

.twiter-feed > li p a {
    font-size: 12px;
}


/*--- svg play button ---*/

.edit-phto,
.add-btn > a {
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.stroke-solid {
    stroke-dashoffset: 0;
    stroke-dashArray: 300;
    stroke-width: 4px;
    transition: stroke-dashoffset 1s ease, opacity 1s ease;
	opacity: 0.7;
}

.icon {
    transform: scale(0.8);
    transform-origin: 50% 50%;
    transition: transform 200ms ease-out;
}

.play:hover .stroke-solid {
    opacity: 1;
    stroke-dashoffset: 300;
}

.play:hover .icon {
    transform: scale(0.9);
}

.play {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}


/*--- banner widget ---*/

.banner {
    color: #fff;
    float: left;
    padding: 20px 30px;
    width: 100%;
    position: relative;
    z-index: 0;
}

.baner-top {
    display: inline-block;
    text-align: right;
    width: 100%;
    z-index: 1;
    position: relative;
}

.widget .banner .bg-image {
    z-index: auto;
}

.baner-top > span {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    width: 90%;
}

.banermeta {
    display: inline-block;
    margin-top: 30px;
    width: 100%;
    z-index: 9;
    position: relative;
}

.banermeta > p {
    color: #fff;
    font-size: 23px;
    font-weight: 400;
    line-height: initial;
    text-transform: uppercase;
}

.banermeta > span {
    float: left;
    font-size: 13px;
    font-weight: 300;
    width: 100%;
}

.banermeta > a {
    background: #fff none repeat scroll 0 0;
    color: #333;
    float: left;
    line-height: initial;
    margin-top: 30px;
    padding: 8px 0;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
}


/*---  404 page ---*/

.error-page {
    float: left;
    height: 100vh;
    position: relative;
    width: 100%;
}

.bg-image {
    float: left;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.error-meta {
    text-align: center;
    margin-top: 30px;
}

.error-meta > h1 {
    font-size: 100px;
    margin-bottom: 0;
    text-transform: capitalize;
    font-weight: 500;
    color: #222;
}

.error-meta span {
    display: inline-block;
    font-size: 17px;
    text-align: center;
    width: 100%;
    text-transform: capitalize;
}

.error-meta > a {
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    margin-top: 30px;
    padding: 6px 30px;
}


/*--- contact page ---*/

.g-map {
    float: left;
    width: 100%;
    height: 400px;
}

#map-canvas {
    height: 400px;
}

.g-map::before {
    background: #088dcd none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    top: 0;
    transition: all 0.2s linear 0s;
    width: 100%;
    z-index: 2;
}

.g-map:hover::before {
    opacity: 0;
    visibility: hidden;
}

.map-meta {
    background: #088dcd none repeat scroll 0 0;
    color: #fff;
    left: 10%;
    padding: 20px;
    position: absolute;
    top: 100px;
    width: 500px;
    z-index: 9;
}

.map-meta > h1 {
    display: inline-block;
    text-transform: capitalize;
    width: 100%;
}

.map-meta > p {
    color: #e9e9e9;
    font-size: 16px;
}

.contct-info {
    background: #fff none repeat scroll 0 0;
    box-shadow: 0px 10px 10px #e6e6e6;
    float: left;
    position: relative;
    width: 100%;
    margin-bottom: 50px;
}

.contact-form {
    float: left;
    padding: 50px 60px;
    position: relative;
    width: 60%;
}

.cntct-adres {
    background: #103f6e;
    float: left;
    padding: 50px;
    position: relative;
    width: 40%;
    color: #fff;
}

.cnt-title > span {
    float: left;
    font-size: 22px;
    text-transform: capitalize;
    width: 80%;
    line-height: 27px;
}

.cnt-title > i {
    float: right;
    width: auto;
}

.cnt-title {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
}

.contact-form > form {
    display: inline-block;
    width: 100%;
}

.contact-form form .form-group {
    margin-right: 29px;
    width: 46.9%;
}

.contact-form form .form-group:nth-child(2n) {
    margin-right: 0;
}

.contact-form form .form-group:nth-last-child(2) {
    width: 100%;
}

.contact-form form .submit-btns {
    margin-top: 0;
    text-align: right;
}

.contact-form form .submit-btns i {
    color: #fff;
}

.cntct-adres > ul {
    display: inline-block;
    list-style: outside none none;
    padding-left: 0;
    width: 100%;
}

.cntct-adres li {
    display: inline-block;
    margin-bottom: 20px;
    padding-bottom: 20px;
    width: 100%;
}

.cntct-adres > ul li i {
    color: rgba(255, 255, 255, 0.45);
    display: inline-block;
    font-size: 25px;
    text-align: center;
    vertical-align: sub;
    width: 40px;
}

.cntct-adres .social-media > li {
    margin-right: 10px;
    padding-bottom: 0;
    width: auto;
}

.cntct-adres .social-media > li i {
    width: auto;
}

.bg-cntct {
    bottom: 80px;
    font-family: hobostd;
    font-size: 90px;
    opacity: 0.1;
    position: absolute;
    right: 10px;
    transform: rotate(-50deg);
}

.cntct-adres > h3 {
    display: inline-block;
    font-size: 25px;
    margin-bottom: 30px;
    margin-top: 6px;
    width: 100%;
    text-transform: capitalize;
}

.cntct-adres .social-media {
    float: left;
    margin-top: 45px;
}

.cntct-adres > ul > li span {
    display: inline-block;
    font-size: 17px;
    padding-left: 10px;
    vertical-align: middle;
    width: 80%;
}

.overlap {
    margin-top: -130px;
    z-index: 9;
}


/*--- knowledge base page ---*/

.color-bg {
    color: #fff;
}

.faq-top {
    display: inline-block;
    position: relative;
    text-align: center;
    width: 100%;
}

.faq-top > form {
    display: inline-block;
    max-width: 55%;
    position: relative;
    width: 100%;
}

.faq-top form input {
    border: medium none;
    display: inline-block;
    padding: 12px 105px 12px 20px;
    width: 100%;
}

.faq-top form button {
    font-size: 19px;
    height: 42px;
    position: absolute;
    right: 3px;
    text-transform: capitalize;
    top: 3px;
    width: 100px;
}

.faq-top > h1 {
    font-size: 60px;
    font-weight: 300;
    margin-bottom: 30px;
    text-transform: capitalize;
}

.know-box {
    margin-top: 70px;
}

.knowldeg-box {
    background: rgba(0, 0, 0, 0.1) none repeat scroll 0 0;
    display: inline-block;
    padding: 50px 30px;
    text-align: center;
}

.knowldeg-box > i {
    display: inline-block;
    font-size: 45px;
    width: 100%;
}

.knowldeg-box > span {
    display: inline-block;
    font-size: 25px;
    margin-top: 13px;
    text-transform: capitalize;
    width: 100%;
}

.knowldeg-box > p {
    color: #e6e6e6;
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 30px;
}

.main-title {
    display: inline-block;
    margin-bottom: 40px;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
}

.vid-links {
    display: inline-block;
    width: 100%;
}

.vid-links > h4 {
    display: inline-block;
    text-transform: capitalize;
    width: 100%;
}

.tutor-links {
    list-style: outside none none;
    margin-top: 20px;
    padding-left: 0;
}

.tutor-links > li {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-transform: capitalize;
}

.tutor-links > li i {
    margin-right: 15px;
}

.tutor-links > li:last-child {
    border-bottom: 0;
}

.knowldeg-box .underline:hover::before {
    background: #fff none repeat scroll 0 0;
}


/*--- faq page ---*/

nav.breadcrumb {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    display: inline-block;
    margin-bottom: 0;
    padding: 0;
    vertical-align: middle;
    width: 100%;
    font-size: 13px;
    z-index: 3;
    position: relative;
}

.top-banner {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    position: relative;
    z-index: 2;
    text-align: center;
    padding-top: 20px;
}

.top-banner > i {
    display: inline-block;
    max-width: 100px;
    vertical-align: middle;
    width: 100px;
}

.top-banner > h1 {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
}
.top-banner .breadcrumb > a{color: #fff;}
.breadcrumb > a {
    color: #424242;
}

.breadcrumb-item + .breadcrumb-item::before {
    color: inherit;
}

.breadcrumb-item.active {
    color: #aeaeae;
}

.card-header {
    background: #fafafa none repeat scroll 0 0;
    border-bottom: medium none;
    padding: 0;
}

.card {
    border: medium none;
    border-radius: 0;
    margin-bottom: 5px;
}

.accordion .card h5 button {
    color: #636363;
    font-size: 18px;
    text-decoration: none;
    font-weight: 300;
    padding: 10px 20px;
    text-align: left;
    width: 100%;
    border-radius: 0;
    background: #fff;
    white-space: normal;
}

.accordion .card h5 button::before {
    content: "";
    float: right;
    font-family: fontawesome;
}

.accordion .card h5 button[aria-expanded="true"]::before {
    transform: rotate(-180deg);
}

.accordion .card h5 button[aria-expanded="true"] {
    color: #fff;
}

.accordion {
    display: inline-block;
    margin-top: 30px;
    width: 100%;
}

.card-body {
    line-height: 30px;
    color: #888888;
}

.card-body ol,
.card-body ul {
    margin-top: 20px;
    padding-left: 40px;
}


/*--- photos page ---*/

.photos {
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
}

.photos > li {
    display: inline-block;
    min-width: 32.2%;
    width: 32.2%;
    margin: 0 1.3px;
}

.photos > li:hover a img {
    transform: scale(1.01);
}

.photos > li a {
    display: inline-block;
    overflow: hidden;
    width: 100%;
}

.photos > li a img {
    width: 100%;
}

.strip {
    display: inline-block;
    position: relative;
}

.page-header {
    background: #fbfbfb none repeat scroll 0 0;
    border-bottom: 1px solid #e1e8ed;
    border-top: 1px solid #e1e8ed;
    float: left;
    padding: 30px 15px;
    width: 100%;
}
.page-header .breadcrumb {
    float: right;
    padding-right: 30px;
    width: auto;
}
.header-inner {
    float: left;
    width: 100%;
}

.header-inner > h2 {
    font-size: 20px;
    text-transform: capitalize;
    width: 49.5%;
    display: inline-block;
    padding-left: 30px;
    vertical-align: middle;
}

.color-bg .breadcrumb-item.active {
    color: #d3d3d3;
}

.nearby-map #map-canvas {
    height: 330px;
}

.nearby-contct {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 35px;
    padding-left: 0;
    width: 100%;
}

.nearby-contct > li {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #eaf1f6;
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    transition: all 0.15s linear 0s;
}

.nearby-contct > li:last-child {
    margin-bottom: 0;
}

.nearby-contct > li:hover {
    box-shadow: 0 8px 8px #e1e8ec;
    border-color: transparent;
}

.nearly-pepls {
    display: inline-block;
    width: 100%;
}

.nearly-pepls > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 60px;
    min-width: 60px;
    vertical-align: middle;
    width: 60px;
}

.pepl-info {
    display: inline-block;
    padding-left: 15px;
    position: relative;
    vertical-align: middle;
    width: 85%;
}

.pepl-info > h4 {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
}

a.add-butn {
    color: #fff;
    float: right;
    font-size: 13px;
    line-height: initial;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    text-transform: capitalize;
    top: 10px;
	border-radius: 4px;
}

.pepl-info > span {
    float: left;
    font-size: 13px;
    text-transform: capitalize;
    width: 100%;
    line-height: initial;
}

.pepl-info > em {
    display: inline-block;
    font-size: 13px;
    font-style: normal;
    line-height: initial;
    margin-left: 40px;
    text-align: right;
    vertical-align: baseline;
}

.pepl-info > em i {
    margin-right: 5px;
}


/*---- your page widget ---*/

.your-page > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 55px;
    vertical-align: middle;
    width: 55px;
}

.page-meta {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: 69.8%;
}

.your-page {
    display: inline-block;
    padding: 0 20px 10px;
    width: 100%;
}

.page-meta > a {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    width: auto;
}

.page-meta > span {
    display: inline-block;
    font-size: 13px;
    width: 100%;
}

.page-meta > span i {
    margin-right: 5px;
    vertical-align: sub;
}

.page-meta > span em {
    border: 1px solid #cecece;
    display: inline-block;
    line-height: 8px;
    margin-left: 3px;
    padding: 3px;
}

.page-likes {
    float: left;
    margin: 20px 0;
    width: 100%;
}

.nav.nav-tabs.likes-btn {
    border-bottom: medium none;
    display: inline-block;
    width: 100%;
}

.nav.nav-tabs.likes-btn > li {
    float: left;
    margin-bottom: 10px;
    text-align: center;
    width: 50%;
}

.nav.nav-tabs.likes-btn > li a {
    background: #eeeeee none repeat scroll 0 0;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding: 5px 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 4px;
}

.nav.nav-tabs.likes-btn > li a.active {
    color: #fff;
}

.page-likes .tab-content .tab-pane > span {
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    float: left;
    width: 100%;
}

.page-likes .tab-content .tab-pane > span i {
    color: green;
    font-size: 15px;
    margin-right: 6px;
}

.users-thumb-list {
    float: left;
    text-align: center;
    width: 100%;
    margin-top: 20px;
}

.users-thumb-list > a {
    display: inline-block;
    margin-left: -17px;
}

.users-thumb-list > a:first-child {
    margin-left: 0;
}

.users-thumb-list > a img {
    border: 2px solid #fff;
    border-radius: 50%;
}

.page-likes .tab-content .tab-pane > a {
    color: green;
    float: left;
    font-size: 13px;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
}

.page-likes .tab-content .tab-pane > a:hover {
    text-decoration: underline;
}

.nav.nav-tabs {
    border: medium none;
}

.frnds {
    float: left;
    width: 100%;
}

.frnds .nav-tabs .nav-item {
    margin-right: 50px;
}

.frnds .nav-tabs .nav-item:last-child {
    margin-right: 0;
}

.frnds .nav-tabs .nav-item a.active {
    border-bottom: 1px solid;
}

.frnds .nav-tabs .nav-item a {
    font-weight: 500;
}

.frnds .nav-tabs .nav-item > span {
    border: 1px solid #ccc;
    border-radius: 30%;
    display: inline-block;
    font-size: 14px;
    line-height: initial;
    margin-left: 5px;
    text-align: center;
    width: 25px;
    color: #8d8d8d;
}

a.add-butn.more-action {
    background: lightslategray none repeat scroll 0 0;
    right: 74px;
}

#frends a.add-butn.more-action {
    right: 89px;
}

.nav-tabs--vertical {
    border-bottom: none;
    border-right: 1px solid #ddd;
    display: flex;
    flex-flow: column nowrap;
}

.nav-tabs--left .nav-item + .nav-item {
    text-transform: capitalize;
}

.nav-tabs--left .nav-link {
    transition: border-color .125s ease-in;
    white-space: nowrap;
    font-size: 14px;
}

.nav-tabs--left .nav-link:hover {
    border-color: transparent;
}

.nav-tabs--left .nav-link.active {
    color: #fff;
    border-radius: 0;
    border: none;
}

.nav-tabs--left .nav-link.active:hover {
    color: #fff;
    border-color: #dee2e6 #fff #dee2e6 #dee2e6;
}

.mt-2,
.my-2 {
    margin-top: 0;
    border: 1px solid #efefef;
}

.d-flex .tab-content {
    background: #f7f7f7 none repeat scroll 0 0;
    display: inline-block;
    width: 100%;
}

.basics,
.education {
    padding-left: 30px;
    padding-top: 20px;
}

.education {
    list-style: none;
}

.basics > li,
.education > li {
    color: #999;
    font-size: 13px;
    list-style: outside none none;
    margin-bottom: 20px;
    text-transform: capitalize;
}

.basics > li i,
.education > li i {
    margin-right: 15px;
}

.location-map #map-canvas {
    height: 290px;
}

#work > div {
    color: #909090;
    font-size: 14px;
    margin-bottom: 0;
}

#work > div a {
    margin-bottom: 5px;
}

.personal > p {
    color: #7c7c7c;
    font-size: 14px;
}

.about .personal {
    display: inline-block;
    width: 100%;
}

#work > p a {
    display: inline-block;
    text-decoration: underline;
}

#work > p img {
    margin-right: 10px;
}

#work {
    padding: 20px;
}

.f-title {
    font-size: 17.5px;
    font-weight: 500;
    text-transform: capitalize;
    color: #424242;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    display: inline-block;
	width: 100%
}

.f-title::before {
    bottom: 8px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 50px;
}

.f-title.ext-margin {
    margin-bottom: 20px;
    margin-top: 40px;
}

.f-title i {
    font-size: 14px;
    margin-right: 5px;
}

.groups > span i {
    margin-right: 5px;
}

.groups > span {
    font-size: 20px;
    font-weight: 400;
}


/*--- edit basic info page ---*/

.editing-info > form {
    margin-top: 25px;
}

form .form-group.half {
    float: left;
    margin-right: 20px;
    width: 46%;
}

form .form-group.half {
    float: left;
    margin-right: 10px;
    width: 48.2%;
}

form .form-group.half:nth-child(2) {
    margin-right: 0;
}

.chosen-container-single .chosen-single {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border-color: -moz-use-text-color -moz-use-text-color #e1e8ed;
    border-radius: 0;
    border-style: none none solid;
    border-width: 0 0 1px;
    box-shadow: none;
    color: #b7b7b7 !important;
    font-size: 16px;
    height: 35px;
    line-height: 35px;
}

form .dob .form-group {
    display: inline-block;
    margin-right: 20px;
    width: 30.6%;
}

.chosen-container {
    width: 100% !important;
}

form .dob .form-group:last-child {
    margin-right: 0;
}

a.forgot-pwd {
    float: right;
    font-size: 14px;
}

.editing-interest > form {
    float: left;
    margin-top: 20px;
    width: 100%;
}

.editing-interest form input {
    border: 1px solid #eee;
    font-size: 14px;
    padding: 10px 20px;
    width: 84%;
}

.editing-interest form ol {
    margin-top: 35px;
    padding-left: 25px;
    margin-bottom: 0;
}

.editing-interest form ol > li {
    display: inline-block;
    margin-bottom: 10px;
    position: relative;
    width: 100%;
}

.editing-interest form ol > li a {
    background: #ebebeb none repeat scroll 0 0;
    display: inline-block;
    font-size: 14px;
    padding: 4px 15px;
    text-transform: capitalize;
    border-radius: 3px;
}

.editing-interest form ol > li span.remove {
    left: -24px;
    position: absolute;
    top: 0;
    cursor: pointer;
}

.editing-interest form button {
    padding: 11px 30px;
}

.onoff-options > form {
    float: left;
    margin-top: 20px;
    width: 100%;
}

.onoff-options .setting-row > p {
    color: #6b6b6b;
    float: left;
    font-size: 13px;
    margin-bottom: 5px;
    text-align: left;
}

.onoff-options .setting-row > span {
    font-size: 14px;
    width: 100%;
    font-weight: 500;
    color: #3c3c3c;
}

.onoff-options .setting-row > label {
    float: right;
    margin-right: 0;
}


/*--- invition widget ---*/

.invition figure {
    display: inline-block;
}

.invition .friend-meta a.invite {
    color: #999;
    float: left;
    font-size: 14px;
    letter-spacing: 0.4px;
    margin-top: 0;
    text-transform: capitalize;
}

.sidebar .invition > li {
    border-bottom: 1px dashed #e4e4e4;
}

.sidebar .widget .invition {
    max-height: 320px;
    position: relative;
}

.invition .friend-meta > h4 {
    font-size: 15px;
}


/*--- advertisment widget ---*/

.advertisment-box {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
}

.advertisment-box > figure {
    margin-bottom: 0;
}

.advertisment-box > h4 {
    color: #999;
    display: inline-block;
    font-size: 14px;
    text-transform: capitalize;
    width: 100%;
}

.advertisment-box img {
    display: inline-block;
    margin: 0 auto;
	width: 100%;
	border-radius: 4px;
}


/*--- notification page ---*/

.notification-box > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 20px;
    padding-left: 0;
    width: 100%;
}

.notification-box {
    display: inline-block;
    width: 100%;
}

.notification-box > ul > li {
    border-bottom: 1px solid #e1e8ed;
    display: inline-block;
    margin-bottom: 20px;
    padding-bottom: 20px;
    width: 100%;
	position: relative;
}

.notification-box > ul li figure {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 10px;
    max-width: 45px;
    min-width: 45px;
    vertical-align: top;
}

.notifi-meta {
    display: inline-block;
    line-height: initial;
    vertical-align: middle;
    width: 86%;
}

.notifi-meta > p {
    color: #424242;
    font-size: 14px;
    margin-bottom: 0;
    text-transform: capitalize;
}

.notifi-meta > span {
    color: #999;
    font-size: 12px;
}

.notification-box > ul > li:last-child {
    border-bottom: 0 none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.notification-box > ul li > i.del {
    color: red;
    cursor: pointer;
    display: inline-block;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.2s linear 0s;
    visibility: hidden;
}

.notification-box > ul li:hover > i.del {
    opacity: 1;
    visibility: visible;
}

.more-options {
    display: inline-block;
    position: relative;
	float: right;
}

.more-options > i {
    color: #999 !important;
    font-size: 16px;
}


/*--- messages page ---*/

.message-box {
    display: inline-block;
    width: 100%;
}

.peoples {
    border-right: 1px solid #e1e8ed;
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    max-height: 462px;
    padding-left: 0;
    position: relative;
    width: 160px;
}

.peoples > li {
    border-bottom: 1px solid #e1e8ed;
    cursor: pointer;
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    width: 100%;
    position: relative;
    transition: all 0.2s linear 0s;
}

.peoples > li:hover {
    background: #fff;
}

.peoples > li figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 35px;
    min-width: 35px;
    vertical-align: middle;
    width: 35px;
    position: relative;
}

.people-name {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    width: 66%;
}

.people-name > span {
    display: inline-block;
    font-size: 13px;
    text-transform: capitalize;
    font-weight: 400;
}

.people-name > i {
    background: lightcoral none repeat scroll 0 0;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 11px;
    line-height: initial;
    padding: 0 5px;
    position: relative;
    right: -20px;
}

.peoples > li:last-child {
    border-bottom: 0 none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.peoples > li span.status {
    left: 0;
}

.peoples-mesg-box {
    display: inline-block;
    vertical-align: top;
    width: 78%;
    padding-left: 15px;
}

.peoples-mesg-box > ul.chatting-area {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    max-height: 322px;
    padding: 40px 15px 10px 0;
    width: 100%;
    position: relative;
    overflow-x: hidden;
}

.peoples-mesg-box > ul li {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
}

.peoples-mesg-box > ul li > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 32px;
    min-width: 32px;
    width: 32px;
    vertical-align: top;
}

.peoples-mesg-box > ul > li p {
    display: inline-block;
    font-size: 13px;
    line-height: initial;
    margin-bottom: 0;
    margin-left: 10px;
    vertical-align: top;
    width: 75%;
    padding: 5px 8px;
    position: relative;
    color: #434343;
    background: rgba(39, 170, 225, 0.1);
}

.peoples-mesg-box > ul > li p::before {
    top: 4px;
    border-color: transparent;
}

.peoples-mesg-box > ul > li p::after {
    top: 6px;
    border-right-color: rgba(202, 239, 142, .65);
}

.peoples-mesg-box > ul > li.me p::before {
    border-left: 11px solid transparent;
    border-right: initial;
    left: auto;
    right: -11px;
}

.peoples-mesg-box > ul > li.you p {
    background: rgba(202, 239, 142, .65);
}

.peoples-mesg-box > ul > li.me p::after {
    border-left: 10px solid rgba(39, 170, 225, 0.1);
    border-right: initial;
    left: auto;
    right: -10px;
}

.peoples-mesg-box > ul li.me {
    direction: rtl;
    text-align: right;
}

.peoples-mesg-box > ul li.me p {
    margin-left: 0;
    margin-right: 10px;
    text-align: left;
    direction: ltr;
}

.conversation-head {
    border-bottom: 1px solid #eaeaea;
    display: inline-block;
    padding-bottom: 10px;
    width: 100%;
    margin-bottom: 10px;
    padding-top: 10px;
}

.conversation-head > figure {
    display: inline-block;
    margin-bottom: 0;
    max-width: 45px;
    vertical-align: middle;
    width: 45px;
}

.conversation-head > span {
    display: inline-block;
    font-weight: 500;
    line-height: initial;
    margin-left: 10px;
    text-transform: capitalize;
    vertical-align: middle;
    width: 79%;
    font-size: 18px;
}

.conversation-head > span i {
    color: #838383;
    display: inline-block;
    font-size: 12px;
    font-weight: normal;
    line-height: initial;
    width: 100%;
}

.message-text-container textarea {
    border-radius: 0;
    box-sizing: content-box;
    color: #7f7f7f;
    height: 50px;
    overflow: hidden;
    resize: none;
    display: inline-block;
    width: 93.5%;
}

.message-text-container > form {
    display: inline-block;
    position: relative;
    width: 100%;
}

.message-text-container form button {
    border-radius: 100%;
    height: 30px;
    padding: 0;
    position: absolute;
    right: 13px;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
}

.x_panel {
    float: left;
    margin-top: 10px;
    width: 100%;
    position: relative;
}

.x_title > h2 {
    float: left;
    font-size: 18px;
}

.toolbox {
    float: right;
    list-style: outside none none;
    padding-left: 0;
}

.toolbox > li {
    color: #b2b2b2;
    display: inline-block;
    font-size: 12px;
    margin-left: 15px;
    cursor: pointer;
}

.x_title {
    border-bottom: 1px dashed #d6d6d6;
    float: left;
    margin-bottom: 30px;
    width: 100%;
}

.x_content {
    float: left;
    width: 100%;
    position: relative;
}

.toolbox .dropdown-menu.show {
    box-shadow: 0 7px 10px #d3d3d3;
    left: auto !important;
    padding: 10px 20px;
    right: 0;
    top: 100% !important;
}

.toolbox .dropdown-menu.show > li {
    color: #545454;
    font-size: 14px;
    margin-bottom: 10px;
}

.toolbox .dropdown-menu.show > li:last-child {
    margin-bottom: 0;
}

.liked-pages {
    float: left;
    list-style: outside none none;
    margin-top: 10px;
    padding-left: 0;
    width: 100%;
}

.liked-pages > li {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e1e8ed;
    display: inline-block;
    margin-right: 3px;
    transition: all 0.15s linear 0s;
    position: relative;
    max-width: 32.3%;
    min-width: 32.3%;
    width: 32.3%;
    padding-bottom: 15px;
    margin-top: 20px;
    overflow: hidden;
}

.f-page figure,
.f-page figure img {
    width: 100%;
}

.liked-pages > li:nth-child(3n) {
    margin-right: 0;
}

.liked-pages > li:hover {
    border-color: transparent;
    box-shadow: 0 8px 8px #e1e8ec;
}

.page-infos {
    float: left;
    padding: 0 15px;
    width: 100%;
}

.page-infos > h5 {
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 0;
}

.page-infos > span {
    color: #999;
    display: inline-block;
    font-size: 12px;
    text-transform: capitalize;
    vertical-align: top;
}

a.dislike-btn {
    bottom: 0;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.6px;
    padding: 2px 10px;
    position: absolute;
    right: 0;
}

.f-page > figure em {
    bottom: 5px;
    float: right;
    font-size: 13px;
    font-style: normal;
    padding: 0 7px;
    position: absolute;
    right: -50%;
    transition: all 0.2s linear 0s;
    opacity: 0;
    color: #fff;
    visibility: hidden;
}

.liked-pages > li:hover .f-page figure em {
    right: 0;
    opacity: 1;
    visibility: visible;
}

.f-page > figure {
    display: inline-block;
    position: relative;
}

.dropdown.pgs {
    position: absolute;
    right: 10px;
    top: 10px;
}

.pgs .btn.dropdown-toggle {
    border-radius: 0;
    font-size: 12px;
    padding: 0 7px;
    text-transform: capitalize;
}

.pgs .btn.dropdown-toggle i {
    font-size: 10px;
    margin-right: 3px;
}

.btn.focus,
.btn:focus {
    box-shadow: none;
}

.pgs .dropdown-menu {
    background: #fff none repeat scroll 0 0;
    border-radius: 0;
    min-width: 100%;
    padding: 0;
    text-align: left;
    width: 100%;
}

.pgs .dropdown-menu .dropdown-item {
    font-size: 12px;
    padding: 0;
    text-align: center;
}

canvas {
    display: inline-block;
    vertical-align: baseline;
}

.linked-image {
    display: inline-block;
    width: 30%;
    vertical-align: top;
    float: none;
    margin-bottom: 15px;
}

.align-left {
    float: left;
    margin-right: 20px;
}

.post-meta .detail {
    display: inline-block;
    width: 64%;
}

.post-meta .detail > span {
    font-size: 24px;
    font-weight: 300;
}

.post-meta .detail > a {
    font-size: 12px;
    letter-spacing: 1px;
}

.post-meta .detail > a:hover {
    color: red;
}

.align-right {
    float: right;
    margin-left: 20px;
}


/*--- load more ---*/

.lodmore {
    display: inline-block;
    width: 100%;
}

.btn-view.btn-load-more {
    background: #fff;
    border: medium none;
    border-radius: 100%;
    color: transparent;
    display: block;
    height: 50px;
    margin: 30px auto 0;
    position: relative;
    width: 50px;
    transition: all 0.2s linear 0s;
    z-index: 77;
	-ms-box-shadow: 0px 5px 10px rgba(0,0,0,.2);
	-moz-box-shadow: 0px 5px 10px rgba(0,0,0,.2);
	-o-box-shadow: 0px 5px 10px rgba(0,0,0,.2);
	-webkit-box-shadow: 0px 5px 10px rgba(0,0,0,.2);
	box-shadow: 0px 5px 10px rgba(0,0,0,.2);
}

.central-meta button.btn-view {
    background: #f1f1f1;
}

.btn-view.btn-load-more::before {
    color: #333;
    content: "\f01e";
    font-family: fontawesome;
    left: 50%;
    opacity: 1;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    z-index: 111;
    transition: all 0.2s linear 0s;
}

.btn-view.btn-load-more:hover::before {
    color: #fff;
    transform: translate(-50%, -50%) rotate(360deg);
}


/*--- responsive header ---*/

.responsive-header {
    display: none;
}

.mh-head {
    background: #4bb5ef;
    color: #fff;
    height: auto;
}

.mh-text {
    font-size: 16px;
    font-weight: 500;
}

.mh-head .hamburger-inner,
.mh-head .hamburger-inner:after,
.mh-head .hamburger-inner:before {
    background: #fff;
}

.circle-media.mm-listview {
    float: left !important;
    padding-left: 0;
    margin: 30px 0 0 0 !important;
}

.circle-media.mm-listview > li a {
    background: #e7e7e7 none repeat scroll 0 0;
    line-height: 32px;
    padding: 0;
    text-align: center;
    width: 32px;
}


/*.circle-media.mm-listview > li a:hover {
  color: #fff;
}*/

.mm-listview > li:not(.mm-divider)::after {
    display: none;
}

.res-menu ul.mm-listview > li,
.res-menu ul.mm-listview > li span {
    text-transform: uppercase;
    font-size: 12px;
}

.mm-navbar .mm-title {
    text-transform: uppercase;
}

.mh-head {
    float: left;
    width: 100%;
}

.mh-head .mh-text {
    display: inline-block;
    margin-top: 6px;
    padding: 0;
}

.mh-text > a {
    display: inline-block;
    font-family: hobostd;
    font-size: 20px;
    vertical-align: middle;
}

.mh-text img {
    display: inline-block;
    vertical-align: sub;
}

.mh-head .mh-form {
    padding: 10px 0;
}

.mm-panel.mm-hasnavbar.mm-opened .setting-row span {
    width: 72%;
}


/*--- sticky sidebar ---*/

#page-contents {
    position: relative;
}

.static,
.static > div {
    position: static !important;
}


/*--- sticky sidebar End ---*/


/*--- 100% radius images ---*/

#people-list figure img,
.new-postbox > figure img,
.friend-info > figure img,
.comet-avatar > img,
.followers > li figure img,
.invition figure img,
.nearly-pepls > figure img,
.peoples > li figure img,
.conversation-head > figure img,
.peoples-mesg-box > ul li > figure img,
.your-page > figure img,
.notification-box > ul li figure img {
    border-radius: 100%;
}


/*--- main menu ---*/

.top-area > ul.main-menu > li ul {
    left: 0;
    list-style: outside none none;
    padding-left: 0;
    position: absolute;
    text-align: left;
    top: 100%;
    background: #fff;
    width: 200px;
    opacity: 0;
    visibility: hidden;
    box-shadow: 4px 7px 20px 0 rgba(0, 0, 0, 0.09);
    transition: all 0.2s linear 0s;
    border-radius: 0 0 5px 5px;
    border-top: 2px solid;
}

.top-area > ul.main-menu > li:hover > ul {
    opacity: 1;
    visibility: visible;
}

.top-area > ul.main-menu {
    float: left;
    margin-left: 0px;
    line-height: 60px;
}

.top-area > ul.main-menu > li {
    line-height: 59px;
    margin-right: 10px;
    padding-right: 10px;
    position: relative;
}

.top-area > ul.main-menu > li a {
    color: #575b5f;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.3px;
}

.top-area > ul.main-menu > li::after {
    content: "";
    font-family: fontawesome;
    font-size: 13px;
    position: absolute;
    right: 10px;
    top: 0;
}

.top-area > ul.main-menu > li > ul li {
    line-height: initial;
}

.top-area > ul.main-menu > li > ul li a {
    border-radius: 0 0 5px 5px;
    color: #9f9f9f;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 15px;
    text-transform: capitalize;
    transition: all 0.2s linear 0s;
    width: 100%;
}

.top-area > ul.main-menu > li > ul li a:hover {
    background: #f5f5f5 none repeat scroll 0 0;
    padding-left: 17px;
}


/*--- side chat message box ---*/

.chat-box {
    background: #fbfbfb none repeat scroll 0 0;
    border-radius: 3px;
    bottom: -2px;
    position: absolute;
    right: 100%;
    width: 300px;
    z-index: 9999999;
    transform: translate(40px) scale(0);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s linear 0s;
    border: 1px solid #e1e8ed;
    text-align: left;
}

.chat-box.show {
    transform: translate(0) scale(1);
    opacity: 1;
    visibility: visible;
}

.chat-head {
    color: #fff;
    display: inline-block;
    padding: 10px 20px 10px 30px;
    position: relative;
    width: 100%;
}

.chat-list > ul > li {
    margin-bottom: 20px;
    display: inline-block;
    width: 100%;
}

.chat-head > h6 {
    display: inline-block;
    font-weight: 500;
    margin: 0;
    vertical-align: top;
}

.chat-head .more {
    float: right;
}

.more > span {
    margin-left: 15px;
    cursor: pointer;
    position: relative;
}

.chat-head span.status {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.more-optns:hover > ul {
    opacity: 1;
    visibility: visible;
}

.more-optns > ul {
    background: #ffffff none repeat scroll 0 0;
    border-radius: 3px;
    box-shadow: 0 10px 23px #8b8b8b;
    color: #333;
    line-height: initial;
    list-style: outside none none;
    margin-bottom: 0;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 22;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s linear 0s;
}

.more-optns > ul li {
    display: inline-block;
    font-size: 11px;
    line-height: 24px;
    width: 100%;
}

.chat-list {
    display: inline-block;
    padding: 15px;
    position: relative;
    width: 100%;
}

.chat-list > ul {
    margin: 0;
    padding-left: 0;
    max-height: 290px;
    overflow: hidden;
    position: relative;
    padding-right: 8px;
}

.chat-thumb {
    display: inline-block;
    vertical-align: top;
    width: 28px;
}

.notification-event {
    display: inline-block;
    margin-left: 8px;
    vertical-align: top;
    width: 84%;
}

.chat-thumb > img {
    border-radius: 100%;
}

.chat-message-item {
    background: #f0f4f9 none repeat scroll 0 0;
    border-radius: 7px;
    display: inline-block;
    font-size: 13px;
    padding: 12px;
    color: #333;
}

.notification-date {
    color: #999;
    display: inline-block;
    font-size: 11px;
    width: 100%;
}

.chat-list > ul li.you .chat-thumb {
    float: right;
}

.chat-list > ul li.you .notification-event {
    float: right;
    margin-left: 0;
    margin-right: 8px;
}

.chat-list > ul li.you .chat-message-item {
    background: rgba(202, 239, 142, 0.55) none repeat scroll 0 0;
}

.text-box {
    position: relative;
}

.text-box > textarea {
    font-size: 14px;
    height: 50px;
    line-height: 27px;
    border-radius: 0;
    background: #f0f0f0;
}

.text-box > button {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    visibility: hidden;
}


/*---- inbox page ---- */

.inbox-sec {
    float: left;
    width: 100%;
    border: 1px solid #e1e8ed;
    background: #fafafa;
}

.inbox-sec > .row {
    margin: 0 -1px;
}

.inbox-sec > .row > div {
    padding: 0 1px;
}

.inbox-navigation {
    background: #ffffff none repeat scroll 0 0;
    float: left;
    padding-bottom: 59px;
    width: 100%;
    height: 100%;
}

.inbox-panel-head {
    float: left;
    padding: 20px;
    width: 100%;
}

.inbox-panel-head > img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
    width: 60px;
}

.inbox-panel-head > h1 {
    display: block;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.4px;
    margin: 3px 0 8px;
}

.inbox-panel-head > h1 > i {
    font-style: normal;
}

.inbox-panel-head > a {
    color: #757575;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.4px;
    margin-right: 10px;
    margin-top: 1px;
}

.inbox-panel-head > a > i {
    margin-right: 5px;
}

.inbox-panel-head > ul {
    float: left;
    list-style: outside none none;
    margin: 25px 0 0;
    padding: 0;
    text-align: center;
    width: 100%;
}

.inbox-panel-head > ul > li {
    display: inline-block;
    float: none;
}

.inbox-panel-head > ul > li > a {
    -webkit-border-radius: 45px;
    -moz-border-radius: 45px;
    -ms-border-radius: 45px;
    -o-border-radius: 45px;
    border-radius: 45px;
    color: #fff;
    float: left;
    font-size: 14px;
    padding: 8px 35px;
}

.message-list > li:last-child {
    border-bottom: medium none;
}

.inbox-navigation > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.inbox-navigation > ul > li > a {
    float: left;
    font-size: 14px;
    letter-spacing: 0.5px;
    cursor: pointer;
    width: 80%;
    font-weight: 500;
}

.inbox-navigation > ul > li {
    background: #fafafa none repeat scroll 0 0;
    float: left;
    margin-bottom: 1px;
    padding: 16px 40px;
    width: 100%;
}

.inbox-navigation > ul > li > a > i {
    color: #a0a0a0;
    font-size: 14px;
    margin-right: 3px;
    width: 21px;
}

.inbox-navigation > ul > li > span {
    background: #ff5f5f none repeat scroll 0 0;
    color: #ffffff;
    float: right;
    font-size: 12px;
    font-weight: 500;
    height: 20px;
    text-align: center;
    width: 20px;
    line-height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}

.flaged {
    float: left;
    width: 100%;
}

.flaged > h3 {
    float: left;
    font-size: 14px;
    margin: 10px 0 0;
    padding: 24px 39px;
    width: 100%;
    font-weight: 500;
}

.flaged > h3 > i {
    margin-right: 13px;
}

.flaged > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.flaged li {
    float: left;
    padding: 8px 37px;
    width: 100%;
	font-size: 13px;
}

.flaged li a i {
    margin-right: 10px;
}

.inbox-lists {
    float: left;
    width: 100%;
}

.inbox-action {
    background: #ffffff none repeat scroll 0 0;
    float: left;
    margin-bottom: 2px;
    width: 100%;
}

.inbox-action > ul {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 20px 30px;
    width: 100%;
}

.inbox-action > ul > li {
    float: left;
    margin-right: 20px;
}

.inbox-action > ul > li > label,
.inbox-action > ul > li > a {
    color: #959595 !important;
    float: left;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    margin: 0;
    cursor: pointer;
}

.inbox-action > ul > li > label input {
    float: left;
    margin: 4px 8px 0 0;
}

.inbox-action > ul > li > a i {
    font-size: 14px;
    margin-right: 5px;
    width: 13px;
}

.mesages-lists {
    background: #ffffff none repeat scroll 0 0;
    float: left;
    overflow: hidden;
    padding-top: 120px;
    position: relative;
    width: 100%;
}

.mesages-lists > form {
    left: 50%;
    max-width: 92%;
    position: absolute;
    top: 40px;
    transform: translate(-50%);
    width: 100%;
}

.mesages-lists > form input {
    background: #f5f5f5 none repeat scroll 0 0;
    border: 1px solid #dadede;
    border-radius: 30px;
    color: #7b7b7b;
    float: left;
    font-size: 15px;
    padding: 7px 20px;
    width: 100%;
}

.message-list {
    float: left;
    list-style: outside none none;
    margin: 0;
    padding: 0 30px;
    width: 100%;
    max-height: 690px;
    position: relative;
    box-shadow: 0 1px 3px #ccc;
}

.message-list > li {
    border-bottom: 1px solid #e8ecec;
    float: left;
    padding-bottom: 22px;
    padding-top: 22px;
    width: 100%;
}

.message-list > li > .select-message {
    float: left;
}

.message-list > li > span.star-this {
    cursor: pointer;
    float: left;
    padding-left: 16px;
    width: 40px;
    line-height: 0;
}

.message-list > li > .sender-name {
    display: inline-block;
    font-size: 14px;
    margin: 0;
    width: auto;
    vertical-align: top;
}

.message-list > li > span.make-important {
    cursor: pointer;
    float: left;
    margin-right: 30px;
    line-height: 0;
    -webkit-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}

.message-list > li > p {
    float: left;
    margin: 5px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
    font-size: 13px;
}

.message-list > li > a {
    color: #afafaf;
    display: inline-block;
    font-size: 13px;
    margin-left: 40px;
}

.message-list > li > span.star-this.starred {
    color: orange;
}

.message-list > li > span.star-this.starred > i::before {
    content: "\f005";
}

.message-list > li > span.make-important.important-done {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    color: #ff5f5f;
}

.checkbox label,
.form-radio label {
    color: #676767;
}

.form-group input.form-file,
.form-group input.has-value,
.form-group input:focus,
.form-group input:valid,
.form-group select,
.form-group textarea.form-file,
.form-group textarea.has-value,
.form-group textarea:focus,
.form-group textarea:valid {
    color: #2a2a2a;
}

.row.widget-page {
    padding: 0 80px;
}

.row.widget-page aside.sidebar {
    width: 100%;
}


/*--- New home page ---*/

.top-search {
    float: left;
    margin-top: 7px;
    text-align: left;
    width: 32%;
}

.top-search form {
    display: inline-block;
    position: relative;
    width: 100%;
}

.top-search form input {
    background: #f4f2f2 none repeat scroll 0 0;
    border: medium none;
    font-size: 13px;
    padding: 13px 30px;
    width: 100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
}

.top-search button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #b6b6b6;
    font-size: 15px;
    position: absolute;
    right: 6px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}

.sidebar.left {
    float: right;
    width: 100%;
}

.sidebar.right {
    float: left;
    width: 100%;
}

.row.merged20 > div {
    padding: 0 7.5px;
}


/*--- fixed sidebar right ---*/

.fixed-sidebar {
    background: #fff none repeat scroll 0 0;
    height: 100vh;
    left: 0;
    padding-bottom: 30px;
    padding-top: 30px;
    position: fixed;
    top: 59px;
    width: 70px;
    z-index: 9;
    -webkit-box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    -moz-box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    -ms-box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    -o-box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
}

.fixed-sidebar.right {
    left: auto;
    right: 0;
}

.chat-friendz {
    display: inline-block;
    text-align: center;
    width: 100%;
    position: relative;
}

.chat-users {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
    position: relative;
    max-height: 79vh;
}

.chat-users > li {
    display: inline-block;
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
}

.author-thmb {
    display: inline-block;
    position: relative;
    width: 100%;
}

.chat-users > li .author-thmb img {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
}

.chat-users > li:last-child {
    margin-bottom: 0;
}

.fixed-sidebar .ps-container > .ps-scrollbar-y-rail > .ps-scrollbar-y {
    background-color: transparent !important;
}

.chat-friendz .chat-box {
    bottom: -43px;
}

.menu-left {
    display: inline-block;
    text-align: center;
    width: 100%;
}

.left-menu {
    list-style: outside none none;
    margin: 0;
    padding: 0;
    position: relative;
    max-height: 79vh;
}

.left-menu > li {
    display: inline-block;
    margin-bottom: 30px;
    position: relative;
    width: 100%;
}

.left-menu > li a {
    color: #9196b1;
    display: inline-block;
    font-size: 20px;
}

.left-menu > li:last-child {
    margin-bottom: 0;
}

.content-bg-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-animation: slide 50s linear infinite;
    -moz-animation: slide 50s linear infinite;
    -ms-animation: slide 50s linear infinite;
    -o-animation: slide 50s linear infinite;
    animation: slide 50s linear infinite;
    will-change: background-position;
    -webkit-background-size: contain !important;
    -moz-background-size: contain !important;
    -ms-background-size: contain !important;
    -o-background-size: contain !important;
    background-size: contain !important;
}

@keyframes slidedown {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -2000px 2000px;
    }
}

@keyframes slide {
    0% {
        background-position: 0 0;
        background-position-x: 0px;
        background-position-y: 0px;
    }
    100% {
        background-position: -4000px 0;
        background-position-x: -4000px;
        background-position-y: 0px;
    }
}


/*--- blog grid post ---*/

.g-post-classic {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ede9e9;
    display: inline-block;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    width: 100%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    margin-bottom: 40px;
}

.blog-sec {
    display: inline-block;
    width: 100%;
}

.right-pading {
    padding-right: 30px;
}

.left-pading {
    padding-left: 30px;
}

.g-post-classic:hover {
    -webkit-box-shadow: 3px 3px 15px #d0d0d0;
    -moz-box-shadow: 3px 3px 15px #d0d0d0;
    -ms-box-shadow: 3px 3px 15px #d0d0d0;
    -o-box-shadow: 3px 3px 15px #d0d0d0;
    box-shadow: 3px 3px 15px #d0d0d0;
}

.g-post-classic > figure {
    position: relative;
}

.g-post-classic > figure img {
    width: 100%;
}

.g-post-classic > figure > i {
    border: 1px solid rgba(207, 202, 202, 1.00);
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    display: inline-block;
    font-size: 13px;
    height: 40px;
    left: 10px;
    line-height: 35px;
    position: absolute;
    text-align: center;
    top: 10px;
    width: 40px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    color: rgba(207, 202, 202, 1.00);
}

.g-post-classic > figure > i::after {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    visibility: hidden;
    width: 100%;
    z-index: -1;
}

.g-post-classic:hover > figure > i::after {
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    visibility: visible;
}

.g-post-classic:hover > figure > i {
    color: #fff;
    z-index: 2;
}

.g-post-meta {
    display: inline-block;
    padding: 0 25px 25px;
    width: 100%;
}

.post-title {
    border-bottom: 1px solid #e0e0e0;
    display: inline-block;
    margin-bottom: 15px;
    padding-bottom: 15px;
    width: 100%;
}

.post-title > h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    text-transform: capitalize;
    color: #424242;
}

.post-title > h4 a {
    display: inline-block;
    width: 100%;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.post-title .p-date {
    color: #999;
    font-size: 10px;
    text-transform: uppercase;
}

.post-title .p-date > a {
    color: #444;
}

.g-post-ranking > a {
    color: #747474;
    display: inline-block;
    font-size: 12px;
    margin-right: 20px;
}

.g-post-ranking > a i {
    margin-right: 10px;
}

.read {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    margin-top: 20px;
    text-transform: uppercase;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}


/*--- filter section ---*/

.post-filter-sec {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 30px;
    padding: 15px;
    width: 100%;
}

.post-filter-sec > form {
    float: left;
    position: relative;
    vertical-align: middle;
    width: 270px;
}

.purify {
    float: right;
    width: 64.5%;
    text-align: right;
}

form.filter-form input {
    background: #f4f2f2 none repeat scroll 0 0;
    border: medium none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    padding: 13px 20px;
    width: 100%;
}

.filter-form > button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #848484;
    font-size: 16px;
    position: absolute;
    right: 5px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}

.purify > span {
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 10px;
}

.purify .chosen-container {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    vertical-align: middle;
    width: 32.6% !important;
    text-align: left;
}

.purify .chosen-container-single .chosen-single {
    background: #f4f2f2;
    border: medium none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 47px;
    height: 47px;
    padding-left: 20px;
}

.purify > a {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.8px;
    line-height: initial;
    padding: 15px 20px;
    text-transform: capitalize;
    vertical-align: top;
}


/*--- blog kitkat style ---*/

.l-post {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ede9e9;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    position: relative;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    margin-bottom: 40px;
}

.l-post:hover {
    -webkit-box-shadow: 3px 3px 15px #a9a9a9;
    -moz-box-shadow: 3px 3px 15px #a9a9a9;
    -ms-box-shadow: 3px 3px 15px #a9a9a9;
    -o-box-shadow: 3px 3px 15px #a9a9a9;
    box-shadow: 3px 3px 15px #a9a9a9;
}

.l-post > figure {
    display: inline-block;
    margin-bottom: 0;
    position: relative;
    vertical-align: middle;
    width: 400px;
}

.l-post-meta {
    display: inline-block;
    padding: 0 20px 0 30px;
    vertical-align: middle;
    width: 56%;
}

.l-post .l-post-meta > h4 {
    display: inline-block;
    font-size: 22px;
    margin-bottom: 10px;
    text-transform: capitalize;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    width: 100%;
}

.l-post .l-post-meta > h4 a {
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.blg-socials {
    left: 10px;
    list-style: outside none none;
    padding-left: 0;
    position: absolute;
    top: 10px;
    width: auto;
}

.blg-socials > li {
    display: inline-block;
}

.blg-socials > li > a {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    width: 30px;
}

.blg-socials > li > a:hover {
    -webkit-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -o-transform: scale(0.95);
    transform: scale(0.95);
}

.blg-socials {
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    visibility: hidden;
}

.blg-socials > li a {
    background: rgba(0, 0, 0, .5);
}

.l-post:hover .blg-socials {
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    visibility: visible;
}

.blg-socials > li:nth-child(1) a {
    -webkit-transition-delay: 0.1s;
    -moz-transition-delay: 0.1s;
    -ms-transition-delay: 0.1s;
    -o-transition-delay: 0.1s;
    transition-delay: 0.1s;
}

.blg-socials > li:nth-child(2) a {
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    -ms-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
}

.blg-socials > li:nth-child(3) a {
    -webkit-transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
}

.blg-socials > li:nth-child(3) a {
    -webkit-transition-delay: 0.4s;
    -moz-transition-delay: 0.4s;
    -ms-transition-delay: 0.4s;
    -o-transition-delay: 0.4s;
    transition-delay: 0.4s;
}

.blg-socials > li:nth-child(3) a {
    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    -ms-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
}

.l-post-ranking {
    color: #999;
    font-size: 10px;
    text-transform: uppercase;
}

.l-post-meta > p {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
}


/*--- bottom banner ---*/

.btm-baner {
    display: inline-block;
    position: relative;
    width: 100%;
    z-index: 2;
}

.baner-mockup {
    display: inline-block;
    margin-top: -110px;
    vertical-align: middle;
    width: auto;
}

.baner-inf {
    display: inline-block;
    text-align: right;
    vertical-align: middle;
    width: 67%;
}

.baner-inf > span {
    color: #fff;
    display: inline-block;
    font-family: satisfy;
    font-size: 60px;
    margin-right: 60px;
    vertical-align: middle;
}

.baner-inf > a:hover {
    background: #333;
    color: #fff;
}

.baner-inf > a {

    background: #fff none repeat scroll 0 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    padding: 11px 60px;
    vertical-align: middle;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.bluesh.btm-mockup:before {
    z-index: 0;
}


/*--- blog detail page ---*/

.social-connect {
    color: #fff;
    display: table;
    list-style: outside none none;
    padding-left: 0;
    margin: 0;
}

.social-connect > li > i {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    display: table-cell;
    float: left;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
    width: 30px;
    font-size: 14px;
}

.social-connect > li > span {
    display: table-cell;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    overflow: hidden;
    padding-left: 10px;
}

.social-connect > li {
    float: left;
    width: 25%;
}

.social-connect > li:nth-last-child(1),
.social-connect > li:nth-last-child(2) {
    margin-bottom: 0;
}

.social-connect > li > span i {
    color: #a1b1bc;
    float: left;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    width: 100%;
}

.social-connect > li.rs > i {
    background: #ffb400 none repeat scroll 0 0;
}

.social-connect > li.rs > span a {
    color: #ffb400;
}

.social-connect > li.twit > i {
    background: #00bff3 none repeat scroll 0 0;
}

.social-connect > li.twit > span a {
    color: #00bff3;
}

.social-connect > li.fb > i {
    background: #1b78c7 none repeat scroll 0 0;
}

.social-connect > li.fb > span a {
    color: #1b78c7;
}

.social-connect > li.googl > i {
    background: #df2506 none repeat scroll 0 0;
}

.social-connect > li.googl > span a {
    color: #df2506;
}

.detail-page {
    float: left;
    width: 100%;
}

.detail-top {
    display: inline-block;
    position: relative;
    width: 100%;
}

.detail-top .connect-with {
    background: #fff none repeat scroll 0 0;
    border-top: 0 none;
    bottom: -40px;
    margin: 0;
    padding: 25px 40px 20px;
    position: absolute;
    left: 50%;
    width: 621px;
    transform: translate(-50%);

    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0px 5px 9px #eaeaea;
    -moz-box-shadow: 0px 5px 9px #eaeaea;
    -ms-box-shadow: 0px 5px 9px #eaeaea;
    -o-box-shadow: 0px 5px 9px #eaeaea;
    box-shadow: 0px 5px 9px #eaeaea;
}

.detail-meta {
    display: inline-block;
    margin-top: 52px;
    width: 100%;
}

.detail-meta .author-thumb {
    display: inline-block;
    margin-right: 30px;
    width: auto;
}

.detail-meta > h2 {
    color: #424242;
    display: inline-block;
    margin-bottom: 10px;
    max-width: 73%;
    width: 100%;
}

.author-thumb > img {
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
}

.author-thumb > span {
    font-size: 12px;
    padding-left: 3px;
}

.post-time {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
    margin-bottom: 40px;
}

.post-time > span {
    font-size: 11.5px;
    margin-left: 0;
    margin-right: 30px;
}

.detail-meta > p {
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 30px;
}

blockquote {
    display: inline-block;
    font-size: 26px;
    font-style: italic;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 50px;
    margin-top: 30px;
    width: 100%;
}

blockquote > p {
    display: inline-block;
    margin-bottom: 0;
    width: 100%;
    color: inherit;
    font: inherit;
}

figure.alignright,
.alignright {
    float: right;
    margin-left: 20px;
    margin-bottom: 8px;
}

figure.alignleft,
.alignleft {
    float: left;
    margin-left: 0px;
    margin-bottom: 8px;
    margin-right: 20px;
}

figure.aligncenter,
.aligncenter {
    display: table !important;
    float: unset;
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
    width: unset;
}

.detail-meta > ul {
    display: inline-block;
    width: auto;
}

.detail-meta > ul li {
    color: #5c5b5b;
    font-size: 15px;
    margin-top: 14px;
}

.tag-n-cat {
    border-top: 1px solid #e2e2e2;
    float: left;
    margin-top: 37px;
    padding: 20px 0;
    width: 100%;
}

.tags {
    display: inline-block;
    padding: 4px 0;
    width: 100%;
}

.tags > span {
    font-size: 15px;
    margin-right: 3px;
    font-weight: 500;
}

.tags > a {
    color: #999;
    display: inline-block;
    font-size: 15px;
    margin-right: 2px;
    padding-right: 4px;
    position: relative;
    text-transform: capitalize;
}

.tags > a::before {
    bottom: 0;
    content: ",";
    position: absolute;
    right: 0;
}

.tags > span i {
    margin-right: 4px;
}


/*--- author admin box on single page ---*/

.site-admin {
    background: #f9f9f9 none repeat scroll 0 0;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    padding: 35px;
    width: 100%;
}

.admin-avatar {
    display: table-cell;
    max-width: 14.5%;
    min-width: 14.5%;
    vertical-align: middle;
    width: 14.5%;
}

.admin-postmeta {
    display: table-cell;
    max-width: 84%;
    min-width: 84%;
    padding-left: 20px;
    vertical-align: middle;
    width: 84%;
}

.admin-avatar > img {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
}

.admin-postmeta > h4 {
    color: #444;
    display: inline-block;
    font-size: 24px;
    letter-spacing: -0.3px;
    text-transform: capitalize;
    vertical-align: middle;
}

.admin-postmeta > span {
    font-size: 15px;
    margin-left: 18px;
    vertical-align: middle;
}

.admin-postmeta > p {
    color: #737374;
    font-size: 15px;
    letter-spacing: 0.4px;
    line-height: 24px;
    margin-top: 15px;
}


/*-------------------------*/


/*--- comments section ---*/

.comment-area {
    float: left;
    width: 100%;
}

.comment-title {
    border-bottom: 1px dotted;
    color: #424242;
    float: left;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 30px;
    text-transform: capitalize;
}

.comments {
    float: left;
    list-style: outside none none;
    padding-left: 0;
    width: 100%;
    margin-bottom: 0;
}

.comment-box {
    background: #f9f9f9 none repeat scroll 0 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    display: inline-block;
    padding: 30px;
}

.comments > li {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    float: left;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
}

.comments > li:last-child {
    margin-bottom: 0;
}

.commenter-photo {
    display: table-cell;
    vertical-align: middle;
    width: 13.5%;
}

.commenter-meta {
    display: table-cell;
    padding-left: 25px;
    position: relative;
    vertical-align: middle;
}

.commenter-photo > img {
    width: auto;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
}

.comment-titles h6 {
    color: #444;
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    vertical-align: top;
}

.comment-titles > span {
    font-size: 11px;
    margin-left: 30px;
    margin-right: 32px;
}

a.reply {
    display: inline-block;
    font-size: 12px;
    -webkit-text-decoration: underline;
    -moz-text-decoration: underline;
    -ms-text-decoration: underline;
    -o-text-decoration: underline;
    text-decoration: underline;
    text-transform: capitalize;
    vertical-align: middle;
}

.commenter-meta > p {
    color: #666;
    float: left;
    font-size: 15px;
    line-height: 24px;
    padding-top: 10px;
    width: 90%;
}

.comments > li > ul {
    float: left;
    list-style: outside none none;
    margin-top: 17px;
    padding-left: 60px;
    width: 100%;
}

.gap-60 {
    float: left;
    padding: 50px 0;
    width: 100%;
}

.gap-60.no-gap {
    padding: 0;
}

.gap-60.no-top {
    padding-top: 0;
}

.gap.no-bottom {
    padding-bottom: 0;
}

.gap.ext-bottom {
    padding-bottom: 150px;
}

.detail-meta .contact-form {
    padding: 0;
    width: 100%;
}

.detail-meta .contact-form form .form-group {
    margin-right: 0;
    width: 100%;
}


/*--- help and support page ----*/

.help-list {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    display: inline-block;
    padding: 20px 16px;
    width: 100%;
    margin-bottom: 30px;
}

.help-list > h3 {
    color: #303030;
    display: inline-block;
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 20px;
    width: 100%;
}

.help-list > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

.help-list > ul li a {
    color: #a1a1a1;
    display: inline-block;
    font-size: 13px;
    width: 100%;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
}

.help-list > ul li {
    display: inline-block;
    margin-bottom: 13px;
    width: 100%;
}

.help-list > ul li a i {
    font-size: 12px;
    margin-right: 10px;
}

.help-list > a {
    background: #fafafa none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #333;
    display: inline-block;
    float: right;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1px;
    margin-top: 20px;
    padding: 8px 19px;
    text-transform: capitalize;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.help-list > a:hover {
    color: #fff;
}


/*--- career page ---*/

.carrer-title {
    display: inline-block;
    margin-bottom: 80px;
    text-align: center;
    width: 100%;
}

.carrer-title > h2 {
    color: #444;
    display: inline-block;
    font-size: 34px;
    font-weight: 300;
    width: 100%;
}

.carrer-title > p {
    margin-bottom: 5px;
}

.open-position {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    margin-bottom: 30px;
    padding: 20px;
    position: relative;
    width: 100%;
}

.open-position > h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    text-transform: capitalize;
}

.open-position > h4 a {
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.open-position > a {
    font-size: 14px;
    font-weight: 300;
}

.open-position > a i {
    margin-right: 10px;
}

.open-position::before {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 3px;
}

.career-page .purify {
    width: 64%;
}


/*--- offcanvas menu ---*/

.topbar.transparent {
    background: transparent none repeat scroll 0 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    padding: 40px 48px;
    margin-bottom: -120px;
}

.menu-container {
    background-color: #088dcd;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: white;
    cursor: pointer;
    position: absolute;
    width: 230px;
    height: 230px;
    right: -120px;
    top: -120px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    border: 2px dashed rgba(255, 255, 255, 0.2);
}

.menu-container.full-menu {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    padding: 0 !important;
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    -webkit-transition: all 800ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
    -moz-transition: all 800ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
    -ms-transition: all 800ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
    -o-transition: all 800ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
    transition: all 800ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
}

.canvas-menu {
    color: white;
    font-size: 30px;
    position: absolute;
    right: 145px;
    top: 150px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    z-index: 100;
    line-height: 20px;
}

.menu-container.full-menu > a.canvas-menu {
    top: 30px;
    right: 30px;
}

.canvas-menu i {
    -webkit-opacity: 0.7;
    -moz-opacity: 0.7;
    -ms-opacity: 0.7;
    -o-opacity: 0.7;
    opacity: 0.7;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

.canvas-menu i:hover {
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
}

.overlay.open {
    -webkit-opacity: .9;
    -moz-opacity: .9;
    -ms-opacity: .9;
    -o-opacity: .9;
    opacity: .9;
    visibility: visible;
    height: 100%;
    top: 60px;
}

.overlay.open ul.offcanvas-menu > li {
    -webkit-animation: fadeInRight .5s ease forwards;
    -moz-animation: fadeInRight .5s ease forwards;
    -ms-animation: fadeInRight .5s ease forwards;
    -o-animation: fadeInRight .5s ease forwards;
    animation: fadeInRight .5s ease forwards;
    -webkit-animation-delay: .35s;
    -moz-animation-delay: .35s;
    -ms-animation-delay: .35s;
    -o-animation-delay: .35s;
    animation-delay: .35s;
}

.overlay.open ul.offcanvas-menu > li:nth-of-type(2) {
    -webkit-animation-delay: .4s;
    -moz-animation-delay: .4s;
    -ms-animation-delay: .4s;
    -o-animation-delay: .4s;
    animation-delay: .4s;
}

.overlay.open ul.offcanvas-menu > li:nth-of-type(3) {
    -webkit-animation-delay: .45s;
    -moz-animation-delay: .45s;
    -ms-animation-delay: .45s;
    -o-animation-delay: .45s;
    animation-delay: .45s;
}

.overlay.open ul.offcanvas-menu > li:nth-of-type(4) {
    -webkit-animation-delay: .50s;
    -moz-animation-delay: .50s;
    -ms-animation-delay: .50s;
    -o-animation-delay: .50s;
    animation-delay: .50s;
}
.overlay.open ul.offcanvas-menu > li:nth-of-type(5) {
    -webkit-animation-delay: .55s;
    -moz-animation-delay: .55s;
    -ms-animation-delay: .55s;
    -o-animation-delay: .55s;
    animation-delay: .55s;
}
.overlay.open ul.offcanvas-menu > li:nth-of-type(6) {
    -webkit-animation-delay: .60s;
    -moz-animation-delay: .60s;
    -ms-animation-delay: .60s;
    -o-animation-delay: .60s;
    animation-delay: .60s;
}
.overlay.open ul.offcanvas-menu > li:nth-of-type(7) {
    -webkit-animation-delay: .65s;
    -moz-animation-delay: .65s;
    -ms-animation-delay: .65s;
    -o-animation-delay: .65s;
    animation-delay: .65s;
}

.overlay ul.offcanvas-menu {
    display: inline-block;
    left: 50%;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
}

.overlay ul.offcanvas-menu > li {
    display: block;
    min-height: 50px;
    position: relative;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
}

.overlay ul.offcanvas-menu > li > a {
    display: block;
    position: relative;
    color: #fff;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    overflow: hidden;
    -webkit-opacity: 0.7;
    -moz-opacity: 0.7;
    -ms-opacity: 0.7;
    -o-opacity: 0.7;
    opacity: 0.7;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    font-size: 30px;
    font-weight: 800;
}

.overlay ul.offcanvas-menu > li > a:hover,
.overlay ul.offcanvas-menu > li > a:focus,
.overlay ul.offcanvas-menu > li > a:active {
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        left: 20%;
    }
    100% {
        opacity: 1;
        left: 0;
    }
}

.blob {
    animation: blobby 4s infinite;
}

.blob2 {
    animation: blobby2 6s infinite;
}

@keyframes blobby {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.08);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes blobby2 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.18);
    }
    100% {
        transform: scale(1);
    }
}


/*--- offcanves menu dropdown ---*/

ul.offcanvas-menu {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

ul.offcanvas-menu li {
    color: #fff;
    float: left;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    width: 100%;
}

ul.offcanvas-menu li a {
    color: inherit;
    float: left;
    padding: 6px 0;
    position: relative;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    transition: all 0.3s linear 0s;
}

ul.offcanvas-menu li a:hover {
    transform: scale(1.1);
}

ul.offcanvas-menu li:last-child a {
    margin-bottom: 0;
}

ul.offcanvas-menu li i {
    display: none;
}

ul.offcanvas-menu li.menu-item-has-children > i {
    cursor: pointer;
    display: block;
    font-size: 15px;
    position: absolute;
    right: 35px;
    top: 18px;
}

ul.offcanvas-menu ul {
    background: rgba(255, 255, 255, 0.25) none repeat scroll 0 0;
    display: none;
    float: left;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

.offcanvas-menu ul ul li.menu-item-has-children > a {
    border-bottom: 1px solid #353535;
}

.offcanvas-menu ul ul li a {
    font-size: 14px;
    font-weight: normal;
    margin-left: 0;
    padding: 10px 10px 10px 20px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
}


/*--- offcanves menu end ----*/


/*--- portfolio page ---*/

.option-set.icon-style {
    margin-bottom: 0;
    width: 100%;
}

.option-set.icon-style > li {
    display: inline-block;
    padding: 0 20px;
}

.option-set.icon-style > li > a.selected {
    border-bottom: 1px solid;
}

.option-set.icon-style > li > a {
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
}

.isotop-full {
    margin-bottom: 50px;
    text-align: center;
    width: 100% !important;
}

.isotop-full .option-set {
    padding-left: 0;
    text-align: center;
}

.portfolio-box {
    float: left;
    margin-bottom: 30px;
    position: relative;
    width: 100%;
    border: 1px solid #eaeaea;
}

.overlinks {
    left: 50%;
    max-width: 90%;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    -webkit-transform: translate(-50%, -80%);
    -moz-transform: translate(-50%, -80%);
    -ms-transform: translate(-50%, -80%);
    -o-transform: translate(-50%, -80%);
    transform: translate(-50%, -80%);
    visibility: hidden;
    width: 100%;
    -webkit-transition: all 0.4s linear 0s;
    -moz-transition: all 0.4s linear 0s;
    -ms-transition: all 0.4s linear 0s;
    -o-transition: all 0.4s linear 0s;
    transition: all 0.4s linear 0s;
}

.cate {
    list-style: outside none none;
    padding-left: 0;
}

.cate > li {
    color: #707070;
    display: inline-block;
    font-size: 13px;
    margin-right: 2px;
    position: relative;
    text-transform: capitalize;
}

.cate > li::before {
    bottom: 0;
    content: ",";
    position: absolute;
    right: -3px;
}

.cate > li:last-child:before {
    display: none;
}

.overlinks > h4 {
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
    width: 100%;
    color: #2a2a2a;
}

.overlinks > h4 a {
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.portfolio-box::before {
    background: rgba(255, 255, 255, 0) none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transform: translateY(0px) scale(0);
    -moz-transform: translateY(0px) scale(0);
    -ms-transform: translateY(0px) scale(0);
    -o-transform: translateY(0px) scale(0);
    transform: translateY(0px) scale(0);
    -webkit-transition: transform 0.4s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.7s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    -moz-transition: transform 0.4s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.7s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    -ms-transition: transform 0.4s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.7s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    -o-transition: transform 0.4s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.7s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    transition: transform 0.4s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.7s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    width: 100%;
}

.portfolio-box:hover::before {
    background: rgba(255, 255, 255, 0.8) none repeat scroll 0 0;
    -webkit-transform: translateY(0px) scale(1);
    -moz-transform: translateY(0px) scale(1);
    -ms-transform: translateY(0px) scale(1);
    -o-transform: translateY(0px) scale(1);
    transform: translateY(0px) scale(1);
}

.portfolio-box:hover .overlinks {
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    visibility: visible;
}


/*--- featured top video post ---*/

.background-video {
    float: left;
    width: 100%;
    z-index: 1;
}

.bv-video-wrap::before {
    background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(41, 112, 255, 0.75) 0%, rgba(164, 248, 113, 0.75) 100%) repeat scroll 0 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
}

.bv-video {
    position: relative;
}

.videobg-meta {
    float: left;
    left: 120px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 33;
    color: #fff;
    max-width: 50%;
    width: 70%;
}

.info {
    float: left;
    padding-left: 73px;
    width: 100%;
}

.info span {
    float: left;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 1px;
    padding-bottom: 6px;
    text-transform: capitalize;
    width: 100%;
}

.info p {
    font-size: 20px;
    color: #fff;
    float: left;
    width: 100%;
    padding-top: 15px;
    line-height: 28px;
}

.info > a {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    margin-top: 50px;
    text-align: center;
    text-transform: capitalize;
    width: 150px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.info > a:hover {
    color: #222;
    background: #fff;
}

.videobg-meta > h3 {
    color: #fff;
    float: left;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 0.3px;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
}

.videobg-meta > h3 i {
    background: -webkit-linear-gradient(rgba(41, 112, 255, 0.75) 0%, rgba(248, 222, 96, 0.75) 100%);
    background: -moz-linear-gradient(rgba(41, 112, 255, 0.75) 0%, rgba(248, 222, 96, 0.75) 100%);
    background: -ms-linear-gradient(rgba(41, 112, 255, 0.75) 0%, rgba(248, 222, 96, 0.75) 100%);
    background: -o-linear-gradient(rgba(41, 112, 255, 0.75) 0%, rgba(248, 222, 96, 0.75) 100%);
    background: linear-gradient(rgba(41, 112, 255, 0.75) 0%, rgba(248, 222, 96, 0.75) 100%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    -o-background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
    margin-right: 10px;
    font-size: 60px;
    vertical-align: middle;
}

.video-metabg > h3 a {
    color: inherit;
}


/*--- services box ---*/

.servic-category {
    background: #fff none repeat scroll 0 0;
    -webkit-box-shadow: 2px 3px 38px 0 rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 2px 3px 38px 0 rgba(0, 0, 0, 0.08);
    -ms-box-shadow: 2px 3px 38px 0 rgba(0, 0, 0, 0.08);
    -o-box-shadow: 2px 3px 38px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 2px 3px 38px 0 rgba(0, 0, 0, 0.08);
    display: inline-block;
    width: 100%;
    z-index: 9;
    position: relative;
}

.category-box {
    display: inline-block;
    padding: 40px 60px 60px;
    position: relative;
    vertical-align: top;
    width: 100%;
}

.category-box > i img {
    width: 26%;
}

.category-box > h2 {
    color: #242424;
    display: inline-block;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 25px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    width: 100%;
}

.category-box > i {
    font-size: 50px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.category-box:hover > i,
.category-box.selected > i {
    color: #fff;
}

a.main-btn {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 26px;
    display: inline-block;
}

.category-box > p {
    color: #878787;
    display: inline-block;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 35px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    width: 100%;
}

.category-box:hover > h2,
.category-box.selected > h2 {
    color: #fff;
}

.category-box:hover > p,
.category-box.selected > p {
    color: #f2f2f2;
}

.category-box:hover .main-btn,
.category-box.selected .main-btn {
    color: #424242;
    background: #fff;
}

.overlap-75 {
    margin-top: -75px;
}

.section-heading {
    display: inline-block;
    margin-bottom: 60px;
    position: relative;
    text-align: center;
    width: 100%;
}

.section-heading > h2 {
    color: #222;
    display: inline-block;
    font-size: 38px;
    font-weight: 300;
    margin-bottom: 0;
    width: 100%;
}

.section-heading > p {
    font-size: 16px;
    line-height: 24px;
    margin: 14px auto 15px;
    max-width: 57%;
}

.section-heading::before {
    bottom: -15px;
    content: "";
    height: 2px;
    left: 50%;
    position: absolute;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    width: 50px;
}


/*--- price table ---*/

.price-table {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    float: left;
    padding-bottom: 35px;
    text-align: center;
    width: 100%;
}

.price-table > h3 {
    background: #fafafa none repeat scroll 0 0;
    border-bottom: 1px solid #eaeaea;
    display: inline-block;
    font-weight: 200;
    padding: 12px;
    width: 100%;
}

.price-table > ul {
    list-style: outside none none;
    margin-bottom: 30px;
    margin-top: 30px;
    padding-left: 0;
}

.price-table > span {
    color: #424242;
    display: inline-block;
    font-size: 35px;
    margin-top: 15px;
    width: 100%;
}

.price-table > span i {
    color: #999;
    font-size: 20px;
}

.price-table li {
    display: inline-block;
    margin-bottom: 10px;
    width: 100%;
}

.price-table .main-btn {
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px;
    width: 80%;
}


/*--- get a quote top baner ---*/

.getquot-baner {
    float: left;
    padding: 45px 50px;
    width: 100%;
    z-index: 9;
    position: relative;
}

.getquot-baner > span {
    color: #fff;
    float: left;
    font-size: 31px;
    font-weight: 200;
}

.getquot-baner > a {
    background: #fff none repeat scroll 0 0;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    border-radius: 50px;
    float: right;
    font-size: 15px;
    padding: 12px 60px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.getquot-baner > a:hover {
    -webkit-box-shadow: 0 0 20px #fff;
    -moz-box-shadow: 0 0 20px #fff;
    -ms-box-shadow: 0 0 20px #fff;
    -o-box-shadow: 0 0 20px #fff;
    box-shadow: 0 0 20px #fff;
}


/*--- newsletter ---*/

.news-letter {
    color: #fff;
    float: left;
    text-align: center;
    width: 100%;
    position: relative;
    z-index: 3;
}

.news-letter > h2 {
    font-size: 44px;
    font-weight: 500;
    margin-bottom: 0;
}

.news-letter > h2 span {
    font-weight: 200;
}

.news-letter > span {
    float: left;
    font-size: 16px;
    letter-spacing: 0.3px;
    padding-top: 10px;
    width: 100%;
}

.news-letter > form {
    float: left;
    margin-top: 33px;
    position: relative;
    width: 100%;
}

.news-letter > form input {
    border: medium none;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #7e7e7e;
    font-size: 12px;
    font-style: italic;
    margin-right: 6px;
    padding: 18px 30px;
    width: 523px;
}

.news-letter > form button {
    border: medium none;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1px;
    padding: 18px 35px;
    text-transform: uppercase;
    vertical-align: top;
    margin-left: -60px;
}

.news-letter > form button:hover {
    -webkit-box-shadow: 0 0 10px #fff;
    -moz-box-shadow: 0 0 10px #fff;
    -ms-box-shadow: 0 0 10px #fff;
    -o-box-shadow: 0 0 10px #fff;
    box-shadow: 0 0 10px #fff;
}


/*--- our team ---*/

.our-teambox {
    background: #f6f6f6 none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    display: inline-block;
    width: 100%;
}

.our-teambox > figure {
    display: inline-block;
    margin-bottom: 0;
    width: 100%;
    overflow: hidden;
}
.our-teambox > figure img{
    transition: all 0.3s linear 0s;
}
.our-teambox:hover figure img {
    transform: scale(1.1);
}
.team-info {
    display: inline-block;
    padding: 20px;
    text-align: center;
    width: 100%;
}

.team-info > h4 {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0;
    width: 100%;
}

.team-info > span {
    font-size: 14px;
    font-weight: 200;
}


/*--- 404 page 2 ---*/

.page-eror {
    float: left;
    position: relative;
    width: 100%;
}

.page-eror > img {
    display: block;
    margin: 0 auto;
    max-width: 60%;
}

.page-eror .error-meta > h1 {
    font-size: 50px;
    font-weight: 300;
}

.page-eror .error-meta > span {
    font-size: 15px;
}

.page-eror .error-meta > a {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    padding: 12px 30px;
}


/*--- contact page2 with branches ---*/
.small-map {
    float: left;
    height: 270px;
    margin-bottom: 30px;
    width: 100%;
}
.small-map > #map-canvas {
    height: 270px;
}

.contct-info2 {
    background: #fafafa none repeat scroll 0 0;
    border: 1px solid #ede9e9;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    float: left;
    width: 100%;
}

.contct-info2 > .contact-form {
    width: 100%;
}


.contct-info2 .contact-form form .form-group {
    width: 46.7%;
}

.more-branches {
    background: #fafafa none repeat scroll 0 0;
    border: 1px solid #ede9e9;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    padding: 50px 30px 25px;
    width: 100%;
}

.branches-box {
    border-bottom: 1px dashed #d7d7d7;
    display: inline-block;
    margin-bottom: 30px;
    padding-bottom: 10px;
    width: 100%;
}

.more-branches > h4 {
    display: inline-block;
    font-size: 22px;
    margin-bottom: 30px;
    padding-bottom: 12px;
    position: relative;
}

.more-branches > h4::before {
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 50px;
}

.branches-box > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

.branches-box > ul li {
    display: inline-block;
    margin-bottom: 12px;
    width: 100%;
}

.branches-box > ul li i {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}

.branches-box > ul li span {
    color: #8b8b8b;
    display: inline-block;
    font-size: 14px;
    vertical-align: top;
    width: 89%;
}

.branches-box > ul li span i {
    font-style: normal;
    font-weight: 500;
}

.contct-info2 .contact-form form .form-group:nth-last-child(2) {
    width: 100%;
}


/*--- help and support detail page ---*/

.help-topic {
    float: left;
    width: 100%;
    padding-left: 30px;
}

.help-topic > h2 {
    color: #313131;
    display: inline-block;
    font-size: 29px;
    font-weight: 300;
    margin-bottom: 40px;
    width: 100%;
}

.help-assistant {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
}

.verified {
    color: green;
    display: inline-block;
    font-size: 30px;
    margin-right: 20px;
    vertical-align: middle;
}

.help-assistant > figure {
    border: 1px solid #ccc;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    display: inline-block;
    margin-bottom: 0;
    width: 64px;
}

.help-assistant > figure img {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
}

.assistant-name {
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
    width: 63%;
}

.assistant-name > span {
    display: inline-block;
    text-transform: uppercase;
    width: 100%;
}

.assistant-name > i {
    color: #999;
    font-size: 13px;
    font-style: normal;
}

.post-dated {
    display: inline-block;
    vertical-align: middle;
    width: 49%;
}

.help-description {
    border-top: 1px solid #eaeaea;
    display: inline-block;
    margin-top: 40px;
    padding-top: 30px;
    width: 100%;
}

.help-description > figure {
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 0 13px #d7d7d7;
    -moz-box-shadow: 0 0 13px #d7d7d7;
    -ms-box-shadow: 0 0 13px #d7d7d7;
    -o-box-shadow: 0 0 13px #d7d7d7;
    box-shadow: 0 0 13px #d7d7d7;
    padding: 8px;
}

.post-dated > i {
    font-size: 14px;
    color: #c2c2c2;
}

.post-dated > span {
    color: #999;
    font-size: 13px;
    padding-left: 10px;
}

.is-helpful {
    border-bottom: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;
    display: inline-block;
    margin-bottom: 30px;
    margin-top: 60px;
    padding-bottom: 30px;
    padding-top: 30px;
    width: 100%;
}

.is-helpful > span {
    font-size: 14px;
    margin-right: 10px;
    text-transform: capitalize;
}

.is-helpful > a {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    line-height: 10px;
    padding: 10px 20px;
    text-align: center;
}

.is-helpful > em {
    float: right;
    font-size: 14px;
    font-style: normal;
}

.share-article > span {
    display: inline-block;
    font-size: 15px;
    margin-bottom: 15px;
    text-transform: capitalize;
    width: 100%;
}

.share-article > a {
    background: #9c9c9c none repeat scroll 0 0;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    line-height: 40px;
    margin: 0 2px;
    text-align: center;
    width: 40px;
}


/*--- help result found page ---*/

.help-topic-result {
    border-bottom: 1px dotted #ccc;
    float: left;
    margin-bottom: 50px;
    padding-bottom: 50px;
    padding-left: 60px;
    width: 100%;
    position: relative;
}
.help-topic-result:last-child{
	border-bottom: 0 none;
    margin-bottom: 0;
    padding-bottom: 0;
}
.help-topic-result .checkd {
    color: green;
    font-size: 30px;
    left: 0;
    position: absolute;
    top: 0;
}

.help-topic-result > h2 {
    font-size: 20px;
    font-weight: 400;
}

.help-topic-result .help-description {
    margin-top: 20px;
    padding-top: 20px;
}

.help-topic-result .help-description > p {
    margin-bottom: 0;
}

h3.resutl-found {
    color: #3d3d3d;
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 50px;
    width: 100%;
}

h3.resutl-found > span {
    color: #999999;
}


/*--- about page ---*/

.about-winku {
    float: left;
    position: relative;
    width: 100%;
}

.about-winku > h4 {
    display: inline-block;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 20px;
    width: 100%;
    color: #333;
}

.about-winku > span {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}

.fonder {
    display: inline-block;
    vertical-align: middle;
    width: 49%;
}

figure.sign-author {
    display: inline-block;
    margin-bottom: 0;
    text-align: right;
    width: 50%;
}

.fonder > h4 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 0;
    text-transform: capitalize;
}

.fonder > h4 i {
    color: #999;
    font-size: 13px;
}

.fonder > i {
    color: #999;
    font-size: 13px;
}


/*--- product page ---*/

.product-box {
    display: inline-block;
    margin-bottom: 50px;
    position: relative;
    width: 100%;
}

.product-box > figure {
    display: inline-block;
    margin-bottom: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.product-box > figure img {
    width: 100%;
}

.product-box figure > span {
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    font-size: 13px;
    height: 40px;
    left: 10px;
    line-height: 40px;
    position: absolute;
    text-align: center;
    top: 10px;
    width: 40px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    text-transform: capitalize;
}

.product-box figure > span.new {
    background: #444;
}

.product-box figure > span.sale {
    background: #cf987e;
}

.product-box figure > span.hot {
    background: #e83f4f;
}

.product-box figure:hover > span {
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
}

.cart-optionz {
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    position: absolute;
    right: 15px;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 40px;
}

.cart-optionz > li {
    display: inline-block;
    width: 100%;
    -webkit-transition: all 0.2s ease-out 0.2s;
    -moz-transition: all 0.2s ease-out 0.2s;
    -ms-transition: all 0.2s ease-out 0.2s;
    -o-transition: all 0.2s ease-out 0.2s;
    transition: all 0.2s ease-out 0.2s;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    -webkit-transform: translate(50px, 0px);
    -moz-transform: translate(50px, 0px);
    -ms-transform: translate(50px, 0px);
    -o-transform: translate(50px, 0px);
    transform: translate(50px, 0px);
}

.cart-optionz > li > a {
    background: #fff none repeat scroll 0 0;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #999;
    display: inline-block;
    font-size: 15px;
    line-height: 40px;
    margin-bottom: 5px;
    width: 40px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    -webkit-box-shadow: 0px 0px 15px #cfcfcf;
    -moz-box-shadow: 0px 0px 15px #cfcfcf;
    -ms-box-shadow: 0px 0px 15px #cfcfcf;
    -o-box-shadow: 0px 0px 15px #cfcfcf;
    box-shadow: 0px 0px 15px #cfcfcf;
}

.cart-optionz > li > a:hover {
    color: #fff;
}

.cart-optionz > li:nth-child(2) {
    -webkit-transition-delay: 0.1s;
    -moz-transition-delay: 0.1s;
    -ms-transition-delay: 0.1s;
    -o-transition-delay: 0.1s;
    transition-delay: 0.1s;
}

.cart-optionz > li:nth-child(3) {
    -webkit-transition-delay: 0.15s;
    -moz-transition-delay: 0.15s;
    -ms-transition-delay: 0.15s;
    -o-transition-delay: 0.15s;
    transition-delay: 0.15s;
}

.cart-optionz > li:nth-child(4) {
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    -ms-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
}

.product-box > figure:hover .cart-optionz > li {
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    -webkit-transform: translate(0px, 0px);
    -moz-transform: translate(0px, 0px);
    -ms-transform: translate(0px, 0px);
    -o-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
}

.product-name {
    display: inline-block;
    margin-top: 10px;
    width: 100%;
}

.product-name > h5 {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0;
    width: 100%;
}

.product-name > h5 a {
    display: inline-block;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.starz {
    display: inline-block;
    list-style: outside none none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.starz > li {
    color: orange;
    display: inline-block;
    font-size: 12px;
}

.prices {
    display: inline-block;
    margin-top: 5px;
    width: 100%;
}

.prices > ins {
    color: #424242;
    font-size: 16px;
    font-weight: 400;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
}

.prices > del {
    color: #999;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;
    margin-left: 5px;
}

.shop-page {
    display: inline-block;
    position: relative;
    width: 100%;
}

.shop-filter-sec {
    border-bottom: 1px solid #eaeaea;
    display: inline-block;
    margin-bottom: 50px;
    padding-bottom: 20px;
    width: 100%;
}

.shop-filter-sec > span {
    float: left;
    width: 50%;
}

.shop-filter {
    float: right;
    width: 200px;
}

.shop-filter .chosen-container .chosen-single {
    border: 1px solid #eaeaea;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    color: #424242 !important;
    font-size: 14px;
    height: 40px;
    line-height: 38px;
    padding-left: 20px;
    text-transform: capitalize;
}


/*--- pagination ---*/

.paginationz {
    display: inline-block;
    list-style: outside none none;
    margin: 0 auto;
    padding-left: 0;
    text-align: center;
    width: 100%;
    margin-top: 40px;
}

.paginationz > li {
    color: #555555;
    display: inline-block;
    font-size: 13px;
    margin-right: 4px;
}

.paginationz > li a {
    background: #fbfbfb none repeat scroll 0 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    display: inline-block;
    font-family: inherit;
    height: 51px;
    line-height: 51px;
    width: 51px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.paginationz > li a:hover,
.paginationz > li a.active {
    color: #fff;
}

.paginationz > li.prev a,
.paginationz > li.next a {
    background: #303030 none repeat scroll 0 0;
    color: #fff;
}

.paginationz > li.space {
    color: #555;
    letter-spacing: 3px;
    margin: 0 45px;
}

a.shopping-cart {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    bottom: 20px;
    color: #fff;
    display: inline-block;
    font-size: 13px;
    left: 10px;
    line-height: initial;
    padding: 5px 20px;
    position: fixed;
    text-align: center;
}

a.shopping-cart > i {
    border-right: 1px solid #fff;
    margin-right: 10px;
    padding-right: 10px;
}


/*--- single detail gold page ---*/

.slider-for-gold,
.slider-for-pearl {
    float: left;
    list-style: outside none none;
    padding-left: 0;
    position: relative;
    width: 100%;
    margin-bottom: 0;
}

.slider-for-gold li,
.slider-for-pearl li {
    display: inline-block;
    width: 100%;
}

.slider-for-gold .slick-track > li img {
    max-width: 79.5%;
    min-width: 79.5%;
    width: 79.5%;
}

.slider-nav-gold {
    float: left;
    left: auto;
    padding-left: 0;
    position: absolute;
    right: 20px;
    text-align: left;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: auto;
    margin-bottom: 0;
}

.slider-nav-gold .slick-track {
    display: inline-block;
    width: 135px;
}

.slider-nav-gold .slick-track > li {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    margin-top: 10px;
    border: 3px solid #eee;
    width: 124px !important;
    display: inline-block;
    float: right;
    cursor: pointer;
}

.slider-nav-gold .slick-track > li.slick-current {
    margin-right: 10px;
}

.slider-nav-gold .slick-track > li img {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    max-height: 130px;
    max-width: 118px;
    min-height: 130px;
    min-width: 118px;
}


/*--- slick arrows style ---*/

.slick-arrow {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #eaeaeb;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    color: transparent;
    height: 36px;
    line-height: 33px;
    position: relative;
    width: 40px;
    margin-left: 12px;
    font-weight: 500;
}

.slick-arrow::before {
    color: #a8aaab;
    content: "\f107";
    font-family: fontawesome;
    font-size: 20px;
    left: 50%;
    position: absolute;
    top: 0;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
}

.slick-arrow.slick-prev:before {
    content: "\f106";
}

.slick-next.slick-arrow {
    margin-top: 20px;
}

.slick-prev.slick-arrow {
    margin-bottom: 10px;
}

.delivery-guide {
    display: inline-block;
    margin-bottom: 30px;
    margin-top: 20px;
}

.delivery-guide > a {
    color: #424040;
    font: 14px;
    font-weight: 800;
    margin-right: 30px;
    position: relative;
}

.delivery-guide > a::before {
    color: #e3e3e3;
    content: "x";
    font-size: 12px;
    position: absolute;
    right: -19px;
    top: 1px;
}

.delivery-guide > a:last-child::before {
    display: none;
}

.add_to_wishlist {
    border: 1px solid #939393;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #363636;
    display: inline-block;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
    text-align: center;
    width: 40px;
}

.prod {
    display: inline-block;
    width: 100%;
}

.cat-heading {
    color: #cacaca;
    font-size: 15px;
    letter-spacing: 0.3px;
    line-height: 27px;
    font-weight: 500;
}

.cat-heading > a {
    color: #0e0e0e;
    font-size: 13px;
    margin-left: 8px;
    position: relative;
    line-height: initial;
}

.cat-heading > a::before {
    content: ",";
    position: absolute;
    right: -5px;
    top: 0;
}

.cat-heading > a:last-child::before {
    display: none;
}

.cat-heading > a:hover {
    -webkit-text-decoration: underline;
    -moz-text-decoration: underline;
    -ms-text-decoration: underline;
    -o-text-decoration: underline;
    text-decoration: underline;
}

a.btn2 {
    border: 2px solid #3e3e3e;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #363636;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    line-height: 49px;
    text-align: center;
    text-transform: uppercase;
    width: 185px;
    height: 49px;
}

a.btn2 > i {
    font-size: 15px;
    margin-right: 8px;
}

a.btn2:hover {
    color: #fff;
}

.extras {
    float: left;
    width: 100%;
    margin-top: 20px;
    text-align: right;
}


/*--- single review tabs ---*/

.nav.nav-tabs.single-btn {
    display: inline-block;
    list-style: outside none none;
    padding-bottom: 20px;
    padding-left: 0;
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
}

.tab-section {
    float: left;
    width: 100%;
}

.single-btn > li {
    display: inline-block;
    margin-right: 36px;
}

.single-btn > li > a {
    border: 1px solid #939393;
    border-radius: 30px;
    color: #7b7d7f;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1px;
    padding: 9px 20px;
}

.single-btn > li > a.active {
    color: #fff;
}


/*--- single review section ---*/

.tab-content .woocommerce-Reviews {
    float: left;
    width: 100%;
}

.tab-content .woocommerce-Reviews > #comments {
    float: left;
    width: 100%;
}

.tab-content .woocommerce-Reviews-title {
    display: inline-block;
    font-size: 25px;
    letter-spacing: 0.3px;
    margin-bottom: 20px;
    width: 100%;
}

.woocommerce-Reviews .commentlist {
    list-style: outside none none;
    padding-left: 0;
    width: 100%;
}

.tab-content .commentlist > li {
    border-bottom: 1px dotted #d9d9d9;
    display: inline-block;
    margin-bottom: 30px;
    padding-bottom: 16px;
    width: 85%;
}

.tab-content.comment_container {
    float: left;
    width: 100%;
}

.tab-content .comment_container > .avatar {
    margin-right: 10px;
    max-width: 42px;
    vertical-align: top;
    width: 42px;
}

.tab-content .comment-text {
    display: inline-block;
    vertical-align: top;
    width: 90%;
}

.tab-content .comment-text .user-name {
    font-size: 15px;
    font-weight: 500;
    margin-right: 35px;
}

.tab-content .comment-text a.post-date {
    color: #a8aaab;
    font-size: 12px;
}

.star-rating {
    color: #e7e7e7;
    display: inline-block;
    font-size: 13px;
    margin-left: 70px;
}

.tab-content .comment-text > p {
    color: #7b7d7f;
    font-size: 15px;
    margin-top: 10px;
}

.woocommerce-noreviews {
    color: #999;
    text-transform: capitalize;
}

.comment-respond {
    float: left;
    width: 85%;
}

.reply-title {
    color: #1c1f23;
    font-size: 25px;
}

.comment-notes {
    font-size: 13px;
}

.comment-notes > span {
    font-size: 13px;
    color: #333;
}

.comment-form-author,
.comment-form-email {
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 16px;
    width: 48.9%;
}

.comment-form-author input,
.comment-form-email input,
.comment-notes textarea {
    border: 2px solid #eaeaeb;
    color: #7b7d7f;
    font-size: 13px;
    padding: 15px 20px;
    width: 100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
}

.comment-notes textarea {
    height: 130px;
}

.comment-form-email {
    margin-right: 0;
}

.comment-respond .star-rating {
    margin-left: 0;
}

.star-rating > label {
    color: #1c1f23;
    font-size: 13px;
    font-weight: 500;
    margin-right: 10px;
}

.form-submit {
    margin-bottom: 0;
    margin-top: 15px;
}

.form-submit > input[type="submit"] {
    border: medium none;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 12px;
    padding: 11px 52px;
    text-transform: uppercase;
}

.form-submit > input[type="submit"]:hover {
    background: #333 none repeat scroll 0 0;
}

.aditional-inf {
    float: left;
    width: 100%;
}

.aditional-inf .main-title {
    color: #424040;
    display: inline-block;
    font-size: 25px;
    vertical-align: top;
    width: 50%;
}

.adition-info {
    color: #7b7d7f;
    display: inline-block;
    font-size: 15px;
    line-height: 24px;
    vertical-align: middle;
    width: 49%;
}

table.adition {
    color: #525252;
    display: table;
    float: left;
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 10px;
    width: 100%;
}

table.adition tbody tr td {
    border-top: 1px dotted #d9d9d9;
    padding-bottom: 18px;
    padding-top: 18px;
}

table.adition tbody tr td {
    color: #1c1f23;
    font-weight: 500;
}

table.adition tbody tr:last-child td {
    border-bottom: 1px dotted #d9d9d9;
}

.share {
    color: #cacaca;
    float: left;
    margin-top: 20px;
    width: 100%;
}

.share > span {
    font-size: 14px;
    margin-right: 10px;
    padding-right: 50px;
    position: relative;
    text-transform: capitalize;
    font-weight: 500;
}

.share > span::before {
    background: #ddd none repeat scroll 0 0;
    content: "";
    height: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 35px;
}

.share > a {
    display: inline-block;
    font-size: 17px;
    margin-right: 10px;
    vertical-align: middle;
    color: #8f8f8f;
}

.full-postmeta > h4 {
    color: #424040;
    display: inline-block;
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
    margin-bottom: 0;
    padding-bottom: 16px;
    width: 100%;
}

.full-postmeta > i {
    color: #dddddd;
    display: block;
    font-size: 14px;
    font-style: normal;
    letter-spacing: 6px;
    padding-bottom: 8px;
    text-transform: uppercase;
}

.full-postmeta .shopnow {
    display: inline-block;
    font-weight: 500;
    margin: 10px 0;
    -webkit-text-decoration: underline;
    -moz-text-decoration: underline;
    -ms-text-decoration: underline;
    -o-text-decoration: underline;
    text-decoration: underline;
    text-transform: uppercase;
    width: 100%;
}

.prices.style2 ins span {
    display: inline-block;
    font-size: 23px;
    font-weight: 500;
}

.prices.style2 {
    margin: 20px 0;
}


/*--- checkout page ---*/

.checkout-meta > h4,
.checkout-total > h4 {
    font-size: 20px;
    letter-spacing: 0.5px;
    margin-bottom: 22px;
    text-transform: uppercase;
}

.c-form input[type="checkbox"] {
    margin-right: 12px;
    width: auto;
}

.c-form label {
    color: #858585;
    font-size: 13px;
}

.c-form label a {
    color: #5898f0;
    -webkit-text-decoration: underline;
    -moz-text-decoration: underline;
    -ms-text-decoration: underline;
    -o-text-decoration: underline;
    text-decoration: underline;
}

.c-form {
    float: left;
    width: 100%;
    padding: 0 10px;
}

.c-form input,
.c-form textarea {
    background: #f9f9f9 none repeat scroll 0 0;
    border: medium none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    color: #666;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.3px;
    padding: 16px 30px;
    width: 100%;
}

.c-form > .row > div {
    padding: 5px;
}

.c-form input.submit,
.c-form button.submit {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 20px;
    padding-left: 43px;
    padding-right: 43px;
    width: auto;
}

.c-form button.submit {
    border: medium none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.1px;
    padding-bottom: 15px;
    padding-top: 15px;
    text-transform: uppercase;
}

.c-form input.submit:hover,
.c-form button.submit:hover {
    background: #333;
}

button.submit-checkout {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    margin-top: 30px;
    padding: 10px 30px;
    border: none;
    color: #fff;
}

.checkout-total {
    display: inline-block;
    width: 100%;
}

.total-box {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    display: inline-block;
    padding: 30px;
    width: 100%;
    margin-top: 5px;
}

.total-box > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}

.total-box > ul > li {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}

.total-box > ul > li span {
    float: right;
}

.total-box > ul > li.final-total {
    border-top: 1px solid #d6d6d6;
    font-weight: 500;
    margin-top: 10px;
    padding-top: 20px;
    text-transform: uppercase;
}

.payment-method .form-radio > .radio {
    width: 100%;
}

.payment-method {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
}

.additional {
    display: inline-block;
    margin-top: 30px;
    width: 100%;
}

.additional > h4 {
    display: inline-block;
    font-size: 18px;
    margin-bottom: 15px;
    width: 100%;
}


/*--- cart page ---*/

.cart-list-quantity {
    float: left;
    padding-left: 20px;
    padding-top: 19px;
    width: 100%;
}

.cart-list-quantity > .c-input-number {
    display: inline-block;
}

.manual-adjust {
    background: #f3f3f3 none repeat scroll 0 0;
    border-style: none;
    border-width: 2px;
    color: #727272;
    float: left;
    font-size: 15px;
    font-weight: 500;
    height: 38px;
    padding: 0;
    text-align: center;
    width: 40px;
}

.c-input-number > span > input.userincr-btn-inc {
    border: medium none;
    float: left;
    font-size: 13px;
    height: 38px;
    width: 30px;
}

.c-input-number > span > input.userincr-btn-dec {
    border: medium none;
    float: left;
    font-size: 13px;
    height: 38px;
    width: 30px;
    margin-left: -70px;
}


/*--- cart page ---*/

.cart-sec table tbody {
    display: table;
    width: 100%;
}

.cart-sec table.table tr {
    position: relative;
}

.cart-sec table tr th {
    border: 2px solid #eaeaea;
    font-size: 13px;
    font-weight: 500;
    padding: 20px;
    text-transform: uppercase;
    text-align: center;
}

.cart-sec table tr td {
    border: 2px solid #eaeaea;
    line-height: initial;
    padding: 10px 20px;
    text-align: center;
    position: relative;
}

.cart-sec table tr td .cart-avatar {
    float: left;
    position: relative;
}

.delete-cart {
    background: #fa8a8a none repeat scroll 0 0;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #fff;
    content: "";
    font-size: 10px;
    font-weight: 500;
    height: 26px;
    line-height: 26px;
    position: absolute;
    right: 20px;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 26px;
    z-index: 2;
}

.delete-cart:hover {
    color: #fff;
}

.cart-sec table tr td .cart-meta {
    overflow: hidden;
    padding-left: 30px;
    padding-top: 15px;
}

.cart-meta > span {
    float: left;
    font: 18px;
    line-height: 23px;
    font-weight: 500;
    max-width: 70%;
    text-align: left;
}

.cart-prices {
    color: #727272;
    float: left;
    padding-top: 20px;
    width: 100%;
}

.cart-prices > del {
    color: #999999;
    display: inline-block;
    font-size: 12px;
    padding-top: 0;
    vertical-align: sub;
}

.cart-prices ins {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    vertical-align: sub;
    padding-right: 6px;
}

.total-price {
    color: #727272;
    float: left;
    font-size: 18px;
    padding-top: 20px;
    width: 100%;
}

.amount-area {
    float: left;
    width: 100%;
    margin-top: 20px;
}

.coupon-code {
    float: left;
    position: relative;
    width: 100%;
}

.coupon-code > input {
    border: 2px solid #eaeaea;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #454545;
    float: left;
    font-size: 13px;
    padding: 15px 22px;
    width: 100%;
}

.coupon-code > button {
    border: medium none;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #fff;
    display: inline-block;
    font-size: 13px;
    line-height: 37px;
    padding: 0;
    position: absolute;
    right: 10px;
    text-align: center;
    top: 8px;
    width: 37px;
}

.total-area {
    float: left;
    width: 100%;
}

.total-area > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    margin-top: 45px;
    padding-left: 0;
    width: 58%;
}

.total-area > ul li {
    color: #727272;
    font-size: 15px;
    margin-bottom: 10px;
    text-align: right;
}

.total-area > ul li span {
    float: left;
    margin-right: 90px;
}

.total-area > ul li i {
    font-style: normal;
}

.total-area > ul li.order-total {
    border-top: 1px solid #ccc;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 20px;
    max-width: 100%;
    padding-top: 10px;
}

.proceed {
    float: right;
    margin-top: -65px;
}

.proceed .button {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 14px;
    padding: 14px 25px;
    text-transform: capitalize;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.proceed .button:hover {
    background: #333;
}

.amount-area .update-cart {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
    border-radius: 30px;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 30px;
    padding: 10px 25px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.amount-area .update-cart:hover {
    background: #333;
}


/*--- logout page ---*/

.login-form form input {
    background: #f4f2f2 none repeat scroll 0 0;
    border: medium none;
    font-size: 13px;
    padding: 11px 30px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
}

.login-form > form {
    display: inline-block;
    width: 100%;
    margin-top: 10px;
}

.login-form {
    display: inline-block;
    vertical-align: middle;
    width: 55%;
}

.login-form button {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    font-size: 13px;
    padding: 10.5px 20px;
}

.logout-meta {
    display: inline-block;
    text-align: center;
    width: 100%;
}

.logout-meta > h2 {
    display: inline-block;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 20px;
    text-transform: uppercase;
    width: 100%;
}

.logout-meta > span {
    display: inline-block;
    margin-bottom: 6px;
    width: 100%;
    color: #515365;
    font-weight: 500;
}

.logout-meta > p {
    display: block;
    letter-spacing: 0.3px;
    margin: 0 auto;
    max-width: 40%;
}

.logout-meta > p a {
    color: red;
}


/*--- fourm page ---*/

.forum-list table thead tr th {
    font-size: 14px;
    padding: 9px 20px;
    text-transform: capitalize;
}

.forum-list table {
    border: 1px solid #dee2e6;
}

.forum-list table tbody tr td {
    padding: 20px;
    text-align: center;
    width: 100%;
}

.forum-list table tbody tr td:first-child {
    text-align: left;
}

.forum-list table tbody tr td i {
    margin-right: 5px;
}

.forum-list table tbody tr td > a {
    font-size: 16px;
}

.forum-list table tbody tr td p {
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 20px;
    margin-bottom: 0;
    margin-top: 10px;
}

.forum-list table tbody tr td h6 {
    font-size: 11.5px;
    padding-left: 26px;
    padding-top: 6px;
}
a.addnewforum {
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 10px 30px;
}

/*--- full sidebar --*/

aside.sidebar.full-style {
    padding-bottom: 0;
    width: 100%;
}

.sidebar.full-style .widget {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    width: 100%;
}

.sidebar.full-style .widget .widget-title {
    font-size: 15px;
    margin-bottom: 20px;
    padding: 0;
    text-transform: capitalize;
}

.sidebar.full-style .widget .widget-title::before {
    display: none;
}

.sidebar.full-style .widget > ul {
    padding: 0;
}

.full-style .forum-static > li {
    border: 1px solid #eaeaea;
    border-collapse: collapse;
    float: left;
    font-size: 14px;
    margin-bottom: -1px;
    padding: 0 0 0 15px;
    width: 100%;
}

.full-style .forum-static > li span {
    background: #f5f5f5 none repeat scroll 0 0;
    float: right;
    font-size: 12px;
    padding: 10px 14px;
}

.full-style .forum-static > li a {
    display: inline-block;
    font-size: 14px;
    line-height: 34px;
}


/*--- login sidebar ---*/

.singin > form {
    border: 1px solid #eaeaea;
    float: left;
    padding: 10px;
    position: relative;
    width: 100%;
}

.singin > form > input {
    background: #f8f8f8 none repeat scroll 0 0;
    border: medium none;
    font-size: 13px;
    margin-bottom: 5px;
    padding: 10px 20px;
    width: 100%;
}

.singin {
    float: left;
    width: 100%;
}

.singin > form > input[type="checkbox"] {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 5px;
    width: auto;
}

.singin > form > label {
    color: #999;
    font-size: 12px;
    margin: 0;
}

.singin > form > button {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    margin-top: 20px;
    padding: 8px 10px;
    width: 100%;
}

.singin form .checkbox {
    display: inline-block;
    margin-bottom: 0;
    width: 100%;
}

.singin form .checkbox label {
    font-size: 12px;
    margin: 0;
}


/*-- */

.sidebar.full-style .widget ul.recent-topics,
.sidebar.full-style .widget ul.feature-topics {
    border: 1px solid #eaeaea;
    display: inline-block;
    margin-bottom: 0;
    padding: 20px;
    width: 100%;
}

.widget ul.recent-topics > li > a,
.widget ul.feature-topics > li > a {
    color: #646464;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    -webkit-transition: all 0.2s linear 0s;
    -moz-transition: all 0.2s linear 0s;
    -ms-transition: all 0.2s linear 0s;
    -o-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.widget ul.recent-topics > li > span,
.widget ul.feature-topics > li > span {
    color: #999;
    display: inline-block;
    font-size: 11px;
    width: 100%;
}

.widget ul.feature-topics > li > i {
    font-size: 16px;
    color: orange;
}

.feature-topics > li > i {
    vertical-align: text-top !important;
}

.widget ul.feature-topics > li > a {
    vertical-align: top;
    width: 88.5%;
    font-size: 12px;
}

.widget ul.feature-topics > li > span {
    padding-left: 25px;
}


/*---- forum open topic detail page ---*/

.topic-data > img {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    display: block;
    margin: 0 auto;
}

.topic-data {
    text-align: center;
}

.topic-data > span {
    float: left;
    font-size: 12px;
    padding: 5px 0 2px;
    width: 100%;
}

.topic-data > em {
    color: #999;
    float: left;
    font-size: 11px;
    width: 100%;
}

.date-n-reply > span {
    float: left;
    font-size: 12px;
    width: 100%;
}

.date-n-reply {
    text-align: center;
    width: 220px;
}

.forum-open .table tr td p {
    font-size: 13px;
    margin: 0;
}

.date-n-reply > a {
    float: left;
    font-size: 12px;
    margin-top: 20px;
    width: 100%;
}

.forum-open > h5 {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 40px;
    width: 100%;
}

.forum-open > h5 > i {
    color: orange;
}

.forum-open table thead tr th {
    text-align: center;
}

.forum-open table tr td {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 30px;
    padding-top: 30px;
}


/*--- sponsor logos --*/

.sponsor-logo li img {
    display: inline-block !important;
    width: auto !important;
}

.sponsor-logo li {
    display: inline-block;
    text-align: center;
    width: 100%;
}

.sponsor-logo {
    margin-bottom: 0;
    padding: 0 15px !important;
    width: 100%;
    float: left;
}
/*--- career detail page ---*/
.employer-info {
    display: inline-block;
    width: 100%;
}
.employer-info > i {
    display: inline-block;
    font-size: 14px;
    font-style: normal;
    width: 100%;
}
.employer-info h2 {
    display: inline-block;
    font-size: 34px;
    font-weight: 300;
    margin-bottom: 20px;
    width: 100%;
}
.employer-info > ul {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.employer-info > ul li {
    display: inline-block;
    font-size: 14px;
    margin-bottom: 5px;
    width: 100%;
}
.employer-info > ul li span {
    display: inline-block;
    font-weight: 500;
    width: 130px;
}
.employer-info > ul li > i {
    color: #797979;
}
.salary-area {
    display: inline-block;
    margin-top: 80px;
    text-align: right;
    width: 100%;
}
.sociaz-media {
    display: inline-block;
    list-style: outside none none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
}
.sociaz-media > li {
    display: inline-block;
    margin: 0 2px;
}
.sociaz-media > li > a {
    border-radius: 3px;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 13px;
    transition: all 0.2s linear 0s;
}
.sociaz-media > li > a:hover {
    border-color: transparent;
    color: #fff;
}
.sociaz-media > li > a i {
    font-size: 14px;
    margin-right: 3px;
}
.salary-area > h4 {
    color: #282828;
    display: inline-block;
    margin-bottom: 0;
    width: 100%;
}
.salary-area a.twitter {
    background: #55acee;
    color: #fff;
}

.salary-area a.google {
    background: #dd4b39;
    color: #fff;
}

.salary-area a.pinterest {
    background: #ca212a;
    color: #fff;
}
.salary-area a.facebook {
    background: #516eab;
    color: #fff;
}
.salary-area > span {
    color: #999;
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}

.job-detail {
    display: inline-block;
    width: 100%;
}
.job-detail > h3 {
    color: #3a3a3a;
    display: inline-block;
    font-size: 30px;
    margin-bottom: 20px;
    width: 100%;
}
.job-detail > p {
    display: inline-block;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 30px;
    width: 100%;
}
.job-detail h5 {
    color: #3a3a3a;
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
}
.job-detail > ul {
    display: inline-block;
    list-style: outside none none;
    padding-left: 20px;
    width: 100%;
}
.job-detail > ul li i {
    display: inline-block;
    margin-right: 5px;
}
.job-detail > ul li span {
    color: #7d7d7d;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
    width: 96%;
}
.job-detail > ul li {
    display: inline-block;
    margin-bottom: 10px;
    width: 100%;
}
.apply-bttons {
    display: inline-block;
    margin-top: 20px;
    padding-left: 20px;
    width: 100%;
}
.apply-bttons > a {
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 15px;
    margin-right: 5px;
    padding: 8px 20px;
}
.company-intro {
    display: inline-block;
    padding-top: 10px;
    width: 100%;
}
.company-intro > h4 {
    display: inline-block;
    font-size: 16px;
    text-transform: capitalize;
    width: 100%;
}
.company-intro > a {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
.modal-backdrop.show{
    display: none;
}

.modal.fade.show::after {
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
    bottom: 0;
    content: "";
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
}
`;