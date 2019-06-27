Exame01.vue
</<template>
    <div>
        第一个主键 唯一根元素 div
    
    <button @click="openToast">短消息提示框</button>

    </div>
</template>
<script>
//导出默认的对象
export default {
    data(){  //当前组件共享的数据
        return{}   //数据
    },
    methods: {
        openToast(){
           this.$toast({
               message:"二狗快跑",  //内容
               position:"middle",     //位置
               duration:1500 ,      //事间
               className:"mytoast" ,  //添加样式
               iconClass:"iconfont icon-food-strawberry"
           })
        }
    },
}
</script>

<style >
    .mytoast{
        background-color:pink !important;
        color:palevioletred !important;
        font-size:19px !important;
        
    }
</style>