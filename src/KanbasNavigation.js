import React from 'react';
import { Link } from 'react-router-dom';

function KanbasNavigation() {
    const links = [
        { path: '/Kanbas/Account', text: 'Account' },
        { path: '/Kanbas/Dashboard', text: 'Dashboard' },
        { path: '/Kanbas/Courses', text: 'Courses' },
        { path: '/Kanbas/Calendar', text: 'Calendar' },
    ];

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default KanbasNavigation;