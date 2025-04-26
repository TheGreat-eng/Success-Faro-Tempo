import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
    initializeFaro,
    getWebInstrumentations,
    faro, // Import faro để dùng API nếu cần (như nút test)
} from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

// Khởi tạo Faro - ĐẢM BẢO URL ĐÚNG
initializeFaro({
    url: 'http://localhost:12347/collect', // Endpoint Alloy nhận dữ liệu Faro
    app: {
        name: 'Simple-Faro-Test-App', // Tên app mới để phân biệt
        version: '1.0.0',
        environment: 'test'
    },
    instrumentations: [
        // Bao gồm các instrument cơ bản và tracing
        ...getWebInstrumentations({
            // Tắt các instrument có thể gây lỗi nếu cần debug thêm
            // captureConsole: false,
        }),
        new TracingInstrumentation(),
        // Tạm thời không dùng ReactIntegration để giảm thiểu phức tạp
    ],
});

// Optional: Thêm nút test gửi trace thủ công (có thể bỏ qua bước này ban đầu)
// try {
//   const { trace, context } = faro.api.getOTEL();
//   if (trace && context) {
//     const tracer = trace.getTracer('manual-init-tracer');
//     const span = tracer.startSpan('init-manual-span');
//     console.log('Attempting init manual span...');
//     span.end();
//   }
// } catch (e) {
//   console.error('Error creating init manual span:', e);
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);