import {useEffect, useState} from 'react'


const JOKELIST = ["Pls use Arch :(", "Linux is cool", "Vim is your source of life",
    "First few months of Arch is Hell, trust the process!!!", "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=n6Hwyq50YWc", "Yes CLI is very important for web challenges",
    "Tree of knowledge", "'BI in powerBI does not stand for Biology', I wonder what does it stand for?",
    "'It takes 20 years to build a reputation and a few minutes of cyber-incident to ruin it.'-Stephane Nappo",
    "'One of the main cyber-risks is to think they don't exist. The other is to try to treat all potential risks.'-Stephane Nappo",
    "DDOS", "Don't try to bruteforce", "Lang-era"
]
export function FooterHere(){
    const [quote, changeQuote] = useState("Hi there")
    useEffect(()=>{
        const dataLength = JOKELIST.length
        changeQuote(JOKELIST[Math.floor(Math.random()*dataLength)])
    }, [])

    return(
        <>
        <footer>
            <i>{quote}</i>
            <a href="https://ctftime.org/team/407537/">TimeCTF</a>
            <p>Hack with us!</p>
        </footer>
        </>
    )
}