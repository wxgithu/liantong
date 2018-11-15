<template>
    <div class="app-recharge">
       <!-- <header>
        <iframe src="" frameborder="0"></iframe>
        </header>-->
        <div class="container mt-4">
            <div class="row">
                <div class="col-2  leftBg p-0">
                    <ul class="list-unstyled " @click="jquery">
                        <li class="menuselected" data-target="#part1">手机/上网卡交费</li>
                        <li data-target="#part2">固话交费</li>
                        <li data-target="#part3">宽带交费</li>
                        <li data-target="#part4">查询余额</li>
                        <li data-target="#part5">购买充值卡</li>
                        <li data-target="#part6">订单查询</li>
                        <li data-target="#part7">联通商户业务</li>
                    </ul>
                </div>
                <div class="col-9 right_top">
                    <div class=" borb">
                        <ul class=" list-unstyled">
                            <li>交话费</li>
                        </ul>    
                    </div>
                    <div>
                        <div class="mt-4 " id="part1">
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">交费号码：</span><input type="text" placeholder="请输入11位号码" class="input_border font-nor" v-model="phone">
                            </div>
                           <!-- <div class="bottom_dis" @click="change">
                                <span class="right_dis font-nor">交费金额：</span><button class="right_dis btn_size font-nor bor_org">20元</button><button class="right_dis btn_size font-nor">30元</button><button class="right_dis btn_size font-nor">50元</button><button class="right_dis btn_size font-nor">100元</button><button class="right_dis btn_size font-nor">300元</button>
                            </div>-->
                            <div class="bottom_dis">
                                    <input type="text" placeholder="￥金额" class="input_border left font-nor" v-model="mon" id="bal">
                            </div>
                           <!-- <div class="bottom_dis charge">
                                    <span class="right_dis font-nor">支付金额：</span><span><b class="font_color_size pay">20.00</b>元</span>
                            </div>-->
                            <div class="bottom_dis">
                                <a href="#" class="butn" @click="submit">下一步</a>	
                            </div>
                        </div> 
                        <div class="mt-4 undisplay" id="part2">
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">交费地区：</span><input type="text" placeholder="简拼/全拼/汉字" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis"  @click="change">
                                <span class="right_dis font-nor">产品类型：</span><span class="font-nor menu-span menu-span-active">固话</span><span class="font-nor menu-span">小灵通</span>
                            </div>
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">交费号码：</span><input type="text" placeholder="如010-88888888" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis"  @click="change">
                                <span class="right_dis font-nor">交费金额：</span><button class="right_dis btn_size font-nor bor_org">20元</button><button class="right_dis btn_size font-nor">30元</button><button class="right_dis btn_size font-nor">50元</button><button class="right_dis btn_size font-nor">100元</button><button class="right_dis btn_size font-nor">300元</button>
                            </div>
                            <div class="bottom_dis">
                                    <input type="text" placeholder="￥金额" class="input_border left font-nor">
                            </div>
                            <div class="bottom_dis charge">
                                    <span class="right_dis font-nor">支付金额：</span><span><b class="font_color_size pay">20.00</b>元</span>
                            </div>
                            <div class="bottom_dis">
                                <a href="#" class="butn">下一步</a>	
                            </div>
                        </div> 
                        <div class="mt-4 undisplay" id="part3">
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">交费地区：</span><input type="text" placeholder="简拼/全拼/汉字" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis"  @click="change">
                                <span class="right_dis font-nor">产品类型：</span><span class="font-nor menu-span menu-span-active">宽带包年</span><span class="font-nor menu-span">普通交费</span>
                            </div>
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">宽带类型：</span><input type="text" placeholder="宽带账号/编码" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">交费号码：</span><input type="text" placeholder="请输入宽带账号/编码" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis"  @click="change">
                                <span class="right_dis font-nor">交费金额：</span><button class="right_dis btn_size font-nor bor_org">20元</button><button class="right_dis btn_size font-nor">30元</button><button class="right_dis btn_size font-nor">50元</button><button class="right_dis btn_size font-nor">100元</button><button class="right_dis btn_size font-nor">300元</button>
                            </div>
                            <div class="bottom_dis">
                                    <input type="text" placeholder="￥金额" class="input_border left font-nor">
                            </div>
                            <div class="bottom_dis charge">
                                    <span class="right_dis font-nor">支付金额：</span><span><b class="font_color_size pay">20.00</b>元</span>
                            </div>
                            <div class="bottom_dis">
                                <a href="#" class="butn">下一步</a>	
                            </div>
                        </div> 
                        <div class="mt-4 undisplay" id="part4">
                            <h6 class="orang bor">尊敬的用户，您好：</h6>
                            <div class="bottom_dis mt-3">
                                <span class="right_dis font-nor">待查询号码：</span><input type="text" placeholder="请输入您的手机号" class="unoutline font-nor mr-4" v-model="phone"><button class="right_dis btn_size_bigger font-nor btn_size_bigger_background text-white" @click="select">确定</button>
                            </div>
                            <div>
                                <img src="img/pay/sigh_icon.gif" alt=""><span class="font-nor">很高兴为您服务</span>
                            </div>
                        </div> 
                        <div id="part5" class="undisplay mt-3">
                            <div class="bottom_dis"  @click="change">
                                <span class="right_dis font-nor ">购卡面额：</span><button class="right_dis btn_size font-nor bor_org ">20元</button><button class="right_dis btn_size font-nor">30元</button><button class="right_dis btn_size font-nor">50元</button><button class="right_dis btn_size font-nor">100元</button>
                        </div>
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">购卡数量：</span><input type="text" placeholder="（1-3张）" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">购卡手机：</span><input type="text" placeholder="暂支持联通手机号码" class="input_border font-nor">
                            </div>
                            <div class="bottom_dis">
                                <span class="right_dis font-nor">手机验证码：</span><input type="text"  class="input_border_small font-nor "><button class=" right_dis btn_size_bigger font-nor btn_size_bigger_background text-white">获取验证码</button>
                            </div>
                            <div class="bottom_dis charge ">
                                <span class="right_dis font-nor">支付金额：</span><span><b class="font_color_size pay">20.00</b>元</span>
                            </div>
                            <p class="font-small">!发票说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 购卡业务仅支持网厅、手厅开具电子发票，请使用登录购卡用户查询并开具一卡充发票。</p>
                            <div class="bottom_dis">
                                <a href="#" class="butn">下一步</a>
                            </div>

                        </div>
                        <div id="part6" class="undisplay mt-5">
                            <select name="" id="" class="mb-4 font-nor" >
                                <option value="1" selected >今天的记录</option>
                                <option value="2" >近一个月的记录</option>
                                <option value="3" >近三个月的记录</option>
                                <option value="4" >近六个月的记录</option>
                            </select>
                            <div class="bac mb-5">
                                <span>业务类型</span><span>交费号码</span><span>交费金额</span><span>交付方式</span><span>支付金额</span><span>交费用户</span><span>状态</span><span>操作</span>
                            </div>
                        </div>
                        <div id="part7" class="undisplay">
                            <p class="font-nor">您所在的位置 : <a href="#" class="pl-3 pr-2">首页&gt;</a><a href="#" class="pr-3">缴费&gt;</a>联通商户业务</p>
                            <div class="row">
                                <div class="col-5 p-2 ml-3 mr-1">
                                    <span class=
                                    "font-nor part7_fontCol">缴费站交费</span><button class="right_dis btn_size_bigger font-nor btn_size_bigger_background text-white">点击进入</button>
                                    <p class="font-small part7_fontCol mt-1 mb-3">缴费站交费业务主要为各省的缴费站商户服务，为其提供代缴预存话费功能，缴费站商户为自己的账户充值后，通过充值专线、手机短信的方式实现为用户代交费业务。</p>
                                </div>
                                <div class="col-5 p-2 mr-3 ml-1">
                                        <span class=
                                        "font-nor part7_fontCol">大额业务</span><button class="right_dis btn_size_bigger font-nor btn_size_bigger_background text-white">点击进入</button>
                                        <p class="font-small part7_fontCol mt-1 mb-3">大额业务主要为联通公司的代缴费渠道商户服务。已开通手机代交费、手机代充值、手机充值卡充值、固话小灵通宽带代交费、固话小灵通宽带代充值、固网充值卡充值、购买充值卡等功能。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div id="ds">
                        <p class="font-small">温馨提示：</p>
                        <p class="font-small">1、使用4G号码登录给本机进行非固定面值交费，可享积分抵扣。使用积分抵扣的话费不能开具发票。</p >
                        <p class="font-small"> 2、交费发票为增值税普通发票，如您已申请开具增值税专用发票，请咨询您公司财务人员后前往北京联通增值税专用发票打印点打印交费发票，详情咨询10010！ </p>
                        <p class="font-small">  3、由于每月月底和月初两天为系统出账时间，有可能影响您交费到账，建议您尽量选择其他时段进行交费。如遇问题，请您咨询客服热线10010。</p>
                        <p class="font-small"> 4、请您在确认支付时关闭浏览器弹出窗口拦截功能，中国联通门户网站将会跳转到相应银行或支付公司的网站，中国联通门户网站没有设置要求客户输入银行卡号及密码，不会保留您的银行卡号和密码。请您在交费前确认您使用的银行卡是否开通了网上银行并具备网上支付功。</p>
                        <p class="font-small">5、网上营业厅交费充值功能适用于中国联通手机、无线上网卡、固定电话、宽带捆绑的电话、小（大）灵通。详情请咨询客服热线10010。</p>
                        <p class="font-small undisplay">6、网上营业厅交费充值功能适用于中国联通手机、无线上网卡、固定电话、宽带捆绑的电话、小灵通。详情请咨询客服热线10010。</p>
                        <p class="font-small undisplay">7、为了便于您查询交费充值订单，建议您登录后进行交费充值操作。</p>
                        <p class="font-small undisplay">8、尊敬的用户，中国联通网上营业厅暂不支持4G用户使用统一宽带编码进行宽带直充、充值业务。</p>
                        <div class="text-right" id="foot1"><span @click="bottom">展开全部</span></div>
                        <div class="text-right undisplay" id="foot2"><span @click="bottom">收起^</span></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               phone:"",
            
               mon:"",
               balance:0
            }
        },
        methods:{
            //获取话费充值
                jquery(){
                    /*点击左侧菜单，改变右侧内容*/

                    var parent=document.querySelector(".container>div:first-child>div:first-child>ul");
                    var children=parent.children;
                    for(var child of children){
                        child.onclick=function(){
                            var child=$(this);//jquery是函数库
                            child.addClass("menuselected");
                            //查找兄弟元素并且移除类
                            child.siblings(".menuselected").removeClass("menuselected")
                            //获取自定义属性data-target的属性值
                            var value=child.data("target");
                            //属性值带#号，所以可以直接查找
                            $(value).removeClass("undisplay")
                            $(value).siblings().addClass("undisplay")
                        }
                    }
                
                },
               
                change(){
                    /*点击按钮改变边框颜色*/
                    //var part1=document.querySelector("#part1")
                    var part2=document.querySelector("#part2")
                    var part3=document.querySelector("#part3")
                    var part5=document.querySelector("#part5")
                    //var btns1=part1.children[1];
                    var btns2=part2.children[3];
                    var btns3=part3.children[4];
                    var btns5=part5.children[0];
                   // btns1.onclick=
                    btns2.onclick=btns3.onclick=btns5.onclick=function(e){
                        var $this=$(e.target);
                        if($this.is("button")){
                            $this.addClass("bor_org")
                                .siblings("BUTTON").removeClass("bor_org");
                             $this.parent().siblings("div.charge").text(`支付金额：${$this.text()}`);
                            //console.log(mon);
                        
                        // console.log(this.mon)
                         
                        }
                        //part1.children[2].children[0];
                        
                       //console.log(part1.children[2].children[0]);
                       $("#bal").val("");
                      // console.log($("#bal"));
                    }

                

                    var btnpre1 = part2.children[1];
                    var btnpre2 = part3.children[1];
                    btnpre1.onclick=btnpre2.onclick=function(e){
                        var $this=$(e.target);
                        if($this.hasClass("menu-span") ){

                                $this.addClass("menu-span-active")
                                $this.siblings(".menu-span").removeClass("menu-span-active")

                        }
                    }
                },
                bottom(){
                    /*底部收起，打开温馨提示部分内容jquery*/ 
                    $("#foot1").on("click",function(){ 
                        $(this).parent().children("p:gt(5)").removeClass("undisplay")
                        $(this).addClass("undisplay")
                        $(this).siblings("div").removeClass("undisplay")
                    })
                    $("#foot2").on("click",function(){
                        $(this).parent().children("p:gt(5)").addClass("undisplay")
                        $(this).addClass("undisplay")
                        $(this).siblings("div").removeClass("undisplay")
                    })
                },
                submit(){
                    $.ajax({
                        url:"http://127.0.0.1:3000/charge?phone="+this.phone+"&mon="+this.mon,
                        success:function(res){
                            alert(res);
                        }
                    })
                },
                select(){
                    $.ajax({
                        url:"http://127.0.0.1:3000/select?phone="+this.phone,
                        success:function(res){
                            if(res[0].balance)
                                alert("您的余额为"+res[0].balance+"元");
                            else
                                alert("请检查您的号码!")
                        }
                    })
                }
               

            },
            created(){
                //this.jquery();
            }
        
    }
