import "./termCondition.css";

import Footer2 from "../compontent/Footer/Footer2";
import Navbar from "../compontent/Navbar/Navbar";
import {  Banner6 } from "../compontent/Banner/Banner";
const termsSections = [
  {
    title: "Commitment to Safety",
    content: `
      At TheFrekApp, we are committed to ensuring the safety and security of all our users. Our platform strictly enforces policies to prevent child sexual abuse and exploitation (CSAE) and is designed exclusively for adults aged 18 and above.
    `,
  },
  {
    title: "Age Restrictions",
    content: `
    TheFrekApp is strictly for users aged 18 and above.
Users must verify their age during the sign-up process to ensure compliance with this restriction.


    `,
    subContent: `
Any account found to be used by individuals under the age of 18 will be terminated immediately.
  `,
  },
  {
    title: "Content Moderation",
    content: `
We employ a combination of automated tools and human moderators to monitor all user-generated content to prevent inappropriate or harmful material.
Any content that violates our policies or involves CSAE is promptly removed, and the offending user is banned.

    `,
 
  },
  {
    title: "Reporting Mechanism",
    content: `
Users are encouraged to report any behavior or content they find suspicious or in violation of our terms of service.


    `,
    subContent: `
Reports can be made through the in-app reporting feature or by contacting our support team at [support@thefrekapp.com].

    `,

 
  },
  {
    title: "Response to CSAE",
    content: `
      We take reports of CSAE extremely seriously and work closely with law enforcement and child protection agencies to address these issues.

    `,
    subContent: `
Users engaging in CSAE activities are reported to the appropriate authorities and permanently banned from TheFrekApp.


    `,
   

  },
  {
    title: "Privacy and Data Security",
    content: `
  TheFrekApp prioritizes user privacy and data security, ensuring all personal information is handled in compliance with relevant data protection laws.

    `,
    subContent: `We implement strict security measures to protect user data from unauthorized access.
Continuous Improvement
`,
lastpoint: `
Our safety measures are continuously evaluated and updated to maintain the highest standards of user protection.
Feedback from users and safety organizations is welcomed to enhance our practices.
`,

  },
 
];

const ChildPolicySefty = () => {
  return (
    <>
      <Navbar />
      <Banner6 />
      <div className="policy">
        <div className="policy-data">
          <p>Last Updated: 09 January 2025</p>
          <p>
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
          {termsSections.map((section, index) => (
            <div key={index} className="policy-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <p>{section.subcontent}</p>
              {section.subPoints && section.subPoints.length > 0 && (
                <ul className="sub-points">
                  {section.subPoints.map((point, subIndex) => (
                    <li key={subIndex}>{point}</li>
                  ))}
                </ul>
              )}
              {section.lastpoint && <p>{section.lastpoint}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default ChildPolicySefty;
