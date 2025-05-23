'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import projectList from './data/projectList.json';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredProjects = projectList.filter((p) => {
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
    const typeMatch = selectedType === "All" || p.type === selectedType;
    const locationMatch = selectedLocation === "All" || p.location === selectedLocation;
    return categoryMatch && typeMatch && locationMatch;
  });

  function handleClick(slug: string) {
    router.push(`/project/${slug}`);
  }
  return (
    <>
      <div className="resources-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half"></div>
        <div className="half"></div>
        <div className="halfthree">
          <p className="comingsoon">
            Updating...
          </p>
        </div>
      </div>
    </>
  );
  // return (
  //   <>

  //     <div className="resources-blank" />
  //     {/* 🔹 Category 필터 */}
  //     <div className="main-page-container">
  //       <div className="half"></div>
  //       <div className="half">
  //         <span
  //           className={`pub-category ${selectedCategory === "All" ? "active" : ""}`}
  //           onClick={() => setSelectedCategory("All")}
  //         >
  //           All
  //         </span>
  //       </div>
  //       <div className="halfthree">
  //         {["Human-Computer Interaction", "Human-AI Interaction", "Product Design", "Others"].map((cat) => (
  //           <span
  //             key={cat}
  //             className={`pub-category ${selectedCategory === cat ? "active" : ""}`}
  //             onClick={() => setSelectedCategory(cat)}
  //           >
  //             {cat}
  //           </span>
  //         ))}
  //       </div>
  //     </div>

  //     {/* 🔹 Type 필터 */}
  //     <div className="main-page-container">
  //       <div className="half"></div>
  //       <div className="half">
  //         <span
  //           className={`pub-category ${selectedType === "All" ? "active" : ""}`}
  //           onClick={() => setSelectedType("All")}
  //         >
  //           All
  //         </span>
  //       </div>
  //       <div className="halfthree">
  //         {["Journals", "Conferences", "Patents"].map((type) => (
  //           <span
  //             key={type}
  //             className={`pub-category ${selectedType === type ? "active" : ""}`}
  //             onClick={() => setSelectedType(type)}
  //           >
  //             {type}
  //           </span>
  //         ))}
  //       </div>
  //     </div>

  //     {/* 🔹 Location 필터 */}
  //     <div className="main-page-container">
  //       <div className="half"></div>
  //       <div className="half">
  //         <span
  //           className={`pub-category ${selectedLocation === "All" ? "active" : ""}`}
  //           onClick={() => setSelectedLocation("All")}
  //         >
  //           All
  //         </span>
  //       </div>
  //       <div className="halfthree">
  //         {["International", "Domestic"].map((loc) => (
  //           <span
  //             key={loc}
  //             className={`pub-category ${selectedLocation === loc ? "active" : ""}`}
  //             onClick={() => setSelectedLocation(loc)}
  //           >
  //             {loc}
  //           </span>
  //         ))}
  //       </div>
  //     </div>
  //     <div className="resources-blank" />
  //     {/* 🔹 필터링된 프로젝트 목록 */}
  //     <div className="main-page-container">
  //       <div className="half"></div>
  //       <div className="halffive">
  //         {filteredProjects.map((project) => (
  //           <button
  //             key={project.slug}
  //             className="project-name-btn"
  //             onClick={() => handleClick(project.slug)}
  //           >
  //             {project.name}
  //           </button>
  //         ))}
  //       </div>
  //     </div>

  //     {/* 🔹 상세 콘텐츠 */}
  //     {children}
  //   </>
  // );
}
