import React, { useEffect, useState } from 'react'
import axios from "axios";
const Quote = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://programming-quotes-api.herokuapp.com/Quotes/random")
            setAuthor(data.author);
            setQuote(data.en)
        })()
    }, [])

    return (
        <div>
            <div className='max-w-6xl text-2xl font-medium'>"{quote} - {author}"</div>
        </div>
    )
}

export { Quote }