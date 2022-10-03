
let li2= document.querySelectorAll('.list-group-item')
li2[1].style.color='green'
let oddli = document.querySelectorAll('.list-group-item:nth-child(odd)')
for (i=0;i<oddli.length;i++){

    oddli[i].style.backgroundColor='green'
}