let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl= document.getElementById("ul-el")

const leadsFromLocalStorage =  JSON.parse( localStorage.getItems("myLeads") )

if(leadsFromLocalStorage){
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

inputBtn.addEventListener("click",function(){
	
	localStorage.setItem = JSON.stringify(myLeads)
	myLeads.push(inputEl.value)
	inputEl.value = ""
	render(myLeads)
})	

saveTabBtn.addEventListener("click",function(){
	
})

function render(leads){
	let listItems = ""
	for(let i = 0; i < leads.length; i++){
		listItems += `<li> <a href="${leads[i]}" > ${leads[i]} </a> </li>`	
	}
	ulEl.innerHTML = listItems
}
