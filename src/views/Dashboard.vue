<template>
    <div class="dashboard">
        <h1>Chào mừng, {{ userData.name || 'Người dùng' }}!</h1>
        <p>Đây là khu vực được bảo vệ. Chỉ những người đã đăng nhập mới thấy được trang này.</p>
        <div v-if="userData">
            <p><strong>Mã nhân viên:</strong> {{ userData.employeeId }}</p>
            <p><strong>Email:</strong> {{ userData.email }}</p>
        </div>
        <button @click="logout">Đăng xuất</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// Import instance cần xác thực, CÓ interceptor
import { authApiClient } from '@/services/api'; 

const userData = ref(null);

onMounted(async () => {
    try {
        // Dùng authApiClient, token sẽ được tự động gắn vào header
        const response = await authApiClient.get('/user/profile');
        userData.value = response.data;
    } catch (error) {
        console.error("Không thể lấy dữ liệu người dùng:", error);
        // Có thể xử lý chuyển hướng về trang login nếu token hết hạn (lỗi 401)
    }
});
</script>