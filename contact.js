import React from "react"; 
const Contact = () => { 
  return ( 
    <section id="contact" className="contact"> 
      <h2>Contact</h2> 
      <p>If you'd like to get in touch, feel free to reach out to me at:</p> 
      <ul> 
        <li> 
          Email:{" "} 
          <a href="mailto:thiru@gmail.com">thiru@gmail.com</a> 
        </li> 
        <li> 
          LinkedIn:{" "} 
          <a 
            href="https://www.linkedin.com/in/thiru" 
            target="_blank" 
            rel="noopenernoreferrer" 
          > 
            Thiru 
          </a> 
        </li> 
        <li> 
          GitHub:{" "} 
          <a 
            href="https://github.com/thiru.atr" 
            target="_blank" 
            rel="noopenernoreferrer" 
          > 
            Thiru 
          </a> 
        </li> 
      </ul> 
    </section> 
  ); 
}; 
 
export default Contact;