/* eslint-disable class-methods-use-this */
import { Selector, t } from 'testcafe';
import moment from 'moment';

const today = moment().format('YYYY-MM-DD');
const headerSelector = 'header > div > div.ant-col.ant-col-12.flex.ad-wrapper-btn-menu >';
const headerActions = 'header > div > div.ant-col.flex.ad-header-actions >';
const headerSelectorIcon = `${headerActions} div.flex.ad-wrapper-notifications >`;
const headerSelectorMenuUser = `${headerActions} div.ad-name-user > span`;
const oneActionUser = '#action-user-1';

const layoutContent = '#layoutContent > section > section > section > div >';

const labelDate = `${layoutContent} div.nav.flex > h4:nth-child(3)`;
const secondDay = `${layoutContent} div.main > section > button:nth-child(2)`;

const btnChangeUnit = `${layoutContent} div.main > div > div > span`;

const typeDate = `${layoutContent} div.main > section > button:nth-child(1) > span`;


class HomePage {
  get clickBtnMenu() { return Selector(`${headerSelector} button`); }

  get inputSearch() { return Selector(`${headerSelector} span > input`); }

  get iconChat() { return Selector(`${headerSelectorIcon} div:nth-child(1)`); }

  get iconBell() { return Selector(`${headerSelectorIcon} div:nth-child(2)`); }

  get iconInbox() { return Selector(`${headerSelectorIcon} div:nth-child(3)`); }

  get clickMenuUser() { return Selector(headerSelectorMenuUser); }

  get clickOneUserAction() { return Selector(oneActionUser); }

  get clickSecondDay() { return Selector(secondDay); }

  get clickChangeUnit() { return Selector(btnChangeUnit); }

  get clickTypeF() { return Selector('#type-f'); }

  async ActionClickBtnMenu() {
    await t
      .wait(1000)
      .click(this.clickBtnMenu)
      .wait(1000);
  }

  async ActionWriteInput() {
    await t
      .wait(1000)
      .typeText(this.inputSearch, 'Zapopan')
      .wait(1000);
  }

  async ActionClickBadges() {
    await t
      .wait(1000)
      .click(this.iconChat)
      .wait(1000)
      .click(this.iconBell)
      .wait(1000)
      .click(this.iconInbox)
      .wait(1000);
  }

  async ActionClickMenuUser() {
    await t
      .wait(1000)
      .click(this.clickMenuUser)
      .wait(1000)
      .click(this.clickOneUserAction)
      .wait(1000);
  }

  async isToday() {
    const initialDate = await Selector(labelDate).innerText;
    await t
      .wait(1000)
      .expect(initialDate).eql(today)
      .wait(1000);
  }

  async otherDay() {
    await t
      .wait(1000)
      .click(this.clickSecondDay)
      .wait(1000);
    const initialDate = await Selector(labelDate).innerText;
    await t
      .wait(1000)
      .expect(initialDate).notEql(today)
      .wait(1000);
  }

  async changeUnit() {
    const infoTypeC = await Selector(typeDate).innerText;
    await t
      .wait(1000)
      .click(this.clickChangeUnit)
      .wait(1000)
      .click(this.clickTypeF)
      .wait(1000);
    const infoTypeF = await Selector(typeDate).innerText;
    await t
      .wait(1000)
      .expect(infoTypeF).notEql(infoTypeC)
      .wait(1000);
  }
}

export default new HomePage();
