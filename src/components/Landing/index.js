import React,{ useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    const [btn, setBtn] = useState(false);

    const refwolverine = useRef(null);

    useEffect(()=>{
        refwolverine.current.classList.add("startingImg");
        setTimeout(()=>{
            refwolverine.current.classList.remove("startingImg");
            setBtn(true);
        },1000)
    },[])
    
    const setLeftImg = () =>{
        refwolverine.current.classList.add("leftImg");
    }

    const setRightImg = () =>{
        refwolverine.current.classList.add("rightImg");
    }

    const clearImg = () =>{
        if(refwolverine.current.classList.contains("leftImg")){
            refwolverine.current.classList.remove("leftImg")
        }else if(refwolverine.current.classList.contains("rightImg")){
            refwolverine.current.classList.remove("rightImg")
        }
    }

    const displayBtn = btn && (
        <>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </>
    )

    return (
        <main ref={refwolverine} className="welcomePage">
            {displayBtn}
        </main>
    )
}

export default Landing
