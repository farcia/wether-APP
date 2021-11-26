import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <section  className='sectionGeneral'>
            <h1>Error 404</h1>
            <div>
                <Link to="/Main">Volver al main</Link>
            </div> 
        </section>
    )
}

export default Error404
