import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "This is a work in progress so there's not much functionality :C",
  description:
    "This website will act as a place for me to produce content in place of other social media platforms.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  // {
  //   title: "Featured post",
  //   date: "Nov 12",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   image: "https://source.unsplash.com/random",
  //   imageText: "Image Text",
  // },
  // {
  //   title: "Post title",
  //   date: "Nov 11",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   image: "https://source.unsplash.com/random",
  //   imageText: "Image Text",
  // },
];

const posts = [post1, post2, post3];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        {/* <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" posts={posts} />
        </Grid> */}
      </main>
    </React.Fragment>
  );
}
