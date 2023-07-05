<div align="center">
  <h3 align="center">copyright-update</h3>
  <p align="center">
    A simple copyright year package.
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
<div>
  <h3>Table of contents</h3>
  <p>
    —&nbsp;&nbsp;<a href="#quick-start">Quick start</a><br />
    —&nbsp;&nbsp;<a href="#status">Status</a><br />
    —&nbsp;&nbsp;<a href="#whats-included">What's included</a><br />
    —&nbsp;&nbsp;<a href="#usage">Usage</a><br />
    —&nbsp;&nbsp;<a href="#quick-links">Quick links</a><br />
    —&nbsp;&nbsp;<a href="#maintainers">Maintainers</a><br />
</div>
<br />
<div>
  <h3>Quick start</h3>
  <p>
    A couple quick start options are available:
  </p>
  <p>
    —&nbsp;&nbsp;Install with <a href="https://www.npmjs.com/"><code>npm i copyright-update</code></a>.<br />
    —&nbsp;&nbsp;Install with <a href="https://yarnpkg.com/"><code>yarn add copyright-update</code></a>.<br />
  </p>
</div>
<br />
<h3>Status</h3>

[![version](https://img.shields.io/badge/dynamic/json.svg?label=copyright-update&url=https%3A%2F%2Fraw.githubusercontent.com%2Fguylepage3%2Fcopyright-update%2Fmaster%2Fpackage.json&query=%24.version&style=for-the-badge&colorA=%23000000&colorB=%23007BFF)](https://github.com/guylepage3/copyright-update)
[![npm version](https://img.shields.io/npm/v/copyright-update.svg?style=for-the-badge&colorA=%23000000&colorB=%23CA0000)](https://www.npmjs.com/package/copyright-update)
<br />
<div>
  <h3>What's included</h3>
  <p>
    <code>copyright-update</code> is a super simple component. Within the download you'll find the following directories and files:
  </p>
<pre>
copyright-update
└── src/
    └── index.js
</pre>
</div>
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
      <div className={`copyright-update ${this.props.className}`}
        style={this.props.style}>&copy; {new Date().getFullYear()}
      </div>
    );
  }
}
export default CopyrightUpdate;</pre>
  <p>
    Style the component using the CSS classname <code>.copyright-update</code>.
  </p>
  <pre>.copyright-update {
  display: inline-block;
  margin-left: .5rem;
}</pre>
</div>
<br />
<div>
  <h3>Quick links</h3>
  <p>
    —&nbsp;&nbsp;Go to <a href="https://github.com/guylepage3/copyright-update"><code>copyright-update</code> on GitHub</a>.<br />
    —&nbsp;&nbsp;Go to <a href="https://www.npmjs.com/package/copyright-update"><code>copyright-update</code> on NPM</a>.<br />
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
