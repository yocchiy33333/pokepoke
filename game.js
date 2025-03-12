const mein = document.getElementById('mein');
const raibaru = document.getElementById('raibaru');
const kusa = document.getElementById('kusa');
const hono = document.getElementById('hono');
const mizu = document.getElementById('mizu');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let endFlag = false;
let myhp = 1000;
let rivalhp = 1000;
function game(num){
if(endFlag){
    return;
}
endFlag=true;

    mein.innerText='戦闘開始！'
    if(num === 0){
        hono.classList.add('hide')
        mizu.classList.add('hide')
    }else if(num === 1){
        kusa.classList.add('hide')
        mizu.classList.add('hide')
    }else{
        kusa.classList.add('hide')
        hono.classList.add('hide')
    }
    const randomNum = Math.floor(Math.random()*3)

if(randomNum === 0){
    raibaru.src="pet_cat_kedukuroi.png";
}else if(randomNum === 1){
    raibaru.src="wani_open.png";
}else{
    raibaru.src="bird_duck_ahiru.png"
}

    if(num === randomNum){
        result.innerText='効果は普通だ'
    }else if(num ===1 && randomNum===0){
        result.innerText='効果は抜群だ'
    }else if(num ===2 && randomNum===1){
        result.innerText='効果は抜群だ'
    }else if(num ===0 && randomNum=== 2){
        result.innerText='効果は抜群だ'
    }else{
        result.innerText='効果は今ひとつだ..'
    }
restart.classList.remove('hide')
}

restart.onclick= () => {
mein.innerText='キャラを選択してください'
raibaru.src="sports_baseball_man_asia.png";
kusa.classList.remove('hide');
hono.classList.remove('hide');
mizu.classList.remove('hide');
result.innerText=' '
restart.classList.add('hide');
endFlag=false;
}
