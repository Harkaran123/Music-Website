
let cntrlBtn = document.getElementById('cntrolBtn')
let song = document.getElementById('song')
let progress = document.getElementById('progress')

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if (cntrlBtn.classList.contains('fa-play')){
        song.play();
        cntrlBtn.classList.remove('fa-play');
        cntrlBtn.classList.add('fa-pause');
    }
    else{
        song.pause();
        cntrlBtn.classList.add('fa-play');
        cntrlBtn.classList.remove('fa-pause');
    }
}

if (song.play()){
    setInterval(function(){
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play()
    song.currentTime = progress.value;
    cntrlBtn.classList.add('fa-pause');
    cntrlBtn.classList.remove('fa-play');

}