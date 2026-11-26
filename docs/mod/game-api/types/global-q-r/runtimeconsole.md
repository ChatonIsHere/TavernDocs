---
title: "RuntimeConsole"
description: "In-game VR console panel: shows log output and runs typed commands on the client or, with its lever, on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimeConsole

A **class** in `Root.Township`, the global namespace.

In-game VR console panel: shows log output and runs typed commands on the client or, with its lever, on the server. Client side.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`CommandTarget`](/mod/game-api/types/global-q-r/runtimeconsole-commandtarget), [`LogFilter`](/mod/game-api/types/global-q-r/runtimeconsole-logfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RuntimeConsole()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debugcolor" /><code>{"private Color debugColor"}</code> | <span className="api-desc">Text colour for debug logs.</span> |
| <Link id="m-defaultcommandtarget" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/runtimeconsole-commandtarget">{"RuntimeConsole.CommandTarget"}</Link>{" defaultCommandTarget"}</code> | <span className="api-desc">Whether commands run on the client or server when the panel opens.</span> |
| <Link id="m-errorcolor" /><code>{"private Color errorColor"}</code> | <span className="api-desc">Text colour for error logs.</span> |
| <Link id="m-infocolor" /><code>{"private Color infoColor"}</code> | <span className="api-desc">Text colour for info logs.</span> |
| <Link id="m-isrunningcommandonserver" /><code>{"private bool isRunningCommandOnServer"}</code> | <span className="api-desc">True while the lever is set to the server.</span> |
| <Link id="m-keyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfieldwithkeyboard">{"InputFieldWithKeyboard"}</Link>{" keyboardSetup"}</code> | <span className="api-desc">Input field with its virtual keyboard.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | <span className="api-desc">Lever that picks client or server.</span> |
| <Link id="m-levertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" leverText"}</code> | <span className="api-desc">Label showing the lever's current target.</span> |
| <Link id="m-logfilter" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/runtimeconsole-logfilter">{"RuntimeConsole.LogFilter"}</Link>{" logFilter"}</code> | <span className="api-desc">Log levels to hide; none shows everything.</span> |
| <Link id="m-outputbuffer" /><code>{"private readonly Queue<string> outputBuffer"}</code> | <span className="api-desc">Queue of formatted log lines shown in the output.</span> |
| <Link id="m-outputfield" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" outputField"}</code> | <span className="api-desc">Text renderer for the log output.</span> |
| <Link id="m-tracecolor" /><code>{"private Color traceColor"}</code> | <span className="api-desc">Text colour for trace logs.</span> |
| <Link id="m-warningcolor" /><code>{"private Color warningColor"}</code> | <span className="api-desc">Text colour for warning logs.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keyboarduser" /><code><Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" KeyboardUser { get; }"}</code> | <span className="api-desc">The input field that uses the virtual keyboard.</span> |

## Events

<details className="api-private">
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onbufferchanged" /><code>{"private event Action OnBufferChanged"}</code> | <span className="api-desc">Raised when a log line is added.</span> |

</details>

## Methods

<details className="api-private">
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the input field's submit and the server and console command log streams.</span> |
| <Link id="m-colortohex" /><code>{"private static string ColorToHex(Color c)"}</code> | <span className="api-desc">Turns a colour into a `#RRGGBB` string.</span> |
| <Link id="m-copybuffertooutput" /><code>{"private void CopyBufferToOutput()"}</code> | <span className="api-desc">Writes the buffered log lines into the output text.</span> |
| <Link id="m-filteroutput" /><code>{"private bool FilterOutput(LogLevel level)"}</code> | <span className="api-desc">True when a log level should be hidden. It casts the level number straight to a flag, so the filter flags don't match level names one to one.</span> |
| <Link id="m-formatlogmessage" /><code>{"private string FormatLogMessage(string message, LogLevel level)"}</code> | <span className="api-desc">Wraps a message in a colour tag for its log level.</span> |
| <Link id="m-getlogcolorashexstring" /><code>{"private string GetLogColorAsHexString(LogLevel level)"}</code> | <span className="api-desc">Returns the hex colour for a log level.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the submit and log events.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Hides the keyboard and unhooks the lever and buffer events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Fills the output, shows the keyboard and sets the lever to the default target.</span> |
| <Link id="m-oninputsubmitted" /><code>{"private void OnInputSubmitted("}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" field)"}</code> | <span className="api-desc">Runs the typed command on the server or client and clears the field.</span> |
| <Link id="m-onleverselectionchanged" /><code>{"private void OnLeverSelectionChanged("}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" _, int previous, int current)"}</code> | <span className="api-desc">Switches between client and server commands and updates the lever label.</span> |
| <Link id="m-onlog" /><code>{"private void OnLog(string message, LogLevel level)"}</code> | <span className="api-desc">Adds a log line to the buffer, dropping old ones past the output's line limit.</span> |
| <Link id="m-runcommandonclient" /><code>{"private void RunCommandOnClient(string command)"}</code> | <span className="api-desc">Runs a command locally through `CommandService`.</span> |
| <Link id="m-runcommandonserver" /><code>{"private void RunCommandOnServer(string command)"}</code> | <span className="api-desc">Sends a command to the server through `CommandSync`.</span> |
| <Link id="m-setupbuffer" /><code>{"private void SetupBuffer()"}</code> | <span className="api-desc">Shows the current buffer and listens for new lines.</span> |
| <Link id="m-setupcommandtarget" /><code>{"private void SetupCommandTarget()"}</code> | <span className="api-desc">Hooks the lever and sets it to `defaultCommandTarget`.</span> |
| <Link id="m-setupkeyboard" /><code>{"private void SetupKeyboard()"}</code> | <span className="api-desc">Shows the virtual keyboard.</span> |
| <Link id="m-teardownkeyboard" /><code>{"private void TeardownKeyboard()"}</code> | <span className="api-desc">Hides the virtual keyboard.</span> |
| <Link id="m-tobyte" /><code>{"private static byte ToByte(float f)"}</code> | <span className="api-desc">Turns a 0 to 1 colour value into a byte.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RuntimeConsole`:

<div className="api-used-in">

[`DevToolsBoard.console`](/mod/game-api/types/alta-player/devtoolsboard#m-console), [`ToggleRuntimeConsole.consolePrefab`](/mod/game-api/types/alta-player/toggleruntimeconsole#m-consoleprefab), [`ToggleRuntimeConsole.runtimeConsole`](/mod/game-api/types/alta-player/toggleruntimeconsole#m-runtimeconsole).

</div>
