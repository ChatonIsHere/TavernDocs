---
title: "VirtualInputFieldBase"
description: "Base for in-world text fields typed into with the virtual keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualInputFieldBase

An **abstract class** in `Root.Township`, the global namespace.

Base for in-world text fields typed into with the virtual keyboard. Shows placeholder text when empty and can mask secret input.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`OculusVirtualInputField`](/mod/game-api/types/global-m-o/oculusvirtualinputfield), [`VirtualInputField`](/mod/game-api/types/global-t-x/virtualinputfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected VirtualInputFieldBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"protected string input"}</code> | <span className="api-desc">Backing field for `Input`.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultvalue" /><code>{"private string defaultValue"}</code> | <span className="api-desc">Placeholder text shown while the input is empty.</span> |
| <Link id="m-inputcolor" /><code>{"private Color inputColor"}</code> | <span className="api-desc">Text colour for typed input.</span> |
| <Link id="m-inputrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" inputRenderer"}</code> | <span className="api-desc">The `TextRenderer` that shows the input or the placeholder.</span> |
| <Link id="m-issecret" /><code>{"private bool isSecret"}</code> | <span className="api-desc">When true, typed text is shown masked with `secretKey`.</span> |
| <Link id="m-placeholdercolor" /><code>{"private Color placeHolderColor"}</code> | <span className="api-desc">Placeholder colour when the field isn't focused.</span> |
| <Link id="m-placeholderselectedcolor" /><code>{"private Color placeHolderSelectedColor"}</code> | <span className="api-desc">Placeholder colour while the field is focused.</span> |
| <Link id="m-secretkey" /><code>{"private string secretKey"}</code> | <span className="api-desc">String shown once per character when masking secret input (default `*`).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input-2" /><code>{"string Input { get; }"}</code> | <span className="api-desc">The text typed so far.</span> |
| <Link id="m-defaultvalue-2" /><code>{"protected string DefaultValue { get; }"}</code> | <span className="api-desc">The placeholder text shown when empty.</span> |
| <Link id="m-inputrenderer-2" /><code>{"protected "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" InputRenderer { get; }"}</code> | <span className="api-desc">The text renderer that shows the field.</span> |
| <Link id="m-issecret-2" /><code>{"protected bool IsSecret { get; }"}</code> | <span className="api-desc">Whether the input is shown as mask characters, like a password.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the input and shows the placeholder again.</span> |
| <Link id="m-getfocus" /><code>{"virtual void GetFocus()"}</code> | <span className="api-desc">Changes the placeholder colour to the selected colour while empty.</span> |
| <Link id="m-lostfocus" /><code>{"virtual void LostFocus()"}</code> | <span className="api-desc">Changes the placeholder colour back while empty.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Shows the placeholder text.</span> |
| <Link id="m-displaysecret" /><code>{"protected virtual void DisplaySecret(bool isShowingSecret)"}</code> | <span className="api-desc">Redraws the text when secret display is toggled.</span> |
| <Link id="m-updateinputwithsecret" /><code>{"protected virtual void UpdateInputWithSecret()"}</code> | <span className="api-desc">Redraws the field: masked or plain input, or the placeholder when empty.</span> |
| <Link id="m-updateinputwithsecret-2" /><code>{"protected void UpdateInputWithSecret(bool isSecret)"}</code> | <span className="api-desc">Redraws the field: masked or plain input, or the placeholder when empty.</span> |
