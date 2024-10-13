const searchInput = document.getElementById("search-button");

//this takes the input value(searchbar content)and
//sends a pop up window on 'keydown' alerting you that
//you've searched 'inputValue'

searchInput.addEventListener("click", function () {
  const inputValue = document.getElementById("input").value;
  alert(`You've searched ${inputValue}`);
  console.log(inputValue);
});

const searchBar = document.getElementById("input");
searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputValue = document.getElementById("input").value;
    alert(`You've searched ${inputValue}`);
  }
});

/* .value recieves the raw value from the input
    -getElementById target HTML elements by ID
    -Event listeners sets up a funciton whenever a specific event is called upon
    for example pressing enter will invoke the fucntion to alret of a search
    -used to access values in objects and maniplute them */
