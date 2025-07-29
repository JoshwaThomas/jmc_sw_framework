import React from 'react';
import Logo from './assets/logos.png';
import Iconic from './assets/972.jpg';
import Obe1 from './assets/obe1.png';
import Sclr1 from './assets/sclr1.png';
import Exam1 from './assets/exam1.png';
// import Saq1 from './assets/SAQ1.png';
// import Rasak from './assets/rasak.png';
// import Haneef from './assets/haneef.jpeg';
// import Hamdhan from './assets/hamdhan1.jpg';

function App() {
  return (
    <div className="min-h-screen bg-white" id='home'>
      <div className="sticky top-0 h-30 flex items-center justify-between px-10 py-4 bg-white shadow">
        <div className="flex items-center gap-5 w-[60%]">
          <img src={Logo} className="h-24 object-contain" />
          <div className="text-center">
            <span className="text-xl font-bold text-green-700">
              JAMAL MOHAMED COLLEGE
            </span>
            <span className="text-sm font-normal block">
              (Autonomous) Tiruchirappalli-620020
            </span>
            <span className="text-xs font-medium text-green-700 mt-1 block">
              Accredited With A++ grade (4th cycle) with CGPA 3.69 out of 4.0 | Affiliated to Bharathidasan University
            </span>
          </div>
        </div>
        <div className="w-[40%] flex justify-end gap-6">
          <a href="#home" className="font-bold text-lg text-green-700 hover:underline">Home</a>
          <a href="#developers" className="font-bold text-lg text-green-700 hover:underline">Developers</a>
        </div>
      </div>
      <div className="sticky top-[120px] bg-green-100 py-2">
        <marquee className="font-bold text-2xl text-green-800">Welcome to the College Automation Portal</marquee>
      </div>
      <div className="flex  justify-around items-center">
        <div className="w-[40%] bg-white p-6 rounded-2xl">
          <p className="text-gray-700 text-lg  text-justify">
            This portal brings together a few systems developed to automate selected academic
            and administrative processes <span className='font-bold'>tracking OBE attainment,
              conducting online examinations and managing alumni-sponsored scholarships
              all aimed at reducing manual effort and supporting institutional efficiency. </span>
            Select a system below to get started.
          </p>
          <div className='font-semibold text-lg mt-5 px-5'>
            <p>1.	OBE Attainment System</p>
            <p>2.	Scholarship Automation</p>
            <p>3.	Online Examination Interface</p>
          </div>
          <div className='mt-5 text-lg'>
            <p>The above will be placed in three cards with Icons and <b>Click Action </b> will lead to the corresponding software with Hover Effects</p>
            <p>I will place a short description below each heading.</p>
          </div>
        </div>
        <div className="w-[40%] bg-white p-6 rounded-2xl flex items-center justify-center">
          <img
            src={Iconic}
            alt="Software Development"
            className="rounded-xl w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-10 px-24">
        <div className="bg-white p-6 h-[500px] rounded-2xl shadow-[0_0_20px] shadow-green-400">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Outcome Based Education [ OBE ]</h2>
          <div>
            <img
              src={Obe1}
              className="rounded-xl w-full h-auto object-cover max-h-[400px]"
            />
            <p className="mt-3 text-gray-700 font-semibold text-justify leading-relaxed">
              This document serves as a guide to understanding and calculating Outcome-Based Education (OBE)
              attainment, focusing on Course Outcomes (COs), Program Outcomes (POs), and Program-Specific Outcomes (PSOs).
            </p>
          </div>
          <div className='flex justify-end mt-5'>
            <a href='https://www.jmc.edu'
              target='_blank'
              className='bg-green-500 text-center rounded-lg font-bold text-white text-lg 
            p-5 w-28 hover:bg-green-600 cursor-pointer'>Click</a>
          </div>
        </div>
        <div className="bg-white p-6 h-[500px] rounded-2xl shadow-[0_0_20px] shadow-blue-500">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Scholorship Portal [ JMC ]</h2>
          <div>
            <img
              src={Sclr1}
              className="rounded-xl w-full h-auto object-cover max-h-[400px]"
            />
            <p className="mt-3 text-gray-700 font-semibold text-justify leading-relaxed">
              A digital platform developed to manage scholarships sponsored by alumni and well-wishers. It streamlines the entire process
              from application and verification to approval and disbursement reducing manual effort and ensuring transparency.
            </p>
          </div>
          <div className='flex justify-end mt-5'>
            <a href=''
              target='_blank'
              className='bg-green-500 text-center rounded-lg font-bold text-white text-lg 
            p-5 w-28 hover:bg-green-600 cursor-pointer'>Click</a>
          </div>
        </div>
        <div className="bg-white p-6 h-[500px] rounded-2xl shadow-[0_0_20px] shadow-orange-300">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Online Exam Ease [ JMC ]</h2>
          <div>
            <img
              src={Exam1}
              className="rounded-xl w-full h-auto object-cover max-h-[400px]"
            />
            <p className="mt-3 text-gray-700 font-semibold text-justify leading-relaxed">
              This system is used to conduct MCQ-based online exams through platforms like Google Forms,
              Quizizz, or other websites. It manages student access, schedules exams, shares exam links,
              and records attendance. Students can take the exams only through this software.
            </p>
          </div>
          <div className='flex justify-end -mt-2'>
            <a href=''
              target='_blank'
              className='bg-green-500 text-center rounded-lg font-bold text-white text-lg 
            p-5 w-28 hover:bg-green-600 cursor-pointer'>Click</a>
          </div>
        </div>
      </div>

      <section id="developers" className="px-6 py-44 lg:px-24 flex flex-col gap-5 items-center w-full">
        <h2 className='text-center text-3xl font-bold text-blue-600'>Conceptualized and guided by</h2>

        <div className="rounded-xl flex flex-col lg:flex-col p-6 gap-2  bg-green-50 border-l-4 border-green-600 hover:bg-green-100">
          {/* <img src={Saq1} className="rounded-xl h-[300px] w-[450px] object-fit shadow-sm" /> */}
          <div className="text-left">
            <span className="text-xl font-bold text-green-800">Dr. O.S. Abdul Qadir , A COE</span>
            <span className="text-md font-medium text-green-700">  Project Coordinator , </span>
            <span className="block text-md font-medium text-green-700">Department of Computer Science, Jamal Mohamed College. </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mt-2">Developed and Maintained by the following student team members</h1>
        <div className="space-y-6 max-w-2xl w-full mx-auto">
          <p className="block text-lg font-semibold text-green-800 bg-green-200 border-l-4 border-green-600 shadow-md rounded-lg p-4 transition-all hover:bg-green-100">
            A team effort by students of the Department of Computer Science. Started by senior batches and continued by their juniors, with future batches to follow.
          </p>

          <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
            <span className="block text-xl font-bold">Joshwa Anand T</span>
            <span className="block text-md font-medium text-green-700">MCA - ( Batch 2023 - 2025 )</span>
          </p>

          <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
            <span className="block text-xl font-bold">Mohamed Jainul Haneef M I</span>
            <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
          </p>

          <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
            <span className="block text-xl font-bold">Mohamed Hamdhan J</span>
            <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
          </p>

          <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
            <span className="block text-xl font-bold">Mohamed Hanifa M</span>
            <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
          </p>

          <p className="bg-green-50 border-l-4 border-green-600 shadow shadow-green-200 rounded-lg p-4 text-green-800 hover:bg-green-100 transition-all">
            <span className="block text-xl font-bold">Abdul Rasak H</span>
            <span className="block text-md font-medium text-green-700">MCA - ( Batch 2024 - 2026 )</span>
          </p>
        </div>

      </section>
    </div>

  );
}
export default App;




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




