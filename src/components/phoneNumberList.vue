<template>
	<main>
		<header id="header">
		<!--第一行，黑色背景-->
		<div class="row my_header_row1">				
			<div class="container p-1 d-flex justify-content-between">
				<!--第一行左边部分-->
				<div class="">
					<a href="index.html" class="my_header_font1">
						<img class="mr-1 mb-1" src="../img/phoneNumber/icon1_red1.png" alt="" />
						网上营业厅
					</a>
				</div>
				<!--第一行右边部分-->
				<div class="d-flex">
					<div id="dropdown" class="mr-4">
						<a href="#"  class="my_header_font1 dropbtn">
							<img class="mr-1" src="../img/phoneNumber/icon_ren1.png"/>个人中心
						</a>
						<div class="mt-1" id="dropdown-content" >
							<div class="d-flex">														
								<ul class="list-unstyled mr-3" >
									<li><a href="#" class="my_down1">我的订单</a></li>
									<li><a href="#" class="my_down1">预约订单</a></li>
									<li><a href="#" class="my_down1">收货地址</a></li>
									<li><a href="#" class="my_down1">个人信息</a></li>
								</ul>						
								<div class="my_shuborder mt-3"></div>						
								<ul class="list-unstyled ml-3 mt-2">
									<li><a href="#" class="my_down1">售后处理</a></li>
									<li><a href="#" class="my_down1">密码修改</a></li>
									<li><a href="#" class="my_down1">安全中心</a></li>							
								</ul>
							</div>
						</div>
					</div>
					<div id="dropdown1">
						<a href="#"  class="my_header_font1" id=" dropbtn1">
							<img class="my_header_img2 mr-1" src="../img/phoneNumber/icon_phone1.png"/>手机版
						</a>
						<div class="mt-1" id="dropdown-content1">
							<div class="d-flex">													
								<ul class="list-unstyled">
									<li>
										<p class="my_down1 p-0 m-0 ml-2">扫&nbsp;码&nbsp;购&nbsp;物</p>
										<img src="../img/phoneNumber/downLoad.png" class="erweima">
										<div class="d-flex">
											<img src="../img/phoneNumber/u569.png" class="little_icon mt-1"><p class="erweima_font1">Iphone</p>
											<img src="../img/phoneNumber/u567.png" class="little_icon mt-1"><p class="erweima_font1">Android</p>
										</div>
										
									</li>
								</ul>							
								<ul class="list-unstyled ml-3">
									<li>
										<p class="my_down1 p-0 m-0">下载手机营业厅</p>
										<img src="../img/phoneNumber/downLoad.png" class="erweima">
									  <div class="d-flex">
									  	<img src="../img/phoneNumber/u569.png" class="little_icon mt-1"><p class="erweima_font1">Iphone</p> 
										<img src="../img/phoneNumber/u567.png" class="little_icon mt-1"><p class="erweima_font1">Android</p>
									 </div>										
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--第二行-->
		<div class="row mt-5">
			<div class="container">
				<!--第二行左边：图标 定位-->				
				<div class="d-flex">					
						<img src="../img/phoneNumber/index-logo.png" style="width: 25%;">															
					<div class="dropdown2">
						 <p id="sc" class="my_header_position ml-4 mt-3">北京</p>  
						 <img src="../img/phoneNumber/position_red.png" class="my_position_img">             
					     <img src="../img/phoneNumber/down.png" class="my_down_img">
					     <div class="dropdown-content2">
					     	<div class="row mt-3" id="keys">
					     		<div class="d-flex">
					     			<p class="mr-3 p-0 m-0 my_down1">东城区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">西城区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">朝阳区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">丰台区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">石景山区</p>
						     	</div>
						     	<div class="d-flex mt-3">
						     		<p class="mr-3 p-0 m-0 my_down1">海淀区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">门头沟区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">房山区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">通州区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">顺义区</p>
					     		</div>
					     		<div class="d-flex mt-3">					     			
						     		<p class="mr-3 p-0 m-0 my_down1">昌平区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">大兴区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">怀柔区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">平谷区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">密云区</p>
						     		<p class="mr-3 p-0 m-0 my_down1">延庆区</p>
					     		</div>					     							     				     		
					     	</div>
					     </div>
					</div>							
				</div>
			<div class="row mt-5 justify-content-between">
				<ul class="list-unstyled d-flex mt-3">
					<li><a class="my_header_font2" href="#">首页</a></li>
					<div class="dropdown3">
						<li><a class="my_header_font2" href="#">号码/套餐</a></li>
						<div class="dropdown-content3 mt-4">
							<ul class="list-unstyled">
								<li>
									<img src="../img/phoneNumber/20180601153145683928992.png" class="mr-1">
									<a style="color: red; font-weight: bold;" class="dropdown_font1">选号码</a>
									<img src="../img/phoneNumber/right_2.png">
									<a class="dropdown_font1 ml-1 mr-3" href="#">186</a>
									<a class="dropdown_font1 mr-3" href="#">185</a>
									<a class="dropdown_font1 mr-3" href="#">156</a>
									<a class="dropdown_font1 mr-3" href="#">155</a>
									<a class="dropdown_font1 mr-3" href="#">130</a>
									<a class="dropdown_font1 mr-3" href="#">131</a>
									<a class="dropdown_font1 mr-3" href="#">132</a>
									<a class="dropdown_font1 mr-3" href="#">176</a>
									<a class="dropdown_font1 mr-3" style="color: red;" href="#">靓号专区</a>
								</li>
								<li class="mt-3">
									<img src="../img/phoneNumber/20180601145534-1264677504.jpg" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">优惠活动</a>               
									<img src="../img/phoneNumber/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">全国流量王</a>																		
								</li>
								<li class="mt-3">
									<img src="../img/phoneNumber/2018060115301212609648.png" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">4G套餐</a>               
									<img src="../img/phoneNumber/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">4G全国套餐</a>                									
								</li>
								<li class="mt-3">
									<img src="../img/phoneNumber/20180606111650-2133017584.png" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">新品推荐</a>               
									<img src="../img/phoneNumber/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">日租卡升级版</a>                
									<a class="dropdown_font1 mr-3" href="#">团购冰淇淋</a>                     
									<a class="dropdown_font1 mr-3" href="#">腾讯网卡</a>                    									
								</li>
								<li class="mt-3">
									<img src="../img/phoneNumber/20180606112234310011600.png" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">无限量专区</a>               
									<img src="../img/phoneNumber/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">大冰神卡</a>                
									<a class="dropdown_font1 mr-3" href="#">小冰神卡</a>                     
									<a class="dropdown_font1 mr-3" href="#">129冰淇淋套餐</a>                     									
								</li>
								<hr />
							</ul>							
						</div>
					</div>
					
					<div class="dropdown4">
					<li><a class="my_header_font2" href="#">手机/配件</a></li>
					<div class="dropdown-content4 mt-4">
						<ul class="list-unstyled">
							<li>
								<img src="../img/phoneNumber/20180601145719-746904112.jpg" class="mr-1">
								<a style="color: red; font-weight: bold;" class="dropdown_font1">特点</a>
								<img src="../img/phoneNumber/right_2.png">
								<a class="dropdown_font1 ml-1 mr-3" href="#">4G手机</a>								
							</li>
							<li class="mt-3">
								<img src="../img/phoneNumber/201806011530371842659760.png" class="mr-1">            
								<a style="color: red; font-weight: bold;" class="dropdown_font1">活动</a>               
								<img src="../img/phoneNumber/right_2.png">                                         
								<a class="dropdown_font1 ml-1 mr-3" href="#">裸机热卖</a>
								<a class="dropdown_font1 mr-3" href="#">存费送机</a>
									<a class="dropdown_font1 mr-3" href="#">购机送费</a>
									<a class="dropdown_font1 mr-3" href="#">招联信用0利息0手续费</a>
							</li>
							<li class="mt-3">
								<img src="../img/phoneNumber/20180601145840-1200700576.jpg" class="mr-1">            
								<a style="color: red; font-weight: bold;" class="dropdown_font1">品牌</a>               
								<img src="../img/phoneNumber/right_2.png">                                         
								<a class="dropdown_font1 ml-1 mr-3" href="#">苹果</a> 
								<a class="dropdown_font1 mr-3" href="#">华为</a>                     
								<a class="dropdown_font1 mr-3" href="#">vivo</a>
								<a class="dropdown_font1 mr-3" href="#">oppo</a>                     
								<a class="dropdown_font1 mr-3" href="#">小米</a>
							</li>
							<li class="mt-3">
								<img src="../img/phoneNumber/20180601153057-1189447152.png" class="mr-1">            
								<a style="color: red; font-weight: bold;" class="dropdown_font1">配件类型</a>               
								<img src="../img/phoneNumber/right_2.png">                                         
								<a class="dropdown_font1 ml-1 mr-3" href="#">防护套膜</a>                
								<a class="dropdown_font1 mr-3" href="#">支架外设</a>                     
								<a class="dropdown_font1 mr-3" href="#">数据线</a>
								<a class="dropdown_font1 mr-3" href="#">存储卡设备</a>                     
								<a class="dropdown_font1 mr-3" href="#">电源电池</a>
							</li>							
							<hr />
						</ul>							
					</div>
					</div>
					<li><a class="my_header_font2" href="#">宽带</a></li>
					<li><a class="my_header_font2" href="#">上网卡</a></li>
					<li><a class="my_header_font2" href="#">老用户</a></li>
					<li><a class="my_header_font2" href="#">流量包</a></li>
					<li><a class="my_header_font2" href="#">充值卡</a></li>
				</ul>
				<div class="dropdown5">
					<input type="text" value="网卡" class="my_header_search mt-2">
					<img src="../img/phoneNumber/search_red.png" class="my_search_icon">
					<div class="dropdown-content5">
						<div class="mt-2 ml-3">											
						<a href="#" class="dropdown_font2 mr-3">冰神卡</a>
						<a href="#" class="dropdown_font2 mr-3">iphone7</a>
						<a href="#" class="dropdown_font2 mr-3">iPhone8</a>
						<img src="../img/phoneNumber/refresh.png" class="ml-5">
						</div>
					</div>
				</div>				
			</div>
			
			</div>
		</div>
		<hr class="my_header_hr">		
	</header>
    <!--主体-->
   	<!-- 固定在页面的导航-->
   	<a class="always" href="#">
   		<p class="m-0 p-0 always_font">沃4G+</p>
   		<div class="always_box">
   			<img src="../img/big_car.png" class="mt-3">
   			<p class="always_font1 ml-2">在<br />线<br />导<br />游</p>
   		</div>
   	</a>
    <div class="container">
    	<div class="ml-5 my_box">
    	<!--第一行小字-->
    	<div class="d-flex">
    		<a href="#" class="mr-3 my_row1_font1">首页</a>
    		<img src="../img/phoneNumber/right_down.png" style="width: 10px;height: 10px;" class="mt-1 mr-2">
    		<p class="ml-1  my_row1_font2">靓号</p>
    	</div>
    	<!--图片 一行 两列  第二列有三行-->
    	<div class="row">
    		<!--左边第一列-->
    		<div class="col-md-2 my_left_box text-center p-0 m-0">
    			<div class="my_left_header p-0 m-0 text-left"><p class="ml-2 my_left_font3">热销商品</p></div>
    			<div class="my_left_box1 text-center m-2">
    				<img src="../img/phoneNumber/left1.png">
    				<a href="#" class="my_left_font1">【两年以上老用户专享】4G全国套餐老用户免预存送费/业务</a>
    				<p class="my_left_font2 mt-3">￥0.0</p>
    			</div>
    			<div class="my_left_box1 text-center m-2">
    				<img src="../img/phoneNumber/left2.jpg" class="my_left_box1"　>
    				<a href="#" class="my_left_font1">4G全国套餐  仅限新用户购买！</a>
    				<p class="my_left_font2 mt-3">￥120.0</p>
    			</div>
    			<div class="my_left_box1 text-center m-2">
    				<img src="../img/phoneNumber/left1.png" class="my_left_box1">
    				<a href="#" class="my_left_font1">4G全国套餐老用户半价存费送费/业务</a>
    				<p class="my_left_font2 mt-3">￥60.0</p>
    			</div>	
    			<div class="text-center m-2">
    				<img src="../img/phoneNumber/left2.jpg" class="my_left_box1">
    				<a href="#" class="my_left_font1">4G全国套餐老用户全价存费送费/业务</a>
    				<p class="my_left_font2 mt-3">￥80.0</p>
    			</div>
    		</div>
    		<!--右边大列-->
    		<div class="col-md-9">
    			<!--右边列 第一行-->
    			<div class="row my_right_box1">
    				<div class="my_right_header1 my_left_font3 pt-1">
    					请选择号码
    				</div>
    				<div class="ml-3">
    					<div class="my_right_xu d-flex">
    						<p class="ml-5 p-0 m-0 mt-3 mb-2 my_right_font">号码自定义</p>
    						<input type="text" value="生日/纪念日/车牌/门牌（2-4位）" class="my_right_input mt-3 ml-3">
    						<a href="#"><button class="my_right_search mt-3 ml-3"><a class="my_right_search" href="#">搜&nbsp;&nbsp;索</a></button></a>
    					</div>
    					<div class="my_right_xu d-flex">
    						<p class="ml-5 p-0 m-0 mt-3 mb-2 my_right_font">城&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;市：</p>
    						<a href="#" class="my_beijing_font mt-3 ml-2">北京</a>
    					</div>
    					<div class="my_right_xu d-flex">
    						<p class="ml-5 p-0 m-0 mt-3 mb-2 my_right_font">号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段：</p>
    						<ul class="list-unstyled d-flex mt-2 p-0 m-0">
    							<li class="mr-4 ml-1 my_right_li"><a href="#" class="my_haoduan">186</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">185</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">156</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">131</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">130</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">155</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">132</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">176</a></li>
    						</ul>
    					</div>
    					<div class="my_right_xu d-flex">
    						<p class="my_right_font ml-5 p-0 m-0 mt-3 mb-2">预&nbsp;存&nbsp;话&nbsp;费：</p>
    						<ul class="list-unstyled d-flex mt-2 p-0 m-0">
    							<li class="mr-4 ml-1 my_right_li"><a href="#" class="my_haoduan">0-100</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">100-300</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">300-500</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">500-1000</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">1000-5000</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">5000-10000</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">10000以上</a></li>    							
    						</ul>
    					</div>
    					<div class="my_right_xu d-flex">
    						<p class="my_right_font ml-5 p-0 m-0 mt-3 mb-2">靓&nbsp;号&nbsp;类&nbsp;型：</p>
    						<ul class="list-unstyled d-flex mt-2 p-0 m-0">
    							<li class="mr-4 ml-1 my_right_li"><a href="#" class="my_haoduan">AAAAA</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">AAAA</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">ABCDE</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">ABCD</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">AAA</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">AABB</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">ABAB</a></li>
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">ABC</a></li> 
    							<li class="mr-4 my_right_li"><a href="#" class="my_haoduan">AA</a></li> 
    						</ul>
    					</div>
    					
    				</div>
    				<div class="my_right_xulast pl-3 d-flex">
    						<p class="my_right_font ml-5 p-0 m-0 mt-3 mb-2">您&nbsp;已&nbsp;选&nbsp;择：</p>
    						<p class="my_beijing_font2 mt-3 m-0 p-0">北京</p>
    				</div>
    			</div>
    			<!--右边列 第二行-->
    			<div class="row my_right_box2">
    				<img src="../img/phoneNumber/banner4.jpg" class="">
    			</div>
    			<!--右边列 第三行-->
    			<div class="row my_right_box3 mt-3">    				
    				<div class="my_right_header2 d-flex" id="fixed1">    				
    					<!--下拉出现固定导航-->
    					<p class="ml-3 mt-2 my_right_font3">排序：</p>
    					<ul class="list-unstyled d-flex mr-5">
    						<li class="my_right_updown mt-2 mr-2" @click="numberup">
    							<a style="cursor: pointer;" class="ml-1 my_right_font3">号码升序<img class="ml-1" src="../img/phoneNumber/up.png"/></a>    						
    						</li>
    						<li class="my_right_updown mt-2 mr-2">
    							<a style="cursor: pointer;" class="ml-1 my_right_font3" @click="numberdown" >号码降序<img class="ml-1" src="../img/phoneNumber/down2.png"/></a>   							
    						</li>
    						<li class="my_right_updown mt-2 mr-2">
    							<a  style="cursor: pointer;" class="ml-1 my_right_font3">价格升序<img class="ml-1" src="../img/phoneNumber/up.png"/></a>   							
    						</li>
    						<li class="my_right_updown mt-2 mr-2">
    							<a  style="cursor: pointer;" class="ml-1 my_right_font3">价格降序<img class="ml-1" src="../img/phoneNumber/down2.png"/></a>    							
    						</li>
    					</ul>
    					<p class="mt-2 my_right_font3 mr-3 ml-5">{{this.pageIndex}}/{{this.pageCount}}</p>
    					<a style="cursor: pointer;" class="my_right_back mt-2 mr-2" @click="getLess">
    						<img src="../img/phoneNumber/leftup2.png">
    						<p id="first1">上一页</p>
    					</a>
    					<a style="cursor: pointer;" class="my_right_back mt-2 pl-2" @click="getMore">    						
    						<p id="next1">下一页</p>
    						<img src="../img/phoneNumber/left_one.png">
    					</a>
    					<p class="mt-2 mr-2 p-1">
    						<p class="my_total_p mt-2">共</p>
    						<p class="my_total_p1 mt-2">54</p>
    						<p class="my_total_p mt-2">个商品</p>
    					</p>    					    					    				
    				</div>
    			
    			</div>
    			<!--右边第四行-->
    			<div class="row my_right_box4 mt-2">
    				<!--第四行的第一列-->
    				<div class="col-md-12">
    					<div class="number_header row">
    						<div class="my_right_header4 d-flex col-md-6">
	    						<p class="ml-1 mr-5 my_right_font mt-1">号码</p>
	    						<p class="ml-1 mr-5 my_right_font mt-1"></p>
	    						<p class="ml-5 mr-5 my_right_font mt-1">预存话费</p>
	    						<p class="ml-4 mr-3 my_right_font mt-1 pl-3">订购</p>
    						</div>
    						<div class="my_right_header4 d-flex col-md-6">
	    						<p class="ml-1 mr-5 my_right_font mt-1">号码</p>
	    						<p class="ml-1 mr-5 my_right_font mt-1"></p>
	    						<p class="ml-5 mr-5 my_right_font mt-1">预存话费</p>
	    						<p class="ml-4 mr-5 my_right_font mt-1 pl-1">订购</p>
    						</div>
    					</div>
    					<div class="phone_number row">
    						<div class="my_right_littlexu d-flex col-md-6" v-for="item in list" :key="item.id">
	    						<a href="#" class="my_row4_font1 mr-5 mt-2">{{item.phone}}</a>
	    						<p class="ml-4 mt-2 my_row4_font2">{{item.presmoney}}元</p>
	    						<a href="#" class="ml-5 mt-1">
	    							<div class="mt-2 ml-4 my_car"><img src="../img/phoneNumber/car.png" class="ml-2 mr-1">订购</div>
	    						</a>
    						</div>
    					</div>
    				</div>
    				<!--第四行的第二列-->
    				<div class="col-md-6">
    					<!--下方分页-->
    					<div class="d-flex my_fenye_box">
	    					<a style="cursor: pointer;" class="my_right_back mt-2 mr-1" @click="getLess">
	    						<img src="../img/phoneNumber/leftup2.png">
	    						<p id="first">上一页</p>
	    					</a>
	    					<p class="mt-2 my_right_font3 mr-3 ml-3">{{this.pageIndex}}/{{this.pageCount}}</p>
	    					<a style="cursor: pointer;" class="my_right_back mt-2 pl-2" @click="getMore">    						
	    						<p id="next">下一页</p>
	    						<img src="../img/left_one.png" class="right1_1">
	    					</a>
							<!--
	    					<p class="my_fenye_font mt-2 ml-1">共{{this.pageCount}}页&nbsp;跳转至
	    						<input type="text" class="mr-1 my_fenye_input">页
	    					</p>
	    					<button class="my_fenye_btn mt-2 ml-2" @click="jump">跳转</button>
							-->
    					</div>
    				</div>    				 
    			</div>
    		</div>    		
    	</div>  	    		
    	</div>   	
    </div>
    <!--下方水平线-->
    <hr class="my_down_hr">
    <div style="height: 5000px;"></div>
   </main>
