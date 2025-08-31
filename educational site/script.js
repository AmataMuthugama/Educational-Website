let text = "Welcome to \nPhysicsSphere!";
let index = 0;
let index1 = 0;
let text1 = "Your Ultimate Destination for Learning Physics in a Fun and Simplified Way!";

function typeEffect(){
    document.getElementById("head1").textContent += text[index];
    index++;
    if(index< text.length){
        setTimeout(typeEffect,150);
    }
    else{
        typing();
    }
}
typeEffect();

function typing(){
    document.getElementById("p1").textContent += text1[index1];
    index1++;
    if(index1 < text1.length){
        setTimeout(typing,150);
    }
}


