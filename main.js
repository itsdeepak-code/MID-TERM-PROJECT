let input = document.getElementById('quoteInput');
let addBtn = document.getElementById('addBtn');
let list = document.getElementById('quoteList');

// convert strings to array
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

function saveToLocalStorage(){
    localStorage.setItem("quotes",JSON.stringify(quotes))
}
function renderQuotes(){
    list.innerHTML = "";
    quotes.forEach((quote,index)=>{
        let li = document.createElement("li");
        li.className = "quote-item fade-in";
        li.innerHTML = `
        <span>${quote}</span>
        <button onclick = "deleteQuote(${index})" class = "delete-btn">Delete</button>`;
        list.appendChild(li);
        setTimeout(() => {
            li.classList.add("show");
        }, 10)
    })
}
function deleteQuote(index){
    quotes.splice(index,1);
    saveToLocalStorage();
    renderQuotes();
}
addBtn.addEventListener("click",() =>{
    let text = input.value.trim();
    if(text === "") return;
    quotes.push(text);
    saveToLocalStorage();
    renderQuotes();
    input.value = "";
})
renderQuotes();