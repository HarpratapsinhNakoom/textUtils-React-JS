import React  from 'react'

export default function About(props) {

    // const [color,setColor] = useState({
    //     backgroundColor : 'white',
    //     color : '#2e2d2d'
    // });

    // const [contentColor , setContentColor] = useState({
    //     backgroundColor : 'whitesmoke',
    //     color : '#474646'
    // });

    // const [bodyColor , setBodyColor] = useState({
    //         width : '100vw',
    //         height : '100vh',
    //         backgroundColor : 'white',
    //         color : '#2e2d2d'
    // });

    // const [btnClass , setBtnClass] = useState('btn btn-dark m-3');
    // const [switchText , setSwitchText] = useState('Dark Mode');

    // const toggleSwitch = document.querySelector('#flexSwitchCheckDefault');

    // const toggleSwitch =() => {

    //     console.log('In toggling');
    //     if(bodyColor.color === '#2e2d2d') {
    //         setBodyColor({
    //             width : '100vw',
    //             height : '100vh',
    //             backgroundColor : '#2e2d2d',
    //             color : 'white'
    //         });
    //         setSwitchText('Light Mode');
    //         setBtnClass('btn btn-light m-3');
    //     }else {
    //         setBodyColor({
    //             width : '100vw',
    //             height : '100vh',
    //             backgroundColor : 'white',
    //             color : '#2e2d2d'
    //         });
    //         setSwitchText('Dark Mode');
    //         setBtnClass('btn btn-dark m-3');
    //     }

    //     if(color.color === '#2e2d2d' ) {
    //         setColor({
    //             color : 'white',
    //             backgroundColor : '#2e2d2d'
    //         });
    //     }else {
    //         setColor({
    //             color : '#2e2d2d',
    //             backgroundColor : 'white'
    //         });
    //     }

    //     if(contentColor.color === '#474646' ) {
    //         setContentColor({
    //             color : 'white',
    //             backgroundColor : '#474646'
    //         });
    //     }else { 
    //         setContentColor({
    //             color : '#474646',
    //             backgroundColor : 'white'
    //         });
    //     }

    // };

  return (
    <>
        {/* <div className="form-check form-switch pt-3 mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onToggle={toggleSwitch}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{switchText}</label>
        </div> */}
        {/* <button type="button" className={btnClass} onClick={toggleSwitch}>{switchText}</button> */}
        <div className={`accordion bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`} id="accordionPanelsStayOpenExample">
            <div className={`accordion-item bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className={`accordion-button collapsed bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Services
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <strong>We provide many services. </strong>TextUtils gives you a way ti analyze your text quickly and efficiently. Be it word count , charavter count or changing text formatting.
                </div>
                </div>
            </div>
            <div className={`accordion-item  bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className={`accordion-button collapsed bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                    <strong>Analyze your text without sparring any penny. </strong>TextUtils is a free character counter tool that provides LIVE character count and word count stats for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limits.
                </div>
                </div>
            </div>
            <div className={`accordion-item  bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className={`accordion-button collapsed bg-${props.mode? "dark" : "light"} text-${props.mode? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Browser Compatibility
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" >
                    <strong>Compatible with almost every browser. </strong>This word counter software works in any broswer such as Chrome , Firefox , Internet Explorer , Safari, Opera etc. It cuits to count character in facebook, blogs , books , excel document, pdfs, essays etc.
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
