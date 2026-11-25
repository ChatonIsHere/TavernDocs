---
title: "LinearPartCloner"
description: "class LinearPartCloner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinearPartCloner

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LinearPartClonerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LinearPartClonerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LinearPartClonerData`](/game-api/types/global-i-l/linearpartclonerdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LinearPartCloner()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isoffsetrelativetolast" /><code>{"private bool isOffsetRelativeToLast"}</code> |
| <Link id="m-last" /><code>{"private Transform last"}</code> |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> |
| <Link id="m-savedata" /><code>{"private "}<Link to="/game-api/types/global-i-l/linearpartclonerdata">{"LinearPartClonerData"}</Link>{" saveData"}</code> |
| <Link id="m-spawnedcount" /><code>{"private int spawnedCount"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |
| <Link id="m-template" /><code>{"private Transform template"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-spawn" /><code>{"void Spawn(int count)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> |
| <Link id="m-synccount" /><code>{"private void SyncCount("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LinearPartCloner`:

[`LinearPartClonerPart.cloners`](/game-api/types/global-i-l/linearpartclonerpart#m-cloners).
