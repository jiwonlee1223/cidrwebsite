'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface Project {
  slug: string;
  name: string;
}

export default function ProjectPage() {
  const router = useRouter();
  const pathname = usePathname(); 
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data/projectList.json')
      .then((res) => res.json())
      .then(setProjectList);
  }, []);

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
          {projectList.map((project) => (
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
