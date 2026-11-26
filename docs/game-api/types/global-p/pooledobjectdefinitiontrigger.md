---
title: "PooledObjectDefinitionTrigger"
description: "Client: shows a pooled effect on this object while it is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinitionTrigger

A **class** in `Root.Township`, no namespace.

Client: shows a pooled effect on this object while it is enabled. Does nothing on a headless server.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledObjectDefinitionTrigger()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeEffect"}</code> | The effect currently shown. |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | The pooled effect to show. |
| <Link id="m-hasbeendestroyed" /><code>{"private bool hasBeenDestroyed"}</code> | Set in `OnDestroy`. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Marks the component destroyed so the delayed release is skipped. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Releases the effect a frame later, unless the object was destroyed. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Gets a pooled effect from `definition` under this transform. |

</details>
