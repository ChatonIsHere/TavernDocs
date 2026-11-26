---
title: "LinearPartCloner"
description: "Networked, saved part that clones its last copy in a row with a fixed offset and rotation, up to a count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinearPartCloner

A **class** in `Root.Township`, the global namespace.

Networked, saved part that clones its last copy in a row with a fixed offset and rotation, up to a count. The server syncs the count to clients.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LinearPartClonerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LinearPartClonerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LinearPartClonerData`](/mod/game-api/types/global-i-l/linearpartclonerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinearPartCloner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isoffsetrelativetolast" /><code>{"private bool isOffsetRelativeToLast"}</code> | <span className="api-desc">When true the offset is in the last copy's local space, otherwise added to its local position.</span> |
| <Link id="m-last" /><code>{"private Transform last"}</code> | <span className="api-desc">The latest copy, cloned for the next one. Nothing in this file sets it first, so `template` looks unused.</span> |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | <span className="api-desc">Position offset from one copy to the next.</span> |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> | <span className="api-desc">Extra rotation (Euler) for each copy.</span> |
| <Link id="m-savedata" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/linearpartclonerdata">{"LinearPartClonerData"}</Link>{" saveData"}</code> | <span className="api-desc">Saved data holding the count.</span> |
| <Link id="m-spawnedcount" /><code>{"private int spawnedCount"}</code> | <span className="api-desc">How many parts exist, counting the original.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the count (`SyncCount`).</span> |
| <Link id="m-template" /><code>{"private Transform template"}</code> | <span className="api-desc">Not read in this file.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the count sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current count to a joining player.</span> |
| <Link id="m-spawn" /><code>{"void Spawn(int count)"}</code> | <span className="api-desc">Sets the count and clones copies until it is reached. Server: also sends the count to clients. Copies are hidden and not saved.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: respawns copies on a prefab instance when the count changed.</span> |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> | <span className="api-desc">Editor context menu: respawns copies on a prefab instance.</span> |
| <Link id="m-synccount" /><code>{"private void SyncCount("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the count (1 to 255) or, on a client, reads it and spawns copies.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LinearPartCloner`:

<div className="api-used-in">

[`LinearPartClonerPart.cloners`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-cloners).

</div>
