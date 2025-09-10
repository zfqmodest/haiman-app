<script setup lang="ts">
import { PropType, ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { TestingItem, EmptyTestingItem } from '../types'

const { t } = useI18n()

const props = defineProps({
  testingItem: {
    type: Object as PropType<TestingItem | null>,
    default: null,
  },
  saveButtonLabel: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  save: [testingItem: TestingItem | EmptyTestingItem]
  close: []
}>()

// 表单数据
const form = ref<EmptyTestingItem>({
  item_code: '',
  item_name: '',
  item_type: 'data_analysis', // 默认为数据判断
  description: '',
})

// 是否为编辑模式
const isEdit = computed(() => props.testingItem !== null)

// 重置表单
const resetForm = () => {
  form.value = {
    item_code: '',
    item_name: '',
    item_type: 'data_analysis',
    description: '',
  }
}

// 监听 testingItem 变化，用于编辑模式
watch(
  () => props.testingItem,
  (newTestingItem) => {
    if (newTestingItem) {
      form.value = {
        item_code: newTestingItem.item_code,
        item_name: newTestingItem.item_name,
        item_type: newTestingItem.item_type,
        description: newTestingItem.description || '',
      }
    } else {
      resetForm()
    }
  },
  { immediate: true },
)

// 表单验证
const isValid = computed(() => {
  return form.value.item_code.trim() !== '' && form.value.item_name.trim() !== '' && form.value.item_type.length > 0
})

// 检查表单是否有未保存的更改
const isFormHasUnsavedChanges = computed(() => {
  return (
    form.value.item_code.trim() !== '' ||
    form.value.item_name.trim() !== '' ||
    (form.value.description && form.value.description.trim() !== '')
  )
})

defineExpose({
  isFormHasUnsavedChanges,
})

// 保存表单
const save = () => {
  if (!isValid.value) return

  if (isEdit.value && props.testingItem) {
    // 编辑模式
    const updatedTestingItem: TestingItem = {
      ...props.testingItem,
      item_code: form.value.item_code.trim(),
      item_name: form.value.item_name.trim(),
      item_type: form.value.item_type,
      description: form.value.description?.trim() || '',
    }
    emit('save', updatedTestingItem)
  } else {
    // 新增模式
    const newTestingItem: EmptyTestingItem = {
      item_code: form.value.item_code.trim(),
      item_name: form.value.item_name.trim(),
      item_type: form.value.item_type,
      description: form.value.description?.trim() || '',
    }
    emit('save', newTestingItem)
  }
}

// 关闭表单
const close = () => {
  emit('close')
}

// 测试项类型选项
const typeOptions = computed(() => [
  {
    value: 'data_analysis',
    text: t('testingItems.types.data_analysis'),
  },
  {
    value: 'average_analysis',
    text: t('testingItems.types.average_analysis'),
  },
  {
    value: 'subjective_analysis',
    text: t('testingItems.types.subjective_analysis'),
  },
])
</script>

<template>
  <VaForm class="flex flex-col gap-4">
    <div class="row">
      <!-- 1. 编号 -->
      <VaInput
        v-model="form.item_code"
        :label="t('testingItems.form.itemCode')"
        :placeholder="t('testingItems.form.itemCodePlaceholder')"
        :rules="[(v: string) => !!v.trim() || t('testingItems.form.itemCodeRequired')]"
        required
      />
    </div>

    <div class="row">
      <!-- 2. 测试项内容 -->
      <VaInput
        v-model="form.item_name"
        :label="t('testingItems.form.itemName')"
        :placeholder="t('testingItems.form.itemNamePlaceholder')"
        :rules="[(v: string) => !!v.trim() || t('testingItems.form.itemNameRequired')]"
        required
      />
    </div>

    <div class="row">
      <!-- 3. 类型 -->
      <VaSelect
        v-model="form.item_type"
        :label="t('testingItems.form.itemType')"
        :options="typeOptions"
        value-by="value"
        text-by="text"
        required
      />
    </div>

    <div class="row">
      <!-- 4. 描述 -->
      <VaTextarea
        v-model="form.description"
        :label="t('testingItems.form.description')"
        :placeholder="t('testingItems.form.descriptionPlaceholder')"
        rows="3"
        autosize
        counter
        max-length="500"
      />
    </div>

    <!-- 操作按钮 -->
    <div class="flex gap-2 justify-end">
      <VaButton preset="secondary" color="secondary" @click="close">
        {{ t('testingItems.form.cancel') }}
      </VaButton>
      <VaButton :disabled="!isValid" @click="save">
        {{ saveButtonLabel || t('testingItems.form.save') }}
      </VaButton>
    </div>
  </VaForm>
</template>
