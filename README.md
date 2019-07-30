# Simple query params

Simple, tiny, typed and tested library to manage with ease query param.

It can be used to add query params to url or modify those that url contains.

## API

This library exposes two classes, Url and QueryParams.

### Url
``` javascript
// You can build one Url instance passing a url

const url = new Url('https://www.fakeurl.com?foo=bar');

// This object exposes multiples methods and properties:

url.baseUrl  // Returns base url, for this example 'https://www.fakeurl.com?'

url.originalUrl // Returns the url which used to create instance and keep it, never changes.

url.setValue(name: string, value: QueryParamType, mode?: 'append' | 'replace'); // Sets the value to existing query param or create it if doesn't exists. `mode` is used when query param its an array, then, with 'append' you push another value at the tail of the array, with 'replace', the array is overwitted by the value passed.

url.setValue('foo', 'baz'); // Change the value of 'foo' parameter to 'baz'

url.setValue('param', 123); // Creates new param

url.builtUrl // Returns the built url with query params applied. 
// https://www.fakeurl.com?foo=faz&param=123

url.getParam(name: string); // Gets parameter, finding it by it name

```

### Query Param
