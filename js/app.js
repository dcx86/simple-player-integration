fetch('https://api.myjson.com/bins/so5pk').then(res => {
  res.text().then(text =>{
    document.querySelector(".player__video").innerHTML = '<source src="http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.mp4" type="video/mp4">'
  })
})