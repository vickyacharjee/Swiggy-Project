

// const scriptURL = 'https://script.google.com/macros/s/AKfycbyHM44iUTvBk2ugcbOlfKn2zOwMKRwZKyBRgqDHX1JUgUGSMu7Za65qZNKnLfFoXN-5/exec';

// const form = document.forms['contact-form'];

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   // Display alert message before submitting
//   // alert("Form is being submitted. Please wait...");

//   // Display loading message
//   const loadingMessage = document.createElement('p');
//   loadingMessage.textContent = 'Please wait, the form is being submitted...';
//   form.appendChild(loadingMessage);

//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => {
//       loadingMessage.textContent = "Thank you! Your form is submitted successfully.";
//       // Add an alert after form submission
//       alert("Form submitted successfully!");
//       window.location.reload();
//       document.body.style.backgroundColor = 'green';
//     })
//     .catch(error => {
//       loadingMessage.textContent = 'Error submitting the form. Please try again.';
//       console.error('Error!', error.message);
//     });
// });



// const scriptURL = 'https://script.google.com/macros/s/AKfycbyHM44iUTvBk2ugcbOlfKn2zOwMKRwZKyBRgqDHX1JUgUGSMu7Za65qZNKnLfFoXN-5/exec';
// const form = document.forms['contact-form'];

// // Display loading message
// const loadingMessage = document.createElement('p');
// loadingMessage.textContent = 'Please wait, the form is being submitted...';
// form.appendChild(loadingMessage);

// const updateNetworkStatus = () => {
//   if (navigator.onLine) {
//     loadingMessage.textContent = 'Connected to internet';
//   } else {
//     loadingMessage.textContent = 'Please wait... Slow network or connection issue. Please try again.';
//   }
// };

// // Initial check for network status
// updateNetworkStatus();

// // Listen for online and offline events
// window.addEventListener('online', updateNetworkStatus);
// window.addEventListener('offline', updateNetworkStatus);

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const timeoutId = setTimeout(() => {
//     updateNetworkStatus(); // Check network status after the specified timeout
//   }, 10000); // Adjust the timeout duration as needed

//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => {
//       clearTimeout(timeoutId); // Clear the timeout if the request is successful
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       loadingMessage.textContent = "Thank you! Your form is submitted successfully.";
//       alert("Form submitted successfully!");
//       window.location.reload();
//       document.body.style.backgroundColor = 'green';
//     })
//     .catch(error => {
//       loadingMessage.textContent = 'Error submitting the form. Please try again.';
//       console.error('Error!', error.message);
//     });
// });


const scriptURL = 'https://script.google.com/macros/s/AKfycbyHM44iUTvBk2ugcbOlfKn2zOwMKRwZKyBRgqDHX1JUgUGSMu7Za65qZNKnLfFoXN-5/exec';
const form = document.forms['contact-form'];

// Display loading message
const loadingMessage = document.createElement('p');
loadingMessage.textContent = 'Please wait, the form is being submitted...';
form.appendChild(loadingMessage);

const updateNetworkStatus = () => {
  if (navigator.onLine) {
    loadingMessage.textContent = 'Connected to internet';
  } else {
    loadingMessage.textContent = 'Please wait... Slow network or  kindly check your Network connection😊';
  }
};

// Initial check for network status
updateNetworkStatus();

// Listen for online and offline events
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

form.addEventListener('submit', e => {
  e.preventDefault();

  loadingMessage.textContent = 'Form is being submitting...'; // Update the message

  const timeoutId = setTimeout(() => {
    updateNetworkStatus(); // Check network status after the specified timeout
  }, 6000); // Adjust the timeout duration as needed

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      clearTimeout(timeoutId); // Clear the timeout if the request is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      loadingMessage.textContent = "Thank you! Your form is submitted successfully.";
      alert("Form submitted successfully!");
      window.location.href = '../index.html'
      // window.location.reload();
      // document.body.style.backgroundColor = 'green';
    })
    .catch(error => {
      loadingMessage.textContent = 'Error submitting the form. Please try again.';
      console.error('Error!', error.message);
    });
});



//Back To DBoard Event
function Button() {
  window.location.href = '../index.html';
}










