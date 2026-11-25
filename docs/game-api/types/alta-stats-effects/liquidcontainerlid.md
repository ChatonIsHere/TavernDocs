---
title: "LiquidContainerLid"
description: "A lid that opens and closes a container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerLid

A **class** in `Root.Township`, `Alta.Liquid`.

A lid that opens and closes a container.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainerLid()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-corkeffectorigin" /><code>{"private Transform corkEffectOrigin"}</code> |  |
| <Link id="m-corkshooteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" corkShootEffect"}</code> |  |
| <Link id="m-fakecork" /><code>{"private "}<Link to="/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" fakeCork"}</code> |  |
| <Link id="m-isclosedbydefualtifempty" /><code>{"private bool isClosedByDefualtIfEmpty"}</code> |  |
| <Link id="m-isclosedbydefualtifnotempty" /><code>{"private bool isClosedByDefualtIfNotEmpty"}</code> |  |
| <Link id="m-opened" /><code>{"private UnityEvent opened"}</code> |  |
| <Link id="m-popeffectparticles" /><code>{"private ParticleSystem[] popEffectParticles"}</code> |  |
| <Link id="m-syncopen" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncOpen"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> |  |
| <Link id="m-isoncontainer" /><code>{"bool IsOnContainer { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closelid" /><code>{"void CloseLid()"}</code> |  |
| <Link id="m-closelid-2" /><code>{"void CloseLid(bool isForced, bool isPlayingEffects = true)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-removelid" /><code>{"void RemoveLid()"}</code> |  |
| <Link id="m-removelid-2" /><code>{"void RemoveLid(bool isForced, bool isPlayingEffects = true)"}</code> |  |
| <Link id="m-addfilter" /><code>{"private void AddFilter("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data, ref bool result)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkempty" /><code>{"private IEnumerator CheckEmpty() (iterator)"}</code> |  |
| <Link id="m-internalcloselid" /><code>{"private void InternalCloseLid(bool isForced = false, bool isPlayingEffects = true)"}</code> |  |
| <Link id="m-internalremovelid" /><code>{"private void InternalRemoveLid(bool isForced = false, bool isPlayingEffects = true)"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-syncopen-2" /><code>{"private void SyncOpen("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidContainerLid`:

[`AutoContainerLid.lid`](/game-api/types/global-a-b/autocontainerlid#m-lid), [`CapPickup.lid`](/game-api/types/global-c-d/cappickup#m-lid).
