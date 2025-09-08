// import React from 'react';
// import Logo from './assets/logos.png';
// import Iconic from './assets/972.jpg';
// import Obe1 from './assets/obe1.png';
// import Sclr1 from './assets/sclr1.png';
// import Exam1 from './assets/exam1.png';
// import Saq1 from './assets/SAQ1.png';
// import Rasak from './assets/rasak.png';
// import Haneef from './assets/haneef.jpeg';
// import Hamdhan from './assets/hamdhan1.jpg';

// function App() {
//   return (
//     <div className="min-h-screen bg-white" id='home'>
//       <div className="sticky top-0 h-30 flex items-center justify-between px-10 py-4 bg-white shadow">
//         <div className="flex items-center gap-5 w-[60%]">
//           <img src={Logo} className="h-24 object-contain" />
//           <div className="text-center">
//             <span className="text-xl font-bold text-green-700">
//               JAMAL MOHAMED COLLEGE
//             </span>
//             <span className="text-sm font-normal block">
//               (Autonomous) Tiruchirappalli-620020
//             </span>
//             <span className="text-xs font-medium text-green-700 mt-1 block">
//               Accredited With A++ grade (4th cycle) with CGPA 3.69 out of 4.0 | Affiliated to Bharathidasan University
//             </span>
//           </div>
//         </div>
//         <div className="w-[40%] flex justify-end gap-6">
//           <a href="#home" className="font-bold text-lg text-green-700 hover:underline">Home</a>
//           <a href="#developers" className="font-bold text-lg text-green-700 hover:underline">Developers</a>
//         </div>
//       </div>
//       <div className="sticky top-[120px] bg-green-100 py-2">
//         <marquee className="font-bold text-2xl text-green-800">Welcome to the College Automation Portal</marquee>
//       </div>
//       <div className="flex  justify-around items-center">
//         <div className="w-[40%] bg-white p-6 rounded-2xl">
//           <p className="text-gray-700 text-lg  text-justify">
//             This portal brings together a few systems developed to automate selected academic
//             and administrative processes <span className='font-bold'>tracking OBE attainment,
//               conducting online examinations and managing alumni-sponsored scholarships
//               all aimed at reducing manual effort and supporting institutional efficiency. </span>
//             Select a system below to get started.
//           </p>
//           <div className='font-semibold text-lg mt-5 px-5'>
//             <p>1.	OBE Attainment System</p>
//             <p>2.	Scholarship Automation</p>
//             <p>3.	Online Examination Interface</p>
//           </div>
//           <div className='mt-5 text-lg'>
//             <p>The above will be placed in three cards with Icons and <b>Click Action </b> will lead to the corresponding software with Hover Effects</p>
//             <p>I will place a short description below each heading.</p>
//           </div>
//         </div>
//         <div className="w-[40%] bg-white p-6 rounded-2xl flex items-center justify-center">
//           <img
//             src={Iconic}
//             alt="Software Development"
//             className="rounded-xl w-full h-auto object-cover max-h-[400px]"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-20 mt-10 px-24">
//         <div className="bg-white p-6 h-[500px] rounded-2xl shadow-[0_0_20px] shadow-green-400">
//           <h2 className="text-2xl font-bold text-green-800 mb-3">Outcome Based Education [ OBE ]</h2>
//           <div>
//             <img
//               src={Obe1}
//               className="rounded-xl w-full h-auto object-cover max-h-[400px]"
//             />
//             <p className="mt-3 text-gray-700 font-semibold text-justify leading-relaxed">
//               This document serves as a guide to understanding and calculating Outcome-Based Education (OBE)
//               attainment, focusing on Course Outcomes (COs), Program Outcomes (POs), and Program-Specific Outcomes (PSOs).
//             </p>
//           </div>
//           <div className='flex justify-end mt-5'>
//             <a href='https://www.jmc.edu'
//               target='_blank'
//               className='bg-green-500 text-center rounded-lg font-bold text-white text-lg 
//             p-5 w-28 hover:bg-green-600 cursor-pointer'>Click</a>
//           </div>
//         </div>
//         <div className="bg-white p-6 h-[500px] rounded-2xl shadow-[0_0_20px] shadow-blue-500">
//           <h2 className="text-2xl font-bold text-green-800 mb-3">Scholorship Portal [ JMC ]</h2>
//           <div>
//             <img
//               src={Sclr1}
//               className="rounded-xl w-full h-auto object-cover max-h-[400px]"
//             />
//             <p className="mt-3 text-gray-700 font-semibold text-justify leading-relaxed">
//               A digital platform developed to manage scholarships sponsored by alumni and well-wishers. It streamlines the entire process
//               from application and verification to approval and disbursement reducing manual effort and ensuring transparency.
//             </p>
//           </div>
//           <div className='flex justify-end mt-5'>
//             <a href=''
//               target='_blank'
//               className='bg-green-500 text-center rounded-lg font-bold text-white text-lg 
//             p-5 w-28 hover:bg-green-600 cursor-pointer'>Click</a>
//           </div>
//         </div>
//         <div className="bg-white p-6 h-[500px] rounded-2xl shadow-[0_0_20px] shadow-orange-300">
//           <h2 className="text-2xl font-bold text-green-800 mb-3">Online Exam Ease [ JMC ]</h2>
//           <div>
//             <img
//               src={Exam1}
//               className="rounded-xl w-full h-auto object-cover max-h-[400px]"
//             />
//             <p className="mt-3 text-gray-700 font-semibold text-justify leading-relaxed">
//               This system is used to conduct MCQ-based online exams through platforms like Google Forms,
//               Quizizz, or other websites. It manages student access, schedules exams, shares exam links,
//               and records attendance. Students can take the exams only through this software.
//             </p>
//           </div>
//           <div className='flex justify-end -mt-2'>
//             <a href=''
//               target='_blank'
//               className='bg-green-500 text-center rounded-lg font-bold text-white text-lg 
//             p-5 w-28 hover:bg-green-600 cursor-pointer'>Click</a>
//           </div>
//         </div>
//       </div>

