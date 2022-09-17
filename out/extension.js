"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('inocomsExtensionPack.commands.recommendedSettings', () => {
        const configuration = vscode.workspace.getConfiguration();
        configuration.update('[json][jsonc][javascript][html]', {
            'editor.defaultFormatter': 'esbenp.prettier-vscode',
        }, vscode.ConfigurationTarget.Global);
        configuration.update('[php]', {
            'editor.defaultFormatter': 'junstyle.php-cs-fixer',
        }, vscode.ConfigurationTarget.Global);
        configuration.update('css.enabledLanguages', ['html', 'twig'], vscode.ConfigurationTarget.Global);
        configuration.update('editor.wordWrapColumn', 120, vscode.ConfigurationTarget.Global);
        configuration.update('emmet.includeLanguages', { twig: 'html' }, vscode.ConfigurationTarget.Global);
        configuration.update('files.trimTrailingWhitespace', true, vscode.ConfigurationTarget.Global);
        configuration.update('php.suggest.basic', false, vscode.ConfigurationTarget.Global);
        configuration.update('prettier.printWidth', 120, vscode.ConfigurationTarget.Global);
        configuration.update('prettier.singleQuote', true, vscode.ConfigurationTarget.Global);
        configuration.update('prettier.tabWidth', 4, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.exclude', ['**/node_modules/**', '**/vendor/**'], vscode.ConfigurationTarget.Global);
        configuration.update('terminal.integrated.defaultProfile.windows', 'PowerShell', vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.exclude', ['**/node_modules/**', '**/vendor/**'], vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableAnsiconForAnt', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableAnt', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableAppPublisher', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableBash', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableGradle', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableGrunt', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableGulp', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableMake', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableMaven', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableNsis', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enablePerl', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enablePipenv', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enablePython', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableRuby', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableTsc', false, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableWorkspace', false, vscode.ConfigurationTarget.Global);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map