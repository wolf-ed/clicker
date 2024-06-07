document.getElementById('audioButton').addEventListener('click', function() {
    var audioButton = document.getElementById('audioButton');
    var audio = document.getElementById('clickSound');
    audio.play();
    audioButton.classList.add('disabled');
    audioButton.disabled = true;
    setTimeout(function() {
        audioButton.classList.remove('disabled');
        audioButton.disabled = false;
    }, 1000);
});