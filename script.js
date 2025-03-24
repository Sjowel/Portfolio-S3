function showBoxes() {
    // Hide the "Press me!" button
    document.getElementById('roundButton').style.display = 'none';

    // Store the state in sessionStorage that the button was pressed
    sessionStorage.setItem('buttonPressed', 'true');

    // Show the background text when the button is pressed
    document.getElementById('backgroundText').style.display = 'block';

    // Show the rectangle container with animation
    const rectangleContainer = document.getElementById('rectangleContainer');
    rectangleContainer.style.display = 'flex';
    rectangleContainer.style.opacity = 1;

    // Apply animation to each box
    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach((rectangle, index) => {
        setTimeout(() => {
            rectangle.style.animation = 'showBoxes 0.5s forwards';
        }, index * 200);
    });
}

// Check if the button has been pressed on page load
window.onload = function() {
    // If the button was previously pressed (within the same session), show the boxes directly
    if (sessionStorage.getItem('buttonPressed') === 'true') {
        document.getElementById('roundButton').style.display = 'none';
        document.getElementById('backgroundText').style.display = 'block';
        document.getElementById('rectangleContainer').style.display = 'flex';
        document.getElementById('rectangleContainer').style.opacity = 1;
    }
};
