console.log("Welcome to Spotify Clone");
//Initilize the variable
let SongIndex=0;
let audioElement=new Audio('songs/Pasoori.mp3');
let MasterPlay=document.getElementById('MasterPlay');
let MyProgressBar=document.getElementById('MyProgressBar');
let gif=document.getElementById('gif');
let MasterSongName=document.getElementById(' MasterSongName');
let SongItem=Array.from(document.getElementsByClassName('SongItem'));

let songs =[
    {SongName:"Pasoori",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Pasoori.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\CoverP.jpeg"},

    {SongName:"Libaas",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Libaas.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Libb_c.jpeg"},

    {SongName:"Kahani Suno2.0",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Kahani Suno2.0.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Kaha_c.jpeg"},

    {SongName:"Believer",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Believer.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Beli_C.jpg"},

    {SongName:"Mitti Ta Tibbe",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Mitti Ta Tibbe.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Mitti_c.jpeg"},

    {SongName:"Yaddein",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Yaadein.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Yaade_c.jpg"},

    {SongName:"Namo Namo",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Namo.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Namo_c.jpg"},

    {SongName:"Afreen Afreen",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Afreen.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Afreen_c.jpg"},

    {SongName:"Wishlist",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Wishlist.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Wish_c.jpeg"},

    {SongName:"Woh",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Woh.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\WOH_C.jpg"},

    {SongName:"Rihayi",filePath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\songs\Rihayi.mp3",CoverPath:"C:\Users\princ\OneDrive\Documents\Web Project\Spotify\cover\Rih_C.jpg"}
]
SongItem.forEach((Element,i)=>{

    //Element.getElementsByTagName("img")[0].src=songs[i].CoverPath;
    Element.getElementsByClassName("SongName")[0].innerText=songs[i].SongName;
})


//audioElement.play();

  //Handle Play/Pause Click
  MasterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
  })

  //Listen to Event
  audioElement.addEventListener('timeupdate', ()=>{

    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     MyProgressBar.value=progress;

  })
  MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=MyProgressBar.value*audioElement.duration/100;
  })
  const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');

    })
  }
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
    
      SongIndex=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src='songs/${SongIndex}.mp3 ';
      MasterSongName.innerText=songs[SongIndex].SongName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      MasterPlay.classList.remove('fa-play-circle');
      MasterPlay.classList.add('fa-pause-circle');
    })


  })
  document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=10){
      SongIndex=0;
    }
    else{
      SongIndex+=1;
    }
    audioElement.src='songs/${SongIndex+1}.mp3 ';
    MasterSongName.innerText=songs[SongIndex].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
  })
  document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=0){
      SongIndex=0;
    }
    else{
      SongIndex-=1;
    }
    audioElement.src='songs/${SongIndex+1}.mp3 ';
    MasterSongName.innerText=songs[SongIndex].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
  })
