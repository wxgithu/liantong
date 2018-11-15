<template>
    <div>
        <!--未登录订单状态-->
        <div class="my_list">
            
            <div class="noLogin_order ">
                <div class="information">
                    <img src="../../img/womei.png" class="float-left">
                    <div class="tipDiv float-left">
                        <p>
                            您还未登录，请
                            <a class="a_blue" id="reLoginA" href="#">登录</a>
                            查看更多信息！
                        </p>
                        <p>
                            <a  class="a_blue" href="#">免登录订单</a>请直接点击查询！
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{}
        }
    }
</script>
<style>
    /*未登录时状态框*/
    .noLogin_order{
        height:300px;
        color: #666;
        background: #FCFCFC;
        border-radius: 5px 5px 0 0;
        border:1px solid #CDCDCD;
        margin: 25px 48px 0;
        width: 880px;
    }
    /*.my_list h5{
        padding: 15px 0px 14px 23px;
        font-size: 17px;
    }*/
    .tipDiv{
        margin-top: 30px;
    }
    .information{
        margin-top: 71px;
        margin-left: 257px;
    }
    
    .hide{
        display: none;
    }
    .my_lt ul li{
        clear: both;
        height: 22px;
        margin-bottom: 5px;
        overflow: hidden;
        margin-left:10px;
    }

</style>