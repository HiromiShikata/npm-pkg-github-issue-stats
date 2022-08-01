import { getStats } from './index';

describe('index', () => {
  test('getStats', async () => {
    const res = getStats('test');
    expect(res).toEqual('repo: test');
  });
});
