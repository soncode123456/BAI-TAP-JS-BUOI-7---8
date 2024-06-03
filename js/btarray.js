import {delteItem, thayDoiGiaTri} from './method.js'

let arrNumber = [11, 17, 19, 25, 17, 31, 37];

/*
    Bài tập 1: Viết chương trình
*/
document.getElementById('btnInsertNumber').onclick = function(e) {
    // input: Lấy giá trị người dùng nhập
    let newNumber = +document.getElementById('newNumber').value;

    // output: arrNumber sau khi thêm dữ liệu
    // process: xử lý thêm
    arrNumber.push(newNumber);


    document.getElementById('arrNumber').innerHTML = `[${arrNumber}]`;
}

/*
    Bài tập 2: Cho phép người dùng nhập vào 1 giá trị cần xóa, xóa các giá trị trong mảng tương ứng và cập nhập lại mảng vào span#arrNumber. Trong trường hợp không có giá trị đó trong mảng thì hiển thị không tìm thấy giá trị đó
*/
document.getElementById('btnDelete').onclick = function (e) {
    // input: number cần xóa
    let num = +document.getElementById('deleteValue').value;

    // output: arrNumber sau khi thêm dữ liệu
    // process: xử lý xóa
    let ketQua = delteItem(num, arrNumber);
    
    // Hiển thị kết quả
    if(ketQua){
        document.getElementById('arrNumber').innerHTML = `[${arrNumber}]`;
        document.getElementById('info-delete').innerHTML = 'Xóa thành công!';
    } else {
        document.getElementById('info-delete').innerHTML = `không tìm thấy ${num} trong mảng`;

    }
}

/*
    Bài tập 3: Viết chương trình cho phép người dùng nhập vào giá trị gốc và giá trị replace. Thay đổi giá trị đó nếu trong mảng có chứa giá trị đó đông thời hiển thị cập nhập thành công, ngược lại giá trị đó không có trong mảng thì thông báo không tìm thấy
*/
document.getElementById('btnUpdate').onclick = function (e) {
    // input: number
    let giaTriGoc = +document.getElementById('giaTriGoc').value;
    let giaTriMoi = +document.getElementById('giaTriMoi').value;

    // output: arrNumber sau khi thêm dữ liệu
    // process: Xử lý
    let ketQua = thayDoiGiaTri(giaTriGoc, giaTriMoi, arrNumber);

    // Hiển thị kết quả
    if(ketQua) {
        document.getElementById('arrNumber').innerHTML = `[${arrNumber}]`;
        document.getElementById('update-info').innerHTML = "Cập nhập thành công";
    } else{
        document.getElementById('update-info').innerHTML  = `Không tìm thấy ${giaTriGoc} trong mảng`
    }
}