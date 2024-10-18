
const date1 = "2023-10-19"; // Ngày bắt đầu
function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = day+"/"+month+"/"+date.getFullYear()+", "+hour + ":" + min;

    return str;
}
function nuitick() {
    $("#nuitime").text(getFormattedDate());

    const result = calculateDifferenceInYearsMonthsDays(date1);
    $("#count_year").text(result.years);
    $("#count_month").text(result.months);
    $("#count_day").text(result.days);
}
setInterval(nuitick, 1000);
nuitick();
function calculateDifferenceInYearsMonthsDays(date1) {
    // Chuyển đổi ngày đầu tiên thành đối tượng Date
    const startDate = new Date(date1);

    // Lấy ngày hiện tại
    const endDate = new Date();

    // Kiểm tra nếu ngày đầu tiên lớn hơn ngày hiện tại
    if (startDate > endDate) {
        console.log("Ngày đầu tiên lớn hơn ngày hiện tại.");
        return {
            years: 0,
            months: 0,
            days: 0
        };
    }

    // Tính số năm
    let years = endDate.getFullYear() - startDate.getFullYear();

    // Tính số tháng
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) {
        years--; // Nếu tháng âm, giảm 1 năm
        months += 12; // Thêm 12 tháng (để chuyển từ âm sang dương)
    }

    // Tính số ngày
    let days = endDate.getDate() - startDate.getDate();
    if (days < 0) {
        // Lấy số ngày của tháng trước đó
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate(); // Thêm số ngày của tháng trước đó
        months--; // Giảm 1 tháng nếu số ngày âm
        if (months < 0) {
            months += 12;
            years--; // Nếu tháng âm, giảm 1 năm
        }
    }

    // Trả về kết quả là số năm, tháng và ngày
    return {
        years: years,
        months: months,
        days: days
    };
}