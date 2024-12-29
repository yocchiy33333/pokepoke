const mein = document.getElementById('mein');
const raibaru = document.getElementById('raibaru');
const kusa = document.getElementById('kusa');
const hono = document.getElementById('hono');
const mizu = document.getElementById('mizu');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let endFlag = false;

function game (nun){
if(endFlag){
    return;
}
endFlag=true;

    mein.innerText='戦闘開始！'
    if(nun === 0){
        hono.classList.add('hide')
        mizu.classList.add('hide')
    }else if(nun === 1){
        kusa.classList.add('hide')
        mizu.classList.add('hide')
    }else{
        kusa.classList.add('hide')
        hono.classList.add('hide')
    }
    const randomNum = Math.floor(Math.random()*3)

if(randomNum === 0){
    raibaru.src="visual.png";
}else if(randomNum === 1){
    raibaru.src="visual (1).png";
}else{
    raibaru.src="kuwassu.png"
}

    if(nun === randomNum){
        result.innerText='効果は普通だ'
    }else if(nun ===1 && randomNum===0){
        result.innerText='効果は抜群だ'
    }else if(nun ===2 && randomNum===1){
        result.innerText='効果は抜群だ'
    }else if(nun ===0 && randomNum=== 2){
        result.innerText='効果は抜群だ'
    }else{
        result.innerText='効果は今ひとつだ..'
    }
restart.classList.remove('hide')
}

restart.onclick= () => {
mein.innerText='ポケモンを選択してください'
raibaru.src="sports_baseball_man_asia.png";
kusa.classList.remove('hide');
hono.classList.remove('hide');
mizu.classList.remove('hide');
result.innerText=' '
restart.classList.add('hide');
endFlag=false;
}
