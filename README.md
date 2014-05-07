detect
======

  Detect if your browser supports [webrtc](http://www.webrtc.org/).

## Installation

with [component](http://github.com/component/component):

	$ component install bredele/detect

## Simple usage

  detect if your browser supports webrtc and provide a feedback to the user. Here's an example with **[peer](http://github.com/bredele/peer)**:

```js
var detect = require('detect');
var peer = require('peer');

// both callbacks are optional
detect(function() {
	var skype = peer();
}, function() {
	// tell the user his browser doesn't support webrtc
});
```

  webrtc is no exception and there are unfortunately different implementations according you are on Chrome or Firefox.
	
```js
detect('cw', function() {
	// it is chrome!
});

detect('mf', function() {
	// it is firefox!
});
```

## API

### detect()

  Return true if webrtc is supported (false otherwise).

```js
detect();
```

### detect(callback)

  Execute callback if webrtc is supported

```js
detect(function() {
	// do something
})
```

### detect(callback, error)

  Execute error callback if webrtc is not supported

```js
detect(function() {
}, function() {
	// do something if not supported
})
```

### detect(agent, callback)

  Execute callback if is agent (`cw` or `mf`).

```js
detect('cw', function() {
	// you are on chrome
});
```
  > detect will probably support browser versions ('cw23...32') in a futur release.

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
