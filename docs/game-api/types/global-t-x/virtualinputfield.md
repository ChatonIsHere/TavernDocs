---
title: "VirtualInputField"
description: "Client UI: a text field typed into with the in-game virtual keyboard, with a caret, a character limit, optional hidden (secret) text and links to the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualInputField

A **class** in `Root.Township`, no namespace.

Client UI: a text field typed into with the in-game virtual keyboard, with a caret, a character limit, optional hidden (secret) text and links to the previous and next fields.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`VirtualInputFieldBase`](/game-api/types/global-t-x/virtualinputfieldbase), [`IUseVirtualKeyboard`](/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualInputField()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backspaceonempty" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" backspaceOnEmpty"}</code> | Event run when backspace is pressed on an empty field. |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> | Caret transform placed after the text. |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | In-world touch screen keyboard that types into this field. |
| <Link id="m-maxcharacterslimit" /><code>{"private int maxCharactersLimit"}</code> | Most characters allowed; -1 for no limit. |
| <Link id="m-next" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" next"}</code> | Field focused when the keyboard asks for the next field. |
| <Link id="m-nextaction" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" nextAction"}</code> | Event run when the keyboard submits. |
| <Link id="m-nextonlywhenhasinput" /><code>{"private bool nextOnlyWhenHasInput"}</code> | If true, submitting an empty field does nothing. |
| <Link id="m-onlostfocus" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onLostFocus"}</code> | Event run when the field loses focus. |
| <Link id="m-previous" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" previous"}</code> | Field focused when the keyboard asks for the previous field. |
| <Link id="m-showsecret" /><code>{"private bool showSecret"}</code> | Value returned by `IsShowingSecret`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit-2" /><code>{"int MaxCharactersLimit { get; }"}</code> | Most characters allowed, or -1 for no limit. |
| <Link id="m-next-2" /><code><Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" Next { get; }"}</code> | Field to move to after this one. |
| <Link id="m-previous-2" /><code><Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" Previous { get; }"}</code> | Field to move back to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfocus" /><code>{"override void GetFocus()"}</code> | Hands the virtual keyboard to this field with its current text. |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | Keyboard callback with the new text. |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | Keyboard submit. Runs the next action, only when there is text if set to. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | Whether the field is set to show secret text. |
| <Link id="m-lostfocus" /><code>{"override void LostFocus()"}</code> | Runs the lost focus event. |
| <Link id="m-updateinput" /><code>{"void UpdateInput(string input)"}</code> | Sets the text, masking it if secret, and moves the caret. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Runs the base setup. |
| <Link id="m-displaysecret" /><code>{"protected override void DisplaySecret(bool isShowingSecret)"}</code> | Shows or hides the secret text and moves the caret. |
| <Link id="m-updateinputwithsecret" /><code>{"protected override void UpdateInputWithSecret()"}</code> | Redraws the text masked unless the keyboard is showing secrets. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checknext" /><code>{"private void CheckNext()"}</code> | Runs `nextAction` only if the field has text. |
| <Link id="m-next-3" /><code>{"private void IUseVirtualKeyboard.Next()"}</code> | Field to move to after this one. |
| <Link id="m-previous-3" /><code>{"private void IUseVirtualKeyboard.Previous()"}</code> | Field to move back to. |
| <Link id="m-updatecaret" /><code>{"private void UpdateCaret()"}</code> | Moves the caret to the end of the shown text. |

</details>

## Used in

Members of other types that take, return or hold a `VirtualInputField`:

[`ServerCreator.descriptionInput`](/game-api/types/global-s/servercreator#m-descriptioninput), [`ServerCreator.nameInput`](/game-api/types/global-s/servercreator#m-nameinput).
