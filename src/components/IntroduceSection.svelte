<script lang="ts">
  export let title: string
</script>

<div class="lg:flex-grow lg:flex-shrink-0 lg:w-0">
  <div class="text-blue-600 text-4xl lg:text-5xl">
    {title}
  </div>
  <div class="mt-8 flex flex-col gap-4">
    <slot />
  </div>
</div>
