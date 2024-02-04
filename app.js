const music=new Audio('audio/audio1.mp3')
// music.play()

const songs=[
    {
        id:'1',
        songName:
        `Aa re pritam pyare<br />
        <div class="subtitle">Mamta Sharma</div>`,
        poster:"images/img1.jpg"
    },
    {
        id:'2',
        songName:
        `Hawa banke<br />
        <div class="subtitle">Darshan raval</div>`,
        poster:"images/img2.jpg"
    },
    {
        id:'3',
        songName:
        `Tum hi ho<br />
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/img3.jpg"
    },
    {
        id:'4',
        songName:
        `Apna bana le<br />
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/img4.jpg"
    },
    {
        id:'5',
        songName:
        `Makhana<br />
        <div class="subtitle">Honey Singh</div>`,
        poster:"images/img5.jpg"
    },
    {
        id:'6',
        songName:
        `Tujhe sochta hoon<br />
        <div class="subtitle">K.K</div>`,
        poster:"images/img6.jpg"
    },
    {
        id:'7',
        songName:
        `Asal main<br />
        <div class="subtitle">Darshan raval</div>`,
        poster:"images/img7.jpg"
    },
    {
        id:'8',
        songName:
        `Blue eyes<br />
        <div class="subtitle">Honey Singh</div>`,
        poster:"images/img8.jpg"
    },
    {
        id:'9',
        songName:
        `Jo bhi kasmein<br />
        <div class="subtitle">Udit Narayan</div>`,
        poster:"images/img9.jpg"
    },
    {
        id:'10',
        songName:
        `Rubaru<br />
        <div class="subtitle">Udit Narayan</div>`,
        poster:"images/img10.jpg"
    },
    {
        id:'11',
        songName:
        `Kebe asi tu<br />
        <div class="subtitle">Kuldeep Patnaik</div>`,
        poster:"images/img11.jpg"
    },
    {
        id:'12',
        songName:
        `O re Priya<br />
        <div class="subtitle">Rahat Fateh Ali khan</div>`,
        poster:"images/img12.jpg"
    },    {
        id:'13',
        songName:
        `Peheli dafa<br />
        <div class="subtitle">Atif Aslam</div>`,
        poster:"images/img13.jpg"
    },
    {
        id:'14',
        songName:
        `Galliyan<br />
        <div class="subtitle">Ankit Tiwari</div>`,
        poster:"images/img14.jpg"
    },
    {
        id:'15',
        songName:
        `Mujhe peene do<br />
        <div class="subtitle">Darsan raval</div>`,
        poster:"images/img15.jpg"
    },
    {
        id:'16',
        songName:
        `Tera zikr<br />
        <div class="subtitle">Darsan raval</div>`,
        poster:"images/img16.jpg"
    },
    {
        id:'17',
        songName:
        `pal ek pal<br />
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/img17.jpg"
    },
    {
        id:'18',
        songName:
        `Tum hi aana<br />
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"images/img18.jpg"
    },
    {
        id:'19',
        songName:
        `Sanam re<br />
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/img19.jpg"
    },
    {
        id:'20',
        songName:
        `Sammohini<br />
        <div class="subtitle">kuldeep patnaik</div>`,
        poster:"images/img20.jpg"
    }
    

]

Array.from(document.getElementsByClassName('songitems')).forEach((e,i)=>
{
    e.getElementsByTagName('img')[0].src=songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName
})
let search_results=document.getElementsByClassName('search_results')[0];
songs.forEach((element)=>{
    const {id,songName,poster}=element;
    let card=document.createElement('a');
    card.classList.add('card')
    card.href="#"+id
    card.innerHTML= 
    `<img src="${poster}" alt="">
   <div class="content"> 
        ${songName}
   </div>`

   search_results.appendChild(card)
})

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a')

    for(let index=0;index<items.length;index++)
    {
        let as=items[index].getElementsByClassName('content')[0]
        let text_value=as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value)> -1)
        {
            items[index].style.display="flex";
        }
        else{
            items[index].style.display="none";
        }
        
        if(input.value==0)
        {
            search_results.style.display="none"
        }
        else{
            search_results.style.display=""
        }
    }
})

let masterPlay=document.getElementById('masterPlay')
let wave=document.getElementById('wave')
let rotate=document.getElementById('poster_master_play')


masterPlay.addEventListener('click',()=>{
      if(music.paused || music.currentTime<=0)
      {
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        rotate.classList.add('rotate1')
       
    }
    
    
    else{
        music.pause()
        wave.classList.remove('active1')
        masterPlay.classList.remove('bi-pause-fill')
        masterPlay.classList.add('bi-play-fill')
        rotate.classList.remove('rotate1')
       
      }
    })
 const makeAllbackground=()=>{
    Array.from(document.getElementsByClassName('songitems')).forEach((el)=>
    {
      el.style.background='rgb(105,105,105,.0)'

    })
 }
 const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    })
 }

let index=0
let poster_master_play=document.getElementById('poster_master_play')
let download_music=document.getElementById('download_music')
let title=document.getElementById('title')
Array.from(document.getElementsByClassName('playListplay')).forEach((e)=>
{
   e.addEventListener('click',(el)=>
   {
     index = el.target.id
     music.src=`audio/audio${index}.mp3`
     poster_master_play.src=`images/img${index}.jpg`
     music.play()
     wave.classList.add('active1')
     masterPlay.classList.remove('bi-play-fill')
     masterPlay.classList.add('bi-pause-fill')
     rotate.classList.add('rotate1')
     download_music.href=`audio/audio${index}.mp3`
     let songTitles=songs.filter((el)=>
     {
        return el.id==index
     })
     songTitles.forEach(elss=>{
         let {songName}=elss
         title.innerHTML=songName
         download_music.setAttribute('download',songName)
     })
     makeAllbackground();
     Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,105,.1)'
     makeAllplays();
     el.target.classList.add('bi-pause-circle-fill')
     el.target.classList.remove('bi-play-circle-fill')
   })

})

let currentstart=document.getElementById('currentStart')
let currentEnd=document.getElementById('currentEnd')
let seek=document.getElementById('seek')
let bar2=document.getElementById('bar2')
let dot=document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime
    let music_durr=music.duration

    let min1=Math.floor(music_durr/60)
    let sec1=Math.floor(music_durr%60)

    if(sec1<10)
    {
       sec1=`0${sec1}`
    }
    currentEnd.innerHTML=`${min1}:${sec1}`
    
    let min2=Math.floor(music_curr/60)
    let sec2=Math.floor(music_curr%60)

    if(sec2<10)
   {
      sec2=`0${sec2}`
    }
   currentstart.innerHTML=`${min2}:${sec2}`

   let progressbar=parseInt((music_curr/music_durr)*100)
   seek.value=progressbar
   let seekbar=seek.value
   
   bar2.style.width=`${seekbar}%`
   dot.style.left=`${seekbar}%`
})
seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100
})

let vol_icon=document.getElementById('vol_icon')
let vol_dot=document.getElementById('vol_dot')
let vol_bar=document.getElementsByClassName('vol_bar')[0]
let vol=document.getElementById('vol')

vol.addEventListener('change',()=>{
    if(vol.value==0)
    {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-off-fill')
    }
    if(vol.value>0)
    {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
    }
    if(vol.value>50)
    {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
    }
   
    let vol_a=vol.value
    vol_bar.style.width=`${vol_a}%`
    vol_dot.style.left=`${vol_a}%`

    music.volume=vol_a/100
})
 

let back=document.getElementById('back')
let next=document.getElementById('next')

back.addEventListener('click',()=>{
    index=index-1
    if(index<1)
    {
        index=Array.from(document.getElementsByClassName('songitems')).length
    }
    music.src=`audio/audio${index}.mp3`
    poster_master_play.src=`images/img${index}.jpg`
    music.play()
    // wave.classList.add('active1')
    // masterPlay.classList.remove('bi-play-fill')
    // masterPlay.classList.add('bi-pause-fill')
    // rotate.classList.add('rotate1')
    let songTitles=songs.filter((el)=>
     {
        return el.id==index
     })
     songTitles.forEach(elss=>{
         let {songName}=elss
         title.innerHTML=songName
     })
     makeAllbackground();
     Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,105,.1)'
    //  makeAllplays();
    //  el.target.classList.add('bi-pause-circle-fill')
    //  el.target.classList.remove('bi-play-circle-fill')
     Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
     })
})
next.addEventListener('click',()=>{
    index++
    if(index>Array.from(document.getElementsByClassName('songitems')).length)
    {
       index=1
    }
    music.src=`audio/audio${index}.mp3`
    poster_master_play.src=`images/img${index}.jpg`
    music.play()
    // wave.classList.add('active1')
    // masterPlay.classList.remove('bi-play-fill')
    // masterPlay.classList.add('bi-pause-fill')
    // rotate.classList.add('rotate1')
    let songTitles=songs.filter((el)=>
     {
        return el.id==index
     })
     songTitles.forEach(elss=>{
         let {songName}=elss
         title.innerHTML=songName
     })
     makeAllbackground();
     Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,105,.1)'
     makeAllplays();
     el.target.classList.add('bi-pause-circle-fill')
     el.target.classList.remove('bi-play-circle-fill')
})

let shuffle = document.getElementsByClassName('shuffle')[0]
   
 shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML
    switch(a)
    {
      case "next":
        shuffle.classList.add('bi-arrow-repeat')
        shuffle.classList.remove('bi-music-note-beamed')
        shuffle.classList.remove('bi-shuffle')
        shuffle.innerHTML='repeat'
        break
     case "repeat":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.add('bi-shuffle')
            shuffle.innerHTML='random'
            break
     case "random":
                shuffle.classList.remove('bi-arrow-repeat')
                shuffle.classList.add('bi-music-note-beamed')
                shuffle.classList.remove('bi-shuffle')
                shuffle.innerHTML='next'
                break
    }
 })
 



let pop_song_left=document.getElementById('pop_song_left')
let pop_song_right=document.getElementById('pop_song_right')

let pop_song=document.getElementsByClassName('pop_song')[0]

pop_song_right.addEventListener('click',()=>
{
    pop_song.scrollLeft+=180
})
pop_song_left.addEventListener('click',()=>
{
    pop_song.scrollLeft-=180
})
let pop_art_left=document.getElementById('pop_art_left')
let pop_art_right=document.getElementById('pop_art_right')

let pop_artist=document.getElementsByClassName('item')[0]
pop_art_right.addEventListener('click',()=>
{
    pop_artist.scrollLeft+=80
})
pop_art_left.addEventListener('click',()=>
{
    pop_artist.scrollLeft-=80
})

const next_music=()=>{
    if(index==songs.length)
    {
        index=1
    }
    else{
        index++
    }
    music.src=`audio/audio${index}.mp3`
    poster_master_play.src=`images/img${index}.jpg`
    music.play()
    // wave.classList.add('active1')
    // masterPlay.classList.remove('bi-play-fill')
    // masterPlay.classList.add('bi-pause-fill')
    // rotate.classList.add('rotate1')
    let songTitles=songs.filter((el)=>
     {
        return el.id==index
     })
     songTitles.forEach(elss=>{
         let {songName}=elss
         title.innerHTML=songName
     })
     makeAllbackground();
     Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,105,.1)'
     makeAllplays();
     el.target.classList.add('bi-pause-circle-fill')
     el.target.classList.remove('bi-play-circle-fill')
}

const repeat_music=()=>{
    index;
    music.src=`audio/audio${index}.mp3`
    poster_master_play.src=`images/img${index}.jpg`
    music.play()
   
    let songTitles=songs.filter((el)=>
     {
        return el.id==index
     })
     songTitles.forEach(elss=>{
         let {songName}=elss
         title.innerHTML=songName
     })
     makeAllbackground();
     Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,105,.1)'
     makeAllplays();
     el.target.classList.add('bi-pause-circle-fill')
     el.target.classList.remove('bi-play-circle-fill')
}

const random_music=()=>{
    if(index==songs.length)
    {
        index=1
    }
    else{
    index=Math.floor((Math.random()*songs.length)+1)
    }
    music.src=`audio/audio${index}.mp3`
    poster_master_play.src=`images/img${index}.jpg`
    music.play()
   
    let songTitles=songs.filter((el)=>
     {
        return el.id==index
     })
     songTitles.forEach(elss=>{
         let {songName}=elss
         title.innerHTML=songName
     })
     makeAllbackground();
     Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,105,.1)'
     makeAllplays();
     el.target.classList.add('bi-pause-circle-fill')
     el.target.classList.remove('bi-play-circle-fill')
}

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML
    switch(b)
    {
        case 'repeat':
            repeat_music()
            break;
        case 'next':
            next_music()
            break;
        case 'random':
            random_music()
            break;
    }
})