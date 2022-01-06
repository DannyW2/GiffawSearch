let button = document.querySelector('#submitButton')
    

async function getData (event) {
    event.preventDefault()
    let textInput = document.querySelector('#inputBar').value
    let url = `http://api.giphy.com/v1/gifs/search?q=${textInput}&api_key=miI5KUSNa5vKNhaYv7qvuUpQg1Q2cg4c`
    fetch(url)
    .then(res => {
        return res.json()
    })
    
    .then(res => {
       
             document.querySelector('#images').innerHTML = ""
             document.querySelector('#inputBar').value = ""
        

        for (i=0; i<25; i++) {
            let searchImage = document.createElement("img")
            searchImage.src = res.data[i].images.downsized.url
            document.querySelector('#images').appendChild(searchImage)
        }
        // const imageResults = res.data.map((urls) => console.log(urls.images.downsized.url))
        let more = document.querySelector('#moreButton')
        more.addEventListener('click', loadMore)
        more.style.visibility = "visible"

        function loadMore() {
            

            for (i=25; i<50; i++) {
                let searchImage = document.createElement("img")
                searchImage.src = res.data[i].images.downsized.url
                document.querySelector('#images').appendChild(searchImage)
            }

            more.style.visibility = "hidden"
        }
       
        

        console.log("success!", res)
    })

    .catch(err => {
        console.log("error!", err)
    })
}

button.addEventListener('click', getData)