<template>
    <div >
        <!--头部——欢迎-->
        <div class="welcome">
            <div class="center">
                <!--登陆头部状态-->
                <div class="LoginDiv">
                    <!--时间，姓名变化-->
                    下午好，{{name}}
                    <router-link to="/nologinCustomer" id="signout">[退出]</router-link>&nbsp;
                    <a href="#" target="_blank">我的订单</a>
                </div>
                <ul class="list-unstyled float-right" >
                    <li class="mall" @mouseover="isShow()" @mouseout="isHide()">
                        <a href="#" class="orange">我的联通</a>
                        <img src="../../img/icon_down.png">
                        <!--我的联通——隐藏下拉列表-->
                        <div class="my_lt" :style="styleObject">
                            <ul >
                                <li>
                                    <a href="javascript:" class="orange">我的联通</a>
                                    <img src="../../img/icon_up.png" class="icon">
                                </li>
                                <li><a href="#">我的订单</a></li>
                                <li><a href="#">预约订单</a></li>
                                <li><a href="#">个人信息</a></li>
                                <li><a href="#">收货地址</a></li>
                                <li><a href="#">密码修改</a></li>
                                <li><a href="#">售后处理</a></li>
                                <li><a href="#">安全中心</a></li>
                            </ul>
                        </div>
                    </li>
                    <li @mouseover="isShow1()" @mouseout="isHide1()">
                        更多电子服务<img src="../../img/icon_down.png">
                        <!--隐藏下拉-->
                        <div class="hide_serve" :style="styleObject1">
                            <ul>
                                <li>更多电子服<img src="../../img/icon_up.png" class="icon"></li>
                                <li><a href="#">手机营业厅</a></li>
                                <li><a href="#">短信营业厅</a></li>
                                <li><a href="#">微信营业厅</a></li>
                                <li><a href="#">手机商城</a></li>
                            </ul>
                        </div>
                    </li>
                    <li id="two" >
                <dl>
                    <dt> <a href="#">
                        <img src="../../img/phone.png" class="mr-0">
                        客户端下载
                        <img src="../../img/icon_down.png">
                    </a>
                    </dt>
                    <!--隐藏下拉列表-->
                    <dd>
                        <div class="client hide">
                            <img src="../../img/erwei.png" class="mt-2 ml-2">
                            <a href="#" class="mt-2 mr-2"><img src="../../img/app.png" ></a>
                            <a href="#" class="mt mr-2"><img src="../../img/Android.png" ></a>
                            <span class="text1 ml-4">扫描立即下载</span>  <span class="text2">联通客户端</span>
                        </div>
                    </dd>
                </dl>


            </li>
                    <li><a href="#" class="mr-2">网站地图</a></li>
                    <li><a href="#">企业门户</a></li>
                    <li>
                        <a href="#">
                            <img src="../../img/weibo.png" alt="">
                            关注微博
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--search-->
        <div class="header ">
            <div class="center">
                <div class="logo float-left">
                    <img src="../../img/logoNew.png" class="mt-3">
                </div>
                <div class="city float-left ml-4" @mouseover="toggleShow1()" @mouseout="toggleShow1()">
                    <span >{{pro}}</span>
                    <a href=":javascript" >
                        [切换地区<img src="../../img/trangle.png" alt="">]
                    </a>
                    <!--城市 hidden city-->
                    <div class="hidden_city " v-if="show">
                        <ul class="list-unstyled" id="pro">
                            <li>
                                <span>A-G</span>
                                <a href="javascript:" @click="getVal($event)" v-for="item in list[0]">{{item}}</a>    
                            </li>
                            <li>
                                <span>H-J</span>
                                <a href="javascript:" @click="getVal($event)" v-for="item in list[1]">{{item}}</a>
                                
                            </li>
                            <li>
                                <span>L-S</span>
                                <a href="javascript:" @click="getVal($event)" v-for="item in list[2]">{{item}}</a>
                            </li>
                            <li>
                                <span>T-Z</span>
                                <a href="javascript:" @click="getVal($event)" v-for="item in list[3]">{{item}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="float-right search-parent">
                    <div class="search">
                        <div class="float-left product" @mouseenter="onMouseOver" @mouseleave="onMouseOut">商品<img src="../../img/jt_down.png" alt=""></div>
                        <!--服务隐藏hover-->
                        <div class="service" v-if="hide" @mouseenter="onMouseOver" @mouseleave="onMouseOut">服务</div>
                        <input v-model="text" placeholder="王卡" class="float-left">
                        <a href="#" class="button float-right">搜索</a>
                    </div>
                    <div class="hotSearchBox">
                        <a href="#">冰神卡</a>
                        <a href="#">iPhone8</a>
                        <a href="#">iPhone7</a>
                        <a href="#">4G手机</a>
                    </div>
                </div>
            </div>
        </div>
        <!--nav-->
        <div class="clearfix"></div>
        <div class="clearfix"></div>
        <div  class="widthBg ">
            <div class="center">
                <div class="allSort float-left">
                    <div class="sortItem" @mouseover="toggleShow()" @mouseout="toggleShow()">
                        <h6 class="text-center" >所有商品分类<img src="../../img/big_jt.png" class="ml-3"></h6>
                        <!--列表隐藏部分-->
                        <div class="category">
                            <div id="categoryList" class="allSortDetail" v-show="isshow">
                                <!--file include-->
                                <ul class="items ie6Png cateOne">
                                    <li class="item rela" >
                                        <div class="overr ww">
                                        <h3>
                                        <span><a href="#">靓号专区</a>
                                        <img src="../../img/new.png" alt="">
                                        </span>
                                                <img src="../../img/set.png" alt="">
                                                <a href="#">号码</a>、
                                                <a href="#">套餐</a>
                                        </h3>
                                        </div>
                                        <div class="allSortList selNumber" >
                                            <dl class="fore">
                                                <dt>选号码</dt>
                                                <dd><a href="#">186</a>
                                                    <a href="#">185</a>
                                                    <a href="#">156</a>
                                                    <a href="#">155</a>
                                                    <a href="#">130</a>
                                                    <a href="#">131</a>
                                                    <a href="#">132</a>
                                                    <a href="#">176</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>4G套餐</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">4G全国套餐 </a>
                                                    <a href="#" class="cOrange">4G组合套餐 </a>
                                                    <a href="#" class="cOrange">4G校园套餐 </a>
                                                    <a href="#" class="cOrange">4G本地套餐 </a>
                                                    <a href="#" class="cOrange">冰淇淋套餐 </a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>优惠活动</dt>
                                                <dd>
                                                    <a href="#">老用户优惠</a>
                                                    <a href="#">惠通卡</a>
                                                    <a href="#">快享卡</a>
                                                    <a href="#">久聊卡</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                        <span>
                                            <a href="#" target="_blank">老用户0元购</a>       <img src="../../img/new.png" alt="">
                                        </span>
                                                <img src="../../img/ipo.png">
                                                <a href="#">手机</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList price" >
                                            <dl class="fore">
                                                <dt>品牌</dt>
                                                <dd>
                                                    <a href="#">苹果</a>
                                                    <a href="#">小米</a>
                                                    <a href="#">三星</a>
                                                    <a href="#">华为</a>
                                                    <a href="#">vivo</a>
                                                    <a href="#">酷派</a>
                                                    <a href="#">HTC</a>
                                                    <a href="#">联想</a>
                                                    <a href="#">魅族</a>
                                                    <a href="#">中兴</a>
                                                    <a href="#">诺基亚</a><br>
                                                    <a href="#">索尼</a>
                                                    <a href="#">华硕</a>
                                                    <a href="#">OPPO</a>
                                                    <a href="#">TCL</a>
                                                    <a href="#">金立</a>
                                                    <a href="#">海尔</a>
                                                    <a href="#">小辣椒</a>
                                                    <a href="#">乐视</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>活动</dt>
                                                <dd>
                                                    <a href="#">存话费送手机</a>
                                                    <a href="#">买手机送话费</a>
                                                    <a href="#">老用户优惠购机 (支持合约到期提前预约)</a>
                                                    <a href="#">裸机热卖</a>
                                                    <a href="#">招联信用付0利息0手续费</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>特点</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">4G手机</a>
                                                    <a href="#" class="cOrange">双卡双待</a>
                                                    <a href="#" class="cOrange">千元智能机</a>
                                                    <a href="#" class="cOrange">大屏(4.0英寸以上)</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                                <img src="../../img/WIFI.png" alt="">
                                                <a href="#">上网卡</a>、
                                                <a href="#">配件</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList kd " >
                                            <dl class="fore">
                                                <dt>上网卡套餐</dt>
                                                <dd>
                                                    <a href="#">包月套餐</a>
                                                    <a href="#">包年套餐</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>活动</dt>
                                                <dd>
                                                    <a href="#">存话费送手机</a>
                                                    <a href="#">买手机送话费</a>
                                                    <a href="#">老用户优惠购机 (支持合约到期提前预约)</a>
                                                    <a href="#">裸机热卖</a>
                                                    <a href="#">招联信用付0利息0手续费</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>配件类型</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">防护套膜</a>
                                                    <a href="#" class="cOrange">支架外设</a>
                                                    <a href="#" class="cOrange">存储卡设备</a>
                                                    <a href="#" class="cOrange">车载配件</a>
                                                    <a href="#" class="cOrange">电源电池</a>
                                                    <a href="#" class="cOrange">耳机音箱</a>
                                                    <a href="#" class="cOrange">数据线</a>
                                                    <a href="#" class="cOrange">鼠标键盘</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                                <img src="../../img/kd.png" alt="">
                                                <a href="#">宽带</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList kd">
                                            <dl class="fore">
                                                <dt>宽带新装</dt>
                                                <dd>
                                                    <a href="#">光宽带-流量王</a>
                                                    <a href="#">单宽带</a>
                                                    <a href="#">智慧沃家</a>
                                                    <a href="#">联通宽带电视IPTV</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>宽带续费</dt>
                                                <dd>
                                                    <a href="#">包年续费</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>宽带服务</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">续费订单查询</a>
                                                    <a href="#" class="cOrange">光宽带-流量王订单查询</a>
                                                    <a href="#" class="cOrange">单宽带订单查询</a>
                                                    <a href="#" class="cOrange">宽带测速</a>
                                                    <a href="#" class="cOrange">智慧到家</a>
                                                    <a href="#" class="cOrange">沃家总管</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                                <img src="../../img/card.png" alt="">
                                                <a href="#">充值卡</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList kd ">
                                            <dl class="fore">
                                                <dt>充值卡</dt>
                                                <dd>
                                                    <a href="#">20元面值</a>
                                                    <a href="#">30元面值</a>
                                                    <a href="#">50元面值</a>
                                                    <a href="#">100元面值</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                                <img src="../../img/money.png" alt="">
                                                <a href="#">交费充值</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList kd ">
                                            <dl class="fore">
                                                <dt>交话费</dt>
                                                <dd>
                                                    <a href="#">手机/上网卡交费</a>
                                                    <a href="#">固话/宽带交费</a>
                                                    <a href="#">购买充值卡</a>
                                                    <a href="#">网上交费/购卡记录查询</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>联通商户</dt>
                                                <dd>
                                                    <a href="#">缴费站交费(仅限空中充值业务)</a>
                                                    <a href="#">大额业务</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>沃商户</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">沃账户充值</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                                <img src="../../img/sel.png" alt="">
                                                <a href="#">话费查询</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList kd" >
                                            <dl class="fore">
                                                <dt>话费查询</dt>
                                                <dd>
                                                    <a href="#">实时话费</a>
                                                    <a href="#">账户余额</a>
                                                    <a href="#">交费记录</a>
                                                    <a href="#">合约期查询</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>使用量查询</dt>
                                                <dd>
                                                    <a href="#">余量查询</a>
                                                    <a href="#">上网卡使用量</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>账单查询</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">历史账单</a>
                                                    <a href="#" class="cOrange">详单查询</a>
                                                    <a href="#" class="cOrange">流量币账单</a>
                                                    <a href="#" class="cOrange">沃商店详单</a>
                                                    <a href="#" class="cOrange">集团客户账单</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>积分查询</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">积分兑换</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>其他查询</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">业务办理记录</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>电子单查询</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">电子发票查询及开具</a>
                                                    <a href="#" class="cOrange">电子受理单查询</a>

                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                        <span>
                                            <a href="#" target="_blank">流量包订购</a>
                                             <img src="../../img/new.png" alt="">
                                        </span>
                                                <img src="../../img/tool.png" alt="">
                                                <a href="#">业务办理</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList  kd ">
                                            <dl class="fore">
                                                <dt>基础业务</dt>
                                                <dd>
                                                    <a href="#">通话设置</a>
                                                    <a href="#">网龄升级计划</a>
                                                    <a href="#">20元套餐可选包办理</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>上网流量</dt>
                                                <dd>
                                                    <a href="#">流量半年包</a>
                                                    <a href="#">流量包月</a>
                                                    <a href="#">闲时流量包</a>
                                                    <a href="#">流量加油包</a>
                                                    <a href="#">流量放心用</a>
                                                    <a href="#">WO+视频定向流量包</a>
                                                    <a href="#">假日畅游流量包</a>
                                                    <a href="#">音乐包</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>套餐变更</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">3G套餐变更</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>升级4G</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">升级4G套餐</a>
                                                    <a href="#" class="cOrange">升级4G组合套餐</a>
                                                    <a href="#" class="cOrange">升级4G状态查询</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>流量语音加油包</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">日租流量包</a>
                                                    <a href="#" class="cOrange">畅视</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>国际业务</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">国际、港澳台漫游</a>
                                                    <a href="#" class="cOrange">国际、港澳台长途</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>WLAN业务</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">WLAN开通/关闭</a>
                                                    <a href="#" class="cOrange">WLAN密码修改/重置</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>信用额度</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">调整信用额度</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>其它业务</dt>
                                                <dd>
                                                    <a href="#" class="cOrange">服务密码设置</a>
                                                    <a href="#" class="cOrange">停机保号/复机</a>
                                                    <a href="#" class="cOrange">挂失/解挂</a>
                                                    <a href="#" class="cOrange">话费代扣</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li class="item rela">
                                        <div class="overr">
                                            <h3>
                                                <img src="../../img/persons.png" alt="">
                                                <a href="#" >便民服务</a>
                                            </h3>
                                        </div>
                                        <div class="allSortList  kd" >
                                            <dl class="fore ">
                                                <dt>品牌</dt>
                                                <dd>
                                                    <a href="#">苹果</a>
                                                    <a href="#">小米</a>
                                                    <a href="#">三星</a>
                                                    <a href="#">华为</a>
                                                    <a href="#">vivo</a>
                                                    <a href="#">酷派</a>
                                                    <a href="#">HTC</a>
                                                    <a href="#">联想</a>
                                                    <a href="#">魅族</a>
                                                    <a href="#">中兴</a><br>
                                                    <a href="#">诺基亚</a>
                                                    <a href="#">索尼</a>
                                                    <a href="#">华硕</a>
                                                    <a href="#">OPPO</a>
                                                    <a href="#">TCL</a>
                                                    <a href="#">金立</a>
                                                    <a href="#">海尔</a>
                                                    <a href="#">小辣椒</a>
                                                    <a href="#">乐视</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>活动</dt>
                                                <dd>
                                                    <a href="#">存话费送手机</a>
                                                    <a href="#">买手机送话费</a>
                                                    <a href="#">老用户优惠购机 (支持合约到期提前预约)</a><br>
                                                    <a href="#">裸机热卖</a>
                                                    <a href="#">招联信用付0利息0手续费</a>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dd>
                                                    <a href="#" class="cOrange">营业厅查询
                                                    </a>
                                                    <a href="#" class="cOrange">短信指令查询</a>
                                                    <a href="#" class="cOrange">手机号码归属地查询</a>
                                                    <a href="#" class="cOrange">上网卡号查询</a>
                                                    <a href="#" class="cOrange">充值卡状态查询</a>
                                                    <a href="#" class="cOrange">宽带装移修进度查询</a>
                                                    <a href="#" class="cOrange">国际、港澳台漫游资费</a><br>
                                                    <a href="#" class="cOrange">安全中心</a>
                                                    <a href="#" class="cOrange">常见问题</a>
                                                    <a href="#" class="cOrange">历史投诉查询</a>
                                                    <a href="#" class="cOrange">电话“黑卡”举报</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="allSortBottom"></div>
                        </div>
                    </div>
                </div>
                <div class="nav float-left">
                    <ul class="list-unstyled ">
                        <li><a href="#">首&nbsp;&nbsp;&nbsp;&nbsp;页</a></li>
                        <li><a href="#">自助服务</a></li>
                        <li><a href="#">积分商城</a></li>
                        <li><a href="#">老用户专区</a></li>
                        <li><a href="#">中小企业</a></li>
                    </ul>
                </div>
                <div class="orderCart float-right">
                    <a href="#" class="paying ">未付款订单(0)<img src="../../img/orange_down.png" class="ml-2"></a>
                    <a href="#" class="gotoOrder"><img src="../../img/cart.png" class="mr-2">去结算</a>
                    <!--隐藏框-->
                    <div class="pay_hide pl-4 hide">
                        您没有未支付订单,赶紧去订购吧！
                    </div>
                </div>
            </div>
        </div>
        <!--内容-->
        <div class="section ">
            <div class="center ">

                <div class="left-side float-left" >
                    <h3><a href="#">我的联通</a></h3>
                    <h2 >我的交易</h2>
                    <ul class="sidebar_nav list-unstyled mt-2">
                        <li><a @click="change(3)" class="myorder" >我的订单</a></li>
                        <li><a href="#" >业务办理记录</a></li>
                        <li><a href="#" >预约订单</a></li>
                        <li><a href="#" >免登录订单</a></li>
                        <li><a href="#" >售后处理订单</a></li>
                    </ul>
                    <h2 class="">我的账户</h2>
                    <ul class="sidebar_nav list-unstyled mt-2">
                        <li><a @click="change(1)"  class="personinfo" >个人信息</a></li>
                        <li><a @click="change(2)" class="updatePwd">密码修改</a></li>
                        <li><a href="javascript:" >账号绑定</a></li>
                        <li><a href="javascript:" >号码管理</a></li>
                        <li><a @click="change(4)" class="address">收货地址</a></li>
                        <li><a href="javascript:" >机票联系人</a></li>
                        <li><a href="javascript:" >登记记录</a></li>
                        <li><a href="javascript:" >我的足迹</a></li>
                        <li><a href="javascript:" >安全中心</a></li>
                    </ul>
                    <h2 class="">我的资产</h2>
                    <ul class="sidebar_nav list-unstyled mt-2">
                        <li><a href="javascript:" >我的积分</a></li>
                        <li><a href="javascript:" >我的代金券</a></li>
                        <li><a href="javascript:" >我的奖励</a></li>
                        <li><a href="javascript:" >分享有礼</a></li>
                    </ul>
                </div>
                <div class="right-side float-right">
                    <info-box v-if="falsed"></info-box>
                    <upwd-box v-else-if="falsed1"></upwd-box>
                    <login-box v-else-if="falsed2"></login-box>
                    <address-box v-else-if="falsed3"></address-box>
                </div>

            </div>
        </div>
        <div class="footer">
            <table></table>
            <div class="center d-flex justify-content-around mt-4">
                <ul class="foot">
                    <li class="pic1">购物指南</li>
                    <li><a href="javascript:">购物流程</a></li>
                    <li><a href="javascript:">发票说明</a></li>
                    <li><a href="javascript:">联系客服</a></li>
                    <li><a href="javascript:">服务协议</a></li>
                </ul>
                <ul class="foot">
                    <li class="pic2">支付方式</li>
                    <li><a href="javascript:">在线支付</a></li>
                    <li><a href="javascript:">快捷支付</a></li>
                    <li><a href="javascript:">货到付款</a></li>
                </ul>
                <ul class="foot">
                    <li class="pic3">配送方式</li>
                    <li><a href="javascript:">快递配送</a></li>
                    <li><a href="javascript:">上门自提</a></li>
                </ul>
                <ul class="foot">
                    <li class="pic4">售后服务</li>
                    <li><a href="javascript:">退换货政策</a></li>
                    <li><a href="javascript:">退换货流程</a></li>
                    <li><a href="javascript:">退款说明</a></li>
                    <li><a href="javascript:">手机维修</a></li>
                </ul>
                <ul class="foot">
                    <li class="pic5">联通特色服务</li>
                    <li><a href="javascript:">交费充值</a></li>
                    <li><a href="javascript:">营业厅分布查询</a></li>
                    <li><a href="javascript:">号码归属地查询</a></li>
                    <li><a href="javascript:">常见问题</a></li>
                </ul>
            </div>
            <!--返回顶部-->
            <a href="#" class="goTop">
                <img src="../../img/up.png" alt="">
                回顶部
            </a>
        </div>
    </div>
</template>
<script>
    import personalInfo from '../state/personalInfo.vue'
    import pwdUpdate from "../state/pwdUpdate.vue"
    import loginMyOrder from "../state/loginMyOrder.vue"
    import receiveAddress from "../state/receiveAddress.vue"
    
           
                            
            

        export default{

            data(){
                return{
                    text:"",
                    styleObject:
                        {display:"none"},
                    styleObject1:{
                        display:"none"
                    },
                    falsed:false,
                    falsed1:false,
                    falsed2:false,
                    falsed3:false,
                    isshow:false,
                    show:false,
                    list:[],
                    pro:"辽宁",
                    hide:false  ,
                    name:""
                                
                }
            },
            
            methods:{
                jquery(){
                     $("#categoryList .item .allSortList").css("display","none");
            $('#categoryList>ul>li').mouseover(function(){
        // children 只获取子元素，不获取孙元素
        $(this).children('.allSortList').show()
        }),
        $('#categoryList>ul>li').mouseout(function(){
        $(this).children('.allSortList').hide()
        }) ,      
            $("#two").hover(
                            function () {
                                var $li=$(this)
                                var $hide=$(".client")
                                $hide.toggleClass("hide")
                                $li.toggleClass("add")
                            }
                        ),
                        $(".orderCart").hover(
                                function () {
                                    var $a=$(this);
                                    $(".pay_hide").toggleClass("hide")
                                }
                            ),
                            $(".search").on("mouseover","div",
                                function () {
                                    var $div=$(this)
                                    if($div.hasClass("product")){
                                        $(".service")
                                            .css("background","#fff")
                                        $(".product").css("background","#F6F6F6")
                                    }
                                    else if($div.hasClass("service")){
                                        $(".product").css("background","#fff")
                                        $(".service").css("background","#F6F6F6")
                                    }
                                }
                            )
                },
                getName(){
                var uid=location.href.slice(33);

                    this.$http.get("getUser?uid="+uid).then(result=>{
                        this.name=result.body[0].name;
                    })
                },
                
                change(i){
                    if(i==1){
                        this.falsed=true;
                    }
                    else if(i==2){
                        this.falsed=false;
                        this.falsed1=true;
                    }
                    else if(i==3){
                    this.falsed1=false;
                    this.falsed2=true;
                    }else if(i==4){
                        this.falsed3=true;
                        this.falsed2=false;
                        
                    }
                    },
                
                
                isShow(){
                    this.styleObject.display="block"
                },
                isHide(){
                    this.styleObject.display="none"
                },
                isShow1(){
                    this.styleObject1.display="block"
                },
                isHide1(){
                    this.styleObject1.display="none"
                },
                toggleShow(){
                    this.isshow=!this.isshow;
                    
                },
                toggleShow1(){
                    this.show=!this.show;
                },
                //定位地址切换
                getProvince(){
                    this.$http.get("getaddress").then(result=>{
                        this.list=result.body;
                    })
                } ,
                getVal(e){
                    var val=e.target.text;
                    this.pro=val;
                

                } ,
                onMouseOver(){
                    this.hide=true;
                } ,
                onMouseOut(){
                    this.hide=false;
                } ,
            },
        created(){
            this.getProvince();
                this.getName();
           
                
        },
        mounted(){
                this.jquery();
        },
        components:{
            "info-box":personalInfo,
            "upwd-box":pwdUpdate,
            "login-box":loginMyOrder,
            "address-box":receiveAddress
        }
        }
</script>
<style>
    .app-container{
        padding-top: 0;
    }
    .right-side{
        width:980px;
        background:#fff;
        min-height: 710px;
    }


    /*welcome*/
    .welcome{
        width: 100%;
        height:31px;
        background:#F5F5F5;
    }
    .welcome .noLoginDiv,.LoginDiv{
        float: left;
        height: 30px;
        line-height: 32px;
        font-size: 12px;
    }
    .noLoginDiv a,.LoginDiv a{
        color: #333;
    }
    .noLoginDiv a:hover,.LoginDiv a:hover{
        color: #36C ;
    }
    a.orange{
        color: #ed6d00;
    }
    .welcome ul>li {
        display: block;
        float: left;
        font-size: 12px;
        height:30px;
        line-height: 32px;
        padding-right: 7px;
    }
    li>a{
        color: #333;
    }
    li>a:hover{
        color: #ed6d00;
    }
    /*header*/
    .header{
        border-top:1px solid #D6D6D6;
        width: 100%;
        background:#F5F5F5;
        height: 90px;
    }
   .city{
    height: 90px;
    line-height: 90px;
    position: relative;
}
.city span{
    color: #ed6d00;
    font-size: 20px;
    font-weight: 600;
}
.city a{
    color: #7b7b7b;
    font-size: 11px;
}
.city a:hover{
    color: #ed6d00;
}
/*hidden city*/
.hidden_city{
    width:570px;
    border:2px solid #ed6e02;
    position: absolute;
    background: #fff;
    height: 120px;
    top:65px;
    left:44px;
    z-index: 10000;
}
.hidden_city ul{
    height:100%;
}
.hidden_city ul li{
    height:23px;
    line-height: 23px;
    padding-top: 5px;
}
.hidden_city ul li a{
    padding-left: 10px;
}
.hidden_city ul li span{
    font-size: 12px;
    margin-left: 14px;
    width: 24px;
}
    /*搜索框*/
    .search-parent{
        height: 70px;
    }
    .search{
        width: 470px;
        height:31px;
        border:2px solid #ed6d00;
        margin-top: 14px;
        position: relative;
    }
    .search input{
        border:none;
        width: 64%;
        outline: none;
    }
    .search .button{
        width: 97px;
        height: 28px;
        background:#ed6d00 ;
        color: #fff;
        line-height: 28px;
        text-align: center;
    }
    .search .product,.service{
        height:27px;
        line-height: 28px;
        width:70px;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        background: #F6F6F6;
        color: #666666;
        text-align: center;
        font-size: 14px;
    }
    .service{
        position: absolute;
        height:30px;
        top:27px;
        padding-right: 15px;
        background: #fff;
        border-radius: 0 0 6px 6px;
    }
    .hotSearchBox a{
        color: #999;
        font-size: 10px;
        padding-left: 7px;
    }
    .hotSearchBox a:hover{
        color:#ed6d00 ;
    }
    /*nav*/
    .widthBg{
        width: 100%;
        background: #f36f2a;
        height: 45px;
        position: relative;
    }
    .allSort{
        position: relative;

    }
    .allSort .sortItem{
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        width: 213px;
        height: 43px;
    }
    .allSort .sortItem h6,.nav ul li a{
        color: #fff;
        height: 43px;
        line-height: 43px;
        font-size: 15px;
        font-weight: 600;
        display: block;
        text-align: center;
    }
    .nav ul li{
        float:left;
        width: 90px;
    }
    .nav ul li a:hover{
        text-decoration: none;
        background: #ffd0b7;
        color:#f36f2a ;
    }
    /*订单*/
    .paying,.gotoOrder{
        background: #fff;
        display: block;
        float: left;
        font-size: 12px;
        margin-top: 10px;
        text-align: center;
        height:28px;
        line-height: 28px;
    }
    .paying{
        color: #666;
        width: 117px;
        border-right: 1px solid #AF9984;
    }
    .paying:hover{
        text-decoration: none;
        color: #666; ;
    }
    .gotoOrder:hover{
        text-decoration: none;
        color: #f60;
    }
    .gotoOrder{
        color: #f60;
        font-weight:bold;
        width: 90px;
        border-left: 1px solid #FFEBD0;
        margin-right: 8px;
    }
    .orderCart{
        position: relative;
    }
    .orderCart img{
        margin-top: -4px;
    }
    /*订单内容部分*/
    .section{
        width:100%;
        background:#F5F5F5;
    }
    .section .center{
        overflow: hidden;
    }
    .left-side{
        width:200px;
        border:1px solid #ccc;
        background: #fff;
        font-size: 16px;
    }
    .left-side h3{
        height: 40px;
        line-height: 40px;
        padding-top: 8px;
    }
    .left-side h3>a{
        display: block;
        font-size: 16px;
        padding-left: 40px;
        color: #5d5d5d;
        text-decoration: none;
    }
    .left-side h3>a:hover{
        background: #F5F5F5;
        cursor: pointer;
    }
    .left-side h2{
        height:30px;
        line-height: 30px;
        border-top: 1px dashed #a0a0a0;
        font-size: 16px;
        color: #818181;
        margin: 0 10px;
        padding: 5px 0 0 30px;
    }
    .sidebar_nav{
        margin:0 0 10px 0;
    }
    .sidebar_nav li a{
        display: block;
        height: 30px;
        padding-left: 59px;
        line-height: 30px;
        margin-bottom: 1px;
        font-size: 14px;
        color:  #5d5d5d;
    }
    .sidebar_nav li a:hover{
        text-decoration: none;
        background:#F5F5F5 ;
    }
    .sidebar_nav li a:focus{
        color: #f60 ;
        background: url(../../img/jt_icon.png) 30px 5px no-repeat ;
    }

   .my_lt,.hide_serve{
        width: 84px;
        height: 226px;
        border: 1px solid #cccccc;
        overflow: hidden;
        position: relative;
        z-index: 1000;
        background: #fff;
        margin-top: -32px;
        margin-left: -10px;
        
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
    .hide_serve{
        width: 95px;
        height: 154px;
    }
    .hide_serve ul li{
        margin-left: 10px;
    }
    .client{
        width: 213px;
        height:138px;
        position: relative;
        background: #fff;
        z-index: 10000;
        border: 1px solid #cccccc;
        border-top:none ;
    }
    .client a{
        float: right;
    }
    #two{
        padding: 0;
        margin-right: 0;
        width: 118px;
    }
    #two.add{
        border-left: 1px solid #cccccc;
        border-right: 1px solid #ccc;
        background: #fff;
        height: 32px;
        position: relative;
        z-index: 10000;
    }
    .mt{
        margin-top: -45px;
    }
    .text1,.text2{
        color:#9E9E9E ;
        font-size: 15px;
        font-weight: bold;
    }
    .text2{
        color:#f60 ;
    }
    #two dt a{
        color: #000;
        font-weight: normal;
    }
    #two dt a:hover{
        color:#f60 ;
    }
    .icon{
        display: block;
    }
    .pay_hide{
        width: 321px;
        height: 69px;
        border:2px solid #f60;
        overflow: hidden;
        position: absolute;
        top:42px;
        left: -94px;
        background: #fff;
        line-height: 69px;
        color: #666;
        font-size: 14px;
    }
    /*商品分类隐藏框*/
