function getElemById(id) {
    return document.getElementById(id);
}

const Gameboard = (function Gameboard(){


    const init = function init() {

    }
    return {
        init: init,
    }
})();

const MiniMax = (function MiniMax(){


    const init = function init() {

    }
    return {
        init: init,
    }
})();

const GameController = (function GameController(){

    const init = function init() {

    }
    return {
        init: init,
    }
})();

const DisplayController = (function DisplayController(){

    const init = function init() {

    }
    return {
        init: init,
    
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
