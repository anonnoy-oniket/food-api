const searchResult = (e) => {
    document.getElementById("card-container").innerHTML = "";
    const name = document.getElementById("search").value;
    console.log(name);
    document.getElementById("search").value = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((res) => res.json())
        .then((data) => {
            const meals = data.meals;
            console.log(meals);
            console.log(data)
            if (meals == null) {
                const h1 = document.createElement("h1");
                h1.innerText = "NOTHING FOUND :'(";
                document.getElementById("card-container").appendChild(h1);
                return;
            }
            meals.forEach(meal => {
                createCard(meal.idMeal, meal.strMeal, meal.strCategory, meal.strArea, meal.strMealThumb, meal.strTags);
            });
        })
        .catch(err => {
            const p = document.createElement("h1");
            p.innerText = "THERE IS A TECHNICAL ISSUE :'(";
            document.getElementById("card-container").appendChild(p);
            console.log(err);
        })
}

const createCard = (id, name, catagory, origin, image, tags) => {
    const cardsContainer = document.getElementById("card-container");
    const div = document.createElement("div");
    div.className = "col-3 mb-4";
    div.innerHTML = `
        <div class="card" style="width: 16rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Catagory: ${catagory}</p>
                <p class="card-text">Origin: ${origin}</p>
                <p class="card-text">Tags: ${tags}</p>
                <div class = "container d-flex">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${id}">
                    Details
                    </button>
                </div>
            </div>
        </div>    

    <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${id}Label">${name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class = "card" style="width: 50%; margin-left: 25%;">
                        <img src="${image}" class="card-img-top" alt="...">
                    </div>
                    <h4>Catagory: ${catagory}</h4>
                    <h4>Origin: ${origin}</h4>
                    <h4>Tags: ${tags}</h4>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
    cardsContainer.appendChild(div);
    console.log(cardsContainer);

}


fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
        .then((res) => res.json())
        .then((data) => {
            const meals = data.meals;
            console.log(meals);
            console.log(data)
            if (meals == null) {
                const h1 = document.createElement("h1");
                h1.innerText = "NOTHING FOUND :'(";
                document.getElementById("card-container").appendChild(h1);
                return;
            }
            document.getElementById("card-container").innerHTML = "";
            meals.forEach(meal => {
                createCard(meal.idMeal, meal.strMeal, meal.strCategory, meal.strArea, meal.strMealThumb, meal.strTags);
            });
        })
        .catch(err => {
            const p = document.createElement("h1");
            p.innerText = "THERE IS A TECHNICAL ISSUE :'(";
            document.getElementById("card-container").appendChild(p);
            console.log(err);
        })






















