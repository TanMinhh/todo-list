# Ứng dụng Quản lý Công việc (Todo List) - MERN Stack

Website Quản lý công việc được xây dựng bằng các công nghệ trong hệ sinh thái MERN Stack (MongoDB, Express.js, React, Node.js). Dự án đáp ứng đầy đủ các tiêu chí về xử lý dữ liệu, lọc, tìm kiếm, phân trang, viết unit test và hỗ trợ đóng gói bằng Docker.

## Tính năng chính

* Hiển thị danh sách công việc với tính năng phân trang và tự động sắp xếp theo thời gian mới nhất.
* Thêm công việc mới và kiểm tra tính hợp lệ của dữ liệu đầu vào.
* Đánh dấu hoàn thành hoặc chưa hoàn thành thông qua checkbox trực quan.
* Chỉnh sửa tiêu đề công việc trực tiếp trên giao diện.
* Xóa công việc khỏi hệ thống.
* Tìm kiếm theo từ khóa và lọc công việc theo trạng thái (Tất cả, Đã hoàn thành, Chưa hoàn thành).
* Giao diện tương thích và responsive trên cả thiết bị di động và máy tính.

## Công nghệ sử dụng

* Backend: Node.js, Express.js, Mongoose, Jest, Supertest.
* Frontend: React, Vite, Axios, CSS thuần.
* Cơ sở dữ liệu: MongoDB.
* Công cụ đóng gói: Docker, Docker Compose.

## Hướng dẫn chạy dự án

Dự án cung cấp hai phương pháp để khởi chạy: sử dụng Docker (khuyến khích) hoặc chạy thủ công bằng Node.js.

### Cách 1: Chạy dự án bằng Docker (Khuyến khích)

Phương pháp này giúp đảm bảo môi trường đồng nhất và không yêu cầu cài đặt phần mềm phụ trợ trên máy cá nhân. Yêu cầu hệ thống đã cài đặt sẵn Docker và Docker Compose.

1. Mở terminal và di chuyển đến thư mục gốc của dự án.
2. Thực thi lệnh sau để xây dựng và khởi động toàn bộ các container:
   ```bash
   docker-compose up --build

### Cách 2: Chạy dự án thủ công

Khởi chạy Backend:
* cd backend
* npm install
* npm start

Khởi chạy Frontend:
* cd frontend
* npm install
* npm run dev

## Cấu trúc thư mục dự án

```text
mern-todo-list/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── vite.config.js
└── docker-compose.yml