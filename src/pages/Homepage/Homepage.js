import React from 'react'
import { Weather, Time, Focus, GoogleSearch, Quote, Todo } from '../../components';

const Homepage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Weather />
            <div className='h-screen flex justify-center items-center flex-col'>
                <Time />
                <Focus />
                <GoogleSearch />
            </div>
            <div className='flex justify-between'>
                <Quote />
                <Todo />
            </div>
        </div>
    )
}

export { Homepage }