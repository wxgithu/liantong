<template>
	 <header id="header">
		<!--第一行，黑色背景-->
		<div class="row my_header_row1">				
			<div class="container p-1 d-flex justify-content-between">
				<!--第一行左边部分-->
				<div class="">
					<a href="index.html" class="my_header_font1">
						<img class="mr-1 mb-1" src="img/icon1_red1.png" alt="" />
						网上营业厅
					</a>
				</div>
				<!--第一行右边部分-->
				<div class="d-flex">
					<div id="dropdown" class="mr-4">
						<a href="#"  class="my_header_font1 dropbtn">
							<img class="mr-1" src="img/icon_ren1.png"/>个人中心
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
							<img class="my_header_img2 mr-1" src="img/icon_phone1.png"/>手机版
						</a>
						<div class="mt-1" id="dropdown-content1">
							<div class="d-flex">													
								<ul class="list-unstyled">
									<li>
										<p class="my_down1 p-0 m-0 ml-2">扫&nbsp;码&nbsp;购&nbsp;物</p>
										<img src="img/downLoad.png" class="erweima">
										<div class="d-flex">
											<img src="img/u569.png" class="little_icon mt-1"><p class="erweima_font1">Iphone</p>
											<img src="img/u567.png" class="little_icon mt-1"><p class="erweima_font1">Android</p>
										</div>
										
									</li>
								</ul>							
								<ul class="list-unstyled ml-3">
									<li>
										<p class="my_down1 p-0 m-0">下载手机营业厅</p>
										<img src="img/downLoad.png" class="erweima">
									  <div class="d-flex">
									  	<img src="img/u569.png" class="little_icon mt-1"><p class="erweima_font1">Iphone</p> 
										<img src="img/u567.png" class="little_icon mt-1"><p class="erweima_font1">Android</p>
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
						<img src="img/index-logo.png" style="width: 25%;">															
					<div class="dropdown2">
						 <p id="sc" class="my_header_position ml-4 mt-3">北京</p>  
						 <img src="img/position_red.png" class="my_position_img">             
					     <img src="img/down.png" class="my_down_img">
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
									<img src="img/20180601153145683928992.png" class="mr-1">
									<a style="color: red; font-weight: bold;" class="dropdown_font1">选号码</a>
									<img src="img/right_2.png">
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
									<img src="img/20180601145534-1264677504.jpg" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">优惠活动</a>               
									<img src="img/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">全国流量王</a>																		
								</li>
								<li class="mt-3">
									<img src="img/2018060115301212609648.png" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">4G套餐</a>               
									<img src="img/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">4G全国套餐</a>                									
								</li>
								<li class="mt-3">
									<img src="img/20180606111650-2133017584.png" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">新品推荐</a>               
									<img src="img/right_2.png">                                         
									<a class="dropdown_font1 ml-1 mr-3" href="#">日租卡升级版</a>                
									<a class="dropdown_font1 mr-3" href="#">团购冰淇淋</a>                     
									<a class="dropdown_font1 mr-3" href="#">腾讯网卡</a>                    									
								</li>
								<li class="mt-3">
									<img src="img/20180606112234310011600.png" class="mr-1">            
									<a style="color: red; font-weight: bold;" class="dropdown_font1">无限量专区</a>               
									<img src="img/right_2.png">                                         
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
								<img src="img/20180601145719-746904112.jpg" class="mr-1">
								<a style="color: red; font-weight: bold;" class="dropdown_font1">特点</a>
								<img src="img/right_2.png">
								<a class="dropdown_font1 ml-1 mr-3" href="#">4G手机</a>								
							</li>
							<li class="mt-3">
								<img src="img/201806011530371842659760.png" class="mr-1">            
								<a style="color: red; font-weight: bold;" class="dropdown_font1">活动</a>               
								<img src="img/right_2.png">                                         
								<a class="dropdown_font1 ml-1 mr-3" href="#">裸机热卖</a>
								<a class="dropdown_font1 mr-3" href="#">存费送机</a>
									<a class="dropdown_font1 mr-3" href="#">购机送费</a>
									<a class="dropdown_font1 mr-3" href="#">招联信用0利息0手续费</a>
							</li>
							<li class="mt-3">
								<img src="img/20180601145840-1200700576.jpg" class="mr-1">            
								<a style="color: red; font-weight: bold;" class="dropdown_font1">品牌</a>               
								<img src="img/right_2.png">                                         
								<a class="dropdown_font1 ml-1 mr-3" href="#">苹果</a> 
								<a class="dropdown_font1 mr-3" href="#">华为</a>                     
								<a class="dropdown_font1 mr-3" href="#">vivo</a>
								<a class="dropdown_font1 mr-3" href="#">oppo</a>                     
								<a class="dropdown_font1 mr-3" href="#">小米</a>
							</li>
							<li class="mt-3">
								<img src="img/20180601153057-1189447152.png" class="mr-1">            
								<a style="color: red; font-weight: bold;" class="dropdown_font1">配件类型</a>               
								<img src="img/right_2.png">                                         
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
					<img src="img/search_red.png" class="my_search_icon">
					<div class="dropdown-content5">
						<div class="mt-2 ml-3">											
						<a href="#" class="dropdown_font2 mr-3">冰神卡</a>
						<a href="#" class="dropdown_font2 mr-3">iphone7</a>
						<a href="#" class="dropdown_font2 mr-3">iPhone8</a>
						<img src="img/refresh.png" class="ml-5">
						</div>
					</div>
				</div>				
			</div>
			
			</div>
		</div>
		<hr class="my_header_hr">		
	</header>
</template>

<script>
</script>

<style>
</style>