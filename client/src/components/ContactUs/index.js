import React from "react";
import swal from 'sweetalert2';
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
    <Field name="email" type="email" placeholder="you@email.com" component={Input} /> 
    <Field name="Message" placeholder="Your message" component={TextArea} />
    <button className={styles.Button} type="submit">SEND</button>
  </form>
);

const onSubmit = (formData) => {
  if (formData.email) {
    window.analytics.identify(formData.email, formData);
    swal(
      'Message sent',
      'Thank you for your interest in New Maple Holdings.',
      'success'
    )
  }
}


ContactUsForm = reduxForm({form: 'contact-us', onSubmit})(ContactUsForm)

const ContactUsDetails = () => (
  <div className={styles.ContactUsDetails}>
    <div className={styles.Title}>Our contact details</div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>INVESTOR ENQUIRIES</div>
      <div className={styles.Detail}>Email: hello@newmaple.ca</div>
    </div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>GENERAL ENQUIRIES</div>
      <div className={styles.Detail}>Email: info@newmaple.ca</div>
    </div>
    <div className={styles.Item}>
      <div className={styles.ItemTitle}>MEDIA ENQUIRIES</div>
      <div className={styles.Detail}>Email: press@newmaple.ca</div>
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
