import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { TbDownload } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { Context } from "../../Context/ModalContext";

// ------> Pdf
import Resume from "../../Assets/pdf/resume.pdf";

import Me from "../../Assets/Images/me.webp";

function Header() {
  const [showModal, setShowModal] = useState(false);

  // ------> Context
  const ctx = useContext(Context);
  // eslint-disable-next-line no-unused-vars
  const { show, setShow } = ctx;

  return (
    <header
      className={`bg-[#0a192f] fixed top-0 z-50 w-full h-fit duration-500 border-b border-b-[rgba(100,255,218,0.1)] shadow-header_shadow`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4 sm:py-5">
          <img
            className="h-[40px] w-[40px] rounded-full z-50"
            src={Me}
            alt="front-img"
          />
          <div className="hidden sm:flex items-center">
            <ul className="flex items-center space-x-6">
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#home"
                  aria-label="about"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  About
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#skills"
                  aria-label="skills"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Skills
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#experience"
                  aria-label="experience"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Experience
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#work"
                  aria-label="portfolio"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav_item text-sm px-2 py-1 group">
                <a
                  href="#contact"
                  aria-label="contact"
                  className="nav_link text-white group-hover:text-[#64ffda] duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href={Resume}
              download="Nodirbek's resume.pdf"
              aria-label="resume"
              className="flex items-center text-sm ml-5 border border-[#64ffda] text-[#64ffda] rounded-[6px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-3 duration-200"
            >
              Resume
              <span className="inline-block ml-2">
                <TbDownload />
              </span>
            </a>
          </div>
          <div className="flex md:hidden items-center space-x-10">
            <a
              href={Resume}
              aria-label="resume"
              download="Nodirbek's resume.pdf"
              className="flex items-center text-sm ml-5 border border-[#64ffda] text-[#64ffda] rounded-[6px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-3 duration-200"
            >
              Resume
              <span className="inline-block ml-2">
                <TbDownload />
              </span>
            </a>
            <button
              className="flex flex-col justify-between w-7 h-5"
              aria-label="munubutton"
              onClick={() => {
                setShowModal(true);
                setShow(true);
              }}
            >
              <span
                className={`${
                  showModal ? "-rotate-45 translate-y-[8.8px]" : ""
                } inline-block w-full h-[2px] border border-white duration-300`}
              ></span>
              <span
                className={`${
                  showModal ? "hidden" : ""
                } inline-block w-[60%] h-[2px] border border-white`}
              ></span>
              <span
                className={`${
                  showModal ? "rotate-45 -translate-y-[8.8px]" : ""
                } inline-block w-full h-[2px] border border-white duration-300`}
              ></span>
            </button>
          </div>
        </nav>
      </div>

      {/* ---------------- Modal --------------- */}

      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          setShow(false);
        }}
      >
        <span
          onClick={() => {
            setShowModal(false);
            setShow(false);
          }}
          className="absolute left-[40%] inline-block w-20 h-2 bg-[#0a192f] rounded-b-2xl"
        ></span>
        <ul className="grid grid-cols-3 gap-y-8 gap-x-4 pt-14 pb-10">
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#home"
              aria-label="home"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <BiUser />
              </span>
              About
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#skills"
              aria-label="skills"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <GiSkills />
              </span>
              Skills
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#experience"
              aria-label="experience"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <MdWorkOutline />
              </span>
              Experience
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#work"
              aria-label="projects"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <TfiGallery />
              </span>
              Projects
            </a>
          </li>
          <li
            onClick={() => {
              setShowModal(false);
              setShow(false);
            }}
            className="border border-[#0a192f] hover:bg-[#0a192f] rounded-md w-full mx-auto duration-300"
          >
            <a
              href="#contact"
              aria-label="contact"
              className="flex flex-col items-center justify-center font-medium text-sm text-[#0a192f] hover:text-white duration-200 py-2"
            >
              <span className="block text-lg mb-[2px] sm:mr-2">
                <TbBrandTelegram />
              </span>
              Contact
            </a>
          </li>
          <a
            href={Resume}
            aria-label="resume"
            download="Nodirbek's resume.pdf"
            className="flex flex-col-reverse items-center justify-center text-sm w-full border border-[#0a192f] text-[#0a192f] hover:text-white rounded-[6px] bg-white hover:bg-[#0a192f] py-2 px-3 mx-auto duration-200"
          >
            Resume
            <span className="inline-block">
              <TbDownload />
            </span>
          </a>
        </ul>
      </Modal>
    </header>
  );
}

export default Header;
