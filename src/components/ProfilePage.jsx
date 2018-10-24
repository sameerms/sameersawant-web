import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Work, Camera, Face, Info } from "@material-ui/icons";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../Mkomponenter/Header/Header.jsx";
import Footer from "../Mkomponenter/Footer/Footer.jsx";

import GridContainer from "../Mkomponenter/Grid/GridContainer.jsx";
import GridItem from "../Mkomponenter/Grid/GridItem.jsx";
import HeaderLinks from "../Mkomponenter/Header/HeaderLinks.jsx";
import NavPills from "../Mkomponenter/NavPills/NavPills.jsx";
import Parallax from "../Mkomponenter/Parallax/Parallax.jsx";
import SameerPraha from "../assets/img/faces/sam-praha.jpg";
import DevIcone from "../images/devicon.jpg"
import SameerSawant_v1 from "../images/SameerSawant_v1.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "../Mkomponenter/CustomButtons/Button.jsx";



import work2 from "../images/trening.jpg";
import work3 from "../images/hei.jpg"
import work4 from "../images/pp.jpg";
import work5 from "../images/swim.jpg";
import p4 from "../images/SLB.jpg";
import p5 from "../images/Sogeti.png";
import p6 from "../images/cg.jpg";
import p1 from "../images/Skatteetatenlogo.png";
import p3 from "../images/telenor.png";
import p2 from "../images/Helsedirektoratetlogo.jpg";
import p7 from "../images/BlueStar.png";
import frnt from "../images/frnt.jpg";


import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand = "{Dev}"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("../images/codetry_1.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={frnt} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Sameer Sawant</h3>
                      <h6>Fullstack Utvikler</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-codepen"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  <h1>
                    Developer by proffession, coder by heart</h1>
                    Født og oppvokst i India, bosatt i Oslo, Norge.{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Work",
                        tabIcon: Work,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={p1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={p2}
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src={p3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                             
                              <img
                                alt="..."
                                src={p4}
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src={p5}
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src={p6}
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src={p7}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Om meg",
                        tabIcon: Face,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={DevIcone}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Ta Kontakt",
                        tabIcon: Info,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                            <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Fork on Github?"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/sameerms"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="LinkedIn?"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/sameer-sawant-29a2932b/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin fa-5x"} />
          </Button>
        </Tooltip>
      </ListItem>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Epost?"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href= "https://www.linkedin.com/in/sameer-sawant-29a2932b"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-envelop fa-5x"} />
          </Button>
        </Tooltip>
      </ListItem>
                            </GridItem>
                           
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
