/** 水路 */
const waterwayMap = new Map();
// 天然水道
waterwayMap.set();
waterwayMap.set('river', {
    title: '河岸',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('stream', {
    title: '溪流',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('tidal_channel', {
    title: '潮汐通道',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
// 人工水道
waterwayMap.set('canal', {
    title: '渠道',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('drain', {
    title: 'drain',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('pressurised', {
    title: 'pressurised',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('fairway', {
    title: 'fairway',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
// 设施
waterwayMap.set('dock', {
    title: '码头',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('boatyard', {
    title: '造船厂',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
// 水道障碍
waterwayMap.set('dam', {
    title: '坝',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('weir', {
    title: '堰',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('waterfall', {
    title: '瀑布',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('lock_gate', {
    title: '水门',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
// 其他水道要素
waterwayMap.set('soakhole', {
    title: 'soakhole',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('turning_point', {
    title: 'turning_point',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('water_point', {
    title: 'water_point',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});
waterwayMap.set('fuel', {
    title: 'fuel',
    style: {
        color: '#7dd',
        opacity: 0.8,
    }
});


/** 公路 */
const highwayMap = new Map();
highwayMap.set('service', {
    title: '服务区',
    style: {
        color: '#fff',
    }
});
highwayMap.set('services', {
    title: '服务区',
    style: {
        color: 'rgb(170, 170, 170)',
        opacity: 0.5,
    }
});
highwayMap.set('motorway', {
    title: '高速公路',
    style: {
        color: '#CF2081',
    },
});
highwayMap.set('motorway_link', {
    title: '高速公路_链接',
    style: {
        color: '#CF2081',
    },
});
highwayMap.set('construction', {
    title: '建造道路',
    style: {
        color: '#fc6c14',
        dashArray: '6, 6'
    },
});
highwayMap.set('tertiary', {
    title: '三级道路',
    style: {
        color: '#FFF9B3',
    },
});
highwayMap.set('footway', {
    title: '步行道路',
    style: {
        color: '#FFF9B3',
    },
});
highwayMap.set('secondary', {
    title: '次要公路',
    style: {
        color: '#F3F312',
    },
});
highwayMap.set('trunk', {
    title: '干线道路',
    style: {
        color: '#DD2F22',
    },
});
highwayMap.set('trunk_link', {
    title: '住宅道路',
    style: {
        color: '#DD2F22',
    },
})
highwayMap.set('unclassified', {
    title: '未分类',
    style: {
        color: '#dca',
    },
});
highwayMap.set('primary', {
    title: '主要道路',
    style: {
        color: '#F99806',
    },
});
highwayMap.set('residential', {
    title: '住宅道路',
    style: {
        color: '#fff',
    },
});

/** 土地利用 */
const landuseMap = new Map();
// 已开发土地
landuseMap.set('commercial', {
    title: '商业办公用地',
    style: {
        color: '',
    },
});
landuseMap.set('construction', {
    title: '建筑工地',
    style: {
        color: '',
    },
});
landuseMap.set('education', {
    title: '主要用于教育目的/设施的区域。',
    style: {
        color: '',
    },
});
landuseMap.set('fairground', {
    title: '展会举办地',
    style: {
        color: '',
    },
});
landuseMap.set('industrial', {
    title: '工业用地，包括工厂、车间和仓储用地。',
    style: {
        color: 'rgb(228, 164, 245)',
        weight: 1,
    },
});
landuseMap.set('residential', {
    title: '居住区',
    style: {
        color: 'rgb(196, 189, 25)',
        weight: 1,
    },
});
landuseMap.set('retail', {
    title: '商业零售用地',
    style: {
        color: '',
        weight: 1,
    },
});
// 乡村与农业用地
landuseMap.set('aquaculture', {
    title: '水产养殖是淡水和咸水生物的养殖，例如有鳍鱼、软体动物、甲壳类动物和水生植物',
    style: {
        color: '',
    },
});
landuseMap.set('allotments', {
    title: '市民农场。当地居民的私人菜圃、花圃。',
    style: {
        color: '',
    },
});
landuseMap.set('farmland', {
    title: '农业设施，农业相关设施如农舍，农庄，庄园，棚架，马场，仓库，农机具车库，饲料仓库等，与该设施相邻之树林。',
    style: {
        color: '',
    },
});
landuseMap.set('flowerbed', {
    title: '鲜花专用区',
    style: {
        color: '',
    },
});
landuseMap.set('forest', {
    title: '林业用地。天然林请改用natural=wood。',
    style: {
        color: '',
    },
});
landuseMap.set('greenhouse_horticulture', {
    title: '温室用地，用于种植蔬菜和花卉的大棚。',
    style: {
        color: '',
    },
});
landuseMap.set('meadow', {
    title: '牧草地，以栽种草本植物或牧草等作物（如甘蔗，玉米或牧草）为主要用途。',
    style: {
        color: '',
    },
});
landuseMap.set('orchard', {
    title: '育种苗圃，人为栽培新品种植物。',
    style: {
        color: '',
    },
});
landuseMap.set('vineyard', {
    title: '葡萄园',
    style: {
        color: '',
    },
});
landuseMap.set('basin', {
    title: '人工挖掘的集水区。搭配basin=*标注集水区种类。',
    style: {
        color: 'rgb(170, 170, 170)',
        weight: 1,
        fillOpacity: 0.2,
    },
});
landuseMap.set('salt_pond', {
    title: '盐田，用于让海水蒸发以取得盐的土地。',
    style: {
        color: '',
    },
});
landuseMap.set('brownfield', {
    title: '棕地，废弃的工商业用地，通常旧有建筑已被拆除并将进行更新改造的。',
    style: {
        color: '',
    },
});
landuseMap.set('cemetery', {
    title: '墓地。可使用religion=* (可选用的值列在place of worship page)。较小的墓地，如教堂边的也可使用amenity=grave_yard标签代替',
    style: {
        color: '',
    },
});
landuseMap.set('depot', {
    title: '用作仓库的区域，例如车辆（火车、公共汽车或电车）。考虑使用相当标准的土地利用标签，如 landuse=railway、landuse=commercial、landuse=industrial，以及 industrial=depot 等子标签。',
    style: {
        color: '',
    },
});
landuseMap.set('garages', {
    title: '连片的车库。',
    style: {
        color: '',
    },
});
landuseMap.set('grass', {
    title: '人工管理的草坪。有些人认为这不是土地利用，请参阅主页landuse=grass以获取信息。',
    style: {
        color: '',
    },
});
landuseMap.set('greenfield', {
    title: '待开发的闲置土地。',
    style: {
        color: '',
    },
});
landuseMap.set('landfill', {
    title: '垃圾堆放/填埋场地',
    style: {
        color: '',
    },
});
landuseMap.set('military', {
    title: '军事用地，包括由军队拥有控制的各种用途的土地。',
    style: {
        color: '',
    },
});
landuseMap.set('port', {
    title: '处理商业交通的沿海工业区。考虑将landuse=industrial+industrial=port用于此类工业区域。',
    style: {
        color: '',
    },
});
landuseMap.set('quarry', {
    title: '露天采矿/采石场',
    style: {
        color: '',
    },
});
landuseMap.set('railway', {
    title: '铁路用地，一般不对公众开放。',
    style: {
        color: '',
    },
});
landuseMap.set('recreation_ground', {
    title: '游憩用地。常包含球场，绿地等，多为公立，亦可能属于大学或私人公司。',
    style: {
        color: '',
    },
});
landuseMap.set('religious', {
    title: '宗教用地',
    style: {
        color: '',
    },
});
landuseMap.set('village_green', {
    title: '畸零绿地，常用于分环岛，分隔带等，原意为欧洲社区共有的绿地。',
    style: {
        color: '',
    },
});
landuseMap.set('winter_sports', {
    title: '专门用于冬季运动的区域（例如滑雪）',
    style: {
        color: '',
    },
});

/** 设施 */
const amenityMap = new Map();
// 餐饮设施
amenityMap.set('bar', {
    title: '酒吧（bar）。贩卖酒精饮料的商业场所。特点是嘈杂、气氛活跃，通常不贩售食品。请见amenity=bar和amenity=pub区分二者的不同。\t\n',
    style: {
        color: '',
    },
});
amenityMap.set('biergarten', {
    title: '啤酒花园，提供酒精饮料及食物的露天设施。另见amenity=pub;bar;restaurant。通常属于酒馆、酒吧、饭店的一部分，这种情况下可以在amenity=pub;bar;restaurant的基础上使用biergarten=yes标签。',
    style: {
        color: '',
    },
});
amenityMap.set('cafe', {
    title: '咖啡店，一般是非正式的场所，提供简单的餐食和饮料，通常以咖啡或茶为主。提供正式餐食的咖啡厅还可标注cuisine=*和diet:*=*。另见：amenity=restaurant;bar;fast_food。',
    style: {
        color: '',
    },
});
amenityMap.set('fast_food', {
    title: '快餐店（另见amenity=restaurant）。提供正式餐食的餐厅还可标注cuisine=*和diet:*=*。',
    style: {
        color: '',
    },
});
amenityMap.set('food_court', {
    title: '美食广场，通常在商场、机场等建筑内。由多家餐馆、食品柜台、公共进餐区组成。',
    style: {
        color: '',
    },
});
amenityMap.set('ice_cream', {
    title: '冷饮店，在柜台售卖冰淇淋、冻酸奶等的设施。',
    style: {
        color: '',
    },
});
amenityMap.set('pub', {
    title: '酒吧（pub，静吧）。与bar相比，环境更为闲适，同时提供餐食。',
    style: {
        color: '',
    },
});
amenityMap.set('restaurant', {
    title: '餐厅（不是快餐amenity=fast_food）。提供的菜式可使用cuisine=*和diet:*=*标注。',
    style: {
        color: '',
    },
});
// 教育设施
amenityMap.set('college', {
    title: '学院，学院之校园或建物。',
    style: {
        color: '',
    },
});
amenityMap.set('driving_school', {
    title: '驾驶学校。',
    style: {
        color: '',
    },
});
amenityMap.set('language_school', {
    title: '语言学校。',
    style: {
        color: '',
    },
});
amenityMap.set('library', {
    title: '图书馆。',
    style: {
        color: '',
    },
});
amenityMap.set('toy_library', {
    title: '玩具图书馆，一个提供玩具在现场玩耍的地方，有些提供外借服务。',
    style: {
        color: '',
    },
});
amenityMap.set('training', {
    title: 'Public place where you can get training.',
    style: {
        color: '',
    },
});
amenityMap.set('music_school', {
    title: '音乐学校。',
    style: {
        color: '',
    },
});
amenityMap.set('school', {
    title: '学校。',
    style: {
        color: 'rgba(255, 255, 148, 0.75)',
        weight: 1,
    },
});
amenityMap.set('university', {
    title: '大学，大学之校园。',
    style: {
        color: '',
    },
});
// 交通设施
amenityMap.set('bicycle_parking', {
    title: '自行车（单车/脚踏车）停车场。',
    style: {
        color: 'rgb(170, 170, 170)',
        weight: 1,
    },
});
amenityMap.set('bicycle_repair_station', {
    title: '自行车自助维修站。',
    style: {
        color: '',
    },
});
amenityMap.set('bicycle_rental', {
    title: '自行车（单车/脚踏车）租借处。提供租自行车服务的店家或设施。',
    style: {
        color: '',
    },
});
amenityMap.set('boat_rental', {
    title: '游船租借处。',
    style: {
        color: '',
    },
});
amenityMap.set('boat_sharing', {
    title: '游船共享处。',
    style: {
        color: '',
    },
});
amenityMap.set('bus_station', {
    title: '巴士总站，也可以标记为 public_transport=station。',
    style: {
        color: 'rgb(224, 110, 95)',
    },
});
amenityMap.set('car_rental', {
    title: '租车处。提供租车服务的店家。',
    style: {
        color: '',
    },
});
amenityMap.set('car_sharing', {
    title: '共享汽车，提供汽车共享服務之处。',
    style: {
        color: '',
    },
});
amenityMap.set('car_wash', {
    title: '洗车，一提供洗车服务之地方。',
    style: {
        color: '',
    },
});
amenityMap.set('compressed_air', {
    title: '给轮胎/轮胎充气的装置（例如汽车、自行车）',
    style: {
        color: '',
    },
});
amenityMap.set('vehicle_inspection', {
    title: '车辆检测中心。',
    style: {
        color: '',
    },
});
amenityMap.set('charging_station', {
    title: '电动车辆充电设施。',
    style: {
        color: '',
    },
});
amenityMap.set('ferry_terminal', {
    title: '渡轮站/渡轮码头，渡轮停靠站可供人和车辆上船。',
    style: {
        color: '',
    },
});
amenityMap.set('fuel', {
    title: '加油站。汽油、瓦斯、和船舶加油站都属于这个标签；通往加油站的通道常标记为 highway=service',
    style: {
        color: '',
    },
});
amenityMap.set('grit_bin', {
    title: '一用来存放砂，或砂盐混合的容器。',
    style: {
        color: '',
    },
});
amenityMap.set('motorcycle_parking', {
    title: '摩托车停车场。',
    style: {
        color: '',
    },
});
amenityMap.set('parking', {
    title: '停车场，以点(node)或区域(area)(没有access标签)显示并标注停车的符号，区域（Area）会有颜色区分，停车场内的道路长被标记为 highway=service 和 service=parking_aisle',
    style: {
        color: '',
    },
});
amenityMap.set('parking_entrance', {
    title: '用于地下或多楼层停车场的车辆出入口，可用标记为 type=site 和 site=parking 的关系（relation）来集合多个出入口，不要和 amenity=parking 搞混。',
    style: {
        color: '',
    },
});
amenityMap.set('parking_space', {
    title: '停车位，是指单一的停车格，可用标记为 type=site 和 site=parking 的关系（relation）来集合多个停车格，不要和 amenity=parking 搞混。\t\n',
    style: {
        color: '',
    },
});
amenityMap.set('taxi', {
    title: '出租车／的士站。',
    style: {
        color: '',
    },
});
// 金融设施
amenityMap.set('atm', {
    title: '自动柜员机。',
    style: {
        color: '',
    },
});
amenityMap.set('bank', {
    title: '银行。如果银行中也有自动柜员机（ATM），最好用独立的点（node）来表示每一个自动柜员机。',
    style: {
        color: '',
    },
});
amenityMap.set('bureau_de_change', {
    title: '外币兑换处/找换店，提供各种货币交换和旅行支票兑换的地方。（bureau_de_change为英式英文，美式英文为currency exchange）',
    style: {
        color: '',
    },
});
// 医疗设施
amenityMap.set('baby_hatch', {
    title: '弃婴保护舱。是一种容器或场所，让因为某些理由而无法继续养育婴儿（通常是新生儿）的家长，能匿名的将婴儿放置于其中，之后会有特定人士前来收取并照顾。',
    style: {
        color: '',
    },
});
amenityMap.set('clinic', {
    title: '诊所，小型规模的医疗与健康照顾服务之设施。',
    style: {
        color: '',
    },
});
amenityMap.set('dentist', {
    title: '牙科诊所，牙医出诊和进行牙科手术之处。',
    style: {
        color: '',
    },
});
amenityMap.set('doctors', {
    title: '医务所，医生出诊和进行手术之处。',
    style: {
        color: '',
    },
});
amenityMap.set('hospital', {
    title: '医院，常与 emergency=* 并用来区别是否有急救设施)',
    style: {
        color: '',
    },
});
amenityMap.set('nursing_home', {
    title: '疗养院/养老院，一个给行动不便或老年人长期照顾的地方。已改用 amenity=social_facility + social_facility=nursing_home',
    style: {
        color: '',
    },
});
amenityMap.set('pharmacy', {
    title: '药店/药房。\n' +
        'dispensing=yes\n' +
        'dispensing=no 或 omitted (意思为是否能在经过医师处方销售处方药)',
    style: {
        color: '',
    },
});
amenityMap.set('social_facility', {
    title: '提供社会服务的设施。',
    style: {
        color: '',
    },
});
amenityMap.set('veterinary', {
    title: '兽医院。',
    style: {
        color: '',
    },
});
// 文娱设施
amenityMap.set('arts_centre', {
    title: '艺术中心。',
    style: {
        color: '',
    },
});
amenityMap.set('cinema', {
    title: '电影院。播放电影的地方。（美式英语：movie theater）',
    style: {
        color: '',
    },
});
amenityMap.set('community_centre', {
    title: '社区中心，被使用来举办本地活动、庆典或集体活动的地方；包括特殊的兴趣和特殊的年龄段。',
    style: {
        color: '',
    },
});
amenityMap.set('conference_centre', {
    title: '用于举行会议的大型建筑物',
    style: {
        color: '',
    },
});
amenityMap.set('events_venue', {
    title: '专门用于举办活动的建筑物',
    style: {
        color: '',
    },
});
amenityMap.set('exhibition_centre', {
    title: '展览中心',
    style: {
        color: '',
    },
});
amenityMap.set('fountain', {
    title: '喷泉，通常是用于文化上，装饰上和娱乐上的目的。',
    style: {
        color: '',
    },
});
amenityMap.set('gambling', {
    title: '赌博电玩店，通常提供宾果机，柏青哥机台等此标签不等于：书商 shop=bookmaker、投注站 shop=lottery、赌场 amenity=casino 或成人游戏中心 leisure=adult_gaming_centre。',
    style: {
        color: '',
    },
});
amenityMap.set('music_venue', {
    title: '聆听当代现场音乐的室内场所。',
    style: {
        color: '',
    },
});
amenityMap.set('nightclub', {
    title: '夜店／夜总会。',
    style: {
        color: '',
    },
});
amenityMap.set('planetarium', {
    title: '天文馆',
    style: {
        color: '',
    },
});
amenityMap.set('public_bookcase', {
    title: '公共书架，類似台灣的漂書站。是種置於街頭放有書的傢俱，可在此帶走書或留下一本書。',
    style: {
        color: '',
    },
});
amenityMap.set('social_centre', {
    title: '举辨免费或非营利活动的地方。',
    style: {
        color: '',
    },
});
amenityMap.set('studio', {
    title: '工作室，电视，广播或录音的工作室。录音室。',
    style: {
        color: '',
    },
});
amenityMap.set('theatre', {
    title: '剧院。',
    style: {
        color: '',
    },
});
// 公共服务
amenityMap.set('courthouse', {
    title: '法院，一个给予公平正义的地方。',
    style: {
        color: '',
    },
});
amenityMap.set('fire_station', {
    title: '消防局。',
    style: {
        color: '',
    },
});
amenityMap.set('police', {
    title: '警察局、派出所。',
    style: {
        color: '',
    },
});
amenityMap.set('post_box', {
    title: '邮箱。',
    style: {
        color: '',
    },
});
amenityMap.set('post_depot', {
    title: '邮局或投递办公室，在投递前收集和分拣信件和包裹。',
    style: {
        color: '',
    },
});
amenityMap.set('post_office', {
    title: '邮局。',
    style: {
        color: '',
    },
});
amenityMap.set('prison', {
    title: '监狱。',
    style: {
        color: 'rgba(255, 255, 255, 0.3)',
        fill: 'rgba(255, 255, 255, 0.3)',
        weight: 1,
    },
});
amenityMap.set('ranger_station', {
    title: '国家公园游客中心，国家公园管理站。',
    style: {
        color: '',
    },
});
amenityMap.set('townhall', {
    title: '市政厅，乡，镇，市等地方政府的办公大楼，或者是社区公所。',
    style: {
        color: '',
    },
});
// 设施
amenityMap.set('bbq', {
    title: '长期的存在的、允许烧烤食物的设施，通常位于室外公共用地，如公园、海滩等。使用fuel=*来标注燃料的类型，如fuel=wood;electric;charcoal。标注附近的桌椅，请使用tourism=picnic_site；标注篝火请使用leisure=firepit。',
    style: {
        color: '',
    },
});
amenityMap.set('bench', {
    title: '长椅，用来坐下来休息的椅子。',
    style: {
        color: '',
    },
});
amenityMap.set('dog_toilet', {
    title: '指定给狗排尿和排泄的区域。',
    style: {
        color: '',
    },
});
amenityMap.set('dressing_room', {
    title: '指定换衣服的地方。',
    style: {
        color: '',
    },
});
amenityMap.set('drinking_water', {
    title: '公共饮水处。',
    style: {
        color: '',
    },
});
amenityMap.set('give_box', {
    title: '一个小型设施，人们可以在免费共享和重复使用的意义上放下和拿起各种类型的物品。',
    style: {
        color: '',
    },
});
amenityMap.set('mailroom', {
    title: '接收包裹或信件的收发室。',
    style: {
        color: '',
    },
});
amenityMap.set('parcel_locker', {
    title: '收寄包裹机',
    style: {
        color: '',
    },
});
amenityMap.set('shelter', {
    title: '对恶劣天气条件的小避难所。要额外描述避难所的用途，请使用shelter_type=*。凉亭。',
    style: {
        color: '',
    },
});
amenityMap.set('shower', {
    title: '公共淋浴间或公共澡堂。',
    style: {
        color: '',
    },
});
amenityMap.set('telephone', {
    title: '公共电话亭。',
    style: {
        color: '',
    },
});
amenityMap.set('toilets', {
    title: '厕所。有些可能需要付费。',
    style: {
        color: '',
    },
});
amenityMap.set('water_point', {
    title: '你可以得到大量的饮用水的地点。',
    style: {
        color: '',
    },
});
amenityMap.set('watering_place', {
    title: '一个可以储存动物可以饮用的水的地方。',
    style: {
        color: '',
    },
});

/** 建筑 */
const buildingMap = new Map();
buildingMap.set('apartments', {
    title: '公寓楼：用作分配住宅的建筑，通常有多个的楼层。也可能在首层有临街店铺。',
    style: {
        color: '',
    },
});
buildingMap.set('barracks', {
    title: '兵营：为安置军事人员或相关劳动者而建造的建筑物。',
    style: {
        color: '',
    },
});
buildingMap.set('bungalow', {
    title: '平房：一个单层的独立小房子，在野外俗称乡间宅第。',
    style: {
        color: '',
    },
});
buildingMap.set('cabin', {
    title: '小木屋：矮小、施工风格粗犷、有圆木外墙的小屋，通常在野外和林地常见。',
    style: {
        color: '',
    },
});
buildingMap.set('detached', {
    title: '分离式建筑：附属于附近一户独栋人家或主建筑的独立小屋，通常可用作车库、仓库、工坊等。',
    style: {
        color: '',
    },
});
buildingMap.set('dormitory', {
    title: '宿舍：为各类院校的学生预备的居住建筑（注意，在英式英语中，这个词不是集体宿舍，可能是单间）。或者可以使用 building=residential 外加 residential=university 来表达这是给学生居住用的建筑。',
    style: {
        color: '',
    },
});
buildingMap.set('farm', {
    title: '农宅：一种在农场之内、与农业风格相符的农家住宅。对于农场里的其他作用建筑，请参见下方的 building=farm_auxiliary，building=barn 等。如果你所在国家的农宅外形和普通房屋相似，那也可以直接使用 building=house 标签。另外可参考一下 landuse=farmyard 用以表示其周边的农庄地带。',
    style: {
        color: '',
    },
});
buildingMap.set('ger', {
    title: '蒙古包（或类似的帐篷建筑）：永久性或季节性的蒙古包等。',
    style: {
        color: '',
    },
});
buildingMap.set('hotel', {
    title: '酒店：设计有多个客房用以过夜留宿的建筑物。此标签使用时，通常与 tourism=hotel 标签配合，用以表达附属娱乐设施和停车设施。',
    style: {
        color: '',
    },
});
buildingMap.set('house', {
    title: '房屋（不仅限于独栋房屋）：一栋独栋房子，或是联排房屋的其中一栋。每栋内部为一个家庭所居住（其内部也有可能是迷你民宿、迷你公寓，但至少有一个公共厨房等设施）。房屋可为多种类型：其有附属的分离式建筑（例如车库、仓库、工坊）；若其属于联排房屋中的一栋，那么应至少有两个节点与邻户共用，用以定义两套产权界线上的公共墙。',
    style: {
        color: '',
    },
});
buildingMap.set('houseboat', {
    title: '船屋：主要用作住宅的水上船只。',
    style: {
        color: '',
    },
});
buildingMap.set('residential', {
    title: '居住区/居民地：用以表达居民地建筑物的通用标签，并且可以考虑使用更详细标记，例如“公寓”、“联排房屋”、“房屋”、“半分离房屋”等。',
    style: {
        color: '',
    },
});
buildingMap.set('semidetached_house', {
    title: '半独立式房屋：两者之间有一堵公共墙的两户对称（或近乎对称）的房屋。在美式英语中，通常称为"duplex"。',
    style: {
        color: '',
    },
});
buildingMap.set('static_caravan', {
    title: '拖车房屋：一座可移动房屋，以永久或半永久性质放置在该地。',
    style: {
        color: '',
    },
});
buildingMap.set('terrace', {
    title: '联排房屋：此标签用于直接表达一整串紧密相邻的民宅的外轮廓。这些房屋的每个组成户都有其独立的出入口，它们串联在一起，组成的即是联排房屋 (在北美英语中，联排房屋称为"row-house"或"townhouse")。条件允许的话，也请考虑使用前文介绍的"house"值去定义其中每一户民宅的具体区域。',
    style: {
        color: '',
    },
});
// 商业
buildingMap.set('commercial', {
    title: '商业：用以表达未指定主要业务、或多元化业务的商业建筑物，不一定就要是办公楼。另外，如果符合实际情况，请考虑对周边的区域使用 landuse=commercial 标签，若这些建筑群内主要是商店，则应考虑使用\'retail\'（零售）作为值。',
    style: {
        color: '',
    },
});
buildingMap.set('industrial', {
    title: '工业：用于工业用途的建筑物。如果该建筑物主要是用于仓储/物流，则应使用\'warehouse\'（仓库）值。也请考虑对周边的区域使用 landuse=industrial ，且应用 man_made=works 此类或相关的标签来描述其具体的工业活动类型。',
    style: {
        color: 'rgb(224, 110, 95)',
        weight: 1,
    },
});
buildingMap.set('kiosk', {
    title: '售货亭/小卖部：一个小型单间零售建筑。',
    style: {
        color: '',
    },
});
buildingMap.set('kiosk', {
    title: '售货亭/小卖部：一个小型单间零售建筑。',
    style: {
        color: '',
    },
});
buildingMap.set('office', {
    title: '办公楼/办公室：办公建筑。可使用 office=* 字段以注明其具体业务类型。请考虑对其周边的区域使用 landuse=commercial 标签，若此建筑内主要是商店，则还是应考虑使用\'retail\'（零售）作为值。',
    style: {
        color: '',
    },
});
buildingMap.set('retail', {
    title: '零售：主要用于向公共社会销售商品的建筑。使用 shop=* 标签以注明其销售的商品类型，或应用 amenity=* pub, cafe, restaurant等字段，以注明酒吧、咖啡厅、餐厅等服务场所。也请考虑对其周边区域使用 landuse=retail 作为标签.',
    style: {
        color: '',
    },
});
buildingMap.set('supermarket', {
    title: '超市/超级市场：用于自选购物的大型市场、商店建筑',
    style: {
        color: '',
    },
});
buildingMap.set('warehouse', {
    title: '仓库：主要用于存储货物、商品，或用来作为物流系统的建筑。',
    style: {
        color: '',
    },
});
// 宗教
buildingMap.set('cathedral', {
    title: '大教堂：一座大教堂。可对其和周边附属地带关联使用 amenity=place_of_worship，religion=*，denomination=*和landuse=religious。',
    style: {
        color: '',
    },
});
buildingMap.set('chapel', {
    title: '小教堂：一座小教堂。可对其和周边附属地带关联使用 amenity=place_of_worship，religion=*，denomination=*和landuse=religious。',
    style: {
        color: '',
    },
});
buildingMap.set('church', {
    title: '王国堂。一座 王国堂。其与附属周边地带常关联使用 amenity=place_of_worship，religion=christian，denomination=jehovahs_witness和 landuse=religious。',
    style: {
        color: '',
    },
});
buildingMap.set('monastery', {
    title: '修道院：一座[W] 修道院。通常，修道院还会关联好几座不同功能的建筑物。对于真正运作中的修道院（或其社区范围），请用 amenity=monastery 进行注明。 对于以前的修道院历史古迹，请参考使用 historic=monastery。',
    style: {
        color: '',
    },
});
buildingMap.set('mosque', {
    title: '清真寺：一座清真寺。可对其和周边附属地带关联使用 amenity=place_of_worship，religion=*，denomination=*和landuse=religious。',
    style: {
        color: '',
    },
});
buildingMap.set('presbytery', {
    title: '长老会：用于牧者、神父等宗教团体的首领生活和居住的建筑物。',
    style: {
        color: '',
    },
});
buildingMap.set('religious', {
    title: '宗教：对于宗教相关建筑的通用标签。在条件允许的情况下，还是请考虑使用前文内容对宗教建筑做详细的注明。',
    style: {
        color: '',
    },
});
buildingMap.set('shrine', {
    title: '神社：一座神社。可对其和周边附属地带关联使用 amenity=place_of_worship，religion=*，denomination=*和landuse=religious。对于常见的小型的神社，应考虑使用 historic=wayside_shrine（路边神龛）标签。',
    style: {
        color: '',
    },
});
buildingMap.set('synagogue', {
    title: '犹太教堂：一座犹太教堂。可对其和周边附属地带关联使用 amenity=place_of_worship，religion=*，denomination=*和landuse=religious。',
    style: {
        color: '',
    },
});
buildingMap.set('temple', {
    title: '寺庙：一座寺庙。可对其和周边附属地带关联使用 amenity=place_of_worship，religion=*，denomination=*和landuse=religious。',
    style: {
        color: '',
    },
});
// 公共
buildingMap.set('bakehouse', {
    title: '作为面包房建造的建筑物（即用于烘烤面包）。通常与另一个节点 amenity=baking oven 和 oven=wood fired 结合使用。',
    style: {
        color: '',
    },
});
buildingMap.set('civic', {
    title: '为容纳一些市政设施而创建的建筑物的通用标签，例如 amenity=community_centre、amenity=library、amenity=toilets、leisure=sports_centre、leisure=swimming_pool、amenity=townhall 等。使用 amenity=* 或 leisure=* 等。提供进一步的细节。参见 building=public 和更具体的标签，如 building=library。',
    style: {
        color: '',
    },
});
buildingMap.set('college', {
    title: '一座学院大楼。在整个学院区域使用 amenity=college 将学院表示为一个机构。',
    style: {
        color: '',
    },
});
buildingMap.set('fire_station', {
    title: '作为消防站建造的建筑物，即无论当前用途如何，都可以容纳消防设备和人员。在活动消防站的地面上添加 amenity=fire_station。',
    style: {
        color: '',
    },
});
buildingMap.set('government', {
    title: '适用于一般政府建筑，包括市、省和部门秘书、政府机构和部门、市政厅、（地区）议会和法院。',
    style: {
        color: '',
    },
});
buildingMap.set('hospital', {
    title: '为医院建造的建筑物。使用 amenity=hospital 作为医院场地。',
    style: {
        color: '',
    },
});
buildingMap.set('kindergarten', {
    title: '适用于任何普通幼儿园建筑。特定用途的建筑物（体育馆等）应根据其用途进行标记。如果建筑物中目前有幼儿园，请在幼儿园场地周边使用 amenity=kindergarten。',
    style: {
        color: '',
    },
});
buildingMap.set('public', {
    title: '为公众方便而建造的建筑物（市政厅、警察局、法院等）。',
    style: {
        color: '',
    },
});
buildingMap.set('school', {
    title: '作为学校建造的建筑物。特定用途的建筑物（体育馆等）应根据其用途进行标记。如果当前有一所学校，请在校园周边使用 amenity=school。',
    style: {
        color: '',
    },
});
buildingMap.set('toilets', {
    title: '马桶块。',
    style: {
        color: '',
    },
});
buildingMap.set('train_station', {
    title: '建造成火车站建筑的建筑物，包括如今被废弃和用于不同目的的建筑物。',
    style: {
        color: '',
    },
});
buildingMap.set('transportation', {
    title: '与公共交通相关的建筑。您可能还想用适当的交通相关标签来标记它，例如 public_transport=station。请注意，火车站建筑物有一个特殊标签 - building=train_station。',
    style: {
        color: '',
    },
});
buildingMap.set('university', {
    title: '一座大学建筑。对于作为机构的大学，使用 amenity=university。',
    style: {
        color: '',
    },
});
// 农业
buildingMap.set('barn', {
    title: '用于存储和作为有盖工作场所的农业建筑。',
    style: {
        color: '',
    },
});
buildingMap.set('conservatory', {
    title: '具有玻璃或防水油布屋顶和墙壁的建筑物或房间用作室内花园或日光浴室（冬季花园）。',
    style: {
        color: '',
    },
});
buildingMap.set('cowshed', {
    title: '牛棚（cow barn、cow house）是饲养奶牛的建筑物，通常出现在农场。',
    style: {
        color: '',
    },
});
buildingMap.set('farm_auxiliary', {
    title: '农场上的非住宅建筑（使用“农场”或“房屋”表示农舍）。',
    style: {
        color: '',
    },
});
buildingMap.set('greenhouse', {
    title: '温室是用于种植植物的玻璃或塑料覆盖的建筑物。 Use land use=greenhouse horticulture 对于包含多个温室的区域',
    style: {
        color: '',
    },
});
buildingMap.set('slurry_tank', {
    title: '一座圆形建筑，用于容纳主要由动物排泄物（也称为泥浆）组成的液体混合物。',
    style: {
        color: '',
    },
});
buildingMap.set('stable', {
    title: '马厩是饲养马匹的建筑物。',
    style: {
        color: '',
    },
});
buildingMap.set('sty', {
    title: '猪圈（pigsty、pig ark、pig-shed）是饲养家猪的建筑物，通常见于农场。',
    style: {
        color: '',
    },
});
// 体育
buildingMap.set('grandstand', {
    title: '主看台通常有屋顶，为赛马场或运动场的观众提供最佳视野。',
    style: {
        color: '',
    },
});
buildingMap.set('pavilion', {
    title: '体育馆通常有更衣室、储藏区，可能还有举办活动和活动的空间。避免将此术语用于其他被建筑师称为展馆的结构（参见 [W] 展馆）',
    style: {
        color: '',
    },
});
buildingMap.set('riding_hall', {
    title: '作为骑马场建造的建筑物。',
    style: {
        color: '',
    },
});
buildingMap.set('sports_hall', {
    title: '一座作为体育馆建造的建筑。',
    style: {
        color: '',
    },
});
buildingMap.set('stadium', {
    title: '建造成体育场建筑的建筑物，包括如今被遗弃和用于不同目的的建筑物。',
    style: {
        color: '',
    },
});
// 仓储
buildingMap.set('hangar', {
    title: '机库是用于存放飞机、直升机或航天器的建筑物。适当时考虑添加 aeroway=hangar。',
    style: {
        color: '',
    },
});
buildingMap.set('hut', {
    title: '小屋是一个小而简陋的住所。注意这个词有两个意思——它可能是building=shed的同义词，也可能是劣质住宅楼。',
    style: {
        color: '',
    },
});
buildingMap.set('shed', {
    title: '棚子是一种简单的单层结构，位于后花园或用于存储、兴趣爱好或车间的分配区。',
    style: {
        color: '',
    },
});
// 汽车
buildingMap.set('carport', {
    title: '车棚是一种有盖结构，用于为车辆（主要是汽车）提供有限的保护。与大多数结构不同，车棚没有四堵墙，通常只有一两堵。',
    style: {
        color: '',
    },
});
buildingMap.set('garage', {
    title: '车库是适合存放一辆或多辆机动车或类似车辆的建筑物。参见 building=garages 以获得更大的共享建筑物。对于飞机车库，参见 building=hangar。',
    style: {
        color: '',
    },
});
buildingMap.set('garages', {
    title: '由多个独立的存储空间组成的建筑物，供不同的所有者/租户使用。另见建筑=车库。',
    style: {
        color: '',
    },
});
buildingMap.set('parking', {
    title: '专为停放汽车而建的结构。',
    style: {
        color: '',
    },
});
// 电力
buildingMap.set('digester', {
    title: '沼气池是一种生物反应器，用于从生物质中生产可充气沼气。',
    style: {
        color: '',
    },
});
buildingMap.set('service', {
    title: '服务大楼通常是带有某些机械（如泵或变压器）的小型无人建筑。',
    style: {
        color: '',
    },
});
buildingMap.set('transformer_tower', {
    title: '变压器塔是一种典型的高层建筑，包括配电变压器，其构造可直接连接到中压架空电力线。很多时候，电力线已被埋入地下，但该建筑物仍可用作变电站。如果该建筑物仍在用作变电站，则还应将其标记为 power=substation + substation=minor_distribution。',
    style: {
        color: '',
    },
});
buildingMap.set('water_tower', {
    title: '一座水塔',
    style: {
        color: '',
    },
});
// 其他建筑
buildingMap.set('beach_hut', {
    title: '在流行的海滨浴场上，通常是木制的、通常颜色鲜艳的小木屋或避难所，位于涨潮标志上方。',
    style: {
        color: '',
    },
});
buildingMap.set('bunker', {
    title: '坚固的军事建筑。也使用 military=bunker。',
    style: {
        color: '',
    },
});
buildingMap.set('bridge', {
    title: '用作桥梁（天桥）的建筑物。要映射门楼，请使用 building=gatehouse。另见 bridge=yes for highway=*。不要仅将此标签用于标记桥梁（它们的轮廓）。为此，请使用 man_made=bridge。',
    style: {
        color: '',
    },
});
buildingMap.set('castle', {
    title: '建造成城堡的建筑。可以使用 historic=castle + castle_type=* 进一步指定。',
    style: {
        color: '',
    },
});
buildingMap.set('construction', {
    title: '用于在建建筑物。使用 construction=* 保存已完工建筑的价值。',
    style: {
        color: '',
    },
});
buildingMap.set('container', {
    title: '对于用作永久建筑物的容器。不要映射临时放置的容器，例如用于运输或建筑的容器。',
    style: {
        color: '',
    },
});
buildingMap.set('gatehouse', {
    title: '入口控制点建筑物，跨越进入城市或大院的高速公路。',
    style: {
        color: '',
    },
});
buildingMap.set('military', {
    title: '军事建筑。也可以使用 military=*。',
    style: {
        color: '',
    },
});
buildingMap.set('roof', {
    title: '由侧面开放的屋顶组成的结构，例如避雨棚和加油站',
    style: {
        color: '',
    },
});
buildingMap.set('ruins', {
    title: '经常用于废弃和维修不善的房屋或其他建筑物。然而，有些人认为这种用法是不正确的，该标签只能用于建造为假废墟的建筑物（例如英国风景园林中的假废墟）。另请参阅生命周期标记。',
    style: {
        color: '',
    },
});
buildingMap.set('tent', {
    title: '对于永久放置的帐篷。不要贴临时放置的帐篷。',
    style: {
        color: '',
    },
});
buildingMap.set('tree_house', {
    title: '一种住所，通常设计为小木屋，有时也设计为房间或小公寓。建在树柱或天然树上。树屋与地面没有接触。通过梯子、楼梯或桥道进入。',
    style: {
        color: '',
    },
});
buildingMap.set('yes', {
    title: '在无法确定更具体的值的情况下使用此值。',
    style: {
        color: '',
    },
});
buildingMap.set('user defined', {
    title: '根据 Taginfo 的所有常用值，通常是建筑类型',
    style: {
        color: '',
    },
});

const leisureMap = new Map();
leisureMap.set('adult_gaming_centr', {
    title: '设有赌博机和其他付费游戏的场所。与 leisure=amusement_arcade 不同，有一定的年龄限制',
    style: {
        color: '',
    },
});
leisureMap.set('amusement_arcade', {
    title: '提供付费游戏的场所，例如视频游戏、驾驶模拟器、弹球机、商贩等。没有设定年龄限制，与 leisure=adult_gaming_centre 相对。',
    style: {
        color: '',
    },
});
leisureMap.set('bandstand', {
    title: '一个开放的结构，乐队可以在这里举行音乐会。',
    style: {
        color: '',
    },
});
leisureMap.set('bathing_place', {
    title: '可以在大自然中自由沐浴的公共场所。',
    style: {
        color: '',
    },
});
leisureMap.set('beach_resort', {
    title: '标记管理海滩的边界。',
    style: {
        color: '',
    },
});
leisureMap.set('bird_hide', {
    title: '观察鸟类的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('bleachers', {
    title: '可以玩保龄球的设施。',
    style: {
        color: '',
    },
});
leisureMap.set('common', {
    title: '公共土地（已弃用）。',
    style: {
        color: '',
    },
});
leisureMap.set('dance', {
    title: '一个跳舞的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('disc_golf_course', {
    title: '圆盘高尔夫球场',
    style: {
        color: '',
    },
});
leisureMap.set('dog_park', {
    title: '指定区域，有或没有围栏边界，允许狗主人不受限制地锻炼他们的宠物。',
    style: {
        color: '',
    },
});
leisureMap.set('escape_game', {
    title: '一款物理冒险游戏，玩家使用线索、提示和策略解决一系列谜题，以完成手头的目标。',
    style: {
        color: '',
    },
});
leisureMap.set('firepit', {
    title: '举办篝火、篝火等的永久位置或结构。',
    style: {
        color: '',
    },
});
leisureMap.set('fishing', {
    title: '钓鱼的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('fitness_centre', {
    title: '一个有健身器材和/或健身/舞蹈课程的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('fitness_station', {
    title: '一个有健身器材的地方，单人或集合，户外。',
    style: {
        color: '',
    },
});
leisureMap.set('garden', {
    title: '以装饰和结构化方式或出于科学目的种植花卉和其他植物的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('golf_course', {
    title: '一个高尔夫球场。',
    style: {
        color: '',
    },
});
leisureMap.set('hackerspace', {
    title: '一个有共同兴趣的人，通常是在计算机、技术、科学、数字艺术或电子艺术方面，可以见面、社交和/或协作的地方。\t',
    style: {
        color: '',
    },
});
leisureMap.set('horse_riding', {
    title: '人们通常在业余时间练习骑马的设施，例如骑马中心。对于骑马场，请使用休闲=球场+运动=马术。',
    style: {
        color: '',
    },
});
leisureMap.set('ice_rink', {
    title: '一个可以滑冰或打冰球的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('marin', {
    title: '用于系泊休闲游艇和摩托艇。',
    style: {
        color: '',
    },
});
leisureMap.set('miniature_golf', {
    title: '可以打迷你高尔夫球的地方或区域。',
    style: {
        color: '',
    },
});
leisureMap.set('nature_reserve', {
    title: '对野生动植物或具有地质或其他特殊价值的特征具有重要意义的保护区。',
    style: {
        color: '',
    },
});
leisureMap.set('outdoor_seating', {
    title: '户外美食区。',
    style: {
        color: '',
    },
});
leisureMap.set('park', {
    title: '开放的绿色娱乐区，通常是市政区。',
    style: {
        color: '',
    },
});
leisureMap.set('picnic_table', {
    title: '野餐桌',
    style: {
        color: '',
    },
});
leisureMap.set('pitch', {
    title: '足球，足球，板球，棒球，网球等的场地，骑马场或滑板公园。要描述哪种运动，请使用 sport=*。',
    style: {
        color: 'rgb(140, 208, 95)',
        weight: 1,
    },
});
leisureMap.set('playground', {
    title: '小孩子的游乐场。',
    style: {
        color: '',
    },
});
leisureMap.set('resort', {
    title: '用于放松或娱乐的地方，吸引游客度假，旅游和/或在游泳池和/或附近的水域游泳。',
    style: {
        color: '',
    },
});
leisureMap.set('sauna', {
    title: '设计用于体验干热或湿热会议的小房间或房屋，或具有一个或多个这些和辅助设施的场所。',
    style: {
        color: '',
    },
});
leisureMap.set('slipway', {
    title: '船只可以在这里下水。',
    style: {
        color: '',
    },
});
leisureMap.set('sports_centre', {
    title: '一个独特的设施，在封闭区域内进行一系列运动。要描述哪种运动，请使用 sport=*。',
    style: {
        color: '',
    },
});
leisureMap.set('sports_hall', {
    title: '足够大的单人间，适合在室内进行运动，没有“中心”特征。',
    style: {
        color: '',
    },
});
leisureMap.set('stadium', {
    title: '一个主要的体育场馆，有大量的分层座位。要描述哪种运动，请使用 sport=*。',
    style: {
        color: '',
    },
});
leisureMap.set('summer_camp', {
    title: '夏令营是一些国家夏季为儿童或青少年进行的监督计划。参加夏令营的儿童和青少年被称为露营者。',
    style: {
        color: '',
    },
});
leisureMap.set('swimming_area', {
    title: '游泳区 - 放置在河流、湖泊或其他允许游泳的水库上方。',
    style: {
        color: '',
    },
});
leisureMap.set('swimming_pool', {
    title: '游泳池（仅限水域）。',
    style: {
        color: '',
    },
});
leisureMap.set('tanning_salon', {
    title: '顾客可以使用紫外线灯晒黑皮肤的地方。',
    style: {
        color: '',
    },
});
leisureMap.set('track', {
    title: '用于跑步、骑自行车和其他非机动赛车（如马匹、灵缇犬）的赛道。要描述哪种运动，请使用 sport=*。',
    style: {
        color: '',
    },
});
leisureMap.set('trampoline_park', {
    title: '由许多相互连接的蹦床组成的休闲设施',
    style: {
        color: '',
    },
});
leisureMap.set('water_park', {
    title: '一个游乐园，设有水滑梯、休闲游泳池（如波浪池）或漂流河。',
    style: {
        color: '',
    },
});
leisureMap.set('wildlife_hide', {
    title: '观察野生动物的地方。另请参阅休闲=bird_hide。',
    style: {
        color: '',
    },
});
leisureMap.set('user defined', {
    title: '根据标签信息的所有常用值',
    style: {
        color: '',
    },
});

/** 边界 */
const boundaryMap = new Map();
boundaryMap.set('aboriginal_lands', {
    title: '代表公认的土著/土著/土著民族的官方保留边界的边界。',
    style: {
        color: '',
    },
});
boundaryMap.set('administrative', {
    title: '行政边界。政府或其他组织出于行政目的认可的区域/领土/司法管辖区的细分。这些范围从大型民族国家集团到小型行政区和郊区，如“admin_level=*”组合标签所示。',
    style: {
        color: '',
    },
});
boundaryMap.set('border_zone', {
    title: '边境区是边界附近对行动实行特殊限制的地区。通常参观需要许可证。',
    style: {
        color: '',
    },
});
boundaryMap.set('forest', {
    title: '划界森林是一片以树木繁茂为主的土地，因此被赋予了明确的边界。它可能覆盖不同的林分，非林区，高速公路...但是边界内的所有区域都被视为一个单一的森林并进行管理。',
    style: {
        color: '',
    },
});
boundaryMap.set('forest_compartment', {
    title: '林区间是划定的林内编号的细分，物理上具有可见的、通常清除的边界。',
    style: {
        color: '',
    },
});
boundaryMap.set('hazard', {
    title: '指定的危险区域，对健康、生命、财产或任何其他有价利益造成潜在损害。',
    style: {
        color: '',
    },
});
boundaryMap.set('maritime', {
    title: '非行政边界的海洋边界：基线、毗连区和专属经济区。',
    style: {
        color: '',
    },
});
boundaryMap.set('marker', {
    title: '边界标记、边界标记、边界石或边界石是一种坚固的物理标记，用于标识陆地边界的开始或边界的变化，尤其是边界方向的变化。另请参阅历史=boundary_stone',
    style: {
        color: '',
    },
});
boundaryMap.set('national_park', {
    title: '杰出的自然美景区，留作保护和娱乐（其他语言）。',
    style: {
        color: '',
    },
});
boundaryMap.set('place', {
    title: '边界=地点通常用于映射地点=*的边界，当可以定义这些边界但这些不是行政边界时。',
    style: {
        color: '',
    },
});
boundaryMap.set('political', {
    title: '选区边界',
    style: {
        color: '',
    },
});
boundaryMap.set('postal_code', {
    title: '邮政编码边界',
    style: {
        color: '',
    },
});
boundaryMap.set('protected_area', {
    title: '保护区，如国家公园、海洋保护区、遗产地、荒野、文化资产等。',
    style: {
        color: '',
    },
});
boundaryMap.set('special_economic_zone', {
    title: '政府定义的领域，其中商业和贸易法律不同。',
    style: {
        color: '',
    },
});
boundaryMap.set('disputed', {
    title: '由两方或多方声称拥有的有地区域（谨慎使用）。另见有争议的领土。',
    style: {
        color: '',
    },
});
boundaryMap.set('user defined', {
    title: '根据标签信息的所有常用值',
    style: {
        color: '',
    },
});

/** 自然 */
const naturalMap = new Map();
naturalMap.set('fell', {
    title: '树线上方的栖息地覆盖着草，矮灌木和苔藓。',
    style: {
        color: '',
    },
});
naturalMap.set('grassland', {
    title: '植被以草（禾本科）和其他草本（非木本）植物为主的地区。对于割草/管理的草，请参阅土地利用=草，对于干草/牧场，请参阅土地利用=草甸。',
    style: {
        color: '',
    },
});
naturalMap.set('heath', {
    title: '矮灌木栖息地，其特征是开阔，低生长的木本植被，通常以Ericaceae的植物为主。\n' +
        '注意。这不适用于名称中包含“荒地”一词的公园。',
    style: {
        color: '',
    },
});
naturalMap.set('moor', {
    title: '不要使用，请参阅维基页面。高地地区，以酸性土壤上的低生长植被为特征。',
    style: {
        color: '',
    },
});
naturalMap.set('scrub', {
    title: '未开垦的土地上覆盖着灌木、灌木或发育不良的树木。',
    style: {
        color: '',
    },
});
naturalMap.set('shrubbery', {
    title: '由人类积极维护或修剪的灌木丛区域。稍微狂野的外观也是可能的',
    style: {
        color: '',
    },
});
naturalMap.set('tree', {
    title: '一棵树。',
    style: {
        color: '',
    },
});
naturalMap.set('tree_row', {
    title: '一排树。',
    style: {
        color: '',
    },
});
naturalMap.set('tree_stump', {
    title: '树桩，砍倒或折断的树的残骸。',
    style: {
        color: '',
    },
});
naturalMap.set('tundra', {
    title: '栖息在高山和亚极地地区的树线以上，主要覆盖着未开垦的草、低矮的灌木和苔藓，有时放牧。',
    style: {
        color: '',
    },
});
naturalMap.set('wood', {
    title: '树木覆盖的区域（“森林”或“树林”）。另请参阅土地利用=森林。有关更多详细信息，可以使用 leaf_type=* 和 leaf_cycle=*。',
    style: {
        color: 'rgb(140, 208, 95)',
        weight: 1,
        fillOpacity: 0.01,
    },
});
// 水相关
naturalMap.set('bay', {
    title: '大部分被陆地包围但与海洋或湖泊有水平连接的水域。',
    style: {
        color: '',
    },
});
naturalMap.set('beach', {
    title: '沿由沙子、瓦片或其他松散物质组成的水体的地貌',
    style: {
        color: '',
    },
});
naturalMap.set('blowhole', {
    title: '向陆地生长的海洞的开口，由于波浪作用，导致开口处喷出水',
    style: {
        color: '',
    },
});
naturalMap.set('cape', {
    title: '一块伸入大海或大湖的高地。包括海角、头、岬角和（水）海岬。',
    style: {
        color: '',
    },
});
naturalMap.set('coastline', {
    title: '平均高水位泉水线在海洋和陆地之间（水在道路的右侧。）',
    style: {
        color: '',
    },
});
naturalMap.set('crevasse', {
    title: '冰川上的大裂缝',
    style: {
        color: '',
    },
});
naturalMap.set('geyser', {
    title: '以间歇性排出水为特征的泉水湍流喷射并伴有蒸汽。',
    style: {
        color: '',
    },
});
naturalMap.set('glacier', {
    title: '由雪自然形成的永久性冰体，在自身重量下移动。',
    style: {
        color: '',
    },
});
naturalMap.set('hot_spring', {
    title: '地热加热地下水泉',
    style: {
        color: '',
    },
});
naturalMap.set('isthmus', {
    title: '一条狭窄的土地，两侧接水，连接两个较大的陆地。',
    style: {
        color: '',
    },
});
naturalMap.set('mud', {
    title: '泥土覆盖的区域：水饱和的细粒土壤，没有明显的植物生长。另请参阅自然=湿地+湿地=*。',
    style: {
        color: '',
    },
});
naturalMap.set('peninsula', {
    title: '一块从更大的陆地伸入水中的土地，几乎被水包围',
    style: {
        color: '',
    },
});
naturalMap.set('reef', {
    title: '位于水面下的特征（岩石、沙洲、珊瑚等）',
    style: {
        color: '',
    },
});
naturalMap.set('shingle', {
    title: '圆形岩石碎片堆积在海滩或河床上',
    style: {
        color: '',
    },
});
naturalMap.set('shoal', {
    title: '靠近海面的海底区域（字面意思是变浅）并在退潮时暴露。参见天然=沙子。',
    style: {
        color: '',
    },
});
naturalMap.set('spring', {
    title: '地下水从地下自然流出的地方（其他语言）。',
    style: {
        color: '',
    },
});
naturalMap.set('strait', {
    title: '狭窄的水域，两侧被陆地包围，另一侧被水包围。',
    style: {
        color: '',
    },
});
naturalMap.set('water', {
    title: '任何水体，从天然的，如湖泊或池塘，到人工的，如护城河或运河。另请参阅水路=河岸',
    style: {
        color: '',
    },
});
naturalMap.set('wetland', {
    title: '被淹没或有积水的自然区域，进一步指定为湿地=*',
    style: {
        color: '',
    },
});
// 地质相关
naturalMap.set('arch', {
    title: '由侵蚀自然形成的岩石拱门，下面有一个开口。',
    style: {
        color: '',
    },
});
naturalMap.set('arete', {
    title: 'arête，一种薄的，几乎像刀状的岩石山脊，通常在两个冰川侵蚀平行的U形山谷时形成。',
    style: {
        color: '',
    },
});
naturalMap.set('bare_rock', {
    title: '土壤或植被稀疏/没有植被的区域，因此基岩变得可见。',
    style: {
        color: '',
    },
});
naturalMap.set('cave_entrance', {
    title: 'The entrance to a cave: a natural underground space large enough for a human to ente',
    style: {
        color: '',
    },
});
naturalMap.set('cliff', {
    title: '地形的垂直或几乎垂直的自然下降，通常具有裸露的岩石表面（将下表面留在道路右侧）。',
    style: {
        color: '',
    },
});
naturalMap.set('dune', {
    title: '风形成的沙丘，覆盖着没有或很少的植被。参见 自然=沙滩 和 自然=海滩',
    style: {
        color: '',
    },
});
naturalMap.set('earth_bank', {
    title: '大型侵蚀沟壑或陡峭的土堤',
    style: {
        color: '',
    },
});
naturalMap.set('fumarole', {
    title: '喷气孔是行星地壳上的一个开口，它排放蒸汽和气体',
    style: {
        color: '',
    },
});
naturalMap.set('gully', {
    title: 'Small scale cut in relief created by water erosion',
    style: {
        color: '',
    },
});
naturalMap.set('hill', {
    title: '一座小山。',
    style: {
        color: '',
    },
});
naturalMap.set('peak', {
    title: '山丘或山脉的顶部（山顶）。',
    style: {
        color: '',
    },
});
naturalMap.set('ridge', {
    title: '具有连续高架波峰的山脉或丘陵线性地貌',
    style: {
        color: '',
    },
});
naturalMap.set('rock', {
    title: '附着在下层基岩上的一块值得注意的岩石或一组岩石。',
    style: {
        color: '',
    },
});
naturalMap.set('saddle', {
    title: '最低点沿山脊或两个山顶之间的最低点',
    style: {
        color: '',
    },
});
naturalMap.set('sand', {
    title: '沙漠:被沙子覆盖的地区，没有或只有很少的植被也可以看到自然=沙滩和自然=沙丘。',
    style: {
        color: '',
    },
});
naturalMap.set('scree', {
    title: '由岩崩和邻近岩面风化作用形成的未固结的角状岩石。',
    style: {
        color: '',
    },
});
naturalMap.set('sinkhole', {
    title: '洼地:地表地形上的天然洼地或洞',
    style: {
        color: '',
    },
});
naturalMap.set('stone', {
    title: '一块明显的独立岩石，可能因其所在地形的组成而不同;例如，冰川不稳定。',
    style: {
        color: '',
    },
});
naturalMap.set('valley', {
    title: '洼地:两侧有山脊或山脉或丘陵的天然洼地',
    style: {
        color: '',
    },
});
naturalMap.set('volcano', {
    title: '火山喷发口:地表上暴露的火山口，火山物质在此喷发',
    style: {
        color: '',
    },
});
naturalMap.set('user defined', {
    title: '所有常用的值根据Taginfo',
    style: {
        color: '',
    },
});

/** power */
const powerMap = new Map();
powerMap.set('cable', {
    title: '电缆:一种绝缘电缆，承载电力，如位于地下的传输或配电电缆和海底电缆',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('catenary_mast', {
    title: '电弓:支撑架空电线的杆子，用于向装有受电弓的车辆供电，如有轨电车和火车',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('compensator', {
    title: '一种用于保证电能质量和电网弹性的静态电源设备。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('connection', {
    title: '两根或多根架空电线之间的独立电气连接',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('converter', {
    title: '在交流电和直流电之间转换功率的装置:通常但不仅限于高压网络',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('generator', {
    title: '发电机:把一种形式的能量转换成另一种形式的装置，如发电机',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('heliostat', {
    title: '定日镜:定日镜装置的镜子',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('insulator', {
    title: '一种将电源线连接到支撑结构并防止接地的电绝缘体。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('line', {
    title: '用于电力传输的高压电线，通常由塔或塔架支撑',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('busbar', {
    title: '将电力线标识为母线，即变电站的中心连接',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('bay', {
    title: '变电站内连接电路和母线的电力线。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('minor_line', {
    title: '构成配电网的小电线，通常由电线杆输送。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('plant', {
    title: '由独立的发电机组产生电力(电、有用的热、沼气)的工业设施。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('pole', {
    title: '支撑电线的单杆，通常为木、钢或混凝土桅杆，设计用来承载小电线',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('portal', {
    title: '电力线的支撑结构，由垂直支腿和电缆连接到水平横臂组成',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('substation', {
    title: '用变压器、开关柜或补偿器控制电力网络中电流流动的设备。',
    style: {
        color: 'rgb(170, 170, 170)',
        weight: 1,
    },
});
powerMap.set('switch', {
    title: '一种允许电力网络操作员在变电站或电网上为线路和变压器上下电的设备。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('switchgear', {
    title: '一种开关柜，包括一个或多个母线组件和若干个槽，每个槽将一个电路连接到母线组件。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('terminal', {
    title: '连接点:架空电源线在建筑物或墙上的末端的连接点;例如，当连接到室内变电站时。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('tower', {
    title: '塔架:携带高压电缆的塔或塔架通常由钢格栅结构，但管状或实心塔架也被使用。',
    style: {
        color: '',
        weight: 1,
    },
});
powerMap.set('transformer', {
    title: '提高或降低电压的装置。大型电力变压器通常安装在变电站内',
    style: {
        color: '',
        weight: 1,
    },
});
