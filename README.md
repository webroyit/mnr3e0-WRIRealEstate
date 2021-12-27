# WRI Real Esate
An Real Estate Application.  The template is from JavaScript Mastery youtube channel

## Add .env
```
NEXT_PUBLIC_RAPID_API_KEY= /* API key from https://rapidapi.com/ */
```

## Dependencies
- `@chakra-ui/react` for UI
- `@emotion/react` peer dependency of Chakra
- `@emotion/styled` peer dependency of Chakra
- `axios` to make API requests
- `framer-motion` React animation library
- `millify` format large numbers
- `nprogress` progress loading bar
- `react-horizontal-scrolling-menu` for gallery of images
- `react-icons` for icons

## Notes
- You need to restart your terminal if you change your package.json, config files, or environment variables
- Set up Chakra Provider when using Chakra-UI
- Next.js uses file-based routing
- No need to do arrow function if the functin is calling itself