import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import Js from '/public/javaScript.png'
import DB from '/public/db.png'
import user1 from '/public/user1.png'
import user2 from '/public/user2.png'
import user3 from '/public/user3.png'
import user4 from '/public/user4.png'
import user5 from '/public/user5.png'
import user6 from '/public/user6.png'

export const testimonial = [
    {
        img_url: user1,
        name: 'Esther Howard',
        date: '12:15 PM · May 19, 2009',
        email: '@esther',
        message: 'This course was the perfect introduction to the world of computer science. The lessons were clear and engaging'
    },
    {
        img_url: user2,
        name: 'Leslie Alexander',
        date: '9:15 AM · Jan 19, 2010',
        email: '@leslie',
        message: 'I’ve always been intimidated by computer science, but this course made it accessible and easy to understand.'
    },
    {
        img_url: user3,
        name: 'Wade Warren',
        date: '5:15 PM · Feb 19, 2009',
        email: '@wadewarren',
        message: 'I had no prior experience in programming, but this course made everything feel so approachable. The practical'
    },
    {
        img_url: user4,
        name: 'Jacob Jones',
        date: '9:15 PM · Feb 27, 2008',
        email: '@jacobjones',
        message: `I really enjoyed how the course broke down complex topics into manageable lessons. The instructor made it fun`
    },
    {
        img_url: user5,
        name: 'Courtney Henry',
        date: '1:15 PM · April 17, 2009',
        email: '@henry',
        message: `as someone new to coding, I found this course extremely helpful. The lessons were clear, and the pace was.`
    },
    {
        img_url: user6,
        name: 'Darrell Steward',
        date: '7:15 PM · May 11, 2007',
        email: '@steward',
        message: `I loved how this course broke down difficult computer science topics into bite-sized, understandable lessons. `
    },
]

export const learn = [
    {
        name: 'HTML',
        link: '#html'
    },
    {
        name: 'CSS',
        link: '#css'
    },
    {
        name: 'JavaScript',
        link: '#js'
    },
    {
        name: 'Reactjs',
        link: '#reactjs'
    },
    {
        name: 'React Hooks',
        link: '#reacthooks'
    },
    {
        name: 'TypeScript',
        link: '#typescript'
    },
    {
        name: 'Python',
        link: '#python'
    },
    {
        name: 'SQL',
        link: '#sql'
    },
]

export const company = [
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Career',
        link: '#career'
    },
    {
        name: 'Pricing',
        link: '#pricing'
    },
    {
        name: 'Support',
        link: '#support'
    },
    {
        name: 'FAQs',
        link: '#faqs'
    },
]

export const social_media = [
    {
        icon: <FaLinkedin size={25} />
    },
    {
        icon: <FaFacebookSquare size={25} />
    },
    {
        icon: <FaGithubSquare size={25} />
    },
    {
        icon: <FaSquareUpwork size={25} />
    },
    {
        icon: <TbBrandFiverr size={25} />
    },
]



export const NavLinks = [
    {
        name: 'Courses',
        link: ''
    },
    {
        name: 'Pricing',
        link: ''
    },
    {
        name: 'Log in',
        link: ''
    },
    {
        name: 'Sign up',
        link: ''
    },
]


export const data = [
    {
        name: 'The JavaScript Journey',
        imgUrl: Js,
        class: 'w-full'
    },
    {
        name: 'An introduction to databases',
        imgUrl: DB,
        class: 'w-full pt-6'
    },
]