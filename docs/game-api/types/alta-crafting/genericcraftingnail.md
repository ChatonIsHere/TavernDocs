---
title: "GenericCraftingNail"
description: "One nail on a generic crafting piece that players hammer in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingNail

A **class** in `Root.Township`, `Alta.Crafting`.

One nail on a generic crafting piece that players hammer in. Hits from its impact detector go to the piece, which decides the progress and damage; the server's state is synced through the station.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Attributes** `SelectionBase`
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingNail()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-afterdonedisabletimer" /><code>{"private float afterDoneDisableTimer"}</code> |  |
| <Link id="m-deviance" /><code>{"private Quaternion deviance"}</code> |  |
| <Link id="m-disablecollider" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" disableCollider"}</code> |  |
| <Link id="m-donedistance" /><code>{"private float doneDistance"}</code> |  |
| <Link id="m-hitreceiver" /><code>{"private "}<Link to="/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver"}</code> |  |
| <Link id="m-impactcollider" /><code>{"private Collider impactCollider"}</code> |  |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |  |
| <Link id="m-length" /><code>{"private float length"}</code> |  |
| <Link id="m-maxdeviance" /><code>{"private float maxDeviance"}</code> |  |
| <Link id="m-meshtransform" /><code>{"private Transform meshTransform"}</code> |  |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-shell" /><code>{"private Renderer shell"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviance-2" /><code>{"Quaternion Deviance { get; }"}</code> | How far the nail is tilted from straight. |
| <Link id="m-devianceangles" /><code>{"float DevianceAngles { get; }"}</code> | Tilt in degrees. |
| <Link id="m-deviantdirection" /><code>{"Vector3 DeviantDirection { get; }"}</code> | Nail direction with the tilt applied. |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; }"}</code> | Straight direction of the nail. |
| <Link id="m-impactdetector-2" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> | The impact detector that receives hammer hits. |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | Position of the nail in its piece. |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | True once fully hammered in. |
| <Link id="m-lasthittingplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LastHittingPlayer { get; set; }"}</code> | Server: the player whose tool last hit the nail. Credited when the piece completes. |
| <Link id="m-progress-2" /><code>{"float Progress { get; private set; }"}</code> | How far in the nail is, 0 to 1. Setting it moves the mesh. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydamage" /><code>{"void ApplyDamage(float progressDamage)"}</code> | Drives the nail in by some progress and adds tilt (capped). At full progress it marks itself done and tells the piece. |
| <Link id="m-applydamage-2" /><code>{"void ApplyDamage(float progressDamage, Quaternion deviance)"}</code> | Drives the nail in by some progress and adds tilt (capped). At full progress it marks itself done and tells the piece. |
| <Link id="m-emptyserialize" /><code>{"static void EmptySerialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or skips the data of an empty nail, keeping the stream in step. |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> | Marks the nail fully in, with no effects. |
| <Link id="m-resetprogress" /><code>{"void ResetProgress()"}</code> | Pulls the nail back out, straight, and hides it. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads done, progress and tilt. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Shows or hides the nail. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver, int index, Vector3 position, float maxDeviance)"}</code> | Links the nail to its piece with an index, position and maximum tilt, and resets it. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-disablecollider-2" /><code>{"private void DisableCollider()"}</code> |  |
| <Link id="m-disabletimer" /><code>{"private void DisableTimer("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-icclientsideimpact" /><code>{"private bool IcClientSideImpact("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact, out "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" resultHit)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Cancels the collider-off timer. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingNail`:

[`ConfirmationCraftingPart.HasOverflow`](/game-api/types/alta-crafting/confirmationcraftingpart#m-hasoverflow), [`ConfirmationCraftingPart.nails`](/game-api/types/alta-crafting/confirmationcraftingpart#m-nails), [`ConfirmationCraftingPart.OnComplete`](/game-api/types/alta-crafting/confirmationcraftingpart#m-oncomplete), [`ConfirmationCraftingPart.ReceiveHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-receivehit), [`ConfirmationCraftingPart.SyncHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-synchit), [`GenericCraftingPiece.HasOverflow`](/game-api/types/alta-crafting/genericcraftingpiece#m-hasoverflow), [`GenericCraftingPiece.Nails`](/game-api/types/alta-crafting/genericcraftingpiece#m-nails), [`GenericCraftingPiece.OnComplete`](/game-api/types/alta-crafting/genericcraftingpiece#m-oncomplete), [`GenericCraftingPiece.ReceiveHit`](/game-api/types/alta-crafting/genericcraftingpiece#m-receivehit), [`GenericCraftingPiece.SyncHit`](/game-api/types/alta-crafting/genericcraftingpiece#m-synchit), [`INailable.HasOverflow`](/game-api/types/alta-crafting/inailable#m-hasoverflow), [`INailable.OnComplete`](/game-api/types/alta-crafting/inailable#m-oncomplete), [`INailable.ReceiveHit`](/game-api/types/alta-crafting/inailable#m-receivehit), [`INailable.SyncHit`](/game-api/types/alta-crafting/inailable#m-synchit), [`NailIdentifier.Setup`](/game-api/types/alta-crafting/nailidentifier#m-setup), [`NailSettings.CalculateNailDamage`](/game-api/types/alta-crafting/nailsettings#m-calculatenaildamage), [`NailSettings.SetupNails`](/game-api/types/alta-crafting/nailsettings#m-setupnails).
