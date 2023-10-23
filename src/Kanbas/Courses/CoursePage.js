import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {CourseNavigation} from "./CourseNavigation";
import Modules from "./Modules";
import React from "react";
import db from "../../Kanbas/Database/courses.json";
import {Hamburger} from "../Icons/Hamburger";



export const Course = ()  => {
    const { courseId } = useParams();
    const db = require('../../Kanbas/Database/courses.json')
    const course = db.filter(ele => ele._id === courseId)

    return (
        <div >
            <div style ={{display: "flex", flexDirection:"row", fontSize: '28px', padding: "10px", marginLeft: "-40px", letterSpacing:"3px", marginTop: '25px',cursor: 'pointer'}}>
                <Hamburger />
                <div style ={{color: 'gray', marginLeft: '40px', display: 'flex', alignItems: 'center'}}>{course[0].name.toUpperCase()}
                </div>
            </div>
            <div style ={{marginStart: '-33px'}}><hr style={{width: "100%", borderTop: "none",  borderRight: "none", borderBottom: "1px solid rgb(204, 204, 204)", borderLeft: "none", borderImage: "initial", margin: "10px 0px", position: "absolute" }}/></div>
        <div style ={{display: 'flex', flexDirection: "row"}}>
            <div style = {{marginLeft :'-35px' ,marginTop: "20px", boxShadow:'0 2px 4px  0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginRight: '20px'}}>
                <CourseNavigation />
            </div>
            <div style ={{}}>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={Modules} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
        </div>
    );
}