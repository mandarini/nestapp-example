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

Building works correctly. When you build and then you `node dist/main.js` you can see the NestJS app running properly.

### Issue with `serve`

```bash
npm run serve-rspack
```

do not work correctly, since they're calling the Rspack CLI.

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
