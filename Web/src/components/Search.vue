<template>
    <form class="d-flex w-25 border border-success rounded-pill me-3">
        <div class="input-group">
          <input v-model="search" @input="$emit('search', search)" class="form-control rounded-pill" type="search" placeholder="Search for what you like." aria-label="Search">
          <button class="btn input-group-text" type="submit"><i class="fas fa-search text-black"></i></button>
        </div>
      </form>
</template>

<script>
export default {   
    data() {
        return {
            search: '',
        };
    },
};
</script>

<style>
    form{
        box-shadow: 0 0 5px gainsboro;
        background-color: gainsboro;
        margin-top: 10px;
        float: right;
    }
</style>