</template>
<script>
    export default {
        data(){
            return{
            	list:[],
            	pageSize:34,
            	pageIndex:0,
            	pageCount:2 
            }
        },
        // 手机号码列表--获取手机号码
        methods:{
        	jquery(){
        		$(window).scroll(function(){
					var fixed1 = $("#fixed1");
					
					var scrollTop=document.documentElement.scrollTop;
					if(scrollTop>=800){
						$("#nav").css("position","fixed");
						fixed1.css("position","fixed");
						fixed1.css("top","0");
					}else{
				      fixed1.css("position","relative");
				     
					}
				})
				keys.onclick=function(e){
					if(e.target.nodeName=="P"){
						sc.innerHTML=e.target.innerHTML;
					}
				}
        	},
        	//获取没有卖出的电话号码  循环遍历出电话号码和预存话费
            //getNumber(){
                //this.$http.get("http://127.0.0.1:3000/phoneNumberList/getnumber").then(result=>{
				//this.list1=result.body;
					 //console.log(this.list1)
                //})
            //},
            getMore(){
//          	this.pageIndex++;
//          	this.hasMore=this.pageIndex<=this.pageCount;
//	          	if(!this.hasMore){
//          		return
//          	}
				if(this.pageIndex<this.pageCount){
            		this.pageIndex++;
            	}else{
            		return;
            	}

            	if(this.pageIndex-this.pageCount==0){
            		next.style.color="gray";
					first.style.color="black";
					next1.style.color="gray";
					first1.style.color="black";
            	}
				
				var url="http://localhost:3000/phoneNumberList/phonelist";
				url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
            	this.$http.get(url).then(result=>{
            		this.list=result.body.data;
            		// console.log(this.list);
            	})
            },
            getLess(){
				

            	if(this.pageIndex>1 && this.pageIndex>=this.pageCount){
            		this.pageIndex--;
            	}else{
            		return;
            	}

				if(this.pageIndex==1){
					next.style.color="black";
            		first.style.color="gray";
					next1.style.color="black";
            		first1.style.color="gray";
            	}
				var url="http://localhost:3000/phoneNumberList/phonelist";
				url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
            	this.$http.get(url).then(result=>{
            		this.list=result.body.data;
            		// console.log(this.list);
            	})
            },
            numberdown(){
            	this.$http.get("http://localhost:3000/phoneNumberList/numberdown").then(result=>{
					this.list2=result.body;
					this.list=this.list2
					// console.log(this.list2);
					
            	})
            },
            numberup(){
            	this.$http.get("http://localhost:3000/phoneNumberList/numberup").then(result=>{
					this.list3=result.body;
					this.list=this.list3
					// console.log(this.list3);
					
            	})
            }
            
        },
        mounted(){
        	this.jquery();
        	//this.getNumber();
        	this.getMore();
        	this.numberup();
        	this.numberdown();
        	this.getLess();
        	
        }
    }
