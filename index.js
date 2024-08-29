let facebtn = document.getElementById('face-btn')
let colorbtn = document.getElementById('color-btn')
let hornsbtn = document.getElementById('horns-btn')
let tailbtn = document.getElementById('tail-btn')
let imgElem = document.getElementById('face')

let doctRoot = document.querySelector(':root')
let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
let colors = [...bodyColors , 'transparent']
let [facecounter,colorcounter,hornscounter,tailcounter] = [0,0,0,0]

const setCounter = (counter , length) => {
    return counter < length -1 ? counter +1 :  0
}

function faceHandler(){
    facecounter = setCounter(facecounter , 6)
    imgElem.setAttribute('src' , `face-${facecounter}.png`)

}

function colorHandler(){
    colorcounter = setCounter(colorcounter , bodyColors.length)
    doctRoot.style.setProperty('--color-character' , bodyColors[colorcounter])

}

function hornsHandler(){
    hornscounter = setCounter(hornscounter , colors.length)
    doctRoot.style.setProperty('--color-horns' , colors[hornscounter])

}

function tailHandler(){
    tailcounter = setCounter(tailcounter , colors.length)
    doctRoot.style.setProperty('--color-tail',colors[tailcounter])

}


facebtn.addEventListener('click',faceHandler)
colorbtn.addEventListener('click',colorHandler)
hornsbtn.addEventListener('click',hornsHandler)
tailbtn.addEventListener('click',tailHandler)