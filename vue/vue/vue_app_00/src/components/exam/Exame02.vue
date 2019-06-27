<template>
    <div>
        12345,上山打老虎...
        <br>交互式提示框
        <button @click="openMsg">别点我,疼</button>
        <button @click="openAlert">哎哟喂</button>
        <button @click="openConfirm">呵,男人</button> <br>
        <button @click="openPrompt">我和你妈掉进水里,救谁?</button>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods: {
        openMsg(){
            this.$messagebox({
                title:"禁止",
                message:"未满18岁以下,禁止单独观看",
                showConfirmButton:true,
                showCancelButton:true
            })
        },
        openAlert(){
            this.$messagebox("糟老头子坏的很")
        },
        openConfirm(){
            this.$messagebox.confirm("是否抛弃昨天的小姐姐")
            .then(active=>{console.log(active);
                console.log("旧的小姐姐-1 -1")
            }).catch(err=>{    console.log("新的小姐姐 -1-1")})
        
        },
        openPrompt(){
            this.$messagebox.prompt("救谁??").then( ({value,action})=>{
                console.log(value);
                console.log(action);
            })
        }
    },
}
</script>
<style>

</style>
