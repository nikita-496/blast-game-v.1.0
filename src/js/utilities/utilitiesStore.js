//Хранилище данных для эмуляции игры, преднозначеных для тестов

const mock = {};

mock.COLUMN_1 = {
  serialNumberColumn: 1,
  ceils: [
    { serialNumberCeil: 1, tile: { type: 'Red', coords: { x: 1, y: 1 }, status: '' } },
    { serialNumberCeil: 2, tile: { type: 'Yellow', coords: { x: 1, y: 2 }, status: '' } },
    { serialNumberCeil: 3, tile: { type: 'Red', coords: { x: 1, y: 3 }, status: '' } },
    { serialNumberCeil: 4, tile: { type: 'Blue', coords: { x: 1, y: 4 }, status: '' } },
    { serialNumberCeil: 5, tile: { type: 'Green', coords: { x: 1, y: 5 }, status: '' } },
    { serialNumberCeil: 6, tile: { type: 'Green', coords: { x: 1, y: 6 }, status: '' } },
  ],
};

mock.COLUMN_2 = {
  serialNumberColumn: 2,
  ceils: [
    { serialNumberCeil: 1, tile: { type: 'Green', coords: { x: 2, y: 1 }, status: '' } },
    { serialNumberCeil: 2, tile: { type: 'Red', coords: { x: 2, y: 2 }, status: '' } },
    { serialNumberCeil: 3, tile: { type: 'Red', coords: { x: 2, y: 3 }, status: '' } },
    { serialNumberCeil: 4, tile: { type: 'Red', coords: { x: 2, y: 4 }, status: '' } },
    { serialNumberCeil: 5, tile: { type: 'Yellow', coords: { x: 2, y: 5 }, status: '' } },
    { serialNumberCeil: 6, tile: { type: 'Red', coords: { x: 2, y: 6 }, status: '' } },
  ],
};

mock.COLUMN_3 = {
  serialNumberColumn: 3,
  ceils: [
    { serialNumberCeil: 1, tile: { type: 'Yellow', coords: { x: 3, y: 1 }, status: '' } },
    { serialNumberCeil: 2, tile: { type: 'Red', coords: { x: 3, y: 2 }, status: '' } },
    { serialNumberCeil: 3, tile: { type: 'Red', coords: { x: 3, y: 3 }, status: '' } },
    { serialNumberCeil: 4, tile: { type: 'Red', coords: { x: 3, y: 4 }, status: '' } },
    { serialNumberCeil: 5, tile: { type: 'Blue', coords: { x: 3, y: 5 }, status: '' } },
    { serialNumberCeil: 6, tile: { type: 'Red', coords: { x: 3, y: 6 }, status: '' } },
  ],
};

mock.COLUMN_4 = {
  serialNumberColumn: 4,
  ceils: [
    { serialNumberCeil: 1, tile: { type: 'Green', coords: { x: 4, y: 1 }, status: '' } },
    { serialNumberCeil: 2, tile: { type: 'Green', coords: { x: 4, y: 2 }, status: '' } },
    { serialNumberCeil: 3, tile: { type: 'Red', coords: { x: 4, y: 3 }, status: '' } },
    { serialNumberCeil: 4, tile: { type: 'Blue', coords: { x: 4, y: 4 }, status: '' } },
    { serialNumberCeil: 5, tile: { type: 'Red', coords: { x: 4, y: 5 }, status: '' } },
    { serialNumberCeil: 6, tile: { type: 'Blue', coords: { x: 4, y: 6 }, status: '' } },
  ],
};

mock.COLUMN_5 = {
  serialNumberColumn: 5,
  ceils: [
    { serialNumberCeil: 1, tile: { type: 'Green', coords: { x: 5, y: 1 }, status: '' } },
    { serialNumberCeil: 2, tile: { type: 'Red', coords: { x: 5, y: 2 }, status: '' } },
    { serialNumberCeil: 3, tile: { type: 'Yellow', coords: { x: 5, y: 3 }, status: '' } },
    { serialNumberCeil: 4, tile: { type: 'Red', coords: { x: 5, y: 4 }, status: '' } },
    { serialNumberCeil: 5, tile: { type: 'Yellow', coords: { x: 5, y: 5 }, status: '' } },
    { serialNumberCeil: 6, tile: { type: 'Red', coords: { x: 5, y: 6 }, status: '' } },
  ],
};

mock.COLUMN_6 = {
  serialNumberColumn: 6,
  ceils: [
    { serialNumberCeil: 1, tile: { type: 'Yello', coords: { x: 6, y: 1 }, status: '' } },
    { serialNumberCeil: 2, tile: { type: 'Red', coords: { x: 6, y: 2 }, status: '' } },
    { serialNumberCeil: 3, tile: { type: 'Red', coords: { x: 6, y: 3 }, status: '' } },
    { serialNumberCeil: 4, tile: { type: 'Blue', coords: { x: 6, y: 4 }, status: '' } },
    { serialNumberCeil: 5, tile: { type: 'Red', coords: { x: 6, y: 5 }, status: '' } },
    { serialNumberCeil: 6, tile: { type: 'Yellow', coords: { x: 6, y: 6 }, status: '' } },
  ],
};

mock.GAME_FIELD = {
  columns: [
    mock.COLUMN_1,
    mock.COLUMN_2,
    mock.COLUMN_3,
    mock.COLUMN_4,
    mock.COLUMN_5,
    mock.COLUMN_6,
  ],
};

module.exports.mock = mock;
