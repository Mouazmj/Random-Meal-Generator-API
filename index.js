const submit = document.getElementById('generate-btn')
const container = document.querySelector('.container')

submit.addEventListener('click', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0]

        const ingredients = []
        for (let i = 0; i <= 20; i++) {
         const ingredient = meal[`strIngredient${i}`]
         const measure = meal[`strMeasure${i}`]

         if (ingredient && ingredient.trim() !== '') {
            ingredients.push(`${measure.trim()} ${ingredient}`)
         }
        }

        container.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="The meal picture">
        <p>${meal.strInstructions}</p>
        <br>
        <p>${ingredients}</p>
        `
        console.log(data)
    })
    .catch(err => console.error(err))
})