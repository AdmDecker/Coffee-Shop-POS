import { DataSingleton } from './data-singleton';

describe('DataSingleton', () => {
  it('should create an instance', () => {
    expect(new DataSingleton()).toBeTruthy();
  });
});
