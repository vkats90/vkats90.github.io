import React, { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import Shackleton from '../assets/Shackleton.jpg'
import Shinobi from '../assets/Shinobi.jpg'
import API from '../assets/API.webp'
import InventoryManager from '../assets/InventoryManager.png'
import FamilySecrets from '../assets/FamilySecrets .png'
import { InView } from 'react-intersection-observer'
import MainButton from '../components/mainBotton'
import E2022 from '../assets/2022.png'
import E2023 from '../assets/2023.png'
import E2024 from '../assets/2024.png'

const projects = [
  {
    title: 'Shackelton - Portal for Tabletop Game',
    period: 'Jan 2024 - Present',
    company: 'Mobile Escape',
    description: (
      <div>
        <p>
          Developed an interactive online portal for a 6-episode tabletop game series using
          TypeScript and React.js. Each episode will have its own portal with different mechanics.
          The project leverages the latest features of React 18, including:
        </p>
        <br />
        <ul className="list-disc ml-5">
          <li>
            Code Splitting: Utilized Suspense and lazy loading to improve performance and optimize
            resource usage.
          </li>
          <li>
            Hooks: Implemented fundamental hooks like useState, useEffect, useRef and custom hooks
            to manage component state and side effects efficiently.
          </li>
          <li>
            Context API: Used React Context for state management to enable seamless data sharing
            across components.
          </li>
          <li>
            Tailwind CSS: Enhanced the UI with Tailwind CSS, creating a modern and responsive design
            on desktop and mobile.
          </li>
          <li>The application is deployed on SiteGround.</li>
        </ul>
        <br />
        <p>
          This project showcases my proficiency in modern frontend development and my ability to
          build dynamic, responsive web applications.
        </p>
      </div>
    ),

    projectLink: 'https://playtheescapemail.com/shackleton/ep1/',
    githubLink: '',
    technologies: ['TypeScript', 'React', 'TailwindCSS'],
    imageUrl: Shackleton,
  },
  {
    title: 'Shinobi - Portal for Tabletop Game',
    period: 'Jan 2024 - Present',
    company: 'Mobile Escape',
    description: (
      <div>
        <p>
          I took over, maintained, and improved an interactive online portal for a tabletop game
          using TypeScript and React.js. The project leverages the latest features of React 18,
          including:
        </p>
        <br />
        <ul className="list-disc ml-5">
          <li>
            React Router: Implemented for seamless navigation between different views and
            components.
          </li>
          <li>
            Code Splitting: Utilized Suspense and lazy loading to enhance performance and optimize
            resource usage.
          </li>
          <li>
            Hooks: Employed fundamental hooks like useState, useEffect, and custom hooks to manage
            component state and side effects efficiently.
          </li>
          <li>
            Context API: Used React Context for state management to enable seamless data sharing
            across components.
          </li>
          <li>
            Tailwind CSS: Enhanced the UI with Tailwind CSS, creating a modern and responsive design
            on both desktop and mobile platforms.
          </li>
          <li>The application is deployed on SiteGround.</li>
        </ul>
        <p>
          This project showcases my proficiency in modern frontend development and my ability to
          build, maintain, and improve dynamic, responsive web applications.
        </p>
      </div>
    ),
    projectLink: 'https://playtheescapemail.com/shackleton/ep1/',
    githubLink: '',
    technologies: ['TypeScript', 'React', 'TailwindCSS'],
    imageUrl: Shinobi,
  },
  {
    title: 'Inventory Management API',
    period: 'Jan 2024 - Present',
    company: '',
    description: (
      <div>
        <p>
          This project is a full-stack inventory management application that allows users to manage
          their inventory of products. The application is built using TypeScript, GraphQL, and
          MongoDB. The project leverages the following features:
        </p>
        <br />
        <ul className="list-disc ml-5">
          <li>Authentication and session management using JWT and cookies.</li>
          <li>React router 6.4 for seamless navigation between different views and components.</li>
          <li>
            GraphQL with Apollo Server and Client using the new pre-loading feature to fetch data.
          </li>
          <li>MongoDB: Used MongoDB to store and manage inventory data efficiently.</li>
        </ul>
        <br />
        <p>
          Currently working on adding more features to the application, such as user roles and
          permissions, inventory fetching from external APIs like shopify, and more.
        </p>
      </div>
    ),
    projectLink: 'https://inventory-manager-ajbf.onrender.com',
    githubLink: 'https://github.com/vkats90/Inventory-Manager',
    technologies: ['TypeScript', 'GraphQL', 'MongoDB'],
    imageUrl: InventoryManager,
  },
  {
    title: 'Family Secrets Series - Portal for Tabletop Game',
    period: 'Jan 2024 - Present',
    company: 'Mobile Escape',
    description: (
      <div>
        <p>
          Took over, maintained, and expanded an interactive online portal for a 12-episode tabletop
          game series using older React 16 technologies. The application is currently being used by
          hundreds of users and I am constantly maintaining and improving it based on their
          feedback. The project leverages the following features:
        </p>
        <br />
        <ul className="list-disc ml-5">
          <li>
            Hooks: Implemented fundamental hooks like useState, useEffect, useRef, and custom hooks
            to manage component state and side effects efficiently.
          </li>
          <li>
            Context API: Used React Context for state management to enable seamless data sharing
            across components.
          </li>
          <li>
            Plain CSS: Enhanced the UI using plain CSS, creating a modern and responsive design on
            both desktop and mobile platforms.
          </li>
          <li>The application is deployed on SiteGround.</li>
        </ul>
        <br />
        <p>
          This project showcases my proficiency in modern frontend development and my ability to
          build, maintain, and improve dynamic, responsive web applications using older
          technologies.
        </p>
      </div>
    ),
    projectLink: 'https://playtheescapemail.com/season1/',
    githubLink: '',
    technologies: ['JavaScript', 'React', 'CSS'],
    imageUrl: FamilySecrets,
  },
]

const Projects: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="z-0 items-center h-full py-8 text-center">
      <h1 id="outer">
        <h1
          id="inner"
          className="effect-shine md:text-6xl text-5xl md:my-32 my-16 text-black font-Bebas "
        >
          PROJECTS
        </h1>
      </h1>
      <InView rootMargin="-100px 0px">
        {({ inView: inView1, ref: ref1 }) => (
          <div
            id="summary"
            ref={ref1}
            className={`text-center mb-16 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView1 ? 'opacity-1' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            <h1 className="text-3xl md:text-5xl my-16 font-Bebas">In the oven</h1>
            <p className="relative p-5 text-lg text-left z-10 text-gray-7000">
              I'm actively developing these projects as part of my position and personal interests.
              They are fully functional and are either being expanded or maintained.
            </p>
          </div>
        )}
      </InView>
      <div className="flex flex-wrap justify-center gap-5">
        <ProjectCard key={1} {...projects[0]} />
        <ProjectCard key={2} {...projects[2]} />
      </div>
      <InView rootMargin="-100px 0px">
        {({ inView: inView2, ref: ref2 }) => (
          <div
            id="backburner"
            ref={ref2}
            className={`text-center my-16 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView2 ? 'opacity-1' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            <h1 className="text-3xl md:text-5xl my-16 font-Bebas">On the Backburner</h1>
            <p className="relative p-5 text-lg text-left z-10 text-gray-7000">
              These projects which I've completed but still have ideas for future development.
            </p>
          </div>
        )}
      </InView>
      <div className="flex flex-wrap justify-center gap-5">
        <ProjectCard key={1} {...projects[1]} />
        <ProjectCard key={3} {...projects[3]} />
      </div>
      <InView rootMargin="-100px 0px">
        {({ inView: inView3, ref: ref3 }) => (
          <div
            id="more"
            ref={ref3}
            className={`text-center my-16 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView3 ? 'opacity-1' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            <h1 className="text-3xl md:text-5xl my-16 font-Bebas">I've been busy</h1>
            <p className="relative p-5 text-lg text-left z-10 text-gray-7000">
              Besides the project up top over the last 2 years I've built numerous cookie cutter
              style projects to learn new technologies and improve my skills. Take a look at my
              Github commit history:
            </p>
          </div>
        )}
      </InView>
      <InView rootMargin="-100px 0px">
        {({ inView: inView4, ref: ref4 }) => (
          <div
            id="more"
            ref={ref4}
            className={`text-center my-2 w-fit bg-white/25 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView4 ? 'opacity-1' : 'opacity-0 translate-x-10 blur-md'
            }`}
          >
            <img src={E2022} alt="2022" />
          </div>
        )}
      </InView>
      <InView rootMargin="-100px 0px">
        {({ inView: inView5, ref: ref5 }) => (
          <div
            id="more"
            ref={ref5}
            className={`text-center my-2 w-fit bg-white/25 mx-auto max-w-[90%] md:max-w-[50%]   overflow-hidden transition duration-500 ease-in ${
              inView5 ? 'opacity-1' : 'opacity-0 -translate-x-10 blur-md'
            }`}
          >
            <img src={E2023} alt="2023" />
          </div>
        )}
      </InView>
      <InView rootMargin="-100px 0px">
        {({ inView: inView6, ref: ref6 }) => (
          <div
            id="more"
            ref={ref6}
            className={`text-center my-2 w-fit bg-white/25 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView6 ? 'opacity-1' : 'opacity-0 translate-x-10 blur-md'
            }`}
          >
            <img src={E2024} alt="2024" />
          </div>
        )}
      </InView>
      <MainButton
        className="mt-8 scale-75 md:scale-90"
        onClick={() => window.open('https://github.com/vkats90')}
        text="VISIT GITHUB"
      />
    </div>
  )
}

export default Projects
