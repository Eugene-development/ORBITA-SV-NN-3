const yearStart = '2222';
const now = new Date();
const yearNow = now.getFullYear();

const text = 'Компания';
const phoneService = '+7 (495) 777-77-77';

const menu = [
	{
		value: 'Главная',
		path: ''
	}
];

const content = {
	yearStart,
	yearNow,
	text,
	phoneService,
	menu
};

export const contentFooter = {
	content
};
