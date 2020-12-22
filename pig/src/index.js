let buttons = document.querySelectorAll('.button');
let pigIndex = 0;

let pigs = document.getElementsByClassName('pig');
for (let p of pigs) {
    p.style.display = 'none';
}
pigs[0].style.display = 'block';

for (let b of buttons) {
    b.addEventListener('click', e => {
        // pigs[pigIndex].style['z-index'] = 10;
        // if (pigIndex != lastPig) {
        //     //pigs[pigIndex + 1].style['z-index'] = 0;
        //     pigs[pigIndex + 1].style.display = 'block';
        // }
        // else {
        //     //pigs[0].style['z-index'] = 0;
        //     pigs[0].style.display = 'block';
        // }      
        switch (e.target.className) {            
            case 'button cross':
                pigs[pigIndex].style.animation = 'swipe-l 500ms ease';
                break;
            case 'button star':
                pigs[pigIndex].style.animation = 'swipe-up 500ms ease';
                break;
            case 'button like':
                pigs[pigIndex].style.animation = 'swipe-r 500ms ease';
                break;
        }
        setTimeout(() => {
            //pigs[pigIndex].style['z-index'] = 0;
            pigs[pigIndex].removeAttribute('style');
            pigs[pigIndex].style.display = 'none';
            if (pigIndex != pigCount())
                pigIndex++;
            else
                pigIndex = 0;
            pigs[pigIndex].style.display = 'block';
        }, 500);
    });
}

function pigCount() {
    return document.querySelectorAll('.pig').length - 1;
}

for (let p in pigs) {
    let x, y;
    
    pigs[p].addEventListener('touchstart', function (event) {
        x = event.changedTouches[0].pageX;
        y = event.changedTouches[0].pageY;
    });

    pigs[p].addEventListener('touchend', function (event) {
        let dx = event.changedTouches[0].pageX - x;
        let dy = event.changedTouches[0].pageY - y;
        if (Math.abs(dx) > 50 && Math.abs(dy) < 75) {            
            if (dx > 0) document.querySelector(`.like`).dispatchEvent(new MouseEvent('click')); 
            else document.querySelector(`.cross`).dispatchEvent(new MouseEvent('click'));
        }
        else if (Math.abs(dy) > 75 && Math.abs(dx) < 50) {
            if (dy < 0) document.querySelector(`.star`).dispatchEvent(new MouseEvent('click'));
        }
    });
}
