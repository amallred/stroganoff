document.getElementById('servingForm').addEventListener('submit', function(e) {
    // Prevent the form from submitting normally
    e.preventDefault();

    // Get the number of servings from the user input
    var servings = document.getElementById('servings').value;

    // Get all the ingredients from the ingredient list
    var ingredients = document.getElementById('ingredientList').getElementsByTagName('li');

    // Get the calculated ingredients list
    var calculatedIngredientsList = document.getElementById('calculatedIngredientsList');

    // Clear the calculated ingredients list
    calculatedIngredientsList.innerHTML = '';

    // Loop through each ingredient
    for(var i = 0; i < ingredients.length; i++) {
        // Split the ingredient into quantity and item
        var ingredientParts = ingredients[i].innerText.split(' ');

        // Get the quantity and convert it to a number
        var quantity = Number(ingredientParts.shift());

        // Update the quantity based on the number of servings
        quantity *= servings;

        // Add the updated ingredient to the calculated ingredients list
        calculatedIngredientsList.innerHTML += '<li>' + quantity + ' ' + ingredientParts.join(' ') + '</li>';
    }
});