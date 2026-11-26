---
title: "IUseVirtualKeyboard"
description: "Something that takes text from the in-game virtual keyboard, such as a text field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUseVirtualKeyboard

An **interface** in `Root.Township`, the global namespace.

Something that takes text from the in-game virtual keyboard, such as a text field.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`AssistedSpawnCommandAction`](/mod/game-api/types/alta-menus/assistedspawncommandaction), [`InputFieldWithKeyboard`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard), [`VirtualInputField`](/mod/game-api/types/global-t-x/virtualinputfield)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit" /><code>{"int MaxCharactersLimit { get; }"}</code> | <span className="api-desc">Most characters the field accepts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | <span className="api-desc">Called with the new input text.</span> |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | <span className="api-desc">Called when the keyboard's submit key is pressed.</span> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | <span className="api-desc">True if the text should be hidden, as for a password.</span> |
| <Link id="m-lostfocus" /><code>{"void LostFocus()"}</code> | <span className="api-desc">Called when the keyboard stops targeting this field.</span> |
| <Link id="m-next" /><code>{"void Next()"}</code> | <span className="api-desc">Moves to the next field, probably.</span> |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | <span className="api-desc">Moves to the previous field, probably.</span> |

## Used in

Members of other types that take, return or hold a `IUseVirtualKeyboard`:

<div className="api-used-in">

[`AssistedSpawnCommandAction.baseUser`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-baseuser), [`DevToolsBoard.SetRuntimeConsoleActiveState`](/mod/game-api/types/alta-player/devtoolsboard#m-setruntimeconsoleactivestate), [`RuntimeConsole.KeyboardUser`](/mod/game-api/types/global-q-r/runtimeconsole#m-keyboarduser), [`TouchScreenKeyboard.CurrentUser`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-currentuser), [`TouchScreenKeyboard.Get`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-get-2), [`TouchScreenKeyboard.Hide`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-hide), [`TouchScreenKeyboard.SetupNewUser`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-setupnewuser).

</div>
