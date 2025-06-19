"use client";
import React, { useState } from "react";
import { publications } from "./publications";

export default function PublicationPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // 모든 필터 조건을 적용하여 publication을 필터링
  const filteredPublications = publications.map((group) => ({
    ...group,
    entries: group.entries.filter((entry) => {
      const categoryMatch =
        selectedCategory === "All" || entry.category === selectedCategory;
      const typeMatch = selectedType === "All" || entry.type === selectedType;
      const locationMatch =
        selectedLocation === "All" || entry.location === selectedLocation;
      return categoryMatch && typeMatch && locationMatch;
    }),
  }));

  return (
    <>
      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="half">
        </div>
        <div className="half">
          <span className={`pub-all ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => setSelectedCategory("All")}>
            All
          </span>
        </div>
        <div className="halfthree">
          <span
            className={`pub-category ${selectedCategory === "Human-Computer Interaction" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Human-Computer Interaction")}
          >
            Human-Computer Interaction
          </span>
          <span
            className={`pub-category ${selectedCategory === "Human-AI Interaction" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Human-AI Interaction")}>
            Human-AI Interaction
          </span>
          <span
            className={`pub-category ${selectedCategory === "Product Design" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Product Design")}>
            Product Design
          </span>
          <span
            className={`pub-category ${selectedCategory === "Others" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Others")}>
            Others
          </span>
        </div>
        <div className="half">
        </div>
      </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className={`pub-all ${selectedType === "All" ? "active" : ""}`}
            onClick={() => setSelectedType("All")}>
            All
          </span>
        </div>
        <div className="halfthree">
          <span
            className={`pub-category ${selectedType === "Journals" ? "active" : ""}`}
            onClick={() => setSelectedType("Journals")}>
            Journals
          </span>
          <span
            className={`pub-category ${selectedType === "Conferences" ? "active" : ""}`}
            onClick={() => setSelectedType("Conferences")}>
            Conferences
          </span>
          <span
            className={`pub-category ${selectedType === "Patents" ? "active" : ""}`}
            onClick={() => setSelectedType("Patents")}>
            Patents
          </span>
        </div>
        <div className="half">
        </div>
      </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className={`pub-all ${selectedLocation === "All" ? "active" : ""}`} onClick={() => setSelectedLocation("All")}>
            All
          </span>
        </div>
        <div className="halfthree">
          <span
            className={`pub-category ${selectedLocation === "International" ? "active" : ""}`}
            onClick={() => setSelectedLocation("International")}>
            International
          </span>
          <span
            className={`pub-category ${selectedLocation === "Domestic" ? "active" : ""}`}
            onClick={() => setSelectedLocation("Domestic")}>
            Domestic
          </span>
        </div>
        <div className="half">
        </div>
      </div>

      <div className="main-page-container">
        <div className="awards-blank"></div>
      </div>

      {filteredPublications.map((group) => (
        <React.Fragment key={group.year}>
          {/* 연도 타이틀 */}
          <div className="main-page-container">
            <div className="half"></div>
            
            <div className="halffour">
              <span className="awards-year">{group.year}</span>
            </div>
            <div className="half"></div>
          </div>

          {/* 각 연도에 해당하는 publication 항목들 */}
          {group.entries.map((entry) => (
            <div key={entry.id} className="main-page-container">
              <div className="half"></div>
              <div className="halffour">
                <span className="pub-text">{entry.text}</span>
              </div>
              <div className="half"></div>
            </div>
          ))}

          {/* 항목 사이 여백 */}
          <div className="main-page-container">
            <div className="pub-blank"></div>
          </div>
        </React.Fragment>
      ))}

    </>

  );
}
