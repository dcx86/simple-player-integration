fetch('https://api.myjson.com/bins/so5pk').then(res => {
  res.text().then(text => {
    const data = JSON.parse(text)
    data.map(video => {
      const posterDiv = document.createElement("div");
      posterDiv.setAttribute('class', 'player_poster');

      const img = document.createElement("img");
      img.setAttribute('src', video.image)

      const description = document.createElement("span");
      description.setAttribute('class', 'player__poster__description');
      description.textContent = video.description;

      posterDiv.appendChild(img);
      posterDiv.appendChild(description);
      posterDiv.addEventListener('click', event => {
        document.querySelector(".player__video").setAttribute('src', video.video)
      })

      document.querySelector(".player__poster__container").appendChild(posterDiv);
    })
    console.log(data) 
    document.querySelector(".player__video").innerHTML = '<source src="http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.mp4" type="video/mp4">'
  })
})