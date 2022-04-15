const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = (ev) => {
  ev.preventDefault();

  if (inputElement.value) {
    const textElement = document.createElement("span"); 
    textElement.innerHTML = inputElement.value;


    const iRemove = document.createElement("i");
    iRemove.classList.add("fa-solid", "fa-xmark") 

    const liElement = document.createElement("li");
    
    // liElement.innerHTML = `<span>${inputElement.value}</span>`;
    liElement.appendChild(textElement)
    liElement.appendChild(iRemove)


    iRemove.onclick = () => {
      ulElement.removeChild(liElement);  
    }
    

    ulElement.appendChild(liElement);
    inputElement.value = "";
    
  }
};
