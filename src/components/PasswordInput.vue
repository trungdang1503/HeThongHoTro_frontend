<template>
    <div class="form-group">
      <label v-if="label" :for="id" class="form-label">{{ label }}</label>
      <div class="input-wrapper">
        <input
          :type="passwordFieldType"
          :id="id"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :placeholder="placeholder"
          class="form-control-custom"
          required
        />
        <i
          :class="['input-icon', passwordIconClass]"
          @click="togglePasswordVisibility"
        ></i>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // --- ĐỊNH NGHĨA PROPS VÀ EMITS ĐỂ GIAO TIẾP VỚI COMPONENT CHA ---
  
  // Props: Dữ liệu component cha truyền vào (tương tự tham số của hàm)
  defineProps({
    modelValue: { // Bắt buộc, để hoạt động với v-model
      type: String,
      required: true,
    },
    label: { // Không bắt buộc
      type: String,
      default: '',
    },
    id: { // Bắt buộc để label hoạt động đúng
      type: String,
      required: true,
    },
    placeholder: { // Không bắt buộc
      type: String,
      default: 'Mật khẩu',
    },
  });
  
  // Emits: Sự kiện mà component con gửi ra cho component cha
  defineEmits(['update:modelValue']);
  
  
  // --- LOGIC XỬ LÝ NỘI BỘ CỦA COMPONENT ---
  
  const isPasswordVisible = ref(false);
  
  const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
  };
  
  const passwordFieldType = computed(() => {
    return isPasswordVisible.value ? 'text' : 'password';
  });
  
  const passwordIconClass = computed(() => {
    return isPasswordVisible.value ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  });
  </script>
  
  <style scoped>
  /* CSS này chỉ ảnh hưởng đến component PasswordInput */
  .form-group {
      margin-bottom: 1.5rem;
  }
  .input-wrapper {
      position: relative;
  }
  
  .form-control-custom {
      height: 40px;
      width: 100%;
      padding: 16px 12px 16px 12px;
      font-size: 1rem;
      color: #333;
      background-color: transparent;
      border: none;
      border: 1px #999999 solid;
      border-radius: 8px;
      transition: border-color 0.3s ease;
  }
  
  .input-icon {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      color: #aaa;
      cursor: pointer;
      transition: color 0.2s ease;
  }
  
  .input-icon:hover {
      color: #007bff;
  }
  </style>