import { useState } from 'react';
import '../components/Contact.css';
import emailjs from 'emailjs-com'

function Contact () {
    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        subject:'',
        message:''
    })

    function handleChange (e) {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function userDataSubmit (e) {
        e.preventDefault();
        emailjs.send(
           'service_sqjz9hl',
            'template_3fou5dk',
            formData,
            'gukPvxhTNRZl_Tj2O'
        )
        .then((result)=>{
            console.log(result);
            setFormData({
                firstName:'',
                lastName:'',
                email:'',
                subject:'',
                message:''
            })
        })
        .catch((err)=>{
            console.error(err,'err');
        })

    }

    return (
        <div className='talk__container_bg'>
        <div className='talk__container'>
         <div className='talk__title'><span></span>Let's talk</div>
         <div className='form__container_bg'>
            <form action="" onSubmit={userDataSubmit}>
                <div className='form-container'>
                <div className='name__field'>
                <div className='input__field'>
                    <label htmlFor="firstName">First Name*</label>
                    <div>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                </div>
                <div className='input__field'>
                    <label htmlFor="lastName">Last Name*</label>
                    <div> 
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>
                </div>
                <div className='input__field'>
                    <label htmlFor="email">Email*</label>
                    <div>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className='input__field'>
                    <label htmlFor="subject">Subject</label>
                    <div>
                        <input type="text" name='subject' value={formData.subject} onChange={handleChange} />
                    </div>
                </div>
                <div className='input__field'>
                    <label htmlFor="message">Message</label>
                    <div>
                        <textarea name="message" id="message" value={formData.message} onChange={handleChange} ></textarea>
                    </div>
                </div>
                <div className='sub__send_btn'><button>Send</button></div>
                </div>
            </form>
         </div>
        </div>
        </div>
    )
}
export default Contact;