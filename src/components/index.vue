<template>
	<div>
		<!--header-->
		<div class="header clearfloat" style="background-color:#fff;">
			<div class="header-grid">
				<div class="width1200">
					<span class="header-grid-left ">
						<router-link to="/login">欢迎来到中国联通! [ 登录 ]</router-link>
					</span>
					<span class="header-grid-right2">
						<a href="#"><img src="../../static/img/phone.png" alt=""></img> 下载APP</a>
					</span>
					<div class="header-grid-right ">
						<ul class="grid">
				 			<li><a href="#">我的收藏</a></li>
							<li>
								<a href="#">客户服务<i></i></a>
								<ul class="grid-ul hide">
									<li><a href="#">沃知道</a></li>
									<li><a href="#">问卷调查</a></li>
									<li><a href="#">历史投诉</a></li>
									<li><a href="#">黑卡举报</a></li>
								</ul>
							</li>
							<li>
								<a href="#">更多电子服务<i></i></a>
								<ul class="grid-ul-2 hide">
									<li><a href="#">手机营业厅</a></li>
									<li><a href="#">短信营业厅</a></li>
									<li><a href="#">微信营业厅</a></li>
									<li><a href="#">手机商城</a></li>
								</ul>
							</li>
							<li><a href="#">企业门户</a></li>
							<li><a href="#">网站地图</a></li>
							<li><a href="#">English</a></li>
						</ul>

					</div>
				</div>
			</div>
			<div style="font-size:15px;color:red;text-align:right;background:yellow;">您正在使用IPv4访问网上营业厅。</div>
			<div class="header-grid-bottom">
				<div class="grid-flex">
					<div class="header-grid-bottom-left">
						<img src="../../static/img/logo1.png" alt="">
						<span><img src="../../static/img/dingwei.png" alt="">
							<a href="#">北京<i></i></a></span>
						<img src="../../static/img/ipv6.png" alt="">
					</div>
					<div class="header-grid-bottom-right">
						<div>
							<span>商品<i></i></span>
							<input type="text" placeholder="iPhone 8">
							<span><img src="../../static/img/search_black.png" alt=""></span>
						</div>
					</div>
				</div>
			</div>
			<!--导航栏-->
			<div class="header-grid-nav">
				<div class="grid-nav">
					<ul>
						<li><a href="#">首页</a></li>
						<li>
							<img src="../../static/img/hot.png" alt="">
							<a href="#">查询</a>
							<div class="grid-nav-down">
								<div>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_1.png">
											<span>话费业务查询 ></span>
										</span>
										<li><a href="#">实时话费</a></li>
										<li><a href="#">账户余额</a></li>
										<li><a href="#">历史账单</a></li>
										<li><a href="#">通话详情</a></li>
										<li><a href="#">话费购</a></li>
										<li><a href="#">集团账户账单</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_2.png">
											<span>上网卡充值业务查询 ></span>
										</span>
										<li><a href="#">上网卡号查询</a></li>
										<li><a href="#">充值卡状态查询</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_3.png">
											<span>流量业务查询 ></span>
										</span>
										<li><a href="#">手机上网记录</a></li>
										<li><a href="#">上网流量详单</a></li>
										<li><a href="#">流量包订购记录</a></li>
										<li><a href="#">流量币查询</a></li>
										<li><a href="#">WLAN详单</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_4.png">
											<span>其他业务查询 ></span>
										</span>
										<li><a href="#">短、彩信详</a></li>
										<li><a href="#">单短信指令查询</a></li>
										<li><a href="#">增值业务详单</a></li>
										<li><a href="#">信用额度调整</a></li>
										<li><a href="#">历史查询</a></li>
										<li><a href="#">集团账户账单</a></li>
										<li><a href="#">沃商店详单</a></li>
										<li><a href="#">沃信用分</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_5.png">
											<span>基本业务查询 ></span>
										</span>
										<li><a href="#">我的基本信息</a></li>
										<li><a href="#">余量查询</a></li>
										<li><a href="#">积分查询</a></li>
										<li><a href="#">业务办理</a></li>
										<li><a href="#">记录电子发票</a></li>
										<li><a href="#">电子受理单查询</a></li>
										<li><a href="#">合约期查询</a></li>
										<li><a href="#">赠款信息查询</a></li>
										<li><a href="#">我已订购</a></li>
										<li><a href="#">使用量分析</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_6.png">
											<span>话费专区 ></span>
										</span>
										<li><a href="#">资费专区</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_7.png">
											<span>宽带/固话业务查询 ></span>
										</span>

										<li><a href="#">宽带装移修进度</a></li>
										<li><a href="#">宽带账号查询</a></li>
									</ul>
									<ul class="clearfloat">
										<span>
											<img src="../../static/img/nav_8.png">
											<span>沃世界 ></span>
										</span>

										<li><a href="#">沃家庭共享时长查询</a></li>
										<li><a href="#">智慧沃家成员</a></li>
										<li><a href="#">主副卡成员</a></li>
										<li><a href="#">沃享套餐成员</a></li>
										<li><a href="#">我的号码</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li><a href="#">办理</a></li>
						<li><router-link to="/recharge">缴费</router-link></li>
						<li>|</li>
					</ul>
					<ul>
						<li><router-link to="/phoneNumber">号码/套餐</a></router-link>
						<li><a href="#">手机/配件</a></li>
						<li><img src="../../static/img/hot.png" alt="">
							<a href="#">宽带</a></li>
						<li><a href="#">上网卡</a></li>
						<li><a href="#">流量包</a></li>
						<li><a href="#">充值卡</a></li>
						<li>|</li>
					</ul>
					<ul>
						<li><router-link to="/mallindex">商城</router-link></li>
						<li><a href="#">特色专区</a></li>
						<li><a href="#">出境漫游</a></li>
						<li><a href="#">特惠</a></li>
						<li>|</li>
					</ul>
					<ul>
						<li><a href="#">积分商城</a></li>
						<li><router-link to="/nologinCustomer">我的联通</router-link></li>
					</ul>
				</div>
			</div>
		</div>
		<!--carousel-one-->
		<div class="carousel-one">
			<ul class="imgs">
				<li><img src="../../static/img/carousel_1.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_2.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_3.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_4.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_5.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_6.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_7.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_8.jpg" alt=""></li>
				<li><img src="../../static/img/carousel_9.jpg" alt=""></li>
			</ul>
			<!--小圆点-->
			<ul class="nums"></ul>
			<div class="carousel-one-money">
				<div class="carousel-one-money-top clearfloat">
					<ul>
						<li class="active">20元</li>
						<li>30元</li>
						<li>50元</li>
						<li>100元</li>
						<li>300元</li>
					</ul>
					<span>自定义</span>
					<input type="text" placeholder="请输入电话/固话号码">
					<p>
						<span>支付金额￥</span>
						<span>20.00元</span>
						<a href="#">充值</a>
					</p>
				</div>
				<div class="carousel-one-money-bottom">
					<div>
						<img src="../../static/img/broadcast_icon_zhl.png">
						<span>公告</span>
						<a href="#">更多></a>
					</div>
					<ul>
						<li>北京OCS系统维护业务公告</li>
						<li>中国联合网络通信有限公司北京市分公司公告</li>
					</ul>
				</div>
			</div>
		</div>
		<!--carousel-bottom-->
		<div class="carousel-bottom" style="background-color:#fff">
			<div class="car-bottom clearfloat">
				<ul class="car-bottom-ul">
					<li>
						<div class="car-bottom-img">
							<img src="../../static/img/search_icon2_zhl.png" alt="">
						</div>
						<div class="car-bottom-content">
							<p>查询</p>
							<ul>
								<li><a href="#">实时话费</a></li>
								<li><a href="#">账户余额</a></li>
								<li><a href="#">历史账单</a></li>
								<li><a href="#">余量查询</a></li>
								<li><a href="#">订单实时查询</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="car-bottom-img">
							<img src="../../static/img/manage_icon_zhl.png" alt="">
						</div>
						<div class="car-bottom-content">
							<p>办理</p>
							<ul>
								<li><a href="#">4G套餐变更</a></li>
								<li><a href="#">流量半年包</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="car-bottom-img">
							<img src="../../static/img/pay_icon_zhl.png" alt="">
						</div>
						<div class="car-bottom-content">
							<p>交费</p>
							<ul>
								<li><a href="#">手机/上网卡交费</a></li>
								<li><a href="#">固话交费</a></li>
								<li><a href="#">宽带交费</a></li>
								<li><a href="#">购买充值卡</a></li>
							</ul>
						</div>
					</li>
					<li>
						<div class="car-bottom-img">
							<img src="../../static/img/life.png" alt="">
						</div>
						<div class="car-bottom-content">
							<p>生活</p>
							<ul>
								<li><a href="#">手机号归属地查询</a></li>
								<li><a href="#">营业厅查询</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--box-one-->
		<div class="box-one clearfloat" id="box-one">
			<div class="box-one-content clearfloat">
				<div class="box-one-content-top">
					<h3>联通精选</h3>
				</div>
				<div class="box-one-content-middle">
					<ul>
						<li class="active">人气推荐</li>
						<li>特色专区</li>
					</ul>
				</div>
				<ul class="box-one-content-bottom">
					<li @click="gotaocan(3)">
						<p>小冰神卡</p>
						<p>流量敞开用套餐合约</p>
						<p>99元冰淇淋套餐</p>
						<p>预存49得99</p>
						<img src="../../static/img/cream_icon1l.jpg" alt="">
						<div>
							<span>
								<img src="../../static/img/collect_icon1_zhl.png" alt="">
							</span>
							<ul>
								<li>流量敞开用套餐合约</li>
								<li>激活赠送腾讯视频会员</li>
							</ul>
						</div>
					</li>
					<li @click="gotaocan(1)">
						<p>全国流量王</p>
						<p>激活送电子券</p>
						<p>新品上架</p>
						<p>可办理副卡</p>
						<img src="../../static/img/cream_icon1l.jpg" alt="">
						<div>
							<span>
								<img src="../../static/img/collect_icon1_zhl.png" alt="">
							</span>
							<ul>
								<li>可办理4张副卡</li>
							</ul>
						</div>
					</li>
					<li @click="gotaocan(5)">
						<p>大冰神卡</p>
						<p>流量敞开用套餐合约</p>
						<p>199元冰淇淋套餐</p>
						<p>预存99得199</p>
						<img src="../../static/img/cream_icon1l.jpg" alt="">
						<div>
							<span>
								<img src="../../static/img/collect_icon1_zhl.png" alt="">
							</span>
							<ul>
								<li>流量敞开用套餐合约</li>
							</ul>
						</div>
					</li>
					<li @click="gotaocan(4)">
						<p>日租卡升级版</p>
						<p>一元日租卡</p>
						<p>存50送50</p>
						<p>不花一分钱</p>
						<img src="../../static/img/cream_icon1l.jpg" alt="">
						<div>
							<span>
								<img src="../../static/img/collect_icon1_zhl.png" alt="">
							</span>
							<ul>
								<li>不用花一分钱</li>
							</ul>
						</div>
					</li>
				</ul>
				<ul class="box-one-content-bottom hide">
					<li>
						<p>号卡专区</p>
						<p>冰淇淋套餐敞开用</p>
						<img src="../../static/img/wo4.png" alt="">
					</li>
					<li>
						<p>宽带专区</p>
						<p>双百兆宽带</p>
						<img src="../../static/img/kdzq.png" alt="">
					</li>
					<li>
						<p>热销终端专区</p>
						<p>新品上市</p>
						<img src="../../static/img/rx.png" alt="">
					</li>
					<li>
						<p>老客户专区</p>
						<p>老客户回馈</p>
						<img src="../../static/img/lyh.png" alt="">
					</li>
				</ul>
			</div>
		</div>
		<!--box-two-->
		<div class="box-two clearfloat" id="box-two">
			<div class="box-two-content clearfloat">
				<div class="box-two-content-top">
					<div class="box-two-content-top-left">
						<h3>流量专区</h3>
						<ul>
							<li><a href="#">上网记录</a></li>
							<li>/</li>
							<li><a href="#">流量详单</a></li>
							<li>/</li>
							<li><a href="">订购记录</a></li>
						</ul>
						<span>
							<a href="#">更多</a>
							<a href="#">></a>
						</span>
					</div>
					<div class="box-two-content-top-right">
						<h3>宽带专区</h3>
						<ul>
							<li><a href="#">全家福</a></li>
							<li>/</li>
							<li><a href="#">包年续费</a></li>
							<li>/</li>
							<li><a href="">IPTV</a></li>
						</ul>
						<span>
							<a href="#">更多</a>
							<a href="#">></a>
						</span>
					</div>
				</div>
				<div class="box-two-content-middle">
					<div class="box-two-content-middle-left">
						<img src="../../static/img/two_1.jpg" alt="">
						<span>
							<h4>WO+视频定向流量包</h4>
							<p>6类定向流量包</p>
							<img src="../../static/img/two_white.png" alt="">
						</span>
					</div>
					<div class="box-two-content-middle-center">
						<img src="../../static/img/two_2.jpg" alt="">
						<span>
							<h4>日租流量包</h4>
							<p>2元白菜价~</p>
							<img src="../../static/img/two_white.png" alt="">
						</span>
					</div>
					<div class="box-two-content-middle-right">
						<img src="../../static/img/two_3.jpg" alt="">
						<div>
							<h4>百兆双宽带</h4>
							<p>5张号卡流量敞开用</p>
						</div>
					</div>
				</div>
				<div class="box-two-content-bottom">
					<div>
						<ul class="clearfloat">
							<li>
								<p>全国流量半年包</p>
								<p>30元1GB,半年有效</p>
								<img src="../../static/img/llb_icon1_zhl.png" alt="">
							</li>
							<li>
								<p>流量月包</p>
								<p>全年流量</p>
								<img src="../../static/img/llb_icon2_zhl.png" alt="">
							</li>
							<li>
								<p>流量加油包</p>
								<p>办理立即生效</p>
								<img src="../../static/img/llb_icon3_zhl.png" alt="">
							</li>
							<li>
								<p>300M单宽带8折</p>
								<p>30元1GB,半年有效</p>
								<img src="../../static/img/kdzq_pic1.jpg" alt="">
							</li>
							<li>
								<p>宽带+号卡</p>
								<p>低至106元/月</p>
								<img src="../../static/img/kdzq_pic1.jpg" alt="">
							</li>
							<li>
								<p>智慧沃家全家福</p>
								<p>全家手机宽带敞开用</p>
								<img src="../../static/img/kdzq_pic3.jpg" alt="">
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--box-three-->
		<div class="box-three clearfloat" id="box-three">
			<div class="box-three-content">
				<div class="box-three-content-top clearfloat">
					<div class="box-three-content-top-left clearfloat">
						<h3>4G套餐</h3>
						<ul class="clearfloat">
							<li><a href="#">冰淇淋套餐</a></li>
							<li>/</li>
							<li><a href="#">全国套餐</a></li>
							<li>/</li>
							<li><a href="">本地套餐</a></li>
						</ul>
						<span>
							<a href="#">更多</a>
							<a href="#">></a>
						</span>
					</div>
					<div class="box-three-content-top-right">
						<h3>靓号专区</h3>
						<ul>
							<li><a href="#">166</a></li>
							<li>/</li>
							<li><a href="#">185</a></li>
							<li>/</li>
							<li><a href="#">156</a></li>
							<li>/</li>
							<li><a href="#">176</a></li>
							<li>/</li>
							<li><a href="#">186</a></li>
						</ul>
						<span>
							<a href="#">更多</a>
							<a href="#">></a>
						</span>
					</div>
				</div>
				<div class="box-three-content-bottom">
					<div class="box-three-content-bottom-left clearfloat">
						<div class="box-three-ul-top clearfloat">
							<ul class="clearfloat">
								<li>
									<img src="../../static/img/4G_top_bg1.jpg" alt="">
									<span>
										<p>小兵神卡</p>
										<p>国内流量敞开用</p>
										<p>立即购买</p>
										<img src="../../static/img/crazy_Day_fc.png" alt="">
									</span>
								</li>
								<li>
									<img src="../../static/img/4G_top_bg2.jpg" alt="">
									<span>
										<p>全国流量王</p>
										<p>可办理副卡</p>
										<p>立即购买</p>
										<img src="../../static/img/crazy_Day_fc.png" alt="">
									</span>
								</li>
							</ul>
						</div>
						<div class="box-three-ul-bottom">
							<ul>
								<li>
									<p>日租卡升级版</p>
									<p>一元日租卡/三元敞开用</p>
									<div style="background-image:url(../../static/img/phone_Card_icon2.png)">
										<p>存50送50</p>
										<p>不用花一分钱</p>
										<img src="../../static/img/chang_icon.png" alt="">
									</div>
								</li>
								<li>
									<p>大兵神卡</p>
									<p>全国流量敞开用</p>
									<div style="background-image:url(../../static/img/phone_Card_icon2.png)">
										<p>流量通话常考用</p>
										<p>存99得199</p>
										<img src="../../static/img/group_icon.png" alt="">
									</div>
								</li>
								<li>
									<p>4G全国套餐</p>
									<p>全国哪用都一样</p>
									<div style="background-image:url(../../static/img/phone_Card_icon2.png)">
										<p>用的放心</p>
										<p>56~596元/月</p>
										<img src="../../static/img/country_icon.png" alt="">
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="box-three-content-bottom-right clearfloat">
						<ul>
							<li>
								<img src="../../static/img/wjx_active.png">
								<span>特色靓号</span>
							</li>
							<li>
								<img src="../../static/img/heart_icon1.png">
								<span>马车精品号</span>
							</li>
							<li>
								<img src="../../static/img/date_icon.png">
								<span>纪念日靓号</span>
							</li>
						</ul>
						<div class="carousel-two">
							<ul class="numbers clearfloat">
								<li>
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
									<img src="../../static/img/numberFg_icon.png">
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
								</li>
								<li>
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
									<img src="../../static/img/numberFg_icon.png">
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
								</li>
								<li>
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
									<img src="../../static/img/numberFg_icon.png">
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
								</li>
								<li>
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
									<img src="../../static/img/numberFg_icon.png">
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
								</li>
								<li>
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
									<img src="../../static/img/numberFg_icon.png">
									<ul>
										<li><b>15611865</b><span>222</span></li>
										<li><b>15611750</b><span>222</span></li>
										<li><b>15600986</b><span>222</span></li>
										<li><b>13126905</b><span>222</span></li>
										<li><b>13121627</b><span>222</span></li>
									</ul>
								</li>
							</ul>
							<ul class="circles clearfloat"></ul>
						</div>
						<div class="carousel-two-btn">
							<img src="../../static/img/change_icon.png">
							<span>换一换</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--box-four-->
		<div class="box-four" id="box-four">
			<div class="box-four-content">
				<div class="box-four-content-top">
					<h3>手机</h3>
					<ul class="clearfloat">
						<li><a href="#">存费送机</a></li>
						<li>/</li>
						<li><a href="#">购机送费</a></li>
						<li>/</li>
						<li><a href="#">老用户购机</a></li>
						<li>/</li>
						<li><a href="#">裸机</a></li>
						<li>/</li>
						<li><a href="#">信用分期</a></li>
					</ul>
					<span>
						<a href="#">更多</a>
						<a href="#">></a>
					</span>
				</div>
				<div class="box-four-content-bottom clearfloat">
					<ul>
						<li @click="godetail(2)">
							<img src="../../static/img/four_1.jpg">
							<p>iPhone XS/Max搭配冰淇淋套餐任性用</p>
							<p>XS Max 支持双卡</p>
							<p>￥ 8699</p>
							<p>新品</p>
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
						</li>
						<li>
							<ul>
								<li@click="godetail(11)">
									<p>vivo X21A 无...</p>
									<p>无合约版</p>
									<p>￥ 2518</p>
									<p>热卖</p>
									<img src="../../static/img/four_2.jpg">
									<div>
										<span>
											<img src="../../static/img/collect_icon1_zhl.png" alt="">
										</span>
										<ul>
											<li>流量敞开用套餐合约</li>
											<li>激活赠送腾讯视频会员</li>
										</ul>
									</div>
						</li>
						<li@click="godetail(9)">
							<p>OPPO R15 无...</p>
							<p>无合约版</p>
							<p>￥ 2429</p>
							<p>热卖</p>
							<img src="../../static/img/four_3.jpg">
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
							</li>
					</ul>
					</li>
					<li@click="godetail(3)">
						<img src="../../static/img/four_4.jpg">
						<p>iPhone XS无合约版</p>
						<p>新品首发</p>
						<p>￥ 8680</p>
						<p>新品</p>
						<div>
							<span>
								<img src="../../static/img/collect_icon1_zhl.png" alt="">
							</span>
							<ul>
								<li>流量敞开用套餐合约</li>
								<li>激活赠送腾讯视频会员</li>
							</ul>
						</div>
						</li>
						<li@click="godetail(8)">
							<img src="../../static/img/four_5.jpg">
							<p>华为 P20 无合约版</p>
							<p>4000晚徕卡三摄</p>
							<p>￥ 2975</p>
							<p>热卖</p>
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
							</li>
							</ul>
				</div>
			</div>
		</div>
		<!--box-five-->
		<div class="box-five" id="box-five">
			<div class="box-five-content clearfloat">
				<div class="box-five-content-top">
					<h3>明星单品</h3>
					<ul class="clearfloat">
						<li><a href="#">热销</a></li>
					</ul>
					<span>
						<a href="#">更多</a>
						<a href="#">></a>
					</span>
				</div>
				<div class="box-five-content-bottom clearfloat">
					<ul>
						<li>
							<div style="background:url(../../static/img/phone_Card_icon2.png)">
								<p>398任性用</p>
								<p>合约</p>
							</div>
							<p>小米8 冰淇淋合约</p>
							<p>￥2999</p>
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
						</li>
						<li>
							<div style="background:url(../../static/img/phone_Card_icon2.png)">
								<p>新品上市</p>
								<p>激活送电子卷</p>
							</div>
							<p>全国流量王</p>
							<p>￥50</p>
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
						</li>
						<li>
							<div style="background:url(../../static/img/phone_Card_icon2.png)">
								<p>存50送50</p>
								<p>不用花一分钱</p>
							</div>
							<p>日租卡升级版</p>
							<p>￥0</p>
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
						</li>
						<li>
							<div style="background:url(../../static/img/phone_Card_icon2.png)">
								<p>新品首发</p>
								<p>送2500电子券</p>
							</div>
							<p>手机宽带畅快用</p>
							<p>￥1500</p>
							<div>
								<span>
									<img src="../../static/img/collect_icon1_zhl.png" alt="">
								</span>
								<ul>
									<li>流量敞开用套餐合约</li>
									<li>激活赠送腾讯视频会员</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--box-six-->
		<div class="box-six" id="box-six">
			<div class="box-six-content">
				<div class="box-six-content-top clearfloat">
					<h3>生活服务</h3>
					<ul class="clearfloat">
						<li><a href="#">专业专注新联通,尽善尽美新服务</a></li>
					</ul>
					<span>
						<a href="#">更多</a>
						<a href="#">></a>
					</span>
				</div>
				<div class="box-six-content-bottom clearfloat">
					<ul>
						<li>
							<img src="../../static/img/six_1.png">
							<p>营业厅查询</p>
						</li>
						<li>
							<img src="../../static/img/six_2.png">
							<p>号码对属地</p>
						</li>
						<li>
							<img src="../../static/img/six_3.png">
							<p>领500M</p>
						</li>
						<li>
							<img src="../../static/img/six_4.png">
							<p>旧机换话费</p>
							<div>
								<img src="../../static/img/erweima.png">
								<p>扫码查看</p>
							</div>
						</li>
						<li>
							<img src="../../static/img/six_5.png">
							<p>帮助中心</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--footer-->
		<div class="footer clearfloat">
			<div class="footer-content clearfloat">
				<div class="footer-content-top clearfloat">
					<ul>
						<li>购物指南</li>
						<li><a href="#">购物流程</a></li>
						<li><a href="#">发票说明</a></li>
						<li><a href="#">联系客服</a></li>
						<li><a href="#">服务协议</a></li>
						<li><a href="#">隐私政策</a></li>
					</ul>
					<ul>
						<li>支付方式</li>
						<li><a href="#">在线支付</a></li>
						<li><a href="#">快捷支付</a></li>
						<li><a href="#">货到付款</a></li>
					</ul>
					<ul>
						<li>配送方式</li>
						<li><a href="#">快递配送</a></li>
						<li><a href="#">上门自提</a></li>
					</ul>
					<ul>
						<li>售后服务</li>
						<li><a href="#">退换货政策</a></li>
						<li><a href="#">退换货流程</a></li>
						<li><a href="#">退款说明</a></li>
						<li><a href="#">手机维修</a></li>
					</ul>
					<ul>
						<li>其他服务</li>
						<li><a href="#">充值交费</a></li>
						<li><a href="#">营业厅分布查询</a></li>
						<li><a href="#">号码归属地查询</a></li>
						<li><a href="#">常见问题</a></li>
						<li><a href="#">网站备案须知</a></li>
					</ul>
					<ul>
						<li>
							<p>APP下载</p>
							<img src="../../static/img/downLoad.png">
						</li>
						<li>
							<div>Android 下载</div>
							<div>ios下载</div>
						</li>
						<li>
							<p>关注我们</p>
							<img src="../../static/img/WeChat_icon2_zhl.png">
							<img src="../../static/img/Sina_icon2_zhl.png">
						</li>
					</ul>
				</div>
				<div class="footer-content-bottom">
					<div class="clearfloat">
						<ul>
							<li>企业法人营业执照</li>
							<li>|</li>
							<li>基础电信业务经营许可证</li>
							<li>|</li>
							<li>增值电信业务经营许可证</li>
							<li>|</li>
							<li>网络文化经营许可证</li>
						</ul>
					</div>
					<div>Copyright©1999-2018 中国联通 版权所有</div>
					<div>中华人民共和国增值电信业务经营许可证 经营许可证编号：A2.B1.B2-20090003</div>
					<div>
						<img src="../../static/img/backup_gs.jpg">
						<img src="../../static/img/cx.jpg">
						<img src="../../static/img/kxsfyz.jpg">
					</div>
				</div>
			</div>
		</div>
		<!--右侧固定导航-->
		<div class="nav-right">
			<ul>
				<li>
					<img src="../../static/img/online_dg_active.png">
					<p>导购</p>
				</li>
				<li>
					<img src="../../static/img/online_kf_active.png">
					<p>客服</p>
				</li>
				<li>
					<img src="../../static/img/survey_ques_active.png">
					<p>问卷</p>
				</li>
				<li>
					<a href="#"><img src="../../static/img/back_top_active.png"></a>
				</li>
			</ul>
		</div>
		<!--左侧固定导航-->
		<div class="nav-left">
			<img src="../../static/img/wo_icon_zhl.png">
			<ul>
				<li><a href="#box-one">联通精选</a></li>
				<li><a href="#box-two">流量/宽带</a></li>
				<li><a href="#box-three">套餐/靓号</a></li>
				<li><a href="#box-four">手机/配件</a></li>
				<li><a href="#box-five">明星单品</a></li>
				<li><a href="#box-six">生活服务</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.jquery()
		},
		methods: {
			jquery() {
				var i = 0;
				var timer = null;
				for (var j = 0; j < $(".imgs li").length; j++) {
					$(".nums").append("<li></li>")
				}
				//给第一个圆点添加样式
				$(".nums li").first().addClass("active");
				//复制第一张图片
				var firstimg = $(".imgs li").first().clone();
				//第一张图片放到最后一张图片之后，设置ul的宽度为图片张数*图片宽度
				$(".imgs").append(firstimg).width($(".imgs li").length * ($(".imgs img").width()));
				//鼠标滑入圆点
				$(".nums li").mouseover(function() {
					var _index = $(this).index();
					$(".imgs").stop().animate({
						left: -_index * 1920
					}, 500);
					$(".nums li").eq(_index).addClass("active").siblings().removeClass("active");
				})
				//定时器自动播放
				timer = setInterval(function() {
					i++;
					if (i == $(".imgs li").length) {
						i = 1;
						$(".imgs").css({
							left: 0
						});
					};
					$(".imgs").stop().animate({
						left: -i * 1920
					}, 500);
					if (i == $(".img li").length - 1) {
						$("nums li").eq(0).addClass("active").siblings().removeClass("active");
					} else {
						$(".nums li").eq(i).addClass("active").siblings().removeClass("active");
					}
				}, 4000)
				//鼠标移动暂停，移出，开始
				$(".carousel-one").hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						i++;
						if (i == $(".imgs li").length) {
							i = 1;
							$(".imgs").css({
								left: 0
							});
						};
						$(".imgs").stop().animate({
							left: -i * 1920
						}, 500);
						if (i == $(".img li").length - 1) {
							$("nums li").eq(0).addClass("active").siblings().removeClass("active");
						} else {
							$(".nums li").eq(i).addClass("active").siblings().removeClass("active");
						}
					}, 4000);
				})
				//carousel-two
				//创建小圆点
				var k = 0;
				var timer2 = null;
				for (var j = 0; j < $(".numbers>li").length; j++) {
					$(".circles").append("<li></li>")
				}
				//给第一个圆点添加样式
				$(".circles>li").first().addClass("active");
				//复制第一张图片
				var firstimg = $(".numbers>li").first().clone();
				//第一张图片放到最后一张图片之后，设置ul的宽度为图片张数*图片宽度
				$(".numbers").append(firstimg).width($(".numbers>li").length * ($(".numbers").width()));
				//鼠标滑入圆点
				$(".circles>li").on("mouseover", function() {
					var _index2 = $(this).index();
					$(".numbers").stop().animate({
						left: -_index2 * 582
					}, 1000);
					$(".circles>li").eq(_index2).addClass("active").siblings().removeClass("active");
				})
				//定时器自动播放
				timer2 = setInterval(function() {
					k++;
					if (k == $(".numbers>li").length) {
						k = 1;
						$(".numbers").css({
							left: 0
						});
					};
					$(".numbers").stop().animate({
						left: -k * 582
					}, 1000);
					if (k == $(".number li").length - 1) {
						$(".circles>li").eq(0).addClass("active").siblings().removeClass("active");
					} else {
						$(".circles li").eq(i).addClass("active").siblings().removeClass("active");
					}
				}, 10000)
				//鼠标移动暂停，移出，开始
				$(".carousel-two").hover(function() {
					clearInterval(timer2);
				}, function() {
					timer2 = setInterval(function() {
						k++;
						if (k == $(".numbers>li").length) {
							k = 1;
							$(".numbers").css({
								left: 0
							});
						};
						$(".numbers").stop().animate({
							left: -k * 582
						}, 1000);
						if (k == $(".number>li").length - 1) {
							$(".circles>li").eq(0).addClass("active").siblings().removeClass("active");
						} else {
							$(".circles>li").eq(k).addClass("active").siblings().removeClass("active");
						}
					}, 10000);
				})
				$(".carousel-two-btn").click(function() {
					k++;
					if (k == $(".numbers>li").length) {
						k = 1;
						$(".numbers").css({
							left: 0
						});
					};
					$(".numbers").stop().animate({
						left: -k * 582
					}, 1000);
					if (k == (".numbers>li").length - 1) {
						$(".circles>li").eq(0).addClass("active").siblings().removeClass("active");
					} else {
						$('.circles>li').eq(k).addClass('active').siblings().removeClass('active');
					}
				})
				$(window).scroll(function() {
					if ($(window).scrollTop() > 600) {
						$(".nav-left").css("display", "block");
					} else {
						$(".nav-left").css("display", "none");
					}
				})

				//one
				$(".box-one-content-middle>ul>li").mouseover(function() {
					var $ulone = $(this).parent().parent().next();
					var $ultwo = $(this).parent().parent().next().next();

					if ($(this).html() == "特色专区") {
						$(this).addClass("active");
						$(this).prev().removeClass("active");
						$ultwo.removeClass("hide");
						$ulone.addClass("hide");
					} else {
						$(this).next().removeClass("active");
						$(this).addClass("active");
						$ulone.removeClass("hide");
						$ultwo.addClass("hide");
					}
				})
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
			
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	.header-grid {
		background: #333;
		width: 100%;
		min-width: 1200px;
		height: 36px;
		position: relative;
	}

	.width1200 {
		width: 1200px;
		min-width: 1200px;
		position: relative;
		margin: 0 auto;
	}

	.width1200 span a:hover {
		text-decoration: none;
		color: #aaa;
	}

	.header-grid-left {
		float: left;
		margin: 7px 0;
	}

	.header-grid-left>a {
		text-decoration: none;
		color: #aaa;
		font-size: 12px;
	}

	.header-grid-right {
		float: right;
		margin: 7px 0;
		margin-right: 100px;
	}

	.header-grid-right>ul>li {
		list-style: none;
		float: left;
		margin-right: 10px;
	}

	.header-grid-right>ul>li>a {
		text-decoration: none;
		color: #aaa;
		font-size: 12px;
	}

	.header-grid-right>ul>li>a:hover {
		color: #fff;
	}

	.header-grid-right2 {
		float: right;
		margin: 7px 0;
	}

	.header-grid-right2>a {
		color: #aaa;
		font-size: 12px;
		text-decoration: none;
	}

	.grid>li>a>i {
		display: inline-block;
		border-top: 4px solid #777;
		margin-left: 5px;
		padding-bottom: 2px;
		border-right: 4px solid transparent;
		border-left: 4px solid transparent;
		transition: all .5s;
	}

	.grid>li>a:hover>i{
		transform: rotate(180deg);
		border-top:4px solid #fff;
	}

	.grid-ul {
		position: absolute;
		top: 35px;
		left: 1120px;
		border: 1px solid #ddd;
		background: #f8f8f8;
	}

	.grid-ul>li {
		text-align: center;
		list-style: none;
		padding: 5px 15px;
	}

	.grid-ul-2>li>a {
		color: #000;
		font-size: 12px;
		text-decoration: none;
	}

	.grid-ul-2 {
		position: absolute;
		top: 35px;
		border: 1px solid #ddd;
		background: #f8f8f8;
	}

	.grid-ul-2>li {
		text-align: center;
		list-style: none;
		padding: 5px 15px;
	}

	.grid-ul-2>li>a {
		color: #000;
		font-size: 12px;
		text-decoration: none;
	}

	.header-grid-bottom-left {
		float: left;
		margin-top: 23px;
		text-align: center;
	}

	.header-grid-bottom-left span {
		display: inline-block;
		width: 93px;
		height: 26px;
		line-height: 26px;
		border: 1px solid #ff6600;
		border-radius: 15px;
	}

	.header-grid-bottom-left span>a {
		color: #ff6600;
		padding: 0 5px;
	}

	.header-grid-bottom-left span i {
		display: inline-block;
		border-top: 4px solid #ff6600;
		margin-left: 5px;
		padding-bottom: 2px;
		border-right: 4px solid transparent;
		border-left: 4px solid transparent;
		transition: all .5s;

	}

	.header-grid-bottom-right {
		float: right;
		border: none;
		border-radius: 5px;
		width: 340px;
		height: 36px;
		margin-top: 43px;
		background: #f7f7f7;
	}

	.header-grid-bottom-right input {
		border: none;
		width: 246px;
		height: 36px;
		background: #f7f7f7;
		border-left: 1px solid #ddd;
		padding-left: 5px;
	}

	.header-grid-bottom-right input:focus {
		outline: none;
	}

	.grid-flex {
		width: 1200px;
		min-width: 1200px;
		height: 80px;
		position: relative;
		margin: 0 auto;
	}

	.header-grid-bottom-right>div>span:first-child {
		padding: 5px 10px;
		color: #666;
	}

	.header-grid-bottom-right>div>span:first-child>i {
		display: inline-block;
		border-top: 4px solid #777;
		margin-left: 5px;
		padding-bottom: 2px;
		border-right: 4px solid transparent;
		border-left: 4px solid transparent;
		transition: all .5s;
	}

	/*header-nav*/
	.grid-nav {
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
		margin-top: 19px;
	}

	.grid-nav>ul {
		list-style: none;
	}

	.grid-nav>ul>li {
		float: left;
		position: relative;
	}

	.grid-nav>ul>li>img {
		display: block;
		position: absolute;
		bottom: 18px;
		left: 14px;
	}

	.grid-nav>ul>li a {
		display: inline-block;
		height: 18px;
		font-size: 14px;
		padding: 0 16px;
		color: #000;
		font-weight: bold;
		border-radius: 10px;
		transition: all .2s;
	}

	.grid-nav>ul>li>a:hover {
		color: #fff;
		background: #ff6600;
		text-decoration: none;
	}

	.grid-nav>ul>li>a:hover+.grid-nav-down {
		display: block;
	}

	.grid-nav-down {
		width: 1910px;
		background-color: #fff;
		position: absolute;
		top: 22px;
		left: -420px;
		z-index: 1000;
		display: none;
	}

	.grid-nav-down>div {
		width: 1200px;
		margin: 0 auto;
	}

	.grid-nav-down>div ul {
		list-style: none;
	}

	.grid-nav-down>div>ul {
		width: 1200px;
		margin-top: 20px;
	}

	.grid-nav-down>div>ul>span {
		display: inline-block;
		float: left;
	}

	.grid-nav-down>div>ul>span>span {
		color: #FF6600;
	}

	.grid-nav-down>div>ul>li {
		float: left;
	}

	.grid-nav-down>div>ul>li>a {
		color: #666;
		font-weight: normal;
	}

	.grid-nav-down>div>ul>li>a:hover {
		color: #FF6600;
		text-decoration: none;
	}

	/*carousel-one*/
	div.carousel-one {
		position: relative;
		width: 100%;
		min-width: 1200px;
		height: 375px;
		overflow: hidden;
		margin-top: 15px;
	}

	.imgs {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: flex-start;

	}

	.imgs>li {
		/* float:left; */
		cursor: pointer;
	}

	.nums {
		list-style: none;
		position: absolute;
		width: 100%;
		text-align: -moz-center;
		bottom: 40px;
		margin-left: 40%;
	}

	.nums.active {
		background-color: #fff;
	}

	.nums li {
		width: 14px;
		height: 14px;
		background: #000;
		border: 1px solid #fff;
		border-radius: 100%;
		display: inline-block;
		cursor: pointer;
		margin: 0 5px;
		float: left;
	}

	/*carousel-one-money*/
	.carousel-one-money {
		position: absolute;
		right: 351px;
		top: 62px;
	}

	.carousel-one-money-top {
		width: 306px;
		height: 158px;
		background-color: rgba(0, 0, 0, .4);
		position: relative;
	}

	.carousel-one-money-top>ul {
		list-style: none;
		margin-top: 15px;
		margin-left: 15px;
	}

	.carousel-one-money-top>span {
		color: #fff;
		border: 1px solid #fff;
		border-radius: 8px;
		padding: 3px 5px;
		position: absolute;
		right: 14px;
		top: 13px;
		font-size: 10px;
		cursor: pointer;
	}

	.carousel-one-money-top>ul>li {
		float: left;
		padding: 0 5px;
		cursor: pointer;
		color: #fff;
		margin-top: 15px;
		font-size: 15px;
	}

	.carousel-one-money-top>input {
		width: 270px;
		height: 38px;
		margin-left: 18px;
		padding-left: 5px;
		margin-top: 10px;
	}

	.carousel-one-money-top>p {
		margin-left: 18px;
		margin-top: 5px;
	}

	.carousel-one-money-top>p>span {
		color: red;
		font-size: 10px;
	}

	.carousel-one-money-top>p>a {
		display: inline-block;
		width: 84px;
		height: 38px;
		background: #FF6600;
		color: #fff;
		padding-left: 28px;
		padding-top: 8px;
		margin-left: 75px;
	}

	.carousel-one-money-bottom {
		width: 306px;
		height: 96px;
		background: rgba(0, 0, 0, .5);
	}

	.carousel-one-money-bottom>div {
		border-bottom: 1px solid #fff;
		width: 270px;
		height: 31px;
		line-height: 31px;
		margin-left: 18px;
	}

	.carousel-one-money-bottom>div>a {
		margin-left: 170px;
		color: #fff;
		text-decoration: none;
	}

	.carousel-one-money-bottom>div>span {
		color: #fff;
	}

	.carousel-one-money-bottom>ul>li {
		font-size: 12px;
		color: #fff;
		margin-left: 35px;
		margin-top: 10px;
	}

	.carousel-one-money-top li:hover {
		background: #FF6600;
		border-radius: 15px;
	}

	.carousel-one-money-top li.active {
		background: #FF6600;
		border-radius: 15px;
	}

	/*carousel-bottom*/
	.car-bottom {
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
		/* border:1px solid red; */
	}

	.car-bottom-ul li {
		float: left;
		list-style: none;
	}

	.car-bottom-ul>li {
		width: 300px;
		height: 114px;
	}

	.car-bottom-img {
		float: left;
		width: 58px;
		height: 58px;
		margin-top: 18px;
	}

	.car-bottom-img>img {
		transition: all .2s;
	}

	.car-bottom-img>img:hover {
		margin-top: -2px;
	}

	.car-bottom-content {
		float: left;
		width: 200px;
		margin-top: 15px;
		margin-left: 18px;
	}

	.car-bottom-content>ul>li>a {
		text-decoration: none;
		color: #999;
		font-size: 12px;
		margin-right: 15px;
	}

	.car-bottom-content>ul>li>a:hover {
		color: #ff6600;
	}

	/*box-one*/
	.box-one-content {
		width: 1250px;
		min-width: 1250px;
		margin: 0 auto;
	}

	.box-one-content-top {
		text-align: center;
	}

	.box-one-content-top>h3 {
		font-weight: bold;
		margin: 25px 0;
	}

	.box-one-content-middle>ul>li {
		float: left;
		width: 98px;
		height: 22px;
		text-align: center;
		border-radius: 15px;
		line-height: 22px;
		cursor: pointer;
	}

	.box-one-content-middle>ul>li.active {
		background: #ff6600;
		color: #fff;
	}

	/* .box-one-content-middle>ul>li:hover{
    background:#ff6600;
	} */


	.box-one-content-middle>ul {
		list-style: none;
		width: 200px;
		height: 22px;
		background: #fff;
		border-radius: 15px;
		margin: 0 auto;
	}

	.box-one-content-bottom {
		list-style: none;
		margin-left: 25px;
		margin-top: 20px;
	}

	.box-one-content-bottom>li:nth-child(1)>p:nth-child(3) {
		position: absolute;
		top: 120px;
		left: 50%;
		margin-left: -49px;
		font-weight: bold;
	}

	.box-one-content-bottom>li:nth-child(1)>p:nth-child(4) {
		position: absolute;
		top: 140px;
		left: 50%;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		width: 118px;
		color: #fff;
		font-size: 9px;
	}

	.box-one-content-bottom>li:nth-child(2)>p:nth-child(3) {
		position: absolute;
		top: 120px;
		left: 50%;
		margin-left: -28px;
		font-weight: bold;
	}

	.box-one-content-bottom>li:nth-child(2)>p:nth-child(4) {
		position: absolute;
		top: 140px;
		left: 50%;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		color: #fff;
		font-size: 9px;
		width: 118px;
	}

	.box-one-content-bottom>li:nth-child(3)>p:nth-child(3) {
		position: absolute;
		top: 120px;
		left: 50%;
		margin-left: -53.5px;
		font-weight: bold;
	}

	.box-one-content-bottom>li:nth-child(3)>p:nth-child(4) {
		position: absolute;
		top: 140px;
		left: 50%;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		color: #fff;
		font-size: 9px;
		width: 118px;
	}

	.box-one-content-bottom>li:nth-child(4)>p:nth-child(3) {
		position: absolute;
		top: 120px;
		left: 50%;
		margin-left: -30px;
		font-weight: bold;
	}

	.box-one-content-bottom>li:nth-child(4)>p:nth-child(4) {
		position: absolute;
		top: 140px;
		left: 50%;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		color: #fff;
		font-size: 9px;
		width: 118px;
	}

	.box-one-content-bottom>li {
		width: 292px;
		height: 208px;
		float: left;
		position: relative;
		background-color: #fff;
		text-align: center;
		margin-right: 10px;
		border-top: 1px solid #ff6600;
		cursor: pointer;
		transition: all .3s;
		overflow: hidden;
	}

	.box-one-content-bottom>li>div {
		width: 292px;
		height: 0px;
		opacity: 0.8;
		text-align: left;
		background: #ff6600;
		position: absolute;
		bottom: 0;
		transition: all .3s;
	}

	.box-one-content-bottom>li>div>ul {
		padding: 10px 40px;
		list-style-type: disc;
	}

	.box-one-content-bottom>li>div>ul>li {
		color: #fff;
		font-size: 12px;
	}

	.box-one-content-bottom>li>div>span {
		display: block;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}

	.box-one-content-bottom>li>div>span>img {
		padding: 5px 10px;
	}

	.box-one-content-bottom>li:hover {
		box-shadow: 0 2px 55px 2px #ddd;
		margin-top: -2px;
	}

	.box-one-content-bottom>li:hover div {
		height: 100px;
	}

	.box-one-content-bottom>li>p:nth-child(1) {
		font-size: 18px;
		margin-top: 20px;
	}

	.box-one-content-bottom>li>p:nth-child(2) {
		font-size: 12px;
		color: #aaa;
	}

	.box-one-content-bottom>li>img {
		width: 150px;
		height: 130px;
		/* margin-top: px; */
	}

	/*box-two*/
	.box-two-content {
		width: 1210px;
		min-width: 1210px;
		margin: 0 auto;
	}

	.box-two-content-top-left {
		width: 594px;
		height: 82px;
		float: left;
	}

	.box-two-content-top-left h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-two-content-top-left ul {
		list-style: none;
		margin-left: 180px;
	}

	.box-two-content-top-left ul li {
		float: left;
		margin-left: 10px;
	}

	.box-two-content-top-left>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-two-content-top-left>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-two-content-top-left>span {
		float: right;
	}

	.box-two-content-top-left>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-two-content-top-left>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-two-content-top-right {
		width: 594px;
		height: 82px;
		float: right;
	}

	.box-two-content-top-right h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-two-content-top-right ul {
		list-style: none;
		margin-left: 180px;
	}

	.box-two-content-top-right ul li {
		float: left;
		margin-left: 10px;
	}

	.box-two-content-top-right>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-two-content-top-right>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-two-content-top-right>span {
		float: right;
	}

	.box-two-content-top-right>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-two-content-top-right>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-two-content-middle>div {
		float: left;
		margin-right: 10px;
		overflow: hidden;
		position: relative;
		cursor: pointer;
	}

	.box-two-content-middle>div>span {
		position: absolute;
		top: 0;
	}

	.box-two-content-middle>div>img {
		transition: all .5s;
	}

	.box-two-content-middle>div:hover>img {
		transform: scale(1.1);
	}

	.box-two-content-middle>div>span>h4 {
		position: absolute;
		top: 40px;
		left: 25%;
	}

	.box-two-content-middle>div>span>p {
		position: absolute;
		top: 85px;
		left: 50%;
		color: #ff6600;
	}

	.box-two-content-middle-right>div {
		width: 331px;
		height: 80px;
		border-radius: 10px;
		background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, .1));
		position: absolute;
		top: 45px;
		left: 50%;
	}

	.box-two-content-middle-right>div>h4 {
		font-weight: bold;
		border-bottom: 1px solid rgba(6, 6, 6, .1);
		margin-left: 30px;
		margin-top: 15px;
		padding-bottom: 5px;
	}

	.box-two-content-middle-right>div>p {
		margin-left: 30px;
		color: #ff6600;
	}

	.box-two-content-bottom>div>ul {
		list-style: none;
	}

	.box-two-content-bottom>div>ul>li {
		float: left;
		width: 192px;
		height: 245px;
		background: #fff;
		margin-right: 9px;
		margin-top: 9px;
		text-align: center;
		cursor: pointer;
		transition: all .2s;
	}

	.box-two-content-bottom>div>ul>li:hover {
		box-shadow: 0 2px 55px 2px #ddd;
		margin-top: 8px;
	}

	.box-two-content-bottom>div>ul>li>p:nth-child(1) {
		color: #000;
		font-size: 18px;
		margin-top: 30px;
	}

	.box-two-content-bottom>div>ul>li>p:nth-child(2) {
		color: #aaa;
		font-size: 12px;
		margin-bottom: 35px;
	}

	/*box-three*/
	.box-three-content {
		width: 1210px;
		min-width: 1210px;
		margin: 0 auto;
	}

	.box-three-content-top-left {
		width: 594px;
		height: 82px;
		float: left;
	}

	.box-three-content-top-left h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-three-content-top-left ul {
		list-style: none;
		margin-left: 180px;
	}

	.box-three-content-top-left ul li {
		float: left;
		margin-left: 10px;
	}

	.box-three-content-top-left>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-three-content-top-left>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-three-content-top-left>span {
		float: right;
		margin-top: -31px;
	}

	.box-three-content-top-left>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-three-content-top-left>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-three-content-top-right {
		width: 594px;
		height: 82px;
		float: left;
	}

	.box-three-content-top-right h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-three-content-top-right ul {
		list-style: none;
		margin-left: 180px;
	}

	.box-three-content-top-right ul li {
		float: left;
		margin-left: 10px;
	}

	.box-three-content-top-right>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-three-content-top-right>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-three-content-top-right>span {
		float: right;
	}

	.box-three-content-top-right>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-three-content-top-right>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-three-content-bottom-left {
		width: 594px;
		height: 415px;
		margin-top: 10px;
		float: left;
	}

	.box-three-ul-top ul {
		list-style: none;
	}

	.box-three-ul-top>ul>li:nth-child(1) {
		float: left;
		margin-right: 10px;
		position: relative;
		cursor: pointer;
		overflow: hidden;
	}

	.box-three-ul-top>ul>li:nth-child(2) {
		float: left;
		position: relative;
		cursor: pointer;
		overflow: hidden;
	}

	.box-three-ul-top>ul>li>img {
		transition: all .5s;
	}

	.box-three-ul-top>ul>li:hover>img {
		transform: scale(1.1);
	}

	.box-three-ul-top>ul>li>span {
		position: absolute;
		top: 35px;
		left: 30px;
	}

	.box-three-ul-top>ul>li>span>p:nth-child(1) {
		color: #000;
		position: absolute;
		top: 20px;
		left: 86px;
	}

	.box-three-ul-top>ul>li>span>p:nth-child(2) {
		color: #aaa;
		position: absolute;
		top: 45px;
		left: 80px;
	}

	.box-three-ul-top>ul>li>span>p:nth-child(3) {
		color: #ff6600;
		position: absolute;
		top: 65px;
		left: 82px;
		border: 1px solid #ff6600;
		border-radius: 10px;
		padding: 0 10px;
	}

	.box-three-ul-bottom ul {
		list-style: none;
	}

	.box-three-ul-bottom>ul>li {
		float: left;
		width: 191px;
		height: 245px;
		background: #fff;
		margin-right: 10px;
		text-align: center;
		cursor: pointer;
	}

	.box-three-ul-bottom>ul>li:hover {
		box-shadow: 0 2px 55px 2px #ddd;
		margin-top: -1px;
	}

	.box-three-ul-bottom>ul>li:nth-child(3) {
		margin-right: 0;
	}

	.box-three-ul-bottom>ul>li>div {
		width: 139px;
		height: 82px;
		margin: 40px auto;
		position: relative;
	}

	.box-three-ul-bottom>ul>li>div>img {
		float: right;
	}

	.box-three-ul-bottom>ul>li:nth-child(1)>div>p:nth-child(1) {
		font-weight: bold;
		position: absolute;
		top: 30px;
		left: 50%;
		margin-left: -29px;
	}

	.box-three-ul-bottom>ul>li:nth-child(1)>div>p:nth-child(2) {
		position: absolute;
		top: 50px;
		left: 50%;
		margin-left: -42px;
		font-size: 9px;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		width: 118px;
		color: #fff;
	}

	.box-three-ul-bottom>ul>li:nth-child(2)>div>p:nth-child(1) {
		font-weight: bold;
		position: absolute;
		top: 30px;
		left: 50%;
		margin-left: -49px;
	}

	.box-three-ul-bottom>ul>li:nth-child(2)>div>p:nth-child(2) {
		position: absolute;
		top: 50px;
		left: 50%;
		margin-left: -30.5px;
		font-size: 9px;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		width: 118px;
		color: #fff;
	}

	.box-three-ul-bottom>ul>li:nth-child(3)>div>p:nth-child(1) {
		font-weight: bold;
		position: absolute;
		top: 30px;
		left: 50%;
		margin-left: -28px;
	}

	.box-three-ul-bottom>ul>li:nth-child(3)>div>p:nth-child(2) {
		position: absolute;
		top: 50px;
		left: 50%;
		margin-left: -35.5px;
		font-size: 9px;
		margin-left: -59px;
		background-image: url(../../static/img/orageBG.png);
		width: 118px;
		color: #fff;
	}

	.box-three-ul-bottom>ul>li>p:nth-child(1) {
		margin-top: 32px;
		font-size: 16px;
	}

	.box-three-ul-bottom>ul>li>p:nth-child(2) {
		font-size: 12px;
		color: #aaa;
	}

	.box-three-content-bottom-right {
		float: left;
		width: 596px;
		height: 417px;
		margin-top: 10px;
		margin-left: 10px;
		background-color: #fff;
	}

	.box-three-content-bottom-right>ul {
		list-style: none;
	}

	.box-three-content-bottom-right>ul>li {
		float: left;
		width: 198px;
		height: 44px;
		background: #aaa;
		color: #fff;
		font-size: 17px;
		text-align: center;
		line-height: 44px;
		cursor: pointer;
	}

	.box-three-content-bottom-right>ul>li:nth-child(2) {
		border-left: 1px solid #fff;
		border-right: 1px solid #fff;
	}

	.box-three-content-bottom-right>ul>li:hover {
		background: #fff;
		color: #FF6600;
		border-bottom: 1px solid #FF6600;
	}

	/*carousel-two*/
	div.carousel-two {
		width: 594px;
		height: 230px;
		background: #fff;
		margin-top: 84px;
		position: relative;
		overflow: hidden;
	}

	div.carousel-two ul {
		list-style: none;
	}

	div.carousel-two>ul>li>ul {
		float: left;
		width: 290px;
		height: 220px;
		padding-left: 50px;
	}

	div.carousel-two>ul>li>img {
		float: left;
	}

	div.carousel-two>ul>li>ul>li {
		width: 240px;
		height: 20px;
		font-size: 16px;
		margin-top: 10px;
		margin-bottom: 24px;
	}

	div.carousel-two>ul>li>ul>li>b {
		font-weight: normal;
	}

	div.carousel-two>ul>li>ul>li>span {
		color: #FF6600;
	}

	.numbers {
		position: absolute;
		top: 0;
		left: 0;
	}

	.numbers>li {
		float: left;
	}

	.circles {
		position: absolute;
		bottom: 0;
		left: -6px;
		width: 100%;
		text-align: center;
		font-size: 0;
	}

	.circles>li {
		width: 10px;
		height: 10px;
		background: transparent;
		border-radius: 100%;
		display: inline-block;
		margin: 0 3px;
		cursor: pointer;
		border: 1px solid #FF6600;
	}

	.circles .active {
		background-color: #ff6600;
	}

	.carousel-two-btn {
		width: 107px;
		height: 27px;
		border: 1px solid #FF6600;
		border-radius: 15px;
		cursor: pointer;
		text-align: center;
		margin-top: 15px;
		margin-left: 240px;
	}

	/*box-four*/
	.box-four-content {
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
	}

	.box-four-content-top {
		width: 100%;
		height: 82px;
	}

	.box-four-content-top h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-four-content-top ul {
		list-style: none;
		margin-left: 33%;
	}

	.box-four-content-top ul li {
		float: left;
		margin-left: 10px;
	}

	.box-four-content-top>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-four-content-top>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-four-content-top>span {
		float: right;
		margin-top: -31px;
	}

	.box-four-content-top>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-four-content-top>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-four-content-bottom {
		width: 1210px;
		height: 352px;
		overflow: hidden;
	}

	.box-four-content-bottom>ul {
		list-style: none;
	}

	.box-four-content-bottom>ul>li {
		float: left;
		width: 292px;
		height: 350px;
		background: #fff;
		margin-right: 10px;
		position: relative;
	}

	.box-four-content-bottom>ul>li>p {
		text-align: center;
	}

	.box-four-content-bottom>ul>li>p:nth-child(2) {
		font-size: 16px;
		margin-top: 15px;
	}

	.box-four-content-bottom>ul>li>p:nth-child(3) {
		font-size: 12px;
		color: #aaa;
	}

	.box-four-content-bottom>ul>li>p:nth-child(4) {
		font-size: 12px;
		color: #FF6600;
	}

	.box-four-content-bottom>ul>li>img {
		margin-left: 41px;
		margin-top: 20px;
	}

	.box-four-content-bottom>ul>li:nth-child(4) {
		margin-left: 0;
	}

	.box-four-content-bottom>ul>li:nth-child(2) {
		background: none;
	}

	.box-four-content-bottom>ul>li>ul {
		list-style: none;
	}

	.box-four-content-bottom>ul>li>ul>li {
		width: 294px;
		height: 171px;
		background: #fff;
		position: relative;
	}

	.box-four-content-bottom>ul>li>ul>li:nth-child(1) {
		margin-bottom: 10px;
	}

	.box-four-content-bottom>ul>li>ul>li>p:nth-child(1) {
		margin-left: 15px;
		padding-top: 15px;
		font-size: 15px;
	}

	.box-four-content-bottom>ul>li>ul>li>p:nth-child(2) {
		margin-left: 15px;
		font-size: 12px;
		color: #aaa;
	}

	.box-four-content-bottom>ul>li>ul>li>p:nth-child(3) {
		margin-left: 15px;
		font-size: 12px;
		color: #FF6600;
	}

	.box-four-content-bottom>ul>li>ul>li>img {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.box-four-content-bottom>ul>li>ul>li>p:nth-child(4) {
		width: 60px;
		height: 17px;
		position: absolute;
		left: 0;
		bottom: 10px;
		background: #9ec955;
		color: #fff;
		text-align: center;
	}

	.box-four-content-bottom>ul>li>p:nth-child(5) {
		width: 60px;
		height: 17px;
		position: absolute;
		left: 0;
		bottom: 10px;
		background: #FF6600;
		color: #fff;
	}

	.box-four-content-bottom>ul>li:hover {
		cursor: pointer;
		box-shadow: 0 2px 55px 2px #ddd;
		margin-top: -1px;
	}

	.box-four-content-bottom>ul>li:nth-child(2):hover {
		cursor: pointer;
		box-shadow: none;
		margin-top: 0;
	}

	.box-four-content-bottom>ul>li>ul>li:hover {
		cursor: pointer;
		box-shadow: 0 2px 55px 2px #ddd;
		margin-top: -1px;
	}

	.box-four-content-bottom>ul>li>div {
		width: 292px;
		height: 0;
		opacity: 0.8;
		text-align: left;
		background: #ff6600;
		position: absolute;
		bottom: 0;
		transition: all .3s;
	}

	.box-four-content-bottom>ul>li:hover>div {
		height: 100px;
	}

	.box-four-content-bottom>ul>li>div>ul {
		padding: 10px 40px;
		list-style-type: disc;
	}

	.box-four-content-bottom>ul>li>div>ul>li {
		color: #fff;
		font-size: 12px;
	}

	.box-four-content-bottom>ul>li>div>span {
		display: block;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}

	.box-four-content-bottom>ul>li>ul>li>div {
		width: 292px;
		height: 0;
		opacity: 0.8;
		text-align: left;
		background: #ff6600;
		position: absolute;
		bottom: 0;
		transition: all .3s;
	}

	.box-four-content-bottom>ul>li>ul>li:hover>div {
		height: 100px;
	}

	.box-four-content-bottom>ul>li>ul>li>div>ul {
		padding: 10px 40px;
		list-style-type: disc;
	}

	.box-four-content-bottom>ul>li>ul>li>div>ul>li {
		color: #fff;
		font-size: 12px;
	}

	.box-four-content-bottom>ul>li>ul>li>div>span {
		display: block;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}

	/*box-five*/
	.box-five-content {
		width: 1210px;
		min-width: 1200px;
		margin: 0 auto;
	}

	.box-five-content-top {
		width: 100%;
		height: 82px;
	}

	.box-five-content-top h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-five-content-top ul {
		list-style: none;
		margin-left: 48%;
	}

	.box-five-content-top ul li {
		float: left;
		margin-left: 10px;
	}

	.box-five-content-top>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-five-content-top>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-five-content-top>span {
		float: right;
		margin-top: -31px;
	}

	.box-five-content-top>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-five-content-top>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-five-content-bottom>ul {
		list-style: none;
	}

	.box-five-content-bottom>ul>li {
		float: left;
		width: 292px;
		height: 208px;
		background: #fff;
		margin-right: 10px;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.box-five-content-bottom>ul>li>div:nth-child(1) {
		width: 139px;
		height: 82px;
		margin-left: 76.5px;
		margin-top: 40px;
		position: relative;
	}

	.box-five-content-bottom>ul>li>div>p:nth-child(1) {
		font-weight: bold;
		font-size: 15px;
		position: absolute;
		top: 34px;
		left: 50%;
		margin-left: -32px;
	}

	.box-five-content-bottom>ul>li>div>p:nth-child(2) {
		color: #fff;
		font-size: 12px;
		position: absolute;
		margin-left: -32px;
		width: 118px;
		height: 15px;
		background-image: url(../../static/img/orageBG.png);
		top: 55px;
		left: 50%;
		margin-left: -59px;
	}

	.box-five-content-bottom>ul>li>p:nth-child(2) {
		font-size: 17px;
		margin-top: 20px;

	}

	.box-five-content-bottom>ul>li>p:nth-child(3) {
		font-size: 12px;
		color: #FF6600;
	}

	.box-five-content-bottom>ul>li>div:nth-child(4) {
		width: 292px;
		height: 0;
		opacity: 0.8;
		text-align: left;
		background: #ff6600;
		position: absolute;
		bottom: 0;
		transition: all .3s;
	}

	.box-five-content-bottom>ul>li:hover>div:nth-child(4) {
		height: 100px;
	}

	.box-five-content-bottom>ul>li>div>ul {
		padding: 10px 40px;
		list-style-type: disc;
		color: #fff;
	}

	.box-five-content-bottom>ul>li>div>span {
		display: block;
		border-bottom: 1px solid rgba(255, 255, 255, .5);
	}

	.box-five-content-bottom>ul>li:hover {
		cursor: pointer;
		box-shadow: 0 2px 55px 2px #ddd;
		margin-top: -1px;
	}

	/*box-six*/
	.box-six-content {
		width: 1210px;
		min-width: 1200px;
		margin: 0 auto;
	}

	.box-six-content-top {
		width: 100%;
		height: 82px;
	}

	.box-six-content-top h3 {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
	}

	.box-six-content-top ul {
		list-style: none;
		margin-left: 48%;
	}

	.box-six-content-top ul li {
		float: left;
		margin-left: -75px;
	}

	.box-six-content-top>ul>li>a {
		color: #666;
		font-size: 15px;
	}

	.box-six-content-top>ul>li>a:hover {
		color: #ff6600;
		text-decoration: none;
	}

	.box-six-content-top>span {
		float: right;
		margin-top: -31px;
	}

	.box-six-content-top>span>a {
		color: #aaa;
		margin-top: 2px;
	}

	.box-six-content-top>span>a:nth-child(2) {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		margin-left: 5px;
		border-radius: 50%;
		text-align: center;
		line-height: 15px;
	}

	.box-six-content-bottom>ul {
		list-style: none;
	}

	.box-six-content-bottom>ul>li {
		float: left;
		width: 240.39px;
		height: 188px;
		background: #fff;
		text-align: center;
		cursor: pointer;
		position: relative;
	}

	.box-six-content-bottom>ul>li:hover {
		box-shadow: 2px 2px 55px 2px #ddd;
		margin-top: -1px;
	}

	.box-six-content-bottom>ul>li>img {
		margin-top: 40px;
	}

	.box-six-content-bottom>ul>li>p {
		font-size: 18px;
		margin-top: 20px;
	}

	.box-six-content-bottom>ul>li>div {
		position: absolute;
		top: 30px;
		left: 50%;
		margin-left: -63px;
		display: none;
	}

	.box-six-content-bottom>ul>li:hover>div {
		display: block;
	}

	/*footer*/
	.footer-content {
		width: 100%;
		min-width: 1200px;
		height: 426px;
		background: #fff;
		margin-top: 20px;
	}

	.footer-content-top {
		width: 1200px;
		margin: 0 auto;
	}

	.footer-content-top>ul {
		float: left;
		list-style: none;
		margin-right: 100px;
		margin-top: 50px;
	}

	.footer-content-top>ul>li {
		margin-bottom: 15px;
	}

	.footer-content-top>ul:nth-child(6) {
		margin-right: 0;
	}

	.footer-content-top>ul>li:nth-child(1) {
		margin-bottom: 15px;
	}

	.footer-content-top>ul>li>a {
		color: #aaa;
		font-size: 15px;
	}

	.footer-content-top>ul>li>a:hover {
		color: #FF6600;
		text-decoration: none;
	}

	.footer-content-top>ul:nth-child(6)>li {
		float: left;
		text-align: center;

	}

	.footer-content-top>ul:nth-child(6)>li:nth-child(1) {
		border-left: 1px solid #aaa;
		padding-left: 50px;
	}

	.footer-content-top>ul:nth-child(6)>li:nth-child(2)>div {
		width: 100px;
		height: 22px;
		border: 1px solid #000;
		margin-top: 35px;
		margin-left: 10px;
		margin-right: 15px;
		cursor: pointer;
	}

	.footer-content-top>ul:nth-child(6)>li:nth-child(3)>div {
		width: 100px;
		height: 22px;
		border: 1px solid #000;
		margin-top: 35px;
		margin-left: 10px;
		cursor: pointer;
	}

	.footer-content-bottom {
		width: 1200px;
		height: 200px;
		margin: 0 auto;
		margin-top: 30px;
	}

	.footer-content-bottom>div {
		margin: 0 auto;
		text-align: center;
		color: #aaa;
		margin-top: 30px;
	}

	.footer-content-bottom>div>ul {
		list-style: none;
		margin-left: 331px;
	}

	.footer-content-bottom>div>ul>li {
		float: left;
		margin-right: 10px;
		font-size: 11px;
		color: #aaa;
	}

	/*nav-right*/
	.nav-right {
		position: fixed;
		right: 250px;
		top: 351px;
	}

	.nav-right>ul {
		list-style: none;
	}

	.nav-right>ul>li {
		width: 55px;
		border-bottom: 1px solid #ddd;
		background: #fff;
		text-align: center;
		padding-top: 10px;
		cursor: pointer;
	}

	.nav-right>ul>li>a>img {
		width: 55px;
		height: 42px;
		margin-top: -10px;
	}

	/*nav-left*/
	.nav-left {
		position: fixed;
		left: 252px;
		top: 300px;
		display: none;
	}

	.nav-left>ul {
		list-style: none;
	}

	.nav-left>img {
		width: 65px;
	}

	.nav-left>ul>li {
		width: 65px;
		background: #fff;
		text-align: center;
	}

	.nav-left>ul>li>a {
		display: block;
		width: 60px;
		height: 59px;
		color: #000;
		font-size: 9px;
		line-height: 59px;
	}

	.nav-left>ul>li>a:hover {
		color: #FF6600;
		text-decoration: none;
	}

	/*清除浮动带来的影响*/
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
	}

	.clearfloat {
		zoom: 1;
	}

	.hide {
		display: none;
	}
</style>
