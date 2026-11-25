---
title: "IUseVirtualKeyboard"
description: "Something that takes text from the in-game virtual keyboard, such as a text field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUseVirtualKeyboard

An **interface** in `Root.Township`, no namespace.

Something that takes text from the in-game virtual keyboard, such as a text field.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`AssistedSpawnCommandAction`](/game-api/types/alta-menus/assistedspawncommandaction), [`InputFieldWithKeyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard), [`VirtualInputField`](/game-api/types/global-t-x/virtualinputfield)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit" /><code>{"int MaxCharactersLimit { get; }"}</code> | Most characters the field accepts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | Called with the new input text. |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | Called when the keyboard's submit key is pressed. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | True if the text should be hidden, as for a password. |
| <Link id="m-lostfocus" /><code>{"void LostFocus()"}</code> | Called when the keyboard stops targeting this field. |
| <Link id="m-next" /><code>{"void Next()"}</code> | Moves to the next field, probably. |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | Moves to the previous field, probably. |

## Used in

Members of other types that take, return or hold a `IUseVirtualKeyboard`:

[`AssistedSpawnCommandAction.baseUser`](/game-api/types/alta-menus/assistedspawncommandaction#m-baseuser), [`DevToolsBoard.SetRuntimeConsoleActiveState`](/game-api/types/alta-player/devtoolsboard#m-setruntimeconsoleactivestate), [`RuntimeConsole.KeyboardUser`](/game-api/types/global-q-r/runtimeconsole#m-keyboarduser), [`TouchScreenKeyboard.CurrentUser`](/game-api/types/global-t-x/touchscreenkeyboard#m-currentuser), [`TouchScreenKeyboard.Get`](/game-api/types/global-t-x/touchscreenkeyboard#m-get-2), [`TouchScreenKeyboard.Hide`](/game-api/types/global-t-x/touchscreenkeyboard#m-hide), [`TouchScreenKeyboard.SetupNewUser`](/game-api/types/global-t-x/touchscreenkeyboard#m-setupnewuser).
