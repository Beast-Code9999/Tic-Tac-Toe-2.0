const Gameboard = (function Gameboard(){

})();

const MiniMax = (function MiniMax(){

})();
 
const TicTacToe = (function TicTacToe(){


    const init = function init() {

    };

    return {
        init: init
    }
})();

window.addEventListener('load', function(){
    TicTacToe.init();    
})



// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear();
    footer.textContent = year;
};
addDynamicFooterDate();
