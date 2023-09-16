/*
For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.
 */


export const getTotalPoints = (rucksacks: string[]):number => {

    const commonChars: string[] = [];
    rucksacks.forEach(rucksack => {

        const halfIndex = rucksack.length / 2;
        commonChars.push(...findCommon(rucksack.substring(0, halfIndex), rucksack.substring(halfIndex)));

    })

    return getTotal(commonChars);
}

export const findCommon = (first:string, second:string):string[] => {
    let commonChars:Set<string> = new Set();
    for (let i=0; i<first.length; i++){
        if ( second.indexOf(first.charAt(i)) !== -1 ) {
            commonChars.add(first.charAt(i))
        }
    }
    return Array.from(commonChars);
}

export const getTotal = (charsWithPoints:string[]):number => {
    let total: number = 0;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i=0; i<charsWithPoints.length; i++){
        if (charsWithPoints[i] === charsWithPoints[i].toLowerCase()){
             total += alphabet.indexOf(charsWithPoints[i]) + 1
        }
        if (charsWithPoints[i] === charsWithPoints[i].toUpperCase()){
            total += alphabet.indexOf(charsWithPoints[i].toLowerCase()) + 1 + 26
        }
    }

    return total;
}

export const getTotalPointsPart2 = (rucksacks: string[]):number => {

    const commonChars: string[] = [];
    let counter = 1;
    let first = ''
    let second = ''
    let third = ''
    rucksacks.forEach(rucksack => {

        switch (counter) {
            case 1: {
                first = rucksack
                break
            }
            case 2: {
                second = rucksack
                break
            }
            case 3: {
                third = rucksack
                break
            }
        }
        if (counter === 3) {
            commonChars.push(...findCommonPart2(first, second, third));
            counter = 1;
        } else {
            counter++;
        }
    })

    return getTotal(commonChars);
}

export const findCommonPart2 = (first:string, second:string, third:string):string[] => {
    let commonChars:Set<string> = new Set();
    for (let i=0; i<first.length; i++){
        if ( second.indexOf(first.charAt(i)) !== -1
        && third.indexOf(first.charAt(i)) !== -1) {
            commonChars.add(first.charAt(i))
        }
    }
    return Array.from(commonChars);
}

