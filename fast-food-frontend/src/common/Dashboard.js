import Carousel from 'react-bootstrap/Carousel';
import Fotter from './Footer'
import { FaHandshake } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function UncontrolledExample() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.goehv.de/fileadmin/user_upload/Fotolia_132418871_XL_zugeschnitten.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>We make so many opportunities for you to socialize.</p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">   GET STARTED   </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.interface.ai/content/images/size/w1384/2019/11/10-Reasons-Why-Your-CRM-Needs-AI.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>Attending networking events can provide you with many opportunities to socialize and build professional relationship</p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">   GET STARTED   </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cc-production-uploads-bucket.s3.amazonaws.com/uploads/2021/02/speakers-webinar-1024x373.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>
          Going to a party or gathering with friends can be a fun way to socialize and meet new people.
          </p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">   GET STARTED  </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Fotter/>
    </div>
  );
}

export default UncontrolledExample;