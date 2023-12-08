import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Home = ({ isProfileInfoVisible, toggleProfileInfo }) => {
  const profileInfoRef = useRef(null);

  return (
    <section id="home" className="mb-8">
      {/* Home content goes here */}
      <div className="text-center">
        <img
          src={process.env.PUBLIC_URL + "/images/profile.jpeg"}
          alt="Profile Picture"
          className={`cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out ${
            isProfileInfoVisible ? 'opacity-80' : ''
          }`}
          style={{
            width: '300px',
            height: '350px',
            margin: '60px',
            position: 'absolute',
            top: '100px',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          }}
          onClick={(e) => {
            // Check if the click occurred on the image or the arrows
            const isImageClick = e.target.tagName === 'IMG';

            if (isImageClick) {
              toggleProfileInfo();
            }
          }}
        />

        {/* Add CSSTransition to handle animations */}
        <CSSTransition
          nodeRef={profileInfoRef}
          in={isProfileInfoVisible}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div
            ref={profileInfoRef}
            className="mt-4 profile-info"
            style={{
              opacity: isProfileInfoVisible ? 1 : 0,
              transform: isProfileInfoVisible ? 'translateY(0)' : 'translateY(-2rem)',
              transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
              left: '380px',
              top: '250px',
              position: 'absolute',
            }}
          >
            <p className="text-lg">
              👋 Hello! I'm Navya Chowdary Nelluri, a passionate and driven master's student at Saint Louis University.
            </p>
            <p className="text-lg">
              I am an advocate for continuous learning and innovation. I believe in the power of collaboration and am excited about the prospect of contributing to projects that make a meaningful impact. As you explore my portfolio, you'll discover a blend of theoretical knowledge and practical applications, showcasing my dedication to bridging the gap between academia and industry.
            </p>
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Home;
