/**
 * Đây là hàm dùng để xóa giá trị trong mảng theo tham sô deleteValue
 * @param {*} deleteValue  là giá trị bất kỳ xí dụ: 2
 * @param {*} arr là 1 mảng số bất kỳ ví dụ: [1,2,3,2,2,2,2]
 * @returns kết quả trả về là true nếu như mảng chứa giá trị đó và xóa được giá trị đo, false khi giá trị deleteValue không tồn tại trong mảng
 */
export function delteItem(deleteValue, arr) { // 1, [1,2,3]
    let ketQua = false; //false là không tìm thấy
    for (let index = arr.length - 1; index >= 0; index--) {
        if (arr[index] === deleteValue) {
            arr.splice(index, 1); // Xử lý xóa
            ketQua = true;
        }
    }
    return ketQua; // true || false
}

export function thayDoiGiaTri(index1, index2, arr) {
    let ketQua = false; // false không tìm thấy
    /*
        Cách 1:
        for(let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === index1) {
                arr[i] = index2 // Xử lý thay đổi
                ketQua = true;
            }
        }
    */

    //Cách 2: Vòng lặp có cú pháp ngắn gọn
    for (let i in arr) {
        if (arr[i] === index1) {
            arr[i] = index2; // Xử lý thay đổi
            ketQua = true;
        }
    }
    return ketQua // true || false
}