// let tenHocVien1 = 'Nam';
// let tenHocVien2 = 'Nga';
// let tenHocVien3 = 'Khải';

let arrTen = ['Nam', 'Nga', 'Khải', 'Nguyên', 'Minh'];
//CRUD: Create, Read, Update, Delete


// Read:
/*
    let arrTen = ['Nam', 'Nga', 'Khải', 'Nguyên'];
                    0       1       2       3
    index: Chỉ số phần tử của mảng (array)
    lenght: Số lượng phần tử trong mảng ( luôn lớn hơn chỉ số index tối da 1 đơn vị )
    Lấy giá trị từ mảng
    arr[index] => arrTen[1] : Nga
    // Duyệt array
    for(let i = 0; i < 4; i++){
        Nghiệp vụ console.log
        console.log(arrTen[index]);
    }

*/
console.log(arrTen);
// console.log(arrTen[0]);
// console.log(arrTen[1]);
// console.log(arrTen[2]);

for(let index = 0; index < arrTen.length; index++){
    console.log(arrTen[index]);
}

// Create: (insert) : Tạo mới (thêm) giá trị mới vào array (mảng)

/*
    Ví dụ: arr = [value1, value2, value3]
    index:          0       1       3
    Thêm vào đầu .unshift(newValue): [newValue, value1, value2, value3]
    newIndex:                           0          1       3       4
    Thêm vào cuối .push(newValue): [value1, value2, value3, newValue]
    newIndex:                           0       1       2       3

    Các phương thức tương tác với array
    push(newValue): Thêm phần tử vào cuối mảng (Quan Trọng)
    unshift(newValue): Thêm phần tử vào đầu mảng (Làm thay đổi index những phần tử còn lại sau khi thêm)
    pop(): Lấy giá trị cuối ra và xóa giá trị đó khỏi mảng 
    shift(): Lấy giá trị đầu ra và xóa giá trị đó khỏi mảng (Làm thay đổi index những phần tử còn lại sau khi lấy)
*/
// let arrTen = ['Nam', 'Nga', 'Khải', 'Nguyên', 'Minh'];
arrTen.push('Sang');
console.log(arrTen);

let ten1 = arrTen.shift();
console.log(ten1);
console.log(arrTen);

/*
    Update: Cập nhập giá trị trong mảng
    Ví dụ: arr = [value1, value2, value3]
    index:          0       1       3

    arr[index] = newValue;
    Ví dụ: arr[1] = 'Giá trị mới'
    Khi update ta sẽ sử dụng giải thuật tìm kiếm tuần tự (Áp dụng ký thuật đặt cờ)
    // Duyệt mảng dùng if để xác định
    for(let index = 0; index < arr.lenght, index++) {
        if(arr[index] === 'Điều kiện') { // Hoặc > < = .....
            arr[index] = updateValue;
        }
    }
*/
// let arrTen = ['Nam', 'Nga', 'Khải', 'Nguyên', 'Minh'];
// arrTen[0] = 'Nga  pro plus';
// console.log(arrTen);

// let arrTen = ['Nga', 'Khải', 'Nguyên', 'Minh'];
                // 0       1       2       3
// Thay đổi giá trị họ tên Nguyên thành Nguyên plus.
let indexFind = -1;
for(let index = 0; index < arrTen.length; index++) {
    if(arrTen[index] === 'Nguyên') {
        arrTen[index] = 'Nguyên plus';
        indexFind = index; // Đặt cờ hiệu
    }
}
if(indexFind === -1) {
    console.log('Không tìm thấy');
} else {
    console.log('Tìm thấy index =', indexFind);
}

console.log(arrTen);

/*
    Delete: Xóa phần tử (giá trị) trong mảng
    .splice(index, 1): index là vị trí của giá trị cần xóa, số 1: là xóa 1 phần tử tại vị trí index đó
*/
// let arrTen = ['Nga', 'Khải', 'Nguyên', 'Minh'];
                // 0       1       2        3

// arrTen.splice(2, 1);
// console.log(arrTen);
let indexDelte = -1
for(let index = 0; index < arrTen.length; index++) {
    if(arrTen[index] === 'Nguyên plus') {
        indexDelte = index
    }
}
if(indexDelte !== -1) { // Tìm thấy
    arrTen.splice(indexDelte, 1)
}
console.log(arrTen);

// Nâng cao: Xóa các phần tử trùng nhau thì sử dụng giải thuật duyệt ngược mảng
let arrName = ['nam','nam','nam','nga','minh','khải']

for(let index = arrName.length - 1; index >= 0; index--){
    if(arrName[index] === 'nam') {
        arrName.splice(index, 1);
    }
}
console.log(arrName);



/*
---------------------------------------------------
Vòng lặp có cú pháp ngắn gọn: (javascrpit)
    for of: Mỗi lần duyệt sẽ lấy ra 1 giá trị trong mảng
    for in: Mỗi lần duyệt sẽ lấy ra từng giá trị index lần lượt từ 0 -> lenght - 1
*/

let arrPhone = ['0909090','0808080','0707070']
// for(let index = arrPhone.length - 1; index >= 0; index--){}
for(let phoneNumber of arrPhone) { 
    console.log(phoneNumber);
}

for(let index in arrPhone) {
    console.log('index ', index);
    console.log('value ', arrPhone[index]);
}