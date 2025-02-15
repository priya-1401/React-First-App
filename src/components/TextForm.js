import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{backgroundcolor:props.mode==='light'?'dark':'light'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    </div>
     <div className="container my-3" style={{backgroundColor:props.mode==='light'?'dark':'light'}}>
        <h1>The Text Summary</h1>
        <p>The Number of words is {text.split(" ").length} and Number of letters are {text.length}</p>
        <p>{0.008 * text.length} minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Enter the text to preview here":text}</p>
     </div>


    </>
  )
}


