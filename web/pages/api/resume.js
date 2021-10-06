import { renderToStaticMarkup } from 'react-dom/server';
import puppeteer from 'puppeteer';

const componentToPDFBugger = async component => {
    const html = renderToStaticMarkup(component);
    const browser = await puppeteer.launch({
        headless: true,
        args: ['-no-sandbox', '-disable-setuid-sandbox']
    });

    const page = await browser.newPage();
}