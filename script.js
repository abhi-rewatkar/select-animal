document.getElementById('animalSelect').addEventListener('change', function() {
    // Get the selected animal value
    const selectedAnimal = this.value;

    // Define the image source based on the selected animal
    const animalImages = {
        dog: 'dog.jpg',
        cat: 'cat.jpg',
        elephant: 'elephant.jpg',
        lion: 'lion.jpg'
    };

    // Update the img src attribute to the corresponding animal image
    document.getElementById('animalImage').src = animalImages[selectedAnimal];
});
