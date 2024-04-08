import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faApple,
  faCss3,
  faFigma,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSquareGithub,
  faUbuntu,
  faWindows,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId) // Cleanup function
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p className="text-justified">
            I am a software developer and a master's in applied computer science
            at SRH Hochschule Heidelberg, where I collaborate with faculty
            members on a mobile application project for occupational therapy
            patients. I use my proficiency in React Native, Node.js, and MongoDB
            Cloud to design and implement user-friendly interfaces, as well as
            Figma to create interactive prototypes. I also conduct usability
            testing and gather feedback from both patients and therapists to
            improve the application iteratively. Before joining SRH Hochschule,
            I worked as a freelance software engineer and a front-end software
            developer at Technogrowth Software Solutions Pvt. Ltd. I created web
            applications using React and Angular, enhancing user experience and
            performance with modern technologies and creative skills. I worked
            closely with clients and cross-functional teams to deliver
            high-quality code standards and customized solutions. I am
            passionate about learning and applying new technologies and tools to
            solve real-world problems, as well as competitive programming, which
            challenges me to improve my logical thinking and coding skills.
          </p>
          {/* <h2 className="info-header">Personal Information:</h2> */}
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'P',
                'e',
                'r',
                's',
                'o',
                'n',
                'a',
                'l',
                ' ',
                'I',
                'n',
                'f',
                'o',
                'r',
                'm',
                'a',
                't',
                'i',
                'o',
                'n',
              ]}
              idx={15}
            />
          </h2>
          <div className="personal-info">
            <div className="info-section">
              <div className="personal-info-column">
                <p>
                  <span className="info-label">First Name</span>{' '}
                  <span className="info-text">Virendra</span>
                </p>
                <p>
                  <span className="info-label">Last Name</span>{' '}
                  <span className="info-text">Kadam</span>
                </p>
                <p>
                  <span className="info-label">Contact Number</span>{' '}
                  <span className="info-text">+49 15906385276</span>
                </p>
                <p>
                  <span className="info-label">Nationality</span>{' '}
                  <span className="info-text">Indian</span>
                </p>
              </div>
            </div>
            <div className="info-section">
              <div className="personal-info-column">
                <p>
                  <span className="info-label">Email Address</span>{' '}
                  <span className="info-text">
                    virendra.kadam1111@gmail.com
                  </span>
                </p>
                <p>
                  <span className="info-label">Address</span>{' '}
                  <span className="info-text">
                    U5 16, 68161, Mannheim, Germany
                  </span>
                </p>
                <p>
                  <span className="info-label">Language</span>{' '}
                  <span className="info-text">English, Hindi, Marathi</span>
                </p>
                <p>
                  <span className="info-label">Skype ID</span>{' '}
                  <span className="info-text">YourSkypeID</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner1">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFigma} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faApple} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faSquareGithub} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faUbuntu} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faWindows} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About
