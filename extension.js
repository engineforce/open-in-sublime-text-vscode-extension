//@ts-check
const path = require('path')
const fs = require('fs')
const vscode = require('vscode')
const execSh = require('exec-sh')

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'open-in-sublime-text.openInSublimeText',
    (e) => {
      console.log(e)
      fs.stat(e.fsPath, (err, stats) => {
        if (err) return
        let dirPath = e.fsPath
        if (stats.isFile()) {
          dirPath = path.dirname(dirPath)
        }
        console.log(dirPath)
        execSh(`open -a "Sublime Text" "${dirPath}"`)
      })
    }
  )
  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
