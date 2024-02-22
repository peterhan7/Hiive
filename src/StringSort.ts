export function sortStrings(input: string): string {
    const charactersArray = input.split('');
    charactersArray.sort((a, b) => a.localeCompare(b));
    const sortedString = charactersArray.join('');
    return sortedString.toLowerCase();
}

export function sortStringsWithGivenOrder(input: string, order: string[]): string {
    // input validation here
    // if the custom order doesn't includ all 26 alphabets or include duplicates the function will return '-1'
    let set = new Set<string>(order);
    if(set.size != 26) return '-1';
    let map = new Map<string, number>();
    const charactersArray = input.toLowerCase().split('');
    for(let c of order){
        map.set(c, 0);
    }
    for(let c of charactersArray){
        if(map.has(c)){
            // due to the limitation of ts Map interface
            // ts doesn't keep track of .get() or .set() references
            let count = map.get(c);
            if(count !== undefined){
                // so the .get() here might return undefined
                // I used ! after the get method to get rid of the error (which, after testing won't affect the compilation)
                // I have added a check here to make sure that the value exists before I mutate it
                map.set(c, map.get(c)! + 1); 
            } else {
                throw new Error('Item is undefined');
            }
        }
    }
    let res = '';
    map.forEach((value: number, key: string) => {
        for(let i = 0; i < value; i++){
            res += key;
        }
    });
    return res;
}


let result1 = sortStrings('HiiveIsLive');
console.log(result1);

let result2 = sortStringsWithGivenOrder('HiiveIsLive', 'zyxwvutsrqponmlkjihgfedcba'.split(''));
console.log(result2);