</script>
<style scoped>
	/*固定不变的*/
.always{
	position: fixed;
	top: 20%;
	left: 96%;	
	z-index: 30;
}
.always_font{
	color: #c3c3c3;
	font-weight: bold;
	
}
.always_font1{
	color: #d9dadb;
	font-weight: bold;
	font-size: 18px;
}
.always_box{
	width: 35px;
	height: 170px;
	background: #a4a4a5;
	border-radius: 2px;
}
.always:hover{
	text-decoration: none;
}
/*.always:first-child{
	color: #f57900;
}*/
.always div:hover{
	color: #f57900;
	background: #f57900;
}
/*第一行小字*/
.my_row1_font1{
	font-size: 12px;
}
.my_row1_font2{
	font-size: 12px;
}
.my_row1_font1:hover{
	color: orange;
}
.my_left_box{
	border: 1px solid lightgray;
	height: 1000px;
}
.my_left_box1{
	border-bottom:  1px solid lightgray;
	
	padding-top: 20px;
}
.my_left_font1{
	font-size: 13px;
	color: black;
	display: block;
}
.my_left_font1:hover{
	color: orangered;
	text-decoration: none;
}
.my_left_font2{
	font-size: 16px;
	color: orangered;
}
.my_left_font3{
	font-size: 14px;
	padding-top: 5px;
	padding-left: 7px;
}
.my_left_header{
	height: 35px;
	background-image:linear-gradient(to top, #f2f2f2,white,#f2f2f2) ;
	border-bottom: 1px solid gainsboro;
}
.my_right_header1{
	height: 30px;
	width: 870px;
	background-image:linear-gradient(to top, #f2f2f2,white,#f2f2f2) ;
	border-bottom: 1px solid gainsboro;
}
/*右边三行*/
.my_right_box1{
	border: 1px solid lightgrey;
	margin-left: -5px;
	width: 850px;
}
.my_right_xu{
	border-bottom: 1px dashed gainsboro;
	width: 820px;
}
.my_right_input{
	width: 250px;
	height: 25px;
	color: darkgrey;
	font-size: 13px;
}
.my_right_search{
	width: 50px;
	height: 25px;
	text-align: center;
	line-height: 10px;
	font-size: 13px;
	color: black;
}
.my_right_search:hover{
	text-decoration: none;
	color: black;
}
.my_right_font{
	font-size: 13px;
	font-weight: bold;
}
.my_right_font1{
	height: 25px;
}
.my_right_font2{
	height: 25px;
}
.my_beijing_font{
	color: white;
	font-size: 13px;	
	height: 20px;
	background: #008599;
}
.my_beijing_font:hover{
	text-decoration: none;
	color: white;
}
.my_haoduan{
	font-size: 15px;
	color: #1b6bbc;
}
.my_haoduan:hover{
	color:white;
	background: #008599;
	text-decoration: none;	
}
.my_right_li{
	height: 15px;
	margin-top: 5px;
}
.my_right_xulast{
	border-bottom: 1px dashed gainsboro;
	width: 820px;
	border: 1px solid #a6cdfd;
	width: 890px;
}
.my_beijing_font2{
	font-size: 13px;
	color: orangered;
	height: 23px;
	width: 43px;
	text-align: center;
	border: 1px solid orangered;
}
.my_right_box2{
	margin-left: -5px;
	width: 900px;
}
.my_right_header2{
	
	height: 50px;
	width: 850px;
	background-image:linear-gradient(to top, #f2f2f2,white,#f2f2f2) ;
	border-top: 3px solid #fa9029;
	border-radius:8px 8px 0 0 ;
	z-index: 20;
}
#fixed1{
	position: relative;
	top: 0;
}
.my_right_box3{
	margin-left: -5px;
	width: 850px;	
}
.my_right_font3{
	font-size: 14px;
	color: black;
	padding-top: 3px;
}
.my_right_font3:hover{
	text-decoration: none;
	color: dimgray;
}
.my_right_updown{
	background-image:linear-gradient(to top, #f2f2f2,white,gainsboro,white,#f2f2f2);
	height: 30px;
	width:82px;
	border: 1px solid gainsboro;
}
.my_right_updown:hover{
	background-image:linear-gradient(to top, #d1e4fc,white,#d1e4fc,white,#d1e4fc);
	border: 1px solid #d1e4fc;
}
.my_right_back{
	border: 1px solid gainsboro;
	width: 64px;
	height: 26px;
	font-size: 13px;
	padding: 2px;
	font-weight: bold;
	border-radius: 5px;
	padding-top: 2px;
	padding-right: 2px;
	position: relative;
}
.my_right_back:hover{
	text-decoration: none;
	border: 1px solid #add0fb;
	background-image:linear-gradient(to top, #d1e4fc,white,#d1e4fc,white,#d1e4fc);
}
#first{
	color: black;
	position: absolute;
	top: 2px;
	left: 15px;
}
#next{
	color: black;
	position: absolute;
	top: 2px;
	left: 10px;
}
#first1{
	color: black;
	position: absolute;
	top: 2px;
	left: 15px;
}
#next1{
	color: black;
	position: absolute;
	top: 2px;
	left: 15px;
}
.my_total_p{
	color: orangered;
	font-size: 14px;
}.my_total_p1{
	color: black;
	font-size: 14px;
}
/*第四列*/
.number_header{
	margin-left: -1px;
	width: 850px;
}
.phone_number{
	margin-left: -1px;
}
.my_right_box4{
	width: 850px;
	margin-left: -20px;
}
.my_right_header4{
	background: #f1f1f2;
	width: 400px;
	height: 30px;
	float: left;
	border:1px solid #eaebec;
}
.my_right_littlexu{
	border-bottom: 1px dashed gainsboro;
	width: 425px;
	height: 50px;
}
.my_row4_font1{
	font-weight: bold;
	font-size: 18px;
	color: black;
	padding-top: 5px;
}
.my_row4_font1:hover{
	color: #fc8238;
}
.my_row4_font2{
	font-size: 15px;
	color: black;
	padding-top: 5px;
}
.my_car{
	width: 75px;
	height: 27px;
	border: 1px solid #f3dd9f;	
	font-size: 15px;
	color: black;
	background-image:linear-gradient(to top, #fcf3da,#fdfaec,#fcf0ce,#fef7e6,#fdfbf3);
}
.my_car:hover{		
	color: black;
	background-image:linear-gradient(to top, #fcf3da,#fdfaec,#f9dc97,#fef7e6,#fdfbf3);
}
.my_right_littlexu>a{
	text-decoration: none;
}
/*分页*/
.my_fenye_box{
	width: 425px;
}
/*
.my_fenye{
	display: block;
	width: 27px;
	height: 26px;
	border: 1px solid gainsboro;
	margin-top: 8px;
	text-align: center;
}
*/
.my_fenye:hover{
	border: 1px solid gainsboro;
	background: #fc8238;
	color: white;
	text-decoration: none;
}
.my_fenye_font{
	font-size: 13px;	
}
.my_fenye_input{
	width: 40px;
	height: 22px;
}
.my_fenye_btn{
	width: 43px;
	height: 24px;
	font-size: 13px;
}
.my_fenye_btn:hover{
	border: 1px solid #add0fb;
	background-image:linear-gradient(to top, #d1e4fc,white,#d1e4fc,white,#d1e4fc);
}
.right1_1{
	position:relative;
	left:45px;
}

/*水平线*/
.my_down_hr{
	color: gray;
	size: 5;
}
.fixed1{
	display: block;
}
.fixed2{
	position: fixed;
	top: 1px;
}
/*头部*/
/**{
	padding: 0;
	margin: 0;
}*/
header{
	width: 99%;	
}
/*头部图标*/
.my_header_row1{
	background: black;
}
.my_header_font1{
	color: darkgray;
	font-size: 15px;
}
.my_header_img1:hover{
	background-image: url(../img/icon2.png);
}
.my_header_font1:hover{
	color: red;
	text-decoration: none;
}
.my_header_position{
	position: relative;
	left: 40px;
	top: 25px;
	width: 120px;
	height: 33px;
	border: 1px solid red;
	border-radius: 20px;
	/*position: absolute;*/
	font-size: 14px;
	padding-left: 30px;
	padding-top: 5px;
}
.my_position_img{
	position: relative;
	left: 70px;
	top: -22px;
}
.my_down_img{
	position: relative;
	left: 90%;
	top: -20px;
}
.my_header_font2{
	color: black;
	font-size: 18px;
	margin-right: 40px;
	padding-bottom: 30px;
}
.my_header_font2:hover{
	border-bottom: 3px solid red;
	color: red;
	text-decoration: none;
}
.my_header_search{
	width: 300px;
	height: 40px;
	border: 1px solid red;
	border-radius: 7px;
	color: gray;
	margin-left: 30px;
	padding-left: 20px;
	
}
.my_search_icon{
	position: absolute;
	margin-left: 300px;
	margin-top: -25px;
}
.my_header_hr{
	color: gray;
	size: 5;
}
/*头部移过出现二维码和信息*/
.my_down1{
	font-size: 14px;
	color: gray;
}
.my_down1:hover{
	color: red;
}
.my_shuborder{
	border-left: 2px solid gainsboro;
	height: 80px;
}
/*右边悬停*/
.little_icon{
	width: 9%;
	height: 9%;
}
.erweima{
	width: 80%;
	height: 80%;
}

#dropdown{
	position: relative;
}
.erweima_font1{
	font-size: 6px;
}
#dropdown-content {
	display: none;
    position: absolute;    
    background-color: white;
    min-width: 150px;
    float: left;
}
#dropdown:hover #dropdown-content{
	display: block;
}
#dropdown1{
	position: relative;
}
#dropdown-content1{
	display: none;
    position: absolute;    
    background-color: white;
    width: 250px;
    height: 150px;   
    right: -20px;
}

