---
title: "VirtualInputField"
description: "Client UI: a text field typed into with the in-game virtual keyboard, with a caret, a character limit, optional hidden (secret) text and links to the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualInputField

A **class** in `Root.Township`, the global namespace.

Client UI: a text field typed into with the in-game virtual keyboard, with a caret, a character limit, optional hidden (secret) text and links to the previous and next fields.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`VirtualInputFieldBase`](/mod/game-api/types/global-t-x/virtualinputfieldbase), [`IUseVirtualKeyboard`](/mod/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualInputField()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backspaceonempty" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" backspaceOnEmpty"}</code> | <span className="api-desc">Event run when backspace is pressed on an empty field.</span> |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> | <span className="api-desc">Caret transform placed after the text.</span> |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | <span className="api-desc">In-world touch screen keyboard that types into this field.</span> |
| <Link id="m-maxcharacterslimit" /><code>{"private int maxCharactersLimit"}</code> | <span className="api-desc">Most characters allowed; -1 for no limit.</span> |
| <Link id="m-next" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" next"}</code> | <span className="api-desc">Field focused when the keyboard asks for the next field.</span> |
| <Link id="m-nextaction" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" nextAction"}</code> | <span className="api-desc">Event run when the keyboard submits.</span> |
| <Link id="m-nextonlywhenhasinput" /><code>{"private bool nextOnlyWhenHasInput"}</code> | <span className="api-desc">If true, submitting an empty field does nothing.</span> |
| <Link id="m-onlostfocus" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onLostFocus"}</code> | <span className="api-desc">Event run when the field loses focus.</span> |
| <Link id="m-previous" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" previous"}</code> | <span className="api-desc">Field focused when the keyboard asks for the previous field.</span> |
| <Link id="m-showsecret" /><code>{"private bool showSecret"}</code> | <span className="api-desc">Value returned by `IsShowingSecret`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit-2" /><code>{"int MaxCharactersLimit { get; }"}</code> | <span className="api-desc">Most characters allowed, or -1 for no limit.</span> |
| <Link id="m-next-2" /><code><Link to="/mod/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" Next { get; }"}</code> | <span className="api-desc">Field to move to after this one.</span> |
| <Link id="m-previous-2" /><code><Link to="/mod/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" Previous { get; }"}</code> | <span className="api-desc">Field to move back to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfocus" /><code>{"override void GetFocus()"}</code> | <span className="api-desc">Hands the virtual keyboard to this field with its current text.</span> |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> | <span className="api-desc">Keyboard callback with the new text.</span> |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> | <span className="api-desc">Keyboard submit. Runs the next action, only when there is text if set to.</span> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> | <span className="api-desc">Whether the field is set to show secret text.</span> |
| <Link id="m-lostfocus" /><code>{"override void LostFocus()"}</code> | <span className="api-desc">Runs the lost focus event.</span> |
| <Link id="m-updateinput" /><code>{"void UpdateInput(string input)"}</code> | <span className="api-desc">Sets the text, masking it if secret, and moves the caret.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Runs the base setup.</span> |
| <Link id="m-displaysecret" /><code>{"protected override void DisplaySecret(bool isShowingSecret)"}</code> | <span className="api-desc">Shows or hides the secret text and moves the caret.</span> |
| <Link id="m-updateinputwithsecret" /><code>{"protected override void UpdateInputWithSecret()"}</code> | <span className="api-desc">Redraws the text masked unless the keyboard is showing secrets.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checknext" /><code>{"private void CheckNext()"}</code> | <span className="api-desc">Runs `nextAction` only if the field has text.</span> |
| <Link id="m-next-3" /><code>{"private void IUseVirtualKeyboard.Next()"}</code> | <span className="api-desc">Field to move to after this one.</span> |
| <Link id="m-previous-3" /><code>{"private void IUseVirtualKeyboard.Previous()"}</code> | <span className="api-desc">Field to move back to.</span> |
| <Link id="m-updatecaret" /><code>{"private void UpdateCaret()"}</code> | <span className="api-desc">Moves the caret to the end of the shown text.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VirtualInputField`:

<div className="api-used-in">

[`ServerCreator.descriptionInput`](/mod/game-api/types/global-s/servercreator#m-descriptioninput), [`ServerCreator.nameInput`](/mod/game-api/types/global-s/servercreator#m-nameinput).

</div>
