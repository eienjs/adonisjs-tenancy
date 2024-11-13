import { test } from '@japa/runner';

test.group('example', () => {
  test('true is true', ({ assert }) => {
    assert.isTrue(true);
  });
});
