import React from 'react';

const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div>
        <p>
          {contactTitle}: {contactValue}
        </p>
      </div>
    );
  };

  export default Contact;