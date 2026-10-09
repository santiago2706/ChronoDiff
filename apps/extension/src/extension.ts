import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    const output = vscode.window.createOutputChannel("Predictive Impact");
    output.appendLine("Predictive Impact extension activated.");
    context.subscriptions.push(output);

    const disposable = vscode.commands.registerCommand(
        "predictiveImpact.analyzeImpact",
        () => {
            vscode.window.showInformationMessage(
                "Predictive Impact: Analyze Impact executed."
            );
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}