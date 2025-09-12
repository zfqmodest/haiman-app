<script setup lang="ts">
import { PropType, computed, ref } from 'vue'
import { useForm } from 'vuestic-ui'
import { Material, EmptyMaterial } from '../types'
import { createValidators } from '../../../services/utils'

const validators = createValidators() // 使用支持 i18n 的验证器

const props = defineProps({
  material: {
    type: Object as PropType<Material | null>,
    default: null,
  },
  saveButtonLabel: {
    type: String,
    default: 'Save',
  },
})

const defaultNewMaterial: EmptyMaterial = {
  material_code: '',
  material_name: '',
  product_count: 0,
  test_items: [],
}

const newMaterial = ref<EmptyMaterial>({ ...defaultNewMaterial })

const isFormHasUnsavedChanges = computed(() => {
  return Object.keys(newMaterial.value).some((key) => {
    if (props.material && props.material[key as keyof Material] !== newMaterial.value[key as keyof EmptyMaterial]) {
      return true
    }

    return (
      !props.material &&
      newMaterial.value[key as keyof EmptyMaterial] !== defaultNewMaterial[key as keyof EmptyMaterial]
    )
  })
})

defineExpose({
  isFormHasUnsavedChanges,
})

const form = useForm('add-material-form')

const emit = defineEmits<{
  (event: 'save', material: Material | EmptyMaterial): void
  (event: 'close'): void
}>()

const onSave = async () => {
  // 检查必填字段
  const isValid =
    newMaterial.value.material_code.trim() !== '' &&
    newMaterial.value.material_name.trim() !== '' &&
    newMaterial.value.product_count > 0

  if (isValid) {
    if (props.material) {
      // 编辑模式：传回完整的Material对象
      const updatedMaterial: Material = {
        ...props.material,
        material_code: newMaterial.value.material_code,
        material_name: newMaterial.value.material_name,
        product_count: newMaterial.value.product_count,
        test_items: newMaterial.value.test_items,
      }
      emit('save', updatedMaterial)
    } else {
      // 添加模式：传回EmptyMaterial对象
      emit('save', newMaterial.value)
    }
  }
}

const testItemInput = ref('')

const addTestItem = () => {
  if (testItemInput.value.trim() && !newMaterial.value.test_items.includes(testItemInput.value.trim())) {
    newMaterial.value.test_items.push(testItemInput.value.trim())
    testItemInput.value = ''
  }
}

const removeTestItem = (index: number) => {
  newMaterial.value.test_items.splice(index, 1)
}

if (props.material) {
  newMaterial.value = {
    material_code: props.material.material_code,
    material_name: props.material.material_name,
    product_count: props.material.product_count,
    test_items: [...props.material.test_items],
  }
}
</script>

<template>
  <VaForm ref="form" @keydown.enter="onSave">
    <VaInput
      v-model="newMaterial.material_code"
      :label="$t('materials.form.materialCode')"
      :rules="[validators.required]"
      class="mb-4"
      name="material_code"
    />
    <VaInput
      v-model="newMaterial.material_name"
      :label="$t('materials.form.materialName')"
      :rules="[validators.required]"
      class="mb-4"
      name="material_name"
    />
    <VaInput
      v-model="newMaterial.product_count"
      :label="$t('materials.form.productCount')"
      type="number"
      :rules="[validators.required]"
      class="mb-4"
      name="product_count"
      :min="0"
    />

    <div class="mb-4">
      <VaInput
        v-model="testItemInput"
        :label="$t('materials.form.addTestItem')"
        class="mb-2"
        @keydown.enter.prevent="addTestItem"
      >
        <template #appendInner>
          <VaButton preset="plain" icon="add" color="primary" @click="addTestItem" />
        </template>
      </VaInput>

      <div v-if="newMaterial.test_items.length > 0" class="flex flex-wrap gap-2">
        <VaBadge v-for="(item, index) in newMaterial.test_items" :key="index" :text="item" color="info">
          <template #prepend>
            <VaButton preset="plain" icon="close" size="small" color="danger" @click="removeTestItem(index)" />
          </template>
        </VaBadge>
      </div>
    </div>

    <div class="flex justify-end flex-col-reverse sm:flex-row mt-4 gap-2">
      <VaButton preset="secondary" color="secondary" @click="$emit('close')">
        {{ $t('users.cancel') }}
      </VaButton>
      <VaButton :disabled="!isFormHasUnsavedChanges" @click="onSave">
        {{ saveButtonLabel }}
      </VaButton>
    </div>
  </VaForm>
</template>
