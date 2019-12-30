# Organisations Panel Plugin for Grafana
This is a panel plugin for [Grafana](http://grafana.org/). It shows all organizations that user belongs to as navigable links.

To understand what is a plugin, read the [Grafana's documentation about plugins](https://grafana.com/docs/grafana/latest/plugins/developing/development/).

NOTE: Latest version of this panel works only with Grafana >=5.0. Use older panel version with older Grafana version.

### Features
* [Angular.js (1.0)](https://angularjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Sass](http://sass-lang.com/)

### Compiling
```
npm install
grunt
```
The compiled product is in ``dist`` folder.

### Deployment
Copy the contents of ``dist`` folder to ``plugins/organisations`` folder so Grafana will find the plugin and it can be used in Grafana dashboards.

### Install the Panel
Use the grafana-cli tool to install Organisations from the commandline:
```
grafana-cli plugins install digiapulssi-organisations-panel
```
The plugin will be installed into your grafana plugins directory; the default is /var/lib/grafana/plugins.
