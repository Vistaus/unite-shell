const Lang            = imports.lang;
const ExtensionUtils  = imports.misc.extensionUtils;
const Unite           = ExtensionUtils.getCurrentExtension();
const SignalsHandler  = Unite.imports.handlers.SignalsHandler;
const SettingsHandler = Unite.imports.handlers.SettingsHandler;

var BaseModule = new Lang.Class({
  Name: 'Unite.BaseModule',

  _init() {
    this._signals  = new SignalsHandler(this);
    this._settings = new SettingsHandler(this);

    this._onInitialize();
    this._activate();
  },

  _onActivate() {},
  _onDeactivate() {},
  _onReload() {},
  _onDestroy() {},

  _activate() {
    this._onActivate();
  },

  _deactivate() {
    this._onDeactivate();
    this._signals.disconnectAll();
  },

  _reload() {
    this._deactivate();
    this._activate();
    this._onReload();
  },

  destroy() {
    this._deactivate();
    this._onDestroy();
    this._settings.disconnectAll();
  }
});
