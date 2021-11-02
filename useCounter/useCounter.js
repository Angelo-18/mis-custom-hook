import React, { useState } from 'react'

export const useCounter = (num=10) => {
    const [counter, setcounter] = useState(num);
    const increment =()=>{
        setcounter(counter+1);
    }
    const decrecrement =()=>{
        setcounter(counter-1);
    }
    const reset =()=>{
        setcounter(num);
    }
    return {
        counter,
        increment,
        decrecrement,
        reset
    };
}
