import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Net from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

const Welcome = ({ children }) => {
    
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    //console.log("Este es myRefDiv:", myRefDiv.current)
    useEffect(()=>{
        //console.log("Este es myRefDiv 2:", myRefDiv.current)

        if(!vanta) {
            setVanta(Net({
                THREE,
                el: myRefDiv.current,
                points: 15.00,
                maxDistance: 27.00,
                spacing: 17.00
            }))
            //console.log('Vanta se está dibujando')
        }
        //detener el efecto al salir de la pantalla 90(des asociar todos los recursos)
        return () => {
            if(vanta) {
                vanta.destroy()
                //console.log('libero los recursos')
            }
        }
    }, [vanta])

    return (
        <section className='sectionGeneral' ref={myRefDiv}>
            {children}
        </section>
    )
}

Welcome.propTypes = {
    children: PropTypes.node.isRequired
}

export default Welcome
