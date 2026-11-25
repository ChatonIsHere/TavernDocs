---
title: "VirtualInputFieldBase"
description: "abstract class VirtualInputFieldBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualInputFieldBase

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`OculusVirtualInputField`](/game-api/types/global-m-o/oculusvirtualinputfield), [`VirtualInputField`](/game-api/types/global-t-x/virtualinputfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected VirtualInputFieldBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultvalue" /><code>{"private string defaultValue"}</code> |  |
| <Link id="m-input" /><code>{"protected string input"}</code> |  |
| <Link id="m-inputcolor" /><code>{"private Color inputColor"}</code> |  |
| <Link id="m-inputrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" inputRenderer"}</code> |  |
| <Link id="m-issecret" /><code>{"private bool isSecret"}</code> |  |
| <Link id="m-placeholdercolor" /><code>{"private Color placeHolderColor"}</code> |  |
| <Link id="m-placeholderselectedcolor" /><code>{"private Color placeHolderSelectedColor"}</code> |  |
| <Link id="m-secretkey" /><code>{"private string secretKey"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input-2" /><code>{"string Input { get; }"}</code> |  |
| <Link id="m-defaultvalue-2" /><code>{"protected string DefaultValue { get; }"}</code> |  |
| <Link id="m-inputrenderer-2" /><code>{"protected "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" InputRenderer { get; }"}</code> |  |
| <Link id="m-issecret-2" /><code>{"protected bool IsSecret { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-getfocus" /><code>{"virtual void GetFocus()"}</code> |  |
| <Link id="m-lostfocus" /><code>{"virtual void LostFocus()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-displaysecret" /><code>{"protected virtual void DisplaySecret(bool isShowingSecret)"}</code> |  |
| <Link id="m-updateinputwithsecret" /><code>{"protected virtual void UpdateInputWithSecret()"}</code> |  |
| <Link id="m-updateinputwithsecret-2" /><code>{"protected void UpdateInputWithSecret(bool isSecret)"}</code> |  |
