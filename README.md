## module-import-demo

tl,dr: These are different:

```
// This will import the CommonJS build
import LocationUtilsCommonJS from 'history/LocationUtils';

// This will import the Module build
import { LocationUtils } from 'history';
```

Try it out

```
npm install
npm run build
```

Then explore the `stats.json` file at http://webpack.github.io/analyse/.
