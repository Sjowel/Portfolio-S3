function showBoxes() {
    // Hide the "Press me!" button
    document.getElementById('roundButton').style.display = 'none';

    // Hide the background text when the button is pressed
    document.getElementById('backgroundText').style.display = 'none';

    // Show the rectangle container with animation
    const rectangleContainer = document.getElementById('rectangleContainer');
    rectangleContainer.style.display = 'flex';
    rectangleContainer.style.opacity = 1;

    // Show the background text again after a short delay (when boxes appear)
    setTimeout(function() {
        document.getElementById('backgroundText').style.display = 'block';
    }, 0); 

    // Apply animation to each box
    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach((rectangle, index) => {
        setTimeout(() => {
            rectangle.style.animation = 'showBoxes 0.5s forwards';
        }, index * 200); 
    });
}
