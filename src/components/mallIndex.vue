<template>
    <div id="app-mall">
        <header class="my_black">
            <div class="box">
                <img src="../img/small_logo.png">
                <a href="#" class="small my_gray">网上营业厅</a>
                <div class="float-right p-1 position-relative phone">
                    <a href="#" class="small my_gray pb-5">
                        <img src="../img/phone1.png">
                        手机版
                    </a>
                    <div class="net text-center">
                        <ul class="list-unstyled float-left shop  border-right border-left p-2 bg-white">
                            <li>
                                <div>
                                    <p class="small mb-1">扫码购物</p>
                                    <img src="../img/shopping.png">
                                </div>
                                <img src="../img/Iphone.png">
                                <span>Iphone</span>
                                <img src="../img/android (2).png">
                                <span>Android</span>
                            </li>
                        </ul>
                        <ul class="list-unstyled float-left border-right p-2 bg-white down">
                            <li>
                                <div class="">
                                    <p class="small mb-1">下载手机营业厅</p>
                                    <img src="../img/download.png">
                                </div>
                                <img src="../img/Iphone.png">
                                <span>Iphone</span>
                                <img src="../img/android (2).png">
                                <span>Android</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="float-right mr-4 p-1 position-relative show_personal" >
                    <a href="#" class="small my_gray pb-3">
                        <img src="../img/personal.png">
                        个人中心
                    </a>
                    <div class="personal hidden">
                        <ul class="list-unstyled border-right float-left pl-2 pt-1 border-left">
                            <li><a href="#" class="small">我的订单</a></li>
                            <li><a href="#" class="small">预约订单</a></li>
                            <li><a href="#" class="small">收货地址</a></li>
                            <li><a href="#" class="small">个人信息</a></li>
                        </ul>
                        <ul class="list-unstyled  float-left security pl-2 pt-1 border-right">
                            <li><a href="#" class="small">售后处理</a></li>
                            <li><a href="#" class="small">密码修改</a></li>
                            <li><a href="#" class="small">安全中心</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <nav class="mb-3">
            <div class="box pt-5 pb-5">
                <a href="#"><img src="../img/index-logo.png"></a>
                <div class="menu_city d-inline-block text-center ml-4">
                    <img src="../img/position_iocn.png">
                    <span class="small">北京</span>
                    <img src="../img/down_icon.png">
                    <!--  省市 -->
                    <div class="province bg-white hidden">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <span>A-G</span>
                                <a href="#">北京</a>
                                <a href="#">安徽</a>
                                <a href="#">重庆</a>
                                <a href="#">福建</a>
                                <a href="#">广东</a>
                                <a href="#">甘肃</a>
                                <a href="#">广西</a>
                                <a href="#">贵州</a>
                            </li>
                            <li>
                                <span>H-J</span>
                                <a href="#">湖北</a>
                                <a href="#">湖南</a>
                                <a href="#">河北</a>
                                <a href="#">河南</a>
                                <a href="#">海南</a>
                                <a href="#">江苏</a>
                                <a href="#">吉林</a>
                                <a href="#">江西</a>
                                <a href="#">黑龙江</a>
                            </li>
                            <li>
                                <span>L-S</span>
                                <a href="#">辽宁</a>
                                <a href="#">宁夏</a>
                                <a href="#">青海</a>
                                <a href="#">山东</a>
                                <a href="#">上海</a>
                                <a href="#">山西</a>
                                <a href="#">陕西</a>
                                <a href="#">四川</a>
                                <a href="#">内蒙古</a>
                            </li>
                            <li>
                                <span>T-Z</span>
                                <a href="#">天津</a>
                                <a href="#">新疆</a>
                                <a href="#">西藏</a>
                                <a href="#">云南</a>
                                <a href="#">浙江</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul class="list-unstyled">
                        <li class="float-left pr-4"><a href="#">首页</a></li>
                        <li class="float-left Combo">
                                <a href="#" class="p-4">套餐</a>
                                <!--  套餐 -->
                                <div class="box bg-white tc clearfix border-top hidden">
                                    <ul class="list-unstyled text-center">
                                        <li>
                                            <a href="#">
                                                <img src="../img/S_ice.jpg">
                                                <p class="title">小冰神卡</p>
                                                <p class="details">存49得99</p>
                                                <p class="price">49元</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../img/wxw.png">
                                                <p class="title">微信沃派卡</p>
                                                <p class="details">300打两年</p>
                                                <p class="price">300元</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../img/liuliangwang.jpg">
                                                <p class="title">全国流量王</p>
                                                <p class="details">激活送电子券</p>
                                                <p class="price">50元</p>
                                            </a>
                                        </li>
                                        <li class="border-0">
                                            <a href="#">
                                                <img src="../img/rizu.jpg">
                                                <p class="title">日租卡升级版</p>
                                                <p class="details">热卖产品</p>
                                                <p class="price">0元</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                        </li>
                        <li class="float-left phone_pl position-relative">
                            <a href="#" class="p-4">手机专区</a>
                            <!--   手机专区  -->
                            <div class="box bg-white sj clearfix border-top hidden">
                                <ul class="list-unstyled text-center">
                                    <li>
                                        <a href="#">
                                            <img src="../img/iphoneX.png">
                                            <p class="title">iphone X</p>
                                            <p class="details">冰激凌合约</p>
                                            <p class="price">9680元</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="../img/iphone8plus.jpg">
                                            <p class="title">iphone8 plus 256G</p>
                                            <p class="details">冰激凌合约</p>
                                            <p class="price">7980元</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="../img/iphone7.jpg">
                                            <p class="title">iphone7+冰激凌合约</p>
                                            <p class="details">高性价比推荐</p>
                                            <p class="price">4610元</p>
                                        </a>
                                    </li>
                                    <li class="border-0">
                                        <a href="#">
                                            <img src="../img/Mate10.jpg">
                                            <p class="title">华为Mate10 Pro</p>
                                            <p class="details">人工智能芯片</p>
                                            <p class="price">5399元</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="float-left pr-5 pl-3"><a href="#">号码套餐</a></li>
                        <li class="float-left pr-5"><router-link to="/recharge">上网卡</router-link></li>
                        <li class="float-left pr-5"><a href="#">宽带</a></li>
                    </ul>
                    <div class="float-right position-relative show_card">
                        <input type="text" placeholder="王卡" class="my_input small" @keyup.13="search" v-model="kw">
                        <div class="search d-inline-block">
                            <img src="../img/search_red.png" class="w-75" @click="search" >
                        </div>
                        <!--  王卡-->
                        <div class="border Kcard  bg-white hidden">
                            <a href="#">冰神卡</a>
                            <a href="#">iphone 8</a>
                            <a href="#">iphone 7</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <!--轮播图-->
                <div class="carousel" data-ride="carousel" id="pic">
                    <ul class="carousel-indicators">
                        <li class="active" data-target="#pic" data-slide-to="0"></li>
                        <li data-target="#pic" data-slide-to="1"></li>
                        <li data-target="#pic" data-slide-to="2"></li>
                        <li data-target="#pic" data-slide-to="3"></li>
                        <li data-target="#pic" data-slide-to="4"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="#">
                                <img src="../img/scroll1.jpg">
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href="#">
                                <img src="../img/scroll2.jpg">
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href="#">
                                <img src="../img/scroll3.jpg">
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href="#">
                                <img src="../img/scroll4.png">
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href="#">
                                <img src="../img/scroll5.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--   侧边栏  -->
            <div class="slidebar">
                <a href="#" class="online"></a>
                <a href="#" class="kefu"></a>
                <a href="#" class="paper"></a>
                <a href="#"class="top"></a>
            </div>
        </nav>
        <section class="bg_gray pt-3 pb-2">
            <div class="box bg-white mb-4">
                <div class="hide">
                    <div class="border-right d-inline-block text-center pt-5 pb-3 ">
                        <a href="#">
                            <p class="title">冰神卡</p>
                            <p class="details">全国流量敞开用</p>
                            <p class="price">￥99</p>
                            <img src="../img/ice.jpg">
                        </a>
                    </div>
                    <div class="introduce">
                        <p>.全国流量敞开用</p>
                        <p>.预存送100元话费</p>
                    </div>
                </div>
                <div class="hide">
                    <div class="border-right d-inline-block text-center pt-5">
                        <a href="#">
                            <p class="title">全国流量王</p>
                            <p class="details">月享10G大流量</p>
                            <p class="price">￥50</p>
                            <img src="../img/global.png">
                        </a>
                    </div>
                    <div class="introduce">
                        <p>.激活送电子券</p>
                        <p>.可办理副卡</p>
                    </div>
                </div>
                <div class="hide">
                    <div class="border-right d-inline-block text-center pt-5">
                        <a href="#">
                            <p class="title">微信沃派卡</p>
                            <p class="details">300打两年</p>
                            <p class="price">￥300</p>
                            <img src="../img/wx.png" alt="">
                        </a>
                    </div>
                    <div class="introduce">
                        <p>.存250得820</p>
                    </div>
                </div>
                <div class="hide">
                    <div class="d-inline-block text-center pt-5">
                        <a href="#">
                            <p class="title">智慧沃家-全家福套餐</p>
                            <p class="details">手机宽带畅用</p>
                            <p class="price">￥166</p>
                            <img src="../img/family.jpg">
                        </a>
                    </div>
                    <div class="introduce">
                        <p>.语音流量敞开用</p>
                        <p>.5张号卡任性用</p>
                        <p>.200M宽带敞开用</p>
                    </div>
                </div>
            </div>
            <!-- 一楼 -->
            <div class="box bg-white mb-5">
                <div class="floor1">
                    <h4 class="mb-0">
                        <img src="../img/select.png" class="pl-4">
                        选套餐
                        <a href="#">
                            查看更多<img src="../img/right_icon.png">
                        </a>
                    </h4>
                    <div class="mmodule">
                        <a href="#" class="float-left">
                            <img src="../img/number.png">
                        </a>
                        <a @click=gotaocan(1) class="position-relative touch">
                            <div class="d-inline-block hid text-center border-bottom border-right pt-4">
                                <img src="../img/tscard.png" class="cards pr-2">
                                <img src="../img/outcard.png" class="outcard">
                                <label>天神卡</label>
                                <p class="title pt-4">天神卡</p>
                                <p class="details">存50送50</p>
                                <p class="price">￥0</p>
                            </div>
                            <div class="one">
                                <p>.一元日租卡</p>
                                <p>.三元敞开用</p>
                            </div>
                        </a>
                        <a @click=gotaocan(2) class="position-relative touch">
                            <div class="d-inline-block hid text-center pt-4 border-bottom">
                                <img src="../img/llcard.png" class="cards pr-5">
                                <img src="../img/outcard.png" class="outcard">
                                <label>全国流量王</label>
                                <p class="title pt-4">全国流量王</p>
                                <p class="details">激活送电子券</p>
                                <p class="price">￥50</p>
                            </div>
                            <div class="one">
                                <p>.激活送电子券</p>
                            </div>
                        </a>
                        <a @click=gotaocan(1) class="position-relative touch">
                            <div class="d-inline-block hid text-center border-right pt-4">
                                <img src="../img/4gcard.jpg" class="cards pr-4">
                                <img src="../img/outcard.png" class="outcard">
                                <label>全国套餐</label>
                                <p class="title pt-4">最低56元套餐</p>
                                <p class="details">预存120元得360元</p>
                                <p class="price">￥120</p>
                            </div>
                            <div class="one">
                                <p>.预存120元得360元</p>
                                <p>.9档套餐任您选</p>
                            </div>
                        </a>
                        <a @click=gotaocan(3) class="position-relative touch">
                            <div class="d-inline-block hid text-center border-right pt-4">
                                <img src="../img/xbscard.png" class="cards pr-4">
                                <img src="../img/outcard.png" class="outcard">
                                <label>小冰神卡</label>
                                <p class="title pt-4">小冰神卡</p>
                                <p class="details">国内流量敞开用</p>
                                <p class="price">￥50</p>
                            </div>
                            <div class="one">
                                <p>.存49得99</p>
                            </div>
                        </a>
                        <a @click=gotaocan(5) class="position-relative touch">
                            <div class="d-inline-block hid text-center border-right pt-4">
                                <img src="../img/129card.png" class="cards pr-4">
                                <img src="../img/outcard.png" class="outcard">
                                <label>129冰激凌</label>
                                <p class="title pt-4">129冰激凌纪念号</p>
                                <p class="details">生日，纪念，个性号</p>
                                <p class="price">￥39</p>
                            </div>
                            <div class="one">
                                <p>.生日，纪念，个性号</p>
                            </div>
                        </a>
                        <a @click=gotaocan(6)>
                            <div class="d-inline-block border-bottom more float-right">
                                <div class="d-inline-block left pl-4 pt-4">
                                    <p class="title pt-4">129冰激凌靓号</p>
                                    <p class="details">豪华靓号</p>
                                    <p class="price">￥39</p>
                                </div>
                                <div class="d-inline-block right">
                                    <img src="../img/129icecard.jpg">
                                </div>
                                <div class="d-inline-block bottom">
                                    <img src="../img/bluemore.png">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- 二楼 -->
            <div class="box bg-white pt-4">
                <div class="floor2">
                    <h4 class="mb-0">
                        <img src="../img/select_icon.png" class="pl-4">
                        选靓号
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">
                                    <img src="../img/position.png">
                                    北京
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../img/phone_icon.png">
                                    号码类型
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">查看更多
                                    <img src="../img/right.png">
                                </a>
                            </li>
                        </ul>
                    </h4>
                    <div class="limit mb-4">
                        <div class="length">
                            <ul class="number">
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                            </ul>
                            <ul class="number">
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                            </ul>
                            <ul class="number">
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                            </ul>
                            <ul class="number">
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0036-<span>3334</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1165-<span>2626</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-0074-<span>2224</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1072-<span>1515</span><span class="name">精品号码</span></a></li>
                                <li><a href="#">176-1016-<span>3322</span><span class="name">精品号码</span></a></li>
                            </ul>
                        </div>
                        <img src="../img/zjt.png" class="leftbtn">
                        <img src="../img/rjt.png" class="rightbtn">
                    </div>
                </div>
            </div>
            <!-- 三楼 -->
            <div class="box bg-white ft">
                <div class="floor3 pt-4">
                    <h4 class="mb-0 pb-3">
                        <img src="../img/o_phone.png" class="pl-4">
                        买手机
                        <a href="#">
                            查看更多<img src="../img/o_right.png">
                        </a>
                    </h4>
                <div class="bmodule">
                    <a href="#" class="float-left">
                        <img src="../img/iphonexs.jpg">
                    </a>
                    <a @click="godetail(2)" class="position-relative touch">
                        <div class="d-inline-block hid text-center border-bottom border-right border-left pt-4" >
                            <img src="../img/iphone_xs.jpg">
                            <p class="title pt-4">iphone XS</p>
                            <p class="details">无合约版</p>
                            <p class="price">￥8680</p>
                        </div>
                        <div class="three">
                            <p>.新品上市</p>
                        </div>
                    </a>
                    <a @click="godetail(8)" class="position-relative touch">
                        <div class="d-inline-block hid text-center border-bottom pt-4">
                            <img src="../img/huawei_p20.jpg">
                            <p class="title pt-4">华为P20</p>
                            <p class="details">129冰激凌合约</p>
                            <p class="price">￥3388</p>
                        </div>
                        <div class="three">
                            <p>.2400万像素前置镜头</p>
                            <p>.5.8英寸全面屏</p>
                        </div>
                    </a>
                    <a @click="godetail(8)" class="position-relative touch">
                        <div class="d-inline-block hid text-center border-right pt-4">
                            <img src="../img/huawei_p20.jpg">
                            <p class="title pt-4">华为P20</p>
                            <p class="details">无合约版</p>
                            <p class="price">￥4432</p>
                        </div>
                        <div class="three">
                            <p>.4000万徕卡双摄</p>
                        </div>
                    </a>
                    <a @click="godetail(10)" class="position-relative touch">
                        <div class="d-inline-block hid text-center border-right">
                            <img src="../img/vivo_x21.jpg">
                            <p class="title pt-4">vivo X21A</p>
                            <p class="details">129冰激凌合约</p>
                            <p class="price">￥2798</p>
                        </div>
                        <div class="three">
                            <p>.129冰激凌合约</p>
                        </div>
                    </a>
                    <a @click="godetail(4)" class="position-relative touch">
                        <div class="d-inline-block hid text-center border-right">
                            <img src="../img/oppo_r17.jpg" alt="">
                            <p class="title pt-4">OPPO R17</p>
                            <p class="details">129冰激凌合约</p>
                            <p class="price">￥3499</p>
                        </div>
                        <div class="three">
                            <p>.129冰激凌合约</p>
                        </div>
                    </a>
                    <a>
                        <div class="d-inline-block border-bottom more float-right">
                            <div class="d-inline-block left pl-5 pt-3" @click="godetail(11)">
                                <p class="title pt-4">vivo X21A</p>
                                <p class="details">无合约版</p>
                                <p class="price">￥2518</p>
                            </div>
                            <div class="d-inline-block right">
                                <img src="../img/vivox21a.jpg">
                            </div>
                            <div class="d-inline-block bottom">
                                <img src="../img/omore.png">
                            </div>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </section>
        <div>
            <div class="box btm">
                <div>
                    <img src="../img/shop.png">
                    <span>购物指南</span>
                    <ul class="list-unstyled">
                        <li><a href="#">购物流程</a></li>
                        <li><a href="#">发票说明</a></li>
                        <li><a href="#">联系客服</a></li>
                        <li><a href="#">服务协议</a></li>
                    </ul>
                </div>
                <div>
                    <img src="../img/pay.png">
                    <span>支付方式</span>
                    <ul class="list-unstyled">
                        <li><a href="#">在线支付</a></li>
                        <li><a href="#">快捷支付</a></li>
                        <li><a href="#">货到付款</a></li>
                    </ul>
                </div>
                <div>
                    <img src="../img/car.png">
                    <span>配送方式</span>
                    <ul class="list-unstyled">
                        <li><a href="#">快递配送</a></li>
                        <li><a href="#">上门自提</a></li>
                    </ul>
                </div>
                <div>
                    <img src="../img/person.png">
                    <span>售后服务</span>
                    <ul class="list-unstyled">
                        <li><a href="#">退换货政策</a></li>
                        <li><a href="#">退换货流程</a></li>
                        <li><a href="#">退款说明</a></li>
                        <li><a href="#">手机维修</a></li>
                    </ul>
                </div>
                <div>
                    <img src="../img/light.png">
                    <span>联通特色服务</span>
                    <ul class="list-unstyled">
                        <li><a href="#">交费充值</a></li>
                        <li><a href="#">营业厅分布查询</a></li>
                        <li><a href="#">号码归属地查询</a></li>
                        <li><a href="#">常见问题</a></li>
                    </ul>
                </div>
            </div>
            <div class="box bg_gray clearfix mb-3">
                <p class="link mb-0">友情链接</p>
                <ul class="list-unstyled friend">
                    <li><a href="#" class="wy">网易科技</a></li>
                    <li><a href="#">慧聪网</a></li>
                    <li><a href="#">太平洋电脑网</a></li>
                    <li><a href="#">中关村在线</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                kw:""
            }
        },
        methods:{
            jquery(){
                $(function(){
                    var i=0;
                    $(".leftbtn").css("opacity",".3")
                    $(".rightbtn").on("click",function(){
                        i-=1200;
                        if(i==-4800){
                            i=-3600;
                            return;
                        }
                        if(i==-3600){
                            $(".rightbtn").css("opacity",".3");
                        }
                        $(".leftbtn").css("opacity","1")
                        $(".length").css({"transform":"translateX("+i+"px)","transition":"all 1s"})
                    })
                    $(".leftbtn").on("click",function(){
                        i+=1200;
                        if(i==1200){
                            i=0;
                            return;
                        }
                        if(i!==0){
                            $(".rightbtn").css("opacity","1");
                            $(".leftbtn").css("opacity","1")
                        }
                        if(i==0){
                            $(".leftbtn").css("opacity",".3")
                        }
                        $(".length").css({"transform":"translateX("+i+"px)","transition":"all 1s"})
                    })
                })
            },
            search(){
                this.$router.push("/detail/"+this.kw);
            },
            godetail(id) {
				this.$router.push({
					name: 'Detail',
					query: {
						id: id
					}
				});
				$(window).scrollTop(0);
			},
            gotaocan(id){
				this.$router.push({
					name: 'TaocanDetail',
					query: {
						id: id
					}
				});
				$(window).scrollTop(0);
			}
        },
        mounted(){
            this.jquery();
        }
    }
