import { BrowserContext,Page} from '@playwright/test'

export default class BasePage {

  page!: Page;

  context: BrowserContext;

    constructor(context: BrowserContext){
        this.context = context;
    }

    public async getPage(context: BrowserContext){
      this.page = await context.newPage();
    }


}