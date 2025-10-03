import React from 'react';
import Logo from './assets/logos.png';
import Jmc from './assets/75 Jmc.png';
import Iconic from './assets/972.jpg';
import Obe1 from './assets/obe1.png';
import Sclr1 from './assets/sclr1.png';
import Exam1 from './assets/exam1.png';
import IMS from './assets/IMS.png';

function App() {

	return (
		<div className="min-h-screen bg-gray-50 font-sans bg-gradient-to-r from-green-100 via-white to-green-100">
			{/* Navbar */}
			<header className="sticky top-0 z-50 bg-white shadow-md">
				<div className="mx-auto flex items-center justify-between px-10 py-4">
					<div className="flex items-center gap-4">
						<img src={Logo} className="h-24 w-28 object-contain" alt="Logo" />
						<div>
							<h1 className="text-2xl text-center font-bold text-green-700">
								JAMAL MOHAMED COLLEGE (Autonomous)
							</h1>
							<p className="text-md text-gray-600 text-center">

							</p>
							<p className="text-sm font-medium text-green-700 text-center">
								Accredited with A++ Grade by NAAC (4th Cycle) with CGPA 3.69 out of 4.0<br></br>
								Affiliated to Bharathidasan University
								TIRUCHIRAPPALLI - 620 020.

							</p>
						</div>
						<img src={Jmc} className="h-24 w-28 object-contain" alt="Logo" />
					</div>
					<nav className="flex gap-6">
						<a
							href="#home"
							className="text-green-700 text-xl font-semibold hover:text-green-800 transition"
						>
							Home
						</a>
						<a
							href="#projects"
							className="text-green-700 text-xl font-semibold hover:text-green-800 transition"
						>
							Projects
						</a>
						<a
							href="#developers"
							className="text-green-700 text-xl font-semibold hover:text-green-800 transition"
						>
							Developers
						</a>
					</nav>
				</div>
			</header>
			{/* Hero Section */}
			<section
				id="home"
				className="relative	 py-20"
			>
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
					<div className="md:w-1/2">
						<h2 className="text-4xl font-bold text-green-800 mb-4">
							College Automation Portal
						</h2>
						<p className="text-gray-700 text-lg leading-relaxed">
							This portal brings together a few systems developed to automate academic
							and administrative processes like{" "}
							<span className="font-semibold text-green-700">
								OBE tracking, online examinations, alumni-sponsored scholarships and invigilation managaement system
							</span>{" "}
							— all aimed at reducing manual effort and supporting institutional efficiency.
						</p>
						<ul className="mt-6 space-y-2 text-lg font-medium text-gray-800">
							<li>✔ OBE Attainment System</li>
							<li>✔ Scholarship Automation</li>
							<li>✔ Online Examination Interface</li>
							<li>✔ Invigilation Management System</li>
						</ul>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<img
							src={Iconic}
							alt="Portal Illustration"
							className="rounded-2xl shadow-xl max-h-[400px] object-cover"
						/>
					</div>
				</div>
			</section>
			{/* Features Section */}
			<section
				id="projects"
				className="mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
				{/* OBE Card */}
				<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-green-300 transition p-6 flex flex-col">
					<img
						src={Obe1}
						alt="OBE"
						className="rounded-xl mb-6 h-58"
					/>
					<h3 className="text-2xl font-bold mb-4 text-center">
						Outcome Based Education
					</h3>
					<p className="text-gray-600 flex-grow text-lg text-justify">
					This document serves as a guide to understanding and calculating Outcome-Based Education (OBE) attainment, focusing on Student Outcomes (SOs), Course Outcomes (COs), Program Outcomes (POs), and Program-Specific Outcomes (PSOs).
					</p>
					<a
						href="http://192.168.10.9:3001"
						target="_blank"
						rel="noreferrer"
						className="mt-6 inline-block bg-green-600 text-white px-6 py-3 text-lg rounded-lg font-semibold text-center hover:bg-green-700 transition"
					>
						Click to View
					</a>
				</div>

				{/* Scholarship Card */}
				<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-300 transition p-6 flex flex-col">
					<img
						src={Sclr1}
						alt="Scholarship"
						className="rounded-xl mb-6 h-58"
					/>
					<h3 className="text-2xl font-bold mb-4 text-center">
						Scholarship Portal
					</h3>
					<p className="text-gray-600 flex-grow text-lg text-justify">
					A digital platform developed to manage scholarships sponsored by alumni and well-wishers. It streamlines the entire process from application and verification to approval and disbursement reducing manual effort and ensuring transparency.
					</p>
					<a
						href="http://192.168.10.9:3000"
						target="_blank"
						rel="noreferrer"
						className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 text-lg rounded-lg font-semibold text-center hover:bg-blue-600 transition"
					>
						Click to View
					</a>
				</div>

				{/* Online Exam Card */}
				<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-300 transition p-6 flex flex-col">
					<img
						src={Exam1}
						alt="Online Exam"
						className="rounded-xl mb-6 h-58"
					/>
					<h3 className="text-2xl font-bold mb-4 text-center">
						Online Exam Ease
					</h3>
					<p className="text-gray-600 flex-grow text-lg text-justify">
					This system is used to conduct MCQ-based online exams through platforms like Google Forms, It manages student access, schedules exams, shares exam links, and records attendance. Students can take the exams only through this software.
					</p>
					<a
						href="http://192.168.10.9:3002"
						target="_blank"
						rel="noreferrer"
						className="mt-6 inline-block bg-orange-400 text-white px-6 py-3 text-lg rounded-lg font-semibold text-center hover:bg-orange-500 transition"
					>
						Click to View
					</a>
				</div>

				{/* Invigilation Card */}
				<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-violet-500 transition p-6 flex flex-col">
					<img
						src={IMS}
						alt="Online Exam"
						className="rounded-xl mb-6 h-58"
					/>
					<h3 className="text-2xl font-bold mb-4 text-center">
						Invigilation Management System
					</h3>
					<p className="text-gray-600 flex-grow text-lg text-justify">
						Invigilation Management System automates the allocation of staff to exam halls while preventing them from being assigned to their own parent department. It ensures fair coverage of all sessions based on the seniority of the staff. It avoids consecutive sessions wherever possible and ensures uniform session allocation, while also minimizing repetitive hall assignments to optimize fairness and efficiency.
					</p>
					<a
						href="http://192.168.10.9:8000"
						target="_blank"
						rel="noreferrer"
						className="mt-6 inline-block bg-violet-600 text-white px-6 py-3 text-lg rounded-lg font-semibold text-center hover:bg-violet-700 transition"
					>
						Click to View
					</a>
				</div>
			</section>
			{/* Developers Section */}
			<section id="developers" className="py-20">
				<div className="mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-green-800 mb-6">
						Conceptualized and Guided by
					</h2>
					<div className="max-w-4xl mx-auto rounded-xl flex flex-col p-6 gap-2 bg-white shadow-md mb-12 text-center">
						<p className="text-xl font-bold text-green-800">
							Dr. O.S. Abdul Qadir , Assistant COE
						</p>
						<p className="text-lg font-medium text-green-700">Project Coordinator</p>
						<p className="block text-lg font-medium text-green-700">
							Department of Computer Science, Jamal Mohamed College.
						</p>
					</div>
					<h3 className="text-2xl font-bold text-green-800 mb-10">
						Development Team
					</h3>
					{/* 3-column layout with batches */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						{/* Batch 1 */}
						<div className="bg-white rounded-xl border-l-4 border-green-800 shadow-md p-6">
							<h4 className="text-xl font-bold text-green-700 mb-4">
								MCA (2023 - 2025)
							</h4>
							<ul className="space-y-2">
								<li className="text-lg font-medium text-gray-700">Joshwa Anand T</li>
							</ul>
						</div>

						{/* Batch 2 */}
						<div className="bg-white rounded-xl border-l-4 border-green-800 shadow-md p-6">
							<h4 className="text-xl font-bold text-green-700 mb-4">
								MCA (2024 - 2026)
							</h4>
							<ul className="space-y-2">
								<li className="text-lg font-medium text-gray-700">Mohamed Jainul Haneef M I</li>
								<li className="text-lg font-medium text-gray-700">Mohamed Hamdhan J</li>
								<li className="text-lg font-medium text-gray-700">Mohamed Hanifa M</li>
								<li className="text-lg font-medium text-gray-700">Abdul Rasak H</li>
							</ul>
						</div>

						{/* Batch 3 */}
						{/* <div className="bg-white rounded-xl border-l-4 border-green-800 shadow-md p-6">
							<h4 className="text-xl font-bold text-green-700 mb-4">
								BCA (2025 - 2027)
							</h4>
							<ul className="space-y-2">
								<li className="text-lg font-medium text-gray-700">Kadar</li>
							</ul>
						</div> */}
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer footer className="bg-green-800 text-white py-6 text-center" >
				<p className="text-lg">
					© {new Date().getFullYear()} Jamal Mohamed College | All Rights Reserved
				</p>
			</footer >
		</div >
	)
}

export default App;