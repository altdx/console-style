<div align="center">

![altdx](https://github.com/altdx/console-style/actions/workflows/ci.yml/badge.svg)
![tag](https://img.shields.io/github/v/tag/altdx/console-style?label=version)

</div>

<h1 align="center">Altdx Console Style Library</h1>

## Description

A lightweight module for formatting console texts with Deno.

## Usage

```typescript
import { ConsoleStyle } from "https://deno.land/x/altdx_console_style/mod.ts";

const style = new ConsoleStyle();
style.bold().underline().color('blue');
console.log(style.render('altdx'));
style.reset();
style.color('white', true).bgc('blue');
console.log(style.render('altdx'));
```

## License

The scripts and documentation in this project are released under the
[MIT license](./LICENSE).
