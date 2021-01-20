<template>
    <div class="hello"> Hello {{who}} , your message is {{message}} </div>
</template>

<script>
export default {
    data: function() {
        return {
            who: 'world'
        }
    },
    props:["message"]
}
</script>

<style>
    .hello {
        background-color: rgb(240, 238, 255);
    }
</style>