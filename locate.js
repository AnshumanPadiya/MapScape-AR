// import cv from "opencv.js";

const start = document.querySelector("#ar");

start.addEventListener("click", (e) => {
  e.preventDefault();

  // Load the video
  function openCvReady() {
    cv["onRuntimeInitialized"] = () => {
      // do all your work here

      const video = document.querySelector("#videoPlayer");
      // video.srcObject = stream;
      // console.log(video)

      // Set up the canvas element for displaying the video
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
      console.log(context);

      // Set up the array of strings to search for in the video
      const searchStrings = ["hello", "world", "opencv"];

      // Set up the font and text color for displaying the search strings on the video
      const font = cv.FONT_HERSHEY_SIMPLEX;
      const color = new cv.Scalar(255, 0, 0);

      // Set up the video processing loop
      async function processVideo() {
        // Get a frame from the video
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = cv.imread(canvas);

        // Convert the frame to grayscale
        const gray = new cv.Mat();
        cv.cvtColor(frame, gray, cv.COLOR_RGBA2GRAY, 0);

        // Run Otsu thresholding on the frame to improve text detection
        const thresh = new cv.Mat();
        cv.threshold(gray, thresh, 0, 255, cv.THRESH_BINARY + cv.THRESH_OTSU);

        // Set up the text detection parameters
        const params = new cv.MSERParams();
        params.minArea = 60;
        params.maxArea = 14400;
        params.maxVariation = 0.25;
        params.minDivetrsiy = 0.2;
        params.maxEvolution = 200;
        params.areaThreshold = 1.01;
        params.minMargin = 0.003;
        params.edgeBlurSize = 5;

        // Detect text regions in the frame
        const regions = new cv.MSER(params).detect(thresh);

        // Loop through the regions and draw rectangles around them
        for (const region of regions) {
          cv.rectangle(frame, region.rect, color);
        }

        // Loop through the search strings and see if they are present in the frame
        for (const searchString of searchStrings) {
          // Set up the text detection parameters
          const textParams = new cv.TextDetectionLSH();
          textParams.setMinProbability(0.7);

          // Detect the search string in the frame
          const found = textParams.detect(frame, searchString);

          // If the search string was found, draw it on the frame
          if (found.length > 0) {
            cv.putText(
              frame,
              searchString,
              found[0].location,
              font,
              1,
              color,
              2
            );
          }
        }

        // Display the frame
        cv.imshow(canvas, frame);

        // Release the frame and other resources
        frame.delete();
        gray.delete();
        thresh.delete();

        // Repeat the process after a short delay
        setTimeout(processVideo, 1000 / 30);
      }

      // Start the video processing loop
      processVideo();
    };
  }
})

