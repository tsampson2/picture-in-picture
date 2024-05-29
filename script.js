const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream video element then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Hereo
    console.log(" whoops,error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset
  button.disabled = false;
});

// On Load
selectMediaStream();
