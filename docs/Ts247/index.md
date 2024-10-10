---
sidebar_position: 1
---
# Setup tuyển sinh 247
## 1. Run project: 
> Lưu ý tối thiểu cần phiên NodeJS >= 14
* Bước 1: Cài các dependency: `yarn`
* Bước 2:Cập nhật file cấu hình:
   * `cp src/config/config_example.js src/config/config.js`
   * Sửa lại các tham số cấu hình cho đúng trong dó
      * API_URL:đường dẫn api để lấy dữ liệu cho frontend. Lưu ý không có dấu `/` ở cuối đường dẫn. Ví dụ đường dẫn api bản production sẽ là: https://admin-api.tuyensinh247.com
   
* Bước 3: Run project `yarn start`
## 2. Run project dev dùng docker
* Bước 1: Cập nhật file cấu hình:
   * `cp src/config/config_example.js src/config/config.js`
   * Sửa lại các tham số cấu hình cho đúng trong dó
      * API_URL:đường dẫn api để lấy dữ liệu cho frontend. Lưu ý không có dấu `/` ở cuối đường dẫn. Ví dụ đường dẫn api bản production sẽ là: https://admin-api.tuyensinh247.com
* Bước 2:
    -   Install dependencies `yarn install`. Install docker compose
    -   On windows `docker compose -f docker-compose.dev.yml up -d`. On linux `make up`

## 3. Triển khai trên môi trường docker
* Bước 1: Pull code và cập nhật cấu hình:
   * `cp src/config/config_example.js src/config/config.js`
   * Sửa lại các tham số cấu hình cho đúng trong dó
      * API_URL:đường dẫn api để lấy dữ liệu cho frontend. Lưu ý không có dấu `/` ở cuối đường dẫn. Ví dụ đường dẫn api bản production sẽ là: https://admin-api.tuyensinh247.com
* Bước 2: Build service với command
 `docker build -t ts247/admin-gui-v1:{tag phiên bản} -f Dockerfile.prod .`
* Bước 3: Run docker file:

   `docker run -d --name admin-gui-v1 -p 192.168.1.84:3015:80 -p 127.0.0.1:3015:80 ts247/admin-gui-v1:{tag phiên bản}`
 
   Hoặc có thể run image để copy thư mục file tĩnh ra https://cp.tuyensinh247.com/v1/

## 4. Triển khai với habor và portainer + stacks
Sau khi build image + push lên hệ thống habor ta sẽ dùng stack với nội dung như sau để triển khai
```
version: '3'
services:
  admin-gui-v1:
    image: docker-repo.tuyensinh247.com:8443/ts247/admin-gui-v1:latest
    container_name: ts247_admin-gui-v1
    restart: always
    ports:
      - 127.0.0.1:3015:80
      - 192.168.1.84:3015:80
```
Trong đó: 
- 3015 là port lắng nghe mà nginx sẽ forward vào.
- 192.168.1.84 là ip LAN của server được triển khai.


# Tài liệu liên quan
- Tham khảo đặc tả API trả về ở [Repo tài liệu của tuyensinh](https://git.thanhphat.co/ts247/doc)