</script>
<style>
    a:hover{
        text-decoration:none;
    }
    .box{
    width:1200px;
    margin: 0 auto;
    }
    header .box{
        height: 36px;
    }
    .personal{
        position: absolute;
        top:-1px;
    }
    .personal ul{
        width: 70px;
        height:100px;
    }
    .show_personal:hover .personal{
        display: block;
    }
    .personal .security{
        position: absolute;
        left:70px;
    }
    .phone:hover .net{
        display: block;
    }
    .net{
        position: absolute;
        top:45px;
        z-index: 1;
        display: none;
    }
    .net .shop{
        position: absolute;
        left: -180px;
    }
    .net .down{
        position: absolute;
        left:-19px;
    }
    .net img{
        width: 12px;
        height: 15px;
    }
    .net .down li{
        width:145px;
    }
    .net div>img{
        width: 112px;
        height:112px;
    }
    .my_black{
        background:#333333
    }
    .my_gray{
        color:#D1D1D1;
    }
    nav a{
        color:#000;
    }
    a:hover{
        color:#D71618
    }
    .box .personal ul{
        position:absolute;
        top:37px;
    }
    .box .personal ul li a{
        color:#333;
    }
    .box .personal ul li a:hover{
        color:#D71618
    }
    .menu_city{
        width: 100px;
        height: 30px;
        border:1px solid red;
        border-radius: 25px;
        vertical-align: center;
        position: relative;
    }
    .my_input{
        border: 1px solid red;
        border-radius: 5px;
        width:300px;
        height: 35px;
        padding: 5px 10px;
        outline: 0;
    }
    .search{
        position: relative;
        left:-50px;
        top: -2px;
    }
    nav .Kcard{
        width: 300px;
        height:45px;
        outline: 0;
        position:absolute;
        z-index: 1;
        padding: 10px;
        padding-left: 30px;
    }
    .show_card:hover .Kcard{
        display: block;
    }
    nav .Kcard a{
        font-size:14px;
        padding:10px;
    }
    .phone_pl:hover .sj{
        display: block;
    }
    nav .sj{
        position:absolute;
        top:45px;
        left:-136px;
        z-index: 1;
        padding-top: 40px;
        padding-bottom: 30px;
    }
    nav .sj li{
        float: left;
        padding:0 70px 0 70px;
        border-right: 1px solid #d3d9df;
    }
    nav .Combo{
        position: relative;
    }
    .Combo:hover .tc{
        display: block;
    }
    nav .tc{
        position:absolute;
        top:45px;
        left:-56px;
        z-index: 1;
        padding-top: 40px;
        padding-bottom: 30px;
    }
    nav .tc li{
        float: left;
        padding:0 70px 0 70px;
        border-right: 1px solid #d3d9df;
    }
    .menu_city:hover .province{
        display: block;
    }
    nav .province{
        line-height: 30px;
        font-size: 14px;
        border: 1px solid #f0f0f0;
        width: 500px;
        padding: 10px;
        position: absolute;
        top:30px;
        z-index: 1;
    }
    nav .province li{
        float: left;
    }
    nav .province span{
        padding-right: 20px;
    }
    nav .province a{
        padding-left: 10px;
    }
    .carousel li{
        height: 10px;
        width:10px;
        float: left;
        background: rgba(255, 255, 255, .5);
        border-radius: 50%;
        margin: 10px;
    }
    .slidebar{
        position: fixed;
        top:230px;
        right: 0;
    }
    .slidebar .online{
        background: url("../img/online_u231.png");
        width: 41px;
        height: 142px;
        margin-bottom: 5px;
        display: block;
    }
    .slidebar .online:hover{
        background: url("../img/online_red_u229.png");
    }
    .slidebar .kefu{
        background: url("../img/kefu_u239.png");
        width: 41px;
        height: 142px;
        margin-bottom: 5px;
        display: block;
    }
    .slidebar .kefu:hover{
        background: url("../img/kefu_red_u233.png");
    }
    .slidebar .paper{
        background: url("../img/paper_gray_u243.png");
        width: 41px;
        height: 40px;
        display: block;
        margin-bottom: 5px;
    }
    .slidebar .paper:hover{
        background: url("../img/paper_u235.png");
    }
    .slidebar .top{
        background: url("../img/top_u241.png");
        width: 41px;
        height: 40px;
        display: block;
    }
    .slidebar .top:hover{
        background: url("../img/top_red_u237.png");
    }
    .hidden{
        display: none;
    }
    /*主体内容背景*/
    .bg_gray{
        background: #F5F5F5;
    }
    section div.box div.hide{
        width: 296px;
        height: 300px;
        display: inline-block;
        position: relative;
        overflow: hidden;
    }
    .box .hide .introduce{
        background: #FF9742;
        height: 95px;
        color:#fff;
        padding: 20px 10px;
        font-size: 12px;
        position: absolute;
    }
    .hide:hover .introduce{
        transform: translateY(-95px);
        transition: all .5s;
    }
    section div.box div.hide>div{
        width: 296px;
        height: 300px;
    }
    .title{
        color: #555555;
        font-size: 20px;
    }
    section p{
        margin-bottom: 10px;
    }
    .details{
        color:#888888;
    }
    .price{
        color:#F17515;
        font-size: 20px;
    }
    .box .floor1 h4{
        color:#679af8;
        border-bottom:1px solid #f0f0f0;
        line-height: 77px;
        font-size: 22px;
    }
    .box .floor1 h4 a{
        color:#679af8;
        position: relative;
        left:900px;
        font-size: 20px;
        vertical-align: top;
    }
    .touch{
        display:inline-block;
        overflow: hidden;
    }
    .touch .one{
        background: #9ec2fb;
        height: 95px;
        width: 297px;
        color:#fff;
        padding: 20px 10px;
        font-size: 12px;
        position: absolute;
        left: 1px;
        /*bottom: -50px;*/
    }
    .touch:hover .one{
        transform: translateY(-95px);
        transition: all .5s;
    }
    .touch:hover .cards{
        transform: translateY(-15px);
        transition: all .5s;
    }
    .box .three{
        background: #ff7d7d;
        height: 95px;
        width: 297px;
        color:#fff;
        padding: 20px 10px;
        font-size: 12px;
        position: absolute;
        left: 1px;
    }
    .touch:hover .three{
        transform: translateY(-95px);
        transition: all .5s;
    }
    .mmodule .hid{
        width: 297px;
        height: 392px;
    }
    .mmodule .hid img.cards{
        position: relative;
        top:60px;
        left: 15px;
    }
    .mmodule .hid img.outcard{
        position: relative;
        left: 40px;
    }
    .mmodule .hid label{
        font-size: 18px;
        color: #A28A3D;
        position: relative;
        left: -130px;
        top: 25px;
    }
    .mmodule .more{
        width: 295px;
        height:200px;
    }
    .mmodule .more .left{
        width: 140px;
    }
    .mmodule .more .right img{
        float: right;
        padding-bottom: 30px;
    }
    .mmodule .bottom{
        width: 295px;
        height: 200px;
        padding-top: 80px;
        padding-left: 30px;
    }
    .floor2 h4{
        color:#28d0b7;
        border-bottom:1px solid #f0f0f0;
        font-size: 22px;
    }
    .floor2 h4 ul li{
        float: left;
        position: relative;
        left:65%;
        top:-30px;
    }
    .floor2 h4 ul li a{
        font-size: 20px;
        color:#28d0b7;
    }
    .floor2 h4 ul li span{
        display: inline-block;
        height: 14px;
        border: 1px solid #28d0b7;
        margin: 0 20px;
    }
    .limit{
        width: 1200px;
        height:335px;
        overflow: hidden;
        position: relative;
    }
    .length{
        width: 5000px;
        height: 100%;
    }
    .number{
        width: 1200px;
        height:335px;
        padding-left:130px;
        list-style: none;
        float: left;
        display:inline-block;

    }
    .number li{
        float: left;
        width: 33%;
        height:20%;
    }
    .move_left{
        transform: translateX(-1000px);
    }
    .move_right{
        transform: translateX(1000px);
    }
    .limit .rightbtn{
        position: absolute;
        top:130px;
        left:1120px;
    }
    .limit .leftbtn{
        position: absolute;
        top:130px;
        left:30px;
    }
    .limit a{
        color:#333232;
        font-size: 22px;
    }
    .number li a:hover{
        font-size: 24px;
    }
    .limit a span{
        color:#ed8132;
    }
    .number li a:hover span.name{
        background: #ed8132;
        color:#fff;
    }
    .limit .name{
        border: 1px solid #ed8132;
        border-radius: 12px;
        font-size: 14px;
        margin-left: 10px;
        padding: 2px;
    }
    div.limit .middle{
        position: relative;
        left:-150px;
        top:30px;
    }
    div.limit .right{
        position: relative;
        left:-50px;
        top:30px;
    }
    .box .floor3 h4{
        color:#fc767e;
        border-bottom:1px solid #f0f0f0;
        font-size: 22px;
    }
    .box .floor3 h4 a{
        color:#fc767e;
        position: relative;
        left:900px;
        font-size: 20px;
    }
    .bmodule .hid{
        width: 297px;
        height: 392px;
        padding-top: 50px;
    }
    .bmodule .more{
        width: 295px;
        height:200px;
    }
    .bmodule .more .left{
        width: 140px;
    }
    .bmodule .more .right img{
        float: right;
        width: 75%;
        padding-top: 40px;
    }
    .bmodule .bottom{
        width: 295px;
        height: 200px;
        padding-top: 80px;
        padding-left: 30px;
    }
    .ft{
    margin-bottom: 100px;
    }
    .box.btm{
        display: flex;
        justify-content:space-around;
    }
    .box.btm div{
        float: left;
        padding-top: 50px;
    }
    .box.btm ul{
        padding-top: 20px;
        padding-left: 30px;
    }
    .box.btm a{
        font-size: 14px;
        color:#999;
    }
    .box .link{
        background: #adadad;
        height: 90px;
        width: 40px;
        border-bottom-left-radius: 5px;
        font-size: 14px;
        color: #fff;
        padding: 10px;
        line-height: 18px;
        float: left;
    }
    .box .friend a{
        float: left;
        text-decoration: none;
        color: #999;
        font-size: 14px;
        padding: 35px 38px;
    }
    .box .friend .wy{
        padding-left: 100px;
    }
    .btm a:hover{
    color:#D71618;
    }
    .friend a:hover{
        color:#D71618;
    }
</style>