.category {
    position: absolute;
    top:44px;
}
.allSortDetail {
    border: 2px solid #f36f2a;
    height: 333px;
    width: 212px;
    border-top: none;
    background: #fff7f0;
}
.cateOne {
    height: 190px;
    padding-top: 0px;
}
.allSortDetail ul li {
    left: -1px;
    top: 0px;
    margin-left: -1px;
    float: left;
    height: 36px;
    position: relative;
}
.allSortDetail ul li img{
    margin-right: 5px;
}
.allSortDetail .overr {
    height: 38px;
    width: 178px;
    margin-left: 1px;
    margin-top: -2px;
    position: relative;
    z-index: 999;
}
.allSortDetail h3 {
    width: 189px;
    height: 36px;
    overflow: hidden;
    padding-top: 10px;
    margin-left: 8px;
    border-bottom: 1px solid #feeadb;
    font-size: 14px;
    font-weight: bold;
    background: url("../../img/right.png") no-repeat 177px center;
}
.allSortDetail h3 span {
    float: right;
    height: 20px;
    line-height: 16px;
}
.allSortDetail h3 span img{
    margin-top:-24px;
    margin-left: -5px;
}
.allSortDetail h3 span a {
    color: #f60;
    font-size: 12px;
    font-weight: normal;

}
.allSortDetail h3 a {
    font-size: 14px;
    font-weight: bold;
    color: #575757;
    line-height: 20px;
}
/*二级隐藏框*/
.allSortList {
    position: absolute;
    border: 2px solid #f36f2a;
    width: 542px;
    overflow: hidden;
    background: #fff;
    padding: 10px 13px 10px 2px;
    z-index: 10000;
}
.selNumber{
    top:0;
    left:200px;
}
.kd{
    top:-5px;
    left:200px;
}
.allSortList dt {
    font-weight: bold;
    float: left;
    width: 100px;
    white-space: nowrap;
    line-height: 22px;
    height: 22px;
    padding: 4px 6px 5px 11px;
    color: #717171;
    text-align: left;
    font-size: 14px;
}
.allSortList dd {
    float: left;
    width: 400px;
}
.allSortList dd a {
    white-space: nowrap;
    color: #717171;
    font-size: 12px;
}
    .price{
        width:565px;
        height:185px;
        position:absolute;
        top:-3px;
        left:196px;
    }
    .price a{
        padding-left:6px;
    }
    /*底部*/
    .footer{
        width: 100%;
        background:#F5F5F5;
        position: absolute;

    }
    .pic1{
        list-style-image: url("../../img/order.png");
    }
    .pic2{
        list-style-image: url("../../img/pay.png");
    }
    .pic3{
        list-style-image: url("../../img/send.png");
    }
    .pic4{
        list-style-image: url("../../img/service.png");
    }
    .pic5{
        list-style-image: url("../../img/special.png");
    }
    .pic1,.pic2,.pic3,.pic4,.pic5{
        padding-top: 5px;
    }
    .foot>li>a{
        color: #666;
        font-size: 12px;
    }
    .foot>li>a:hover{
        color: #F77C26;
    }
    .center ul li:first-child{
        color: #F77C26;
        font-weight: bold;
        font-size: 15px;
    }
    /*返回顶部*/
    .goTop{
        position: relative;
        bottom: 0;
        right:12px;
        float: right;
        width: 67px;
        height: 70px;
        text-align: center;
        cursor: pointer;
        background: #B3B3B3;
        color: #fff;
        border-radius: 3px;
    }
    .goTop:hover{
        color: #fff;
        text-decoration: none;
        background-color: #888888;
    }
/*reset*/
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  background:transparent;
  list-style: none;
}
/*居中*/
.center{
  width: 1190px;
  height: 100%;
  margin:0 auto;
}
</style>