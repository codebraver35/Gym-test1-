//wait for the DOM content to be fully loaded before excuting any scripts
document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".progress");
    progresses.forEach(progress => {
      // select all elements with the class "progress"
      const percentage = progress.getAttribute("data-percentage");
      //set the width of the progress bar according to the percentage value
      progress.style.width = `${percentage}%`;
    });
  });
  
 


//function to handle form submission 
  function submitForm() {
    //prevent the deafult form submission behavior
    event.preventDefault();
    //redirect to the "thank_you.html" page
    window.location.href = "thank_you.html";
    //return false to prevent any further actions
    return false;
  }
 
//select all elements with the ID "hamburger and loop each one"
  const hamburger = document.querySelectorAll('#hamburger').forEach((hamburger, index) => {
    //select the corresponding menu for each humburger
    const menu = document.querySelectorAll('.menu') [index];
    //add a click event listener to toggle the "active" class to the menu
    hamburger.addEventListener('click', () => {

        menu.classList.toggle('active');
  }
);

});
//select all elements with the class "enroll-btn" and loop through each one
document.querySelectorAll(".enroll-btn").forEach((button) => {
  //add a click event listener to each button
  button.addEventListener("click", function () {
    //get the plan and the price from the button's data attributes
    const plan = this.getAttribute("data-plan");
    const price = this.getAttribute("data-price");
    //update the plan's price displayed in the modal
    document.getElementById("selected-plan").querySelector("span").textContent = plan;
    document.getElementById("plan-price").querySelector("span").textContent = price;
    // show the modal
    document.getElementById("modal").style.display = "block";
  });
});
//add a click event listener to the close button to hide the modal
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
// add a click event listener to close the modal if clicked outside the modal
window.addEventListener("click", function (event) {
  // check if the clicked element is the modal itself
  if (event.target === document.getElementById("modal")) {
    //hide the modal if clicked outside
    document.getElementById("modal").style.display = "none";
  }
});
// add a click event listener to confirm button in the modal
document.getElementById("confirm-btn").addEventListener("click",function() {
  //Hide the modal when the confirm button is clicked
  document.getElementById("modal").style.display ="none";
  
//Show an alert message to indicate successful subscription
  alert("You have successfully subscribed to the plan.Welcome to the gym!");
}

);



  
  
  
  
  
  
  
  