---
title: "VirtualInputField"
description: "class VirtualInputField in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualInputField

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`VirtualInputFieldBase`](/game-api/types/global-t-x/virtualinputfieldbase), [`IUseVirtualKeyboard`](/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualInputField()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backspaceonempty" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" backspaceOnEmpty"}</code> |  |
| <Link id="m-caret" /><code>{"private Transform caret"}</code> |  |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> |  |
| <Link id="m-maxcharacterslimit" /><code>{"private int maxCharactersLimit"}</code> |  |
| <Link id="m-next" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" next"}</code> |  |
| <Link id="m-nextaction" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" nextAction"}</code> |  |
| <Link id="m-nextonlywhenhasinput" /><code>{"private bool nextOnlyWhenHasInput"}</code> |  |
| <Link id="m-onlostfocus" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onLostFocus"}</code> |  |
| <Link id="m-previous" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" previous"}</code> |  |
| <Link id="m-showsecret" /><code>{"private bool showSecret"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxcharacterslimit-2" /><code>{"int MaxCharactersLimit { get; }"}</code> |  |
| <Link id="m-next-2" /><code><Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" Next { get; }"}</code> |  |
| <Link id="m-previous-2" /><code><Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" Previous { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfocus" /><code>{"override void GetFocus()"}</code> |  |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> |  |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> |  |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> |  |
| <Link id="m-lostfocus" /><code>{"override void LostFocus()"}</code> |  |
| <Link id="m-updateinput" /><code>{"void UpdateInput(string input)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-checknext" /><code>{"private void CheckNext()"}</code> |  |
| <Link id="m-displaysecret" /><code>{"protected override void DisplaySecret(bool isShowingSecret)"}</code> |  |
| <Link id="m-next-3" /><code>{"private void IUseVirtualKeyboard.Next()"}</code> |  |
| <Link id="m-previous-3" /><code>{"private void IUseVirtualKeyboard.Previous()"}</code> |  |
| <Link id="m-updatecaret" /><code>{"private void UpdateCaret()"}</code> |  |
| <Link id="m-updateinputwithsecret" /><code>{"protected override void UpdateInputWithSecret()"}</code> |  |

## Used in

Members of other types that take, return or hold a `VirtualInputField`:

[`ServerCreator.descriptionInput`](/game-api/types/global-s/servercreator#m-descriptioninput), [`ServerCreator.nameInput`](/game-api/types/global-s/servercreator#m-nameinput).
