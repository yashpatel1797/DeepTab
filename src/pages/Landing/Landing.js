import React, { useState } from 'react'
const Landing = () => {
    const [userName, setUserName] = useState("");
    const continueHandler = () => {
        localStorage.setItem("name", userName)
        window.location.reload(false)
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl mb-6'>Hello What is your name?</h1>
            <input
                type="text"
                value={userName}
                className="bg-transparent border-b text-center text-4xl focus:outline-none py-3"
                onChange={(e) => setUserName(e.target.value)} />
            <button className='p-3 text-2xl m-2 rounded-full bg-inherit hover:bg-slate-500' onClick={continueHandler}>Continue</button>
        </div>
    )
}

export { Landing }