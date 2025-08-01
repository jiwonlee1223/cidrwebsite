import Image from "next/image";

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
          <Image
            src="/Tek-Jin_Nam.png"
            alt="Tek-Jin Nam"
            className="professor-img"
            width={900}
            height={900}
          />
        </div>

        <div className="half-people">
          <span className="people-description">
            Full Professor, Department of Industrial Design, KAIST
            <br />
            Vice President, Korea Society of Design Science
            <br />
            Deputy Editor in Chief, Archives of Design Research
            <br />
            Vice President, IASDR (International Association of Societies of
            Design Research)
            <br />
            International Advisory Council Member, Design Research Society
            <br />
            Jury, Seoul Design Award
            <br />
            Jury, A.N.D. Award
          </span>

          <div className="main-page-container research-interests">
            <div className="halftwo">
              <span className="people-description">
                <strong>Research interests</strong>
                <br />
                Augmented Design (e.g. AI-Embedded and AI-Empowered Design)
                Design Methods and Tools (Prototyping for UX and Physical
                Computing, Branding and Design System) Interactive Products and
                Systems (Smart Home Appliances, In-Car UX, Wearables and Robots,
                Healthcare and Clinic Systems) Research Through Design,
                Combining Design Practice, Study and Exploration
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
          <Image
            src="/Ji-Yeon_Lee.png"
            alt="Jiyeon Lee"
            className="student-img"
            width={300}
            height={300}
          />
          <span className="student-name">Jiyeon Lee</span>
          <span className="student-email">ji.lee@kaist.ac.kr</span>
          <span className="student-research-interest">
            Living Object; Bringing Awareness; Experience Translation
          </span>
        </div>
        <div className="halftwo"></div>
      </div>
      <div className="awards-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles">Master&apos;s Students</span>
        </div>
        <div className="half"></div>
        <div className="half-people">
          <Image
            src="/Jisu_Park.png"
            alt="Jisu Park"
            className="student-img"
            width={300}
            height={300}
          />

          <span className="student-name">Jisu Park</span>
          <span className="student-email">park.jisu@kaist.ac.kr</span>
          <span className="student-research-interest">
            AI-embedded Wearable Device; Interactive System Design; Product
            Design
          </span>
        </div>
        <div className="half-people">
          <Image
            src="/Jiwon_Lee.png"
            alt="Jiwon Lee"
            className="student-img"
            width={300}
            height={300}
          />
          <span className="student-name">
            Jiwon Lee
            {/* <a href="https://jiwondesignlee.com" target="_blank" rel="noopener noreferrer" className="go-link-button">
                  <span className="material-symbols-outlined student-site">open_in_new</span>
                </a> */}
          </span>
          <span className="student-email">jiwonlee1223@kaist.ac.kr</span>
          <span className="student-research-interest">
            AI-empowered Design Tool; Interactive System Development; Service
            Design Engineering
          </span>
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
          <Image
            src="/Suhyun_Lim.png"
            alt="Suhyun Lim"
            className="student-img"
            width={300}
            height={300}
          />
          <span className="student-name">Suhyun Lim</span>
          <span className="student-email">suhyun8538@kaist.ac.kr</span>
          <span className="student-research-interest">
            Visual Communication Design; Interaction Design; Design Education
          </span>
        </div>
        <div className="half-people">
          <Image
            src="/yewon_kim.png"
            alt="Yewon Kim"
            className="student-img"
            width={300}
            height={300}
          />
          <span className="student-name">Yewon Kim</span>
          <span className="student-email">yewonkim@kaist.ac.kr</span>
          <span className="student-research-interest">
            Bio Exoskeleton Design
          </span>
        </div>
        <div className="half-people"></div>
      </div>
      <div className="awards-blank"> </div>
      <div className="main-page-container">
        <div className="half"></div>
        <div className="half">
          <span className="people-roles">Undergraduate Interns</span>
        </div>
        <div className="half"></div>
        <div className="half-people">
          <Image
            src="/people-temp.png"
            alt="People Temp"
            className="student-img"
            width={300}
            height={300}
          />
          <span className="student-name">Changhyeon Park</span>
          <span className="student-email">pch4784@kaist.ac.kr</span>
          {/* <span className="student-research-interest">AI-embedded Wearable Device; Interactive System Design; Product Design</span> */}
        </div>
        <div className="half-people">
          <Image
            src="/people-temp.png"
            alt="People Temp"
            className="student-img"
            width={300}
            height={300}
          />
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
            <Image
              src="/logos/samsung.png"
              alt="Samsung Electronics"
              width={100}
              height={35}
            />
            <Image src="/logos/line.png" alt="LINE" width={100} height={35} />
            <Image
              src="/logos/lg_electronics.png"
              alt="LG"
              width={100}
              height={35}
            />
            <Image src="/logos/nasa.webp" alt="NASA" width={100} height={50} />
            <Image
              src="/logos/microsoft.webp"
              alt="Microsoft"
              width={100}
              height={30}
            />
            <Image
              src="/logos/naver_labs.jpeg"
              alt="NAVER LABS"
              width={100}
              height={35}
            />
            <Image
              src="/logos/indiana_university.jpg"
              alt="Indiana University"
              width={100}
              height={58}
            />
            <Image
              src="/logos/sfu.png"
              alt="Simon Fraser University"
              width={100}
              height={35}
            />
            <Image
              src="/logos/cincinnati.png"
              alt="University of Cincinnati"
              width={100}
              height={60}
            />
            <Image src="/logos/unist.png" alt="UNIST" width={100} height={25} />
            <Image
              src="/logos/baekseok.png"
              alt="Baekseok University"
              width={100}
              height={45}
            />
            <Image
              src="/logos/kpu.webp"
              alt="Tech University of Korea"
              width={100}
              height={45}
            />
            <Image
              src="/logos/florida.png"
              alt="Florida University"
              width={100}
              height={28}
            />
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
            <Image
              src="/logos/lg_electronics.png"
              alt="LG Electronics"
              width={100}
              height={35}
            />
            <Image src="/logos/gm.png" alt="GM" width={100} height={35} />
            <Image
              src="/logos/angel_robotics.png"
              alt="Angel Robotics"
              width={100}
              height={35}
            />
            <Image
              src="/logos/hankook.png"
              alt="Hankook Tire"
              width={100}
              height={55}
            />
            <Image src="/logos/kaist.png" alt="KAIST" width={100} height={30} />
            <Image
              src="/logos/samsung.png"
              alt="Samsung"
              width={100}
              height={35}
            />
            <Image
              src="/logos/amorepacific.png"
              alt="AmorePacific"
              width={100}
              height={15}
            />
            <Image
              src="/logos/vodafone.png"
              alt="Vodafone"
              width={100}
              height={35}
            />
            <Image
              src="/logos/nh_investment.png"
              alt="NH Investment & Securities"
              width={100}
              height={15}
            />
            <Image
              src="/logos/mi_design.png"
              alt="MI Design"
              width={100}
              height={25}
            />
            <Image src="/logos/kidp.png" alt="KIDP" width={100} height={35} />
            <Image src="/logos/nrf.png" alt="NRF" width={100} height={35} />
            <Image src="/logos/iitp.svg" alt="IITP" width={100} height={35} />
            <Image
              src="/logos/sba.svg"
              alt="Seoul Business Agency"
              width={100}
              height={15}
            />
          </div>
        </div>
        <div className="half"></div>
      </div>
      <div className="resources-blank"> </div>
    </>
  );
}
