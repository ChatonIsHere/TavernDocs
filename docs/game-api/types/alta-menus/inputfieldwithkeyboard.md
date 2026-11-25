---
title: "InputFieldWithKeyboard"
description: "class InputFieldWithKeyboard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputFieldWithKeyboard

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`IUseVirtualKeyboard`](/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InputFieldWithKeyboard()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-autocompletionsource" /><code>{"private Object autoCompletionSource"}</code> |
| <Link id="m-btnkeyboard" /><code>{"private bool btnKeyboard"}</code> |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> |
| <Link id="m-hideonsubmit" /><code>{"private bool hideOnSubmit"}</code> |
| <Link id="m-inputfield" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" inputField"}</code> |
| <Link id="m-ischildingkeyboardtopositionmarker" /><code>{"private bool isChildingKeyboardToPositionMarker"}</code> |
| <Link id="m-ispasswordkeyboard" /><code>{"private bool isPasswordKeyboard"}</code> |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> |
| <Link id="m-keyboardposition" /><code>{"private Transform keyboardPosition"}</code> |
| <Link id="m-keyboardprefab" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboardPrefab"}</code> |
| <Link id="m-maxcharacterslimit" /><code>{"private int maxCharactersLimit"}</code> |
| <Link id="m-showkeyboardonawake" /><code>{"private bool showKeyboardOnAwake"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-inputfield-2" /><code><Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" { get; }"}</code> |
| <Link id="m-keyboard-2" /><code><Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Keyboard { get; }"}</code> |
| <Link id="m-maxcharacterslimit-2" /><code>{"int MaxCharactersLimit { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-autocompletionsource-2" /><code>{"private "}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" AutoCompletionSource { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> |
| <Link id="m-hidekeyboard" /><code>{"void HideKeyboard()"}</code> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> |
| <Link id="m-showkeyboard" /><code>{"void ShowKeyboard()"}</code> |
| <Link id="m-showkeyboard-2" /><code>{"void ShowKeyboard(int targetKeyboard)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-internalshow" /><code>{"private void InternalShow()"}</code> |
| <Link id="m-lostfocus" /><code>{"private void IUseVirtualKeyboard.LostFocus()"}</code> |
| <Link id="m-next" /><code>{"private void IUseVirtualKeyboard.Next()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-previous" /><code>{"private void IUseVirtualKeyboard.Previous()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `InputFieldWithKeyboard`:

[`ServerBoardFilter.inputField`](/game-api/types/game-other-namespaces/serverboardfilter#m-inputfield), [`RuntimeConsole.keyboardSetup`](/game-api/types/global-q-r/runtimeconsole#m-keyboardsetup).
