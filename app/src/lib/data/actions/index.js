const actions = [
	{
		id: '450',
		action: 'Шпаклевка "ек" vh-80 фасадная белая (20 кг)',
		price: '597',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/spaklevka-ek-vh-80-fasadnaya-belaya-20-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-VH80.png'
	},
	// {
	// 	id: '261',
	// 	action: 'ГВЛВ "Кнауф" 10 мм (1200*2500)',
	// 	price: '683',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gvlv-knauf-10-mm-12002500',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg'
	// },
	// {
	// 	id: '2810',
	// 	action: 'Цемент м500 Евроцемент 40 кг',
	// 	price: '368',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/cement-m500-evrocement-40-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/AdAW50jMkTFDo4nUhEaxZUdxUkShNu2kf6HS4cMo.png'
	// },
	// {
	// 	id: '965',
	// 	action: 'ЭПП xps30-200 Техноплекс 1180*580*50-l',
	// 	price: '292',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/epp-xps30-200-texnopleks-118058050-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
	// },
	// {
	// 	id: '964',
	// 	action: 'ЭПП xps30-200 Техноплекс 1180*580*30-l',
	// 	price: '187',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/epp-xps30-200-texnopleks-118058030-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
	// },
	// {
	// 	id: '522',
	// 	action: 'Грунтовка универсальная "ЕК" g200 (10 л)',
	// 	price: '667',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gruntovka-universalnaya-ek-g200-10-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
	// },
	// {
	// 	id: '520',
	// 	action: 'Грунтовка универсальная концентрированная "ЕК" g100 (10 л)',
	// 	price: '1126',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gruntovka-universalnaya-koncentrirovannaya-ek-g100-10-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G100.png'
	// },
	// {
	// 	id: '523',
	// 	action: 'Грунтовка универсальная "ЕК" g200 (5л)',
	// 	price: '353',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gruntovka-universalnaya-ek-g200-5-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
	// },
	// {
	// 	action: 'Cмесь для пола "юнис" горизонт универсальный (20 кг)',
	// 	price: '342 рубля',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/cmes-dlya-pola-yunis-gorizont-universalnyi-20-kg'
	// },
	// {
	// 	id: '463',
	// 	action: 'Наливной пол "ЕК" level 2.0 быстротвердеющий влагостойкий (20кг)',
	// 	price: '377',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
	// },
	// {
	// 	id: '464',
	// 	action: 'Наливной пол "ЕК" level 2.1 быстротвердеющий (20кг)',
	// 	price: '376',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
	// },
	// {
	// 	id: '1541',
	// 	action: 'Гкл "Кнауф" даногипс 9,5мм (1,2х2,5)',
	// 	price: '310',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gkl-knauf-danogips-95mm-12x25',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m5NgzpdlHX02sqR1Mqu3YrUQJwqqDGUOuAeYV75Z.jpeg'
	// },
	// {
	// 	id: '1543',
	// 	action: 'Гклв "Кнауф" даногипс 12,5мм (1,2х2,5)',
	// 	price: '423',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gklv-knauf-danogips-125mm-12x25',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lvfXJZnJe2ASRUHpI5X2dxVN30ZPHmVRFh0MDJyi.jpeg'
	// },
	// {
	// 	id: '1543',
	// 	action: 'Гклв "Кнауф" даногипс 9,5мм (1,2х2,5)',
	// 	price: '412',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gklv-knauf-danogips-95mm-12x25',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/D2JsbwgeZcA0z4OLW242TuXbW5KFsDYQMR59VFSE.jpeg'
	// },
	// {
	//     action: 'Штукатурная смесь "Кнауф ротбанд" белая (30 кг)',
	//     price: '440 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
	// },
	// {
	// 	id: '1661',
	// 	action: 'Утеплитель Технониколь роклайт 1200*600*50',
	// 	price: '834',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/uteplitel-texnonikol-roklait-120060050',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
	// },
	// {
	// 	id: '307',
	// 	action: 'Клей для плитки "Кнауф" флизенклебер (25 кг)',
	// 	price: '448',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
	// },
	{
		id: '228',
		action: 'Плита осб-3 2500*1250*9мм Kronospan ГОСТ (влагостойкая)',
		price: '438',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/plita-osb-3-250012509mm-Kronospan-gost-vlagostoikaya',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg'
	},
	{
		id: '470',
		action: 'Смесь сухая универсальная м-150 (25 кг)',
		price: '104',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/smes-suxaya-universalnaya-m-150-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m150-500x500.png'
	},
	{
		id: '473',
		action: 'Пескобетон м-300 (25 кг) Престиж',
		price: '135',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/peskobeton-m-300-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D1%81.jpg'
	},
	{
		id: '2766',
		action: 'Поликарбонат сотовый прозрачный 4мм (г. Богородск)',
		price: '5747',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/polikarbonat-sotovyi-prozracnyi-4mm',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png'
	},
	// {
	// 	action: 'Утеплитель Технониколь роклайт 1200*600*100',
	// 	price: '1190 рубля',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/uteplitel-texnonikol-roklait-1200600100'
	// },
	// {
	// 	id: '431',
	// 	action: 'Штукатурная смесь "ЕК" tg 40 (30кг)',
	// 	price: '440',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/stukaturnaya-smes-ek-tg-40-30-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
	// },
	// {
	// 	id: '267',
	// 	action: 'Клей для плитки "ЕК" 3000 (25кг)',
	// 	price: '363',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/klei-dlya-plitki-ek-3000-25kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-3000-UNIVERSAL.png'
	// },
	// {
	// 	action: 'Штукатурная смесь "Кнауф ротбанд" белая (30 кг)',
	// 	price: '440 рублей',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
	// },
	{
		id: '965',
		action: 'Эпп технониколь 1180*580*50-l',
		price: '292',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/epp-xps30-200-texnopleks-118058050-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
	},
	{
		id: '70',
		action: 'Утеплитель техновент стандарт (1200*600*50 мм), 0,216 м3',
		price: '1658',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/uteplitel-texnovent-standart-120060050-mm-0216-m3',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D1%82.jpg'
	},
	{
		id: '218',
		action: 'Брус строганный 50*20*3000',
		price: '73',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/brus-strogannyi-402030001',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
	},

	{
		id: '223',
		action: 'Брус строганный 50*40*3000',
		price: '165',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/brus-strogannyi-50403000',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
	},

	// {
	// 	action: 'Эпп xps30-200 техноплекс 1180*580*30-l',
	// 	price: '179 рублей',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/epp-xps30-200-texnopleks-118058030-l'
	// }
	// {
	// 	action: 'Эпп xps30-200 техноплекс 1180*580*20-l',
	// 	price: '130 рублей',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/epp-xps30-200-texnopleks-118058050-l'
	// },
	// {
	// 	action: 'Гвлв "Кнауф" 10 мм (1200*2500)',
	// 	price: '672 рублей',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gvlv-knauf-10-mm-12002500'
	// },
	// {
	//     action: 'Пена пистолетная kudo proff 65+ всесезон',
	//     price: '420 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/pena-pistoletnaya-kudo-proff-65-vsesezon'
	// },
	// {
	//     action: 'Утеплитель изобокс 50 мм',
	//     price: '825 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/uteplitel-izoboks-50-mm'
	// },
	// {
	//     action: 'Утеплитель изобокс 100 мм',
	//     price: '890 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/uteplitel-izoboks-100mm'
	// },
	// {
	//     action: 'Утеплитель Техноблок 1200х600х100',
	//     price: '1290 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/uteplitel-texnoblok-standart-1200600100mm-0288-m3'
	// },
	// {
	//     action: 'Утеплитель Техноблок 1200х600х50',
	//     price: '1290 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3'
	// },
	// {
	//     action: 'Утеплитель роклайт 100 мм',
	//     price: '1180 рублей',
	//     description: 'Акция действует 23 и 24 июля',
	//     link: '/products/mineralno-bazaltovye-utepliteli'
	// },
	// {
	//     action: 'Пенопласт 25 плотности 100мм',
	//     price: '215 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/products/penoplast'
	// },
	// {
	//     action: 'Плита ОСБ 9мм',
	//     price: '520 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/plita-osb-3-250012509mm-Kronospan-gost-vlagostoikaya'
	// },
	// {
	//     action: 'Клей для плитки "Вебер ветонит" изи фикс (25 кг)',
	//     price: '330 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/klei-dlya-plitki-veber-vetonit-izi-fiks-25-kg'
	// },
	// {
	//     action: 'Софит-izol в (пароизоляция) 1,6м (35 м2)',
	//     price: '635 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/sofit-izol-v-paroizolyaciya-16m-35-m2'
	// },
	// {
	//     action: 'Софит-izol d (гидро-пароизоляция) 1,5м (70 м2)',
	//     price: '635 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/sofit-izol-d-gidro-paroizolyaciya-15m-70-m2'
	// },
	// {
	// 	id: '431',
	// 	action: 'Штукатурная смесь "ЕК" tg 40 (30 кг)',
	// 	price: '420',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/stukaturnaya-smes-ek-tg-40-30-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
	// },
	// {
	// 	id: '432',
	// 	action: 'Штукатурная смесь "ЕК" tg 40 waite (30 кг)',
	// 	price: '424',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/stukaturnaya-smes-ek-tg-40-waite-30-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png'
	// },
	{
		id: '434',
		action: 'Штукатурная смесь "ек" TT 30 фасадная (25 кг)',
		price: '311',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TT30.png'
	}
	// {
	// 	id: '463',
	// 	action: 'Наливной пол "ЕК" level 2.0 быстротвердеющий (20 кг)',
	// 	price: '396',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
	// },
	// {
	// 	id: '464',
	// 	action: 'Наливной пол "ЕК" level 2.1 быстротвердеющий (20 кг)',
	// 	price: '396',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
	// }
	// {
	//     action: 'Пена пистолетная "kudo home 65" всесезонная',
	//     price: '410 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya'
	// },
	// {
	//     action: 'Пена монтажная kudo',
	//     price: '330 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/pena-montaznaya-kudo'
	// },
	// {
	//     action: 'Доска',
	//     price: '16350 рублей за куб',
	//     description: 'Только наличный платёж',
	//     link: '/products/doska-obreznaya-obrabotannaya'
	// },
];

export const contentActions = {
	actions
};
