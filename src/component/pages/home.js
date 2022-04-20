import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Home = () => {
	const [user, setUser] = useState([]);

	// useEffect(() => {
	// 	loadUsers();
	// }, []);

	// const loadUsers = async () => {
	// 	const result = await axios.get("http://localhost:3001/users");
	// 	setUser(result.data.reverse());
	// };

	//delete user details//

	// const deleteUser = async (id) => {
	// 	await axios.delete(`http://localhost:3001/users/${id}`);
	// 	loadUsers();
	// };

	return (
		<>
			<Navbar />
			<h4>We are Working on it</h4>
			{/* <div className="container">
				<div className="py-4">
					<h2>HOME page</h2>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">S.No.</th>
								<th scope="col">Name</th>
								<th scope="col">D.O.B</th>
								<th scope="col">Email</th>
								<th scope="col">Number</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{user.map((user, index) => (
								<tr>
									<th scope="row">{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>
										<Link
											className="btn btn-secondary mr-2"
											to={`/edit/${user.id}`}
										>
											View
										</Link>
										<Link
											className="btn btn-success mr-2"
											to={`/edit/${user.id}`}
										>
											Edit
										</Link>
										<button
											className="btn btn-danger mr-2"
											// onClick={() => deleteUser(user.id)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div> */}
		</>
	);
};

export default Home;
