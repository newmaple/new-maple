import React from "react";
import {reduxForm} from "redux-form";
import cn from "classnames";

import Field from "src/components/Field";

import styles from "./index.css";

const Header = () => (
  <div className={styles.Header}>
    <div className={cn("container", styles.HeaderContent)}>
      <div className={styles.Title}>Contact Us</div>
      <div className={styles.Subtitle}>
        Have questions about the cannabis world?
      </div>
    </div>
  </div>
);


const Input = props => (
  <input {...props} className={styles.Input} />
)

const TextArea = props => (
  <textarea rows={6} {...props} className={styles.Input} />
)

let ContactUsForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit} className={styles.ContactUsForm}>
    <div className={styles.Title}>Send us a message</div>
    <Field name="name" placeholder="Full name" component={Input} /> 
    <Field name="phone" placeholder="Phone number" component={Input} />
    <Field name="email" placeholder="you@email.com" component={Input} /> 
    <Field name="message" placeholder="Your message" component={TextArea} />
    <button className={styles.Button} type="submit">SEND</button>
  </form>
);

ContactUsForm = reduxForm({form: 'contact-us'})(ContactUsForm)

const ContactUsDetails = () => (
  <div className={styles.ContactUsDetails}>
    <div className={styles.Title}>Our contact details</div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>INVESTOR ENQUIRIES</div>
      <div className={styles.Detail}>Email: hello@newmaple.ca</div>
      <div className={styles.Detail}>Phone: 020 3308 9800</div>
    </div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>GENERAL ENQUIRIES</div>
      <div className={styles.Detail}>Email: info@newmaple.ca</div>
    </div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>MEDIA ENQUIRIES</div>
      <div className={styles.Detail}>Email: press@newmaple.ca</div>
    </div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>OUR OFFICE</div>
      <div className={styles.Detail}>Number 1 office block</div>
      <div className={styles.Detail}>0 Bowling Green Lane</div>
      <div className={styles.Detail}>ZIP C0DE, City.</div>
    </div>
  </div>
);

const ContactUs = () => (
  <div className={styles.ContactUs}>
    <Header />
    <div className={cn("container", styles.ContactUsContainer)}>
      <ContactUsForm />
      <ContactUsDetails />
    </div>
  </div>
);

export default ContactUs;