</script>
<style>
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    overflow:hidden;
}
header iframe{
    width:100%;
  
}
.leftBg{
    background:#ece4d8;
}
html{
    overflow:auto;
}
.leftBg>ul>li{
    text-align:center;
    height:60px;
    line-height:60px;
    border-bottom:1px solid #e2d9cd;
    font-size:16px;
    color:#636363;
    cursor:pointer;
    margin:0;
}
.menuselected{
    background:white;
}
.right_top{
    padding:0 55px;
    
}
.right_top>.borb>ul>li{
    float:right;
    margin-left:15px;
    font-size:16px;
    cursor:pointer;
}
.borb{
    border-bottom:1px solid #d6d3d3;
}
.right_top>.borb>ul>li:hover{/*没有下边框*/
    color:#ff7300;
    border-bottom:#ff7300;
}
.right_dis{
    margin-right:20px;
}
.input_border{
    width: 465px;
    height:37px;
    border:1px solid #d6d3d3;
    outline:#d6d3d3;
    padding:0 8px;
}
.input_border_small{
    width:180px;
    height:27px;
    margin-right:10px;
}
.btn_size{
    width:76.5px;
    height:35px;
    background:white;
    border:1px solid #d6d3d3;
}
.left{
    margin-left:100px;
}
.font_color_size{
    font-size:30px;
    color:red;
    font-weight:400;
    margin-right:10px;
}
.butn{
    display:block;
    margin-left:100px;
    width:130px;
    height:42px;
    background:#ff7300;
    color:white;
    text-align:center;
    line-height:42px;
    
}
.butn:hover{
    text-decoration: none;
    color:white;
}
.font-small{
    font-size:13px;
    color:#8d8888;
    margin-bottom:7px;
}
.font-nor{
    font-size:16px;
    outline:none;
    padding:3px;
}
.bottom_dis{
    margin-bottom:15px;
}
#ds>div>span{
    color:rgba(22, 67, 150, 0.788);
    margin-right:0;
    font-size:16px;
    left:650px;
    cursor:pointer;
    margin-top:10px;
}
#ds>div>span:hover{
    color:rgba(78, 108, 163, 0.788);
}
.undisplay{
    display:none;
}
#foot1 img{
    transform:rotate(180deg);
}
.menu-span{
    width:138px;
    height:34px;
    text-align:center;
    line-height:34px;
    border:1px solid #d6d3d3;
    padding:1px;
    display:inline-block;
    margin-right:20px;
}
span.menu-span:hover{
    border:3px solid rgb(196, 13, 13);
    line-height:28px;
}
.menu-span-active{
    border:3px solid rgb(196, 13, 13);
    line-height:28px;
}
.orang{
    color:#ff7744;
}
.bor{
    border-bottom:1px solid #ff7744;
    padding-bottom:3px;
}
.unoutline{
    outline:none;
}
.btn_size_bigger{
    width:115.97px;
    height:27px;
    background:white;
    border:1px solid #d6d3d3;
}
.btn_size_bigger_background{
    background:#ff7300;
}
#part4 div:last-child{
    margin-left:430px;
    margin-top:50px;
    margin-bottom:100px;
}
#part7 div.row div{
    border:1px solid gray;
}
.part7_fontCol{
    color:rgb(146, 144, 144);
}
#part1>div:nth-child(2) button:hover{
    border:1px solid #ff7300;
}
.bor_org{
    border:1px solid #ff7300;
    outline:none;
}
#part2>div:nth-child(4) button:hover{
    border:1px solid #ff7300;
}
#part3>div:nth-child(5) button:hover{
    border:1px solid #ff7300;
}
button:focus{
    outline:none;
}
.bac{
    background: #cbcbcb;
    display:flex;
    justify-content:space-between;

    padding:7px;

}
.bac>span{
    font-size:13px;
}
#part5>div:first-child button:hover{
    border:1px solid #ff7300;
}
</style>