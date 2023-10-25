import Link from "next/link"
import Image from "next/image"
import classes from './post-item.module.css'
const PostItem = (props) => {
    const {title, image, excerpt, date, slug} = props.post
    //image here just file name
    const imagePath =  `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`
    const formatedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem