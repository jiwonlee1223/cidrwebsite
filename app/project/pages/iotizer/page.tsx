'use client';

import { useState } from 'react';
import projectList from '../../data/projectList.json';
import Image from 'next/image';

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projectList.find((p) => p.slug === 'iotizer');
  if (!project) return <p>Project not found.</p>;
  return (
    <>
      <div className="resources-blank" />

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="project-title-small">{project.name}</span>
        </div>
        <div className="halffour">
          <span className="project-description-bold">{project.year}</span>
        </div>
      </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half"></div>
        <div className="halfthree">
          {project.sections.map((section, i) => (
            <div key={i} className="project-section">
              <span className="project-description-bold">{section.title}<br /></span>
              <span className="project-description">{section.content}</span>
            </div>
          ))}
        </div>
        <div className="half"></div>
      </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half"></div>
        <div className="halfthree-project-img">
          <Image
            src="/iotizer01.jpg"
            alt="g-raff"
            width={800}
            height={600}
            className="project-img"
            onClick={() => setSelectedImage('/iotizer01.jpg')}
          />
          <Image
            src="/iotizer02.jpg"
            alt="g-raff"
            width={800}
            height={600}
            className="project-img"
            onClick={() => setSelectedImage('/iotizer02.jpg')}
          />
        </div>
        <div className="half"></div>
      </div>

      <div className='main-page-container'>
        <div className="half"></div>
        <div className="half"></div>
        <div className="halfthree-project-video">
          <iframe
            className="project-video"
            src="https://www.youtube.com/embed/OSUpCOpZWEk"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="half"></div>
      </div>


      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content">
            <Image
              src={selectedImage}
              alt="popup"
              width={1200}
              height={800}
              className="popup-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
