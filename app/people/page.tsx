
export default function PeoplePage() {
  return (
    <>
      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half-people">
          <span className="people-roles">Director</span>
          <span className="people-name">Tek-Jin Nam</span>
        </div>
        <div className="halffour"></div>
      </div>

      <div className="main-page-container">
        <div className="half-people">
          <img src="/Tek-Jin_Nam.png" className="professor-img" />
        </div>

        <div className="half-people">
          <span className="people-description">
            Full Professor, Department of Industrial Design, KAIST<br />
            Vice President, Korea Society of Design Science<br />
            Deputy Editor in Chief, Archives of Design Research<br />
            Vice President, IASDR (International Association of Societies of Design Research)<br />
            International Advisory Council Member, Design Research Society<br />
            Jury, Seoul Design Award<br />
            Jury, A.N.D. Award
          </span>

          <div className="main-page-container research-interests">
            <div className="halftwo">
              <span className="people-description">
                <strong>Research interests</strong><br />
                Augmented Design (e.g. AI-Embedded and AI-Empowered Design)
                Design Methods and Tools (Prototyping for UX and Physical Computing, Branding and Design System)
                Interactive Products and Systems (Smart Home Appliances, In-Car UX, Wearables and Robots, Healthcare and Clinic Systems)
                Research Through Design, Combining Design Practice, Study and Exploration
              </span>
            </div>
            <div className="half"></div>
          </div>
        </div>
      </div>

      <div className="resources-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles">Ph.D. Students</span>
        </div>
        <div className="half"></div>
        <div className="half-people">
          <img src="/Ji-Yeon_Lee.png" className="student-img"></img>
          <span className="student-name">Jiyeon Lee</span>
          <span className="student-email">ji.lee@kaist.ac.kr</span>
          <span className="student-research-interest">Living Object; Bringing Awareness; Experience Translation</span>
        </div>
        <div className="halftwo"></div>
      </div>

      <div className="awards-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles">Master's Students</span>
        </div>
        <div className="half"></div>
        <div className="half-people">
          <img src="/Jisu_Park.png" className="student-img"></img>
          <span className="student-name">Jisu Park</span>
          <span className="student-email">park.jisu@kaist.ac.kr</span>
          <span className="student-research-interest">AI-embedded Wearable Device; Interactive System Design; Product Design</span>
        </div>
        <div className="half-people">
          <img src="/Jiwon_Lee.png" className="student-img"></img>
          <span className="student-name">Jiwon Lee
            {/* <a href="https://jiwondesignlee.com" target="_blank" rel="noopener noreferrer" className="go-link-button">
                  <span className="material-symbols-outlined student-site">open_in_new</span>
                </a> */}
          </span>
          <span className="student-email">jiwonlee1223@kaist.ac.kr</span>
          <span className="student-research-interest">AI-empowered Design Tool; Interactive System Development; Service Design Engineering</span>
        </div>
        <div className="half"></div>
      </div>

      <div className="pub-blank"> </div>
      <div className="main-page-container">
        <div className="halftwo"></div>
        <div className="half">
          {/* <span className="people-roles"></span> */}
        </div>
        <div className="half-people">
          <img src="/Suhyun_Lim.png" className="student-img"></img>
          <span className="student-name">Suhyun Lim</span>
          <span className="student-email">suhyun8538@kaist.ac.kr</span>
          <span className="student-research-interest">Visual Communication Design; Interaction Design; Design Education</span>
        </div>
        <div className="half-people">
          <img src="/yewon_kim.png" className="student-img"></img>
          <span className="student-name">Yewon Kim</span>
          <span className="student-email">yewonkim@kaist.ac.kr</span>
          <span className="student-research-interest">Bio Exoskeleton Design</span>
        </div>
        <div className="half-people">

        </div>
      </div>

      <div className="awards-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles">Undergraduate Interns</span>
        </div>
        <div className="half"></div>
        <div className="half-people">
          <img src="/people-temp.png" className="student-img"></img>
          <span className="student-name">Changhyeon Park</span>
          <span className="student-email">pch4784@kaist.ac.kr</span>
          {/* <span className="student-research-interest">AI-embedded Wearable Device; Interactive System Design; Product Design</span> */}
        </div>
        <div className="half-people">
          <img src="/people-temp.png" className="student-img"></img>
          <span className="student-name">Subin Cho</span>
          <span className="student-email">csbin0830@kaist.ac.kr</span>
          {/* <span className="student-research-interest">AI-empowered Design Tool; Interactive System Development; Service Design Engineering</span> */}
        </div>
        <div className="half"></div>
      </div>

      

      

      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half-people">
          <span className="people-roles">Alumni</span>
        </div>
        <div className="half"></div>
        <div className="halftwo">
          <div className="alumni-logos-grid">
            <img src="/logos/samsung.png" alt="Samsung Electronics" />
            <img src="/logos/line.png" alt="LINE" />
            <img src="/logos/lg_electronics.png" alt="LG" style={{ height: '35px' }} />
            <img src="/logos/nasa.webp" alt="NASA" style={{ height: '50px' }} />
            <img src="/logos/microsoft.webp" alt="Microsoft" style={{ height: '30px' }} />
            <img src="/logos/naver_labs.jpeg" alt="NAVER LABS" style={{ height: '35px' }} />
            <img src="/logos/indiana_university.jpg" alt="Indiana University" style={{ height: '58px' }} />
            <img src="/logos/sfu.png" alt="Simon Fraser University" />
            <img src="/logos/cincinnati.png" alt="University of Cincinnati" style={{ height: '60px' }} />
            <img src="/logos/unist.png" alt="UNIST" style={{ height: '25px' }} />
            <img src="/logos/baekseok.png" alt="Baekseok University" style={{ height: '45px' }} />
            <img src="/logos/kpu.webp" alt="Tech University of Korea" style={{ height: '45px' }} />
            <img src="/logos/florida.png" alt="Florida University" style={{ height: '28px' }} />
          </div>
        </div>
        <div className="half"></div>
      </div>


      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half-people">
          <span className="people-roles">Collaborators</span>
        </div>
        <div className="half"></div>
        <div className="halftwo">
          <div className="collaborator-logos-grid">
            <img src="/logos/lg_electronics.png" alt="LG Electronics" />
            <img src="/logos/gm.png" alt="GM" />
            <img src="/logos/angel_robotics.png" alt="Angel Robotics" />
            <img src="/logos/hankook.png" alt="Hankook Tire" style={{ height: '55px' }} />
            <img src="/logos/kaist.png" alt="KAIST" style={{ height: '30px' }} />
            <img src="/logos/samsung.png" alt="Samsung"/>
            <img src="/logos/amorepacific.png" alt="AmorePacific" style={{ height: '15px' }} />
            <img src="/logos/vodafone.png" alt="Vodafone" />
            <img src="/logos/nh_investment.png" alt="NH Investment & Securities" style={{ height: '15px' }} />
            <img src="/logos/mi_design.png" alt="MI Design" style={{ height: '25px' }} />
            <img src="/logos/kidp.png" alt="KIDP" />
            <img src="/logos/nrf.png" alt="NRF" />
            <img src="/logos/iitp.svg" alt="IITP" style={{ height: '35px' }} />
            <img src="/logos/sba.svg" alt="Seoul Business Agency" style={{ height: '15px' }} />
          </div>
        </div>
        <div className="half"></div>
      </div>

      <div className="resources-blank"> </div>
    </>
  );
}
