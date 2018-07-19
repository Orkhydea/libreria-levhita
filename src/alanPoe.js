(function() {
    const alanPoe = (number) => {
        let crow = "";
        for (let i=0; i<number; i++){
            crow += "Nunca mas";
        }
        return crow;
    };
    
    if (typeof window == 'undefined') {
        console.log('consola');
        module.exports = alanPoe;
    } else {
        console.log('navegador');
        window.alanPoe = alanPoe;
    }   
})();


