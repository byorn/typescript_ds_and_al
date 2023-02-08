const Palindrome = (strText: string): boolean => {
    let firstHalf = '';
    let secondHalf = '';
    for(let i = 0; i<strText.length/2; i++) {
        firstHalf += strText[i];
    }
    console.log(firstHalf);
    for(let j = strText.length-1; j>strText.length/2-1; j--) {
        secondHalf += strText[j];
    }
    console.log(secondHalf);
    return firstHalf === secondHalf;
}

export default Palindrome;