import fs from 'fs'
import path from 'path'

export default function getModuleVersion(moduleName, nmPath){
  if(!nmPath){
    nmPath = findNodeModulesPath()
  }
  if(!fs.existsSync(path.join(nmPath, moduleName))){
    throw new Error('Unable to find ' + moduleName + ' installed in ' + nmPath)
  } else {
    const moduleInfo = require(path.join(nmPath, moduleName, 'package.json'))
    return moduleInfo.version
  }
}

function findNodeModulesPath(){
  const rootDir = process.cwd()
  const bestGuess = path.join(rootDir, 'node_modules')
  if(fs.existsSync(bestGuess)){
    return bestGuess
  } else {
    throw new Error('Unable to determine where your root node_modules folder is.  Please pass it in as a second argument')
    //HOW TO FIND IT????!?
  }
}