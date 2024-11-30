import React, {useState} from 'react'

export default function TextForm(props) {
 
 
    const handleUpClick = () => {
    console.log("The button was clicked");
    let newText = text.toUpperCase();
    setText(newText);

    }

    const handleLoClick = () => {
      console.log("The button was clicked");
      let newText = text.toLowerCase();
      setText(newText);
  
      }
      const handleClearClick = () => {
        console.log("The button was clicked");
        let newText = '';
        setText(newText);
      }

      
    
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);

  }
    const [text, setText] = useState('Enter the Text');
     return (
      <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="8"></textarea>
</div>
<button className="btn.btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn.btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn.btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3'>
      <h2> Your Text Summary</h2>
      <p> {text.split(' ').length} Words and   {text.length} Character </p>
    </div>
    <h3>Preview</h3>
    <p>{text}</p>
    </>

 

    
  )
}
