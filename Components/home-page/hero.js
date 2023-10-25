import Image from "next/image"
import classes from './hero.module.css'
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/myphoto.jpg" alt="An image showing me" width={300} height={300}/>
            </div>
            <h1>Hi, I'm Max</h1>
            <p>
                I blog about web development - especially frontend frameworks like React
            </p>
        </section>
    )
}

export default Hero