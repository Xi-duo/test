const fond = document.querySelector('.fond')
const mine = document.querySelector('.mine')
const avatarContainer = document.querySelector('.avatar-container');
const toRight = document.querySelector('.toRight')
const toLeft = document.querySelector('.toLeft')
const img = document.querySelector('imgContainer img')
const left = document.querySelector('.left')
const center = document.querySelector('.center')
const right = document.querySelector('.right')
const active1 = document.querySelector('.active1')
const active2 = document.querySelector('.active2')
const active3 = document.querySelector('.active3')

document.addEventListener('click',function(){
  if (event.target.classList.contains('fond')) {
     fond.style.color = '#ffffff';
     fond.style.backgroundColor = '#fc3d49';
     mine.style.color = ''; 
    mine.style.backgroundColor = '';
    } 
});
document.addEventListener('click',function(){
  if (event.target.classList.contains('mine')) {
   mine.style.color = '#ffffff';
     mine.style.backgroundColor = '#fc3d49';
     fond.style.color = ''; 
    fond.style.backgroundColor = '';
    } 
});
  let input = document.createElement('input')
  input.type = 'file'
  avatarContainer.addEventListener('click',()=>{
    input.click();
  });
  input.addEventListener('change',(e)=>{
    let url = URL.createObjectURL(e.target.files[0])
    
    function displayAvatar(url) {
          avatarContainer.style.backgroundImage = `url('${url}')`;
          avatarContainer.style.backgroundSize = 'cover';
          avatarContainer.style.backgroundPosition = 'center';
    }
    displayAvatar(url);
  })
  const data = [{}];
  let i = 0;
  toRight.addEventListener('click',()=>{
    i++
    i = i >= 3 ? 0 : i         //data.length = 3
    // img.src = data[i].url;
    toggle()
  })
  toLeft.addEventListener('click',()=>{
    i--
    i = i < 0 ? 2 : i         //data.length = 3
    toggle()// img.src = data[i].url; 
  })
  let timer ;
  timer = setInterval(()=>{
      i++;
    i = i >= 3 ? 0 : i;
    toggle()
  },5000)
  
  active1.addEventListener('mouseenter',()=>{
    i = 0;
    toggle()
    clearInterval(timer);
  })
  active2.addEventListener('mouseenter',()=>{
    i = 1;
    toggle()
    clearInterval(timer);
  })
  active3.addEventListener('mouseenter',()=>{
    i = 2;
    toggle()
    clearInterval(timer);
  })
  active1.addEventListener('mouseleave' ,()=>{
    timer = setInterval(()=>{
    i++;
    i = i >= 3 ? 0 : i;
    toggle();
  },5000)
  })
  active2.addEventListener('mouseleave' ,()=>{
    timer = setInterval(()=>{
    i++;
    i = i >= 3 ? 0 : i;
    toggle();
  },5000)
  })
  active3.addEventListener('mouseleave' ,()=>{
    timer = setInterval(()=>{
    i++;
    i = i >= 3 ? 0 : i;
    toggle();
  },5000)
  })
  
  


 
  function toggle(){
    document.querySelector('.slider-indicator .active').classList.remove('active')
    document.querySelector(`.slider-indicator li:nth-child(${i+1})`).classList.add('active')
    left.className = 'slider_item';
    center.className = 'slider_item';
    right.className = 'slider_item';
    left.classList.remove('left');
    center.classList.remove('center');
    right.classList.remove('right');
    if (i === 0) {
    left.classList.add('left');
    center.classList.add('center');
    right.classList.add('right');
  } else if (i === 1) {
    left.classList.add('right');
    center.classList.add('left');
    right.classList.add('center');
  } else{
    left.classList.add('center');
    center.classList.add('right');
    right.classList.add('left');
  }
  }

const playlists = document.querySelector('.playlists')
// const playlist = playlists.querySelectorAll('li')

fetch('http://localhost:3000/top/playlist/highquality')
.then((res) => res.json())
.then((res) => {

    const playlistsData = res.playlists;
    playlistsData.forEach((playlist) => {
        console.log(playlist);
        const li = document.createElement('li');                
        let backgroundImage = new Image();        
        backgroundImage.src = playlist.coverImgUrl;
        backgroundImage.style.width = '100%';
        backgroundImage.style.objectFit = 'cover';
        backgroundImage.style.borderRadius = '15px';
        
        li.appendChild(backgroundImage);
        const p = document.createElement('p');
        p.innerHTML = playlist.name;
        p.style.position = 'relative';
        p.style.bottom = '5px';
        p.style.fontSize = '15px'
        p.style.fontWeight = '400'
        p.style.color = 'black';
        p.style.padding = '10px'
        li.appendChild(p);
        playlists.appendChild(li);
    
    });
})
  
  

  


