import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

import Image from "next/image";
import PostHeader from "./post-header";
import classes from "./post.content.module.css";

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)


const PostContent = (props) => {
  const { postData } = props;

  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${postData.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return <SyntaxHighlighter style={atomDark} children={children} language={language}/>
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={postData.title} />
      <ReactMarkdown components={customRenderers}>
        {postData.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
