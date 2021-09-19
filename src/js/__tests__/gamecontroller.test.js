import GameController from '../GameController';
import GamePlay from '../GamePlay';
import GameStateService from '../GameStateService';

import Swordsman from '../types/Swordsman';
import Bowman from '../types/Bowman';
import Vampire from '../types/Vampire';

test('Отображение подсказки с информацией о персонаже', () => {
  const bowman = new Bowman(1);

  const received = `🎖 ${bowman.level} ⚔ ${bowman.attack} 🛡 ${bowman.defence} ❤ ${bowman.health}`;
  const expected = '🎖 1 ⚔ 25 🛡 25 ❤ 50';

  expect(received).toBe(expected);
});

test('Игрок может сделать ход', () => {
  const gamePlay = new GamePlay();
  const gameCtrl = new GameController(gamePlay, null);

  gameCtrl.gameState.characters.push({ character: new Bowman(1), position: 25 });
  // gameCtrl.gameState.characters.push({ character: new Vampire(1), position: 27 });
  gameCtrl.gameState.selectedCharacter = gameCtrl.gameState.characters[0].character;
  gameCtrl.gameState.selectedPosition = gameCtrl.gameState.characters[0].position;

  const received = gameCtrl.availableCells(9).possible;
  const expected = true;

  expect(received).toBe(expected);
});

test('Игрок не может сделать ход', () => {
  const gamePlay = new GamePlay();
  const gameCtrl = new GameController(gamePlay, null);

  gameCtrl.gameState.characters.push({ character: new Bowman(1), position: 25 });

  gameCtrl.gameState.selectedCharacter = gameCtrl.gameState.characters[0].character;
  gameCtrl.gameState.selectedPosition = gameCtrl.gameState.characters[0].position;

  const received = gameCtrl.availableCells(10).possible;
  const expected = false;

  expect(received).toBe(expected);
});

test('Игрок может атаковать', () => {
  const gamePlay = new GamePlay();
  const gameCtrl = new GameController(gamePlay, null);

  gameCtrl.gameState.characters.push({ character: new Swordsman(1), position: 25 });
  gameCtrl.gameState.characters.push({ character: new Vampire(1), position: 26 });

  gameCtrl.gameState.selectedCharacter = gameCtrl.gameState.characters[0].character;
  gameCtrl.gameState.selectedPosition = gameCtrl.gameState.characters[0].position;

  const received = gameCtrl.availableCells(26).possible;
  const expected = true;

  expect(received).toBe(expected);
});

test('Игрок не может атаковать', () => {
  const gamePlay = new GamePlay();
  const gameCtrl = new GameController(gamePlay, null);

  gameCtrl.gameState.characters.push({ character: new Swordsman(1), position: 25 });
  gameCtrl.gameState.characters.push({ character: new Vampire(1), position: 62 });

  gameCtrl.gameState.selectedCharacter = gameCtrl.gameState.characters[0].character;
  gameCtrl.gameState.selectedPosition = gameCtrl.gameState.characters[0].position;

  const received = gameCtrl.availableCells(62).possible;
  const expected = false;

  expect(received).toBe(expected);
});

test('Ошибка при загрузке игры', () => {
  const stateService = new GameStateService();

  function loadGame() {
    stateService.load();
  }

  expect(loadGame).toThrowError('Invalid state');
});
