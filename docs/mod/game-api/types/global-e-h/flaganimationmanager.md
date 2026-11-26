---
title: "FlagAnimationManager"
description: "Raises or lowers a flag by setting the animator's Active bool from an index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlagAnimationManager

A **class** in `Root.Township`, the global namespace.

Raises or lowers a flag by setting the animator's `Active` bool from an index. Network entity behaviour, but the state is not synced or saved here.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`status`](/mod/game-api/types/global-e-h/flaganimationmanager-status)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlagAnimationManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private bool active"}</code> | <span className="api-desc">Last state set.</span> |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Flag animator.</span> |
| <Link id="m-indextoboolarray" /><code>{"private bool[] indexToBoolArray"}</code> | <span className="api-desc">Maps an input index to up (true) or down (false).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-statechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" stateChanged"}</code> | <span className="api-desc">Bool event field. Not invoked in this code.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Only calls the base method.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Only calls the base method.</span> |
| <Link id="m-setstate" /><code>{"void SetState(int index)"}</code> | <span className="api-desc">Looks up the index in `indexToBoolArray` and applies it. Logs an error if out of range.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setflagstate" /><code>{"private void SetFlagState(bool state)"}</code> | <span className="api-desc">Sets the animator's `Active` bool.</span> |

</details>
