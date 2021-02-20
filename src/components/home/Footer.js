import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Col = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

function Footer(props) {
  const classes = useStyles();
  const { description, title, social } = props;

  return (
    <footer className={classes.footer}>
      <Row>
        <Col>
          {social.map((network) => (
            <Link
              target="_blank"
              display="block"
              variant="body1"
              href={network.url}
              key={network.name}
            >
              <Row>
                <Grid item>
                  <network.icon />
                </Grid>
                <Grid item>{network.name}</Grid>
              </Row>
            </Link>
          ))}
        </Col>
        <Col>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Col>
        <Col />
      </Row>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;
