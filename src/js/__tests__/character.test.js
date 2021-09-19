import Character from '../Character';
import Bowman from '../types/Bowman';

test('Ошибка при попытке создать объект Character', () => {
  function createCharacter() {
    return new Character(1);
  }

  expect(createCharacter).toThrowError('Создание объектов Character запрещено');
});

test('Создание объекта', () => {
  const received = new Bowman(1);
  const expected = {
    level: 1,
    attack: 25,
    defence: 25,
    health: 50,
    type: 'bowman',
  };

  expect(received).toEqual(expected);
});
