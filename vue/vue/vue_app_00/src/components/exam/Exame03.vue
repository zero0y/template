<template>
    <div>
       输入域
        <mt-field label="小猪佩奇" placeholder="请输入用户名" v-model="username" @change="chan"></mt-field>
     
<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>


    </div>
</template>
<script>
export default {
    data(){
        return{username:"",birthday:""}
    },
    methods: {
        chan(){
            console.log(this.username);
            console.log(this.birthday);

        }
    },
}
</script>
<style>

</style>
