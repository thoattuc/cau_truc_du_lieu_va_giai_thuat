function function_1() {
    let n = prompt("Please enter n: ", 2);
    if(n != null) {
        let arr_1 = [];
        for(let i=0; i<n; i++) {
            let input = prompt("Please enter number:");
            for(let j=1; j<=arr_1.length; j++) {
                if(arr_1[j-1] === input) {
                    alert("Duplicate :v, ngu!");
                    break;
                }
            }
            arr_1.push(input);
            console.log(arr_1);
        }
        document.getElementById("bai_1").innerHTML = "đã test !";
    }
}

function function_2() {
    let n = prompt("Please enter n");
    let arr_2 = [];
    for(let i=0; i<n; i++) {
        let input = prompt("Please enter number:");
        arr_2.push(input);
    }
    console.log(arr_2);
    document.getElementById("bai_2_begin").innerHTML = "Truoc khi sort: " + arr_2;

    let arr_2_sort = arr_2.sort();
    console.log(arr_2_sort);
    document.getElementById("bai_2_after").innerHTML = "Sau khi sort: " + arr_2_sort;
}

function function_3 () {
    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
        }
        return arr;
    }

    let arr_3 = [];
    let n = prompt("Please enter n");
    for(let i=0; i<n; i++) {
        let input = prompt("Please enter number:");
        arr_3.push(input);
    }
    document.getElementById("bai_3_begin").innerHTML = "Truoc khi sort: " + arr_3;

    let arr_3_sort = insertionSort(arr_3);
    console.log(arr_3_sort);
    document.getElementById("bai_3_after").innerHTML = "Sau khi sort: " + arr_3_sort;
}

function function_4() {
    let n = prompt("Please enter n: ", 2);
    if(n != null) {
        let arr_4 = [];
        let counts = {};
        for(let i=0; i<n; i++) {
            let input = prompt("Please enter number:");
            arr_4.push(input);
        }
        for (let i=0; i<arr_4.length; i++) {
            if (counts[arr_4[i]] === undefined) {
                counts[arr_4[i]] = 1;
            } else {
                counts[arr_4[i]]++;
            }
        }
        console.log(arr_4);
        console.log(counts);
        document.getElementById("bai_4").innerHTML = "so cac phan tu xuat hien: " + counts ;
    }
}