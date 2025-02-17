import React from 'react'

function About(props) {
    const back_color=()=>{
        if(props.mode=== 'light') return 'white';
        else if(props.mode==='dark') return 'black';
        else if(props.mode==='Green') return '#90EE90';
        else if(props.mode==='Blue') return '#ADD8E6';
        else return '#736AFF';
    }
  return (
        <div class="accordion" id="accordionExample">
            <h1 style={{color:props.mode==='light'?'black':'white'}}>About Us</h1>
        <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}} aria-expanded="true" aria-controls="collapseOne">
        Who We Are
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}}>
        TextUtils is a powerful online text manipulation tool designed to help users analyze, modify, and enhance their text with ease. Whether you're a student, professional, or casual writer, our tool simplifies text processing.
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}}data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Key Features
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}}>
            🔤 Convert Text to Uppercase & Lowercase<br/>
            📢 Text-to-Speech (TTS) Functionality<br/>
            📊 Word & Character Count Analysis<br/>
            🕒 Estimated Reading Time Calculation<br/>
            🎨 Customizable Dark, Light & Color Modes
        </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Why Choose TextUtils?
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={{backgroundColor:back_color(),color:props.mode==='light'?'black':'#fff'}}>
            🌟 User-Friendly – A simple, clean, and intuitive interface. <br />
            ⚡ Fast & Lightweight – Instant text processing without delays. <br />
            🎯 Free to Use – No hidden costs, no ads, just pure utility! <br />
            🔄 Multiple Text Modes – Dark, Blue, Green & more for better visibility.
        </div>
        </div>
    </div>
    </div>
  )
}

export default About
