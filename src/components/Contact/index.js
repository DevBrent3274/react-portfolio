import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_ck8jhs4', form.current, 'i7gNbbeVUA9lqrmIP')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return(
    <>
      <div className="container home-page">
        <div className="text-area">
          <h1>Contact Me</h1>
          <p>I would like to hear from you about any oportunities.  
             If you would like to reach me, please fill out and submit this 
             form and I will get back to you.  Thanks.
          </p>
          <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='conatct-info'>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className='conatct-info'>
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li className='conatct-info'>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea name="message "placeholder="Message" required></textarea>
                </li>
                <li>
                  <input type="submit" className='submit-button' value="Send"></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
     
      </div>
    </>

  )
}

export default Contact