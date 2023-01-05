const start = document.querySelector("#ar");

start.addEventListener('click', (e) => {
  e.preventDefault();

  // Use the getUserMedia() API to prompt the user to allow access to their device's camera
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, handleVideo, videoError);
  }

  // Function to handle the video stream and locate the text in the image
  async function handleVideo(stream) {

    let video = document.querySelector("#videoPlayer");
    video.srcObject = stream;
  }

  function videoError(e) {
    console.error(e);
  }
})

