
import "./info.css";

import b from "../../assets/Fpage2.svg";
import login4 from "../../assets/Profile.svg";
import p from "../../assets/Fpage1.svg";
export const Content = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1>User Profile and Customization</h1>
        <p>
          Discover meaningful connections with Frek App! Create your unique
          profile and connect with potential matches tailored to your
          preferences. Whether you&apos;re looking for casual chats or something more
          serious, Frek App helps you find the right people. Explore
          personalized suggestions, meet new people, and take control of your
          dating experience. Start your journey today!
        </p>
      </div>
      <div className="content-image">
        <img src={login4} alt="content" />
      </div>
    </div>
  );
};

export const Content1 = () => {
  return (
    <div className="content">
      <div className="content-image2">
        <img src={b} alt="content" />
      </div>
      <div className="content-text">
        <h1>
          Inspire Connections: Share and Discover Dating Stories on Frek App
        </h1>
        <p>
          Our social dating platform, Inspire Connections, on Frek App! Discover
          user profiles, dating stories, and meaningful connections. Share your
          experiences, get inspired by others, and let’s inspire each other to
          make genuine connections!
        </p>
      </div>
    </div>
  );
};
export const Content2 = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1>Connect with Others: Meet and Date on Frek App</h1>
        <p>
          With Connect with Others on Frek App! View the profiles of potential
          matches, connect through messaging, and start meaningful
          conversations. Meet new people, go on dates, and build connections
          with like-minded individuals. Dating is better when you connect!
        </p>
      </div>

      <div className="content-image3">
        <img src={p} alt="content" />
      </div>
    </div>
  );
};
