import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import {CourseNavigation} from "./CourseNavigation";
import {UserIcon} from "../Icons/UserIcon";

const CourseContainer = ({title, subTitle , description, icon}) => {
    return (
        <div className='courseElement'>
            <div className="iconContainer">{icon}</div>
            <div className='titleContainers'>
                <a href={`./Courses/${title}`}>
                    <div style ={{fontSize: "19px", letterSpacing : "2px", color: 'blue'}}>{title}</div>
                </a>
                <div style ={{fontSize: "14px", letterSpacing : "1.2px", color: 'black' , padding : '4px'}}>{subTitle}</div>
                <div style ={{fontSize: "12px", letterSpacing : "1.2px", color: 'grey', padding : '4px'}}>{description}</div>
            </div>
        </div>
    )
}

const Courses = () => {
    const { courseId } = useParams();
    const db = require('../../Kanbas/Database/courses.json')
    const course = db.find((course) => course._id === courseId);

    return (
        <div style={{width: '100%'}}>
            <h1>Dashboard</h1>
            <div>
                <hr style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    margin: '10px 0',
                    position: 'absolute'
                }} />
            </div>
            <div className = 'courseCointainer'>
                {
                    db.map((course, index) => {
                        return <CourseContainer title={course._id} subTitle={course.name} description='Course 1' icon={<UserIcon/>}/>
                    })
                }
            </div>
        </div>
    );
}


export default Courses;