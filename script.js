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

// const Player = (function Player() {

//     const init = function init() {

//     }
//     return {
//         init: init,
//     }
// })();

const MiniMax = (function MiniMax( percentage ){

    let aiPrecision = percentage;

    const setAiPercentage = (percentage) => {
        aiPrecision = percentage;
    }
    const getAiPercentage = () => {
        return aiPrecision;
    }



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
    }
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
