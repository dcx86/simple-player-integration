fetch('https://api.myjson.com/bins/so5pk').then(res => {
  res.text().then(text =>{
    console.log(text)
  })
})