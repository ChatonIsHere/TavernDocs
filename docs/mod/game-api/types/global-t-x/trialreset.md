---
title: "TrialReset"
description: "An ITrialReset that invokes a Unity event when its trial resets, and once when it is first set up on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrialReset

A **class** in `Root.Township`, the global namespace.

An `ITrialReset` that invokes a Unity event when its trial resets, and once when it is first set up on the server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ITrialReset`](/mod/game-api/types/global-i-l/itrialreset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrialReset()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"private UnityEvent reset"}</code> | <span className="api-desc">Unity event fired on each trial reset.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: invokes the reset event once at startup.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-trialreset" /><code>{"private void ITrialReset.TrialReset()"}</code> | <span className="api-desc">Invokes the `reset` event. Called by `TrialLogic.ResetState`.</span> |

</details>
