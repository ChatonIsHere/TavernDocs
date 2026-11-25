---
title: "RuntimeConsole"
description: "class RuntimeConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimeConsole

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-debugcolor" /><code>{"private Color debugColor"}</code> |
| <Link id="m-defaultcommandtarget" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole-commandtarget">{"RuntimeConsole.CommandTarget"}</Link>{" defaultCommandTarget"}</code> |
| <Link id="m-errorcolor" /><code>{"private Color errorColor"}</code> |
| <Link id="m-infocolor" /><code>{"private Color infoColor"}</code> |
| <Link id="m-isrunningcommandonserver" /><code>{"private bool isRunningCommandOnServer"}</code> |
| <Link id="m-keyboardsetup" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfieldwithkeyboard">{"InputFieldWithKeyboard"}</Link>{" keyboardSetup"}</code> |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> |
| <Link id="m-levertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" leverText"}</code> |
| <Link id="m-logfilter" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole-logfilter">{"RuntimeConsole.LogFilter"}</Link>{" logFilter"}</code> |
| <Link id="m-outputbuffer" /><code>{"private readonly Queue<string> outputBuffer"}</code> |
| <Link id="m-outputfield" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" outputField"}</code> |
| <Link id="m-tracecolor" /><code>{"private Color traceColor"}</code> |
| <Link id="m-warningcolor" /><code>{"private Color warningColor"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-keyboarduser" /><code><Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" KeyboardUser { get; }"}</code> |

## Events

<details>
<summary>1 private and internal event</summary>

| Member |
| --- |
| <Link id="m-onbufferchanged" /><code>{"private event Action OnBufferChanged"}</code> |

</details>

## Methods

<details>
<summary>19 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-colortohex" /><code>{"private static string ColorToHex(Color c)"}</code> |
| <Link id="m-copybuffertooutput" /><code>{"private void CopyBufferToOutput()"}</code> |
| <Link id="m-filteroutput" /><code>{"private bool FilterOutput(LogLevel level)"}</code> |
| <Link id="m-formatlogmessage" /><code>{"private string FormatLogMessage(string message, LogLevel level)"}</code> |
| <Link id="m-getlogcolorashexstring" /><code>{"private string GetLogColorAsHexString(LogLevel level)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-oninputsubmitted" /><code>{"private void OnInputSubmitted("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" field)"}</code> |
| <Link id="m-onleverselectionchanged" /><code>{"private void OnLeverSelectionChanged("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" _, int previous, int current)"}</code> |
| <Link id="m-onlog" /><code>{"private void OnLog(string message, LogLevel level)"}</code> |
| <Link id="m-runcommandonclient" /><code>{"private void RunCommandOnClient(string command)"}</code> |
| <Link id="m-runcommandonserver" /><code>{"private void RunCommandOnServer(string command)"}</code> |
| <Link id="m-setupbuffer" /><code>{"private void SetupBuffer()"}</code> |
| <Link id="m-setupcommandtarget" /><code>{"private void SetupCommandTarget()"}</code> |
| <Link id="m-setupkeyboard" /><code>{"private void SetupKeyboard()"}</code> |
| <Link id="m-teardownkeyboard" /><code>{"private void TeardownKeyboard()"}</code> |
| <Link id="m-tobyte" /><code>{"private static byte ToByte(float f)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RuntimeConsole`:

[`DevToolsBoard.console`](/game-api/types/alta-player/devtoolsboard#m-console), [`ToggleRuntimeConsole.consolePrefab`](/game-api/types/alta-player/toggleruntimeconsole#m-consoleprefab), [`ToggleRuntimeConsole.runtimeConsole`](/game-api/types/alta-player/toggleruntimeconsole#m-runtimeconsole).
