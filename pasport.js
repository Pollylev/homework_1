const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    //const item  = document.getElementsByTagName('p')[0]
    //console.log(item.innerText)
   //item.innerText = 'новое Имя Ivan'

   document.getElementsByTagName('div')[3].innerText="Levina"
    document.getElementsByTagName('div')[4].innerText="Polina"
    document.getElementsByTagName('div')[5].innerText="Ivanovna"
    document.getElementsByTagName('div')[8].innerText="Chebocsary"

}
node_for_click_all.addEventListener("click",find_edit_all)