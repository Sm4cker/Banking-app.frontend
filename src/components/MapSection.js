import React from 'react';
import '../pages/StyleSheet/Contact.css';

const MapSection = () => {
  return (
    <div className="map-section">
      <h3>Our Location</h3>
      {/*Map embed can be replaced*/}
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Company Location"
      ></iframe>
    </div>
  );
};

export default MapSection;
