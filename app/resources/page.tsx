"use client";

import React from "react";

export default function ResourcesPage() {
  return (
    <>
      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="halftwo"></div>
        <div className="halftwo  resources-subtitle">
          <span className="black-bold-typo">Related Links</span>
        </div>
        <div className="halffour  resources-subtitle"></div>
        <div className="halffour  resources-subtitle"></div>
      </div>

      <div className="resources-blank-padding">
        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <span className="red-bold-typo">Idea Squares</span>
          </div>
          <div className="halftwo">
            <a
              href="http://ideasquares.cidrlab.com"
              className="black-bold-typo"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://ideasquares.cidrlab.com
            </a>
          </div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <span className="red-bold-typo">IoTIZER</span>
          </div>
          <div className="halftwo">
            <a
              href="http://iotizer.kaist.ac.kr"
              className="black-bold-typo"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://iotizer.kaist.ac.kr
            </a>
          </div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <span className="red-bold-typo">M.Sketch</span>
          </div>
          <div className="halftwo">
            <a
              href="http://msketch.kaist.ac.kr"
              className="black-bold-typo"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://msketch.kaist.ac.kr
            </a>
          </div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <span className="red-bold-typo">MCM</span>
          </div>
          <div className="halftwo">
            <a
              href="http://mcm.kaist.ac.kr "
              className="black-bold-typo"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://mcm.kaist.ac.kr
            </a>
          </div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <span className="red-bold-typo">Petmorph</span>
          </div>
          <div className="halftwo">
            <a
              href="http://petmorph.kaist.ac.kr"
              className="black-bold-typo"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://petmorph.kaist.ac.kr
            </a>
          </div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <span className="red-bold-typo">SketchStudio</span>
          </div>
          <div className="halftwo">
            <a
              href="http://sketchstudio.kaist.ac.kr"
              className="black-bold-typo"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://sketchstudio.kaist.ac.kr/
            </a>
          </div>
          <div className="halfthree"></div>
        </div>
      </div>

      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="halftwo"></div>
        <div className="halftwo  resources-subtitle">
          <span className="black-bold-typo">Course</span>
        </div>
        <div className="halffour  resources-subtitle"></div>
        <div className="halffour  resources-subtitle"></div>
      </div>

      <div className="resources-blank-padding">
        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <div className="resources-course-title">
              <span className="red-bold-typo">
                Design Research Issues
              </span>
              <span className="black-default-typo">
                ID.70001
              </span>
              <div className="syllabus-text" onClick={() => alert("Coming soon")}>
                <span className="black-bold-typo">
                  Syllabus
                </span>
                <span className="material-symbols-rounded">north_east</span>
              </div>
            </div>
          </div>
          <div className="halffive">
            <div className="black-default-typo">
              This course offers graduate students majoring in design the opportunity to discuss desirable design research.
              The goal of the course activities is to enhance understanding of design and design research.
              Every week, selected topics and reading materials are used to develop logical writing skills.
              Through short writing exercises and free expression of opinions, students improve their ability to engage in constructive debates.
              Additionally, through the Design Research Anatomy project and the Design Research Taxonomy project, students will cultivate the ability to understand the characteristics that make exemplary design research and explore competitive areas in design research.
            </div>
          </div>
          <div className="half"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <div className="resources-course-title">
              <span className="red-bold-typo">
                Interaction Prototyping
              </span>
              <span className="black-default-typo">
                ID.20020
              </span>
              <div className="syllabus-text" onClick={() => alert("Coming soon")}>
                <span className="black-bold-typo">
                  Syllabus
                </span>
                <span className="material-symbols-rounded">north_east</span>
              </div>
            </div>
          </div>
          <div className="halffive">
            <div className="black-default-typo">
            This course offers in the department of Industrial Design at KAIST aims to provide students with the theoretical and practical electronics and programming background to develop an software-hardware hybrid interactive prototypes (also known as physical computing). 
            The course objectives are <br />
            1) to familiarize students with basics of electronics and circuit design<br />
            2) to introduce student to MicroPython and the Raspberry Pl Pico platform<br />
            3) to have students complete a prototyping project that requires the integration of both electronics hardware making and software programming.
            </div>
          </div>
          <div className="half"></div>
        </div>
      </div>
      <div className="resources-blank"> </div>      

    </>

  );
}
