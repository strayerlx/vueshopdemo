### `Vue`项目接口文档

#### 项目接口地址：`http://localhost:8888/api/`

----

#### 首页轮播图

* 路径：`/getlunbo`

* 参数：无

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javas
  message:[
      {
          id: '1',
          url: 'https://www.baidu.com',
          src: 'http://localhost:8888/public/images/lunbo-1.jpg',
      },
      {
          id: '2',
          url: 'https://www.tencent.com',
          src: 'http://localhost:8888/public/images/lunbo-2.jpg',
      },
      {
          id: '3',
          url: 'https://www.163.com',
          src: 'http://localhost:8888/public/images/lunbo-3.jpg',
      },
      {
          id: '4',
          url: 'https://www.jd.com',
          src: 'http://localhost:8888/public/images/lunbo-4.jpg',
      },
      {
          id: '5',
          url: 'https://www.taobao.com',
          src: 'http://localhost:8888/public/images/lunbo-5.jpg',
      },
  ];
  ```

#### 新闻列表数据

* 路径：`/getnewslist`

* 参数：无

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  message:[{
      id: '1',
      title: '习近平在红土地上这样谈“心”',
      click: 9999,
      add_time: '2019/5/26 09:27',
      img_url: 'http://localhost:8888/public/images/news-title-1.png',
  },
  {
      id: '2',
      title: '中国贸促会会长高燕：美方霸凌主义做法严重践踏多边贸易规则',
      click: 8999,
      add_time: '2019/5/27 10:59',
      img_url: 'http://localhost:8888/public/images/news-title-2.png',
  },
  {
      id: '3',
      title: '江苏东台一医院69人院内感染丙肝病毒 医院书记院长被免职',
      click: 666,
      add_time: '2019/5/27 08:45',
      img_url: 'http://localhost:8888/public/images/news-title-3.png',
  },
  {
      id: '4',
      title: '微软、通用电气等致信美国政府：封杀中国企业将“引火烧身”',
      click: 888,
      add_time: '2019/5/27 12:02',
      img_url: 'http://localhost:8888/public/images/news-title-4.png',
  },
  {
      id: '5',
      title: '贝尔：勇士队里没人在乎谁来首发 卢尼就是个实例',
      click: 233,
      add_time: '2019/5/27 02:36',
      img_url: 'http://localhost:8888/public/images/news-title-5.png',
  },
  {
      id: '6',
      title: '李嘉诚的宝马，玻璃厚6cm可挡子弹，6.2秒破百535马力',
      click: 9999,
      add_time: '2019/5/27 13:43',
      img_url: 'http://localhost:8888/public/images/news-title-6.png',
  },
  ];
  ```

---

#### 新闻详情数据

* 路径：`/getnew/:id`

* 参数：`id`非空

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  //例如id为1时
  message:{
      click: 9999,
  	content: "↵    <img src="http://localhost:8888/public/images/news-id-1-1.png" /><br>↵    <br>↵    2019年5月20日至22日，习近平在江西考察。这是习近平在红军烈士后代、退伍军人孙观发家，同孙观发一家和当地镇、村干部拉家常，详细了解老区人民生产发展和生活改善等情况。↵    <br>↵    江西，是一片充满红色记忆的红土地。中央红军长征从这里集结出发，广大人民群众与党同心，用鲜血打拼出一番新的天地……↵    <br>↵    江西，是一片洋溢红色热情的红土地。这里蔬菜产业兴旺，新农村快速发展，村民过上了红火的日子……↵    <br>↵    江西，是一片释放红色活力的红土地。这里有新技术、新产业，结构在调整、产业在升级、动能在转换，人们以高昂的干劲迎接更“红”的明天。↵    <br>↵    在这片红土地上调研考察，习近平总书记实地走访，察看人民群众生活的变化。↵    <br>↵    新的奋斗，要不忘初心；新的生活，要装着民心；新的发展，要抓紧核心。这一次江西之行，亦是一次交“心”之行。<br>↵    <br>↵    <img src="http://localhost:8888/public/images/news-id-1-2.png" /><br>↵    <br>↵    2019年5月20日，习近平在赣州市于都县中央红军长征出发纪念馆会见于都县的红军后代、革命烈士家属代表。<br>↵    <br>↵    新的奋斗，要不忘初心↵    <br>↵    5月20日下午，习近平转乘火车来到江西省于都县。于都县是一片红土地，因为这里是中央红军二万五千里长征的集结出发地，是赣南第一块红色根据地、第一个红色政权诞生地。<br>↵    <br>↵    “我们不能忘记党的初心和使命，不能忘记革命理想和革命宗旨，要继续高举革命的旗帜，弘扬伟大的长征精神，朝着中华民族伟大复兴的目标奋勇前进。”<br>↵    <br>↵    今年正逢新中国成立70周年，站在中央红军长征出发的红土地上，习近平的讲话倍加振奋人心。<br>↵    <br>↵    1934年10月，中央机关、中央军委和中央红军主力8.6万人集结于都，进行战略转移。为了隐蔽意图，避免敌机轰炸，红军战士连续多天架设临时浮桥，晚上渡河，早上再拆掉浮桥，不留痕迹。当时30万于都人民不仅与红军一心，共同保守秘密，还锯下家中的房梁、卸下门上的门板，倾尽木材，让红军用去搭浮桥。<br>↵    <br>↵    习近平在中央红军长征出发纪念馆见到9位红军后代、革命烈士家属代表，与他们握手，询问他们的年龄，动情地说：“饮水思源，我来这里也想让全国人民都知道，中国共产党要不忘初心，全中国人民要不忘初心，不忘我们的革命宗旨、革命理想，不忘我们的革命前辈、革命先烈，不要忘了我们的父老乡亲们。”<br>↵    <br>↵    听着习近平的关怀与问候，85岁的李灿美老人不禁擦拭了一下眼角。他的父亲叫李晋录，1933年参加红军，1934年在福建作战时牺牲了。<br>↵    <br>↵    不忘初心，方能坚定前进信心。<br>↵    ",
  	id: "1",
  	title: "习近平在红土地上这样谈“心”",
  }
  ```

---

#### 图文分享列表类别

* 路径：`/getimgcategory`

* 参数：无

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  {"message":[{"id":"1","title":"汽车"},
              {"id":"2","title":"体育"},
              {"id":"3","title":"电影"},
              {"id":"4","title":"音乐"},
              {"id":"5","title":"美女"},
              {"id":"6","title":"动漫"},
              {"id":"7","title":"游戏"}
             ]
  }
  ```

