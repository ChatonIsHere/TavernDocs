---
title: "LightModelTester"
description: "Dev tool that swaps the deferred shading shader for a debug one while enabled and sets the global _MinimumDot shader value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightModelTester

A **class** in `Root.Township`, the global namespace.

Dev tool that swaps the deferred shading shader for a debug one while enabled and sets the global `_MinimumDot` shader value. Shift and M toggles it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightModelTester()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debugshader" /><code>{"private Shader debugShader"}</code> | <span className="api-desc">Deferred shader used while enabled.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" handler"}</code> | <span className="api-desc">Handle for the M key registration.</span> |
| <Link id="m-ismodifinglight" /><code>{"private bool isModifingLight"}</code> | <span className="api-desc">Whether `_MinimumDot` gets `value` or 0.</span> |
| <Link id="m-releaseshader" /><code>{"private Shader releaseShader"}</code> | <span className="api-desc">Deferred shader put back on disable.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Value for `_MinimumDot`, from 0.001 to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalues" /><code>{"void UpdateValues(float dotValue)"}</code> | <span className="api-desc">Sets `_MinimumDot` to `value`, or 0 when not applied. Overloads first set the value or the on and off flag.</span> |
| <Link id="m-updatevalues-2" /><code>{"void UpdateValues(bool isModifingLight)"}</code> | <span className="api-desc">Sets `_MinimumDot` to `value`, or 0 when not applied. Overloads first set the value or the on and off flag.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkkey" /><code>{"private void CheckKey(Key key)"}</code> | <span className="api-desc">On M with left shift held, toggles whether `_MinimumDot` is applied.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Puts back the release deferred shader and removes the key handler.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Uses the debug deferred shader and listens for the M key.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Reapplies the values when edited while enabled.</span> |
| <Link id="m-updatevalues-3" /><code>{"private void UpdateValues()"}</code> | <span className="api-desc">Sets `_MinimumDot` to `value`, or 0 when not applied. Overloads first set the value or the on and off flag.</span> |

</details>
