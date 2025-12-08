const submit = document.getElementById('generate-btn')
const container = document.querySelector('.container')

submit.addEventListener('click', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0]
        container.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="The meal picture">
        <p>${meal.strInstructions}</p>
        `
    })
    .catch(err => console.error(err))
})