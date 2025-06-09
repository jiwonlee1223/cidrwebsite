
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

          <span className="people-description research-interests">
            <strong>Research interests</strong><br />
            Augmented Design (e.g. AI-Embedded and AI-Empowered Design)
            Design Methods and Tools (Prototyping for UX and Physical Computing, Branding and Design System)
            Interactive Products and Systems (Smart Home Appliances, In-Car UX, Wearables and Robots, Healthcare and Clinic Systems)
            Research Through Design, Combining Design Practice, Study and Exploration
          </span>
        </div>
      </div>

      <div className="resources-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles">PhD</span>
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
          <span className="people-roles">Master</span>
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
        <div className="half-people">
          <img src="/Suhyun_Lim.png" className="student-img"></img>
          <span className="student-name">Suhyun Lim</span>
          <span className="student-email">suhyun8538@kaist.ac.kr</span>
          <span className="student-research-interest">Visual Communication Design; Interaction Design; Design Education</span>
        </div>
      </div>

      <div className="pub-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles"></span>
        </div>
        <div className="half"></div>
        <div className="half-people">
          <img src="/yewon_kim.png" className="student-img"></img>
          <span className="student-name">Yewon Kim</span>
          <span className="student-email">yewonkim@kaist.ac.kr</span>
          <span className="student-research-interest">Bio Exoskeleton Design</span>
        </div>
        <div className="half-people">

        </div>
        <div className="half-people">

        </div>
      </div>

      <div className="resources-blank"> </div>

      <div className="main-page-container">
        <div className="half"></div>
        <div className="half-people">
          <span className="people-roles">Alumni</span>
        </div>
        <div className="half"></div>
        <div className="halfthree">
          <span className="comingsoon">Updating ...</span>
        </div>
      </div>



    </>
  );
}
