<div align="center">
  <h3 align="center">copyright-update</h3>
  <p align="center">
    A simple Reactjs component that updates copyright year.
  </p>
  <p align="center">
    <a href="https://github.com/guylepage3/copyright-update/issues/new?labels=&template=bug_report.md" alt="Report a Bug (copyright-update)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/guylepage3/copyright-update/issues/new?labels=&template=feature_request.md" alt="Request feature (copyright-update)">
      Request feature
    </a>
  </p>
</div>
<br />

### Table of contents

- [Quick Start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Usage](#usage)
- [Quick links](#quick-links)
- [Maintainers](#maintainers)
<br />
<br />

### Quick start

A couple quick start options are available:

- Install with [npm](https://www.npmjs.com/): `npm i copyright-update`.
- Install with [yarn](https://yarnpkg.com/): `yarn add copyright-update`.
<br />
<br />

### Status

[![version](https://img.shields.io/badge/dynamic/json.svg?label=copyright-update&url=https%3A%2F%2Fraw.githubusercontent.com%2Fguylepage3%2Fcopyright-update%2Fmaster%2Fpackage.json&query=%24.version&style=for-the-badge&colorA=%23000000&colorB=%23007BFF)](https://github.com/guylepage3/copyright-update)
[![npm version](https://img.shields.io/npm/v/copyright-update.svg?style=for-the-badge&colorA=%23000000&colorB=%23CA0000)](https://www.npmjs.com/package/copyright-update)
<br />
<br />

### What's included

`copyright-update` is a simple Reactjs component. Within the download you'll find the following directories and files:

```text
copyright-update
└── src/
    └── index.js
```
<br />
<br />

<div>
  <h3>Usage</h3>
  <p>
    Install the package.
  </p>
  <pre>npm i copyright-update</pre>
  <p>
    In the example below, we are going to <code>import</code> the <code>copyright-update</code> component into a Footer.
  </p>
  <pre>import React, { Component } from 'react';

    class CopyrightUpdate extends Component {
      render() {
        return (
          <div 
            className={`copyright-update ${this.props.className}`}
            style={this.props.style}
            >
            &copy; {new Date().getFullYear()}
          </div>
        );
      }
    }

    export default CopyrightUpdate;
  </pre>
  <p>
    Style the component using the CSS classname <code>.copyright-update</code>.
  </p>
  <pre>.copyright-update {
      display: inline-block;
      margin-left: .5rem;
    }</pre>
  <p>
    &nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;Go to <a href="https://github.com/guylepage3/copyright-update"><code>copyright-update</code> on GitHub</a>.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;Go to <a href="https://www.npmjs.com/package/copyright-update"><code>copyright-update</code> on NPM</a>.<br />
  </p>
</div>
<br />
<div>
  <h3>Quick links</h3>
  <p>
    &nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;Go to <a href="https://github.com/guylepage3/copyright-update"><code>copyright-update</code> on GitHub</a>.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;Go to <a href="https://www.npmjs.com/package/copyright-update"><code>copyright-update</code> on NPM</a>.<br />
  </p>
</div>
<br />
<div>
  <h3>Maintainers</h3>
  <p>
    Repository maintained by:
  </p>
  <blockquote>
    <a href="https://github.com/guylepage3">Guy Lepage</a>
    <div align="left">
      <a href="https://twitter.com/guylepage3">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/twitter/ffffff"  width="14px">
          <img src="https://ico.vercel.app/twitter/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/guylepage/">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/linkedin/ffffff"  width="14px">
          <img src="https://ico.vercel.app/linkedin/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/guylepage3">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/github/ffffff"  width="14px">
          <img src="https://ico.vercel.app/github/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://stackoverflow.com/users/1314487/guy-lepage">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/stackoverflow/ffffff"  width="14px">
          <img src="https://ico.vercel.app/stackoverflow/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://www.npmjs.com/~guylepage3">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/npm/ffffff"  width="14px">
          <img src="https://ico.vercel.app/npm/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://medium.com/@guylepage3">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/medium/ffffff"  width="14px">
          <img src="https://ico.vercel.app/medium/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://bitcoin.clarkmoody.com/dashboard/">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/bitcoin/ffffff"  width="14px">
          <img src="https://ico.vercel.app/bitcoin/000000"  width="14px">
        </picture>
      </a>
      &nbsp;&nbsp;
      <a href="https://www.buymeacoffee.com/guylepage3">
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://ico.vercel.app/buymeacoffee/ffffff"  width="14px">
          <img src="https://ico.vercel.app/buymeacoffee/000000"  width="14px">
        </picture>
      </a>
    </div>
  </blockquote>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<p align="left">  
  By contributing your code, you agree to license your contribution under the 
  <a href="https://github.com/guylepage3/copyright-update/blob/master/LICENSE">
  MIT License</a>.
</p>