//       <section id="developers" className="px-6 py-44 lg:px-24 flex flex-col gap-5 items-center w-full">
//         <h2 className='text-center text-3xl font-bold text-blue-600'>Conceptualized and guided by</h2>

//         <div className="rounded-xl flex flex-col lg:flex-col p-6 gap-2  bg-green-50 border-l-4 border-green-600 hover:bg-green-100">
//           {/* <img src={Saq1} className="rounded-xl h-[300px] w-[450px] object-fit shadow-sm" /> */}
//           <div className="text-left">
//             <span className="text-xl font-bold text-green-800">Dr. O.S. Abdul Qadir , A COE</span>
//             <span className="text-md font-medium text-green-700">  Project Coordinator , </span>
//             <span className="block text-md font-medium text-green-700">Department of Computer Science, Jamal Mohamed College. </span>
//           </div>
//         </div>

//         <h1 className="text-3xl font-bold text-blue-600 mt-2">Developed and Maintained by the following student team members</h1>
//         <div className="space-y-6 max-w-2xl w-full mx-auto">
//           <p className="block text-lg font-semibold text-green-800 bg-green-200 border-l-4 border-green-600 shadow-md rounded-lg p-4 transition-all hover:bg-green-100">
//             A team effort by students of the Department of Computer Science. Started by senior batches and continued by their juniors, with future batches to follow.
//           </p>

//           <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
//             <span className="block text-xl font-bold">Joshwa Anand T</span>
//             <span className="block text-md font-medium text-green-700">MCA - ( Batch 2023 - 2025 )</span>
//           </p>

//           <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
//             <span className="block text-xl font-bold">Mohamed Jainul Haneef M I</span>
//             <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
//           </p>

//           <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
//             <span className="block text-xl font-bold">Mohamed Hamdhan J</span>
//             <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
//           </p>

//           <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
//             <span className="block text-xl font-bold">Mohamed Hanifa M</span>
//             <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
//           </p>

//           <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
//             <span className="block text-xl font-bold">Abdul Rasak H</span>
//             <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
//           </p>
//         </div>

