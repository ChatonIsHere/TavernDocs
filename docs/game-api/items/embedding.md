---
title: Embedding
description: Embeddable, which lets arrows, blades and other pointed items stick into what they hit. The server decides.
sidebar_position: 10
---

# Embedding

`Embeddable` in `Root.Township` (no namespace). A `NetworkEntityBehaviour`, and an `IToolHitDependant` of the item's `ImpactTool`. The server decides when an item embeds; clients follow the `FixedJoint` entity message.

Arrows, thrown knives and similar items stick into what they hit. `Embeddable` checks the hit and, if it's good enough, parents the item to what it struck.

Get it with `GetComponent<Embeddable>()` on the item.

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `bool IsEmbedded { get; }` | Whether it's stuck in something. | |
| `Rigidbody EmbeddedInto { get; }` | The rigidbody it's stuck in, or null when stuck in the static world. | |
| `NetworkEntity EmbeddedEntity { get; }` | The entity it's stuck in. | |
| `int EmbeddedRigidbodyIndex { get; }` | Which of that entity's rigidbodies, for creatures with an `EmbeddableManager`; -1 otherwise. | |
| `bool IsAllowedToEmbed { get; set; }` | Turns embedding on or off for this item. | |
| `bool HasPickup { get; }` | Whether the entity has a `Pickup`. | |
| `event Action<Embeddable> Embedded` / `Unembedded` | It stuck, or came free. | Both sides. |
| `event RefBoolDelegate CheckEmbed` | Lets you refuse an embed: set the `ref bool` to false. | Pickups add a check that refuses while held or docked. |
| `void UnEmbed()` | Frees it. | Syncs only when called on the server. |
| `void ExternalCollision(Collider, Vector3 hitPoint, Vector3 hitNormal)` | Lets other code report a collision it should try to embed from. | |

## When it embeds

The server tries to embed when the tool reports a hit (`IToolHitDependant.OnHit`) or a plain collision that wasn't a hit (`OnCollided` with `isHitting` false, for example an arrow in flight). It needs all of:

- not already embedded, `IsAllowedToEmbed` on, and every `CheckEmbed` handler agreeing;
- enough relative speed;
- a surface whose `SurfaceDefinition.EmbedMultiplier` isn't 0 and, if the surface asks for it, a hit angle close enough to the tip's direction (a bad angle slows the item instead);
- if `EmbeddableGlobalSettings` restricts it, a struck pickup carrying the allowed tag;
- the hit's effectiveness times the surface multiplier above the item's minimum.

Grabbing an embedded item frees it. So does the struck entity being destroyed, or the struck player leaving.

An embedded item stays parented to what it struck and is saved that way, so arrows stay in a creature or a wall across restarts.

## Asset values

Asset values (build main-1.7.2.1.42203):

- `EmbeddableGlobalSettings`: `isRestrictingPickupsByTag` on, `validPickupsToEmbedInto` = the `Embeddable Surface` tag. So an arrow only sticks into a pickup that carries that tag; terrain, buildings and creatures (no pickup) aren't restricted by it.
- The `Arrow` prefab: `minHitEffectivenessToWedge` 0.8, `minSquaredWedgingVelocity` 200 (about 14 m/s), `maxEmbedAngle` 0.2. Its `ImpactTool` ignores the speed check, its material is Oak and it uses `1 - Very Weak Durability`.

## Hooking it

- `CheckEmbed` is the cleanest hook: subscribe on the server and set the value to false to stop an item sticking.
- `IsAllowedToEmbed = false` on the server turns it off for one item.
- The embed itself is a private method (`Embed`), server side. Clients apply embeds and releases in the private `SyncEmbed` handler, not through `UnEmbed`, so use the `Embedded` and `Unembedded` events to watch both sides.

## See also

- [Impacts and hit detection](impacts.md)
- [Pickup](pickup.md)
