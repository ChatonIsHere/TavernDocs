---
title: "PooledObjectDefinitionTrigger"
description: "Client: shows a pooled effect on this object while it is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinitionTrigger

A **class** in `Root.Township`, the global namespace.

Client: shows a pooled effect on this object while it is enabled. Does nothing on a headless server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectDefinitionTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeEffect"}</code> | <span className="api-desc">The effect currently shown.</span> |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The pooled effect to show.</span> |
| <Link id="m-hasbeendestroyed" /><code>{"private bool hasBeenDestroyed"}</code> | <span className="api-desc">Set in `OnDestroy`.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Marks the component destroyed so the delayed release is skipped.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Releases the effect a frame later, unless the object was destroyed.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Gets a pooled effect from `definition` under this transform.</span> |

</details>
