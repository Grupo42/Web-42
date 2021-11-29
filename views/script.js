const album = document.querySelector('.album')
const url = './data.json'

function reqImages() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.map((el, i) => {
        console.log(el[i])

        album.innerHTML += `
        <div class="foto">
          <img src="${el[i]}" />
        </div>
        `
      })
    })
}

reqImages()
