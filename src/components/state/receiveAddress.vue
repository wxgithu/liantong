<template>
    <div>
        <!--收货地址-->
        <div class="receive">
            <h1>收货地址</h1>
            <div>
                <div class="receive_content">
                    <table>
                        <tr>
                            <td><span>*</span>收&nbsp;&nbsp;货&nbsp;人: </td>
                            <td> <input v-model="name" ></td>
                        </tr>
                        <tr>
                            <td> <span>*</span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区:</td>
                            <td>
                                <select  class="ml-4">
                                    <option >-省份/直辖市-</option>
                                    <option> 北京</option>    
                                </select>
                        
                                <select>
                                    <option >市</option>
                                    <option >北京市</option>
                                </select>
                                <select >
                                    <option >县/区</option>
                                    <option v-for="a in area">{{a.area}}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><span>*</span>详细地址:</td>
                            <td><input v-model="address"></td>
                        </tr>
                        <tr>
                            <td><span>*</span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编: </td>
                            <td><input v-model="post"></td>
                        </tr>
                        <tr>
                            <td><span>*</span>手机号码: </td>
                            <td><input v-model="phonenum"></td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;备用电话:</td>
                            <td><input v-model="tel"></td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;电子邮箱:</td>
                            <td><input v-model="email"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button  class="save ml-4 mt-4">保存地址</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:"请填写收货人姓名",
                address:"请填写详细路名及门牌号",
                post:"请输入邮编",
                phonenum:"请填写手机号码",
                tel:"",
                email:"",
                area:[]     
            }
        },

        methods:{
            getArea(){
                
                this.$http.get("getarea").then(result=>{
                    this.area=result.body;
                })

            }
        },
        created(){
            this.getArea();
        }
    }
</script>
<style>
    /*收货地址*/
    .receive_content{
        margin-top: 72px;
        margin-left: 241px;
    }
    .receive>div{
        width: 878px;
        height: 444px;
        margin: -5px 48px 0;
    }
    .receive_content span{
        color: red;
    }
    .receive_content table tr{
        height: 40px;
        font-size: 14px;
        color: #333;
    }
    .receive_content table tr td input,select{
        border-radius:3px;
        outline: none;
        border: 1px solid #cccccc;
        height:31px;
        color: #999999;
        background: #fff;
        margin-left: 23px;
    }
    .receive_content select option{
        color: #333;
        background: url("../../img/jt_down.png") no-repeat left center;
    }
    .receive_content table tr:nth-child(3) td input{
        width: 380px;
    }
    .receive_content table tr:nth-child(2) td select{
        width: 124px;
    }
    .save{
        display: block;
        width: 152px;
        height: 40px;
        background-color:#F36F2A;
        color: #fff;
        font-size: 16px;
        border: none;
        border-radius: 4px;
    }
</style>