import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, setTime] = useState(new Date());
    const [userName, setUserName] = useState(localStorage.getItem("name"))

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(interval)
    }, []);
    const hours = time.getHours();
    const [hh, mm] = time.toLocaleTimeString().split(":");
    const wish = `Good ${(hours < 6 && "night") ||
        (hours < 12 && "morning") ||
        (hours < 17 && "afternoon") ||
        (hours < 22 && "evening") ||
        "night"
        }`;
    const [isEdit, setIsEdit] = useState(false);

    const editHandler = () => {
        setIsEdit(true)
    }
    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            setIsEdit(false)
        }
    }
    return (
        <div className='flex justify-center items-center flex-col text-2xl font-bold'>
            <div className='flex justify-between'>
                <h1 className='mr-2'>{wish}, </h1>
                {!isEdit ?
                    <h1 className='mr-2'>{userName}</h1> :
                    <label>
                        <input
                            value={userName}
                            type="text"
                            className="bg-transparent border-b text-center text-2xl focus:outline-none"
                            onChange={(e) => setUserName(e.target.value)}
                            onKeyDown={keyDownHandler} />
                    </label>
                }
                {!isEdit ?
                    <button
                        className=''
                        onClick={editHandler}>
                        <span className="material-icons">
                            edit
                        </span>
                    </button> :
                    <button onClick={() => setIsEdit(false)} >
                        <span className="material-icons">save</span>
                    </button>}

            </div>
            <p>{hh} : {mm}</p>
        </div>
    )
}

export { Time }