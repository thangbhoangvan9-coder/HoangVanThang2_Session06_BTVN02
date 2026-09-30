let choice;
let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;

let memberName = "";
let membershipPackage = "";
let months = 0;
let ptSessions = 0;
let cardCode = "";
let isRegistered = false;

do {
    console.log("\n========================================");
    console.log("      GYM FITNESS - QUẢN LÝ HỘI VIÊN");
    console.log("========================================");
    console.log("1. Đăng ký và chuẩn hóa hồ sơ hội viên");
    console.log("2. Tính tiền gói tập");
    console.log("3. Quét mã thẻ check-in");
    console.log("4. Báo cáo và thoát");
    console.log("========================================");

    choice = prompt("Nhập lựa chọn: ");

    switch (choice) {
        case "1":
            memberName = prompt("Nhập họ tên hội viên: ")
                .trim()
                .replace(/\s+/g, " ")
                .toUpperCase();

            membershipPackage = prompt(
                "Nhập gói tập (STANDARD/VIP): "
            ).trim().toUpperCase();

            months = Number(prompt("Nhập số tháng đăng ký: "));

            ptSessions = Number(
                prompt("Nhập số buổi PT riêng: ")
            );

            registeredMembers++;
            isRegistered = true;

            console.log("\n--- HỒ SƠ HỘI VIÊN ---");
            console.log("Họ tên:", memberName);
            console.log("Gói tập:", membershipPackage);
            console.log("Số tháng:", months);
            console.log("Số buổi PT:", ptSessions);
            console.log("Đăng ký thành công!");

            break;

        case "2":
            if (!isRegistered) {
                console.log("Vui lòng thực hiện chức năng 1 trước!");
                break;
            }

            let monthlyFee;

            if (membershipPackage === "STANDARD") {
                monthlyFee = 500000;
            } else {
                monthlyFee = 800000;
            }

            let baseFee = monthlyFee * months;
            let ptFee = ptSessions * 300000;
            let discountRate = 0;

            if (months >= 12) {
                discountRate = 0.25;
            } else if (months >= 6) {
                discountRate = 0.15;
            }

            let discountAmount = baseFee * discountRate;
            let totalAmount = baseFee - discountAmount + ptFee;

            totalRevenue += totalAmount;

            console.log("\n--- HÓA ĐƠN ---");
            console.log("Hội viên:", memberName);
            console.log("Gói tập:", membershipPackage);
            console.log("Tiền gói:", baseFee.toLocaleString("vi-VN"), "VNĐ");
            console.log("Tiền PT:", ptFee.toLocaleString("vi-VN"), "VNĐ");
            console.log("Giảm giá:", (discountRate * 100) + "%");
            console.log(
                "Tiền giảm:",
                discountAmount.toLocaleString("vi-VN"),
                "VNĐ"
            );
            console.log(
                "TỔNG TIỀN:",
                totalAmount.toLocaleString("vi-VN"),
                "VNĐ"
            );

            break;

        case "3":
            cardCode = prompt("Nhập mã thẻ hội viên: ")
                .trim()
                .toUpperCase();

            let currentYear = new Date().getFullYear();

            if (
                cardCode.startsWith("GYM-") &&
                cardCode.endsWith(String(currentYear))
            ) {
                checkInCount++;

                console.log("Check-in thành công!");
                console.log("Mã thẻ:", cardCode);
                console.log("Lượt check-in:", checkInCount);
            } else {
                console.log("Mã thẻ không hợp lệ!");
                console.log(
                    "Mã hợp lệ phải bắt đầu bằng GYM- và kết thúc bằng " +
                    currentYear
                );
            }

            break;

        case "4":
            console.log("\n========================================");
            console.log("       BÁO CÁO TỔNG KẾT CA TRỰC");
            console.log("========================================");
            console.log(
                "Số hội viên đăng ký:",
                registeredMembers
            );
            console.log(
                "Số lượt check-in:",
                checkInCount
            );
            console.log(
                "Tổng doanh thu:",
                totalRevenue.toLocaleString("vi-VN"),
                "VNĐ"
            );
            console.log("Cảm ơn bạn đã sử dụng hệ thống!");
            console.log("========================================");

            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

} while (choice !== "4");