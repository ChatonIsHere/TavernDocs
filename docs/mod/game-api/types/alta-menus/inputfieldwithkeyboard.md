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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`IUseVirtualKeyboard`](/mod/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputFieldWithKeyboard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletionsource" /><code>{"private Object autoCompletionSource"}</code> | <span className="api-desc">Backing field for `AutoCompletionSource`, set in the inspector.</span> |
| <Link id="m-btnkeyboard" /><code>{"private bool btnKeyboard"}</code> | <span className="api-desc">Inspector button that calls `ShowKeyboard`.</span> |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> | <span className="api-desc">Optional caret object shown while typing.</span> |
| <Link id="m-hideonsubmit" /><code>{"private bool hideOnSubmit"}</code> | <span className="api-desc">Whether submitting closes the keyboard (default true).</span> |
| <Link id="m-inputfield" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" inputField"}</code> | <span className="api-desc">Backing field for `InputField`.</span> |
| <Link id="m-ischildingkeyboardtopositionmarker" /><code>{"private bool isChildingKeyboardToPositionMarker"}</code> | <span className="api-desc">Whether the keyboard is parented to `keyboardPosition` so it moves with it.</span> |
| <Link id="m-ispasswordkeyboard" /><code>{"private bool isPasswordKeyboard"}</code> | <span className="api-desc">Whether the keyboard shows its show/hide secret key.</span> |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | <span className="api-desc">Backing field for `Keyboard`.</span> |
| <Link id="m-keyboardposition" /><code>{"private Transform keyboardPosition"}</code> | <span className="api-desc">Where the keyboard appears.</span> |
| <Link id="m-keyboardprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboardPrefab"}</code> | <span className="api-desc">Keyboard prefab spawned if no `TouchScreenKeyboard.Instance` exists yet.</span> |
| <Link id="m-maxcharacterslimit" /><code>{"private int maxCharactersLimit"}</code> | <span className="api-desc">Backing field for `MaxCharactersLimit`.</span> |
| <Link id="m-showkeyboardonawake" /><code>{"private bool showKeyboardOnAwake"}</code> | <span className="api-desc">Whether to open the keyboard as soon as the object wakes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inputfield-2" /><code><Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" { get; }"}</code> | <span className="api-desc">The input field this keyboard types into.</span> |
| <Link id="m-keyboard-2" /><code><Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Keyboard { get; }"}</code> | <span className="api-desc">The keyboard currently open for this field, or null.</span> |
| <Link id="m-maxcharacterslimit-2" /><code>{"int MaxCharactersLimit { get; }"}</code> | <span className="api-desc">Maximum characters allowed, or -1 for no limit.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletionsource-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" AutoCompletionSource { get; }"}</code> | <span className="api-desc">The optional auto completion source given to the keyboard when it opens.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | <span className="api-desc">Called by the keyboard with the typed text; sets it on the input field.</span> |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | <span className="api-desc">Called by the keyboard on submit; submits the input field and hides the keyboard if `hideOnSubmit` is set.</span> |
| <Link id="m-hidekeyboard" /><code>{"void HideKeyboard()"}</code> | <span className="api-desc">Hides the keyboard for this user, turns off the caret and unhooks the secret toggle.</span> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | <span className="api-desc">Whether the input field is currently hiding its text (password mode).</span> |
| <Link id="m-showkeyboard" /><code>{"void ShowKeyboard()"}</code> | <span className="api-desc">Opens the keyboard, optionally on a given keyboard layout index, and applies the auto completion source.</span> |
| <Link id="m-showkeyboard-2" /><code>{"void ShowKeyboard(int targetKeyboard)"}</code> | <span className="api-desc">Opens the keyboard, optionally on a given keyboard layout index, and applies the auto completion source.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Opens the keyboard straight away if `showKeyboardOnAwake` is set.</span> |
| <Link id="m-internalshow" /><code>{"private void InternalShow()"}</code> | <span className="api-desc">Spawns the keyboard prefab if none exists, places it at `keyboardPosition`, and sets up input, secret key and caret.</span> |
| <Link id="m-lostfocus" /><code>{"private void IUseVirtualKeyboard.LostFocus()"}</code> | <span className="api-desc">Keyboard interface callback; does nothing here.</span> |
| <Link id="m-next" /><code>{"private void IUseVirtualKeyboard.Next()"}</code> | <span className="api-desc">Keyboard interface callback; does nothing here.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Hides the keyboard when the object is disabled.</span> |
| <Link id="m-previous" /><code>{"private void IUseVirtualKeyboard.Previous()"}</code> | <span className="api-desc">Keyboard interface callback; does nothing here.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InputFieldWithKeyboard`:

<div className="api-used-in">

[`ServerBoardFilter.inputField`](/mod/game-api/types/game-other-namespaces/serverboardfilter#m-inputfield), [`RuntimeConsole.keyboardSetup`](/mod/game-api/types/global-q-r/runtimeconsole#m-keyboardsetup).

</div>
