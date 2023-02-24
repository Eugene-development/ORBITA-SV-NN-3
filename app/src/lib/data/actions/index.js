const actions = [
	{
		id: '448',
		action: 'Шпаклевка гипсовая "ек" к 300 (20 кг)',
		price: '536',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/spaklevka-gipsovaya-ek-k-300-20-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-K300.png'
	},
	{
		id: '522',
		action: 'Грунтовка универсальная "ек" g200 (10 л)',
		price: '667',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/gruntovka-universalnaya-ek-g200-10-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
	},
	{
		id: '520',
		action: 'Грунтовка универсальная концентрированная "ек" g100 (10 л)',
		price: '1126',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/gruntovka-universalnaya-koncentrirovannaya-ek-g100-10-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G100.png'
	},
	// {
	// 	id: '523',
	// 	action: 'Грунтовка универсальная "ек" g200 (5л)',
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
	// 	action: 'Наливной пол "ек" level 2.0 быстротвердеющий влагостойкий (20кг)',
	// 	price: '377',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
	// },
	// {
	// 	id: '464',
	// 	action: 'Наливной пол "ек" level 2.1 быстротвердеющий (20кг)',
	// 	price: '376',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
	// },
	{
		id: '1541',
		action: 'Гкл "кнауф" даногипс 9,5мм (1,2х2,5)',
		price: '310',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/gkl-knauf-danogips-95mm-12x25',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m5NgzpdlHX02sqR1Mqu3YrUQJwqqDGUOuAeYV75Z.jpeg'
	},
	{
		id: '1543',
		action: 'Гклв "кнауф" даногипс 12,5мм (1,2х2,5)',
		price: '423',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/gklv-knauf-danogips-125mm-12x25',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lvfXJZnJe2ASRUHpI5X2dxVN30ZPHmVRFh0MDJyi.jpeg'
	},
	// {
	// 	id: '1543',
	// 	action: 'Гклв "кнауф" даногипс 9,5мм (1,2х2,5)',
	// 	price: '412',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/gklv-knauf-danogips-95mm-12x25',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/D2JsbwgeZcA0z4OLW242TuXbW5KFsDYQMR59VFSE.jpeg'
	// },
	// {
	//     action: 'Штукатурная смесь "кнауф ротбанд" белая (30 кг)',
	//     price: '440 рублей',
	//     description: 'При заказе через сайт дополнительная скидка 5%',
	//     link: '/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
	// },
	{
		id: '1661',
		action: 'Утеплитель технониколь роклайт 1200*600*50',
		price: '834',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/uteplitel-texnonikol-roklait-120060050',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
	},
	{
		id: '307',
		action: 'Клей для плитки "кнауф" флизенклебер (25 кг)',
		price: '448',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
	},
	{
		id: '228',
		action: 'Плита осб-3 2500*1250*9мм kronospan гост (влагостойкая)',
		price: '489',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg'
	},
	// {
	// 	action: 'Утеплитель технониколь роклайт 1200*600*100',
	// 	price: '1190 рубля',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/uteplitel-texnonikol-roklait-1200600100'
	// },
	// {
	// 	id: '431',
	// 	action: 'Штукатурная смесь "ек" tg 40 (30кг)',
	// 	price: '440',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/stukaturnaya-smes-ek-tg-40-30-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
	// },
	{
		id: '267',
		action: 'Клей для плитки "ек" 3000 (25кг)',
		price: '363',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/klei-dlya-plitki-ek-3000-25kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-3000-UNIVERSAL.png'
	},
	// {
	// 	action: 'Штукатурная смесь "кнауф ротбанд" белая (30 кг)',
	// 	price: '440 рублей',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
	// },
	// {
	// 	action: 'Эпп xps30-200 техноплекс 1180*580*50-l',
	// 	price: '265 рублей',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/product/epp-xps30-200-texnopleks-118058050-l'
	// },
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
	// 	action: 'Гвлв "кнауф" 10 мм (1200*2500)',
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
	//     link: '/product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya'
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
	{
		id: '431',
		action: 'Штукатурная смесь "ек" tg 40 (30 кг)',
		price: '420',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/stukaturnaya-smes-ek-tg-40-30-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
	},
	{
		id: '432',
		action: 'Штукатурная смесь "ек" tg 40 waite (30 кг)',
		price: '424',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/stukaturnaya-smes-ek-tg-40-waite-30-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png'
	},
	{
		id: '463',
		action: 'Наливной пол "ек" level 2.1 быстротвердеющий (20 кг)',
		price: '396',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
	},
	{
		id: '464',
		action: 'Наливной пол "ек" level 2.1 быстротвердеющий (20 кг)',
		price: '396',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
	}
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
