var textElement = document.querySelector(".content");

var textContent = "Logging into NVCC Network...\nPlease Wait\n\n...\n\n\nUser: root\nPass: *************\n\n...\n\nAuthorization level...\nroot\n\n...\n\nAll Access...\nGRANTED\n\n...\n\n\nPatching NVCC NETWORK...........\nPatching Kernel...........\nPatching /home/%user..\n\n∞ All Access Mod Patched! ∞\n\nConnecting to swarm.....................\nOK!\n\nNew swarmlet registered.\n\n\nThanks for visiting NVCC CyberNet! Please Close Window.                            \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n".split("");

var frameIndex = 0;
var drawIndex = 0;  

function draw(time) {
  window.requestAnimationFrame(draw);
  if(frameIndex % Math.floor(Math.random()*4+4) === 0) {
    textElement.innerHTML = textElement.innerHTML + textContent[drawIndex % textContent.length];
    if(textElement.innerHTML.length > 60) {
      textElement.innerHTML = textElement.innerHTML.substr(textElement.innerHTML.indexOf("\n") + 1)
    }
    drawIndex++;
  }
  frameIndex += 3;
}

draw();