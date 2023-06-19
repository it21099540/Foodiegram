import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookSquare ,FaTwitter,FaLinkedinIn} from "react-icons/fa";
import { AiOutlineGoogle,AiOutlineInstagram,AiFillGithub } from "react-icons/ai";

function Fotter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                YumYelp Company (PVT) Limited
              </h6>
              <p>
              We are a group of SLIIT students in our third year and the application developed for the PAF as Food reviewing. Our group no is PAF/2023/116.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Team Members</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Dewmini Abeywardhana
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Achini Palliyaguru
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kaushalya Sewwandi
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Thamiru Yasith
                </a>
              </p>
            </MDBCol>

          

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                SLIIT, Malabe
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Yumyelp.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Fotter;