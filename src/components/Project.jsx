/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState, useEffect, Link } from "react";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LiaEnvelopeSolid } from "react-icons/lia";

import aora from "../assets/images/projects/aora.jpg";
import jobit from "../assets/images/projects/jobit.jpg";
import savory from "../assets/images/projects/savory.jpg";
import movies from "../assets/images/projects/IMoviesShowcase.png";
import ello from "../assets/images/projects/ello.PNG";
import rick from "../assets/images/projects/rick.PNG";

function Project() {
  const [projects] = useState([
    {
      id: 1,
      title: "Aora",
      image: aora,
      details:
        "Aora is a video-sharing app built with React Native and Appwrite, allowing users to create, bookmark, and view videos, including the latest videos. The app is developed using Expo and can be run in development mode with the Expo client app",
      techStack: "React Native, React, Appwrite, Tailwind",
      live: "https://github.com/marvin-nyalik/AoraE",
      source: "https://github.com/marvin-nyalik/AoraE",
    },

    {
      id: 6,
      title: "Jobit",
      image: jobit,
      details:
        "Jobit is a React Native app built with Expo for job search. It initially loads Web Developer and React jobs and allows users to search for jobs by keyword (e.g., 'Project management jobs') or job type (e.g., Full-time, Part-time, contractor).",
      techStack: "React Native, React, JavaScript, Native Wind",
      live: "https://github.com/marvin-nyalik/jobit",
      source: "https://github.com/marvin-nyalik/jobit",
    },

    {
      id: 3,
      title: "Savory Symphony",
      image: savory,
      details:
        "Savory Symphony is a mobile recipe app built with React Native and Expo, utilizing the themealdb API to fetch and display various meal categories and recipes. The app allows users to explore different cuisines, view detailed meal instructions, and even watch video tutorials for meal preparation.",
      techStack: "React, React Native, Native Wind, API",
      live: "https://github.com/marvin-nyalik/Savory-Symphony",
      source: "https://github.com/marvin-nyalik/Savory-Symphony",
    },
    {
      id: 4,
      title: "Imovies",
      image: movies,
      details:
        "IMovies is a Single-page Web Application built with JavaScript ES6. It uses the free TVMAZE-API to showcase information about movies and Television shows.",
      techStack: "JavaScript, Jest, HTML, CSS",
      live: "https://marvin-nyalik.github.io/IMovies/dist/",
      source: "https://github.com/marvin-nyalik/IMovies",
    },
    {
      id: 5,
      title: "Ello Teacher",
      image: ello,
      details:
        "A teacher's web viewer product for assigning reading books to students",
      techStack: "React, TypeScript, Tailwind, API",
      live: "https://github.com/marvin-nyalik/ello-book-assignment",
      source: "https://github.com/marvin-nyalik/ello-book-assignment",
    },
    {
      id: 7,
      title: "Rick & Morty Explorer",
      image: rick,
      details:
        "The Rick & Morty Explorer uses the Rick and Morty API to display a list of locations alongside their name, type and characters. Character details can be checked and persistent comments about a specific character recorded.",
      techStack: "Next JS, React, Tailwind",
      live: "https://rick-and-morty-nu-teal.vercel.app/",
      source: "https://github.com/marvin-nyalik/rick-and-morty",
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProjectIndex]);

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = sortedProjects[selectedProjectIndex];

  return (
    <div id="Project">
      <div className="max-w-custom mx-auto px-5 my-28">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-16 text-center text-newDarkGray dark:text-white"
          >
            <h2 className="font-semibold text-4xl mb-3">Portfolio</h2>
            <p>Most recent work</p>
          </motion.article>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "321px",
                      height: "214px",
                      objectFit: "cover",
                      objectPosition: "top left",
                    }}
                  />
                  <a onClick={() => openModal(index)}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </a>
                </div>
                <h5
                  className="mb-4 text-lg font-bold cursor-pointer hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  onClick={() => openModal(index)}
                >
                  {item.title}
                </h5>
                {techStackToArray(item.techStack).map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold"
                  >
                    {tech}
                  </span>
                ))}

                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={item.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={item.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal Popup */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-5xl bg-white dark:bg-neutral rounded-lg m-5"
          >
            <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <figure>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg shadow-lg w-full h-full"
                />
              </figure>
              <aside className="p-4">
                <div className="flex justify-end items-center">
                  <XMarkIcon
                    className="w-6 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <h2 className="text-2xl font-semibold dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-newDarkGray dark:text-white">
                  {selectedProject.details}
                </p>
                <div className="my-5">
                  {techStackToArray(selectedProject.techStack).map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={selectedProject.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevProject}
                    className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextProject}
                    className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    Next
                  </button>
                </div>
              </aside>
            </article>
          </motion.div>
        </div>
      )}
      <div className="max-w-custom mx-auto px-5 my-28">
        <div className="flex flex-col p-10 rounded-box place-items-center justify-between bg-newYellow dark:neutral md:flex-row">
          <h3 className="text-3xl text-center mb-5 font-semibold text-white md:mb-0">
            Interested working with me?
          </h3>
          <a
            href="mailto:otienomarvin7@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="p-3 px-6 text-newDark font-bold bg-white rounded-md flex gap-1 hover:bg-transparent hover:text-white hover:border-white"
          >
            <LiaEnvelopeSolid className="text-2xl" />
            Mail Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
