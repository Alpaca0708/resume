import { useState,useEffect} from 'react';

const useRWD=()=>{
    const [device,setDevice]=useState("PC");

    const handleRWD = () => {
        if (window.innerWidth <= 650) {
          setDevice("mobile");
        } else if (window.innerWidth <= 868) {
          setDevice("tablet");
        } else {
          setDevice("PC");
        }
    }

    useEffect(()=>{ 
        console.log(123)
        window.addEventListener('resize',handleRWD);
        return(()=>{
            console.log(456)
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return device;
}

export default useRWD;