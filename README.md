Debug Log
=====================================================

A log utility library base on "debug".

Important
---------

If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

Usage
-----

**Notice**: Debug logs only show when `NODE_ENV` is 'development'.

```typescript
import { setFilter, getLogger } from '@whitetrefoil/debug-log'

setFilter('/*')

const { debug } = getLogger('/src/my/file.ts')

debug('Some debug message')
```

Changelog & Roadmap
-------------------

### v0.1.1

* Reset enable status after set filter (fix issue when there's other modules using "debug", e.g. koa).

### v0.1.0

* Initial release.
