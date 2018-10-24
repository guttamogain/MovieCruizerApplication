import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';


describe('movie App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  
  it('should display title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Movie Cruiser');
  });

  it('should be redirected to /login route on opening application ',() =>{
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/login')
  });

   it('should be redirected to /register route ',() => {
     browser.sleep(2000);
     browser.element(by.css('.register-button')).click()
     expect(browser.getCurrentUrl()).toContain('/register')
   });

   it('it should be able to register user ',() => {
     browser.element(by.id('firstName')).sendKeys('user firstName');
     browser.element(by.id('lastName')).sendKeys('user lastName');
     browser.element(by.id('userId')).sendKeys('kumar');
     browser.element(by.id('password')).sendKeys('kumar');
     //browser.actions().mouseMove(browser.element(by.id('register-user'))).click();
     browser.sleep(2000);
     browser.element(by.id('register-user')).click()
     expect(browser.getCurrentUrl()).toContain('/login')
   });

  it('should able to to login navigate to popular movies', () => {
    browser.element(by.id('userId')).sendKeys('kumar');
    browser.element(by.id('password')).sendKeys('kumar');
    browser.element(by.css('.login-user')).click()
    expect(browser.getCurrentUrl()).toContain('/home')
  });

  it('should navigate to Discover Movies',() => {
    browser.element(by.id('discover-movies')).click()
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/discover-movies');
  });
  
  
  it('should navigate to Discover Movies',() => {
    browser.element(by.id('discover-movies')).click()
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/discover-movies');
  });

  it('should go to movie_page by clicking movie poster',() => {
    browser.element(by.id('movie-id')).click()
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/movie');
  });

  it('add comments to movie and add to watch list',() => {
    browser.element(by.id('commentsBox')).sendKeys('Testing for movie watchList');
    browser.executeScript('window.scrollTo(0,3000);').then( () => {
      browser.element(by.id('addBtn')).click()
    })
    browser.element(by.id('watch-list')).click()
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/watchlist');
  });
  
  it('should remove from watchList',() => {
    browser.sleep(2000);
    page.navigateToWatchList();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/watchlist');
  }); 

  it('should logout and navigate to login page',() => {
    browser.element(by.id('log-out')).click()
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/login');
  }); 

});
