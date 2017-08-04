'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result");
    }, 3000);

});

(async function(){
    let a = await promise;
    console.log(a)
})();