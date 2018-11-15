<template>
     <div class="app-taocan">
          <!--引入网页头部-->
<!--<header>
    <iframe src="header.html" frameborder="0" class="my_header"></iframe>
</header>-->
<!--网页主体-->
<div id="mycontainer">
    <!--面包屑导航-->
    <div id="mylist">
        <ul class="breadcrumb bg-transparent">
            <li class="breadcrumb-item">
                <a href="#" class="myfontSize">首页 </a>
            </li>
            <li class="breadcrumb-item">
                <a href="#" class="myfontSize">套餐 </a>
            </li>
            <li class="breadcrumb-item">
                <a href="#" class="myfontSize">冰激凌套餐 </a>
            </li>
            <li class="breadcrumb-item">
              <span class="myfontSize myblack">{{taocan.title}}</span>
            </li>
        </ul>
    </div>
    <!--左：图片预览 中：产品详情  右：空白-->
    <div class="row">
        <!--左边产品预览-->
        <div class="col-4 position-relative">
             <div class="myborder">
                 <img :src="taocan.md" alt="" class="w-100">
             </div>
            <div id="mask" class="d-none"></div>
            <div id="super-mask" class=""></div>
            <div id="div-lg" class="d-none"><div class="myimgbiglg"><img :src="taocan.md" alt="" id="mylgimg"></div></div>
            <div id="mysmimg"><img :src="taocan.sm" alt=""   id="myimg"></div>
        </div>
        <!--中产品详情-->
        <div class="col-4">
            <table id="mytable">
                <tr>
                    <td><div class="mb-3 mytd1" id="myshangpindetails">商品简介：</div></td>
                    <td><div class="mb-3 mytd1">{{taocan.title}}</div></td>
                </tr>
                <tr>
                    <td><div class="mb-3 mytd2">价　　格：</div></td>
                    <td><div class="mb-3 mytdred2">¥{{taocan.price.toFixed(2)}}</div></td>
                </tr>
                <tr>
                    <td><div class="mb-3 mytd2">商品评价：</div></td>
                    <td><div class="mb-3 mytdred2">★★★★★<span class="myfontSize"><a href="#">(已经有12269人评价)</a></span></div></td>
                </tr>
                <tr>
                    <td><div class="mb-3 mytd2">号码归属：</div></td>
                    <td><div class="mb-3 mytd2"><span class="myred">北京</span> 配送范围： 北京市</div></td>
                </tr>
                <tr>
                    <td><div class="mb-3 mytd2">套餐内容：</div></td>
                    <td><div class="mb-3 mytd3">{{taocan.content}}</div></td>
                </tr>
                <tr>
                    <td><div class="mb-3 mytd2">优惠活动：</div></td>
                    <td><div class="mb-3 mytd3">{{taocan.promise}}</div></td>
                </tr>
                <tr>
                    <td><div class="mb-3 mytd2">手机号码：</div></td>
                    <td><div class="mb-3 mytd3 mytd4">选择新号码</div></td>
                </tr>
                <tr>
                    <td colspan="2"><div class="mb-3"><button class="btn btn-success mymargin">立即购买</button></div></td>
                </tr>
            </table>
        </div>
        <!--右边空白-->
        <div class="col-4">
        </div>
    </div>
    <div class="row mt-4 mb-5">
        <div class="col-3">
            <div class="myborderimg">
                <div class="mykuang">供应商信息</div>
                <img src="../img/24.gif" alt="">
                <div class="myborder3">
                    <div class="myfontSizespan"><span>供应商：</span><span class="myred2">北京联通</span></div>
                    <div class="myfontSizespan"><span>所在地：</span><span>北京</span></div>
                    <div class="myfontSizespan"><span>联系电话：</span><span class="myred2">10010</span></div>
                </div>
                <img src="../img/25.jpg" alt="">
            </div>
            <div class="myborderimg mt-3">
                <div class="mykuang">热销商品</div>
                <img src="../img/18.png" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">【两年以上老用户专享】4G全国套餐老用户免预存送费/业务</a></div>
                <div class="mt-2 myred2"><span>¥0.00</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/26.png" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">4G全国套餐老用户半价存费送费/业务</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥60.00</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/33.jpg" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">4G全国套餐 仅限新用户购买！</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥120.00</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/34.png" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">4G全国套餐老用户全价存费送费/业务</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥120.00</span></div>
            </div>
            <div class="myborderimg mt-3">
                <div class="mykuang">看了该商品的人最终购买了</div>
                <img src="../img/35.jpg" alt="" class="mt-3">
                <div><a href="#"class="myfontsize2">iPhone XS/iPhone XS Max 搭配冰激凌套餐任性用</a></div>
                <div class="mt-3 myred2"><span>¥8699</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/37.jpg" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">华为（HUAWEI）P20(128G版) 4G全国套餐合约机</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥3899</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/36.jpg" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">华为（HUAWEI）P20(64G版) 4G全国套餐合约机</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥3399</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/38.jpg" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">华为（HUAWEI）P20 Pro (64G版) 4G全国套餐合约机</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥4499</span></div>
            </div>
            <div class="myborderimg2">
                <img src="../img/39.jpg" alt="" class="mt-2">
                <div><a href="#"class="myfontsize2">华为（HUAWEI）P20 Pro (128G版) 4G全国套餐合约机</a></div>
                <div class="mt-2 myred2 mb-2"><span class="">¥4999</span></div>
            </div>
            <div class="myborderimg5 mt-3">
                <div class="mykuang">浏览历史</div>
                <div class="row">
                    <div class="col-3"><img src="img/40.jpg" alt="" class="mt-3"></div>
                    <div class="col-9">
                        <div class="mt-2"><a href="#"class="myfontsize2">iPhone XS/iPhone XS Max 搭配冰激凌</a></div>
                        <div class="myred2"><span>¥8699</span></div>
                    </div>
                </div>
            </div>
            <div class="myborderimg2 myborderimg3">
                <div class="row">
                    <div class="col-3"><img src="../img/30.jpg" alt="" class="mt-3 pl-1"></div>
                    <div class="col-9">
                        <div class="mt-2"><a href="#"class="myfontsize2">苹果 iPhone8 / iPhone8 Plus 冰激</a></div>
                        <div class="myred2"><span>¥4999</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-9">
            <div class="mb-2" id="myfixed">
                <button class="btn btn-secondary  btn-success" data-toggle="tab" data-target="#content1">商品信息</button>
                <button class="btn btn-secondary" data-toggle="tab" data-target="#content2">商品评价(12269)</button>
                <button class="btn btn-secondary" data-toggle="tab" data-target="#content3">支付/办理方式</button>
            </div>
            <div>
                <div id="content1" class="">
                    <div><img src="../img/41.png" alt=""></div>
                    <div><img src="../img/42.png" alt=""></div>
                    <div><img src="../img/43.png" alt=""></div>
                    <div><img src="../img/44.png" alt=""></div>
                    <div><img src="../img/45.jpg" alt=""></div>
                    <div><img src="../img/47.png" alt=""></div>
                    <div><img src="../img/46.png" alt=""></div>
                </div>
                <div id="content2" class="mypinjia d-none ">
                    <div class="row">
                        <div class="col-4">
                            <div class="myfontsize3">商品满意度评分：</div>
                            <div class="mytd2 ml-2">好评率: <span class="mydbig">100%</span></div>
                        </div>
                        <div class="col-5">
                            <div class="row">
                                <div class="col-4">
                                    <div class="mytd2 mt-5 mb-3">好评(100%)</div>
                                    <div class="mytd2 mb-3">中评(0%)</div>
                                    <div class="mytd2 mb-3">差评(0%)</div>
                                </div>
                                <div class="col-8">
                                    <div class="mygroundcolor mt-5 mb-4 "></div>
                                    <div class="mygroundcolor mb-4 mycolor1"></div>
                                    <div class="mygroundcolor mb-4 mycolor1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="mytd2 mt-2">共12269位顾客参与评分</div>
                            <div class="mytd2 mt-5">您可对已购商品进行评价</div>
                            <div class="text-center mt-2"><button class="btn btn-success">我要评价</button></div>
                        </div>
                    </div>
                    <div class="mycolor2 mt-3" id="pingjia">
                        <ul class="list-unstyled d-flex justify-content-start">
                            <li class="mr-3 ml-3 font-weight-bold" data-toggle="college" data-haha="#pingjia1">全部评价(12269)</li>
                            <li class="mr-3" data-toggle="college" data-haha="#pingjia2">好评(12245)</li>
                            <li class="mr-3" data-toggle="college" data-haha="#pingjia3">中评(12)</li>
                            <li class="mr-3" data-toggle="college" data-haha="#pingjia4">差评(16)</li>
                            <li class="mr-3" data-toggle="college" data-haha="#pingjia5">有追评(12)</li>
                        </ul>
                    </div>
                    <div class="myshaow1 mt-2">
                        <div>
                            <div class="qbpj" id="pingjia1">
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                                <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                                <div class="mb-2 myfontSize">系统自动好评</div>
                                                <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                                <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                                <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr class="mb-2">
                                </div>
                            </div>
                            <div class="haoping d-none" id="pingjia2">
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr class="mb-2">
                                </div>
                            </div>
                            <div class="zhongping d-none" id="pingjia3">
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★☆☆☆</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★☆☆☆</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr class="mb-2">
                                </div>
                            </div>
                            <div class="chaping d-none" id="pingjia4">
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">☆☆☆☆☆</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">☆☆☆☆☆</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr class="mb-2">
                                </div>
                            </div>
                            <div class="zuiping d-none" id="pingjia5">
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mb-2 mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-1 mysize1">*名</div>
                                        <div class="col-10">
                                            <div class="mb-2 mt-2 mycolor3">★★★★★</div>
                                            <div class="mb-2 myfontSize">系统自动好评</div>
                                            <div class="mb-2 mycolor4">今天 01:44:21 <span class="mycolor5">来自：江苏 苏州</span></div>
                                            <div class="mycolor4">所选套餐:冰激凌（大冰神）    优惠活动:null  </div>
                                            <div class="mymargin2"><span><img src="../img/48.png" alt=""><a href="#"> 有用(0)</a></span></div>
                                        </div>
                                    </div>
                                    <hr class="mb-2">
                                </div>
                            </div>
                        </div>
                        <div class="my_gray mt-0 mr-2">
                            <ul class="pagination justify-content-end mb-2 pb-2">
                                <li class="page-item disabled">
                                    <a href="#" class="page-link">上一页</a>
                                </li>
                                <li class="page-item active">
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link bg-transparent">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link bg-transparent">3</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link bg-transparent">4</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link bg-transparent">5</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link bg-transparent">下一页</a>
                                </li>
                                <li class="mt-1">&nbsp;&nbsp;共1246页&nbsp;跳转至&nbsp;&nbsp;<input type="text" style="width:40px;height:25px;">&nbsp;页&nbsp;</li>
                                <li class="mt-1"><button>跳转</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="content3"  class="d-none">
                    <img src="../img/49.png" alt="">
                    <img src="../img/50.png" alt="">
                    <img src="../img/51.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="customer">
        <a href="#" class="onlineShopping">在线导购</a>
    </div>
    <div id="toTop">
        <a href="#">返回顶部</a>
    </div>
