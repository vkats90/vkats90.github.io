import { useContext, useEffect } from 'react'
import BackgroundImage from '../assets/Homepage-bg2.jpg'
import MainButton from '../components/mainBotton'
import SecondaryButton from '../components/secondaryButton'
import { useNavigate } from 'react-router-dom'
import { InView } from 'react-intersection-observer'
import HighlightCard from '../components/highlight'
import { ViewContext } from '../App'
import { faGrav } from '@fortawesome/free-brands-svg-icons'
import { faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Gallery from '../components/gallery'

const highLightsData = [
  {
    title: '3 years of FrontEnd Development',
    text: "I've built and maintained dynamic web applications used by hundreds of users weekly.",
    link: '/projects',
    icon: faCode,
  },
  {
    title: 'Self taught survivor',
    text: "I've self taught myself Full Stack Development by completing the Full Stack Open Online Course from the University of Helsinki and the freeCodeCamp online course.",
    link: '/resume',
    icon: faGrav,
  },
  {
    title: '5 years of e-commerce management',
    text: "I've been managing e-commerce operations for 4 years, including inventory management and automated processes.",
    link: '/resume',
    icon: faBriefcase,
  },
]

const Home = () => {
  const navigate = useNavigate()
  const { setInView } = useContext(ViewContext)

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="z-0 h-full pb-80">
      <InView rootMargin="-100px 0px" onChange={(inView) => (inView ? setInView(!inView) : '')}>
        <div className="relative h-[100vh]">
          <img
            src={BackgroundImage}
            className="absolute top-0 right-0 h-[100vh] max-w-fit z-0 opacity-40 lg:opacity-70"
          />
          <div className="relative z-10 w-fit md:left-[15%] top-[40%] text-center m-auto md:m-0">
            <h1 id="outer">
              <h1
                id="inner"
                className="effect-shine md:text-7xl text-4xl md:my-6 my-2 text-black font-Bebas"
              >
                VLADIMIR KATS
              </h1>
            </h1>
            <p className="md:text-4xl text-xl text-primary font-regular font-Glory [text-shadow:_0_2px_0_rgb(1px_0_0_/_40%)]">
              A FULL STACK SOFTWARE DEVELOPER
            </p>
            <div className="flex md:flex-row flex-col gap-4 mt-8 w-full justify-center items-center ">
              <MainButton onClick={() => navigate('/contact')} text="CONTACT" />
              <SecondaryButton onClick={() => navigate('/resume')} text="RESUME" />
            </div>
          </div>
        </div>
      </InView>
      <InView rootMargin="-100px 0px" onChange={(inView) => (inView ? setInView(inView) : '')}>
        {({ inView: inView1, ref: ref1 }) => (
          <div
            id="summary"
            ref={ref1}
            className={` top-[85%] text-center  md:mt-36 mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView1 ? 'opacity-1' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            <h1 className="text-3xl md:text-5xl my-16 font-Bebas">Summary</h1>
            <p className="relative p-5 text-lg text-left z-10 text-gray-700">
              Passionate and driven web developer with a strong foundation in full-stack development
              and a proven track record in e-commerce and operations management. With hands-on
              experience in Frontend and Backend development using the latest technologies such as
              TypeScript, React.js, GraphQL, Node.JS and MongoDB, I have built and maintained
              dynamic web applications, including an interactive game portal and an inventory
              management API. My background in automating processes with VBA macros sparked my
              interest in web development, leading me to a 2 year journey of self-learning
              completing the Full Stack Open Online Course from the University of Helsinki and the
              freeCodeCamp online course. I am eager to bring my skills in modern web development to
              a forward-thinking team, where I can contribute to building innovative solutions and
              driving digital growth. Let's connect and explore how I can add value to your company.
            </p>
          </div>
        )}
      </InView>
      <div className="w-full h-0.5 bg-gray-200 mt-16"></div>
      <InView rootMargin="-100px 0px">
        {({ inView: inView2, ref: ref2 }) => (
          <div
            ref={ref2}
            id="highlights"
            className={`  text-center mt-16 md:mt-36 mx-auto max-w-[90%] md:max-w-[70%]  overflow-hidden transition duration-500 ease-in ${
              inView2 ? 'opacity-1' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            <h1 className="text-3xl md:text-5xl mt-8 mb-16 md:mb-36 font-Bebas">Highlights</h1>
            <div className="flex flex-wrap justify-center gap-5">
              {highLightsData.map((highlight, index) => (
                <HighlightCard
                  key={'highlight' + index}
                  title={highlight.title}
                  text={highlight.text}
                  link={highlight.link}
                  icon={highlight.icon}
                />
              ))}
            </div>
          </div>
        )}
      </InView>
      <div className="w-full h-0.5 bg-gray-200 mt-16"></div>
      <InView rootMargin="-100px 0px">
        {({ inView: inView3, ref: ref3 }) => (
          <div
            ref={ref3}
            id="bonus"
            className={` text-center  md:mt-36 w-full  mx-auto max-w-[90%] md:max-w-[50%]  overflow-hidden transition duration-500 ease-in ${
              inView3 ? 'opacity-1' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            <h1 className="text-3xl md:text-5xl my-16 font-Bebas">Other Interests</h1>
            <p className="text-gray-700 my-16 text-start text-lg">
              I am an avid photographer with a keen interest in capturing nature and product images.
              This hobby has honed my skills in using Adobe Suite, fueling my passion for creating
              visually appealing and professional images. See some examples below:
            </p>
            <Gallery />
          </div>
        )}
      </InView>
    </div>
  )
}

export default Home
