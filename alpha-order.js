function getAlphaOrder(arr) {

    let tempMap = new Map();
    let order = 1;
    let sortedOrder = [];

    for(let i = 0; i < arr.length-1; i++) {
        let char = 0;

        // continue until different char
        while(arr[i][char] === arr[i+1][char] && char < arr[i].length-1 && char < arr[i+1].length-1 ) {
            if (!tempMap.has(arr[i][char])) {
                tempMap.set(arr[i][char], order);
                order++;
            }
            char++;
        }

        // add char if not exists increase order
        if(!tempMap.has(arr[i][char])) {
            tempMap.set(arr[i][char], order);
            order++;
        }

        if(!tempMap.has(arr[i+1][char])) {
            tempMap.set(arr[i+1][char], order);
            order++;
        }
        
        // swap order if right is less than
        if(tempMap.get(arr[i][char]) > tempMap.get(arr[i+1][char])) {
            let temp = tempMap.get(arr[i][char]);
            tempMap.set(arr[i][char], tempMap.get(arr[i+1][char]));
            tempMap.set(arr[i+1][char], temp);
        }
    }

    // create ordered array
    for(const [key, order] of tempMap.entries()){
        sortedOrder[order-1] = key;
    }

    return sortedOrder;
}

module.exports = {
    getAlphaOrder
}