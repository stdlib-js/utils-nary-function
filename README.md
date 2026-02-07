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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

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

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
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

```javascript
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-mask-arguments`][@stdlib/utils/mask-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function according to an argument mask.</span>
-   <span class="package-name">[`@stdlib/utils-pick-arguments`][@stdlib/utils/pick-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with specified arguments.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-nary-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-nary-function

[test-image]: https://github.com/stdlib-js/utils-nary-function/actions/workflows/test.yml/badge.svg?branch=v0.2.4
[test-url]: https://github.com/stdlib-js/utils-nary-function/actions/workflows/test.yml?query=branch:v0.2.4

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-nary-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-nary-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-nary-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-nary-function/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-nary-function/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-nary-function/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-nary-function/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-nary-function/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-nary-function/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-nary-function/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-nary-function/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-nary-function/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/mask-arguments]: https://github.com/stdlib-js/utils-mask-arguments/tree/deno

[@stdlib/utils/pick-arguments]: https://github.com/stdlib-js/utils-pick-arguments/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
