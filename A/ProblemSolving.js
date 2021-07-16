// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
// Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)
// [JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function adjacentElementsProduct(inputArray) {
    let arr = [];
    for (i = 0; i < inputArray.length - 1; i++) {
        let m = inputArray[i] * inputArray[i + 1];
        arr.push(m);
    }
    let max = Math.max(...arr);
    console.log(max);
}

adjacentElementsProduct([2, 3, -5, -2, 4]);

// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao.
// Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

// Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
// [JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let a1 = [];
    let a2 = [];
    let sum = [];
    for (i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            a1.push(a[i]);
        } else { a2.push(a[i]) };
    }
    let a1Sum = 0;
    let a2Sum = 0;
    for (let i in a1) { a1Sum += a1[i]; };
    for (let i in a2) { a2Sum += a2[i]; };
    sum.push(a1Sum);
    sum.push(a2Sum);
    console.log(sum);
}

alternatingSums([60, 40, 55, 75, 64]);
