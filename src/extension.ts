import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('inocomsExtensionPack.commands.recommendedSettings', () => {
        const configuration = vscode.workspace.getConfiguration();

        configuration.update(
            '[json][javascript][html]',
            { 'editor.defaultFormatter': 'esbenp.prettier-vscode' },
            vscode.ConfigurationTarget.Global
        );
        configuration.update(
            '[php]',
            { 'editor.defaultFormatter': 'junstyle.php-cs-fixer' },
            vscode.ConfigurationTarget.Global
        );
        configuration.update('css.enabledLanguages', ['html', 'twig'], vscode.ConfigurationTarget.Global);
        configuration.update('editor.wordWrapColumn', 120, vscode.ConfigurationTarget.Global);
        configuration.update('emmet.includeLanguages', { twig: 'html' }, vscode.ConfigurationTarget.Global);
        configuration.update('files.trimTrailingWhitespace', true, vscode.ConfigurationTarget.Global);
        configuration.update('prettier.printWidth', 120, vscode.ConfigurationTarget.Global);
        configuration.update('prettier.singleQuote', true, vscode.ConfigurationTarget.Global);
        configuration.update('prettier.tabWidth', 4, vscode.ConfigurationTarget.Global);
        configuration.update('taskExplorer.enableAnsiconForAnt', false, vscode.ConfigurationTarget.Global);
        configuration.update(
            'taskExplorer.enabledTasks',
            {
                ant: false,
                bash: false,
                gradle: false,
                grunt: false,
                gulp: false,
                make: false,
                maven: false,
                perl: false,
                pipenv: false,
                python: false,
                ruby: false,
                tsc: false,
                workspace: false,
            },
            vscode.ConfigurationTarget.Global
        );
        configuration.update(
            'taskExplorer.exclude',
            ['**/node_modules/**', '**/vendor/**'],
            vscode.ConfigurationTarget.Global
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
