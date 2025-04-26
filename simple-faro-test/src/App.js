import React from 'react';
import './App.css';
// Import 'faro' để sử dụng API của nó
import { faro } from '@grafana/faro-react';

// Định nghĩa component nút bấm Test
function SimpleButton() {
    // Hàm xử lý sự kiện click
    const handleClick = () => {
        console.log("Nút Test được nhấn - Đang thử tạo trace..."); // Thêm log để dễ theo dõi
        try {
            // Lấy API OpenTelemetry từ Faro
            const { trace, context } = faro.api.getOTEL();

            // Kiểm tra xem API có sẵn sàng không
            if (trace && context) {
                const tracer = trace.getTracer('button-click-tracer'); // Đặt tên cho tracer
                const span = tracer.startSpan('simple-button-click-manual'); // Đặt tên cho span

                // Đặt span này là span hiện hành trong context (khuyến nghị)
                context.with(trace.setSpan(context.active(), span), () => {
                    console.log('Span thủ công từ nút bấm đã được tạo và kích hoạt.');

                    // (Tùy chọn) Thêm một số thuộc tính (attributes) cho span
                    span.setAttribute('button.name', 'Test Button');
                    span.setAttribute('clicked.at', new Date().toISOString());

                    // !!! QUAN TRỌNG: Kết thúc span !!!
                    // Nếu không gọi end(), span sẽ không bao giờ hoàn thành và gửi đi.
                    span.end();
                    console.log('Span thủ công từ nút bấm đã kết thúc.');
                });
            } else {
                // Ghi log nếu API chưa sẵn sàng
                console.error('Faro OTEL API (trace hoặc context) chưa sẵn sàng.');
            }
        } catch (e) {
            // Bắt lỗi nếu có vấn đề trong quá trình tạo span
            console.error('Lỗi khi tạo span từ nút bấm:', e);
        }
    };

    // Trả về phần tử JSX là nút bấm
    return (
        <button onClick={handleClick}>
            Gửi Trace Test Thủ Công
        </button>
    );
}


// Component App chính
function App() {
    return (
        <div className="App">
            <h1>Simple React App for Faro Test</h1>
            <p>
                Ứng dụng này dùng để kiểm tra xem Faro có gửi được trace "Document Load"
                (và trace từ nút bấm nếu có) đến Alloy hay không, mà không bị ảnh hưởng
                bởi lỗi của ứng dụng gốc.
            </p>
            <hr />
            {/* Thêm phần hiển thị nút bấm test vào đây */}
            <h2>Test Trace Thủ Công</h2>
            <SimpleButton /> {/* Gọi component nút bấm */}
            <p>Nhấn nút trên và kiểm tra Console, Network (Payload), và Grafana Tempo.</p>
        </div>
    );
}

export default App; // Đảm bảo bạn export App