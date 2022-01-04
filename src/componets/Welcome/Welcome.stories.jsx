import React from "react";
import Welcome from './Welcome'

export default {
    title: 'Welcome',
    component: Welcome
} 

export const WelcomeExample = () => (<Welcome>
                                        <h1 style={{color: '#ffffff', padding: '15px'}}>Welcome</h1>
                                        <div>
                                        </div>
                                    </Welcome>)