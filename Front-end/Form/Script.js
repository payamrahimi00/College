// Select the form element
const damageForm = document.getElementById('damageForm');

// Add an event listener for form submission
damageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(damageForm);

    // Convert form data to a structured object
    const formObject = {};
    formData.forEach((value, key) => {
        if (key === 'damagePhotos') {
            formObject[key] = formData.getAll(key); // Handle multiple files
        } else {
            formObject[key] = value;
        }
    });

    // Log the data for testing purposes
    console.log('Form Submitted:', formObject);

    // Display a confirmation message
    alert('Your car damage report has been submitted successfully!');

    // Optionally reset the form
    damageForm.reset();
});

// Mouse pointer effect
document.addEventListener('mousemove', (e) => {
    const pointer = document.createElement('div');
    pointer.className = 'mouse-pointer';
    pointer.style.left = `${e.pageX}px`;
    pointer.style.top = `${e.pageY}px`;
    document.body.appendChild(pointer);

    setTimeout(() => {
        pointer.remove();
    }, 500); // Remove the pointer after 0.5 seconds
});
