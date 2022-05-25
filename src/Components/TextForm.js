import React, {useState} from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
  // let wc = 0;
  const [text , setText] = useState('Enter Text here');
  const handleUpCase = () => {
    // console.log('Handle Up Case');
    if(text) {
      setText(text.toLocaleUpperCase()); // to uppercase turns text to upper case
      props.showAlert("Converted to Upper Case" , "success");
    }else {
      props.showAlert('Please Enter some text first' , 'warning');
    }
  };
  const handleLoCase = () => {
    if(text) {
      setText(text.toLowerCase()); // to uppercase turns text to lower case
      props.showAlert("Converted to Lower Case" , "success");
    }else {
      props.showAlert('Please Enter some text first' , 'warning');
    }
  };

  const handleClearText = () => {
    if(text) {
      setText(""); // to clear text
      props.showAlert("Text Cleared!" , "success");
    }else {
      props.showAlert('Please Enter some text first' , 'warning');
    }
  };
  
  const handleCopyText = () => { // to copy text to clipboard
    if(text) {
      var temptext = document.querySelector('#exampleFormControlTextarea1');
      temptext.select();
      navigator.clipboard.writeText(temptext.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard!" , "success");
    }else {
      props.showAlert('Please Enter some text first' , 'warning');
    }
  };

  const handleExtraSpaces = () => {
    // to remove extra spaces from text
    if(text) {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
  
      props.showAlert("Extra spaces removed" , "success");
    }else {
      props.showAlert('Please Enter some text first' , 'warning');
    }
  };


  const handleOnChange = (event) => {
    // console.log('Change detected');
    /*
      by event.target.value we are constantly changuing value of text using setText by constantly calling handleOnChange functions -- We will be using this a lot
    */
    setText(event.target.value);
  };

  // const wordCountFunc = () => {
  //   const tempArr = text.split(" ");
  //   while(tempArr.includes("")) {
  //     tempArr.splice(tempArr.indexOf("") , 1);
  //   }

  //   return tempArr.length;
  // };

  // const timecount = () => {
  //   let time = text.split(' ').length * 0.003;
  //   if(time < 1 && time > 0) {
  //     time *= 60;
  //     Math.round(time);
  //   }else {
  //     Math.round(time);
  //   }

  //   return time;
  // }
  return (
      <>
        <div className={`mb-3 text-${props.mode?'light':'dark'}`}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            
            <button disabled = {text.length === 0} className={`btn btn-${props.mode?'light':'dark'} my-4 mx-2`} onClick={handleUpCase}>Convert to UpperCase</button>
            <button disabled = {text.length === 0} className={`btn btn-${props.mode?'light':'dark'} my-4 mx-2`} onClick={handleLoCase}>Convert to LowerCase</button>
            <button disabled = {text.length === 0} className={`btn btn-${props.mode?'light':'dark'} my-4 mx-2`} onClick={handleClearText}>Clear Text</button>
            <button disabled = {text.length === 0} className={`btn btn-${props.mode?'light':'dark'} my-4 mx-2`} onClick={handleCopyText}>Copy Text</button>
            <button disabled = {text.length === 0} className={`btn btn-${props.mode?'light':'dark'} my-4 mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container mb-3 text-${props.mode?'light':'dark'}`}>
        <h1 className="my3">TEXT SUMMARY</h1>
            <p className="wordCount">{text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length} words</p>
            <p className="charCount">{text.length} characters</p>
            <p className="spaceCount">Average reading time : {text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length* 0.008} minutes</p>
        </div>
        <div className={`container mb-3 text-${props.mode?'light':'dark'}`}>
          <h2 className='my-2'>Preview</h2>
          <p>{text}</p>
        </div>
      </>
  )
}

TextForm.prototype = {
    heading : PropTypes.string.isRequired
};

TextForm.defaultProps = {
    heading : "Enter Text"
}