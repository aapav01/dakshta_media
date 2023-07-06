module.exports = {
  apps : [{
    name   : "dakshta_project_c",
    exec_mode: 'cluster',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3002',
    watch: true,
  }]
}
