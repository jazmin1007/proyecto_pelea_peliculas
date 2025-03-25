const fetchData = async(searchTerm) => {
    const response = await axios.get('https://omdbapi.com/',{
        params: {
            apikey: 'c50d022d',
            s: 'avengers'
        }
    })
}

if(response.data.Error){
    return[]
}

console.log(response.data.Search)

//fetchData()
const root = document.querySelector('.autocomplete')
root,innerHTML = `
<label><b>Busqueda de Peliculas</b><label>
<input class="input" />
<div class="dropdown-menu">
<div class="dropdown-content result"></div>
/div>
/div>
`

const input = document.querySelector("input")
const dropdown = document.querySelector('dropdown')
const resultsWrapper = document.querySelector('result')

const debonce = (func, delay = 1000) =>{
    let timeoutId
    return(...arg)=> {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() =>{
            func.apply(null,arg)
        }, delay)
    }
}

const onIput = async(event) => {
    const movies = await fetchData(event.target.value)
    console.log("MOVIE", movies)

if(!movies.length){
    dropdown.classList.remove('is-active')
    return
}
resultWrapped.innerHTML = ``
dropdown.classList.add('is-active')

for(let movie of movies){
    const option = document.createElement('a')
    const imgSrc = movie.Poster === `N/A`?``: movie.Poster
    option.classList.add('dropdown-item')
    option.innerHTML = `
    <img src="${imgSrc}" />
    ${movie.Title}
    `

    option.addEventListener('click', () => {
        dropdown.classList.remove('is-active')
        input.value = movie.Title
        onMovieSelect(movie)
    
    })
    resultsWrapper.appendChild(option)

}
}

input.addEventListener('input',debounce(onIput,1000))

document.addEventListener('click'), event =>{
    const response = await axios.get('https:/www.omdbapi.com/'),{
        params:{ 
            apikey:'',
            i: movie.imdbID
        }
}
}
