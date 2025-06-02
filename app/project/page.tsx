'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ProjectPage() {
  const router = useRouter();
  const pathname = usePathname(); // ✅ 현재 경로 파악
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch('/data/projectList.json')
      .then((res) => res.json())
      .then(setProjectList);
  }, []);

  // ✅ 현재 선택된 slug 추출
  const selectedSlug = pathname.split('/').pop();

  function handleClick(slug: string) {
    router.push(`/project/pages/${slug}`);
  }

  return (
    <>
      <div className="resources-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="halffive">
          {projectList.map((project: any) => (
            <button
              key={project.slug}
              className={`project-name-btn ${selectedSlug === project.slug ? 'active' : ''}`}
              onClick={() => handleClick(project.slug)}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
