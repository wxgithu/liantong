<template>
    <div>
        <!--登陆订单状态-->
            <div class="bg" >
            <!--标题-->
            <h1>我的订单</h1>
            <!--订单导航-->
            <ul class="order_list">
                <li id="active"><a href="">网上购物</a></li>
                <li><a href="">交费购卡</a></li>
                <li><a href="">机票订购</a></li>
                <li><a href="">中小企业</a></li>
                <li><a href="">流量包</a></li>
            </ul>
            <!--订单搜索-->
            <div class="search_mode">
                <input class="search_input" type="text" placeholder="商品名称，订单编号">
                <input class="btn" type="button" value="搜索">
            </div>
            <!--订单商品-->
            <ul class="colName">
                <li>订单商品</li>
                <li>数量</li>
                <li>收货人</li>
                <li>订单金额</li>
                <li>实名登记</li>
                <li>
                    <select name="" id="order_sel">
                        <option value="">全部状态</option>
                        <option value="">待付款</option>
                        <option value="">待发货</option>
                        <option value="">待开户</option>
                        <option value="">已发货</option>
                        <option value="">待确认</option>
                        <option value="">施工中</option>
                        <option value="">已取消</option>
                        <option value="">交易成功</option>
                        <option value="">安装成功</option>
                    </select>
                </li>
                <li>订单操作</li>
            </ul>
            <!--订单详情-->
            <div class="no_order">
                暂无订单，这就去挑选商品：<a href="">商城首页</a>
            </div>
            <!--底部分页-->
            <div class="operationBottom">
                <ul>
                    <li>共0条</li>
                    <li><a href="" class="top">上一页</a></li>
                    <li><a href="" class="num">1</a></li>
                    <li><a href="" class="bot">下一页</a></li>
                    <li>共1页</li>
                    <li>跳转至</li>
                    <li><input type="text"></li>
                    <li>页</li>
                    <li><a href="" class="sure">确定</a></li>
                </ul>
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

    /*我的订单*/

    /*订单导航*/
    ul.order_list{
        width: 960px;
        height: 44px;
        margin: 0 9px 10px;
        border-bottom: 1px solid #f60;
        border-left: 1px solid #ddd;
    }
    ul.order_list>li{
        float: left;
        width: 159px;
        height: 43px;
        line-height: 44px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid #ddd;
        border-top: 1px solid #ddd;
    }
    ul.order_list>li>a{
        color: #333333;
    }
    #active{
        background: #f60;
        border-right: 1px solid #f60;
        border-top: 1px solid #f60;
    }
    #active>a{
        color: white;
    }
    ul.order_list>li:hover{
        border: 1px solid #f60;
    }
    /*订单搜索*/
    .search_mode{
        width: 958px;
        height:35px;
        padding: 7px 7px 0;
        border: 1px solid #e1e1e1;
        background-color: #f9f9f9;
        margin-bottom: 10px;
        margin-left: 9px;
    }
    .search_mode>.search_input{
        width: 232px;
        height: 18px;
        border: 1px solid #829fbb;
        float: left;
    }
    .search_mode>.btn{
        float: left;
        margin-left: 5px;
        border: 0;
        cursor: pointer;
        margin-top: -6px;
        height: 31px;
    }
    /*订单商品*/
    .colName{
        width: 958px;
        height: 27px;
        border: 1px solid #e1e1e1;
        margin-bottom: 10px;
        margin-left: 9px;
    }
    .colName>li{
        float: left;
        color: #333333;
        font-size: 14px;
        height: 27px;
        line-height: 27px;
        text-align: center;
    }
    .colName>li:first-child{
        width: 366px;
    }
    .colName>li:nth-child(2){
        width: 58px;
    }
    .colName>li:nth-child(3){
        width: 74px;
        text-align: center;
    }
    .colName>li:nth-child(4){
        width: 96px;
    }
    .colName>li:nth-child(5){
        width: 166px;
    }
    .colName>li:nth-child(6){
        width: 117px;
    }
    .colName>li:nth-child(7){
        width: 74px;
    }
    #order_sel{
        width: 80px;
        height: 23px;
        margin-top: 2px;
    }
    /*订单详情*/
    .no_order{
        width: 958px;
        height: 32px;
        border: 1px solid #e1e1e1;
        padding: 5px 15px;
        margin-left: 9px;
        font-size: 14px;
        color: #333333;
    }
    .no_order>a{
        font-size: 12px;
        color: #3366cc;
    }
    .no_order>a:hover{
        text-decoration:underline;
    }
    /*底部分页*/
    .operationBottom{
        width: 958px;
        height: 34px;
        position: relative;
        padding: 6px 0 0 5px;
        background-color: #eee;
        border: 1px solid #e1e1e1;
        margin-left: 9px;
        margin-top: 10px;
    }
    .operationBottom>ul{
        float: right;
        margin-right: 5px;
    }
    .operationBottom>ul>li{
        float: left;
        font-size: 14px;
        margin-right: 5px;
    }
    .operationBottom>ul>li>a{
        color: #333333;
    }
    .operationBottom>ul>li>a.top{
        width: 53px;
        height: 19px;
        padding: 3px 3px 0 5px;
        background: url(../../img/order_bg.gif) -92px -62px no-repeat;
        border-right: 1px solid #e1e1e1;
    }
    .operationBottom>ul>li>a:hover{
        color: #FF6000;
        text-decoration: underline;
    }
    .operationBottom>ul>li>a.num{
        background: #f60;
        color: #fff;
        display: block;
        width: 21px;
        height: 22px;
        padding-top: 2px;
        text-align: center;
        margin-right: 5px;
        border: 1px solid #d7d7d7;
        margin-top: -2px;
    }
    .operationBottom>ul>li>a.bot{
        width: 53px;
        height: 19px;
        padding: 3px 5px 0 3px;
        background: url(../../img/order_bg.gif) -96px -128px no-repeat;
        border-right: 1px solid #e1e1e1;
        border-left:1px solid #e1e1e1 ;
    }
    .operationBottom>ul>li>input{
        width: 20px;
        height: 21px;
        line-height: 18px;
        float: left;
        margin-top: -2px;
    }
    .operationBottom>ul>li>a.sure{
        width: 39px;
        height: 19px;
        padding: 3px 5px 0 5px;
        background: url(../../img/order_bg.gif) 0 -73px no-repeat;
        border-right: 1px solid #a9a9a9;
    }
    /*标题*/
    .bg>h1,.pwd>h1,.person>h1,.receive>h1{
        font-size: 18px;
        padding: 15px 0 14px 23px;
        font-weight: bold;
    }
</style>