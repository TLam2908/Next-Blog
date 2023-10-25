import Head from "next/head"
import PostContent from "../../Components/posts/post-detail/post-content"
import { getPostData, getPostFiles } from "../../lib/posts-util"

const PostDetailPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.postData.title}</title>
                <meta name="description" content={props.postData.excerpt}/>
            </Head>
            <PostContent postData={props.postData}/>
        </>
        
    )
}

export function getStaticProps(context) {
    const {params} = context
    const {slug} = params

    const postData = getPostData(slug)
    return {
        props: {
            postData: postData
        },
        revalidate: 100
    }
}

export function getStaticPaths () {
    const postFilenames = getPostFiles()
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map((slug) => ({params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage