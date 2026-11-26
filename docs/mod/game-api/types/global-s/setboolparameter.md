---
title: "SetBoolParameter"
description: "Sets one bool parameter on an animator, for wiring to events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetBoolParameter

A **class** in `Root.Township`, the global namespace.

Sets one bool parameter on an animator, for wiring to events.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetBoolParameter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">The animator to change.</span> |
| <Link id="m-parameterid" /><code>{"private int parameterId"}</code> | <span className="api-desc">Hash ID of the bool parameter.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setinverseparameter" /><code>{"void SetInverseParameter(bool value)"}</code> | <span className="api-desc">Sets the parameter to the opposite of the value.</span> |
| <Link id="m-setparameter" /><code>{"void SetParameter(bool value)"}</code> | <span className="api-desc">Sets the parameter to the value.</span> |
