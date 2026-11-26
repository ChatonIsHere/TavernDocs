---
title: "RuntimeConsole"
description: "In-game VR console panel: shows log output and runs typed commands on the client or, with its lever, on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimeConsole

A **class** in `Root.Township`, no namespace.

In-game VR console panel: shows log output and runs typed commands on the client or, with its lever, on the server. Client side.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`CommandTarget`](/game-api/types/global-q-r/runtimeconsole-commandtarget), [`LogFilter`](/game-api/types/global-q-r/runtimeconsole-logfilter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RuntimeConsole()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debugcolor" /><code>{"private Color debugColor"}</code> | Text colour for debug logs. |
| <Link id="m-defaultcommandtarget" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole-commandtarget">{"RuntimeConsole.CommandTarget"}</Link>{" defaultCommandTarget"}</code> | Whether commands run on the client or server when the panel opens. |
| <Link id="m-errorcolor" /><code>{"private Color errorColor"}</code> | Text colour for error logs. |
| <Link id="m-infocolor" /><code>{"private Color infoColor"}</code> | Text colour for info logs. |
| <Link id="m-isrunningcommandonserver" /><code>{"private bool isRunningCommandOnServer"}</code> | True while the lever is set to the server. |
| <Link id="m-keyboardsetup" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfieldwithkeyboard">{"InputFieldWithKeyboard"}</Link>{" keyboardSetup"}</code> | Input field with its virtual keyboard. |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | Lever that picks client or server. |
| <Link id="m-levertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" leverText"}</code> | Label showing the lever's current target. |
| <Link id="m-logfilter" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole-logfilter">{"RuntimeConsole.LogFilter"}</Link>{" logFilter"}</code> | Log levels to hide; none shows everything. |
| <Link id="m-outputbuffer" /><code>{"private readonly Queue<string> outputBuffer"}</code> | Queue of formatted log lines shown in the output. |
| <Link id="m-outputfield" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" outputField"}</code> | Text renderer for the log output. |
| <Link id="m-tracecolor" /><code>{"private Color traceColor"}</code> | Text colour for trace logs. |
| <Link id="m-warningcolor" /><code>{"private Color warningColor"}</code> | Text colour for warning logs. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keyboarduser" /><code><Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" KeyboardUser { get; }"}</code> | The input field that uses the virtual keyboard. |

## Events

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onbufferchanged" /><code>{"private event Action OnBufferChanged"}</code> | Raised when a log line is added. |

</details>

## Methods

<details>
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the input field's submit and the server and console command log streams. |
| <Link id="m-colortohex" /><code>{"private static string ColorToHex(Color c)"}</code> | Turns a colour into a `#RRGGBB` string. |
| <Link id="m-copybuffertooutput" /><code>{"private void CopyBufferToOutput()"}</code> | Writes the buffered log lines into the output text. |
| <Link id="m-filteroutput" /><code>{"private bool FilterOutput(LogLevel level)"}</code> | True when a log level should be hidden. It casts the level number straight to a flag, so the filter flags don't match level names one to one. |
| <Link id="m-formatlogmessage" /><code>{"private string FormatLogMessage(string message, LogLevel level)"}</code> | Wraps a message in a colour tag for its log level. |
| <Link id="m-getlogcolorashexstring" /><code>{"private string GetLogColorAsHexString(LogLevel level)"}</code> | Returns the hex colour for a log level. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the submit and log events. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Hides the keyboard and unhooks the lever and buffer events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Fills the output, shows the keyboard and sets the lever to the default target. |
| <Link id="m-oninputsubmitted" /><code>{"private void OnInputSubmitted("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" field)"}</code> | Runs the typed command on the server or client and clears the field. |
| <Link id="m-onleverselectionchanged" /><code>{"private void OnLeverSelectionChanged("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" _, int previous, int current)"}</code> | Switches between client and server commands and updates the lever label. |
| <Link id="m-onlog" /><code>{"private void OnLog(string message, LogLevel level)"}</code> | Adds a log line to the buffer, dropping old ones past the output's line limit. |
| <Link id="m-runcommandonclient" /><code>{"private void RunCommandOnClient(string command)"}</code> | Runs a command locally through `CommandService`. |
| <Link id="m-runcommandonserver" /><code>{"private void RunCommandOnServer(string command)"}</code> | Sends a command to the server through `CommandSync`. |
| <Link id="m-setupbuffer" /><code>{"private void SetupBuffer()"}</code> | Shows the current buffer and listens for new lines. |
| <Link id="m-setupcommandtarget" /><code>{"private void SetupCommandTarget()"}</code> | Hooks the lever and sets it to `defaultCommandTarget`. |
| <Link id="m-setupkeyboard" /><code>{"private void SetupKeyboard()"}</code> | Shows the virtual keyboard. |
| <Link id="m-teardownkeyboard" /><code>{"private void TeardownKeyboard()"}</code> | Hides the virtual keyboard. |
| <Link id="m-tobyte" /><code>{"private static byte ToByte(float f)"}</code> | Turns a 0 to 1 colour value into a byte. |

</details>

## Used in

Members of other types that take, return or hold a `RuntimeConsole`:

[`DevToolsBoard.console`](/game-api/types/alta-player/devtoolsboard#m-console), [`ToggleRuntimeConsole.consolePrefab`](/game-api/types/alta-player/toggleruntimeconsole#m-consoleprefab), [`ToggleRuntimeConsole.runtimeConsole`](/game-api/types/alta-player/toggleruntimeconsole#m-runtimeconsole).
