<!-- EditProductForm.vue -->
<template>
  <VaForm ref="form" @submit.prevent="onSave">
    <VaInput
      v-model="formData.product_serial"
      :rules="[(v: string) => !!v || '产品序列号不能为空']"
      label="产品序列号"
      class="mb-4"
    />
    <VaInput
      v-model="formData.product_name"
      :rules="[(v: string) => !!v || '产品名称不能为空']"
      label="产品名称"
      class="mb-4"
    />
    <VaSelect
      v-model="formData.status"
      :options="statusOptions"
      text-by="text"
      value-by="value"
      label="状态"
      class="mb-4"
    />

    <div class="flex justify-end space-x-2">
      <VaButton preset="secondary" @click="$emit('close')">取消</VaButton>
      <VaButton type="submit" :loading="loading">
        {{ editingProduct ? '更新产品' : '添加产品' }}
      </VaButton>
    </div>
  </VaForm>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Product, EmptyProduct } from '../../../pages/projects/types'

interface Props {
  editingProduct?: Product | null
  loading?: boolean
}

interface Emits {
  (e: 'save', product: Omit<EmptyProduct, 'test_items'>): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  editingProduct: null,
  loading: false,
})

const emit = defineEmits<Emits>()

const statusOptions = [
  { value: 'not_started', text: '未开始' },
  { value: 'in_progress', text: '进行中' },
  { value: 'completed', text: '已完成' },
  { value: 'failed', text: '失败' },
]

const formData = ref<Omit<EmptyProduct, 'test_items'>>({
  product_serial: '',
  product_name: '',
  material_id: '' as any,
  status: 'not_started',
})

// 监听编辑产品的变化
watch(
  () => props.editingProduct,
  (newProduct) => {
    if (newProduct) {
      formData.value = {
        product_serial: newProduct.product_serial,
        product_name: newProduct.product_name,
        material_id: newProduct.material_id,
        status: newProduct.status,
      }
    } else {
      // 重置表单
      formData.value = {
        product_serial: '',
        product_name: '',
        material_id: '' as any,
        status: 'not_started',
      }
    }
  },
  { immediate: true },
)

const onSave = () => {
  // 基本验证
  if (!formData.value.product_serial.trim()) {
    return
  }
  if (!formData.value.product_name.trim()) {
    return
  }

  emit('save', { ...formData.value })
}
</script>
