import React from 'react';
import './courses.css'
import SliderCourse from "../slider-courses/SliderCourse";


const Courses = () => {



    return (
        <div className="courses">
            <div className="coursesWrapper">
                <h2 className="courseMainText">Курстар</h2>
                <div className="courseButtons">
                    <button className="courseButton active">Бизнес</button>
                    <button className="courseButton">Дизайн</button>
                    <button className="courseButton">Психология</button>
                    <button className="courseButton">Бағдарламалау</button>
                    <button className="courseButton">Жеке даму</button>
                    <button className="courseButton">IT</button>
                </div>
            </div>
            <SliderCourse/>
        </div>
    );
};

export default Courses;