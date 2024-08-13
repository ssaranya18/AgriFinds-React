import React,{useEffect} from 'react';
import './ContactForm.css';
import Footer from './Footer';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaInfoCircle, FaCommentDots, FaImage, FaSeedling, FaLocationArrow } from 'react-icons/fa';
import { FaLocationCrosshairs, FaLocationDot, FaMessage } from 'react-icons/fa6';


const ContactForm = () => {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="contact-containernew">
        <section className='imagecontact'>
            <div className='image-contentc'>
                <h1>Contact Us</h1>
            </div>
        </section>
      <div className="contact-form">
        
        <form>
          <div className="form-group">
            <label htmlFor="firstName"><FaUser/> First Name*</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName"><FaUser/> Last Name*</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>

          <div className="form-group">
            <label htmlFor="email"><FaEnvelope/> Email*</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber"><FaPhone/> Contact Number*</label>
            <input type="tel" id="contactNumber" name="contactNumber" />
          </div>

          <div className="form-group">
            <label htmlFor="address"><FaLocationArrow/> Address*</label>
            <input type="address" id="address" name="address" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject"><FaMessage/> Subject of Message*</label>
            {/* <input type="text" id="subject" name="subject" required /> */}

            <select
            id="subject"
            name="subject"
            // value={formData.subject}
            // onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership">Partnership</option>
            <option value="Feedback">Feedback</option>
          </select>
          </div>

          <div className="form-group">
            <label htmlFor="message"><FaMessage/> Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <center>
          <button type="submit" className="submit-btn">Submit</button>
          </center>
        </form>
      </div>
      </div>

      {/* <div className="contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Address:</strong> </p>
        <p><strong>Email:</strong> <a href="">office@hardinghamfarms.co.uk</a></p>
        <div className="map">
          
        </div>
      </div> */}
          <Footer/>
    </div>
  );
};

export default ContactForm;
