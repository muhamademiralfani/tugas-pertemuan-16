import Button from '../Button';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-container'>
          {/* About Us */}
          <div className='footer-section about-us'>
            <h3>About Us</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>
            <div className='social-icons'>
              <img src='https://img.icons8.com/color/48/000000/linkedin.png' alt='LinkedIn' />
              <img src='https://img.icons8.com/color/48/000000/instagram-new.png' alt='Instagram' />
              <img src='https://img.icons8.com/color/48/000000/facebook-new.png' alt='Facebook' />
              <img src='https://img.icons8.com/color/48/000000/twitter.png' alt='Twitter' />
            </div>
          </div>
          {/* Services */}
          <div className='footer-section services'>
            <h3>Services</h3>
            <ul>
              <li>
                <a href='#'>Web Design/Development</a>
              </li>
              <li>
                <a href='#'>App Development</a>
              </li>
              <li>
                <a href='#'>UI/UX Design</a>
              </li>
              <li>
                <a href='#'>HubSpot Integration</a>
              </li>
              <li>
                <a href='#'>Email Marketing</a>
              </li>
              <li>
                <a href='#'>Website Migration</a>
              </li>
            </ul>
          </div>
          {/* Career */}
          <div className='footer-section career'>
            <h3>Career</h3>
            <div className='career-item'>
              <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='ReactJS Dev' />
              <div>
                <h4>ReactJS Dev</h4>
                <p>1-5 Years of Exp.</p>
              </div>
            </div>
            <div className='career-item'>
              <img src='https://img.icons8.com/color/48/000000/wordpress.png' alt='Wordpress Dev' />
              <div>
                <h4>Wordpress Dev</h4>
                <p>1-5 Years of Exp.</p>
              </div>
            </div>
            <div className='career-item'>
              <img src='https://img.icons8.com/color/48/000000/python.png' alt='Python Developer' />
              <div>
                <h4>Python Developer</h4>
                <p>1-5 Years of Exp.</p>
              </div>
            </div>
          </div>
          {/* Subscribe Us */}
          <div className='footer-section subscribe'>
            <h3>Subscribe Us</h3>
            <p>It is a long established fact that a reader will be distracted by the readable.</p>
            <form action='#'>
              <input type='email' placeholder='Email' />
              <Button />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
