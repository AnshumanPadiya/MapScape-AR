import CameraTesseract from "tesseract-with-html5-camera/dist/lib/index.js";
import { dataSet } from './data/index';

// const arr = ['Taj Mahal'];

function App() {
  // console.log(dataSet);
  const handleTakePhoto = (text) => {
    // Do stuff with recognized text...
    console.log("Recognize text: ", text.trim());
    console.log(dataSet[0].name)
    
    if(text.trim() === dataSet[0].name) {
      console.log("Recognize text: ", text);
      console.log(dataSet[0].name);
    } else {
      console.log("not same");
    }

    // for(let i = 0; dataSet.length; i++) {
    //   console.log(dataSet[i].name.trime);
    //   if (text.trime === dataSet[i].name.trime) {
    //     console.log("Recognize text: ", text);
    //   } else {
    //     console.log("not same");
    //   }      
    // }

  };

  return (
    <>
      <h3>Check result in console</h3>
      <CameraTesseract
        onTextRecognize={(text) => {
          handleTakePhoto(text);
        }}
      />
    </>
  );
}

export default App;
