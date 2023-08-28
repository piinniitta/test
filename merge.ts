export function merge(collection_1: number[], collection_2: number[]): number[] {
    let result: number[] = [];
    let index1 = 0;
    let index2 = 0;
    
    while (index1 < collection_1.length && index2 < collection_2.length) {
        if (collection_1[index1] < collection_2[index2]) {
            result.push(collection_1[index1]);
            index1++;
        } else {
            result.push(collection_2[index2]);
            index2++;
        }
    }
    
    while (index1 < collection_1.length) {
        result.push(collection_1[index1]);
        index1++;
    }
    
    while (index2 < collection_2.length) {
        result.push(collection_2[index2]);
        index2++;
    }
    
    return result;
}
