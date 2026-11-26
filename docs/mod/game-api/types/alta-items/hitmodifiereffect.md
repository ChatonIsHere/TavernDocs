---
title: "HitModifierEffect"
description: "Plays a stat upgrade visual effect between two places (the object, the hit target or the wielder) when an ImpactModifier modifies a hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HitModifierEffect

A **class** in `Root.Township`, `Alta.Impact`.

Plays a stat upgrade visual effect between two places (the object, the hit target or the wielder) when an `ImpactModifier` modifies a hit. The server sends it to players in the chunk.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`EffectPosition`](/mod/game-api/types/alta-items/hitmodifiereffect-effectposition), [`SyncHitArguments`](/mod/game-api/types/alta-items/hitmodifiereffect-synchitarguments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HitModifierEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectcolor" /><code>{"private Color effectColor"}</code> | Colour passed to the effect. |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> | Pool definition of the `StatUpgradeEffect` to play. |
| <Link id="m-effectduration" /><code>{"private float effectDuration"}</code> | How long the effect lasts. |
| <Link id="m-localtarget" /><code>{"private Transform localTarget"}</code> | Transform used when source or target is this object. |
| <Link id="m-minimumeffectivenesstoplay" /><code>{"private float minimumEffectivenessToPlay"}</code> | Hits below this effectiveness show no effect. |
| <Link id="m-source" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-effectposition">{"HitModifierEffect.EffectPosition"}</Link>{" source"}</code> | Where the effect starts: this object, the hit target or the wielder. |
| <Link id="m-synchit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-synchitarguments">{"HitModifierEffect.SyncHitArguments"}</Link>{"> syncHit"}</code> | Synced method that carries the effect to clients. |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-effectposition">{"HitModifierEffect.EffectPosition"}</Link>{" target"}</code> | Where the effect goes: this object, the hit target or the wielder. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced method used to send the effect. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks `OnModifiedHit` on the `ImpactModifier` on this object. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playeffects" /><code>{"private void PlayEffects("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Server: on a hit effective enough, plays the effect locally if not headless and sends it to the chunk. |
| <Link id="m-synchit-2" /><code>{"private void SyncHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-synchitarguments">{"HitModifierEffect.SyncHitArguments"}</Link>{" arguments)"}</code> | Reads or writes the source and target entity IDs; on clients, finds them and plays the effect. |

</details>
