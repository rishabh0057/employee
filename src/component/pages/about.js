import React from "react";
import Navbar from "../layout/Navbar";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="py-4">
					<h2>ABOUT page</h2>
					<p className="text-start">
						Start aligned text on all viewport sizes.
					</p>
					<p className="text-center">
						Center aligned text on all viewport sizes.
					</p>
					<p className="text-end">
						End aligned text on all viewport sizes.
					</p>

					<p className="text-sm-start">
						Start aligned text on viewports sized SM (small) or
						wider.
					</p>
					<p className="text-md-start">
						Start aligned text on viewports sized MD (medium) or
						wider.
					</p>
					<p className="text-lg-start">
						Start aligned text on viewports sized LG (large) or
						wider.
					</p>
					<p className="text-xl-start">
						Start aligned text on viewports sized XL (extra-large)
						or wider.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
