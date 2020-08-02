import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"
import { Link } from "gatsby"
import mail from '../images/mail_icon.svg'
import github from '../images/github_icon.svg'
import linkedin from '../images/linkedin_icon.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div className={style.socials}>
    <img src={mail} />
    <img src={linkedin}/>
    <img src={github} />
    </div>
    <div className={style.siteNav}>
    <Link className={style.siteLinks} to="#">Home</Link>
    <Link className={style.siteLinks} to="#">Experience</Link>
    <Link className={style.siteLinks} to="#">Projects</Link>
    <Link className={style.siteLinks} to="#">Get in touch</Link>
    <Link className={style.siteLinks} to="#">Resume</Link>
    </div>
  </header>
)

//Icons for: Email, Linkedin , Github

//Home
//Experience
//Projects
//Get in Touch
//Resume

export default Header