</div>
<!--引入网页底部-->
<!--<footer>
    <iframe src="footer.html" frameborder="0" class="my_footer"></iframe>
</footer>-->

     </div>
</template>
<script>
   export default {
       data(){
           return {
            taocan:{price:0},
             id:""
           }
       },
       methods:{
          taocandetail(){
                var url="http://127.0.0.1:3000/taocanDetail/taocandetail?id="+this.id;
                this.$http.get(url).then(result=>{
                this.taocan=result.body;
                console.log(result.body);
             })
          },

          jquery(){
              $("#myfixed").on("click","[data-toggle=tab]",function(){
                    var $tar=$(this);
                    $tar.addClass("btn-success")
                        .siblings().removeClass("btn-success");
                    var id=$tar.attr("data-target");
                    $(id).removeClass("d-none")
                        .siblings().addClass("d-none");

                })

            $("#pingjia").on("click","[data-toggle=college]",function(){
                var $ping=$(this);
                $ping.addClass("font-weight-bold")
                    .siblings().removeClass("font-weight-bold");
                var id=$ping.attr("data-haha");
                $(id).removeClass("d-none")
                    .siblings().addClass("d-none");
            })

            $("#super-mask").mouseenter(function(){
                $("#mytable").addClass("d-none")
            })
            $("#super-mask").mouseleave(function(){
                $("#mytable").removeClass("d-none")
            })


            var $mImg=$("#mysmimg"),$lgDiv=$("#div-lg"),$mask=$("#mask"),$smask=$("#super-mask"),$mylgimg=$("#mylgimg");
            var MSIZE=116,
                MAX=306-MSIZE;
            $smask.hover(
                function(){
                    $mask.toggleClass("d-none");
                    $lgDiv.toggleClass("d-none");
                }
            )
            .mousemove(function(e){
                    var left=e.offsetX-MSIZE/2;
                    var top=e.offsetY-MSIZE/2;
                    if(left<0)  left=12;
                    else if(left>MAX) left=MAX;
                    if(top<0) top=0;
                    else if(top>MAX) top=MAX;
                    $mask.css({left,top});
                    $mylgimg.css({
                    left:`-${2*left}px`,
                    top:`-${2*top}px`
                    })
                })


            window.onscroll=function(){
                var toTop = $("#toTop");
                var myfixed = $("#myfixed");
                var scrollTop=
                    document.documentElement.scrollTop;
                if(scrollTop>=100)
                    toTop.css("display","block");
                else
                    toTop.css("display","none");
                if(scrollTop>=500){
                    myfixed.css("position","fixed");
                    myfixed.css("top","0");
                    myfixed.css("left","710px");
                    
                }else{
                    myfixed.css("position","");
                    myfixed.css("top","");
                    myfixed.css("left","");
                }
            }
          }
       },
       mounted(){
          this.id = this.$route.query.id;
          this.jquery();
          this.taocandetail();
       }
   }
