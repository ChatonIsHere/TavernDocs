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
| <Link id="m-ctor" /><code>{"HitModifierEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectcolor" /><code>{"private Color effectColor"}</code> | <span className="api-desc">Colour passed to the effect.</span> |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> | <span className="api-desc">Pool definition of the `StatUpgradeEffect` to play.</span> |
| <Link id="m-effectduration" /><code>{"private float effectDuration"}</code> | <span className="api-desc">How long the effect lasts.</span> |
| <Link id="m-localtarget" /><code>{"private Transform localTarget"}</code> | <span className="api-desc">Transform used when source or target is this object.</span> |
| <Link id="m-minimumeffectivenesstoplay" /><code>{"private float minimumEffectivenessToPlay"}</code> | <span className="api-desc">Hits below this effectiveness show no effect.</span> |
| <Link id="m-source" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-effectposition">{"HitModifierEffect.EffectPosition"}</Link>{" source"}</code> | <span className="api-desc">Where the effect starts: this object, the hit target or the wielder.</span> |
| <Link id="m-synchit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-synchitarguments">{"HitModifierEffect.SyncHitArguments"}</Link>{"> syncHit"}</code> | <span className="api-desc">Synced method that carries the effect to clients.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-effectposition">{"HitModifierEffect.EffectPosition"}</Link>{" target"}</code> | <span className="api-desc">Where the effect goes: this object, the hit target or the wielder.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced method used to send the effect.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks `OnModifiedHit` on the `ImpactModifier` on this object.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playeffects" /><code>{"private void PlayEffects("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Server: on a hit effective enough, plays the effect locally if not headless and sends it to the chunk.</span> |
| <Link id="m-synchit-2" /><code>{"private void SyncHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/hitmodifiereffect-synchitarguments">{"HitModifierEffect.SyncHitArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Reads or writes the source and target entity IDs; on clients, finds them and plays the effect.</span> |

</details>
