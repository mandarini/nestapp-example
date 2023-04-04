# Rspack + NestJS

We are trying to build and serve a NestJS application with Rspack.

## Install dependencies

```bash
yarn
```

## Try building and serving

```bash
npm run build
```

and

```bash
npm run serve
```

work as expected, since they're calling the Nestjs CLI directly.

## Try building and serving with Rspack

```bash
npm run build-rspack
```

and

```bash
npm run serve-rspack
```

do not work correctly, since they're calling the Rspack CLI.

### Issue with `build`

Build artifacts are generated in the `dist` folder, however, running `node ./dist/main.js` does not work (works when building with Nestjs CLI).

### Issue with `serve`

It's calling the rspack server, instead of Nest.

Logs:

```bash
npm run serve-rspack

> nestapp@0.0.1 serve-rspack
> rspack serve

Rspack ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%               <i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.2.86:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/katerina/Projects/nrwl/test_nx_workspaces/nestapp-example/public' directory
Rspack ████████████████████████████████████████ 100% done        Time: 54ms
^C<i> [webpack-dev-server] Gracefully shutting down. To force exit, press ^C again. Please wait...
```
