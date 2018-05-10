import React from 'react';
import styles from './index.css';
import {reduxForm} from "redux-form";
import swal from 'sweetalert2';
import Field from "src/components/Field";
import Button from 'src/components/utils/Button';

const bgSrc = require('src/assets/img/subscribeBg.jpg');

let SubscribeSection = ({handleSubmit}) => (
    <div className={styles.SubscribeSection}>
        <div className={styles.SubscribeContainer + " container"} style={{backgroundImage: `url(${bgSrc})`}}>
            <h2>Subscribe</h2>
            <div className={styles.Description}>
                Be notified of updates and investment oppurtunity. We will not spam you.
            </div>
            <form onSubmit={handleSubmit} className={styles.InputContainer}>
                <Field name="email" component="input" type="email" placeholder="Your email"/>
                <Button type="submit" color="#4B4737" backgroundColor="white">Subscribe</Button>
            </form>
        </div>
    </div>
);



  
  const onSubmit = (formData) => {
    if (formData.email) {
      window.analytics.identify(formData.email, formData);
      swal(
        'Subscribed',
        'Thank you for your interest in New Maple Holdings.',
        'success'
      )
    }
  }
  
  
SubscribeSection = reduxForm({form: 'subscribe', onSubmit})(SubscribeSection)

export default SubscribeSection;
