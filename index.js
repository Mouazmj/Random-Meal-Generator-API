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
        <p id="instructions">${meal.strInstructions}</p>
        <div class="cat-area">
        <p><strong>Category: </strong>${meal.strCategory}</p>
        <p><strong>Area: </strong>${meal.strArea}</p>
        </div>
        `

        const ul = document.createElement('ul')
        ul.classList.add('ingrediens-ul')
        container.appendChild(ul)
        const h3 = document.createElement('h3')
        h3.innerText = 'Ingredients:'
        ul.appendChild(h3)

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

    
        const ytLink = meal.strYoutube
        if (ytLink) {
        const videoId = ytLink.split("v=")[1].split("&")[0]
        const iframe = document.createElement('iframe')
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.width = 560
        iframe.height = 315
        iframe.allowFullscreen = true
        container.appendChild(iframe)
        }
        
        console.log(data)
    })
    .catch(err => console.error(err))
})
