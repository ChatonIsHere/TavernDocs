---
title: "ColoredExplosive"
description: "An Explosive with one of several colours, picked at random on the server and saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredExplosive

A **class** in `Root.Township`, no namespace.

An `Explosive` with one of several colours, picked at random on the server and saved. The colour tints a marker and the explosion effect, and only same-coloured ones stack in a dock.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`Explosive`](/game-api/types/global-e-h/explosive), [`ISavable<ColoredExplosiveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ColoredExplosiveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking)
- **Derived types** [`ColoredExplosiveData`](/game-api/types/global-c-d/coloredexplosivedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredExplosive()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorcode" /><code>{"private Renderer colorCode"}</code> | Renderer tinted with the colour. |
| <Link id="m-colorindex" /><code>{"private int colorIndex"}</code> | Index into `possibleColors`. -1 until picked or loaded. |
| <Link id="m-possiblecolors" /><code>{"private Color[] possibleColors"}</code> | Colours it can be. |
| <Link id="m-synccolor" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncColor"}</code> | Message that sends the colour index. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the colour sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: picks a random colour if none was loaded, otherwise applies the loaded one. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the colour to a player who joins. |
| <Link id="m-geteffect" /><code>{"protected override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Vector3 position, Quaternion rotation)"}</code> | Gets the explosion effect and colours its `ColoredParticleSystem` to match. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | Docking check: only allows stacking with an explosive of the same colour. |
| <Link id="m-randomizecolor" /><code>{"private void RandomizeColor()"}</code> | Picks a random colour index and applies it. |
| <Link id="m-setcolor" /><code>{"private void SetColor()"}</code> | Client: tints the `colorCode` renderer's material. |
| <Link id="m-synccolor-2" /><code>{"private void SyncColor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the colour index; remote clients apply it. |

</details>
