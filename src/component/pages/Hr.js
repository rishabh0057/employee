import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

const Hr = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link className="navbar-brand" exact to="/about">
					<img src={logo} />
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								exact="true"
								to="/allemployee"
							>
								All Employee
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" exact="true" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								exact="true"
								to="/contact"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<Link
					className="btn btn-primary border-light"
					exact="true"
					to="/adduser"
				>
					Add Employee
				</Link>
			</div>
		</nav>
	);
};

export default Hr;
