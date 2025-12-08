const submit = document.getElementById('generate-btn')

submit.addEventListener('click', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
})