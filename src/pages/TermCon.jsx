
import "./termCondition.css";
// import pandp from "../../assets/pandp.png";
import Footer2 from "../compontent/Footer/Footer2";
import Navbar from "../compontent/Navbar/Navbar";
import { Banner2 } from "../compontent/Banner/Banner";
const termsSections = [
  {
    title: "Introduction and Acceptance of Terms",
    content: `
      Welcome to Frek App LLC! These Terms and Conditions ("Terms") outline the rules 
      and regulations for the use of Frek App LLC's Website, located at www.thefrekapp.com.
      By accessing this website or using our services, we assume you accept these Terms.
      Do not continue to use Frek App LLC if you do not agree to all of the Terms stated on this page.
    `,
    subPoints: [
      "These Terms apply to all visitors and users of the service.",
      "Please ensure you understand these Terms before proceeding.",
    ],
  },
  {
    title: "Cookies",
    content: `
      We employ the use of cookies. By accessing Frek App LLC, you agree to use cookies in 
      agreement with Frek App LLC's Privacy Policy.
    `,
    subContent: `
    Most interactive websites use cookies to retrieve user details for each visit. Cookies are used by our 
website to enable certain areas' functionality to make it easier for people visiting our website. Some of 
our affiliate/advertising partners may also use cookies.
  `,
    subPoints: [
      "Cookies help improve user experience.",
      "Third-party advertisers may use cookies.",
    ],
  },
  {
    title: "License",
    content: `
      Unless otherwise stated, Frek App LLC and/or its licensors own the intellectual property 
      rights for all material on Frek App LLC. All intellectual property rights are reserved.
     
      You may access this from Frek App LLC for your own personal use subject to restrictions set in these 
Terms.
    `,
    subPoints: [
      "Republish material from Frek App LLC",
      "Sell, rent, or sub-license material from Frek App LLC",
      "Reproduce, duplicate or copy material from Frek App LLC",
      "Redistribute content from Frek App LLC",
    ],
  },
  {
    title: "User Comments",
    content: `
      Parts of this website offer an opportunity for users to post and exchange opinions and information in 
      certain areas of the website. Frek App LLC does not filter, edit, publish, or review Comments prior to 
      their presence on the website. Comments do not reflect the views and opinions of Frek App LLC, its 
      agents, and/or affiliates.
    `,
    subContent: `
      Frek App LLC reserves the right to monitor all Comments and to remove any Comments which can be 
      considered inappropriate, offensive, or cause breach of these Terms.
    `,
    subPoints: [
      "You are entitled to post Comments on our website and have all necessary licenses and consents to do so.",
      "The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party.",
      "The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy.",
      "The Comments will not be used to solicit or promote business, custom, or present commercial activities or unlawful activity.",
    ],
    lastPoint: `
      You hereby grant Frek App LLC a non-exclusive license to use, reproduce, edit, and authorize others to 
      use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
    `,
  },
  {
    title: "Hyperlinking to our Content",
    content: `
      Organizations may link to our Website without prior written approval if they meet certain conditions. 
      Please contact us for more information.
    `,
  },
  {
    title: "Content Liability",
    content: `
      We shall not be held responsible for any content that appears on your Website. You agree to protect 
      and defend us against all claims arising from your Website.
    `,
  },
  {
    title: "Privacy",
    content: `
      Please read our Privacy Policy, which also governs your visit to our Website.
    `,
  },
  {
    title: "Reservation of Rights",
    content: `
      We reserve the right to request that you remove all links or any particular link to our Website. We also 
      reserve the right to amend these Terms at any time.
    `,
  },
  {
    title: "Removal of Links",
    content: `
      If you find any link on our Website that is offensive, you are free to contact and inform us. We will 
      consider requests to remove links but we are not obligated to do so or to respond to you directly.
    `,
  },
  {
    title: "Disclaimer",
    content: `
      To the maximum extent permitted by applicable law, we exclude all representations, warranties, and 
      conditions relating to our website and the use of this website.
    `,
  },
  {
    title: "About Frek App LLC",
    content: `
      Frek App LLC provides a unique platform that connects users from around the world who share a 
      passion for sending gifts and engaging in live streaming. Our app allows users to interact with friends 
      and new connections, participate in live streams, and send thoughtful gifts in real-time, creating an 
      interactive and exciting social experience. Whether you're celebrating a special occasion or just looking 
      to share a moment with someone, Frek App LLC makes it easy to connect, engage, and spread joy 
      globally.
    `,
  },
  {
    title: "Account Creation and Security",
    content: `
      Users are responsible for maintaining adequate security and control of their account, including keeping 
      their passwords and personal information safe.
    `,
  },
  {
    title: "Use of Services",
    content: `
      Users can easily access Frek App LLC by downloading the app from the Google Play Store or Apple App 
      Store. After downloading, users can create an account to begin connecting with friends and participating 
      in live streams. Our platform is free to use for basic features, and users can send and receive gifts 
      during live streaming sessions.
    `,
    subPoints: [
      "The only fee we charge is a 10% withdrawal fee for live streamers receiving gifts from their fans. This fee helps support the platform’s maintenance and ensures a smooth user experience.",
      "We have strict guidelines regarding content. Frek App LLC does not permit any explicit or inappropriate content, including nude profile pictures or any form of nudity within live streams, messaging, or posts.",
      "Users are expected to adhere to these guidelines to maintain a safe and respectful environment for all.",
    ],
  },
  {
    title: "Adding Funds",
    content: `
      Frek App LLC supports seamless payments through Stripe, Apple Pay, and select debit cards. Users can 
      link one of these payment methods to their account for easy and secure transactions. Once linked, users 
      can use these methods to purchase gifts for friends and fans during live streams, or to deposit funds into 
      their account. The process is straightforward and secure, providing users with a smooth experience to 
      manage their finances within the platform.
    `,
  },
  {
    title: "Withdrawing Funds",
    content: `
      To withdraw earnings, users can visit their Earnings page, where they can view the funds accumulated 
      from gifts received by fans and friends. Once on this page, users can easily initiate a withdrawal using 
      one of their linked payment methods. The withdrawal process is simple, secure, and ensures that users 
      can access their earnings with ease.
    `,
  },
  {
    title: "Restricted Activities",
    content: `
      Users agree not to engage in activities that violate these Terms, infringe on intellectual property rights, 
      provide false information, engage in potentially fraudulent activities, or misuse the Frek App LLC service.
    `,
  },
  {
    title: "Actions We May Take",
    content: `
      If we believe you've engaged in restricted activities, we may take actions including terminating this 
      agreement, limiting or suspending your account, or refusing to provide services to you.
    `,
  },
  {
    title: "Disclaimer of Liability",
    content: `
      As long as the website and the information and services on the website are provided free of charge, we 
      will not be liable for any loss or damage of any nature.
    `,
  },
];

const TermCon = () => {
  return (
    <>
      <Navbar />
      <Banner2 />
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

export default TermCon;
