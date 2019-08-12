# Simple query params

[![Maintainability](https://api.codeclimate.com/v1/badges/ade72ee3b77b77c6cca0/maintainability)](https://codeclimate.com/github/ilsanchez/simple-query-params/maintainability)

Simple, tiny, typed and tested library to manage with ease query param.

It can be used to add query params to url or modify those that url contains.

## API

This library exposes two classes, Url and QueryParams.

### Url
``` typescript
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
Create new instance of this object make no sense, its usefull only when its accesed through `Url#getParam`.
``` typescript
  
  const queryParam = url.getParam('name');

  // This class exposes the following get/set methods:

  queryParam.stringified // returns formated parameter. p.e: 'name=value' instead {name, value}

  queryParam.value // returns parameter value

  queryParam.name // returns parameter name

  queryParam.type // returns the undelying type of parameter. p.e: 'value' will return 'string', 123 and '123' will return 'number'. And 'v,a,l,u,e' will return 'array

  queryParam.isString // Returns true if undelying value type is string, false otherwise

  queryParam.isNumber // Returns true if undelying value type is number, false otherwise

  queryParam.isArray // Returns true if undelying value type is string, false otherwise

  // Only exposes one method

  queryParam.setValue(value: QueryParamType, mode?: 'append' | 'replace') // change de value of parameter. mode argument works like Url#setValue

```
