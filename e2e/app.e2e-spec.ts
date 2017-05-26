import { DutchBlitzPage } from './app.po';

describe('dutch-blitz App', () => {
  let page: DutchBlitzPage;

  beforeEach(() => {
    page = new DutchBlitzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
