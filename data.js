const KEY = 'demo_content';

// Giá trị mặc định khi chưa có dữ liệu lưu
if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, 'hello');
}

export function setContent(text) {
    localStorage.setItem(KEY, text);
}

export function getContent() {
    return localStorage.getItem(KEY) || 'hello';
}
