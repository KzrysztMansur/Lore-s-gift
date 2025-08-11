const { ipcRenderer } = require('electron');

const pinBtn = document.getElementById('pin-btn');
const pinIcon = document.getElementById('pin-icon');
const closeBtn = document.getElementById('close-btn');

// Toggle always-on-top and update icon
pinBtn.addEventListener('click', async () => {
  const isNowPinned = await ipcRenderer.invoke('toggle-always-on-top');
  pinIcon.src = isNowPinned ? '../assets/images/pinned.svg' : '../assets/images/pin45.svg';
});

// Close the window
closeBtn.addEventListener('click', () => {
  ipcRenderer.send('close-window');
});


const gifs = [
    {
        route: '../assets/gifs/eat-protein-cat.gif',
        duration: 11000 
    },
    {
        route: '../assets/gifs/hydrate-cat.gif',
        duration: 11000
    }, 
    {
        route: '../assets/gifs/sleep-well-cat.gif',
        duration: 11000
    }
];

window.addEventListener('DOMContentLoaded', () => {
  const backgroundDiv = document.querySelector('.background');

  // Create <img> tag
  const gifImg = document.createElement('img');
  gifImg.alt = 'background gif';
  backgroundDiv.appendChild(gifImg);

  // Function to show next GIF
  let gifIndex = 0;

  function showNextGif() {
    const gifPath = gifs[gifIndex].route;
    gifImg.src = `${gifPath}?v=${Date.now()}`; // cache-busting

    gifIndex = (gifIndex + 1) % gifs.length;
  }

  // Show first GIF right away
  showNextGif();

  setInterval(showNextGif, gifs[gifIndex].duration);
});