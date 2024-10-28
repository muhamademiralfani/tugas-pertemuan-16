import '../About/about.css';
import AboutBreadcrumb from './AboutBreadcrumb';
import HeroAbout from '../About/HeroAbout';

const About = () => {
  return (
    <div className='about-container'>
      <AboutBreadcrumb />
      <HeroAbout />
    </div>
  );
};

export default About;
