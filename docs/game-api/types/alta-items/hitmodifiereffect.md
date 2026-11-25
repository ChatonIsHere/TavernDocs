---
title: "HitModifierEffect"
description: "class HitModifierEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitModifierEffect

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`EffectPosition`](/game-api/types/alta-items/hitmodifiereffect-effectposition), [`SyncHitArguments`](/game-api/types/alta-items/hitmodifiereffect-synchitarguments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitModifierEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effectcolor" /><code>{"private Color effectColor"}</code> |  |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> |  |
| <Link id="m-effectduration" /><code>{"private float effectDuration"}</code> |  |
| <Link id="m-localtarget" /><code>{"private Transform localTarget"}</code> |  |
| <Link id="m-minimumeffectivenesstoplay" /><code>{"private float minimumEffectivenessToPlay"}</code> |  |
| <Link id="m-source" /><code>{"private "}<Link to="/game-api/types/alta-items/hitmodifiereffect-effectposition">{"HitModifierEffect.EffectPosition"}</Link>{" source"}</code> |  |
| <Link id="m-synchit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/hitmodifiereffect-synchitarguments">{"HitModifierEffect.SyncHitArguments"}</Link>{"> syncHit"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-items/hitmodifiereffect-effectposition">{"HitModifierEffect.EffectPosition"}</Link>{" target"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-playeffects" /><code>{"private void PlayEffects("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |  |
| <Link id="m-synchit-2" /><code>{"private void SyncHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/hitmodifiereffect-synchitarguments">{"HitModifierEffect.SyncHitArguments"}</Link>{" arguments)"}</code> |  |
