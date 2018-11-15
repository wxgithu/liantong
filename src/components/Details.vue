<template>
    <div class=".body">
     <div class="main">
        <!--导航栏-->
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">首页</a></li>
            <li class="breadcrumb-item"><a href="#">手机</a></li>
            <li class="breadcrumb-item">华为</li>
        </ol>
        <!--商品详情部分-->
        <div >
            <!--放大镜-->
            <div class="left mt-1">
                <div class="fdj">
                    <div class="pd_md" :style="md_bg">
                        <div class="mask" :class="mask_hide" :style="maskStyleObj" ></div>
                    </div>
                    <div class="lgmask" :style="lgmaskStyle" :class="mask_hide"></div>
                    <div class="supermask" @mouseover="display(true)" @mouseout="display(false)" @mousemove="move($event)"></div>
                </div>
                <div >
                    <ul class="sm_imgList">
                        <li v-for="(item,i) in imglist" @mouseover="changeMdpic(i)" :key="i">
                            <img class="pd_sm" :src="item.sm_pic" alt="">
                        </li>
                    </ul>
                    
                </div>
            </div>
            <!--商品详情-->
            <div class="right">
                <div class="ml-5">
                    <div>
                        <h6 class="font-weight-bold">{{namelist.pname}}</h6>
                        <div>
                            <div class="d-inline-block mt-3" >价　　格：</div>
                            <h3 class="d-inline-block font-weight-bold my_orange">￥{{namelist.price}}</h3>
                        </div>
                        <div>
                            <div class="d-inline-block mt-3">库　　存：</div>
                            <span class="my_orange">{{namelist.inventory}}</span>
                        </div>
                        <div>
                            <div class="d-inline-block mt-4">商品评价：</div>
                            <div class="d-inline-block star"></div>
                            <a href="#">(已有0人评价)</a>
                        </div>

                        <div class="border-bottom mt-3"></div>
                    </div>

                    <div class="spxz"><!--商品选择-->
                        <div class="city1">
                            <div class="mt-3 d-inline-block">号码归属：</div>
                            <div class="d-inline-block" id="city">
                                <span class="my_orange" id="cityName">请选择</span>
                                <div class="d-inline-block change-city" >[ 切换属地▼ ]</div>
                            </div>
                            <br>
                            <div class="select_city ">
                                <div>
                                    <div>
                                        <span class="">请选择城市</span>
                                        <div class="close-city"></div>
                                    </div>
                                    <div>
                                        <ul class="cityList">
                                            <li v-for="(item,i) in citylist" :key="i">{{item.area}}</li>
                                            
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div class="d-inline-block mt-3">版　　本：</div>
                            <button class="active">LIANGJI</button>
                        </div>
                        <div>
                            <div class="d-inline-block mt-3">颜　　色：</div>
                            <button class="active">金</button>
                        </div>
                        <div>
                            <div class="d-inline-block mt-3">机身内存：</div>
                            <button class="active">16G</button>
                        </div>
                        <div id="tcxz">
                            <div class="d-inline-block mt-3">套餐选择：</div>
                            <button  class="active longbtn">裸机+号卡</button>
                            <button  class="longbtn">裸机</button>
                        </div>
                        <div class="border-bottom mt-3"></div>
                    </div>

                    <div class="tcxz"><!--套餐选择-->
                        <div>
                            <div class="d-inline-block mt-3">套餐档位：</div>
                            <button  class="active longbtn">超霸卡</button>
                            <div class="mt-2 ml-2 text-muted">
                                <img src="../img/details/heyue.png" alt="">
                                <span>月租15元，套内：100分钟国内语音，1G全国流量，国内接听免费，赠送来电显示、炫铃；</span>
                            </div>
                        </div>
                        <div>
                            <div class="d-inline-block mt-3">优惠活动：</div>
                            <button  class="active longbtn">超霸卡</button>
                            <div class="mt-2 ml-2 text-muted">
                                <img src="../img/details/heyue.png" alt="">
                                <span >月租15元，套内：100分钟国内语音，1G全国流量，国内接听免费，赠送来电显示、炫铃；</span>
                            </div>
                        </div>
                        <div class="position-relative">
                            <div class="d-inline-block mt-3">手机号码：</div>
                            <button  class="longbtn bg-white">选新号码</button>
                            <div class="sm_jt"></div><!--按钮上的小箭头-->
                        </div>
                    </div>
                </div>
                <div class="buy_btn"></div>

            </div>
        </div>
        <!--供应商信息-->
        <div class="gys mt-5 ">
            <div>供应商信息</div>
            <div><img src="../img/details/service.gif" alt=""></div>
            <div>
                <div class="d-inline-block">供应商：</div>
                <div class="d-inline-block my_orange ml-2">北京联通</div>
            </div>
            <div>
                <div class="d-inline-block">所在地：</div>
                <div class="d-inline-block ml-2">北京</div>
            </div>
            <div>
                <div class="d-inline-block">联系电话：</div>
                <div class="d-inline-block ml-2"></div>
            </div>
            <div><img src="../img/details/onlineShopping.jpg" alt=""></div>
        </div>
        <!--产品介绍-->
        <div class="cpjs">
            <ul id="nav">
                <li  id="spxx" class="active"><h6>商品信息</h6></li>
                <li id="sjcs"><h6>手机参数</h6></li>
                <li id="sppj"><h6>商品评价(0)</h6></li>
                <li  id="pay"><h6>支付/办理方式</h6></li>
            </ul>
            <div class="clearfix "></div>
            <div class="spxx d-block" ><!--商品信息-->
                <ul>
                    <li>
                        <i class="icon1"></i>
                        <div>
                            <div>单卡/双卡双待</div>
                            <span>{{Infolist.card_double}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon2"></i>
                        <div>
                            <div>屏幕尺寸</div>
                            <span>{{Infolist.size}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon3"></i>
                        <div>
                            <div>CPU</div>
                            <span>{{Infolist.cpu}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon4"></i>
                        <div>
                            <div>摄像头</div>
                            <span>{{Infolist.camera}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon5"></i>
                        <div>
                            <div>SIM卡类型</div>
                            <span>{{Infolist.sim}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon6"></i>
                        <div>
                            <div>操作系统</div>
                            <span>{{Infolist.system}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon7"></i>
                        <div>
                            <div>分辨率</div>
                            <span>{{Infolist.resolution}}</span>
                        </div>
                    </li>
                    <li>
                        <i class="icon8"></i>
                        <div>
                            <div>机身内存ROM</div>
                            <span>{{Infolist.rom}}</span>
                        </div>
                    </li>
                </ul>
                <div class="ml-3">
                    <img src="../img/details/lgpic.jpg" alt="">
                </div>
            </div>
            <div class="sjcs "><!--手机参数-->
                <div class="my_card">
                    <div class="my_card_header">主体：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>品牌：</b>
                                <span class="ml-1">华为</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>型号：</b>
                                <span class="ml-1">畅享7(2+16G)</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>颜色：</b>
                                <span class="ml-1">金</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>是否智能系统：</b>
                                <span class="ml-1">是</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>操作系统：</b>
                                <span class="ml-1">华为EMUI</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>SIM卡尺寸：</b>
                                <span class="ml-1">nano卡</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>尺寸：</b>
                                <span class="ml-1"> 143.5×71×8.05mm</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>重量：</b>
                                <span class="ml-1"> 约145g（含电池）</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>CPU：</b>
                                <span class="ml-1"> 高通MSM8917，4*Cortex A53 </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">网络：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>网络频率：</b>
                                <span class="ml-1">TD-LTE：B38/B39/ B40/ B41LTE FDD: B1/ B3/B5TD-SCDMA：B34/ B39CDMA：BC0WCDMA：B1/B8GSM：B2/ B3/ B5/ B8</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>数据传输：</b>
                                <span class="ml-1"> WLAN: 802.11 b/g/n，2.4GHz；USB: USB 2.0；蓝牙：V4.1</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>浏览器：</b>
                                <span class="ml-1">华为 EMUI5.1 浏览器</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>双卡机类型：</b>
                                <span class="ml-1">双卡双待</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>4G：</b>
                                <span class="ml-1">支持</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">储存：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>机身内存ROM：</b>
                                <span class="ml-1">16GB</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>运行内存RAM：</b>
                                <span class="ml-1">2GB</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>最大扩展内存：</b>
                                <span class="ml-1">128G</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">显示：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>屏幕尺寸：</b>
                                <span class="ml-1">5.0英寸</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>是否宽屏：</b>
                                <span class="ml-1">普屏</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>屏幕类型：</b>
                                <span class="ml-1">IPS</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>分辨率：</b>
                                <span class="ml-1">HD/1280x720</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>触摸屏：</b>
                                <span class="ml-1">触摸屏</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>颜色：</b>
                                <span class="ml-1"> 1600万色</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">娱乐功能：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>音乐格式：</b>
                                <span class="ml-1">*.mp3、*.mid、*.amr、*.awb</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>视频格式：</b>
                                <span class="ml-1">*.3gp、*.mp4、*.webm、*</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>JAVA：</b>
                                <span class="ml-1">支持</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>收音机：</b>
                                <span class="ml-1">支持</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>录音：</b>
                                <span class="ml-1">支持</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>彩信功能：</b>
                                <span class="ml-1">支持</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>Office功能：</b>
                                <span class="ml-1">支持</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">摄像功能：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>主摄像头像素：</b>
                                <span class="ml-1">1300万像素</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>副摄像头像素：</b>
                                <span class="ml-1">500万像素</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>视频拍摄：</b>
                                <span class="ml-1">支持</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>摄像头传感器：</b>
                                <span class="ml-1">CMOS</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>摄像头变焦模式：</b>
                                <span class="ml-1">数字变焦</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">传输功能：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>GPS：</b>
                                <span class="ml-1">支持</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>蓝牙：</b>
                                <span class="ml-1">支持</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">电池信息：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>类型：</b>
                                <span class="ml-1"> 锂聚合物电池</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>标配容量：</b>
                                <span class="ml-1">3020mAh(典型值)</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>理论通话时间：</b>
                                <span class="ml-1">理论通话时间：GSM: 27小时，WCDMA: 25小时，CDMA: 23 小时。</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>理论待机时间：</b>
                                <span class="ml-1">待机上限时间：GSM: 638小时，WCDMA: 689 小时，TD-LTE: 695小时，LTE FDD: 613 小时。</span>
                            </li>
                            <li>
                                <img src="../img/details/li_list.png" alt="">
                                <b>超长待机：</b>
                                <span class="ml-1">-</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="my_card">
                    <div class="my_card_header">相关配件：</div>
                    <div class="my_card_body">
                        <ul class="list-unstyled">
                            <li>
                                <img src="../img/details/li_list.png" alt="">

                                <span class="ml-1">手机（带电池）x1，充电器x1，USB 线x1，快速指南x1，售后服务手册x1，取卡针x1，TP保护膜（出厂已贴）x1</span>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
            <div class="sppj "><!--商品评价-->
                <div class="p-3">
                    <div >
                        <b>商品满意度评分：</b>
                        <span class="float-right">共0名顾客参与评分</span>
                    </div>
                    <div class="d-inline-block">
                        <span class="text-muted">好评率:</span>
                        <span class="my_orange">100%</span>
                    </div>
                    <div class="d-inline-block ml-4 pingjia">
                        <div class="mt-4">
                            <span class="text-muted">好评(100%)</span>
                            <div class="d-inline-block good"></div>
                        </div>
                        <div class="mt-2">
                            <span class="text-muted">中评(0%)</span>
                            <div class="d-inline-block average"></div>
                        </div>
                        <div class="mt-2">
                            <span class="text-muted">差评(0%)</span>
                            <div class="d-inline-block poor"></div>
                        </div>
                    </div>
                    <div class="d-inline-block ml-4">
                        <div>您可对已购商品进行评价</div>
                        <div class="say">我要评价</div>
                    </div>
                </div>
                <div class="evaluate mt-2">
                    <ul class="list-unstyled">
                        <li class="onshow">全部评价(0)</li>
                        <li>好评(0)</li>
                        <li>中评(0)</li>
                        <li>差评(0)</li>
                        <li>有追评(0)</li>
                    </ul>
                </div>
                <div class="mt-2"><!--评论框-->
                    <div class="plk ">对不起,暂无评价</div>
                </div>
            </div>
            <div class="pay "><!--支付-->
                <h6 class="font-weight-bold mt-3">一、在线支付方式介绍</h6>
                <div>
                    <b>1、快捷支付</b><span class="text-danger ml-1">new</span>
                </div>
                <p>联通支付宝快捷支付是一种安全、快捷的付款方式，只需关联您的信用卡，无需网银，付款时输入支付宝支付密码即可完成付款。目前支持中国工商银行、中国农业银行、招商银行等28家主要银行的信用卡。</p>
                <div>
                    <img src="../img/details/Dz9cUh4tEYtws.png" alt="">
                </div>

                <div>
                    <b>2、网上银行支付</b>
                </div>
                <p>目前可支持中国工商银行、中国农业银行、招商银行等25家国内主要银行的个人版网银及6家银行的企业版网银支付。支持的银行列表如下：</p>
                <div>
                    <img src="../img/details/DjKaWTw74ssw3.png" alt="">
                </div>

                <div>
                    <b>3、信用卡无密码支付</b>
                </div>
                <p>信用卡无密码支付是一种便捷、安全的支付方式，您不需要输入信用卡密码，只需要信用卡卡号、身份证号、CVV2验证码等信息即可完成支付，为了保障支付的安全性，您所使用的信用卡的卡主信息需要与所交费充值的号码的机主信息保持一致。目前信用卡无密码支付仅支持交费和直冲业务。</p>
                <p>目前支持中国建设银行、招商银行、中信银行、中国工商银行的信用卡无密码支付。支持的银行列表如下：</p>
                <div>
                    <img src="../img/details/DEMcqp67irTfp.jpg" alt="">
                </div>

                <div>
                    <b>4、余额支付</b>
                </div>
                <p>目前支持支付宝账户、财付通账户、易宝账户、IPS（环讯）账户余额支付。</p>
                <div>
                    <img src="../img/details/DDPKRYmerLO3d.jpg" alt="">
                    <img src="../img/details/DnYj3k0hE1E8G.jpg" alt="">
                    <img src="../img/details/D0H3X2dCbspHp.jpg" alt="">
                    <img src="../img/details/DcbMmtBPtVOot.jpg" alt="">
                </div>

                <div>
                    <b>5、招联金融信用付支付</b>
                </div>
                <p>“招联信用付”是联通旗下的招联消费金融有限公司推出的信用支付产品，全线上申请额度，快速安全。使用招联信用付进行支付，即可“先消费，后还款”，享受最长40天的免息支付及分期优惠，优惠期在联通购买合约机更可享24期内分期免息免手续费礼遇。</p>
                <div style="width:135px;">
                    <img src="../img/details/zhaolianxinyongfu.jpg" alt="" style="width:100%;">
                </div>

                <div>
                    <b>6、信用卡分期付款</b>
                </div>
                <p>信用卡分期付款是一种新型的灵活支付方式，您在联通网上营业厅使用信用卡进行消费时，若选择分期付款，每月只需按照分期入账金额进行还款即可。（注：因工商银行系统升级，联通网上营业厅工行分期付款业务暂停。由此带来的不便，请您谅解）。</p>
                <p>目前支持中国工商银行、中国银行、中国农业银行、中国建设银行、招商银行信用卡在线支付分期付款：</p>
                <div>
                    <img src="../img/details/gongshangyinhang.jpg" alt="">
                    <img src="../img/details/zhongguoyinhang.jpg" alt="">
                    <img src="../img/details/jiansheyinhang.png" alt="">
                    <img src="../img/details/nongyeyinhang.png" alt="">
                    <img src="../img/details/zhaoshangyinhang.png" alt="" style="width:134px;">
                </div>
                <div>
                    <b>7、其它支付方式</b>
                </div>
                <p>联通商城还支持支付宝卡通支付、财付通一点通支付。</p>
                <div>
                    <img src="../img/details/D1ZH6ULLuBNzV.jpg" alt="">
                    <img src="../img/details/DVnEsuLc7ozJa.jpg" alt="">
                </div>

                <h6 class="font-weight-bold">二、货到付款支付方式介绍</h6>
                <div>
                    <b>1、开通范围</b>
                </div>
                <p>目前已开通货到付款的城市有：北京、广州、上海、重庆、西安、新疆等。其它城市陆续开通中，敬请期待。</p>

                <div>
                    <b>2、支持的支付方式</b>
                </div>
                <p>北京支持现金支付、POS机刷卡、信用卡分期（部分银行）等。其它城市支持现金支付，详情见页面提示或咨询在线导购。温馨提示：</p>
                <p>1.如果您使用网银支付，请您在支付前确认您使用的银行卡是否开通了网上银行并具备网上支付功能。您可以点击了解各银行网上支付开通方法（http://upay.10010.com/web/BankHelp/banklist），或致电相应银行客服热线。</p>
                <p>2.如果您使用其他在线支付方式，请您在支付前确认您已具有相关账户并且账户余额充足。</p>
                <p>3.请您在确认支付时关闭浏览器弹出窗口拦截功能，我公司网上营业厅将会跳转至相应银行或支付公司的网站，请您根据网站提示完成支付。</p>
                <p>4.请您在确认支付前，认真核对商品名称和商品描述信息。</p>
                <p>5.我公司网站没有设置要求客户输入银行卡卡号及密码或其他支付方式账户信息，不会缓存您的银行卡卡号及密码或任何账户信息。</p>
                <p>6.货到付款支持的商品类型及开通时间还在不断调整，请您随时关注商品信息。</p>
                <p class="font-weight-bold">温馨提示：因业务发展较快，以下介绍内容仅供参考，详情请查看商品详情页面上的相关信息或咨询在线导购。</p>
            </div>
        </div>
        <!--在线导购-->
        <div class="zxdg">
            <img src="img/details/online-shoppingn.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>

export default{
    data:function(){
        return{
                id:"",
                imglist:[],
                namelist:'',
                Infolist:'',
                citylist:[],
                mask_hide:{hide:true},
                    maskStyleObj:{
                        top:0,left:0,
                        
                    },
                    lgmaskStyle:{
                        backgroundPositionX:0,
                        backgroundPositionY:0,
                        backgroundImage:"",
                    },
                    
                    md_bg:{
                        backgroundImage:"",
                    }
        }
    },
    
    methods:{
        jquery(){
            //产品介绍
            var $cpjs=$("div.cpjs");
            var $ul=$("#nav");
            $ul.on("click","li",function(){
                var $li=$(this);
                //console.log($li);
                $li.addClass("active")
                $li.siblings().removeClass("active")
                //console.log($li.attr("id"));
                var inclass=$li.attr("id");
                var $div=$(`div.${$li.attr("id")}`)
                $div.addClass("d-block")
                $div.siblings().removeClass("d-block")
            })

            $ul=$(".evaluate>ul");//评论
            $ul.on("click","li",function(){
                var $li=$(this);
                $li.addClass("onshow");
                $li.siblings().removeClass("onshow");
                //console.log($li.html().slice(-5,-3));
                $("div.plk").html(`对不起,暂无${$li.html().slice(-5,-3)}`);
            })

            //套餐选择
            var $tcxz=$("#tcxz")
            $tcxz.on("click","button",function(){
                var $btn=$(this);
                $btn.addClass("active");
                $btn.siblings().removeClass("active");
                if($btn.html()=="裸机"){
                    $(".tcxz").addClass("d-none");
                }else{
                    $(".tcxz").removeClass("d-none");
                }
            })

            //城市选择
            var $change=$("#city>.change-city");
            $change.on("click",function(){
                $(".select_city").addClass("d-block");
            })
            var $close=$(".close-city");
            $close.on("click",function(){
                $(".select_city").removeClass("d-block");
            })
            $(".cityList").on("click","li",function(){
                var $li=$(this);
                $("#cityName").html($li.html());
                $(".select_city").removeClass("d-block"); 
            })

            $(window).scroll(function(){
            //console.log($(window).scrollTop());  750
            if($(window).scrollTop()>750){
                $("#nav").css("position","fixed");
                $("#nav").css("top","-50px");
            }else{
                $("#nav").css("position","relative");
                $("#nav").css("top","0px");
            }
            })

        },
        move(e){
                        if(e.offsetY<58){
                            this.maskStyleObj.top=0;
                        }else if(e.offsetY>252){
                            this.maskStyleObj.top=194;
                        }else{
                            this.maskStyleObj.top=e.offsetY-58 ;
                        }
                        this.lgmaskStyle.backgroundPositionY=-(this.maskStyleObj.top*8/3)+"px";
                        this.maskStyleObj.top += "px";

                        if(e.offsetX<58){
                            this.maskStyleObj.left=0;
                        }else if(e.offsetX>252){
                            this.maskStyleObj.left=194;
                        }else{
                            this.maskStyleObj.left=e.offsetX-58;
                        }
                        this.lgmaskStyle.backgroundPositionX=-(this.maskStyleObj.left*8/3)+"px";
                        this.maskStyleObj.left += "px";
        },
        display(bool){
            this.mask_hide.hide=!bool;
        },     
        getimage(){
            this.axios.get("http://127.0.0.1:3000/detailsImg?id="+this.id).then(res=>{
                this.imglist=res.data;
                this.md_bg.backgroundImage="url("+this.imglist[0].md_pic+")";
                this.lgmaskStyle.backgroundImage="url("+this.imglist[0].lg_pic+")";
            })
        },
        changeMdpic(i){
            //console.log(i);
            this.md_bg.backgroundImage="url("+this.imglist[i].md_pic+")";
            this.lgmaskStyle.backgroundImage="url("+this.imglist[i].lg_pic+")";
        },
        getInfo(){
            this.axios.get("http://127.0.0.1:3000/detailsName?id="+this.id).then(res=>{
                
                this.namelist=res.data[0];
                //返回的是数组,存储的是对象
            })
            this.axios.get("http://127.0.0.1:3000/detailsInfo?id="+this.id).then(res=>{
                //console.log(res);
                this.Infolist=res.data[0];
            })
        },
        getCity(){
            this.axios.get("http://127.0.0.1:3000/getarea").then(res=>{
                this.citylist=res.data;
                //console.log(this.citylist);
            })
        }                               
    },
    mounted(){
        this.id = this.$route.query.id;
        this.jquery();
        this.getimage();
        this.getInfo();
        this.getCity();
    }    
}
   
</script>
<style scoped>

    .body{
        padding:0;
        margin:0;
        
    }

    button{
        cursor: pointer;

    }
    .main{
        width:1200px;
        margin:0 auto;
        font-size: 13px;
    }
    .left{
        width: 330px;
        display: inline-block;
        float:left;
    }
    .right{
        width:770px;
        display: inline-block;
    }
    .breadcrumb {
        background: white;
    }
    .breadcrumb-item + .breadcrumb-item::before {
        content: ">";
    }
    .fdj{
        position:relative;
    }
    .hide{
        display: none;
    }
    .fdj .pd_md{
        width:310px;
        height:310px;
        border:1px solid #e2e6ea;
        background-repeat:no-repeat;
    }
    .fdj .lgmask{
        width:300px;height:300px;
        border:1px solid #e2e6ea;
        
        background-repeat:no-repeat;
        background-size:800px 800px;
        overflow:hidden;
        position:absolute;
        left:310px;
        top:0;

    }
    .fdj .mask{
        width:116px;
        height:116px;
        background: lightyellow;
        opacity: 0.6;
        position: absolute;
    }
    .lgmask .pd_lg{
        position: absolute;
    }
    .supermask{
        width:312px;
        height:312px;
        position: absolute;
        top: 0;
    }

    .pd_sm {
        border:2px solid #e2e6ea;
        margin: 5px;
        padding: 3px;
    }
    .pd_sm:hover{
        border:2px solid #007bff;
    }
    .sm_imgList{
        list-style:none;
    }
    .sm_imgList>li{
        float:left;
    }
    .my_orange{
        color:#FF6600;
    }
    .star{
        width: 83px;
        height: 15px;
        margin: 8px 10px 0 0;
        background: url(../img/details/stars.png) 0 -55px no-repeat;

    }
    .active{
        border:2px solid #007bff;
        padding: 2px 4px;
        background:#f7f7f7;
    }
    .longbtn{
        width:180px;

    }
    .spxz button{
        background: white;
    }
    /*******************城市选择*******************/
    .city1 .change-city{
        cursor: pointer ;
    }

    .select_city{
        width:2000px;height:6500px;
        background: rgba(0,0,0,0.2);
        position:absolute;
        top:0;left:0;
        z-index: 100;
        border:1px solid red;
        transition: all 0.2s linear;
        display: none;
    }
    .select_city>div{
        width:230px;
        position:relative;
        left:40%;
        top:255px;
    }
    .select_city>div>div:first-child{
        width:233px;height:35px;
        background:url("../img/details/cityLayerT.png");
        color:white;
    }
    .select_city>div>div:first-child span{
        position: relative;
        top:10px;
        left:15px;
        font-weight: bold;
    }
    .select_city>div>div:first-child .close-city{
        width:15px;height:15px;
        cursor: pointer;
        position: absolute;
        top:10px;
        left:203px;
    }
    .select_city>div>div:last-child{
        width:222px;height:145px;
        background: white;
        margin-top:-20px;
        margin-left:4px;
    }
    .select_city>div>div:last-child>ul{
        list-style: none;
        margin-left: -25px;
    }
    .select_city>div>div:last-child>ul>li{
        float:left;
        margin-left: 10px;
        margin-top: 10px;
        cursor: pointer;
    }
    .select_city>div>div:last-child>ul>li:hover{
        color:#FF6600;
    }

    .sm_jt{
        width:16px;height:16px;
        background: url("../img/details/proddetlIcon.gif") -143px -76px no-repeat;
        position: absolute;
        left:230px;
        top:20px;
    }

    .buy_btn{
        width:118px;height:37px;
        cursor: pointer;
        background: url("../img/details/proddetlIcon.gif") 1px 1px no-repeat;
        margin:70px 0 0 130px ;
    }

    .gys{
        width:180px;
        border:1px solid #e2e6ea;
        border-radius: 5px;
        float:left;
    }
    .gys>div:first-child{

        width:100%;
        height:33px;
        font-weight: bold;
        padding-left:10px;
        background: #F7F7F7;
        line-height: 33px;
        border:1px solid #f7f7f7;
    }
    .gys>div:nth-child(2){
        border-bottom:1px dashed #e2e6ea;
        padding:3px;
    }

    .gys>div:nth-child(2)~div{
        margin-left: 7px;
        margin:5px;
    }
    .gys>div:nth-child(5){
        padding-bottom:17px;
        border-bottom: 1px dashed #e2e6ea;
    }

    .cpjs{
        width:795px;
        position:relative;
        left:20px;
        overflow: hidden;
    }
    .cpjs>ul{
        list-style: none;
        margin-top:15px;
        padding:0;
    }
    .cpjs>ul>li{
        float:left;
        height:32px;
        border:1px solid #e2e6ea;
        background: #f7f7f7;
        margin-top:32px;
        margin-left: 3px;
        padding-top: 4px;
        font-weight: bold;
        padding-left: 18px;
        padding-right:18px;
        cursor: pointer;
    }
    .cpjs>ul>li.active{
        border-radius: 4px;
        background:#FF6600;
        color: white;
    }
    .cpjs>div:nth-child(2){

        border-bottom:2px solid #FF6600;
        margin-top:-2px;
    }
    .spxx{
        display: none;
    }
    .spxx>ul{
        padding:10px 20px;
    }
    .spxx>ul>li{
        display: inline-block;
        font-size: 14px;
    }
    .spxx>ul>li:nth-child(even){
        margin-left: 30px;
    }
    .spxx>ul>li i{
        display: inline-block;
        width:45px;
        height:45px;

    }
    .spxx .icon1{
        background: url("../img/details/parameter.png") -8px -193px no-repeat;
    }
    .spxx .icon2{
        background: url("../img/details/parameter.png") -8px -4px no-repeat;
    }
    .spxx .icon3{
        background: url("../img/details/parameter.png") -8px -239px no-repeat;
    }
    .spxx .icon4{
        background: url("../img/details/parameter.png") -8px -50px no-repeat;
    }
    .spxx .icon5{
        background: url("../img/details/parameter.png") -8px -286px no-repeat;
    }
    .spxx .icon6{
        background: url("../img/details/parameter.png") -8px -97px no-repeat;
    }
    .spxx .icon7{
        background: url("../img/details/parameter.png") -8px -332px no-repeat;
    }
    .spxx .icon8{
        background: url("../img/details/parameter.png") -8px -144px no-repeat;
    }

    .spxx>ul>li>div{
        display: inline-block;
        width:310px;
        height:48px;
        overflow: hidden;
        border-bottom: 1px solid #FF6600;
    }
    .spxx>ul>li>div>div{
        color:#FF6600;
        margin-top: 15px;
        display:inline-block;
    }
    .spxx>ul>li div span{
        float:right;
        color:#6c757d;
        margin-top: 15px;
    }

    .sjcs{
        display: none;
    }
    .sjcs .my_card{
        width:262px;
        height:294px;
        color:#6c757d;
        background: #fbfbfb;
        margin-top: 10px;
        padding:5px;
        display: inline-block;
        vertical-align: top;
    }
    .sjcs .my_card_header{
        font-size: 23px;
        border-bottom: 1px dashed #6c757d;
    }
    .my_card_body>ul>li{
        margin-top: 5px;
    }
    .my_card_body>ul>li>b{
        font-size: 15px;

    }
    .sppj{
        display: none;
        margin-top: 15px;
        margin-bottom: 500px;
    }
    .sppj>div{
        border:1px solid #ced4da;
    }
    .sppj>div:first-child{
        background:#FAFAFA;
        width:780px;
    }
    .sppj>div:first-child>div:nth-child(2)>span:nth-child(2){
        font-size: 58px;
    }

    .sppj .good{
        width:250px;
        height:14px;
        background: #F18501;
    }
    .sppj .average{
        width:250px;
        height:14px;
        background: #E7E7E7;
    }
    .sppj .poor{
        width:250px;
        height:14px;
        background: #E7E7E7;
    }

    .sppj .pingjia{
        width:350px;
    }
    .sppj .pingjia>div>div{
        float:right;
        margin-top: 4px;
    }
    .pay{
        display:none;
    }
    .say{
        background: #F18501;
        width:82px ;
        height:23px ;
        color:white;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 10px ;
        margin-left: 30px;
    }

    .evaluate{
        width:780px;
        height:32px;
        background: #F3F3F3;
        border-bottom: 2px solid #ced4da;
    }
    .evaluate>ul>li{
        float:left;
        line-height: 32px;
        padding:0 15px;
        cursor: pointer;
    }
    .onshow{
        border-left: 1px solid #ced4da;
        border-right:1px solid #ced4da;
        border-top: 2px solid #FF6600;
        font-weight: bold;
    }

    .sppj>div:last-child{
        width:780px;
        height:120px;
        border:1px solid #ced4da;

    }

    .plk{
        width:100%;
        text-align: center;
        margin-top: 20px;
    }

    .zxdg{
        cursor: pointer;
        position:fixed;
        right:20px;
        top:100px;
    }

</style>