//       </section>
//     </div>

//   );
// }
// export default App;




// ---------------   Adding a Photos div   --------------  //

{/* <div className='w-[100%] flex gap-28 mt-5'>
          <div className="w-[500px] h-[400px] rounded-xl flex flex-col lg:flex-row justify-center items-center p-6 gap-0">
            <div className='flex flex-col'>
              <img className="rounded-xl  h-[320px] w-72 object-fit  shadow-sm" />
              <div className="text-center lg:text-left mt-2">
                <span className="block text-xl font-bold text-green-800">Joshwa Anand T</span>
                <span className="block text-md font-medium text-green-800">MCA - ( Batch 2023 - 2025 )</span>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[400px] rounded-xl  flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
            <div className='flex flex-col'>
              <img src={Haneef} className="rounded-xl h-[320px] w-72 object-fit shadow-sm" />
              <div className="text-center lg:text-left mt-2">
                <span className="block text-xl font-bold text-green-800">Mohamed Jainul Haneef M I</span>
                <span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[400px] rounded-xl flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
            <div className='flex flex-col'>
              <img src={Hamdhan} className="rounded-xl  h-[320px] w-72  object-fit shadow-sm" />
              <div className="text-center lg:text-left mt-2">
                <span className="block text-xl font-bold text-green-800">Mohamed Hamdhan J</span>
                <span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] mt-10 flex gap-10 justify-center'>
          <div className="w-[400px] h-[400px] rounded-xl flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
            <div className='flex flex-col'>
              <img className="rounded-xl h-[320px] w-72 object-fit shadow-sm" />
              <div className="text-center lg:text-left mt-2">
                <span className="block text-xl font-bold text-green-800">Mohamed Hanifa M</span>
                <span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[400px] rounded-xl  flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
            <div className='flex flex-col'>
              <img className="rounded-xl  h-[320px] w-72 object-fit shadow-sm" />
              <div className="text-center lg:text-left mt-2">
                <span className="block text-xl font-bold text-green-800">Abdul Rasak H</span>
                <span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
              </div>
            </div>
          </div>
        </div> */}




