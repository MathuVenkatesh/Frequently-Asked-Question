//variables

let accordion = document.querySelectorAll('.content-container');
//  console.log(accordion, accordion.length);

for(let i=0; i<accordion.length; i++){
accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
})

}