---

#### 图文分享

* 路径：`/getimages/:categoryId`

* 参数：`categoryId`非空

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  //categoryId 当参数为0的时候表示查询所有数据
  message:[  
      {
          id: '1',
          categoryId: '1',
          img_url: 'http://localhost:8888/public/images/photo-share-summary-1-1.jpg',
          title: '风风光光的拉风兜风 奥迪A5敞篷版谍照曝光',
          zhaiyao: '从外观来看新车在整体设计风格不变的前提上，基本和A5 Sportback保持一致，前面的头灯和前保险杠和现款有轻微的造型变化，另外尾灯的照明效果有所不同，和新A1\A6保持一致。',
      },
      {
          id: '2',
          categoryId: '1',
          img_url: 'http://localhost:8888/public/images/photo-share-summary-1-2.jpg',
          title: '起步就是325i？ 全新宝马3系或售29.68万元起',
          zhaiyao: '全新3系基本采用了全新的灯组造型，内部采用L型日行灯，双肾型格栅的尺寸也进一步增大，一体式亮黑色设计给车头增添了更多运动化元素。新车在"霍夫迈斯特"拐角处也采用了全新的设计，尾灯内部的红色L型灯带具有同样强的运动感。',
      },
      {
          id: '3',
          categoryId: '1',
          img_url: 'http://localhost:8888/public/images/photo-share-summary-1-3.jpg',
          title: '全新奔驰C级或2020年巴黎车展亮相 尺寸提升/提供混动动力',
          zhaiyao: '近日我们从外媒获取到了一张全新奔驰C级的假想图，新车采用了奔驰家族最新的外观设计，同时内饰也将延续奔驰现款双连屏的设计风格。此外在动力系统方面的变化较大，为了顺应节能减排潮流，除了1.5T+48V外，还将会推出PHEV插电混动车型。', 
  }]
  ```

---

#### 图文详情

##### 标题文字

* 路径：`/getimageInfo/:imgId`

* 参数：`imgId`非空

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  "message":{
      "id":"1",
      "title":"风风光光的拉风兜风 奥迪A5敞篷版谍照曝光","add_time":"2019/05/23 13:44:25",
      "click":999,"content":"从外观来看新车在整体设计风格不变的前提上，基本和A5 Sportback保持一致，前面的头灯和前保险杠和现款有轻微的造型变化，另外尾灯的照明效果有所不同，和新A1A6保持一致。"
  }
  ```



##### 图片

* 路径：`'/getthumimages/:imgId`

