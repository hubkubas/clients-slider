
var clients = [
  { 
   logo: 'https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2FMbank-logo.jpg?1557398130183'
  },

  {
    logo: "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2Fnetia-logo.png?1557398130339"
  },
  {
    logo: "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2Ffines_logo.jpg?1557398130199"
  },
  { 
    logo: "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2Fsevenet_logo.jpg?1557398130497"
  },
  {
    logo: "https://cdn.glitch.com/9e10365b-c704-4f66-b12a-f002faf03af3%2FMcDonalds_logo.png?1557398130570"
  }
];

function repeatImage(){

let result = clients.slice(0, 4).map(function () { 
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, clients.slice());


      var firstOnScreen = result[0];
      document.getElementById("firstSlideImage").src = firstOnScreen.logo;

      var secondOnScreen = result[1];
      document.getElementById("secondSlideImage").src = secondOnScreen.logo;

      var thirdOnScreen = result[2];
      document.getElementById("thirdSlideImage").src = thirdOnScreen.logo;

      var fourthOnScreen = result[3];
      document.getElementById("fourthSlideImage").src = fourthOnScreen.logo;
};

setInterval( repeatImage, 2000);

window.onload = function() {
  repeatImage()
};