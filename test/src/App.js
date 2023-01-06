import { useState } from "react";
import CameraTesseract from "tesseract-with-html5-camera/dist/lib/index.js";
import { dataSet } from './data/index';
import { activateAR } from "@leoncvlt/ar-button";

// const arr = ['Taj Mahal'];

function App() {
  // console.log(dataSet);

  const [render, setRender] = useState(false);

  const handleTakePhoto = (text) => {
    // Do stuff with recognized text...
    console.log("Recognize text: ", text.trim());
    console.log(dataSet[0].name)
    
    // if(text.trim() === dataSet[0].name) {
    //   console.log("Recognize text: ", text);
    //   console.log(dataSet[0].name);
    //   setRender(true);
    // } else {
    //   console.log("not same");
    // }
setRender(true);
    // for(let i = 0; dataSet.length; i++) {
    //   console.log(dataSet[i].name.trime);
    //   if (text.trime === dataSet[i].name.trime) {
    //     console.log("Recognize text: ", text);
    //   } else {
    //     console.log("not same");
    //   }      
    // }

  };

  const activate = () => {
    // trigger on an user interaction, like a click
    activateAR({
      src: "https://github.com/AnshumanPadiya/MapScape-AR/blob/saransh/charminar_hyderabad.glb?raw=true",
      title: "Char Minar Hyderabad",
    });
  };

  return (
    <>
      <h3>Check result in console</h3>
      <CameraTesseract
        onTextRecognize={(text) => {
          handleTakePhoto(text);
        }}
      />

      <div style={{display: "flex", width: "100%", justifyContent: "center", position: "relative", top: "20px"}}>
        {render ? <button onClick={activate}>Checkout in AR</button> : <></>}
      </div>
    </>
  );
}

export default App;
