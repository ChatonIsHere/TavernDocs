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
| <Link id="m-ctor" /><code>{"LiquidContainerLid()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">Backing field for `Container`.</span> |
| <Link id="m-corkeffectorigin" /><code>{"private Transform corkEffectOrigin"}</code> | <span className="api-desc">Where the cork shoot effect spawns.</span> |
| <Link id="m-corkshooteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" corkShootEffect"}</code> | <span className="api-desc">Pooled effect spawned when the lid is removed with effects.</span> |
| <Link id="m-fakecork" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" fakeCork"}</code> | <span className="api-desc">Scaler that shows or hides the cork model.</span> |
| <Link id="m-isclosedbydefualtifempty" /><code>{"private bool isClosedByDefualtIfEmpty"}</code> | <span className="api-desc">If true, the lid starts on when the container spawns empty.</span> |
| <Link id="m-isclosedbydefualtifnotempty" /><code>{"private bool isClosedByDefualtIfNotEmpty"}</code> | <span className="api-desc">If true (default), the lid starts on when the container spawns with liquid.</span> |
| <Link id="m-opened" /><code>{"private UnityEvent opened"}</code> | <span className="api-desc">Unity event invoked when the lid is removed with effects.</span> |
| <Link id="m-popeffectparticles" /><code>{"private ParticleSystem[] popEffectParticles"}</code> | <span className="api-desc">Particle systems played on removal when the container isn't empty.</span> |
| <Link id="m-syncopen" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncOpen"}</code> | <span className="api-desc">Method sync for the lid state, sent to chunks and to joining players.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | <span className="api-desc">The `ILiquidContainer` in the parents that this lid covers.</span> |
| <Link id="m-isoncontainer" /><code>{"bool IsOnContainer { get; private set; }"}</code> | <span className="api-desc">True while the lid is on and the container is sealed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closelid" /><code>{"void CloseLid()"}</code> | <span className="api-desc">Server: puts the lid on. `isForced` reapplies it even if already on.</span> |
| <Link id="m-closelid-2" /><code>{"void CloseLid(bool isForced, bool isPlayingEffects = true)"}</code> | <span className="api-desc">Server: puts the lid on. `isForced` reapplies it even if already on.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `syncOpen` method sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Starts `CheckEmpty` to set the default lid state on spawn.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current lid state to a joining player without effects.</span> |
| <Link id="m-removelid" /><code>{"void RemoveLid()"}</code> | <span className="api-desc">Server: takes the lid off. `isForced` reapplies it even if already off.</span> |
| <Link id="m-removelid-2" /><code>{"void RemoveLid(bool isForced, bool isPlayingEffects = true)"}</code> | <span className="api-desc">Server: takes the lid off. `isForced` reapplies it even if already off.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfilter" /><code>{"private void AddFilter("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data, ref bool result)"}</code> | <span className="api-desc">Filter on the container's `AddFilter` that refuses liquid while the lid is on.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the parent liquid container and registers the add filter.</span> |
| <Link id="m-checkempty" /><code>{"private IEnumerator CheckEmpty() (iterator)"}</code> | <span className="api-desc">Server, one frame after spawn: closes or removes the lid without effects, based on whether the container is empty.</span> |
| <Link id="m-internalcloselid" /><code>{"private void InternalCloseLid(bool isForced = false, bool isPlayingEffects = true)"}</code> | <span className="api-desc">Shows the cork, blocks removing liquid, and on the server sends the new state to the chunk.</span> |
| <Link id="m-internalremovelid" /><code>{"private void InternalRemoveLid(bool isForced = false, bool isPlayingEffects = true)"}</code> | <span className="api-desc">Hides the cork, allows removing liquid, plays the opened event and pop effects (not headless), and syncs on the server.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that removes null entries from `popEffectParticles`.</span> |
| <Link id="m-syncopen-2" /><code>{"private void SyncOpen("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> | <span className="api-desc">Serializes the lid state; clients apply it on read.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainerLid`:

<div className="api-used-in">

[`AutoContainerLid.lid`](/mod/game-api/types/global-a-b/autocontainerlid#m-lid), [`CapPickup.lid`](/mod/game-api/types/global-c-d/cappickup#m-lid).

</div>
