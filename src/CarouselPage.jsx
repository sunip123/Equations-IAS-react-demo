import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCol, MDBRow } from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer className=" mt-4">
      <MDBRow>
        <MDBCol md="12">
          <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <video className="video-fluid d-block" muted autoPlay loop>
                  <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <video className="video-fluid d-block" muted autoPlay loop>
                  <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <video className="video-fluid d-block"  muted autoPlay loop>
                  <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                </video>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CarouselPage;
