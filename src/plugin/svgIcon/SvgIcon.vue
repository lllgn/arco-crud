<template>  
  <svg :class="svgClass" v-bind="$attrs" :style="style">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts"> 
import { computed } from 'vue'
import { defineComponent} from 'vue' 
export default defineComponent({
    props: {
      name: {
        type: String,
        required: true,
      },
      style: {
        type: Object,
        default: '',
      },
    },
  setup(props) {
    const iconName = computed(()=>`#icon-${props.name}`);
    const svgClass = computed(() => {
      if (props.name) {
        return `svg-icon icon-${props.name}`
      }
      return 'svg-icon'
    })
    return {
      svgClass,
      iconName
    }
  },
})
</script>

<style>
.svg-icon { 

  fill: currentColor;
  vertical-align: middle;
}
</style>