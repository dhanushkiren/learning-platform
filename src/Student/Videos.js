//Videos.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import "./videos.css"; // Import CSS file for Header styles
import vid from "./assests/video.mp4";
// Import videos

const Videos = () => {
  return (
    <div className="col-10">
      <h2>Videos Page</h2>
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Card className="video-card">
            <Card.Body>
              <Card.Title>Video 1</Card.Title>
              <Card.Text>
                <video controls>
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
      {/* Add more card elements for additional videos */}
    </div>
  );
};

export default Videos;