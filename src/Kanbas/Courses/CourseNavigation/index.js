import {UserIcon} from "../../Icons/UserIcon";
import './Courses.css'
import {useLocation, useParams} from "react-router";
import {Link} from "react-router-dom";


export const CourseNavigation = () => {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <div style={{ width: 150, padding: '20px' }}>
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <div style ={{color: "grey", borderLeftColor: `${pathname.includes(link) ? 'red 2px' : ''}`}}>
                        {link}
                    </div>
                </Link>
                </div>
            ))}
        </div>
    );
}
