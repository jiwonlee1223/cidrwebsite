export default function MainPage() {
  return (
    <>
      {/* 네비게이션 바 레이어 아래에 위치할 배너 컨테이너 */}
      <div className="main-banner">
        <img src="/banner.png" alt="banner" className="banner" />
      </div>

      <div className="page-content">
        {/* 배너 아래 50px 여백 후, 로고 이미지 컨테이너 */}
        <div className="logotypo-container">
          <img src="/logotypo.png" alt="logotypo" className="logotypo" />
        </div>

        {/* 기존의 main-page-container */}
        <div className="main-page-container">
          <div className="half">
          </div>
          <div className="half">
            <div className="text-description-container">
              <span className="text-description">The central research theme of CIDR Lab. can be described as Augmented Design.
                It is a study of augmented objects or systems that enrich human life.
                It also refers to investigating how to augment design with new tools, methods, and perspectives. <br />
                <br />
                The characteristic of design research is the high degree of design realization with the experience prototype before conducting a systematic evaluation.
                In terms of an application domain, the lab focuses more on products or systems that integrate hardware and software, for example, IoT-based connected systems.<br />
                <br />
                Recent projects include Mobile Clinic Module for Making Negative Pressure Isolation Wards, In-Vehicle UX/UI, Smart Homes, and Wearable Robots. The Lab’s design research pursues designing novel artifacts and the knowledge of how design affects people.
                These dual contributions make CIDR Lab. to be a bridge between design practice and research.
              </span>
            </div>
          </div>
        </div>

        <div className="text-title-container">
          <span className="text-title">News</span>
        </div>

        <div className="main-page-container">
          <div className="half">
          </div>
          <div className="half">
            <div className="text-description-container">
              <span className="news-description">DEC / 2024 <br />
                Jiwon Received thr Q-Day Creativity and Talent Education Award </span>
            </div>
            <div>
              <img src="/banner.png" alt="news" className="news-image" />
            </div>

          </div>
        </div>

        <div className="text-title-container">
          <span className="text-title">Course</span>
        </div>

        <div className="main-page-container">
          <div className="half">
            <span className="course-title">Design Research Issues <br /> ID.70001 </span>
          </div>
          <div className="half">
            <div className="text-description-container">
              <span className="text-description">This course offers graduate students majoring in design the opportunity to discuss desirable design research.
                The goal of the course activities is to enhance understanding of design and design research.
                Every week, selected topics and reading materials are used to develop logical writing skills.
                Through short writing exercises and free expression of opinions, students improve their ability to engage in constructive debates.
                Additionally, through the Design Research Anatomy project and the Design Research Taxonomy project,
                students will cultivate the ability to understand the characteristics that make exemplary design research and explore competitive areas in design research.<br /></span>
              <span className="syllabus">Syllabus</span>
            </div>
          </div>
        </div>

        <div className="course-blank"> </div>
        <div className="main-page-container">
          <div className="half">
            <span className="course-title">Interaction Prototyping <br /> ID.20020 </span>
          </div>
          <div className="half">
            <div className="text-description-container">
              <span className="text-description">This interaction prototyping (1D220) course offered in the department of Industrial Design at KAIST aims to provide students with the theoretical and practical electronics and programming background
                to develop an software-hardware hybrid interactive prototypes (also known as physical computing). The course objectives are <br />
                1) to familiarize students with basics of electronics and circuit design,
                2) to introduce student to MicroPython and the Raspberry Pl Pico platform,
                3) to have students complete a prototyping project that requires the integration of both electronics hardware making and software programming. </span>
              <span className="syllabus">Syllabus</span>
            </div>
          </div>
          <div className="course-blank"> </div>
        </div>

        <div className="text-title-container">
          <span className="text-title">Contact Us</span>
        </div>

        <div className="main-page-container">
          <div className="half">
            <span className="course-title">CIDR Lab </span>
          </div>
          <div className="half">
            <div className="text-description-container">
              <span className="text-description">Room 324, Dept. of Industrial Design, KAIST <br />
                291 Daehak-ro, Yuseong-gu, Daejeon 34141 <br />
                Republic of Korea </span>
            </div>
          </div>
        </div>

        <div className="main-page-container">
          <div className="half">
            <span className="course-title">Email </span>
          </div>
          <div className="half">
            <div className="text-description-container">
              <span className="text-description">Prof. Tek-Jin Nam <br />
                tjnam@kaist.ac.kr
              </span>
            </div>
          </div>
          <div className="course-blank"> </div>
        </div>
      </div>

      <img src="/main-footer.png" className="main-footer"></img>
    </>
  );
}
