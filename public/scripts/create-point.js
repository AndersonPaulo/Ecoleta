function populateUfs(){
    const UfSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states =>{

    for(const state of states){

        UfSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`


    }    
   
    })
}
populateUfs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option>Selecione a cidade</option>"
    citySelect.disabled = false

    fetch(url)
    .then(res => res.json())
    .then(cities =>{

    for(const city of cities){

        citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`


    }  
    
   
    })
}

document.querySelector("select[name=uf]").addEventListener("change",getCities)

// Itens de Coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){

    item.addEventListener("click",handleSelectedItem)

}

 // atualizar o campo escondido com os itens selecionados
const collectedItens = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi =  event.target
    //Adicionar ou remover uma classe
    // o toggle remove ou add uma classe na teg de acordo coma existencia da mesma
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //Verificar se existem items selecionados , se sim 
    const alreadySelected = selectedItems.findIndex(item =>{
        const itemFound = item == itemId//isso será true ou false

        return itemFound
    })
    // pegar os items selecionados,se já selecionado, tirar da seleção
    if(alreadySelected >=0){
        const filteredItems = selectedItems.filter(item=>{
            
            const itemIsDifferent = intem != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }
     // caso não esta selecionado adicionar a seleção e
    else{

        selectedItems.push(itemId)
    }
   

   //Atualizar o campo escondido com os itens selecionados 

   collectedItens.value = selectedItems



}