import React from "react";
import HeaderContent from "../../layouts/HeaderContent";
import "../../utils/css/curriculumVitae.scss";
import { Row, Col } from "antd";
import profile from "../../static/images/CurriculumVitae/profile.jpeg";
import user from "../../static/images/CurriculumVitae/user.svg";
import email from "../../static/images/CurriculumVitae/email.svg";
import calendar from "../../static/images/CurriculumVitae/calendar.svg";
import calendar2 from "../../static/images/CurriculumVitae/calendar-2.svg";
import phone from "../../static/images/CurriculumVitae/phone.svg";
import pin from "../../static/images/CurriculumVitae/pin.svg";
import website from "../../static/images/CurriculumVitae/website.svg";
import education from "../../static/images/CurriculumVitae/education.svg";
import experience from "../../static/images/CurriculumVitae/experience.svg";
import activities from "../../static/images/CurriculumVitae/activities.svg";

const List = () => {
  return (
    <HeaderContent title="Hồ sơ ứng viên">
      <div className="curriculum-vitae">
        <div className="box-color">
          <div className="red"></div>
          <div className="purple"></div>
          <div className="blue"></div>
        </div>
        <Row gutter={[32, 16]}>
          <Col xs={24} md={24} className="profile">
            <Row gutter={[0, 15]}>
              <Col xs={24} md={7} xl={7}>
                <div className="image-box">
                  <img src={profile} alt="profile" />
                </div>
              </Col>
              <Col xs={24} md={17} xl={17}>
                <p className="name">Nguyễn Văn A</p>
                <p className="job">Marketing Manager</p>
                <Row gutter={[15, 5]}>
                  <Col xs={8} md={8} className="box">
                    <img src={user} alt="" />
                    <p>Male</p>
                  </Col>
                  <Col xs={8} md={8} className="box">
                    <img src={calendar} alt="" />
                    <p>May 19, 1992</p>
                  </Col>
                  <Col xs={8} md={8} className="box">
                    <img src={pin} alt="" />
                    <p>Hanoi, Vietnam</p>
                  </Col>
                  <Col xs={8} md={8} className="box">
                    <img src={phone} alt="" />
                    <p>0987654321</p>
                  </Col>
                  <Col xs={8} md={8} className="box">
                    <img src={email} alt="" />
                    <p>nguyenvana@gmail.com</p>
                  </Col>
                  <Col xs={8} md={8} className="box">
                    <img src={website} alt="" />
                    <p>fb.com/nguyenvana</p>
                  </Col>
                </Row>
                <Col xs={22} md={22}>
                  <p className="short-description">
                    Take advantages of sales skills & experience and
                    understanding of market to become a professional Sales Staff
                    and bring a lot value to Customers. From that, I will
                    contribute to development of CVPRO Company
                  </p>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={25} className="education">
            <Row gutter={[0, 20]}>
              <Col xs={24} md={24}>
                <Row>
                  <Col xs={7} md={7} className="title-box">
                    <p>Education</p>
                    <div className="image-box">
                      <img src={education} alt="" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={7} md={7}>
                <div className="line-box">
                  <div className="line"></div>
                </div>
              </Col>
              <Col xs={15} md={15}>
                <p className="school-name">Foreign trade university</p>
                <p className="branch">Major Corporate Administration</p>
                <div className="box">
                  <img src={calendar2} alt="" />
                  <p>Sep 2007 - Present</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={25} className="experience">
            <Row gutter={[0, 20]}>
              <Col xs={24} md={24}>
                <Row>
                  <Col xs={7} md={7} className="title-box">
                    <p>Experience</p>
                    <div className="image-box">
                      <img src={experience} alt="" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={7} md={7}>
                <div className="line-box">
                  <p>Sep 2017 - Present</p>
                  <div className="line"></div>
                </div>
              </Col>
              <Col xs={15} md={15}>
                <p className="school-name">CVPRO JSC</p>
                <p className="branch">Sale Executive</p>
                <ul>
                  <p>Main responsibilities:</p>
                  <li>
                    <p>
                      - Write and upload product advertising post via Facebook,
                      Fotum,...
                    </p>
                  </li>
                  <li>
                    <p>
                      - Introduce, consults products and answers customers
                      queries via phone and email.
                    </p>
                  </li>
                  <li>
                    <p>- Assist to control goods in and out.</p>
                  </li>
                  <li>
                    <p>- Attend Sales Skill Course in the Company.</p>
                  </li>
                </ul>
                <ul>
                  <p>Recognition and Gains:</p>
                  <li>
                    <p>
                      - Advertising products of the Company to customers
                      affectively contribute to a 20% increase in the number of
                      customers within one month of working.
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={25} className="activities">
            <Row gutter={[0, 20]}>
              <Col xs={24} md={24}>
                <Row>
                  <Col xs={7} md={7} className="title-box">
                    <p>Activities</p>
                    <div className="image-box">
                      <img src={activities} alt="" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={7} md={7}>
                <div className="line-box">
                  <p>Sep 2003 - 2007</p>
                  <div className="line"></div>
                </div>
              </Col>
              <Col xs={15} md={15}>
                <p className="school-name">CVPRO JSC</p>
                <p className="branch">Sale Executive</p>
                <ul>
                  <li>
                    <p>
                      - Write and upload product advertising post via Facebook,
                      Fotum,...
                    </p>
                  </li>
                  <li>
                    <p>
                      - Introduce, consults products and answers customers
                      queries via phone and email.
                    </p>
                  </li>
                  <li>
                    <p>- Assist to control goods in and out.</p>
                  </li>
                  <li>
                    <p>- Attend Sales Skill Course in the Company.</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </HeaderContent>
  );
};

export default List;
