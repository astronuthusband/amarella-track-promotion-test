// Get the audio element by its ID
const audio = document.getElementById('audio');

// Function to add flashing lights when music plays
function startFlashing() {
  document.body.classList.add('flash-light'); // Add the flashing effect to the body
}

// Function to stop flashing lights when music pauses or ends
function stopFlashing() {
  document.body.classList.remove('flash-light'); // Remove the flashing effect from the body
}

// Event listeners for play, pause, and ended events
audio.addEventListener('play', startFlashing);
audio.addEventListener('pause', stopFlashing);
audio.addEventListener('ended', stopFlashing);