</script>
<style>
#myshangpindetails{
    font-size:15px;
}
table>tr>td{
    width:100px;
}
#mycontainer{
    width:1000px;
    height:5000px;
    margin:0 auto;
}
.myfontSize{
    font-size:13px;
}
.myblack {
    color: black;
}
#mylist>ul>li>a:hover{
    color:red;
}
.myborder{
    border:1px solid #f7f7;
    box-shadow:0 0 5px #aaa;
}
#myimg{
    width:55px;
    margin-left: 20px;
    margin-top:15px;
}
.mytd1{
    line-height: 24px;
    font-size: 14px;
    color: #333;
    font-weight: bold;
}
.mytd2{
    color: #666666;
    font-size: 14px;
}
.mytdred2{
    color: #f60;
    font-size: 26px;
    font-weight: bold;
    line-height: 24px;
}
.myred{
    color:red;
}
.mytd3{
    width: 155px;
    height: 30px;
    line-height: 30px;
    text-align:center;
    font-size:13px;
    border: 2px solid #3399cc;
    color: #333;
}
.mytd3:hover{
    cursor: pointer ;
}
.mytd4{
    border: 1px solid #f7f7;
}
.mymargin{
    margin-left:70px;
}
.mykuang{
    font-size:14px;
    border:1px solid #f7f7;
    width: 190px;
    height: 33px;
    padding-left: 13px;
    line-height: 33px;
    font-weight: 600;
    background:#EFEFEF;
    text-align: left;
}
.myborderimg{
    border:1px solid #f7f7;
    width: 192px;
    height: 260px;
    text-align: center;
    box-shadow:0 0 5px #aaa;
}
.myfontSizespan{
    font-size:13px;
    text-align:left;
    margin-top:5px;
    padding-left:5px;
    color: #666666;
}
.myborder3{
    border:1px solid #f7f7;
    border-left:0;
    border-right:0;
    margin-top:10px;
    height:100px;
}
.myred2{
    color: #f60;
}
.myfontsize2{
    font-size: 15px;
    color:black;
}
.myfontsize2:hover{
    color:red;
}
.myborderimg2{
    border:1px solid #f7f7;
    border-left:0;
    border-right:0;
    text-align: center;
    width: 192px;
    box-shadow:0 0 5px #aaa;
}
.myborderimg5{
    border:1px solid #f7f7;
    width: 192px;
    height: 125px;
    text-align: left;
    box-shadow:0 0 5px #aaa;
}
.myborderimg3{
    text-align: left;
    height:100px;
}
#customer {
    position: fixed;
    top: 85px;
    right: 5%;
}
#customer>a{
    background:gray;
    display: block;
    font-size: 20px;
    height: 130px;
    width: 35px;
    text-align: center;
    color:white;
    text-decoration: none;
    opacity: 0.4;
}
#customer>a:hover{
    background:orange;
    opacity: 1;
}
#toTop{
    position:fixed;
    bottom:100px;
    right:10%;
    display:none;
}
#toTop>a{
    background:red;
    display: block;
    font-size: 25px;
    height: 150px;
    width: 40px;
    text-align: center;
    color:white;
    text-decoration: none;
    opacity: 0.4;
}
#toTop>a:hover{
    background:orange;
    opacity: 1;
}
.mypinjia{
    border:1px solid #f7f7;
    box-shadow:0 0 5px #aaa;
    width:790px;
    height:170px;
}
.myfontsize3{
    color:black;
    font-size:14px;
    margin-left: 10px;
    margin-top:10px;
    font-weight: 600;
    height:50px;
}
.mydbig{
    color:orange;
    font-size:70px;
}
.mygroundcolor{
    width:200px;
    height:14px;
    background:orange;
}
.mycolor1{
    background: #E7E7E7;
}
.mycolor2{
    background:#F3F3F3;
    height:30px;
    line-height: 30px;
}
.myshaow1{
    border:1px solid #f7f7;
    box-shadow:0 0 5px #aaa;
    height:1980px;
}
.mysize1{
    margin-left:20px;
    padding-top:20px;
    color:blue;
    font-size:14px;
}
.mycolor3{
    color:orange;
    font-size:25px;
    font-weight: bold;
}
.mycolor4{
   color:#999999;
    font-size:14px;
}
.mycolor5{
    color:orange;
}
.mymargin2{
    margin-left: 570px;
}
#mask{
    width:140px; height:125px;
    background-color:#ffa;
    opacity:.5;
    position: absolute;
    top:0;
    left:17px;
}
#super-mask{
    width:312px; height:312px;
    position: absolute;
    left:14px;
    top:0;
}
#div-lg{
    width:380px; height:380px;
    position: absolute;
    left:328px;
    top:0;
    border: 1px solid rgba(0, 0, 0, 0.125);
    overflow:hidden;
}
#mylgimg{
    width:622px;
    position: absolute;
    top:0;
    left:0;
}
.myimgbiglg{
    width:380px; height:380px;
    position: relative;
    overflow:hidden;
}

.displaynone{
    display:none;
}
#content2 li:hover{
    cursor: pointer;
}
</style>