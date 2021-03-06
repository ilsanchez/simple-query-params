import { Url } from '../src/url';
import { QueryParam } from '../src/query-params';

const rawUrl =
  'https://www.mysuperoriginalurl.dev?foo=bar&baz=420&qpa=p,a,r,a,m';

test('Should create an instance', () => {
  const url = new Url(rawUrl);
  expect(url).toBeInstanceOf(Url);
});

test('Should keep original url', () => {
  const url = new Url(rawUrl);
  url.setValue('foo', 'baz');
  url.setValue('newParam', 'value');
  expect(url.originalUrl).toBe(rawUrl);
});

test('Should had 3 parameters', () => {
  const url = new Url(rawUrl);
  expect(url['_params'].length).toBe(3);
});

test('Should replace base url', () => {
  const url = new Url(rawUrl);
  url.baseUrl = 'https://fakeurl.dev';
  expect(url.builtUrl).toEqual(
    'https://fakeurl.dev?foo=bar&baz=420&qpa=p,a,r,a,m'
  );
});

test('Should extract base url', () => {
  const url = new Url(rawUrl);
  expect(url.baseUrl).toBe('https://www.mysuperoriginalurl.dev');
});

test('Build url', () => {
  const url = new Url(rawUrl);
  url.setValue('foo', 'baz');
  const newBuiltUrl =
    'https://www.mysuperoriginalurl.dev?foo=baz&baz=420&qpa=p,a,r,a,m';
  expect(url.builtUrl).toBe(newBuiltUrl);
});

test('getParams', () => {
  const url = new Url(rawUrl);
  expect((url.getParam('foo') as QueryParam).value).toBe('bar');
});

test('Create instance without params', () => {
  const url = new Url('https://www.mysuperoriginalurl.dev');
  expect(url).toBeInstanceOf(Url);
});

test('Should retyurn correct hash', () => {
  const url = new Url(rawUrl);
  expect(url.hash).toBe('foo=bar&baz=420&qpa=p,a,r,a,m');
});
