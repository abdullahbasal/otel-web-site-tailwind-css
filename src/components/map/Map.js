import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ width, height, lat, lng }) {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 18,
  };

  return (
    <div style={{ height: height, width: width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Marker" />
      </GoogleMapReact>
    </div>
  );
}
