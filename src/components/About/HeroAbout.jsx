import aboutImage from '../../assets/about.png';
import aboutHelp from '../../assets/about-help.png';

const HeroAbout = () => {
  return (
    <div className='hero-about-container'>
      <div className='hero-about'>
        <div>
          <img src={aboutImage} height={300} width={500} alt='' />
        </div>
        <div className='about-content'>
          <ul>
            \ <a href=''>About Us</a> \
          </ul>
          <h1>One Of the Fastest Way to Bussiness Growth</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt facere architecto cum sed. Delectus ratione repellendus velit consequuntur aliquid, ad, nulla saepe sit commodi similique fugiat voluptate neque
            illo!
          </p>
          <div className='about-card-help'>
            <img src={aboutHelp} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
