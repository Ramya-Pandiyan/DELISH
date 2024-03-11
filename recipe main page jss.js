

document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
      document.querySelectorAll('.modal').forEach(function(modal) {
        modal.style.display = 'none';
      });
    });
  });
  
  document.getElementById('addRecipeBtn').addEventListener('click', function() {
    // Redirect to add recipe page or implement functionality for adding a recipe
    console.log('Add New Recipe clicked');
  });
  
  document.getElementById('exploreRecipesBtn').addEventListener('click', function() {
    // Redirect to explore recipes page or implement functionality for exploring recipes
    console.log('Explore Recipes clicked');
  });
  
  