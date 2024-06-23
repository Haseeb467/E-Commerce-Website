const nav =  document.getElementById('navbar');
const bar =  document.getElementById('bar');
const close =  document.getElementById('close');


if(bar){
    bar.addEventListener(  'click', () => {
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener(  'click', () => {
        nav.classList.remove('active')
    })
}

const mainimg = document.getElementById("mainimg");
const smallim = document.getElementsByClassName("small-image-col");

// <!--  -->

// its is easy way

// <!--  -->

for(let i=0; i<smallim.length; i++){
    smallim[i].addEventListener('click', () =>{
        mainimg.src = smallim[i].children[0].src
    })
}
// <!--  -->

// its is also easy way but hard

// <!--  -->

// for (let i = 0; i < smallim.length; i++) {
//     smallim[i].addEventListener('click', (event) => {
//         mainimg.src = event.currentTarget.children[0].src;
//     });
// }

// <!--  -->

// its is so easy way but lenghty 




// smallimg[0].onclick = () =>{
//     mainimg.src = smallim[0].children[0].src;
// }
// smallimg[1].onclick = () =>{
//     mainimg.src = smallim[1].children[0].src;
// }
// smallimg[2].onclick = () =>{
//     mainimg.src = smallim[2].children[0].src;
// }
// smallimg[3].onclick = () =>{
//     mainimg.src = smallim[3].children[0].src;
   
// }
// <!--  -->