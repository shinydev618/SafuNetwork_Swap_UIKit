# BribSwap UIkit

## Install

In project file package.json in prop "dependencies" add "@birbswap-uikit" : "git+https://github.com/birbswap/uikit.git"

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Add new
when you add new changes yarn build then push new /dist in server branch