#dropdown1:hover #dropdown-content1{
	display: block;
}
.dropdown2{
	position: relative;
}
.dropdown-content2{
	display: none;
	width: 400px;
	position: absolute;
	background: white;
	left: 60px;
	top: 76px;
	z-index: 10;
}
#keys{
	margin-left: 20px;
	margin-bottom: 10px;
}
.dropdown2:hover .dropdown-content2{
	display: block;
	
}
.dropdown3{
	position: relative;
}
.dropdown-content3{
	display: none;
	width: 2000px;
	position: absolute;
	background: white;
	left: 20px;
	z-index: 10;
	left: -75px;
	height: 200px;
}
.dropdown3:hover .dropdown-content3{
	display: block;
}
.dropdown_font1{
	color: black;
	font-size: 14px;
}
.dropdown_font1:hover{
	color: red;
	text-decoration: none;
}
.dropdown4{
	position: relative;
}
.dropdown-content4{
	display: none;
	width: 2000px;
	position: absolute;
	background: white;
	left: 20px;
	z-index: 10;
	left: -197px;
	height: 170px;
}
.dropdown4:hover .dropdown-content4{
	display: block;
}
.dropdown5{
	position: relative;
}
.dropdown-content5{
	display: none;
	width: 300px;
	position: absolute;
	border: 1px solid darkgray;
	background: white;
	/*left: 20px;*/
	/*z-index: 10;*/
	left: 30px;
	height: 50px;
}
.dropdown5:hover .dropdown-content5{
	display: block;
}
.dropdown_font2{
	color: grey;
	font-size: 13px;
}
.dropdown_font2:hover{
	text-decoration: none;
	color: red;
}

</style>