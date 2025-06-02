'use client';
import { useRouter } from 'next/navigation';
import projectList from '../../data/projectList.json';


export default function ThetenerePage() {
  const router = useRouter(); // ✅ 최상단에서 호출
  const project = projectList.find((p) => p.slug === 'the-tenere');
  if (!project) return <p>Project not found.</p>;

  function handleClick(slug: string) {
    router.push(`/project/${slug}`);
  }
  return (
    <>

      <div className="resources-blank" />
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="project-title">{project.name}</span>
        </div>
        <div className="halffour">
          <span className="project-description-bold">{project.year}</span>
        </div>
      </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half"></div>
        <div className="halffour">
          {project.sections.map((section, i) => (
            <div key={i} className="project-section">
              <span className="project-description-bold">{section.title}<br /></span>
              <span className="project-description">{section.content}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='main-page-coontainer'>
        <div className='half'></div>
        <div className='halffive'>
          <img src="/areca01.png" className='project-img'></img>
        </div>
      </div>
    </>
  );
}
