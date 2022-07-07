import React from 'react';
import './home.css'
import Topbar from "../../components/topbar/Topbar";
import Welcome from "../../components/welcome/Welcome";
import Courses from "../../components/courses/Courses";

const Home = () => {
    return (
        <div className="home">


            <div className="homeWrapper">
                <Topbar/>
                <Welcome/>
                <Courses/>
            </div>
        </div>
    );
};

export default Home;