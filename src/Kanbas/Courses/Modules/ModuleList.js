import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {ArrowRightIcon} from "../../Icons/ArrowRightIcon";

const Module = (expanded) => {
    return(
        <div style={{width:'100%', background:"grey", height: '40px'}}>
            {expanded ? <ArrowRightIcon /> : <div style={{transform : 'rotate(90deg)'}}><ArrowRightIcon /></div>}

        </div>
    )
}
function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        // <ul className="list-group">
        //     {
        //         modules
        //             .filter((module) => module.course === courseId)
        //             .map((module, index) => (
        //                 <li key={index} className="list-group-item">
        //                     <h3>{module.name}</h3>
        //                     <p>{module.description}</p>
        //                 </li>
        //             ))
        //     }
        // </ul>
        <Module expanded={false} />


    );
}

export default ModuleList;