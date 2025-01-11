document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".progress");
    progresses.forEach(progress => {
      const percentage = progress.getAttribute("data-percentage");
      progress.style.width = `${percentage}%`;
    });
  });
  
 



  function submitForm() {
    event.preventDefault();
    window.location.href = "thank_you.html";
    return false;
  }
 

  const hamburger = document.querySelectorAll('#hamburger').forEach((hamburger, index) => {
    const menu = document.querySelectorAll('.menu') [index];
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
  }
);

});

document.querySelectorAll(".enroll-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const plan = this.getAttribute("data-plan");
    const price = this.getAttribute("data-price");
    document.getElementById("selected-plan").querySelector("span").textContent = plan;
    document.getElementById("plan-price").querySelector("span").textContent = price;
    document.getElementById("modal").style.display = "block";
  });
});
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
document.getElementById("confirm-btn").addEventListener("click",function() {
  document.getElementById("modal").style.display ="none";
  

  alert("You have successfully subscribed to the plan.Welcome to the gym!");
}

);



  
  
  
  
  
  
  
  