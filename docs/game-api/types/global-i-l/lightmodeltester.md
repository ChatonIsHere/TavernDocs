---
title: "LightModelTester"
description: "Dev tool that swaps the deferred shading shader for a debug one while enabled and sets the global _MinimumDot shader value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightModelTester

A **class** in `Root.Township`, no namespace.

Dev tool that swaps the deferred shading shader for a debug one while enabled and sets the global `_MinimumDot` shader value. Shift and M toggles it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LightModelTester()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debugshader" /><code>{"private Shader debugShader"}</code> | Deferred shader used while enabled. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" handler"}</code> | Handle for the M key registration. |
| <Link id="m-ismodifinglight" /><code>{"private bool isModifingLight"}</code> | Whether `_MinimumDot` gets `value` or 0. |
| <Link id="m-releaseshader" /><code>{"private Shader releaseShader"}</code> | Deferred shader put back on disable. |
| <Link id="m-value" /><code>{"private float value"}</code> | Value for `_MinimumDot`, from 0.001 to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalues" /><code>{"void UpdateValues(float dotValue)"}</code> | Sets `_MinimumDot` to `value`, or 0 when not applied. Overloads first set the value or the on and off flag. |
| <Link id="m-updatevalues-2" /><code>{"void UpdateValues(bool isModifingLight)"}</code> | Sets `_MinimumDot` to `value`, or 0 when not applied. Overloads first set the value or the on and off flag. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkkey" /><code>{"private void CheckKey(Key key)"}</code> | On M with left shift held, toggles whether `_MinimumDot` is applied. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Puts back the release deferred shader and removes the key handler. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Uses the debug deferred shader and listens for the M key. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Reapplies the values when edited while enabled. |
| <Link id="m-updatevalues-3" /><code>{"private void UpdateValues()"}</code> | Sets `_MinimumDot` to `value`, or 0 when not applied. Overloads first set the value or the on and off flag. |

</details>
