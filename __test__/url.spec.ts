import { Url } from '../src/url';

jest.mock('../src/url');

const rawUrl = 'https://www.mysuperoriginalurl.dev?foo=bar&baz=420&qpa=p,a,r,a,m';

test('Should create an instance', () => {
  const url = new Url(rawUrl);
  expect(url).toBeInstanceOf(Url);
});

test('Should had 3 parameters', () => {
  const url = new Url(rawUrl);
  expect(url['_params']).toHaveLength(3);
});

test('Should extract base url', () => {
  const url = new Url(rawUrl);
  expect(url['_baseUrl']).toEqual('https://www.mysuperoriginalurl.dev?');
})

test('Spy constructor calls', () => {
  const initializeMockFn = jest.fn()
})