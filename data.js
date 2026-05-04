// ========== 极客老刘 - 产品数据库 ==========
// 单一数据源：主页和详细对比页共用此文件
// 更新时间：2026年5月6日

const PRODUCTS = {
    phone: {
        label: '📱 手机',
        products: {
            '小米 17 Pro Max':     { processor:'第五代骁龙 8 至尊版 (3nm)', screen:'6.9" LTPO AMOLED', resolution:'3200×1440', refresh:'120Hz 自适应', camera:'5000万徕卡光影大师主摄+5000万超广角+5000万5x长焦', front:'3200万', battery:'7000mAh', charge:'120W有线 / 50W无线', os:'Android 16 / HyperOS 3', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'219g', waterproof:'IP68', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+龙晶玻璃', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / UWB', price:'¥5999' },
            'iPhone 17 Pro':      { processor:'A19 Pro (3nm)', screen:'6.3" LTPO OLED', resolution:'2622×1206', refresh:'120Hz ProMotion 自适应', camera:'4800万主摄+4800万超广角+4800万5x长焦', front:'2400万', battery:'3988mAh', charge:'25W有线 / 25W MagSafe / Qi2无线', os:'iOS 19', storage:'256GB / 512GB / 1TB', ram:'12GB', weight:'206g', waterproof:'IP68', biometric:'Face ID', material:'铝合金一体机身+Ceramic Shield 2', connectivity:'5G / WiFi 7 / 蓝牙6 / NFC / UWB', price:'¥8999' },
            '华为 Pura 90 Pro':   { processor:'麒麟 9030S 八核', screen:'6.8" LTPO OLED', resolution:'2848×1276', refresh:'120Hz 自适应 (1-120Hz)', camera:'5000万主摄1英寸+4800万4x长焦+4000万超广角', front:'1300万', battery:'5800mAh', charge:'100W有线 / 50W无线', os:'HarmonyOS 6 / EMUI 16', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'212g', waterproof:'IP68', biometric:'屏下指纹+面部识别', material:'铝合金中框+昆仑玻璃', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / 红外 / 星闪', price:'¥5499' },
            'REDMI K90 Max':      { processor:'天玑 9500 (3nm)', screen:'6.8" LTPO AMOLED', resolution:'3200×1440', refresh:'120Hz 自适应', camera:'5000万主摄+800万超广角+200万微距', front:'2000万', battery:'7000mAh', charge:'120W有线 / 50W无线', os:'Android 16 / HyperOS 3', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'225g', waterproof:'IP68', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+玻璃后盖（内置散热风扇）', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / 红外', price:'¥2999' },
            '一加 13':            { processor:'骁龙 8 至尊版 (3nm)', screen:'6.82" LTPO AMOLED', resolution:'3168×1440', refresh:'120Hz 自适应', camera:'5000万哈苏主摄+5000万超广角+5000万3x长焦', front:'3200万', battery:'6000mAh', charge:'100W有线 / 50W无线', os:'Android 15 / ColorOS 15', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB / 24GB', weight:'213g', waterproof:'IP68+IP69', biometric:'超声波屏下指纹+面部', material:'铝合金中框+Gorilla Glass Victus 2', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / 红外', price:'¥4299' },
            'Galaxy S26 Ultra':   { processor:'骁龙 8 Elite (定制版) 八核 4.6GHz', screen:'6.9" Dynamic AMOLED 2X', resolution:'3120×1440 QHD+', refresh:'120Hz 自适应 (1-120Hz)', camera:'2亿主摄f/1.4+5000万超广角+5000万5x长焦+1000万3x长焦', front:'1200万 f/2.2', battery:'5000mAh', charge:'45W有线 / 15W无线', os:'Android 16 / One UI 8', storage:'256GB / 512GB / 1TB', ram:'12GB', weight:'218g', waterproof:'IP68', biometric:'超声波指纹+面部识别', material:'钛合金中框+Gorilla Armor 3', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / UWB / S Pen', price:'¥9999' },
            'Samsung Galaxy S25 Ultra': { processor:'骁龙 8 Elite for Galaxy (3nm)', screen:'6.9" LTPO Dynamic AMOLED 2X', resolution:'3120×1440 QHD+', refresh:'120Hz 自适应 (1-120Hz)', camera:'2亿主摄f/1.7+5000万超广角+5000万5x长焦+1000万3x长焦', front:'1200万 f/2.2', battery:'5000mAh', charge:'45W有线 / 15W无线 / Qi2', os:'Android 15 / One UI 7', storage:'256GB / 512GB / 1TB', ram:'12GB', weight:'218g', waterproof:'IP68', biometric:'超声波屏下指纹+面部识别', material:'钛合金中框+Gorilla Armor 2', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / UWB / S Pen', price:'¥9999' },
            '小米 17 Ultra':         { processor:'骁龙 8 Elite 2 (3nm)', screen:'6.9" LTPO AMOLED', resolution:'3200×1440 2K', refresh:'120Hz 自适应', camera:'5000万1英寸主摄+5000万超广角+5000万5x潜望长焦', front:'3200万', battery:'6000mAh', charge:'90W有线 / 50W无线', os:'Android 16 / HyperOS 3', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'218g', waterproof:'IP68', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+龙晶玻璃+素皮后盖可选', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / UWB', price:'¥5999' },
            '小米 15 Ultra':         { processor:'骁龙 8 Elite (3nm)', screen:'6.7" LTPO AMOLED', resolution:'3200×1440 2K', refresh:'120Hz 自适应', camera:'5000万1英寸主摄+5000万超广角+5000万5x潜望长焦', front:'3200万', battery:'5410mAh', charge:'90W有线 / 80W无线', os:'Android 15 / HyperOS 2', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'226g', waterproof:'IP68+IP69', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+陶瓷/钛合金后盖', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / UWB / 卫星通信', price:'¥6499' },
            'OPPO Find X8 Ultra':  { processor:'骁龙 8 Elite (3nm)', screen:'6.8" LTPO AMOLED', resolution:'2780×1264', refresh:'120Hz 自适应', camera:'5000万1英寸主摄+5000万超广角+5000万3x长焦+5000万6x潜望长焦', front:'3200万', battery:'6100mAh', charge:'100W有线 / 50W无线', os:'Android 15 / ColorOS 15', storage:'256GB / 512GB', ram:'12GB / 16GB', weight:'215g', waterproof:'IP68', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+Gorilla Glass', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC', price:'¥6499' },
            'vivo X200 Ultra':     { processor:'骁龙 8 Elite (3nm)', screen:'6.82" LTPO AMOLED', resolution:'2800×1260', refresh:'120Hz 自适应', camera:'5000万主摄+5000万超广角+2亿像素潜望长焦', front:'3200万', battery:'6000mAh', charge:'90W有线 / 30W无线', os:'Android 15 / OriginOS 5', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'229g', waterproof:'IP68+IP69', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+素皮/玻璃后盖', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC', price:'¥5999' },
            '荣耀 Magic8 Pro':     { processor:'骁龙 8 Elite Gen 5 (3nm)', screen:'6.71" LTPO OLED', resolution:'2800×1264', refresh:'120Hz 自适应', camera:'2亿主摄+5000万超广角+5000万长焦', front:'5000万', battery:'7200mAh', charge:'120W有线 / 80W无线', os:'Android 16 / MagicOS 9', storage:'256GB / 512GB / 1TB', ram:'12GB / 16GB', weight:'219g', waterproof:'IP68', biometric:'超声波屏下指纹+面部识别', material:'铝合金中框+玻璃后盖', connectivity:'5G / WiFi 7 / 蓝牙5.4 / NFC / 红外', price:'¥4299' },
        },
        params: [
            ['处理器','processor'], ['屏幕','screen'], ['分辨率','resolution'], ['刷新率','refresh'],
            ['后置相机','camera'], ['前置相机','front'], ['电池','battery'], ['充电','charge'],
            ['运行内存','ram'], ['存储','storage'], ['操作系统','os'],
            ['防水防尘','waterproof'], ['生物识别','biometric'], ['材质','material'],
            ['连接','connectivity'], ['重量','weight'], ['起售价','price']
        ],
        verdicts: {
            '小米 17 Pro Max': '第五代骁龙8至尊版+徕卡光影大师+7000mAh，小米史上最全能旗舰。5999元起极具竞争力。',
            'iPhone 17 Pro': 'A19 Pro芯片+铝合金一体化机身，苹果生态首选。视频创作和iOS用户首选。',
            '华为 Pura 90 Pro': '麒麟9030S回归+1英寸大底+星闪连接，鸿蒙生态旗舰。',
            'REDMI K90 Max': '天玑9500+内置散热风扇+7000mAh，2999元起的性能怪兽。游戏党首选。',
            '一加 13': '骁龙8至尊版全力释放，6000mAh+100W快充，哈苏影像，性能怪兽。',
            'Galaxy S26 Ultra': '2026安卓机皇，2亿像素f/1.4超大光圈+S Pen，AI功能全面升级。',
            'Samsung Galaxy S25 Ultra': '2025年2月发布，骁龙8 Elite+2亿像素+钛合金机身+S Pen。2025年安卓标杆。',
            '小米 17 Ultra': '2025年12月发布，骁龙8 Elite 2+1英寸大底+5x潜望长焦+6000mAh。小米影像旗舰巅峰。',
            '小米 15 Ultra': '2025年2月发布，骁龙8 Elite+1英寸大底+陶瓷/钛合金机身+卫星通信。小米年度影像标杆。',
            'OPPO Find X8 Ultra': '2025年4月发布，四摄全焦段+骁龙8 Elite+6100mAh。DXOMARK 2025拍照第一。',
            'vivo X200 Ultra': '2025年4月发布，2亿像素潜望长焦+骁龙8 Elite+6000mAh。蔡司影像旗舰。',
            '荣耀 Magic8 Pro': '2026年1月发布，骁龙8 Elite Gen 5+7200mAh+2亿主摄。续航和性能双冠。'
        }
    },
    laptop: {
        label: '💻 电脑',
        products: {
            'MacBook Pro M5':     { processor:'Apple M5 (10核CPU/10核GPU) / M5 Pro / M5 Max', screen:'14.2" / 16.2" Liquid Retina XDR', resolution:'3024×1964 / 3456×2234', ram:'16GB / 24-48GB(M5 Pro) / 36-128GB(M5 Max)', storage:'512GB / 1TB / 2TB / 4TB / 8TB SSD', battery:'24小时', weight:'1.55kg(14") / 2.14kg(16")', ports:'3x Thunderbolt 5 / HDMI 2.1 / SDXC / MagSafe 3 / 3.5mm', display:'1000nit持续 / 1600nit HDR峰值 / ProMotion 120Hz / P3广色域', keyboard:'背光妙控键盘 / Touch ID', os:'macOS Tahoe', material:'100%再生铝金属', webcam:'1200万 Center Stage', wifi:'WiFi 7 / 蓝牙5.4', price:'¥12999' },
            'MacBook Air M5':     { processor:'Apple M5 (10核CPU/8核GPU或10核GPU)', screen:'13.6" / 15.3" Liquid Retina', resolution:'2560×1664 / 2880×1864', ram:'16GB / 24GB / 32GB统一内存', storage:'512GB / 1TB / 2TB SSD', battery:'18小时', weight:'1.24kg(13") / 1.51kg(15")', ports:'2x Thunderbolt 4 / MagSafe 3 / 3.5mm', display:'500nit / P3广色域 / 原彩显示', keyboard:'背光妙控键盘 / Touch ID', os:'macOS Tahoe', material:'100%再生铝金属', webcam:'1200万 Center Stage', wifi:'WiFi 7 / 蓝牙5.4', price:'¥8999' },
            'ThinkPad X1 Carbon': { processor:'Intel Core Ultra 7 155U (vPro)', screen:'14" 2.8K OLED', resolution:'2880×1800', ram:'16GB / 32GB LPDDR5x', storage:'512GB / 1TB / 2TB SSD', battery:'15小时', weight:'1.08kg', ports:'2x Thunderbolt 4 / 2x USB-A 3.2 / HDMI 2.0b / 3.5mm', display:'400nit / 100% DCI-P3 / HDR True Black', keyboard:'经典小红点背光键盘 / 指纹识别', os:'Windows 11 Pro', material:'碳纤维+镁合金', webcam:'1080p IR红外', wifi:'WiFi 7 / 蓝牙5.4', price:'¥10999' },
            'Surface Laptop 7':   { processor:'骁龙 X Elite / X Plus (ARM)', screen:'13.8" / 15" PixelSense Flow', resolution:'2304×1536', ram:'16GB / 32GB / 64GB LPDDR5x', storage:'256GB / 512GB / 1TB SSD', battery:'20小时', weight:'1.34kg(13.8")', ports:'USB-C / USB-A / Surface Connect / 3.5mm', display:'600nit / sRGB / Dolby Vision IQ / 触控', keyboard:'背光键盘 / Windows Hello 面部识别', os:'Windows 11 on ARM', material:'铝合金一体成型', webcam:'1080p IR红外', wifi:'WiFi 7 / 蓝牙5.4', price:'¥8888' },
            '华为 MateBook X Pro': { processor:'Intel Core Ultra 9 185H', screen:'14.2" 3.1K OLED', resolution:'3120×2080', ram:'16GB / 32GB LPDDR5x', storage:'512GB / 1TB / 2TB SSD', battery:'14小时', weight:'0.98kg', ports:'2x Thunderbolt 4 / USB-C', display:'600nit / P3广色域 / 120Hz / 触控', keyboard:'背光键盘 / 指纹电源键', os:'Windows 11 Home', material:'微绒金属一体机身', webcam:'1080p', wifi:'WiFi 6E / 蓝牙5.3', price:'¥11999' },
            'RedmiBook Pro 16':   { processor:'Intel Core Ultra 5 225H (Arrow Lake)', screen:'16" 3.2K IPS', resolution:'3200×2000', ram:'16GB / 32GB LPDDR5x', storage:'512GB / 1TB SSD', battery:'14小时', weight:'1.88kg', ports:'1x Thunderbolt 4 / USB-C / USB-A / HDMI / 3.5mm', display:'500nit / 100% sRGB / 165Hz', keyboard:'背光键盘 / 指纹电源键', os:'Windows 11 Home', material:'铝合金', webcam:'1080p', wifi:'WiFi 6E / 蓝牙5.3', price:'¥4999' }
        },
        params: [
            ['处理器','processor'], ['屏幕','screen'], ['分辨率','resolution'], ['内存','ram'], ['存储','storage'],
            ['续航','battery'], ['重量','weight'], ['接口','ports'], ['显示特性','display'],
            ['键盘','keyboard'], ['操作系统','os'], ['材质','material'],
            ['摄像头','webcam'], ['无线连接','wifi'], ['起售价','price']
        ],
        verdicts: {
            'MacBook Pro M5': 'M5芯片+Thunderbolt 5+Fusion互联架构，2026年最强性能笔电。专业创作者首选。',
            'MacBook Air M5': 'M5芯片+512GB起步+WiFi 7，续航18小时。学生、办公、出差党的最佳选择。',
            'ThinkPad X1 Carbon': '商务标杆，1.08kg极致轻薄，接口丰富，小红点键盘手感一流。',
            'Surface Laptop 7': '骁龙X Elite带来20小时超长续航，Windows on ARM体验大幅提升。',
            '华为 MateBook X Pro': '轻至980g，3.1K OLED+120Hz触控。追求极致轻薄的商务人士首选。',
            'RedmiBook Pro 16': '性价比之王，16寸3.2K大屏+165Hz+14小时续航。预算有限的最佳选择。'
        }
    },
    tablet: {
        label: '📱 平板',
        products: {
            'iPad Pro M5':           { processor:'Apple M5', screen:'11" / 13" Ultra Retina XDR OLED', resolution:'2420×1668 / 2752×2064', refresh:'120Hz ProMotion', ram:'16GB', storage:'256GB / 512GB / 1TB / 2TB', battery:'10小时', weight:'444g(11") / 579g(13")', stylus:'Apple Pencil Pro / Apple Pencil USB-C', camera:'1200万广角+1000万超广角', os:'iPadOS 19', connectivity:'WiFi 7 / 蓝牙5.4 / 5G可选', speakers:'四扬声器系统', material:'铝合金一体机身', price:'¥8999' },
            'iPad Air M3':           { processor:'Apple M3 (8核CPU/10核GPU)', screen:'11" / 13" Liquid Retina IPS', resolution:'2360×1640 / 2732×2048', refresh:'60Hz', ram:'8GB', storage:'128GB / 256GB / 512GB / 1TB', battery:'10小时', weight:'462g(11") / 617g(13")', stylus:'Apple Pencil Pro / Apple Pencil USB-C', camera:'1200万广角', os:'iPadOS 18', connectivity:'WiFi 6E / 蓝牙5.3 / 5G可选', speakers:'双扬声器（横向）', material:'铝合金一体机身', price:'¥4799' },
            'Galaxy Tab S11 Ultra':  { processor:'骁龙 8 至尊版 (3nm)', screen:'14.6" Dynamic AMOLED 2X', resolution:'2960×1848', refresh:'120Hz', ram:'12GB / 16GB', storage:'256GB / 512GB / 1TB（支持microSD扩展）', battery:'11200mAh', weight:'723g', stylus:'S Pen（随机附赠）', camera:'1300万+800万超广角', os:'Android 16 / One UI 8', connectivity:'WiFi 7 / 蓝牙5.4 / 5G可选', speakers:'四扬声器（AKG调音）', material:'铝合金', price:'¥6999' },
            'Surface Pro 11':        { processor:'骁龙 X Elite / X Plus (ARM)', screen:'13" PixelSense Flow', resolution:'2880×1920', refresh:'120Hz', ram:'16GB / 32GB / 64GB', storage:'256GB / 512GB / 1TB SSD', battery:'14小时', weight:'895g', stylus:'Surface Slim Pen 2（需另购）', camera:'1000万后置+Windows Hello红外', os:'Windows 11 on ARM', connectivity:'WiFi 7 / 蓝牙5.4 / 5G可选', speakers:'2W双扬声器（Dolby Atmos）', material:'铝合金+支架', price:'¥8888' },
            '小米平板 7 Pro':        { processor:'骁龙 8 Gen 3 (4nm)', screen:'11.2" 3.2K LCD', resolution:'3200×2136', refresh:'144Hz', ram:'8GB / 12GB / 16GB', storage:'128GB / 256GB / 512GB', battery:'8850mAh / 67W快充', weight:'490g', stylus:'小米灵感触控笔（需另购）', camera:'5000万+200万景深', os:'Android 15 / HyperOS 2', connectivity:'WiFi 6E / 蓝牙5.3', speakers:'四扬声器（Dolby Atmos）', material:'铝合金', price:'¥2499' },
            '华为 MatePad Pro 13.2': { processor:'麒麟 9010 (5nm)', screen:'13.2" Flexible OLED', resolution:'2880×1920', refresh:'144Hz', ram:'12GB / 16GB', storage:'256GB / 512GB / 1TB', battery:'10100mAh / 88W快充', weight:'580g', stylus:'M-Pencil 3（星闪连接）', camera:'1300万+800万超广角', os:'HarmonyOS 4.3', connectivity:'WiFi 6E / 蓝牙5.3 / 星闪', speakers:'六扬声器（Huawei Sound）', material:'玻纤+金属', price:'¥4699' }
        },
        params: [
            ['处理器','processor'], ['屏幕','screen'], ['分辨率','resolution'], ['刷新率','refresh'],
            ['内存','ram'], ['存储','storage'], ['续航','battery'], ['重量','weight'],
            ['手写笔','stylus'], ['摄像头','camera'], ['操作系统','os'],
            ['连接','connectivity'], ['扬声器','speakers'], ['材质','material'], ['起售价','price']
        ],
        verdicts: {
            'iPad Pro M5': 'M5芯片+OLED屏幕，2025年发布。专业创作和生产力首选。',
            'iPad Air M3': 'iPad的均衡之选，M3性能够用，价格更亲民。学生和轻办公首选。',
            'Galaxy Tab S11 Ultra': '14.6寸超大屏+骁龙8至尊版+S Pen，2025年9月发布。影音和笔记神器。',
            'Surface Pro 11': '骁龙X Elite+14小时续航，接上键盘就是笔记本。生产力最强。',
            '小米平板 7 Pro': '2499起步，144Hz+骁龙8 Gen 3。学生和轻办公的性价比之选。',
            '华为 MatePad Pro 13.2': '星闪连接+六扬声器+88W快充，鸿蒙生态体验流畅。'
        }
    },
    earphone: {
        label: '🎧 耳机',
        products: {
            'AirPods Pro 3':      { chip:'Apple H2 + U2(充电盒)', anc:'主动降噪（大幅升级）', transparency:'自适应通透模式', sound:'定制高偏移驱动单元+高动态范围放大器', spatial:'个性化空间音频（头部追踪）', battery:'8h / 24h（含MagSafe充电盒）', charge:'USB-C / MagSafe / Qi2无线', waterproof:'IP57', bluetooth:'蓝牙5.4', weight:'5.55g', features:'对话感知 / 自适应音频 / 语音隔离 / 助听器功能', fit:'XS/S/M/L 四种硅胶耳塞', find:'查找网络 / 精确查找 / U2芯片', price:'¥1899' },
            'Sony WF-1000XM6':   { chip:'集成处理器 V2 + QN2e', anc:'行业顶尖降噪（8麦克风）', transparency:'环境声模式', sound:'8.4mm 动圈单元 + LDAC / DSEE Ultimate', spatial:'360 Reality Audio', battery:'8h / 24h（含充电盒）', charge:'USB-C / Qi无线', waterproof:'IPX4', bluetooth:'蓝牙5.3', weight:'6.2g', features:'Speak-to-Chat / 多点连接 / 自适应声音控制', fit:'SS/S/M/L 四种泡沫耳塞', find:'Sony Headphones Connect', price:'¥2499' },
            'Bose QC Ultra 2':   { chip:'Qualcomm S5 Gen 2 + Bose CustomTune', anc:'世界级降噪（CustomTune个性化）', transparency:'Aware模式（ActiveSense）', sound:'Bose 沉浸式音频', spatial:'Immersive Audio（头部追踪）', battery:'6h / 24h（含充电盒）', charge:'USB-C / Qi无线', waterproof:'IPX4', bluetooth:'蓝牙5.3', weight:'7.09g', features:'CustomTune / 多点连接 / 降噪等级调节 / 90天退换', fit:'S/M/L 三种硅胶耳塞', find:'Bose Music App', price:'¥2199' },
            'Galaxy Buds 3 Pro': { chip:'三星定制AI芯片', anc:'智能降噪（AI自适应）', transparency:'环境声模式', sound:'双驱动单元（动圈+平板振膜）', spatial:'360 Audio', battery:'7h / 30h（含充电盒）', charge:'USB-C / Qi无线', waterproof:'IP57', bluetooth:'蓝牙5.4', weight:'5.4g', features:'实时翻译 / AI降噪 / 多点连接 / 通话降噪', fit:'S/M/L 三种硅胶耳塞', find:'SmartThings Find', price:'¥1599' },
            '华为 FreeBuds Pro 3': { chip:'麒麟 A2', anc:'智慧降噪（最高47dB降噪深度）', transparency:'透传模式', sound:'超动态平衡增强单元', spatial:'华为空间音频', battery:'6.5h / 31h（含充电盒）', charge:'USB-C / Qi无线', waterproof:'IP54', bluetooth:'蓝牙5.4', weight:'5.8g', features:'多设备连接 / AI通话降噪 / 骨声纹', fit:'S/M/L 三种硅胶耳塞', find:'华为查找网络', price:'¥1499' },
            '小米 Buds 5 Pro':   { chip:'Qualcomm S7 Gen 1', anc:'50dB深度降噪（自适应）', transparency:'通透模式', sound:'11mm陶瓷扬声器 + LDAC', spatial:'小米空间音频', battery:'6.5h / 38h（含充电盒）', charge:'USB-C / Qi无线', waterproof:'IP55', bluetooth:'蓝牙5.4', weight:'5.3g', features:'多设备连接 / AI通话降噪 / 低延迟游戏模式', fit:'S/M/L 三种硅胶耳塞', find:'小米查找', price:'¥999' }
        },
        params: [
            ['芯片','chip'], ['降噪','anc'], ['通透模式','transparency'], ['音质','sound'],
            ['空间音频','spatial'], ['续航','battery'], ['充电方式','charge'],
            ['防水等级','waterproof'], ['蓝牙版本','bluetooth'], ['重量','weight'],
            ['特色功能','features'], ['佩戴','fit'], ['查找功能','find'], ['起售价','price']
        ],
        verdicts: {
            'AirPods Pro 3': 'H2芯片+IP57+8小时续航+助听器功能，苹果生态最佳搭档。2025年发布。',
            'Sony WF-1000XM6': '2026年2月发布，8麦克风降噪+LDAC，音质和降噪双天花板。',
            'Bose QC Ultra 2': '2025年6月发布，CustomTune个性化降噪+沉浸式音频，佩戴舒适度一流。',
            'Galaxy Buds 3 Pro': '双驱动单元音质出色，实时翻译功能实用，IP57防水等级高。',
            '华为 FreeBuds Pro 3': '鸿蒙生态首选，47dB降噪深度+骨声纹技术，性价比出色。',
            '小米 Buds 5 Pro': '999元的价格，50dB降噪+38小时续航，性价比无敌。'
        }
    },

};

// ========== 首页简要展示映射 ==========
// 从完整 PRODUCTS 数据中提取首页对比所需的简要字段
const HOME_PARAMS = {
    phone:    { keys: ['processor','screen','camera','battery','refresh','weight','price'], labels: ['处理器','屏幕','主摄','电池','刷新率','重量','起售价'] },
    laptop:   { keys: ['processor','screen','ram','storage','battery','weight','price'], labels: ['处理器','屏幕','内存','存储','续航','重量','起售价'] },
    tablet:   { keys: ['processor','screen','battery','weight','stylus','storage','price'], labels: ['处理器','屏幕','续航','重量','手写笔','存储','起售价'] },
    earphone: { keys: ['anc','sound','battery','weight','spatial','waterproof','price'], labels: ['降噪','音质','续航','重量','空间音频','防水','起售价'] }
};

function getHomeDevices() {
    const result = {};
    for (const [cat, mapping] of Object.entries(HOME_PARAMS)) {
        const catData = PRODUCTS[cat];
        const list = {};
        for (const [name, specs] of Object.entries(catData.products)) {
            list[name] = mapping.keys.map(k => specs[k] || '-');
        }
        result[cat] = { params: mapping.labels, list };
    }
    return result;
}

const homeDevices = getHomeDevices();