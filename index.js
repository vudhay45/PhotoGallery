const images = document.querySelectorAll('.imgtag')
images.forEach((image) => {
  const ImgSrc = image.src
  image.addEventListener('click', () => {
    // console.log(ImgSrc)
    popUp(ImgSrc)
  })
})

const popUp = (ImgSrc) => {
  document.getElementById('pop-image').src = ImgSrc
  // console.log('end', document.getElementById('pop-image'))
}