* 参数：`imgId`非空

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  "message":[{
      "id":"1",
      "detailId":"1",
      "src":"http://localhost:8888/public/images/photo-share-detail-1-1.jpg"
            },
      {
       "id":"2",
       "detailId":"1",
       "src":"http://localhost:8888/public/images/photo-share-detail-1-2.jpg"
      },
      {"id":"3",
       "detailId":"1",
       "src":"http://localhost:8888/public/images/photo-share-detail-1-3.jpg"
      },
      {"id":"4",
       "detailId":"1",
       "src":"http://localhost:8888/public/images/photo-share-detail-1-4.jpg"
      },
      {"id":"5",
       "detailId":"1",
       "src":"http://localhost:8888/public/images/photo-share-detail-1-5.jpg"
      }]
  ```

---

#### 商品列表数据

* 路径：`/getgoods`

* 参数：`pageindex`非空

* 请求方式：`get`

* 响应类型：`json`,

* 响应数据：

  ```javascript
  //例如pageindex为1，加载第一页数据
  message:[{
          id: '1',
          img_url: 'http://localhost:8888/public/images/goods-list-1.jpg',
          title: 'Danielwellington DW手表女28mm时尚女表',
          // 商品实际价格
          sell_price: 1139,
          // 商品原价
          market_price: 1299,
          // 商品剩余库存数量
          stock_quantity: 19,
      },
      {
          id: '2',
          img_url: 'http://localhost:8888/public/images/goods-list-2.jpg',
          title: '神舟战神 Z7-KP7EC GTX1060 6G独显 15.6英寸游戏笔记本',
          // 商品实际价格
          sell_price: 6299,
          // 商品原价
          market_price: 8999,
          // 商品剩余库存数量
          stock_quantity: 15,
      },
      {
          id: '3',
          img_url: 'http://localhost:8888/public/images/goods-list-3.jpg',
          title: '威联通（QNAP）TS-551-2G 内存双核2.0GHzCPU 五盘位NAS网络存储 AES-NI 加密 4K影片转档 （无内置硬盘)',
          // 商品实际价格
          sell_price: 1999,
          // 商品原价
          market_price: 3279,
          // 商品剩余库存数量
          stock_quantity: 5,
      },
      {
          id: '4',
          img_url: 'http://localhost:8888/public/images/goods-list-4.jpg',
          title: '京选 香薰机 超声波加湿器 办公室卧室迷你桌面静音 USB供电 仅支持水溶性精油',
          // 商品实际价格
          sell_price: 49,
          // 商品原价
          market_price: 99,
          // 商品剩余库存数量
          stock_quantity: 66,
      },
      {
          id: '5',
          img_url: 'http://localhost:8888/public/images/goods-list-5.jpg',
          title: '百岁山 饮用天然矿泉水 348ml*24瓶 整箱装',
          // 商品实际价格
          sell_price: 38,
          // 商品原价
          market_price: 43.8,
          // 商品剩余库存数量
          stock_quantity: 99,
      },
      {
          id: '6',
          img_url: 'http://localhost:8888/public/images/goods-list-6.jpg',
          title: '佳能（Canon）HF R806 摄像机 黑色',
          // 商品实际价格
          sell_price: 1899,
          // 商品原价
          market_price: 2299,
          // 商品剩余库存数量
          stock_quantity: 18,
      },
      {
          id: '7',
          img_url: 'http://localhost:8888/public/images/goods-list-7.jpg',
          title: '【情侣款】专柜同款 亚洲区真爆正品V2天使鞋带反光版透气舒适 ins慢跑鞋 男款-灰色-限量版 42',
          // 商品实际价格
          sell_price: 168,
          // 商品原价
          market_price: 560,
          // 商品剩余库存数量
          stock_quantity: 85,
      },
      {
          id: '8',
          img_url: 'http://localhost:8888/public/images/goods-list-8.jpg',
          title: 'Salvatore Ferragamo 菲拉格慕 男士黑色牛皮革腰带 0687555_C _115',
          // 商品实际价格
          sell_price: 2600,
          // 商品原价
          market_price: 3600,
          // 商品剩余库存数量
          stock_quantity: 9,
      },
      {
          id: '9',
          img_url: 'http://localhost:8888/public/images/goods-list-9.jpg',
          title: '瑞士军刀双肩包 背包男商务15.6英寸笔记本电脑包 大容量出差行李书包旅行包 茶色 外置usb接口',
          // 商品实际价格
          sell_price: 99,
          // 商品原价
          market_price: 199,
          // 商品剩余库存数量
          stock_quantity: 75,
      },
      {
          id: '10',
          img_url: 'http://localhost:8888/public/images/goods-list-10.jpg',
          title: '艺福堂茶叶茗茶 2019春茶新茶 绿茶明前一级碧螺春 江苏云雾茶250g',
          // 商品实际价格
          sell_price: 85,
          // 商品原价
          market_price: 158,
          // 商品剩余库存数量
          stock_quantity: 70,
      }
  ]
  ```

---

#### 商品详情

##### 文字价格等

* 路径：`/goods/getinfo/:goodsId`

* 参数：`goodsId`非空

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  message:{
      "id":"1",
      "goods_no":"EC20190506001","add_time":"2019/04/10 15:23:18",
      "title":"Danielwellington DW手表女28mm时尚女表",
      "sell_price":1139,
      "market_price":1299,
      "stock_quantity":19
  }
  ```



