"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function MainPage() {
  const [showAllNews, setShowAllNews] = useState(false);

  const newsItems = [

    <span className="news-description" key="jul2025">
      <span className="news-title">JUL / 2025</span><br />
      Our pictorial was presented at DIS 2025
      <div className="paper-entry" style={{ fontWeight: 300 }}>
        <a href="https://programs.sigchi.org/dis/2025/program/content/200792" target="_blank" rel="noopener noreferrer" className="go-link-button">
          <span className="material-symbols-outlined">open_in_new</span>
          <span>LO: A Speculative Domestic Technology That Lives and Dies Along with Its User</span>
        </a>
      </div>
    </span>,

    <span className="news-description" key="may2025">
      <br /><br /><span className="news-title">MAY / 2025</span><br />
      Dr. Hyungjun Cho received an Honorable Mention (Top 5% of submissions) at CHI 2025
      <div className="paper-entry" style={{ fontWeight: 300 }}>
      </div>
    </span>,

    // 2
    <span className="news-description" key="apr2025">
      <br /><br /><span className="news-title">APR / 2025</span><br />
      3 papers accepted at CHI 2025
      <div className="paper-entry" style={{ fontWeight: 300 }}>
      </div>

      <div className="paper-entry" style={{ fontStyle: 'italic', fontWeight: 300 }}>
        <a href="https://doi.org/10.1145/3706598.3713228" target="_blank" rel="noopener noreferrer" className="go-link-button">
          <span className="material-symbols-outlined">open_in_new</span>
          <span>Living Alongside Areca: Exploring Human Experiences with Things Expressing Thoughts and Emotions</span>
        </a>
      </div>
      <div className="paper-entry" style={{ fontStyle: 'italic', fontWeight: 300 }}>
        <a href="https://doi.org/10.1145/3706598.3713255" target="_blank" rel="noopener noreferrer" className="go-link-button">
          <span className="material-symbols-outlined">open_in_new</span>
          <span>The Effect of In-Car Agent Embodiment on Different Types of Information Delivery</span>
        </a>
      </div>
      <div className="paper-entry" style={{ fontStyle: 'italic', fontWeight: 300 }}>
        <a href="https://doi.org/10.1145/3706598.3714297" target="_blank" rel="noopener noreferrer" className="go-link-button">
          <span className="material-symbols-outlined">open_in_new</span>
          <span>ShamAIn: Designing Superior Conversational AI Inspired by Shamanism</span>
        </a>
      </div>
    </span>,

    // 3
    <span className="news-description" key="mar2025">
      <br /><br /><span className="news-title">MAR / 2025</span><br />
      2 projects win the iF Design Award 2025<br />
      <a href="https://ifdesign.com/en/winner-ranking/project/water-tree/709602" target="_blank" rel="noopener noreferrer" className="go-link-button">
        <span className="material-symbols-outlined">open_in_new</span>
        <span>WATER TREE</span>
      </a>
      <a
        href="https://ifdesign.com/en/winner-ranking/project/angel-suit-a-wearable-robot-for-daily-mobility/674889"
        target="_blank"
        rel="noopener noreferrer"
        className="go-link-button"
        style={{ paddingLeft: "10px" }}
      >
        <span className="material-symbols-outlined">open_in_new</span>
        <span>angel SUIT: A Wearable Robot for Daily Mobility</span>
      </a>
    </span>,

    <span className="news-description" key="dec2024">
      <br /><br /><br /><span className="news-title">DEC / 2024</span><br />
      Jiwon Lee received the KAIST Q-Day Creativity and Talent Education Award
      <div className="paper-entry" style={{ fontWeight: 300 }}>
      </div>
      <a href="https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=42090" target="_blank" rel="noopener noreferrer" className="go-link-button">
        <span className="material-symbols-outlined">open_in_new</span>
        <span>Go to page</span>
      </a>
    </span>,
  ];

  return (
    <>
      <div className="resources-blank"> </div>
      {/* <div className="main-banner">
        <video
          className="banner"
          width="1300"
          height="400"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: 'contain' }}
        >
          <source src="/Teaser_PreviewVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <div className="page-content">
        <div className="logotypo-container">
          <Image src="/logotypo.png" alt="logotypo" width={500} height={200} className="logotypo" style={{ objectFit: 'contain' }} />
        </div>

        <div className="main-page-container cidr-background-wrapper">
          <div className="halfthree"></div>
          <div className="halftwo">
            <div className="text-description-container">
              <div className="cidr-background-image" />
              <span className="text-description-main">
                The central research theme of CIDR Lab. can be described as Augmented Design.
                It is a study of augmented objects or systems that enrich human life.
                It also refers to investigating how to augment design with new tools, methods, and perspectives.<br /><br />
                The characteristic of design research is the high degree of design realization with the experience prototype before conducting a systematic evaluation.
                In terms of an application domain, the lab focuses more on products or systems that integrate hardware and software, for example, IoT-based connected systems.<br /><br />
                Recent projects include Mobile Clinic Module for Making Negative Pressure Isolation Wards, In-Vehicle UX/UI, Smart Homes, and Wearable Robots.
                The Lab’s design research pursues designing novel artifacts and the knowledge of how design affects people.
                These dual contributions make CIDR Lab. to be a bridge between design practice and research.
              </span>
            </div>
          </div>
          <div className="half"></div>
        </div>

        <div className="text-title-container">
          <div className="half"></div>
          <div className="halftwo"><span className="text-title">News</span></div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree"></div>
          <div className="halftwo">
            <div className="text-description-container">
              {showAllNews ? newsItems : newsItems.slice(0, 3)}

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button
                  onClick={() => setShowAllNews(prev => !prev)}
                  className="go-link-button"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'gray',
                    cursor: 'pointer',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span className="material-symbols-rounded">
                    {showAllNews ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  </span>
                </button>
              </div>

            </div>
          </div>
          <div className="half"></div>
        </div>


        <div className="text-title-container">
          <div className="half"></div>
          <div className="halftwo"><span className="text-title">Contact Us</span></div>
          <div className="halfthree"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree">
            <span className="course-title">CIDR Lab</span>
          </div>
          <div className="halftwo">
            <div className="text-description-container">
              <span className="text-description">
                Room 324, Dept. of Industrial Design, KAIST <br />
                291 Daehak-ro, Yuseong-gu, Daejeon 34141 <br />
                Republic of Korea
              </span>
            </div>
          </div>
          <div className="half"></div>
        </div>

        <div className="main-page-container">
          <div className="halfthree">
            <span className="course-title">Email</span>
          </div>
          <div className="halftwo">
            <div className="text-description-container">
              <span className="text-description">
                Prof. Tek-Jin Nam <br />
                tjnam@kaist.ac.kr <br />
              </span>
            </div>
            <div className="pub-blank"></div>
            <div className="text-description-container">
              <span className="text-description">
                Lab Rep. Jiwon Lee <br />
                jiwonlee1223@kaist.ac.kr
              </span>
            </div>
          </div>
          <div className="half"></div>
        </div>

        <div className="main-footer-container">
          <div className="main-footer-wrapper">
            <Image src="/main-footer-img.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
            <Image src="/main-footer-img.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
            <Image src="/main-footer-img.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
            <Image src="/main-footer-img.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
            <Image src="/main-footer-img.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
            <Image src="/main-footer-img.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </>
  );
}
