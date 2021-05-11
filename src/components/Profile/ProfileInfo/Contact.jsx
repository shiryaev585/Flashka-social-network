import React from 'react';

const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div>
        <p><strong>{contactTitle}: </strong>{contactValue}</p>
      </div>
    );
  };

  export default Contact;