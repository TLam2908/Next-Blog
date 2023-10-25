import Head from "next/head"
import AllPosts from "../../Components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

const AllPostsPage = (props) => {
    return (
      <>
        <Head>
          <title>All posts</title>
          <meta name="description" content="A list of all programming-related tutorials and posts"/>
        </Head>
         <AllPosts posts={props.allPosts}/>
      </>
       
    )
}

export function getStaticProps () {
  const allPosts = getAllPosts()
  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 60
  }
}

export default AllPostsPage