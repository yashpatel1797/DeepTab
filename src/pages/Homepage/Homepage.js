import React from 'react'
import { Weather, Time, Focus, GoogleSearch } from '../../components';

const Homepage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Weather />
            <div className='h-screen flex justify-center items-center flex-col'>
                <Time />
                <Focus />
                <GoogleSearch />
            </div>
        </div>
    )
}

export { Homepage }