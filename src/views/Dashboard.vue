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

<script>
import apiClient from '@/services/api';

export default {
    data() {
        return {
            userData: {}
        };
    },
    methods: {
        async fetchUserData() {
            try {
                // Lấy thông tin người dùng hiện tại
                const response = await apiClient.get('/users/me');
                this.userData = response.data;
            } catch (error) {
                console.error("Không thể lấy dữ liệu người dùng:", error);
            }
        },
        logout() {
            localStorage.removeItem('user-token');
            this.$router.push('/login');
        }
    },
    mounted() {
        // Gọi hàm lấy dữ liệu người dùng khi component được tạo
        this.fetchUserData();
    }
}
</script>