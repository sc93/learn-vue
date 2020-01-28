<template>
    <div>
        <span>
            <button>{{message}}</button>
        </span>
    </div>
</template>

<script>
    export default {
        data : {
            message : "Hello Vue Single Component!"
        }
    }
</script>

<style>
    span {
        font-size: 30px;
    }
</style>