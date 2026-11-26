---
title: "InputFieldWithKeyboard"
description: "Client: connects a UI InputField to the in-world VR TouchScreenKeyboard, showing it at a marker and passing typed text back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputFieldWithKeyboard

A **class** in `Root.Township`, `Alta.Meta.UI`.

Client: connects a UI `InputField` to the in-world VR `TouchScreenKeyboard`, showing it at a marker and passing typed text back.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`IUseVirtualKeyboard`](/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InputFieldWithKeyboard()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletionsource" /><code>{"private Object autoCompletionSource"}</code> | Backing field for `AutoCompletionSource`, set in the inspector. |
| <Link id="m-btnkeyboard" /><code>{"private bool btnKeyboard"}</code> | Inspector button that calls `ShowKeyboard`. |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> | Optional caret object shown while typing. |
| <Link id="m-hideonsubmit" /><code>{"private bool hideOnSubmit"}</code> | Whether submitting closes the keyboard (default true). |
| <Link id="m-inputfield" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" inputField"}</code> | Backing field for `InputField`. |
| <Link id="m-ischildingkeyboardtopositionmarker" /><code>{"private bool isChildingKeyboardToPositionMarker"}</code> | Whether the keyboard is parented to `keyboardPosition` so it moves with it. |
| <Link id="m-ispasswordkeyboard" /><code>{"private bool isPasswordKeyboard"}</code> | Whether the keyboard shows its show/hide secret key. |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | Backing field for `Keyboard`. |
| <Link id="m-keyboardposition" /><code>{"private Transform keyboardPosition"}</code> | Where the keyboard appears. |
| <Link id="m-keyboardprefab" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboardPrefab"}</code> | Keyboard prefab spawned if no `TouchScreenKeyboard.Instance` exists yet. |
| <Link id="m-maxcharacterslimit" /><code>{"private int maxCharactersLimit"}</code> | Backing field for `MaxCharactersLimit`. |
| <Link id="m-showkeyboardonawake" /><code>{"private bool showKeyboardOnAwake"}</code> | Whether to open the keyboard as soon as the object wakes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputfield-2" /><code><Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" { get; }"}</code> | The input field this keyboard types into. |
| <Link id="m-keyboard-2" /><code><Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Keyboard { get; }"}</code> | The keyboard currently open for this field, or null. |
| <Link id="m-maxcharacterslimit-2" /><code>{"int MaxCharactersLimit { get; }"}</code> | Maximum characters allowed, or -1 for no limit. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletionsource-2" /><code>{"private "}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" AutoCompletionSource { get; }"}</code> | The optional auto completion source given to the keyboard when it opens. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | Called by the keyboard with the typed text; sets it on the input field. |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | Called by the keyboard on submit; submits the input field and hides the keyboard if `hideOnSubmit` is set. |
| <Link id="m-hidekeyboard" /><code>{"void HideKeyboard()"}</code> | Hides the keyboard for this user, turns off the caret and unhooks the secret toggle. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | Whether the input field is currently hiding its text (password mode). |
| <Link id="m-showkeyboard" /><code>{"void ShowKeyboard()"}</code> | Opens the keyboard, optionally on a given keyboard layout index, and applies the auto completion source. |
| <Link id="m-showkeyboard-2" /><code>{"void ShowKeyboard(int targetKeyboard)"}</code> | Opens the keyboard, optionally on a given keyboard layout index, and applies the auto completion source. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Opens the keyboard straight away if `showKeyboardOnAwake` is set. |
| <Link id="m-internalshow" /><code>{"private void InternalShow()"}</code> | Spawns the keyboard prefab if none exists, places it at `keyboardPosition`, and sets up input, secret key and caret. |
| <Link id="m-lostfocus" /><code>{"private void IUseVirtualKeyboard.LostFocus()"}</code> | Keyboard interface callback; does nothing here. |
| <Link id="m-next" /><code>{"private void IUseVirtualKeyboard.Next()"}</code> | Keyboard interface callback; does nothing here. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Hides the keyboard when the object is disabled. |
| <Link id="m-previous" /><code>{"private void IUseVirtualKeyboard.Previous()"}</code> | Keyboard interface callback; does nothing here. |

</details>

## Used in

Members of other types that take, return or hold a `InputFieldWithKeyboard`:

[`ServerBoardFilter.inputField`](/game-api/types/game-other-namespaces/serverboardfilter#m-inputfield), [`RuntimeConsole.keyboardSetup`](/game-api/types/global-q-r/runtimeconsole#m-keyboardsetup).
