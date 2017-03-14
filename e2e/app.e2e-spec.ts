import { OrdinaryReasonPage } from './app.po';

describe('ordinary-reason App', () => {
  let page: OrdinaryReasonPage;

  beforeEach(() => {
    page = new OrdinaryReasonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
