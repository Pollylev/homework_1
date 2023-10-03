const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    //const item  = document.getElementsByTagName('p')[0]
    //console.log(item.innerText)
   //item.innerText = 'новое Имя Ivan'

    document.getElementsByTagName('span')[0].innerText='Polly'

}
node_for_click_all.addEventListener("click",find_edit_all)


function insert_img(){
    const img=document.createElement('img')
    img.src='./Снимок экрана 2023-09-26 в 13.59.34.png';
    img.alt='примеры работ';
    document.getElementsByTagName("div")[0].appendChild(img); // вставили в div 1(внизу)
    img.height= '90';
    img.width= '160';
    //const container=document.querySelector('#image-container')
    const container=document.getElementById("image-container");
    container.append(img);
}
const node_insert_img = document.getElementById("insert_img")
node_insert_img.addEventListener("click",insert_img)

function insert_table(){
    let table = document.querySelector('#table');
    
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
    
        for (let i = 0; i < 3; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText="QQQQ"
        }
    
        table.appendChild(tr);
    }
    }
    
const node_insert_table = document.getElementById("insert_table")
node_insert_table.addEventListener("click",insert_table)

