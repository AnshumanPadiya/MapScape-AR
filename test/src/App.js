import CameraTesseract from "tesseract-with-html5-camera/dist/lib/index.js";
import { dataSet } from "./data/index";
import "@leoncvlt/ar-button";
import "@leoncvlt/ar-button/styles.css";
import { activateAR } from "@leoncvlt/ar-button";

// const arr = ['Taj Mahal'];

function App() {
  // console.log(dataSet);
  const handleTakePhoto = (text) => {
    // Do stuff with recognized text...
    console.log("Recognize text: ", text.trim());
    console.log(dataSet[0].name);

    if (text.trim() === dataSet[0].name) {
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
  const activate = () => {
    // trigger on an user interaction, like a click
    activateAR({
      src: "https://github.com/AnshumanPadiya/MapScape-AR/blob/cameratesseract/test/src/data/new/ImageToStl.com_tajmahal.glb?raw=true",
      link: "https://www.nasa.gov/",
      title: "A 3D model of an astronaut",
    });
  };

  return (
    <>
      <h3>Check result in console</h3>
      {/* <CameraTesseract
        onTextRecognize={(text) => {
          handleTakePhoto(text);
        }} 

      />*/}
      {/* <ar-button
        src="https://github.com/leoncvlt/ar-button/raw/master/assets/Astronaut.glb"
        ios-src="https://github.com/leoncvlt/ar-button/raw/master/assets/Astronaut.usdz"
        link="https://www.nasa.gov/"
        title="A 3D model of an astronaut"
      >
        See in Augmented Reality
      </ar-button> */}
      <button onClick={activate}>Checkout in AR</button>
    </>
  );
}

export default App;
