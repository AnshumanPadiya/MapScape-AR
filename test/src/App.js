import CameraTesseract from "tesseract-with-html5-camera/dist/lib/index.js";

function App() {
  const handleTakePhoto = (text) => {
    // Do stuff with recognized text...
    console.log("Recognize text: ", text);
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
