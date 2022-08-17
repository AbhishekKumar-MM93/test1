console.log('Hello')
console.log('new Q')


// find an element in a array /


const find = (num) => {

    for (let a = 0; a < arr.length; a++) {
        if (arr[a] === num) {
            return a
        }

    }
}

// console.log(find(12))


// find the two element which give us the sum digit//

const sum = (num) => {
    let ele = []
    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = 1; b < arr.length; b++) {
            if (arr[a] + arr[b] === num) {
                ele.push(a)
                ele.push(b)
                // return ele
            }
        }
    }
    console.log(ele)
}

// sum(8)

let arr = [3, 2, 5, 1, 4]

const sort = () => {
    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] > arr[b]) {
                let temp = arr[a];
                arr[a] = arr[b]
                arr[b] = temp;
            }
        }
        console.log(arr)
    }
    return arr;
}
let result = sort();
console.log(result);


/// star   ***/

const star = (num) => {
    let x = num - 1
    for (let a = 0; a < num; a++) {
        for (let b = 0; b < num; b++) {
            if (x > b) {
                document.write('-')
            } else {

                document.write("*")
            }
        }
        document.write('</br>')
        x--
    }
}

star(6)