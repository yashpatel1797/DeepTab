import React, { useEffect, useState } from 'react'

const Focus = () => {
    const [focus, setFocus] = useState("")
    const [focusInput, setFocusInput] = useState("")
    const [focusStatus, setFocusStatus] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("focus")) {
            setFocus(localStorage.getItem("focus"))
            setFocusStatus(localStorage.getItem("focusStatus"))
        }
    }, [])

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            setFocus(focusInput);
            localStorage.setItem("focus", focusInput);
            setFocusInput("")
        }
    }
    const checkboxHandler = (e) => {
        setFocusStatus(e.target.checked)
        localStorage.setItem("focusStatus", e.target.checked)
    }
    const deleteHandler = () => {
        localStorage.removeItem("focus")
        localStorage.removeItem("focusStatus")
        setFocus("")
        setFocusStatus(false)
    }
    return (
        <div className="flex flex-col mt-5 text-4xl font-bold">
            <div>
                <label>
                    What is your main focus for todays?
                </label>
            </div>
            <div className='flex text-2xl justify-center'>
                {!focus && <input
                    type="text"
                    placeholder='Enter Focus'
                    className="bg-transparent border-b text-center text-4xl focus:outline-none py-3"
                    onChange={(e) => setFocusInput(e.target.value)}
                    value={focusInput}
                    onKeyDown={keyDownHandler}
                />}
                {focus && <>
                    <label className={`mr-3 ${focusStatus && "line-through"}`}>
                        <input
                            type="checkbox"
                            className='mr-2'
                            onChange={checkboxHandler} />
                        {focus}
                    </label>
                    <button onClick={deleteHandler}><span className="material-icons">
                        delete
                    </span></button>
                </>}
            </div>
        </div>
    )
}

export { Focus }