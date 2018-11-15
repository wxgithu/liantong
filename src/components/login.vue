<template>
	<div id="content">
		   <!--登陆页面头部-->
    <div class="login_header">
        <div class="login_right">
            <div class="service">
                <span>客户服务 <span></span></span>
                <ul>
                    <li><a href="">沃知道</a></li>
                    <li><a href="">问卷调查</a></li>
                    <li><a href="">历史投诉</a></li>
                    <li><a href="">黑卡举报</a></li>
                </ul>
            </div>
            <div class="more">
                <span>更多电子服务 <span></span></span>
                <ul>
                    <li><a href="">手机营业厅</a></li>
                    <li><a href="">短信营业厅</a></li>
                    <li><a href="">微信营业厅</a></li>
                    <li><a href="">手机商城</a></li>
                </ul>
            </div>
            <a href="" class="qiye">企业门户</a>
            <div class="downlode">
                <span></span>
                <a href="">下载APP</a>
            </div>
            <div class="weixin"></div>
            <img src="../img/login/weixinFont.png" alt="" class="ewm">
            <div class="weibo"></div>
        </div>
    </div>
    <!--logo图标-->
    <div class="header_logo">
        <a href="#"></a>
    </div>
    <!--中间的轮播图和登陆-->
    <div class="content">
        <!--轮播图-->
        <div class="carousel" id="banner">
            <img src="../img/login/carousel1.jpg" alt="" class="show">
            <img src="../img/login/carousel2.jpg" alt="">
            <img src="../img/login/11.jpg" alt="">
        </div>

        <!--登陆-->
        <div class="content_box">
            <div class="login_box" @keyup.13="signin">
                <!--第一行两种登陆方式和二维码-->
                <div class="box_top">
                    <ul>
                        <li><a href="" id="active">服务密码登陆</a></li>
                        <li><a href="">随机密码登陆</a></li>
                    </ul>
                    <a href="" title="二维码扫码登陆"><img src="../img/login/erweim.png" alt=""></a>
                </div>
                <!--第二行错误提示-->
                <div class="err" id="err">
                    <span>
                        <img src="../img/login/err.png" alt="">
                        <span>请输入手机号码、邮箱或固网号码</span>
                    </span>
                </div>
                <!--第三行输入用户名-->
                <div class="input_text">
                    <div class="left_img1"></div>
                    <input id="input_uname" type="text" placeholder="手机号码/邮箱/固话 (无区号) /宽带" title="请输入手机号码、邮箱、无区号的固网或宽带" name="phone" v-model="phone">
                </div>
                <!--第四行输入密码-->
                <div class="input_text">
                    <div class="left_img2"></div>
                    <input id="input_upwd" type="password" placeholder="登陆密码" title="请输入密码" name="upwd" v-model="upwd">
                </div>
                <!--第五行登陆按钮-->
                <div class="input_btn">
                    <input type="button" class="btn" id="btn" @click="signin">
                </div>
				<!--第六行忘记密码-->
				<div class="login_forget">
					<a href="">忘记密码？</a>
				</div>
				<!--第七行登陆方式-->
				<div class="login_style">
					<p>其他登陆方式</p>
				</div>
				<!--第八行登陆方式图标-->
				<div class="third_login">
					<a href=""></a>
					<a href=""></a>
					<a href=""></a>
					<a href=""></a>
				</div>
				<!--最后一行下载客户端-->
				<div class="login_last">
					<a href="">手机客户端支持固话宽带登录交费 | 下载客户端</a>
				</div>
				
            </div>
        </div>

    </div>


    <!--底部-->
    <div class="login_footer">
        <ul>
            <li>
                <a href="">企业法人营业执照</a><span>|</span>
                <a href="">基础电信业务经营许可证</a><span>|</span>
                <a href="">增值电信业务经营许可证</a><span>|</span>
                <a href="">网络文化经营许可证</a>
            </li>
            <li>
                <span>Copyright© 1999-2018 中国联通 版权所有</span>
                <a href="" class="cx"></a>
                <a href="" class="kx"></a>
            </li>
        </ul>
    </div>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                phone:"",
                upwd:""
            }
        },
        props:["back"],
        methods:{
            //登陆验证
            signin(){
                var phone=this.phone;
				var upwd=this.upwd;
                this.$http.get("http://127.0.0.1:3000/users/signin?phone="+phone+"&upwd="+upwd).then(result=>{
					if(result.data.ok==1){
//                     toast("登陆成功！");

                        var uid=result.data.uid;
                       
						this.$router.push("/customer/"+uid);
					}else{
						Toast({message:"用户名或密码错误！",duration: 5000});
					}
				})
            },
            jquery(){
                /*轮播图*/
                function opChange(){
                    var e_first=$("#banner img:first");
                    var e_last=$("#banner img:last");
                    e_first.animate({"filter":"Alpha(opacity=0)","opacity":"0"},function(){
                        //第一个图片透明度变为0的时候，将它移动到最后
                        e_first.insertAfter(e_last);
                        //将最后一个图片的透明度恢复
                        e_last.animate({"filter":"Alpha(opacity=100)","opacity":"1"});
                    });
                }
                $(document).ready(function(){
                    //每隔3秒执行一次图片切换函数
                    window.setInterval(opChange,5000);
                })

                /*登陆提示*/
                var err=document.getElementById("err");
                var span=err.firstElementChild;
                var uname=document.getElementById("input_uname");
                var upwd=document.getElementById("input_upwd");
                //err.style.opacity="0";
                //手机号码验证
                uname.onfocus=function(){
                    uname.placeholder="";
                    var regstr=/^\d{11}$/;
                    if(uname.value==""){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="请输入手机号码、邮箱或固网号码";  
                    }
                    else if(!regstr.test(uname.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="手机号码格式错误";
                    }
                    else if(regstr.test(uname.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="手机号码格式正确，请继续输入密码";
                    }
                    else
                    err.style.opacity="0";	
                }
                uname.onblur=function(){
                    uname.placeholder="手机号码/邮箱/固话 (无区号) /宽带";
                    var regstr=/^\d{11}$/;
                    if(uname.value==""){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="请输入手机号码、邮箱或固网号码";
                    }
                    else if(!regstr.test(uname.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="手机号码格式错误";
                    }
                    else if(regstr.test(uname.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="手机号码格式正确，请继续输入密码";
                    }
                    else
                    err.style.opacity="0";
                }
                //密码验证
                upwd.onfocus=function(){
                    upwd.placeholder="";
                    var regstr=/^\d{6}$/;
                    err.firstElementChild.children[1].innerHTML="请输入服务密码";
                    if(upwd.value=="")
                        err.style.opacity="1";
                    else if(!regstr.test(upwd.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="密码格式错误";
                    }
                    else if(regstr.test(upwd.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="密码格式正确，请登陆";
                    }
                    else
                        err.style.opacity="0";
                }
                upwd.onblur=function(){
                    upwd.placeholder="登陆密码";
                    var regstr=/^\d{6}$/;
                    err.firstElementChild.children[1].innerHTML="请输入服务密码";
                    if(upwd.value=="")
                        err.style.opacity="1";
                    else if(!regstr.test(upwd.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="密码格式错误";
                    }
                    else if(regstr.test(upwd.value)){
                        err.style.opacity="1";
                        err.firstElementChild.children[1].innerHTML="密码格式正确，请登陆";
                    }
                    else
                        err.style.opacity="0";
                }
            }
        },
         mounted(){
            this.jquery();    
        }    
    }
      
        
</script>
<style scoped>
	*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
/*头部*/
.login_header{
    height:40px;
    background: #333333;
}
.login_header>.login_right{
    width: 768px;
    height: 40px;
    float: right;
    color: white;
    font-size: 12px;
    position: relative;
}
.login_header>.login_right>.service{
    cursor: pointer;
    width: 95px;
    height: 40px;
    border-right: 1px solid #333333;
    border-left: 1px solid #333333;
    overflow: hidden;
    float: left;
    position: relative;
    z-index: 1001;
    line-height:15px;
}
.login_header>.login_right>.service:hover{
    width: 95px;
    height: 150px;
    background: white;
    border: 1px solid #e1e1e1;
    color: #333333;
}
.login_header>.login_right>.service>span{
    display: block;
    width:60px;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
}
.login_header>.login_right>.service>span>span{
    float: right;
    width: 7.09px;
    height: 16px;
    background: url("../img/login/iconNew.png") -381px -23px no-repeat;
    margin-top: 13px;
}
.login_header>.login_right>.service>ul>li{
    text-align: center;
    padding: 5px 0;
}
.login_header>.login_right>.service>ul>li>a{
    color: #333333;
}
.login_header>.login_right>.service>ul>li>a:hover{
    text-decoration:underline;
}

.login_header>.login_right>.more{
    float: left;
    margin-left: 15px;
    width: 105px;
    height: 40px;
    border-right: 1px solid #333333;
    border-left: 1px solid #333333;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index: 1001;
    line-height:15px;
}
.login_header>.login_right>.more:hover{
    width: 105px;
    height: 150px;
    background: white;
    border: 1px solid #e1e1e1;
    color: #333333;
}
.login_header>.login_right>.more>span{
    display: block;
    width:80px;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
}
.login_header>.login_right>.more>span>span{
    float: right;
    width: 7.09px;
    height: 16px;
    background: url("../img/login/iconNew.png") -381px -23px no-repeat;
    margin-top: 13px;
}
.login_header>.login_right>.more>ul>li{
    text-align: center;
    padding: 5px 0;
}
.login_header>.login_right>.more>ul>li>a{
    color: #333333;
}
.login_header>.login_right>.more>ul>li>a:hover{
    text-decoration:underline;
}
.login_header>.login_right>a.qiye{
    color: white;
    float: left;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
}
.login_header>.login_right>a.qiye:hover{
    text-decoration: underline;
}
.login_header>.login_right>.downlode{
    float: left;
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
}
.login_header>.login_right>.downlode>span{
    float: left;
    width: 20px;
    height: 15px;
    background: url("../img/login/iconHeaderLogo.png") -11px -3px no-repeat;
    margin-top: 12px;
    margin-right: 2px;
}
.login_header>.login_right>.downlode>a{
    color: white;
}
.login_header>.login_right>.downlode>a:hover{
   text-decoration: underline;
}
.login_header>.login_right>div.weixin{
    float: left;
    width: 22px;
    height: 22px;
    background: url("../img/login/iconHeaderLogo.png") -45px -1px no-repeat;
    margin-left: 30px;
    margin-top: 10px;
    cursor: pointer;
}
.login_header>.login_right>img.ewm{
    position: absolute;
    top: 30px;
    left: 360px;
    z-index: 1001;
    display: none;
}
.login_header>.login_right>div.weibo{
    float: left;
    width: 22px;
    height: 22px;
    background: url("../img/login/iconHeaderLogo.png") -73px -1px no-repeat;
    margin-left: 20px;
    margin-top: 10px;
    cursor: pointer;
}
/*图标*/
.header_logo{
    width: 100%;
    height: 95px;
    background: #ffffff;
}
.header_logo>a{
    float: left;
    width: 300px;
    height: 60px;
    margin: 17px 0;
    background: url("../img/login/logoHeaderNew.jpg") no-repeat;
    margin-left: 100px;
}
.content{
    width: 100%;
    height: 502px;
}
/*轮播图*/
/*.carousel{
    width: 100%;
    height: 502px;
    position: relative;
    float: left;
}
.carousel>img{
    width: 100%;
    height: 502px;
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    transition:opacity .5s linear;
}
.carousel>img.show{
    opacity:1;
}
.notshow{
    opacity:0;
}*/
#banner,#banner img{position:relative;width:100%;height:502px;float:left}
	#banner img{position:absolute;top:0;left:0;filter:Alpha(opacity=100);opacity:1;}
/*登陆*/
.content_box{
    width: 1100px;
    height: 502px;
    margin: 0 auto;
    position: relative;
}
.content_box>div.login_box{
    width: 386px;
    height:381px;
    background:#ffffff;
    position: absolute;
    z-index: 1000;
    top:20px;
    left:650px;
    border-radius: 5px;
    box-shadow:0px 0px 10px #aaa;
}
/*第一行两种登陆方式和二维码*/
.login_box>.box_top{
    width: 385px;
    height:62px;
    /*background:lightpink;*/
}
.box_top>ul{
    width:289px;
    height: 24px;
    margin-left: 40px;
    padding-top: 32px;
    float: left;
}
.box_top>ul>li{
    float: left;
    padding: 0 15px;
}
.box_top>ul>li:first-child{
    border-right: 1px solid #aaaaaa;
}
.box_top>ul>li>a{
    font-size: 18px;
    color: #333333;
}
#active{
    color: #ff6000;
}
.box_top>a>img{
    margin-top:7px;
    width: 52px;
    height: 52px;

}
/*第二行：错误提示*/
.err{
    width: 302px;
    height: 18px;
    margin: 0 40px 8px 40px;
    opacity: 0;
}
span>img{
    float: left;
    margin: 0 10px 0 22px;
}
.err>span>span{
    font-size: 12px;
    color:#fe0000;
    float: left;
}
/*输入框*/
.input_text{
    width: 302px;
    height:38px;
    border: 1px solid #e8e8e8;
    margin: 0 40px 10px 40px;
}
.input_text>.left_img1{
    width: 20px;
    height: 38px;
    margin: 0 10px;
    background: url("../img/login/iconNew.png") no-repeat -271px -12px;
    float: left;
}
.input_text>input{
    width: 250px;
    height: 18px;
    padding:17px 8px;
    border: none;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border-left:1px solid #e8e8e8;
    color:black;
    font-weight: bold;
    font-size: 15px;
}
/*修改placeholder文本颜色*/
.input_text>input::-webkit-input-placeholder{
    color:#999999;
    font-weight: normal;
    font-size: 14px;
}
.input_text>.left_img2{
    width: 20px;
    height: 38px;
    margin: 0 10px;
    background: url("../img/login/iconNew.png") no-repeat -313px -12px;
    float: left;
}
/*按钮*/
.input_btn{
    width: 386px;
    height:48px;
    margin-top: 25px;
}
.input_btn>.btn{
    width: 302px;
    height: 48px;
    margin: 0 40px;
    border: none;
    cursor: pointer;
    background: url("../img/login/iconNew.png") -17px -213px no-repeat;
    outline: none;
    z-index: 20;
}
.input_btn>.btn:hover{
    background: url("../img/login/iconNew.png") -17px -270px no-repeat;
}
/*忘记密码*/
.login_forget{
	width: 302px;
	height: 20px;
	padding-top: 5px;
	margin:0 40px;
}
.login_forget>a{
	float: right;
	font-size: 14px;
	color: #333333;
}
.login_forget>a:hover{
	font-weight: bold;
	color: dodgerblue;
}
/*登陆方式*/
.login_style{
	width: 302px;
	height: 15px;
	margin: 0 40px;
	border-bottom: 1px solid #E8E8E8;
}
.login_style>p{
    color: #666666;
    font-size: 16px;
    width: 96px;
    height: 20px;
    padding: 2px 0;
    margin: 0 auto;
    background: white;
}
/*第三方登陆图标*/
.third_login{
	width: 272px;
	height: 30px;
	padding-left: 30px;	
	margin:15px 40px 0 40px;
		
}
.third_login>a{
	float: left;
    width: 30px;
    height: 30px;
    margin-left: 40px;
}
.third_login>a:first-child{
	background: url("../img/login/iconNew.png") -212px -16px no-repeat; 
	margin-left: 0; 
}
.third_login>a:first-child:hover{
	background: url("../img/login/iconNew.png") -212px -86px no-repeat;  
}		
.third_login>a:nth-child(2){
	background: url("../img/login/iconNew.png") -144px -16px no-repeat;
}
.third_login>a:nth-child(2):hover{
	background: url("../img/login/iconNew.png") -144px -86px no-repeat;
}
.third_login>a:nth-child(3){
	background: url("../img/login/iconNew.png") -15px -16px no-repeat;
}
.third_login>a:nth-child(3):hover{
	background: url("../img/login/iconNew.png") -15px -86px no-repeat;
}
.third_login>a:nth-child(4){
	background: url("../img/login/iconNew.png") -80px -16px no-repeat;
}
.third_login>a:nth-child(4):hover{
	background: url("../img/login/iconNew.png") -80px -86px no-repeat;
}
/*下载客户端*/
.login_last{
	width: 386px;
	height: 30px;
	margin-top: 10px;
	text-align: center;
}
.login_last>a{
	font-size: 12px;
	color: #333333;
}
.login_last>a:hover{
	color:#FF6000;
	font-weight: bold;
}

/*底部*/
.login_footer{
    width: 100%;
    height: 86px;
    background: #414141;
}
.login_footer>ul{
    width: 540px;
    float: left;
    margin-top: 30px;
    margin-left: 500px;
    height: 40px;
    font-size: 12px;
}
.login_footer>ul>li{
    color: #999999;
    padding-bottom: 1px;
}
.login_footer>ul>li>a{
    color: #999999;
}
.login_footer>ul>li>span{
    padding: 8px;
}
.login_footer>ul>li:first-child{
    border-bottom: 1px solid #999999;
}
.login_footer>ul>li:nth-child(2)>span{
    float: left;
    margin-left: 60px;
}
.login_footer>ul>li:nth-child(2)>a.cx{
    float: left;
    width: 49.7px;
    height: 19px;
    background: url("../img/login/foot.png") -68px -7px no-repeat;
    margin: 6px 2px;
}
.login_footer>ul>li:nth-child(2)>a.kx{
    float: left;
    width: 49.7px;
    height: 19px;
    background: url("../img/login/foot.png") -68px -26px no-repeat;
    margin: 6px 2px;
}
.login_footer>ul>li:nth-child(2)>a.cx:hover{
    background: url("../img/login/foot.png") -12px -7px no-repeat;
}
.login_footer>ul>li:nth-child(2)>a.kx:hover{
    background: url("../img/login/foot.png") -12px -26px no-repeat;
}
</style>