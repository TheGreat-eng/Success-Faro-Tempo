Success-Faro-Tempo
Giới thiệu
Success-Faro-Tempo là một dự án mẫu minh họa cách tích hợp và sử dụng Grafana Faro Web SDK và Grafana Tempo để giám sát hiệu suất ứng dụng web (Real User Monitoring - RUM) và truy vết phân tán (distributed tracing). Dự án này nhằm mục đích giúp các nhà phát triển hiểu cách thu thập dữ liệu telemetry từ ứng dụng frontend, chuyển tiếp dữ liệu đến Grafana Tempo để phân tích, và trực quan hóa kết quả bằng Grafana.

Dự án được xây dựng với mục tiêu tuân thủ các quy định về bản quyền và số hữu tri, đảm bảo tất cả nội dung và công cụ được sử dụng đúng cách, có ghi nguồn rõ ràng.

Tính năng chính
Giám sát người dùng thực (RUM): Sử dụng Grafana Faro Web SDK để thu thập dữ liệu hiệu suất, lỗi frontend và hành vi người dùng.
Truy vết phân tán: Tích hợp với Grafana Tempo để lưu trữ và phân tích dữ liệu truy vết từ ứng dụng.
Tích hợp đầy đủ: Kết nối dữ liệu frontend với backend và hạ tầng để đạt được khả năng quan sát toàn diện (full-stack observability).
Triển khai đơn giản: Cung cấp cấu hình cơ bản để dễ dàng triển khai trên Grafana Alloy hoặc Grafana Cloud.
Yêu cầu
Node.js (phiên bản 14 trở lên)
Grafana Alloy hoặc Grafana Cloud instance
Grafana Tempo instance (để lưu trữ dữ liệu truy vết)
Grafana Loki (tùy chọn, để lưu trữ logs)
Trình duyệt hiện đại hỗ trợ JavaScript
