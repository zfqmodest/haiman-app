<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTestingItems } from './composables/useTestingItems'
import TestingItemsTable from './widgets/TestingItemsTable.vue'
import EditTestingItemForm from './widgets/EditTestingItemForm.vue'
import { TestingItem, EmptyTestingItem } from './types'
import { useModal, useToast } from 'vuestic-ui'

const searchQuery = ref('') // 搜索查询状态

const { t } = useI18n()

const testingItemsComposable = useTestingItems()
const { testingItems, update, add, isLoading, remove, pagination, sorting, fetch } = testingItemsComposable

// 分页变化处理
const handlePaginationChange = async (newPagination: typeof pagination.value) => {
  console.log('🔄 Pagination changed:', newPagination)
  pagination.value = newPagination
  await fetch()
}

// 排序变化处理
const handleSortingChange = async () => {
  console.log('🔄 Sorting changed:', sorting.value)
  await fetch()
}

// 监听排序变化
watch(sorting, handleSortingChange, { deep: true })

// 初始化数据
onMounted(async () => {
  // 加载测试项数据
  await fetch()
})

const testingItemToEdit = ref<TestingItem | null>(null)
const doShowTestingItemFormModal = ref(false)

const editTestingItem = (testingItem: TestingItem) => {
  testingItemToEdit.value = testingItem
  doShowTestingItemFormModal.value = true
}

const createNewTestingItem = () => {
  console.log('🔍 createNewTestingItem called')
  testingItemToEdit.value = null
  doShowTestingItemFormModal.value = true
  console.log('🔍 doShowTestingItemFormModal set to:', doShowTestingItemFormModal.value)
}

const { init: notify } = useToast()

const onTestingItemSaved = async (testingItem: TestingItem | EmptyTestingItem) => {
  try {
    if ('id' in testingItem) {
      // 编辑模式：testingItem包含id
      await update(testingItem as TestingItem)
      notify({
        message: t('testingItems.messages.updated'),
        color: 'success',
      })
    } else {
      // 添加模式：testingItem不包含id
      await add(testingItem as EmptyTestingItem)
      notify({
        message: t('testingItems.messages.created'),
        color: 'success',
      })
    }
    doShowTestingItemFormModal.value = false

    // add/update函数已经自动调用了fetch()，不需要再次调用
  } catch (error) {
    console.error('❌ Error saving testing item:', error)
    notify({
      message: 'Error saving testing item: ' + (error as Error).message,
      color: 'danger',
    })
  }
}

const { confirm } = useModal()

const onTestingItemDeleted = async (testingItem: TestingItem) => {
  const response = await confirm({
    title: t('testingItems.confirm.deleteTitle'),
    message: t('testingItems.confirm.deleteMessage', { name: testingItem.item_name }),
    okText: t('testingItems.confirm.delete'),
    cancelText: t('testingItems.confirm.cancel'),
  })

  if (response) {
    try {
      await remove(testingItem)
      notify({
        message: t('testingItems.messages.deleted'),
        color: 'success',
      })

      // remove函数已经自动调用了fetch()，不需要再次调用
    } catch (error) {
      console.error('❌ Error deleting testing item:', error)
      notify({
        message: 'Error deleting testing item: ' + (error as Error).message,
        color: 'danger',
      })
    }
  }
}

const editFormRef = ref()

const beforeEditFormModalClose = async (hide: () => unknown) => {
  if (editFormRef.value?.isFormHasUnsavedChanges) {
    const { confirm } = useModal()
    const agreed = await confirm({
      title: t('testingItems.confirm.unsavedChangesTitle'),
      message: t('testingItems.confirm.unsavedChanges'),
      okText: t('common.confirm'),
      cancelText: t('common.cancel'),
    })
    if (agreed) {
      hide()
    }
  } else {
    hide()
  }
}

// 搜索功能
// const filteredTestingItems = ref(testingItems)
</script>

<template>
  <h1 class="page-title">{{ t('testingItems.title') }}</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between items-start md:items-center">
        <div class="flex flex-col sm:flex-row gap-2 justify-start items-start sm:items-center">
          <VaInput
            v-model="searchQuery"
            :placeholder="t('testingItems.search.placeholder')"
            clearable
            class="search-input"
          >
            <template #prependInner>
              <VaIcon name="search" color="secondary" size="small" />
            </template>
          </VaInput>
        </div>
        <VaButton icon="add" @click="() => createNewTestingItem()">{{ t('testingItems.form.addTitle') }}</VaButton>
      </div>

      <TestingItemsTable
        :testing-items="testingItems"
        :loading="isLoading"
        :pagination="pagination"
        :sort-by="sorting.sortBy"
        :sorting-order="sorting.sortingOrder"
        @update:pagination="handlePaginationChange"
        @edit="editTestingItem"
        @delete="onTestingItemDeleted"
      />

      <!-- 分页组件 -->
      <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <div class="text-sm text-gray-500">{{ pagination.total }} 条结果.</div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="text-sm">每页显示</span>
            <VaSelect
              v-model="pagination.perPage"
              :options="[
                { value: 10, text: '10' },
                { value: 20, text: '20' },
                { value: 50, text: '50' },
              ]"
              style="width: 80px"
              @update:modelValue="handlePaginationChange(pagination)"
            />
          </div>
          <VaPagination
            v-model="pagination.page"
            :pages="Math.ceil(pagination.total / pagination.perPage)"
            :visible-pages="5"
            @update:modelValue="handlePaginationChange(pagination)"
          />
        </div>
      </div>
    </VaCardContent>

    <!-- 测试项表单弹窗 -->
    <VaModal
      v-slot="{ cancel, ok }"
      v-model="doShowTestingItemFormModal"
      size="small"
      mobile-fullscreen
      close-button
      stateful
      hide-default-actions
      :before-cancel="beforeEditFormModalClose"
    >
      <h1 v-if="testingItemToEdit === null" class="va-h5 mb-4">{{ t('testingItems.form.addTitle') }}</h1>
      <h1 v-else class="va-h5 mb-4">{{ t('testingItems.form.editTitle') }}</h1>
      <EditTestingItemForm
        ref="editFormRef"
        :testing-item="testingItemToEdit"
        :save-button-label="testingItemToEdit === null ? t('testingItems.form.addTitle') : t('users.save')"
        @close="cancel"
        @save="
          (testingItem) => {
            onTestingItemSaved(testingItem)
            ok()
          }
        "
      />
    </VaModal>
  </VaCard>
</template>

<style scoped>
.page-title {
  font-size: 1.875rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1rem;
}

.search-input {
  min-width: 250px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
  }

  .search-input {
    min-width: 200px;
  }
}
</style>
