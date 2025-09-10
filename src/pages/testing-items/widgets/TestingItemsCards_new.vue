<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

// 导入类型
import type { TestingItem } from '../types'

const { t } = useI18n()

// Props
defineProps<{
  testingItems: TestingItem[]
  loading: boolean
}>()

// Events
const emit = defineEmits<{
  edit: [testingItem: TestingItem]
  delete: [testingItem: TestingItem]
}>()
</script>

<template>
  <div class="testing-items-cards">
    <VaInnerLoading :loading="loading" class="min-h-[200px]">
      <div v-if="testingItems.length === 0" class="text-center py-8">
        <VaIcon name="science" size="4xl" color="secondary" class="mb-4" />
        <p class="text-secondary">{{ t('testingItems.noData') }}</p>
      </div>

      <div v-else class="grid gap-4">
        <VaCard v-for="testingItem in testingItems" :key="testingItem.id" class="testing-item-card" outlined>
          <VaCardContent>
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <VaIcon name="science" color="primary" />
                  <h3 class="text-lg font-semibold text-primary">
                    {{ testingItem.item_code }}
                  </h3>
                  <VaBadge text="pending" color="warning" size="small" />
                </div>
                <p class="text-secondary mb-3">{{ testingItem.item_name }}</p>

                <!-- 测试项类型 -->
                <div class="flex flex-wrap gap-1 mb-3">
                  <VaChip size="small" color="primary" outline>
                    {{ testingItem.item_type }}
                  </VaChip>
                </div>

                <div class="text-sm text-secondary">
                  {{ t('testingItems.createdAt') }}:
                  {{ new Date(testingItem.created_at).toLocaleDateString() }}
                </div>
              </div>

              <!-- 操作按钮 -->
              <div class="flex gap-2 ml-4">
                <VaButton preset="plain" icon="edit" color="primary" size="small" @click="emit('edit', testingItem)" />
                <VaButton
                  preset="plain"
                  icon="delete"
                  color="danger"
                  size="small"
                  @click="emit('delete', testingItem)"
                />
              </div>
            </div>
          </VaCardContent>
        </VaCard>
      </div>
    </VaInnerLoading>
  </div>
</template>

<style scoped>
.testing-items-cards {
  @apply grid gap-4;
}

.testing-item-card {
  transition: all 0.2s ease;
}

.testing-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
</style>