##### 图片轮播图

* 路径：`/getgoodsthumimages/:goodsId`

* 参数：`goodsId`非空

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  "message":[{
      "id":"1",
      "goodsId":"1",
      "src":"http://localhost:8888/public/images/goods-detail-1-1.jpg"
  		},
       {"id":"2",
        "goodsId":"1",
        "src":"http://localhost:8888/public/images/goods-detail-1-2.jpg"
       },
       {"id":"3",
        "goodsId":"1",
        "src":"http://localhost:8888/public/images/goods-detail-1-3.jpg"
       		}]
  ```

---

#### 用户信息接口

##### 用户注册接口

* 路径：`/regist`

* 参数：

  * `account`：`string`类型，帐号
  * `pwd`：`string`类型，密码

* 请求方式：`post`

* 响应类型：`json`

* 响应数据：

  ```javascript
  //帐号已存在
  {
      code:'1',
      msg:'帐号已存在！',
  }
  //注册成功
  {
      code: '2',
      msg: '注册成功！'
  }
  ```

##### 用户登录接口

* 路径：`/login`

* 参数：

  * `account`：`string`类型，帐号
  * `pwd`：`string`类型，密码

* 请求方式：`post`

* 响应类型：`json`

* 响应数据：

  ```javascript
  //登录成功
  {
  	code: '1',
  	msg: '登录成功！',
  }
  //登录失败
  {
  	code: '2',
  	msg: '帐号或密码错误！',
  }
  ```

---

#### 评论数据接口

##### 创建评论信息数据接口

* 路径：`/add_comment`
* 参数：
  * `user_name`：`string`类型，账户名
  * `goodsId`或`photoShareId`：`string`类型，评论的商品`id`或图文分享`id`
  * `content`：`string`类型，评论的主体内容

* 请求方式：`post`

* 响应类型：`json`

* 响应数据：

  ```javascript
  //评论成功
  {
  	code: '1',
  	msg: '评论成功！',
  }
  ```

##### 查询评论列表数据接口

* 路径：`/getcomments`

* 参数：

  * `pageindex`：`number`类型，要查询的数据页码
  * `goodsId`或`photoShareId`：`string`类型，根据商品`id`或图文分享`id`查询评论列表数据

* 请求方式：`get`

* 响应类型：`json`

* 响应数据：

  ```javascript
  message:[{
      id: '1',
      user_name: 'admin1',
      goodsId: '3',
      photoShareId: '',
      content: '评论一下真好玩1',
      add_time: '2019/05/31 13:25:19'
  },
  {
      id: '2',
      user_name: 'admin1',
      goodsId: '2',
      photoShareId: '',
      content: '评论一下真好玩2',
      add_time: '2019/05/31 13:25:19'
  },
  {
      id: '3',
      user_name: 'admin2',
      goodsId: '2',
      photoShareId: '',
      content: '评论一下真好玩3',
      add_time: '2019/05/31 13:25:19'
  }]
  ```

---

#### 购物车数据接口

##### 编辑购物车数据接口

* 路径：`/add_shopcart`

* 参数：

  * `user_name`：`string`类型，账户名
  * `goodsId`：`string`类型，添加到购物车中的商品`id`，用户登录成功后添加购物车时传的商品`id`
  * `quantity`：`number`类型，添加到购物车中的商品数量，用户登录成功后添加购物车时传的商品数量
  * `localShopcarts`：`json`类型，用户登录成功后将`localStorage`里存的购物车信息做为参数发送给服务端，因此这个参数仅在登录成功后操作一次，数据格式为：`[{goodsId:'1',quantity:5},{goodsId:'2',quantity:3}]`

* 请求方式：`post`

* 响应类型：`json`

* 响应结果：

  ```javascript
  //第一次新加入到购物车中的商品
  {
  	code: '1',
  	msg: '加车成功！'
  }
  //购物车里已有某个商品后，则是修改商品数量
  {
  	code: '2',
  	msg: '修车成功！'
  }
  ```

##### 查询用户的购物车数据接口

* 路径：`/getshopcarts`
* 参数：
  
* `account`：`string`类型，账号名，非空
  
* 请求方式：`get`

* 响应类型：`json`

* 响应结果：

  ```javascript
  message:[
      {
          id: '1',
          user_name: 'admin1',
          goodsId: '1',
          img_url:'http://localhost:8888/public/images/goods-list-1.jpg'
          title:'好看的手表',
          sell_price:1139,
          quantity: 2,
          stock_quantity: 10,
      },
      {
          id: '2',
          user_name: 'admin1',
          goodsId: '2',
          img_url:'http://localhost:8888/public/images/goods-list-2.jpg'
          title:'神州小战神笔记本电脑',
          sell_price:6999,
          quantity: 1,
          stock_quantity: 15,
      }
]
  ```
  
  

