import React from "react";
import "./App.css"
import { useState } from "react";
import  NavBar  from "./Component/NavBar";
import {Banner} from "./Component/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./Component/Skills";
import { Projects } from "./Component/Projects";
import {Contact} from "./Component/Contact";
//import DarkMode from "./Component/DarkMode";
import { Footer } from "./Component/Footer";
import {Location} from "./Component/Location";



function  App(){
    const [darkMode, setDarkMode] = useState(false);
    return(
<div>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="ntainer">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
     
    




       </div>
         {/* <DarkMode></DarkMode> */}
         <NavBar></NavBar>
         <Banner></Banner>
         
         <Skills></Skills>
         <Projects></Projects>
         <Contact></Contact>
         <Footer></Footer>
         <Location></Location>
         
 </div>
        
    );

};
export default App;