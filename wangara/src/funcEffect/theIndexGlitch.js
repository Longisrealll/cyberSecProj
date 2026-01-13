export async function ChangeText(){
    const data = document.getElementById("tryingId");
    let theUnchangeText = data.innerText
    
    let theText = data.innerText.length
    for(let k = 0; k<2; k++){
        let i=0;
        let finalText = "THE COLLEGE OF HIGHER LEARNING"
        let longestText = finalText.length

        if(k==1){
            if(theUnchangeText == finalText){
                finalText = "It's time for Lang-era"
                if(longestText < finalText.length)
                    longestText = finalText.length
            }
            while(i<longestText){
                let currentText = data.innerText
                await sleep(2)
                let nextOne = finalText[i]
                if(finalText[i]==undefined){
                    nextOne = String.fromCharCode(32)
                }
                currentText = finalText.substring(0, i) + nextOne + currentText.substring(i+1)
                data.innerText = currentText;
                
                i++;
            }
            return
        }

        while (i<theText){
            let randomData = Math.random() * 127;
            while (randomData >= 0 && randomData <= 31) {
                randomData = Math.random() * 127;
            }
            let currentText = data.innerText
            await sleep(2)
            currentText = currentText.substring(0, i) + String.fromCharCode(randomData) + currentText.substring(i+1, theText)
            data.innerText = currentText;

            i++
        }
    }

}

export function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}