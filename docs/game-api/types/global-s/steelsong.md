---
title: "SteelSong"
description: "class SteelSong in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSong

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`SteelSong.Create`](/game-api/types/global-s/steelsong-create)
- **Nested types** [`Create`](/game-api/types/global-s/steelsong-create), [`IdentifiedModel`](/game-api/types/global-s/steelsong-identifiedmodel), [`MessageType`](/game-api/types/global-s/steelsong-messagetype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteelSong()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activedamagemultiplierperhit" /><code>{"private float[] activeDamageMultiplierPerHit"}</code> |  |
| <Link id="m-activedetectors" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{", "}<Link to="/game-api/types/global-s/steelsong-identifiedmodel">{"SteelSong.IdentifiedModel"}</Link>{"> activeDetectors"}</code> |  |
| <Link id="m-activeeffects" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{", "}<Link to="/game-api/types/global-s/steelsongeffect">{"SteelSongEffect"}</Link>{"> activeEffects"}</code> |  |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |  |
| <Link id="m-badhiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" badHitEffect"}</code> |  |
| <Link id="m-detectorhitcount" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{", int> detectorHitCount"}</code> |  |
| <Link id="m-detectormap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> detectorMap"}</code> |  |
| <Link id="m-dissipatedeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" dissipatedEffect"}</code> |  |
| <Link id="m-goodhiteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" goodHitEffect"}</code> |  |
| <Link id="m-hitcount" /><code>{"private int hitCount"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-levelscount" /><code>{"private int levelsCount"}</code> |  |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/game-api/types/global-s/steelsong-messagetype">{"SteelSong.MessageType"}</Link>{" messageType"}</code> |  |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> |  |
| <Link id="m-precisionleeway" /><code>{"private float precisionLeeway"}</code> |  |
| <Link id="m-pulseeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pulseEffect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-sendserializedmessage" /><code>{"override void SendSerializedMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-checkhitcount" /><code>{"private void CheckHitCount("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-checkhitdamage" /><code>{"private void CheckHitDamage("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-maxhitcountsoundeffect" /><code>{"private void MaxHitCountSoundEffect("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-releaseimpactoreffect" /><code>{"private void ReleaseImpactorEffect("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-releaseimpactoreffect-2" /><code>{"private void ReleaseImpactorEffect("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector)"}</code> |  |
| <Link id="m-sendstatustolocalplayer" /><code>{"private void SendStatusToLocalPlayer("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, bool isActive)"}</code> |  |
| <Link id="m-setupforentity" /><code>{"private void SetupForEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isActive, "}<Link to="/game-api/types/global-s/steelsong-messagetype">{"SteelSong.MessageType"}</Link>{" messageType)"}</code> |  |
