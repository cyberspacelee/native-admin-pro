export const useCounter = defineStore('counter', () => {
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  const decrement = () => {
    counter.value--
  }

  const double = computed(() => counter.value * 2)

  return {
    counter,
    increment,
    decrement,
    double,
  }
})
