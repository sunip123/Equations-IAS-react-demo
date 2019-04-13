import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import VideoBackgroundPage from "./VideoBackgroundPage";
import FeaturesPage from "./FeaturesPage";
import ProjectsPage from "./ProjectsPage";
import FooterPagePro from "./FooterPagePro";
import CarouselPage from "./CarouselPage";

class App extends Component {
  render() {
    return (
      <>
      <VideoBackgroundPage />
      <FeaturesPage></FeaturesPage>
      <CarouselPage></CarouselPage>
      <ProjectsPage></ProjectsPage>
      <FooterPagePro></FooterPagePro>
      </>
    );
  }
}
export default App;
