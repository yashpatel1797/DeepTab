import React from 'react'

const GoogleSearch = () => {
    return (
        <div>
            <form method="get" action="https://www.google.com/search" name="searchform">
                <input name="sitesearch" type="hidden" />
                <input
                    type="text"
                    name="q"
                    className="bg-transparent border-b text-center text-4xl focus:outline-none py-3"
                    placeholder="Google search" />
                <button type="submit"><span className="material-icons">
                    search
                </span></button>
            </form>
        </div>
    )
}

export { GoogleSearch }