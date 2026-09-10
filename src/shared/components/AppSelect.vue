<template>
  <div ref="rootRef" class="relative">
    <!-- Trigger -->
    <button
      ref="triggerRef"
      type="button"
      class="focus:border-primary focus:ring-primary/20 flex w-full items-center rounded-xl border border-gray-200 bg-white py-3 pr-10 text-left text-gray-800 shadow-sm transition-all focus:ring-2 focus:outline-none"
      :class="[
        open ? 'border-primary ring-primary/20 ring-2' : 'hover:border-gray-300',
        leadingIcon ? 'pl-12' : 'pl-4',
      ]"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :disabled="disabled"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <component
        :is="leadingIcon"
        v-if="leadingIcon"
        class="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
      />
      <span class="truncate" :class="hasSelection ? 'text-gray-800' : 'text-gray-400'">
        {{ displayLabel }}
      </span>
      <IconChevronDown
        class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-500 transition-transform duration-200"
        :class="{ 'rotate-180': open }"
      />
    </button>

    <!-- Lista desplegable -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-1 scale-95"
    >
      <ul
        v-if="open"
        role="listbox"
        class="absolute right-0 left-0 z-50 mt-2 max-h-60 overflow-auto rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl"
        style="transform-origin: top"
        @keydown="onDropdownKeydown"
      >
        <li
          v-for="option in options"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          tabindex="-1"
          class="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
          :class="
            option.value === modelValue
              ? 'bg-primary/10 font-medium text-primary'
              : 'text-gray-700 hover:bg-gray-50'
          "
          @click="selectOption(option)"
        >
          <span class="truncate">{{ option.label }}</span>
          <IconCheck
            v-if="option.value === modelValue"
            class="h-4 w-4 shrink-0"
          />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Component } from 'vue'

import { IconCheck, IconChevronDown } from '@tabler/icons-vue'

export interface AppSelectOption {
  value: string
  label: string
}

const props = withDefaults(
  defineProps<{
    modelValue: string
    options: AppSelectOption[]
    placeholder?: string
    leadingIcon?: Component
    disabled?: boolean
  }>(),
  {
    placeholder: 'Seleccionar',
    leadingIcon: undefined,
    disabled: false,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const rootRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)
const open = ref(false)
const activeIndex = ref(-1)

const hasSelection = computed(() =>
  props.options.some((option) => option.value === props.modelValue)
)

const displayLabel = computed(() => {
  const found = props.options.find((option) => option.value === props.modelValue)
  return found ? found.label : props.placeholder
})

function toggle() {
  if (props.disabled) return
  open.value = !open.value
  if (open.value) {
    const current = props.options.findIndex((option) => option.value === props.modelValue)
    activeIndex.value = current >= 0 ? current : 0
  }
}

function selectOption(option: AppSelectOption) {
  emit('update:modelValue', option.value)
  close()
}

function close() {
  open.value = false
  triggerRef.value?.focus()
}

function onDocumentClick(event: MouseEvent) {
  if (!rootRef.value) return
  if (!rootRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

function focusOption(index: number) {
  const items = rootRef.value?.querySelectorAll<HTMLElement>('li[role="option"]')
  items?.[index]?.focus()
}

function onTriggerKeydown(event: KeyboardEvent) {
  if (props.disabled) return
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    open.value = true
    activeIndex.value = 0
    focusOption(activeIndex.value)
  } else if (event.key === 'Escape') {
    open.value = false
  }
}

function onDropdownKeydown(event: KeyboardEvent) {
  const last = props.options.length - 1
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      activeIndex.value = activeIndex.value >= last ? 0 : activeIndex.value + 1
      focusOption(activeIndex.value)
      break
    case 'ArrowUp':
      event.preventDefault()
      activeIndex.value = activeIndex.value <= 0 ? last : activeIndex.value - 1
      focusOption(activeIndex.value)
      break
    case 'Enter': {
      event.preventDefault()
      const option = props.options[activeIndex.value]
      if (option) selectOption(option)
      break
    }
    case 'Escape':
      event.preventDefault()
      close()
      break
  }
}

onMounted(() => document.addEventListener('click', onDocumentClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick))
</script>