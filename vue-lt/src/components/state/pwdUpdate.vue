<template>
    <div>
        <!--密码修改-->
        <div class="pwd" >
            <h1>密码修改</h1>
            <!--中间的内容:左边修改，右边提示-->
            <div class="update">
                <!--上面修改密码错误提示信息-->
                <div class="err err_none">
                    <span></span>
                    请输入新密码
                </div>
                <!--左边修改-->
                <div class="left">
                    <div>
                        <span></span>
                        <input type="text" placeholder="15612607069" id="phonenumber">
                    </div>
                    <div>
                        <span></span>
                        <input type="text" placeholder="请输入原密码">
                    </div>
                    <div>
                        <span></span>
                        <input type="text" placeholder="请输入新密码">
                    </div>
                    <div>
                        <span></span>
                        <input type="text" placeholder="请再次输入新密码">
                    </div>
                    <div>
                        <button>确&nbsp;&nbsp;&nbsp;认&nbsp;&nbsp;&nbsp;修&nbsp;&nbsp;&nbsp;改</button>
                    </div>
                </div>
                <!--右边提示-->
                <div class="right">
                    <p>
                        <span></span>
                        温馨提示：
                    </p>
                    <ul class="update_list">
                        <li>1、手机/上网卡密码为6位数字组合，不可设置简单密码：</li>
                        <li>
                            <ul>
                                <li>1）连续的升序或降序，如123456和654321</li>
                                <li>2）重复的数字顺序，如235235,575757</li>
                                <li>3）连续相同的数字，如999999</li>
                                <li>4）手机号码的任意连续6位</li>
                            </ul>
                        </li>
                        <li>2、注册帐号密码为6-16位数字、字母，区分大小写</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{


            }
        }
    }
</script>
<style>
    /*修改密码*/
    .pwd>div.update{
        width: 878px;
        height: 370px;
        border: 1px solid #CDCDCD;
        border-radius: 5px 5px 0px 0px;
        color: #666;
        margin: 0 auto;
        background: url(../../img/vertical-bar-160-01.png) no-repeat scroll 511px center;
        background-color: #FCFCFC;
    }
    /*上边错误提示*/
    .pwd>.update>.err{
        width: 800px;
        margin-bottom: -23px;
        margin-left: 132px;
        height: 25px;
        margin-top: 15px;
        font-size: 14px;
        color: #ff6000;
    }
    .pwd>.update>.err>span{
        background: url(../../img/icons.png) no-repeat scroll -3px -3px;
        float: left;
        height: 19px;
        margin-left: -22px;
        margin-right: 5px;
        vertical-align: text-top;
        width: 17px;
    }
    /*错误隐藏*/
    .err_none{
        visibility: hidden;
    }
    /*左边样式*/
    .pwd>.update>.left{
        float: left;
        width: 300px;
        margin-top: 20px;
        margin-left: 105px;
    }
    .pwd>.update>.left>div{
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #b4b4b4;
        border-radius: 3px;
    }
    .pwd>.update>.left>div>span{
        float: left;
        width: 20px;
        height: 30px;
        margin-left: 5px;
    }
    .pwd>.update>.left>div:first-child>span{
        background: url(../../img/icons.png) no-repeat scroll -98px 8px;
    }
    .pwd>.update>.left>div:not(:first-child)>span{
        background: url(../../img/icons.png) no-repeat scroll -122px 8px;
    }
    .pwd>.update>.left>div>input{
        width: 260px;
        height: 33px;
        padding: 10px 0;
        margin-left: 10px;
        border: none;
        outline: none;
        margin-top: 2px;
    }
    .pwd>.update>.left>div>input::placeholder{
        color: #999999;
    }
    #phonenumber::placeholder{
        color: #333333;
        font-weight: bold;
        font-size: 14px;
    }
    .pwd>.update>.left>div:last-child{
        border: none;
    }
    .pwd>.update>.left>div:last-child>button{
        width: 303px;
        height: 40px;
        background: #FF6000;
        color: white;
        border:none;
        border-radius: 3px;
        font-size: 18px;
        cursor: pointer;
        outline: none;
    }
    /*右边提示*/
    .pwd>.update>.right{
        width: 330px;
        height: 134px;
        float: left;
        margin: -311px 0 0 534px;
        font-size: 12px;
    }
    .pwd>.update>.right>p>span{
        background: url(../../img/fillout_order_info.png) no-repeat scroll -76px -2px rgba(0, 0, 0, 0);
        display: inline-block;
        height: 20px;
        vertical-align: middle;
        width: 20px;
        margin-left: -2px;
    }
    .pwd>.update>.right>.update_list{
        margin-left:22px;
    }
    .pwd>.update>.right>.update_list>li>ul{
        margin-left: 22px;
    }
    .pwd>.update>.right>.update_list>li{
        margin: 3px 0;
    }
    .pwd>.update>.right>.update_list>li>ul>li{
        margin: 3px 0;
    }
</style>