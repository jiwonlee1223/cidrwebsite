import Image from 'next/image';

export default function MainPage() {
  return (
    <>
      <div className="main-banner">
        <Image src="/banner.png" alt="banner" width={1300} height={400} className="banner" style={{ objectFit: 'contain' }} />
      </div>

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

              <span className="news-description">
                <span className="news-title">MAY / 2025</span><br />
                The research led by Dr. Hyungjun Cho received an Honorable Mention (Top 5% of submissions) at CHI 2025! <br />
              </span>

              <span className="news-description">
                <br /><br /><span className="news-title">APR / 2025</span><br />
                3 papers accepted at CHI 2025!
                <div className="paper-entry" style={{ fontWeight: 300 }}>
                  We are pleased to announce that this year, the following papers were accepted for presentation at CHI 2025, held in Yokohama in April 2025:<br />
                </div>

                <div className="paper-entry" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  1) Living Alongside Areca: Exploring Human Experiences with Things Expressing Thoughts and Emotions<br />
                  <em>Hyungjun Cho and Tek-Jin Nam</em><br />
                  <a href="https://doi.org/10.1145/3706598.3713228" target="_blank" rel="noopener noreferrer" className="go-link-button">
                    <span className="material-symbols-outlined">open_in_new</span>
                    <span>Go to page</span>
                  </a>
                </div>
                <div className="paper-entry" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  2) The Effect of In-Car Agent Embodiment on Different Types of Information Delivery<br />
                  <em>Bonhee Ku, Chang-Min Kim, Hyungjun Cho, Jisu Park, and Tek-Jin Nam</em><br />
                  <a href="https://doi.org/10.1145/3706598.3713255" target="_blank" rel="noopener noreferrer" className="go-link-button">
                    <span className="material-symbols-outlined">open_in_new</span>
                    <span>Go to page</span>
                  </a>
                </div>
                <div className="paper-entry" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  3) ShamAIn: Designing Superior Conversational AI Inspired by Shamanism<br />
                  <em>Hyungjun Cho, Jiyeon Amy Seo, Jiwon Lee, Chang-Min Kim, and Tek-Jin Nam</em><br />
                  <a href="https://doi.org/10.1145/3706598.3714297" target="_blank" rel="noopener noreferrer" className="go-link-button">
                    <span className="material-symbols-outlined">open_in_new</span>
                    <span>Go to page</span>
                  </a>
                </div>
              </span>

              <span className="news-description">
                <br /><br /><span className="news-title">MAR / 2025</span><br />
                Our research lab, in collaboration with Zoslee Studio, received an iF Design Award 2025!<br />
                <a href="https://ifdesign.com/en/winner-ranking/project/water-tree/709602" target="_blank" rel="noopener noreferrer" className="go-link-button">
                  <span className="material-symbols-outlined">open_in_new</span>
                  <span>Go to page</span>
                </a>
              </span>


              <span className="news-description">
                <br /><br /><br /><span className="news-title">DEC / 2024</span><br />
                Jiwon Lee received the KAIST Q-Day Creativity and Talent Education Award.
                <div className="paper-entry" style={{ fontWeight: 300 }}>
                  We extend our congratulations to Jiwon Lee, a master's student from our lab, for being selected as the recipient of the KAIST Q-Day Creativity and Talent Education Award.
                </div>
                <a href="https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=42090" target="_blank" rel="noopener noreferrer" className="go-link-button">
                  <span className="material-symbols-outlined">open_in_new</span>
                  <span>Go to page</span>
                </a>
              </span>
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
            <Image src="/main-footer.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
            <Image src="/main-footer.png" alt="footer" width={1200} height={100} className="main-footer" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </>
  );
}
