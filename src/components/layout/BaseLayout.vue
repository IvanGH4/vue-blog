<template>
  <div>
      <BaseHeader />
      <BaseMain />
      <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/layout/BaseHeader'
import BaseMain from '@/components/layout/BaseMain'
import BaseFooter from '@/components/layout/BaseFooter'

export default {
    name: 'BaseLayout',
    components: {
        BaseHeader,
        BaseMain,
        BaseFooter
    }
}
</script>