const submit = document.getElementById('generate-btn')
const container = document.querySelector('.container')

submit.addEventListener('click', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0]

        const ingredients = []

        container.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="The meal picture">
        <p>${meal.strInstructions}</p>
        `

        const ul = document.createElement('ul')
        ul.classList.add('ingrediens-ul')
        container.appendChild(ul)

        for (let i = 1; i <= 20; i++) {
         const ingredient = meal[`strIngredient${i}`]
         const measure = meal[`strMeasure${i}`]

         if (ingredient && ingredient.trim() !== '') {
            ingredients.push(`${measure.trim()} ${ingredient}`)

            const li = document.createElement('li')
            const theUl = document.querySelector('.ingrediens-ul')
            theUl.appendChild(li)
            li.innerText = `${measure.trim()} ${ingredient}`
         }
        }

        const iframe = document.createElement('iframe')
        container.appendChild(iframe)
        iframe.src = `${meal.strYoutube}`
        
        console.log(data)
    })
    .catch(err => console.error(err))
})