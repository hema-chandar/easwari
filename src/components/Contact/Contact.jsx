import React from 'react'
import'./Contact.css'
import msg_icon from  '../../assets/msg-icon.png'
import mail_icon from  '../../assets/mail-icon.png'
import phone_icon from  '../../assets/phone-icon.png'
import location_icon from  '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0c059816-a1db-4f73-979d-6546b0e3b506");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send a message <img src={msg_icon} alt="" /></h3>
            <p>Fell free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@Easwari Engineering College</li>
                <li><img src={phone_icon} alt="" />044 4392 3041</li>
                <li><img src={location_icon} alt="" />162, Bharathi Salai, <br/>Ramapuram, Chennai, Tamil Nadu 600089</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='Phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
         </form>
         <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact