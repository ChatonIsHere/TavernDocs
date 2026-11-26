---
title: "ColoredExplosive"
description: "An Explosive with one of several colours, picked at random on the server and saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredExplosive

A **class** in `Root.Township`, the global namespace.

An `Explosive` with one of several colours, picked at random on the server and saved. The colour tints a marker and the explosion effect, and only same-coloured ones stack in a dock.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`Explosive`](/mod/game-api/types/global-e-h/explosive), [`ISavable<ColoredExplosiveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ColoredExplosiveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IInterfereWithDocking`](/mod/game-api/types/alta-items/iinterferewithdocking)
- **Derived types** [`ColoredExplosiveData`](/mod/game-api/types/global-c-d/coloredexplosivedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredExplosive()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colorcode" /><code>{"private Renderer colorCode"}</code> | <span className="api-desc">Renderer tinted with the colour.</span> |
| <Link id="m-colorindex" /><code>{"private int colorIndex"}</code> | <span className="api-desc">Index into `possibleColors`. -1 until picked or loaded.</span> |
| <Link id="m-possiblecolors" /><code>{"private Color[] possibleColors"}</code> | <span className="api-desc">Colours it can be.</span> |
| <Link id="m-synccolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncColor"}</code> | <span className="api-desc">Message that sends the colour index.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the colour sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: picks a random colour if none was loaded, otherwise applies the loaded one.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the colour to a player who joins.</span> |
| <Link id="m-geteffect" /><code>{"protected override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Gets the explosion effect and colours its `ColoredParticleSystem` to match.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/mod/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | <span className="api-desc">Docking check: only allows stacking with an explosive of the same colour.</span> |
| <Link id="m-randomizecolor" /><code>{"private void RandomizeColor()"}</code> | <span className="api-desc">Picks a random colour index and applies it.</span> |
| <Link id="m-setcolor" /><code>{"private void SetColor()"}</code> | <span className="api-desc">Client: tints the `colorCode` renderer's material.</span> |
| <Link id="m-synccolor-2" /><code>{"private void SyncColor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the colour index; remote clients apply it.</span> |

</details>
