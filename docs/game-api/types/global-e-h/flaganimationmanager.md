---
title: "FlagAnimationManager"
description: "class FlagAnimationManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlagAnimationManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`status`](/game-api/types/global-e-h/flaganimationmanager-status)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FlagAnimationManager()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-active" /><code>{"private bool active"}</code> |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> |
| <Link id="m-indextoboolarray" /><code>{"private bool[] indexToBoolArray"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-statechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" stateChanged"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-setstate" /><code>{"void SetState(int index)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-setflagstate" /><code>{"private void SetFlagState(bool state)"}</code> |

</details>
