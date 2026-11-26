---
title: "LiquidContainerLid"
description: "A cork or lid on a liquid container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerLid

A **class** in `Root.Township`, `Alta.Liquid`.

A cork or lid on a liquid container. While on, liquid can't be added or poured out. The server decides open or closed and syncs it to clients, who play the pop effects.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainerLid()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | Backing field for `Container`. |
| <Link id="m-corkeffectorigin" /><code>{"private Transform corkEffectOrigin"}</code> | Where the cork shoot effect spawns. |
| <Link id="m-corkshooteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" corkShootEffect"}</code> | Pooled effect spawned when the lid is removed with effects. |
| <Link id="m-fakecork" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" fakeCork"}</code> | Scaler that shows or hides the cork model. |
| <Link id="m-isclosedbydefualtifempty" /><code>{"private bool isClosedByDefualtIfEmpty"}</code> | If true, the lid starts on when the container spawns empty. |
| <Link id="m-isclosedbydefualtifnotempty" /><code>{"private bool isClosedByDefualtIfNotEmpty"}</code> | If true (default), the lid starts on when the container spawns with liquid. |
| <Link id="m-opened" /><code>{"private UnityEvent opened"}</code> | Unity event invoked when the lid is removed with effects. |
| <Link id="m-popeffectparticles" /><code>{"private ParticleSystem[] popEffectParticles"}</code> | Particle systems played on removal when the container isn't empty. |
| <Link id="m-syncopen" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncOpen"}</code> | Method sync for the lid state, sent to chunks and to joining players. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | The `ILiquidContainer` in the parents that this lid covers. |
| <Link id="m-isoncontainer" /><code>{"bool IsOnContainer { get; private set; }"}</code> | True while the lid is on and the container is sealed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closelid" /><code>{"void CloseLid()"}</code> | Server: puts the lid on. `isForced` reapplies it even if already on. |
| <Link id="m-closelid-2" /><code>{"void CloseLid(bool isForced, bool isPlayingEffects = true)"}</code> | Server: puts the lid on. `isForced` reapplies it even if already on. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncOpen` method sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Starts `CheckEmpty` to set the default lid state on spawn. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current lid state to a joining player without effects. |
| <Link id="m-removelid" /><code>{"void RemoveLid()"}</code> | Server: takes the lid off. `isForced` reapplies it even if already off. |
| <Link id="m-removelid-2" /><code>{"void RemoveLid(bool isForced, bool isPlayingEffects = true)"}</code> | Server: takes the lid off. `isForced` reapplies it even if already off. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"private void AddFilter("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data, ref bool result)"}</code> | Filter on the container's `AddFilter` that refuses liquid while the lid is on. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the parent liquid container and registers the add filter. |
| <Link id="m-checkempty" /><code>{"private IEnumerator CheckEmpty() (iterator)"}</code> | Server, one frame after spawn: closes or removes the lid without effects, based on whether the container is empty. |
| <Link id="m-internalcloselid" /><code>{"private void InternalCloseLid(bool isForced = false, bool isPlayingEffects = true)"}</code> | Shows the cork, blocks removing liquid, and on the server sends the new state to the chunk. |
| <Link id="m-internalremovelid" /><code>{"private void InternalRemoveLid(bool isForced = false, bool isPlayingEffects = true)"}</code> | Hides the cork, allows removing liquid, plays the opened event and pop effects (not headless), and syncs on the server. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that removes null entries from `popEffectParticles`. |
| <Link id="m-syncopen-2" /><code>{"private void SyncOpen("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> | Serializes the lid state; clients apply it on read. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainerLid`:

[`AutoContainerLid.lid`](/mod/game-api/types/global-a-b/autocontainerlid#m-lid), [`CapPickup.lid`](/mod/game-api/types/global-c-d/cappickup#m-lid).
