const toggleMenu = document.getElementById("toggle_menu");
const overlay = document.querySelector(".overlay");

toggleMenu.addEventListener("click", () => {
  document.querySelector(".nav__links").style.left = "0";
  document.querySelector(".overlay").style.display = "block";
});
overlay.addEventListener("click", () => {
  document.querySelector(".nav__links").style.left = "-150%";
  document.querySelector(".overlay").style.display = "none";
});

const slider = document.querySelector(".prod_imgs");

if (window.outerWidth > 767) {
  slider.innerHTML = `
            <div class="img__slid ">
                        
                            <img src="image/red_shoes1.png" alt="shoes">
                            <img src="image/red_shoes2.png" alt="shoes">
                            <img src="image/red_shoes3.png" alt="shoes">
                            <img src="image/red_shoes4.png" alt="shoes">
                        
                    </div>
                    <div class="img__show">
                        <img src="image/red_shoes1.png" alt="shoes">
                    </div>
    `;
}

const imgShoes1 = document.getElementById('img1');
const imgShoes2 = document.getElementById('img2');
const imgShoes3 = document.getElementById('img3');
const imgShoes4 = document.getElementById('img4');
const imgDisplay = document.getElementById('img-display');

imgShoes1.addEventListener('click',()=>{
    imgDisplay.src = './image/red_shoes1.png'
    
})
imgShoes2.addEventListener('click',()=>{
    imgDisplay.src = './image/red_shoes2.png'
})
imgShoes3.addEventListener('click',()=>{
    imgDisplay.src = './image/red_shoes3.png'
})
imgShoes4.addEventListener('click',()=>{
    imgDisplay.src = './image/red_shoes4.png'
})