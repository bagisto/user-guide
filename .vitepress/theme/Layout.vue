<template>
  <Layout>
    <template #layout-top>
      <CloudPromo />
    </template>

    <template #nav-bar-content-after>
      <GoogleTranslate />
    </template>

    <template #aside-outline-after>
      <MarketplacePromo />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import GoogleTranslate from './components/GoogleTranslate.vue'
import CloudPromo from './components/CloudPromo.vue'
import MarketplacePromo from './components/MarketplacePromo.vue'

const { Layout } = DefaultTheme

const route = useRoute()

function scrollActiveSidebarItemIntoView(behavior = 'auto') {
  const sidebar = document.querySelector('.VPSidebar')

  if (!sidebar) return

  // The parent group carries `has-active`; only the link itself gets `is-active`.
  const active = [
    ...sidebar.querySelectorAll('.VPSidebarItem.is-active > .item .link')
  ].pop()

  if (!active) return

  const sidebarRect = sidebar.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()

  // The top of the scroll area sits under the nav bar, so treat the sidebar's
  // own top padding as dead space rather than somewhere an item can rest.
  const inset = parseFloat(getComputedStyle(sidebar).paddingTop) || 0
  const visibleTop = sidebarRect.top + inset
  const visibleHeight = sidebarRect.bottom - visibleTop

  if (activeRect.top >= visibleTop && activeRect.bottom <= sidebarRect.bottom) {
    return
  }

  const offset = activeRect.top - visibleTop
  const centered = (visibleHeight - activeRect.height) / 2

  sidebar.scrollTo({
    top: Math.max(0, sidebar.scrollTop + offset - centered),
    behavior
  })
}

// The group list is re-keyed on navigation, so wait for the paint that follows
// the re-render before measuring anything.
async function syncSidebar(behavior) {
  await nextTick()

  requestAnimationFrame(() => scrollActiveSidebarItemIntoView(behavior))
}

// The mobile sidebar is off-screen until opened, so it needs the same treatment
// the moment it slides in.
let observer

onMounted(async () => {
  await syncSidebar()

  const sidebar = document.querySelector('.VPSidebar')

  if (!sidebar) return

  let wasOpen = sidebar.classList.contains('open')

  observer = new MutationObserver(() => {
    const isOpen = sidebar.classList.contains('open')

    if (isOpen && !wasOpen) {
      scrollActiveSidebarItemIntoView()
    }

    wasOpen = isOpen
  })

  observer.observe(sidebar, { attributeFilter: ['class'] })
})

onUnmounted(() => observer?.disconnect())

watch(
  () => route.path,
  () => syncSidebar('smooth')
)
</script>
