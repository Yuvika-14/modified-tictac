let boxes = document.querySelectorAll(".box");
let res = document.querySelector(".butt");
let player = 1;
let gameover = false;
let music= new Audio("audio_file.mp3") // Initialize gameover variable here

// Define wins array outside of the checkwin function
const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];
music.play()
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (player % 2 == 0) {
            box.innerText = "O";
            player++;
        } else {
            box.innerText = "X";
            player++;
        }
        box.disabled = true;
        checkwin();
        
    });
});
// reset button working
res.addEventListener('click',()=>{
    window.location.reload(false);
})




// Function to check for winning
const checkwin = () => {
    let boxtext = document.getElementsByClassName('box');
    let draw=true;
    wins.forEach(t => {                                     
        if ((boxtext[t[0]].innerText === boxtext[t[1]].innerText) && 
            (boxtext[t[1]].innerText === boxtext[t[2]].innerText) && 
            (boxtext[t[0]].innerText !== "")) {
                let winnerImg = document.createElement('img');
            winnerImg.src = 'https://media.tenor.com/2CObo0sh3FYAAAAj/gold-winner.gif';
            winnerImg.alt = 'Winner GIF';
            document.querySelector('.info').innerHTML = boxtext[t[0]].innerText + " won";
            document.querySelector('.info').appendChild(winnerImg);
                gameover = true;
                draw = false;
            }
        });
    
        if (draw && !Array.from(boxtext).some(box => box.innerText === "")) {
            let loser = document.createElement('img');
            loser.src = 'https://media.tenor.com/BxKjcrsh58EAAAAi/oh-no-penguin.gif';
            loser.alt='loser gif';
            loser.style.width = '100px'; 
            // Adjust width as needed
            let infoText = document.createElement('span');
            infoText.textContent = "It's a draw!";
            loser.style.height = 'auto';
            document.querySelector('.info').appendChild(loser);
            
            gameover = true;
        }
        
       

};
