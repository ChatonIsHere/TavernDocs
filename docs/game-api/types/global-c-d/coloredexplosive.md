---
title: "ColoredExplosive"
description: "class ColoredExplosive in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredExplosive

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`Explosive`](/game-api/types/global-e-h/explosive), [`ISavable<ColoredExplosiveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ColoredExplosiveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking)
- **Derived types** [`ColoredExplosiveData`](/game-api/types/global-c-d/coloredexplosivedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ColoredExplosive()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-colorcode" /><code>{"private Renderer colorCode"}</code> |
| <Link id="m-colorindex" /><code>{"private int colorIndex"}</code> |
| <Link id="m-possiblecolors" /><code>{"private Color[] possibleColors"}</code> |
| <Link id="m-synccolor" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncColor"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-geteffect" /><code>{"protected override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Vector3 position, Quaternion rotation)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> |
| <Link id="m-randomizecolor" /><code>{"private void RandomizeColor()"}</code> |
| <Link id="m-setcolor" /><code>{"private void SetColor()"}</code> |
| <Link id="m-synccolor-2" /><code>{"private void SyncColor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
