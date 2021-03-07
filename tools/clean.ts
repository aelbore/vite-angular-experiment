import('aria-fs').then(async c => {
  await c.clean('./node_modules/@angular-devkit/build-optimizer/node_modules')
})