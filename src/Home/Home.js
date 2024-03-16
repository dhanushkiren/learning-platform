import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'


function Home() {

    return (
        <div>
            <div id="content">
                <div id="top">
                    <div id="left">
                        <div class="container"> <Sidebar /> </div>
                    </div>
                </div>
            </div>
            <div id="bottom">
                <div className="content">
                    <Routes>
                    
                    </Routes>
                </div>
            </div>
        </div>

    );
}
export default Home;