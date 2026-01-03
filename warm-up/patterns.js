/* 
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *
 */

let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row = row + "* ";
    }
    console.log(row);
}

/* 
    *
    * *
    * * *
    * * * *
    * * * * *
 */

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (i + 1); j++) {
        row = row + "* ";
    }
    console.log(row);
}

/* 
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5 
*/

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (i + 1); j++) {
        row = row + (j + 1) + " ";
    }
    console.log(row);
}

/* 
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5 
*/

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (i + 1); j++) {
        row = row + (i + 1) + " ";
    }
    console.log(row);
}

/* 
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (n - i); j++) {
        row = row + (j + 1) + " ";
    }
    console.log(row);
}

/* 
    *
   **
  ***
 ****
*****
 */

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
        row = row + " ";
    }
    for (let k = 0; k < (i + 1); k++) {
        row = row + "*";
    }
    console.log(row);
}

/* 
    1
    10
    101
    1010
    10101
 */

for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < (i + 1); j++) {
        row = row + toggle;

        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);
}

/* 
    1
    01
    010
    1010
    10101
 */

let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (i + 1); j++) {
        row = row + toggle;

        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);
}