import React from 'react';

const Task14 = () => {
    const inputs = `OHFNNCKCVOBHSSHONBNF

SV -> O
KP -> H
FP -> B
VP -> V
KN -> S
KS -> O
SB -> K
BS -> K
OF -> O
ON -> S
VS -> F
CK -> C
FB -> K
CH -> K
HS -> H
PO -> F
NP -> N
FH -> C
FO -> O
FF -> C
CO -> K
NB -> V
PP -> S
BB -> N
HH -> B
KK -> H
OP -> K
OS -> V
KV -> F
VH -> F
OB -> S
CN -> H
SF -> K
SN -> P
NF -> H
HB -> V
VC -> S
PS -> P
NK -> B
CV -> P
BC -> S
NH -> K
FN -> P
SH -> F
FK -> P
CS -> O
VV -> H
OC -> F
CC -> N
HK -> N
FS -> P
VF -> B
SS -> V
PV -> V
BF -> V
OV -> C
HO -> F
NC -> F
BN -> F
HC -> N
KO -> P
KH -> F
BV -> S
SK -> F
SC -> F
VN -> V
VB -> V
BH -> O
CP -> K
PK -> K
PB -> K
FV -> S
HN -> K
PH -> B
VK -> B
PC -> H
BO -> H
SP -> V
NS -> B
OH -> N
KC -> H
HV -> F
HF -> B
HP -> S
CB -> P
PN -> S
BK -> K
PF -> N
SO -> P
CF -> B
VO -> C
OO -> K
FC -> F
NV -> F
OK -> K
NN -> O
NO -> O
BP -> O
KB -> O
KF -> O`

    const data = inputs.trim().split('\n')
    const pairs = data.map((item) => item.split('->')).filter((item) => item.length > 1)
    let initialInput = data[0]
    


    for(let i = 0; i <10; i++) {
        let updatedInput = ''
        for (let j=0; j < initialInput.length-1; j++) {
            // compare current 2 letters with the pairs
            let currentPair = initialInput[j] + initialInput[j+1]
            if(pairs.map((pair)=>pair[0].includes(currentPair))) {
                let middleLetter = pairs.filter((pair)=>pair[0].includes(currentPair))[0][1].trim()
                // add new pair to the updatedInput, we don't need to add the last letter 
                //since we start with it in the next iteration 
                let newPair = initialInput[j] + middleLetter  
                updatedInput = updatedInput + newPair
            }
        }
        // last letter needs to add since all iterations are done and last one is not added
        const lastLetter = initialInput[initialInput.length-1]
        updatedInput = updatedInput + lastLetter
        // update initialInput for the next iteration
        initialInput = updatedInput
    }


    // find how many times Letter appears in the string
    const array = []

    for (let i = 0; i < initialInput.length; i++) {
        if(!array.map((item) => item.letter).includes(initialInput[i])) {
            array.push({letter: initialInput[i], count: 1})
        }
        else {
            array.find((item) => item.letter === initialInput[i]).count++
        }
    }

    const sortedArr = array.sort((a,b) => b.count - a.count)
    const result = sortedArr[0].count - sortedArr[sortedArr.length-1].count


    console.log(result)
    

    return (
        <div>
            result: {result}
        </div>
    );
};

export default Task14;