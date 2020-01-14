<template>
  <div class="content">
      <h1>news{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
    /**
     * 文章参数校验必须为数字
     */
    validate({params}){
        return /^\d+$/.test(params.id)
    }
}
</script>

<style lang='less' scoped>
    h1{
        margin-top: 200px;
    }
</style>