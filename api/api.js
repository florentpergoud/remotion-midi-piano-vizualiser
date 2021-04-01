const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(
		'https://www.youtube.com/channel/UCAcAnMF0OrCtUep3Y4M-ZPw/community'
	);

	await page.keyboard.press('Tab');
	await page.keyboard.press('Enter');

	await page.click(
		'#sign-in > paper-item > paper-button > yt-icon:nth-child(1)'
	);

	await page.screenshot({path: 'screenshot.png'});

	await browser.close();
})();
