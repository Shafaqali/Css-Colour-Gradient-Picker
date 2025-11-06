let mybtn1 = document.getElementById("btn1");
let mybtn2 = document.getElementById("btn2");
let copycodes = document.getElementsByClassName("copycode");
let popmsg = document.getElementsByClassName("Pop-msg-copy");
let rgb1 = "#ff0000";
let rgb2 = "#0000ff";

let myhexcode = ()=>{
    
    
    let str = "0123456789abcdef";
    let hash = "#";
    for(let i=0; i<6; i++){
        hash += str[Math.floor(Math.random()*16)];
    }
    
    console.log(hash);
    return hash;
    
}
let mybtn1handle = ()=>{
    rgb1 = myhexcode();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    mybtn1.innerText = rgb1;
    copycodes[0].innerText = "background-image: linear-gradient(to right, " + rgb1 + ", " + rgb2 + ");";
};

let mybtn2handle = ()=>{
    rgb2 = myhexcode();
    document.body.style.backgroundImage = `linear-gradient(to left, ${rgb1}, ${rgb2})`;
    mybtn2.innerText = rgb2;
    copycodes[0].innerText = "background-image: linear-gradient(to right, " + rgb1 + ", " + rgb2 + ");";
};

mybtn1.addEventListener("click", mybtn1handle);
mybtn2.addEventListener("click", mybtn2handle);






copycodes[0].addEventListener("click", ()=>{
    let code = copycodes[0].innerText;
    navigator.clipboard.writeText(code);
    popmsg[0].style.display = "block";
    popmsg[0].style.opacity = "1";
    setTimeout(()=>{
        popmsg[0].style.opacity = "0";
    }, 1000);
    

    
});
