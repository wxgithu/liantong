<template>
    <div>
        <!--个人信息-->
        <div class="person">
            <!--标题-->
            <h1>个人信息</h1>
            <!--中间内容-->
            <div>
                <!--左边信息-->
                <table>
                    <tbody>
                    <tr>
                        <td><span>用&nbsp;户&nbsp;&nbsp;名：</span></td>
                        <td>{{list.phone}}</td>
                    </tr>
                    <tr>
                        <td><span>真实姓名：</span></td>
                        <td>{{list.name}}</td>
                    </tr>
                    <tr>
                        <td><span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span></td>
                        <td>{{gender}}</td>
                    </tr>
                    <tr>
                        <td><span>证件号码：</span></td>
                        <td>13**************23</td>
                    </tr>
                    <tr>
                        <td><span>证件地址：</span></td>
                        <td>河北省张家口市******</td>
                    </tr>
                    </tbody>
                </table>

                <!--右边头像-->
                <div class="pic">
                    <a href="">
                        <img src="../../img/head.gif" alt="">
                    </a>
                    <span>
                    请选择要上传的头像
                    <input type="file">
                </span>
                    <p>支持JPG、PNG、JPEG、BMP文件大小5M以内</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data(){
            return{
                uid:this.$route.params.uid,  
                list:{},   
                gender:"" 
                
            }
        },
        methods:{
            getUser(){ 
                this.$http.get("getUser?uid="+this.uid).then(result=>{
                    this.list=result.body[0];
                    this.gender=this.list.gender;
                    if(this.gender==2){
                        this.gender="女"
                    }else{
                        this.gender="男"
                    } 
                         
                })
            },
        },
        created(){
            this.getUser()
        }
        
    }
</script>
<style>
    /*个人信息*/
    .person>div,.receive>div{
        width: 878px;
        height: 300px;
        border: 1px solid #CDCDCD;
        border-radius: 5px 5px 0px 0px;
        color: #cdcdcd;
        background-color: #FCFCFC;
        margin: 0 auto;
    }
    .person>div>table{
        width: 330px;
        margin: 47px 0 0 115px;
        float: left;
        color: #666666;
    }
    .person>div>table>tbody>tr{
        height: 29px;
    }
    .person>div>table>tbody>tr>td{
        font-size: 14px;
    }
    .person>div>table>tbody>tr>td:first-child{
        font-weight: bold;
        text-align: right;
    }
    /*头像*/
    .person>div>.pic{
        width: 200px;
        height: 240px;
        border: 1px solid #F5F5EF;
        border-radius: 3px;
        margin-left: 70px;
        margin-top: 30px;
        background-color: #FFF;
        float: left;
    }
    .person>div>.pic>a>img{
        margin: 15px 0 25px 40px;
    }
    .person>div>.pic>span{
        display: inline-block;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #F60;
        text-align: center;
        overflow: hidden;
        position: relative;
        color: #fff;
        font-size: 14px;
        background-color: #f60;
        cursor: pointer;
        margin-left: -1px;
    }
    .person>div>.pic>span>input{
        opacity: 0;
        font-size: 100px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
    .person>div>.pic>p{
        font-size: 12px;
        padding: 5px;
    }
</style>