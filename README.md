# [ieee.iiitd.edu.in](http://ieee.iiitd.edu.in)

> Official website for IIIT Delhi's IEEE Student Branch.

## Build

Node.js and yarn are required to install dependencies and build the files. Once installed,

1. Install dependencies: `yarn install`.
2. To start the dev-server: `yarn dev`, which will build files with webpack in `dist/` and start a local server.
3. For production: `yarn astro build`, and copy these files to the desired location.

## File Structure

1. `/web` folder consists frontend code built using [astro](https://astro.build/).
2. `/studio` folder consists cms code built and hosted using [sanity](https://www.sanity.io/).

## License

[MIT](LICENSE)
