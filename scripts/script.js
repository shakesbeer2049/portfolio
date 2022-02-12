window.onscroll = () => myFunction();

const navbar = document.querySelector("nav")

const sticky = navbar.offsetTop

const myFunction = () => {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
        console.log('runs')
    }
    else{
        navbar.classList.remove("sticky")
        console.log('runs else')
    }
}