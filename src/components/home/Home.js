/*
Home.js
The Home component has the following responsibilities.
  - Holding the header and footer
  - Navigation using React Router

Questions
  - Maybe this should be named differently?
  - Where are we going to put default home page content?
    - I guess right here for now
    - Let's default to the blog page
*/

import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// Components
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "../blogs/Blog";
import UnderConstruction from "../shared-components/UnderConstruction";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const sections = [
  { title: "Videos", url: "videos" },
  { title: "Blog", url: "blog" },
  { title: "Podcasts", url: "podcasts" },
  { title: "Travel Plans", url: "travel-plans" },
];

const social = [
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/cHarrington98" },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/carterharington/",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/carter-harrington/",
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="The Lost Maritimer" sections={sections} />
        <Router>
          <Switch>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/podcasts">
              <Podcasts />
            </Route>
            <Route path="/travel-plans">
              <TravelPlans />
            </Route>
            <Route path={["/blog", ""]}>
              <Blog />
            </Route>
          </Switch>
        </Router>
      </Container>
      <Footer
        title="The Lost Maritimer"
        description="Thanks for checking out my website! :)"
        social={social}
      />
    </React.Fragment>
  );
}

function Videos() {
  return UnderConstruction();
}

function Podcasts() {
  return UnderConstruction();
}

function TravelPlans() {
  return UnderConstruction();
}
