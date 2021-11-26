import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <section className='sectionGeneral'>
            <h1>Welcome</h1>
            <div>
                <Link to="/Main">Ir a main</Link>
            </div>
        </section>
    )
}

export default WelcomePage
