function getData() {

    const endpoint = "https://api.edamam.com/search?q=chocolate&app_id=f17e54fd&app_key=f3cf67ed2855c1252340eb4934529bff&health=alcohol-free"

    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })
        .then(
            function(json) {
                console.log(json)
                for (var j = 1; j < 10; j++) {

                    // label (name)
                    var namePath = json.hits[j].recipe.label;
                    var name = document.getElementsByClassName("name")[j - 1];
                    name.innerHTML = namePath;

                    // image
                    var imagePath = json.hits[j].recipe.image;
                    var image = document.getElementsByClassName("pic")[j - 1];
                    image.setAttribute("src", imagePath);
                    if (j==4) {
                        image.setAttribute("src","recipes-images/chocolatesnow.jpg")
                    }

                    // ingredientLines
                    var ingredientPath = json.hits[j].recipe.ingredientLines;
                    var ingredients = document.getElementsByClassName("ingredients")[j - 1];
                    for (var i = 0; i < ingredientPath.length; i++) {
                        var item = document.createElement("li");
                        item.appendChild(document.createTextNode(ingredientPath[i]));
                        ingredients.appendChild(item);
                    }

                    // calories/yield (for calories per serving)
                    var caloriesPath = json.hits[j].recipe.calories;
                    var yieldPath = json.hits[j].recipe.yield;
                    var serving = document.getElementsByClassName("serving")[j - 1];
                    serving.innerHTML = `${yieldPath} servings`;
                    var caloriesPerYield = Math.floor(Number(caloriesPath) / Number(yieldPath));
                    var calories = document.getElementsByClassName("cal")[j - 1];
                    calories.innerHTML = `${caloriesPerYield} Calories per Serving`;

                    // healthLabels (first two)
                    var healthPath = json.hits[j].recipe.healthLabels;
                    var health = document.getElementsByClassName("healthLabels")[j - 1];
                    health.innerHTML += `${healthPath[0]}, ${healthPath[1]}`;

                    // url (for full directions)
                    var urlPath = json.hits[j].recipe.url;
                    var link = document.getElementsByClassName("link")[j - 1];
                    link.setAttribute("href", urlPath);

                    // digest labels (first three: carbs, fat, protein)
                    var fatTotalPath = json.hits[j].recipe.digest["0"].total;
                    var carbsTotalPath = json.hits[j].recipe.digest[1].total;
                    var proteinTotalPath = json.hits[j].recipe.digest[2].total;
                    var nutrition = document.getElementsByClassName("nutrition")[j - 1];
                    // total/yield (for amount per Serving)
                    var nutritionArray = [Math.floor(Number(fatTotalPath) / Number(yieldPath)), Math.floor(Number(carbsTotalPath) / Number(yieldPath)), Math.floor(Number(proteinTotalPath) / Number(yieldPath))];
                    document.getElementsByClassName("fat")[j - 1].innerHTML += `${nutritionArray[0]}g`;
                    document.getElementsByClassName("carbs")[j - 1].innerHTML += `${nutritionArray[1]}g`;
                    document.getElementsByClassName("protein")[j - 1].innerHTML += `${nutritionArray[2]}g`;
                }
            })
        .catch(
            err => { console.log(err) })
}

getData()
