
export async function ChangeText(theText, shuffleLen, changId){
    const data = document.getElementById(changId);

    for(let k = 0; k<shuffleLen; k++){
        let i=0;
        let finalText = theText
        let longest = finalText.length

        if(k==shuffleLen-1){
            while(i<longest){
                let currentText = data.innerText
                await sleep(15)
                data.innerText = finalText.substring(0, i+1) + ShuffleAllAtOnce(currentText.substring(i+1, longest));
                i++;
            }
            return
        }

        let randomData = Math.random() * 127;
        while (randomData >= 0 && randomData <= 31) {
            randomData = Math.random() * 127;
        }
        let currentText = data.innerText
        await sleep(80)
        currentText = ShuffleAllAtOnce(theText)
        data.innerText = currentText;

    }

}

export function ShuffleAllAtOnce(text){
    let fin=""
    for(let i = 0; i<text.length; i++){
        let randomizer = Math.floor(Math.random()*127);
        while(randomizer<=31){
            randomizer = Math.floor(Math.random()*127);
        }
        if(i==text.length-1 || i == 0){
            randomizer = 95
        }
        fin += String.fromCharCode(randomizer)
    }
    return fin
}

export function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}