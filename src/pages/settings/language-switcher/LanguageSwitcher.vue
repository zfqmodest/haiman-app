<template>
  <div class="flex items-center justify-between">
    <p>{{ t('settings.language') }}</p>
    <div class="w-40">
      <VaSelect v-model="model" :options="options" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type LanguageMap = Record<string, string>

const { locale, t } = useI18n()

const languages = computed<LanguageMap>(() => ({
  english: t('language.english'),
  simplified_chinese: t('language.simplified_chinese'),
}))

const languageCodes = computed<LanguageMap>(() => ({
  gb: languages.value.english,
  cn: languages.value.simplified_chinese,
}))

const languageName = computed<LanguageMap>(() =>
  Object.fromEntries(Object.entries(languageCodes.value).map(([code, label]) => [label, code])),
)

const options = computed(() => Object.values(languageCodes.value))

const model = computed({
  get() {
    return languageCodes.value[locale.value]
  },
  set(value: string) {
    const code = languageName.value[value]
    if (code) locale.value = code
  },
})
</script>
