import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

const Navbar = () => {
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
								to="/home"
							>
								Home
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" exact="true" to="/about">
								About
							</Link>
						</li> */}
						{/* <li className="nav-item">
							<Link
								className="nav-link"
								exact="true"
								to="/contact"
								....................................................................................................

							>
								Contact
							</Link>
						</li> */}
					</ul>
				</div>
				<div className="mr-20">
					<Link
						className="btn btn-primary border-light"
						exact="true"
						to="/hr"
					>
						HR Panel
					</Link>
				</div>

				<Link
					className="btn btn-primary border-light"
					exact="true"
					to="/employeepanel"
				>
					Employee Panel
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
