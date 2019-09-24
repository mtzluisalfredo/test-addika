/* global fixture, test */
import HomePage from '../page-objects/home-page';

const URL = (process.env.BASE_URL || '').replace(/\/$/, '');


fixture('Test Intela challenge')
  .page(URL);

test('Render btn menu, onClick -> action', async () => {
  await HomePage.ActionClickBtnMenu();
});

test('Render input search, write a word -> action', async () => {
  await HomePage.ActionWriteInput();
});

test('Render badges and icons -> action', async () => {
  await HomePage.ActionClickBadges();
});

test('Render Menu user -> click one action user ->action', async () => {
  await HomePage.ActionClickMenuUser();
});

test('Starts loading data today', async () => {
  await HomePage.isToday();
});

test('Select another day, compare if it`s different', async () => {
  await HomePage.otherDay();
});

test('Change unit of measurement -> C>F -> actions', async () => {
  await HomePage.changeUnit();
});
