import { YellowJacketUiPage } from './app.po';

describe('yellow-jacket-ui App', () => {
  let page: YellowJacketUiPage;

  beforeEach(() => {
    page = new YellowJacketUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
