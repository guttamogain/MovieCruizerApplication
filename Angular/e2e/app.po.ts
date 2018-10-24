import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToWatchList(){
    return browser.get('/watchlist')
  }
  
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}


