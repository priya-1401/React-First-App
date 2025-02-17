import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
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

    const back_color=()=>{
        if(props.mode=== 'light') return 'white';
        else if(props.mode==='dark') return 'black';
        else if(props.mode==='Green') return 'Green';
        else if(props.mode==='Blue') return 'Blue';
        else return 'SlateBlue';
    }
    const c=()=>{
        if(props.mode=== 'light') return 'white';
        else if(props.mode==='dark') return 'grey';
        else if(props.mode==='Green') return '#90EE90';
        else if(props.mode==='Blue') return '#ADD8E6';
        else return '#736AFF';
      }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: c(), color:'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
            <button className="btn btn-primary max-1 my-1" onClick={handleLoClick} disabled={text.length===0}>Convert to Lowercase</button>
            <button type="submit" onClick={speak} disabled={text.length===0} className="btn btn-primary mx-2 my-2">Speak</button>
    </div>
     <div className="container my-3" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'white'}}>
        <h1>The Text Summary</h1>
        <p>The Number of words is {text.split(" ").filter((element)=>{return element.length!==0}).length} and Number of letters are {text.length}</p>
        <p>{0.008 * text.length} minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Nothing to Preview!":text}</p>
     </div>


    </>
  )
}