import React from 'react';
import { motion } from "framer-motion";
import Logo from './assets/logos.png';
import Jmc from './assets/75 Jmc.png';
import Iconic from './assets/972.jpg';
import Obe1 from './assets/obe1.png';
import Sclr1 from './assets/sclr1.png';
import Exam1 from './assets/exam1.png';

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
								OBE tracking, online examinations, and alumni-sponsored scholarships
							</span>{" "}
							— all aimed at reducing manual effort and supporting institutional efficiency.
						</p>
						<ul className="mt-6 space-y-2 text-lg font-medium text-gray-800">
							<li>✔ OBE Attainment System</li>
							<li>✔ Scholarship Automation</li>
							<li>✔ Online Examination Interface</li>
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
						className="rounded-xl mb-4 h-58"
					/>
					<h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
						Outcome Based Education
					</h3>
					<p className="text-gray-600 flex-grow text-lg">
						A guide to understanding and calculating OBE attainment — covering
						Course Outcomes (COs), Program Outcomes (POs), and Program-Specific
						Outcomes (PSOs).
					</p>
					<a
						href="https://www.jmc.edu"
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
						className="rounded-xl mb-4 h-58"
					/>
					<h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
						Scholarship Portal
					</h3>
					<p className="text-gray-600 flex-grow text-lg">
						A digital platform to manage alumni-sponsored scholarships — from
						application and verification to approval and disbursement, ensuring
						transparency and efficiency.
					</p>
					<a
						href="#"
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
						className="rounded-xl mb-4 h-58"
					/>
					<h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
						Online Exam Ease
					</h3>
					<p className="text-gray-600 flex-grow text-lg">
						Conduct MCQ-based online exams, manage schedules, control student
						access, and track attendance securely through this integrated system.
					</p>
					<a
						href="#"
						className="mt-6 inline-block bg-orange-400 text-white px-6 py-3 text-lg rounded-lg font-semibold text-center hover:bg-orange-500 transition"
					>
						Click to View
					</a>
				</div>
			</section>
			{/* Developers Section */}
			<section
				id="developers"
				className="py-20"
			>
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-green-800 mb-6">
						Conceptualized and Guided by
					</h2>
					<p className="text-xl font-semibold text-gray-700 mb-6">
						<p className='text-xl mb-5'>Dr. O.S. Abdul Qadir, Assistant COE</p>
						<p className="text-md font-medium">
							Project Coordinator, Department of Computer Science
						</p>
					</p>

					<h3 className="text-2xl font-bold text-green-800 mb-8">
						Development Team
					</h3>
					<div className="grid sm:grid-cols-2 gap-10">
						{[
							{ name: "Joshwa Anand T", batch: "MCA (2023 - 2025)" },
							{ name: "Mohamed Jainul Haneef M I", batch: "MCA (2024 - 2026)" },
							{ name: "Mohamed Hamdhan J", batch: "MCA (2024 - 2026)" },
							{ name: "Mohamed Hanifa M", batch: "MCA (2024 - 2026)" },
							{ name: "Abdul Rasak H", batch: "MCA (2024 - 2026)" },
						].map((dev, i) => (
							<div
								key={i}
								className="bg-white rounded-xl border-l-4 border-green-800 shadow-md p-5 hover:shadow-lg transition"
							>
								<h4 className="text-xl font-bold mb-3 text-green-700">
									{dev.name}
								</h4>
								<p className="text-md font-semibold text-gray-600">{dev.batch}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer className="bg-green-800 text-white py-6 text-center">
				<p className="text-lg">
					© {new Date().getFullYear()} Jamal Mohamed College | All Rights
					Reserved
				</p>
			</footer>
			{/* Photos */}
			{/* <div className='w-[100%] flex gap-28 mt-5'>
				<div className="w-[500px] h-[400px] rounded-xl flex flex-col lg:flex-row justify-center items-center p-6 gap-0">
					<div className='flex flex-col'>
						<img className="rounded-xl  h-[320px] w-72 object-fit  shadow-sm" />
						<div className="text-center lg:text-left mt-2">
							<span className="block text-xl font-bold text-green-800">Joshwa Anand T</span>
							<span className="block text-md font-medium text-green-800">MCA - ( Batch 2023 - 2025 )</span>
						</div>
					</div>
				</div>
				<div className="w-[500px] h-[400px] rounded-xl  flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
					<div className='flex flex-col'>
						<img src={Haneef} className="rounded-xl h-[320px] w-72 object-fit shadow-sm" />
						<div className="text-center lg:text-left mt-2">
							<span className="block text-xl font-bold text-green-800">Mohamed Jainul Haneef M I</span>
							<span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
						</div>
					</div>
				</div>
				<div className="w-[500px] h-[400px] rounded-xl flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
					<div className='flex flex-col'>
						<img src={Hamdhan} className="rounded-xl  h-[320px] w-72  object-fit shadow-sm" />
						<div className="text-center lg:text-left mt-2">
							<span className="block text-xl font-bold text-green-800">Mohamed Hamdhan J</span>
							<span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[100%] mt-10 flex gap-10 justify-center'>
				<div className="w-[400px] h-[400px] rounded-xl flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
					<div className='flex flex-col'>
						<img className="rounded-xl h-[320px] w-72 object-fit shadow-sm" />
						<div className="text-center lg:text-left mt-2">
							<span className="block text-xl font-bold text-green-800">Mohamed Hanifa M</span>
							<span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
						</div>
					</div>
				</div>
				<div className="w-[500px] h-[400px] rounded-xl  flex flex-col lg:flex-row justify-center items-center p-6 gap-6">
					<div className='flex flex-col'>
						<img className="rounded-xl  h-[320px] w-72 object-fit shadow-sm" />
						<div className="text-center lg:text-left mt-2">
							<span className="block text-xl font-bold text-green-800">Abdul Rasak H</span>
							<span className="block text-md font-medium text-green-800">MCA - ( Batch 2024 - 2026 )</span>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default App;