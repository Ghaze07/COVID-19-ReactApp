import React from 'react'
import { useSpring, animated } from 'react-spring';

import covid from './images/covid.svg';

 const Fade = () => {

     const props = useSpring({x:100, from: {x: 0}});
    return (

        
        <animated.svg strokeDashoffset ={props.x}>
            
            <path d={covid}/>
        
        </animated.svg>
       
    )
           
                
}
       
    


export default Fade;