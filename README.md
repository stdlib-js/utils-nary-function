<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# naryFunction

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a function that invokes a provided function with a specified number of arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
naryFunction = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.naryFunction;
})();
</script>
```

#### naryFunction( fcn, arity\[, thisArg] )

Returns a `function` that invokes a provided function with a specified number of arguments.

```javascript
function sum() {
    var s;
    var i;

    s = 0;
    for ( i = 0; i < arguments.length; i++ ) {
        s += arguments[ i ];
    }
    return s;
}

var fcn = naryFunction( sum, 2 );

var out = fcn( -1, -2, 3 );
// returns -3
```

To set the `this` context when invoking the provided function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Foo() {
    this.scalar = 1;
}

Foo.prototype.sum = function sum() {
    var s;
    var i;

    s = 0;
    for ( i = 0; i < arguments.length; i++ ) {
        s += arguments[ i ] * this.scalar;
    }
    return s;
};

var ctx = {
    'scalar': 3
};

var foo = new Foo();

var fcn = naryFunction( foo.sum, 2, ctx );

var out = fcn( 1, 2, 3 );
// returns 9
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned function **always** invokes the wrapped function with a specified number of arguments, even when the returned function is provided fewer arguments. The value for the missing arguments is equal to `undefined`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

function fill( i ) {
    return i;
}

function sum() {
    var s;
    var i;

    s = 0;
    for ( i = 0; i < arguments.length; i++ ) {
        s += arguments[ i ];
    }
    return s;
}

// Create a data array:
var x = filledarrayBy( 10, 'float64', fill );

// Compute cumulative sums...
var f;
var i;
for ( i = 0; i <= x.length; i++ ) {
    f = naryFunction( sum, i );
    console.log( 'sum_%d = %d', i, f.apply( null, x ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-nary-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-nary-function

[test-image]: https://github.com/stdlib-js/utils-nary-function/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-nary-function/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-nary-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-nary-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-nary-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-nary-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-nary-function/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-nary-function/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-nary-function/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-nary-function/main/LICENSE

</section>

<!-- /.links -->
