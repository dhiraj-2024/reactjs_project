import React from 'react'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); //replace your access kye

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section className='Contact'>
      <div className="contact_section">
        <div className="container_first">
          <h1>Contact Us</h1>
          <p><span className='span2'>Address: </span>"Chh.Sambhajinagar 431001,Maharashtra,India"</p>
          <p><span className='span2'>Phone: </span>99345699**</p>
          <p><span className='span2'>Email: </span><a href="mailto:info@example.com">gymnazien_support@gmail.com</a></p>

        </div>

        <div className="container_second">
          <form onSubmit={onsubmit}>
            <div className='input_box'>
              <label className='lable_contact'>Name<span className='span1'>*</span></label>
              <input type="text" placeholder='Enter Your Name' name='Name' required />
            </div>
            <div className='input_box'>
              <label className='lable_contact'>Email<span className='span1'>*</span></label>
              <input type="email" placeholder='Enter Your Email' name='Email' required />
            </div>
            <div className='input_box'>
              <label className='lable_contact'>Message<span className='span1'>*</span></label>
              <input type="text" placeholder='Enter Message' name='Message' required />
            </div>
            <button class="button-87" role="button" type='submit'>Submit</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
