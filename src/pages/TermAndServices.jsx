
import "./termCondition.css";
// import pandp from "../../assets/pandp.png";
import Footer2 from "../compontent/Footer/Footer2";
import Navbar from "../compontent/Navbar/Navbar";
import {  Banner5 } from "../compontent/Banner/Banner";
const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: `
    By accessing or using the services provided by Frek App LLC ("Company", "we", "us", or "our"), you agree 
to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you 
may not access our services.
    `,
   
  },
  {
    title: "2. Description of Service",
    content: `
      Frek App LLC offers an innovative platform that brings together users from across the globe, allowing 
them to engage in live streaming and share gifts in real-time. The app enables users to connect with 
friends, make new acquaintances, and participate in interactive experiences, all while sending 
meaningful gifts to enhance their social interactions. Whether for celebrating milestones or simply 
sharing a special moment, Frek App LLC facilitates seamless connections and global engagement in an 
exciting and joyful way.
    `,
 
   
  },
  {
    title: "3. User Accounts",
    content: `
3.1. You may be required to create an account to use certain features of our service. You are responsible 
for maintaining the confidentiality of your account and password.
    `,
    subContent: `
3.2. You agree to provide accurate, current, and complete information during the registration process 
and to update such information to keep it accurate, current, and complete.
    `,

   
  },
  {
    title: "4. User Conduct",
    content: `
    You agree not to use the service to:
    `,
   
    subPoints: [
      "Violate any laws or regulations",
      "Infringe on the rights of others",
      "Transmit any harmful or disruptive code",
      "Impersonate any person or entity",
      "Interfere with the operation of the service",
    ],
   
  },
  {
    title: "5. Intellectual Property",
    content: `
     The service and its original content, features, and functionality are owned by Frek App LLC and are 
protected by international copyright, trademark, patent, trade secret, and other intellectual property or 
proprietary rights laws.
    `,
  },
  {
    title: "6. Termination",
    content: `
      We may terminate or suspend your account and bar access to the service immediately, without prior 
notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including 
but not limited to a breach of the Terms
    `,
  },
  {
    title: "7. Limitation of Liability",
    content: `
      In no event shall Frek App LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be 
liable for any indirect, incidental, special, consequential or punitive damages, including without 
limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or 
use of or inability to access or use the service.
    `,
  },
  {
    title: "8. Changes to Terms",
    content: `
     We reserve the right to modify or replace these Terms at any time. We will provide notice of any 
significant changes by posting the new Terms on this page.
    `,
  },
  {
    title: "9. Contact Us",
    content: `
      If you have any questions about these Terms, please contact us at the thefrekappllc.@gmail.com
    `,
  },
 
];

const TermAndServices = () => {
  return (
    <>
      <Navbar />
      <Banner5 />
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

export default TermAndServices;
