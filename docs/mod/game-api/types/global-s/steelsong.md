---
title: "SteelSong"
description: "Smithing skill: hitting a glowing forged item in rhythm with a pulse effect builds a hit streak that multiplies later hit damage on that item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSong

A **class** in `Root.Township`, the global namespace.

Smithing skill: hitting a glowing forged item in rhythm with a pulse effect builds a hit streak that multiplies later hit damage on that item. The local player times the hits and the server applies the multiplier.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`SteelSong.Create`](/mod/game-api/types/global-s/steelsong-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/steelsong-create), [`IdentifiedModel`](/mod/game-api/types/global-s/steelsong-identifiedmodel), [`MessageType`](/mod/game-api/types/global-s/steelsong-messagetype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteelSong()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activedamagemultiplierperhit" /><code>{"private float[] activeDamageMultiplierPerHit"}</code> | Damage multiplier for each streak level, from 1.05 up to 1.5 by default. |
| <Link id="m-activedetectors" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{", "}<Link to="/mod/game-api/types/global-s/steelsong-identifiedmodel">{"SteelSong.IdentifiedModel"}</Link>{"> activeDetectors"}</code> | Client: the forged model being tracked for each impact detector. |
| <Link id="m-activeeffects" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{", "}<Link to="/mod/game-api/types/global-s/steelsongeffect">{"SteelSongEffect"}</Link>{"> activeEffects"}</code> | Client: the pulse effect playing on each impact detector. |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Length of one pulse in seconds. |
| <Link id="m-badhiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" badHitEffect"}</code> | Effect played on a mistimed hit. |
| <Link id="m-detectorhitcount" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{", int> detectorHitCount"}</code> | Current streak per impact detector, used for the damage multiplier. |
| <Link id="m-detectormap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> detectorMap"}</code> | Maps held item entity ids to their impact detectors. |
| <Link id="m-dissipatedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" dissipatedEffect"}</code> | Effect played when the pulse ends. |
| <Link id="m-goodhiteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" goodHitEffect"}</code> | Effect played on a well timed hit. |
| <Link id="m-hitcount" /><code>{"private int hitCount"}</code> | Streak count sent in the next message. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the skill is active, sent in the next message. |
| <Link id="m-levelscount" /><code>{"private int levelsCount"}</code> | Number of streak levels; matches the multiplier array. |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/steelsong-messagetype">{"SteelSong.MessageType"}</Link>{" messageType"}</code> | Who the next message is for: the local player, other players or the server. |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> | Hits at or below this effectiveness are ignored. |
| <Link id="m-precisionleeway" /><code>{"private float precisionLeeway"}</code> | How close to the end of the pulse (seconds left) a hit must land to count. |
| <Link id="m-pulseeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pulseEffect"}</code> | Pooled `SteelSongEffect` that shows the rhythm. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Stops tracking the held item and tells the player the skill is off. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Starts tracking the held item's impact detector and tells the local player the skill is on. |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes the item id, hit count and message kind. The server stores counts from clients and runs the skill at the top level. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the item has a forged point under 95% progress. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Sets `levelsCount` to the length of `activeDamageMultiplierPerHit`. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkhitcount" /><code>{"private void CheckHitCount("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Client: on the local player's tool hit, a well timed hit raises the streak and a mistimed one resets it, then reports the count to the server. |
| <Link id="m-checkhitdamage" /><code>{"private void CheckHitDamage("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Multiplies a hit's damage by the entry in `activeDamageMultiplierPerHit` for the item's current streak. |
| <Link id="m-maxhitcountsoundeffect" /><code>{"private void MaxHitCountSoundEffect("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Plays the good hit effect for other players watching an active streak. |
| <Link id="m-releaseimpactoreffect" /><code>{"private void ReleaseImpactorEffect("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Ends a pulse effect: plays the dissipate effect, releases it and, on the server, stores the hit count. |
| <Link id="m-releaseimpactoreffect-2" /><code>{"private void ReleaseImpactorEffect("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> | Ends a pulse effect: plays the dissipate effect, releases it and, on the server, stores the hit count. |
| <Link id="m-sendstatustolocalplayer" /><code>{"private void SendStatusToLocalPlayer("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, bool isActive)"}</code> | Server: tells the holding player (and others, when turning off) whether the skill is active. |
| <Link id="m-setupforentity" /><code>{"private void SetupForEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isActive, "}<Link to="/mod/game-api/types/global-s/steelsong-messagetype">{"SteelSong.MessageType"}</Link>{" messageType)"}</code> | Client: hooks the hit handlers on the item's forged model, timing for the holder and sound only for others. |

</details>
