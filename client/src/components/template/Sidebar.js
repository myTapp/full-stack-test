import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" to="/beers">
                        <span data-feather="home"></span>
                        <i className="fa fa-beer" aria-hidden="true"></i>
                        Beers 
                        <span className="sr-only">(current)</span>
                    </Link>
                </li>

            </ul>
        </div>
    </nav>
)