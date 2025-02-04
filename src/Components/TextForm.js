import React, { useState } from 'react';

export default function TextForm(props) {




    //  this function is created only for to
    //  change dark mode and light mode using button 
 /*    const [myStyle, setmyStyle] = useState({
         color: 'black',
        backgroundColor: 'gray'
      
    });
   const [btnText, setBtnText] = useState( "Enable Dark Mode");
    
    const toogleStyle = ()=>{
if (myStyle.color ==='black') {
    setmyStyle({
         color: 'white',
         backgroundColor: 'black',
         border: '1px solid white'
    })
     setBtnText("Enable Light Mode");
}
else{
    setmyStyle({
        color: 'black',
       backgroundColor: 'white'
       
   })
   setBtnText("Enable Dark Mode");
}
    }
 */
     
    const handleuperclick = ()=>{
        // console.log("upper button was clicked");
        // setText("You have Clicked on handleuperclick")
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");

    }
    const handlelowerclick = ()=>{
        // console.log("Lower button was clicked");
        // setText("You have Clicked on handlelowerclick")
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");

    }
    const copyclick = ()=>{
       
        let textToCopy = Text;
        navigator.clipboard.writeText(textToCopy)
        props.showAlert("Copy to Clipboard", "success");
 
    }
    const clearclick = ()=>{
       
        let newText = ' ';
        setText(newText)
        props.showAlert("All Text is Cleared", "success");
         
    }
    


    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value); 
    }

    const [Text, setText] = useState('');
    // Text = "New text"; Wrong way to change the state

    //  setText("change text"); correct way to change the store 

    // Agar ma  na is text ko update karna ha to ma directly
    //  is ko update nahi kar sakta mujha setText ka function use 
    // karna ho ga
  return (
   <> 
   <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
   <h1>{props.heading} </h1>
      <div className="mb-3">
       <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white',
       color: props.mode === 'dark' ? 'white' : 'black'}}  id="myBox" rows="12"></textarea>
</div>

<button className="btn btn-primary" onClick={handleuperclick} >Convert to UpperCase</button>
<button className="btn btn-primary my-3 mx-4"  onClick={handlelowerclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2 mx-2" onClick={copyclick}>Copy to Clipboard</button>
<button className="btn btn-primary mx-2 mx-2" onClick={clearclick}>Clear Text</button>
 

    </div>
    <div className="container"style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your Text Summary</h2>
        <h6>
        {Text.split(" ").length} Words and {Text.length} Characters
        </h6>
        <h6> {0.008 * Text.split(" ").length} Minutes to Read Words</h6>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter Something in the Text box above to Preview it"}</p>
    </div>
    </>
  )
}
