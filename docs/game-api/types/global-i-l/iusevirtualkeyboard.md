---
title: "IUseVirtualKeyboard"
description: "interface IUseVirtualKeyboard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUseVirtualKeyboard

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`AssistedSpawnCommandAction`](/game-api/types/alta-menus/assistedspawncommandaction), [`InputFieldWithKeyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard), [`VirtualInputField`](/game-api/types/global-t-x/virtualinputfield)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit" /><code>{"int MaxCharactersLimit { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> |  |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> |  |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> |  |
| <Link id="m-lostfocus" /><code>{"void LostFocus()"}</code> |  |
| <Link id="m-next" /><code>{"void Next()"}</code> |  |
| <Link id="m-previous" /><code>{"void Previous()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IUseVirtualKeyboard`:

[`AssistedSpawnCommandAction.baseUser`](/game-api/types/alta-menus/assistedspawncommandaction#m-baseuser), [`DevToolsBoard.SetRuntimeConsoleActiveState`](/game-api/types/alta-player/devtoolsboard#m-setruntimeconsoleactivestate), [`RuntimeConsole.KeyboardUser`](/game-api/types/global-q-r/runtimeconsole#m-keyboarduser), [`TouchScreenKeyboard.CurrentUser`](/game-api/types/global-t-x/touchscreenkeyboard#m-currentuser), [`TouchScreenKeyboard.Get`](/game-api/types/global-t-x/touchscreenkeyboard#m-get-2), [`TouchScreenKeyboard.Hide`](/game-api/types/global-t-x/touchscreenkeyboard#m-hide), [`TouchScreenKeyboard.SetupNewUser`](/game-api/types/global-t-x/touchscreenkeyboard#m-setupnewuser).
