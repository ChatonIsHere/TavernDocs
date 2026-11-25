---
title: "VirtualInputFieldBase"
description: "Base for in-world text fields typed into with the virtual keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualInputFieldBase

An **abstract class** in `Root.Township`, no namespace.

Base for in-world text fields typed into with the virtual keyboard. Shows placeholder text when empty and can mask secret input.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`OculusVirtualInputField`](/game-api/types/global-m-o/oculusvirtualinputfield), [`VirtualInputField`](/game-api/types/global-t-x/virtualinputfield)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected VirtualInputFieldBase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"protected string input"}</code> | Backing field for `Input`. |

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-defaultvalue" /><code>{"private string defaultValue"}</code> |
| <Link id="m-inputcolor" /><code>{"private Color inputColor"}</code> |
| <Link id="m-inputrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" inputRenderer"}</code> |
| <Link id="m-issecret" /><code>{"private bool isSecret"}</code> |
| <Link id="m-placeholdercolor" /><code>{"private Color placeHolderColor"}</code> |
| <Link id="m-placeholderselectedcolor" /><code>{"private Color placeHolderSelectedColor"}</code> |
| <Link id="m-secretkey" /><code>{"private string secretKey"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input-2" /><code>{"string Input { get; }"}</code> | The text typed so far. |
| <Link id="m-defaultvalue-2" /><code>{"protected string DefaultValue { get; }"}</code> | The placeholder text shown when empty. |
| <Link id="m-inputrenderer-2" /><code>{"protected "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" InputRenderer { get; }"}</code> | The text renderer that shows the field. |
| <Link id="m-issecret-2" /><code>{"protected bool IsSecret { get; }"}</code> | Whether the input is shown as mask characters, like a password. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the input and shows the placeholder again. |
| <Link id="m-getfocus" /><code>{"virtual void GetFocus()"}</code> | Changes the placeholder colour to the selected colour while empty. |
| <Link id="m-lostfocus" /><code>{"virtual void LostFocus()"}</code> | Changes the placeholder colour back while empty. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Shows the placeholder text. |
| <Link id="m-displaysecret" /><code>{"protected virtual void DisplaySecret(bool isShowingSecret)"}</code> | Redraws the text when secret display is toggled. |
| <Link id="m-updateinputwithsecret" /><code>{"protected virtual void UpdateInputWithSecret()"}</code> | Redraws the field: masked or plain input, or the placeholder when empty. |
| <Link id="m-updateinputwithsecret-2" /><code>{"protected void UpdateInputWithSecret(bool isSecret)"}</code> | Redraws the field: masked or plain input, or the placeholder when empty. |
