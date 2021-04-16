import React from "react";
import "./style.css";

export default function App() {
  const [enText, setEnText] = React.useState("");
  const [deText, setDeText] = React.useState("");

  const onEnTextChange = (event)=>{
    setEnText(event.target.value)
  }

  const onDeTextChange = (event)=>{
    setDeText(event.target.value)
  }


  const handleEncode = () => {
    setEnText(encodeURIComponent(enText));
  };

  const handleDecode = () => {
    setDeText(decodeURIComponent(deText));
  };

  return (
    <div>
      <h1>URL Encoder/Decoder</h1>
      <div className="job_detail">
        <section className="card-section">
          <header>
            <h2>Enter Text to Encode</h2>
          </header>
          <div className="section-root-div">
            <textarea value={enText} onChange={onEnTextChange} className="textareaContent" />
          </div>
          <div className="encodeBtnDiv">
            <button className="encodeBtn" onClick={handleEncode}>
              Encode
            </button>
          </div>
        </section>

        <section className="card-section">
          <header>
            <h2>Enter Text to Decode</h2>
          </header>
          <div className="section-root-div">
            <textarea value={deText} onChange={onDeTextChange} className="textareaContent" />
          </div>
          <div className="encodeBtnDiv">
            <button className="encodeBtn" onClick={handleDecode} >Decode</button>
          </div>
        </section>
      </div>
    </div>
  );
}
