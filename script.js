//Botão curtida

document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".left-actions .adtion-btn:first-child");
    if(!likeBtn) return;
    const likeSvg = likeBtn. querySelector("svg");

    //localiza o contador

    let textNode = Array.from(likeBtn.childNodes).find(node) => node.nodeType
    === Node.TEXT_NODE && node.textContent.trim() !== ""
});

//zera o contador
let cont = 0;

//atualiza
if (textNode){
    textNode.textContent = `0`;
}

//coração
function applyLikedStyle (){
likeSvg.style.fill="#00BFFF";
likeSvg.style.stroke = "#00BFFF";
likeSvg.style.color = "#00BFFF";


//efeito curtida
likeSvg.style.transform = "scale(1.3)";
setTimeout(() => {likeSvg.style.transform = "scale(1)"150;
    
}, timeout);
}

//para numeros acima de 1000

function formatLikes(num){

    if(num >=1000){
        return(num/1000).tofixed(1)+"k";
    }
    return num.tostring();
}
//incrementar a curtida

function adlike(){
    baseLikes++;
    isLiked= true;
    likeBtn.class.add("liked");

    if(likesCountSpan){
        likesCountSpan.textContent = formatLikes (baseLikes);
    }
    
}