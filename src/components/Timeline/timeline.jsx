import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
const Timeline = () => {
  return (
    <>
      <br></br>
      <h1 id="Iskustvo">Iskustvo</h1>
      <VerticalTimeline layout="2-columns" className="timeline-container">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#333", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #333" }}
          date=""
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<i className="fa fa-graduation-cap"></i>}
        >
          <h3 className="vertical-timeline-element-title">Obrazovanje</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#333", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #333" }}
          date=""
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<i className="fa fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Poslovno Iskustvo</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#333", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #333" }}
          date="2018-2022"
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<i className="fa fa-graduation-cap"></i>}
        >
          <h3 className="vertical-timeline-element-title">Comtrade ITHS</h3>
          <h4 className="vertical-timeline-element-subtitle">2018-2022</h4>
          <p>Elektro Tehnicar Informacionih Tehnologija</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#333", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #333" }}
          date="2023-sad"
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<i className="fa fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Factoryww Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2023-sad</h4>
          <p>Front End Developer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#333", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #333" }}
          date="2022-sad"
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<i className="fa fa-graduation-cap"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Singidunum Tehnicki Fakultet
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2022-sad</h4>
          <p>Softwarsko Inzenjerstvo</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
