'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getModuleVersion;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getModuleVersion(moduleName, nmPath) {
  if (!nmPath) {
    nmPath = findNodeModulesPath();
  }
  if (!_fs2.default.existsSync(_path2.default.join(nmPath, moduleName))) {
    throw new Error('Unable to find ' + moduleName + ' installed in ' + nmPath);
  } else {
    var moduleInfo = require(_path2.default.join(nmPath, moduleName, 'package.json'));
    return moduleInfo.version;
  }
}

function findNodeModulesPath() {
  var rootDir = process.cwd();
  var bestGuess = _path2.default.join(rootDir, 'node_modules');
  if (_fs2.default.existsSync(bestGuess)) {
    return bestGuess;
  } else {
    throw new Error('Unable to determine where your root node_modules folder is.  Please pass it in as a second argument');
    //HOW TO FIND IT????!?
  }
}