import FeaturedPosts from "../Components/home-page/featured-posts";
import Head from "next/head";
import Hero from "../Components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my Blog</title>
        <meta name="description" content="I post about programming and web development"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts}/>
    </>
  );
};

export function getStaticProps () {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      featuredPosts: featuredPosts
    },
    revalidate: 100
  }
}

export default HomePage;
