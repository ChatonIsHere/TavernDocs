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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Attributes** `SelectionBase`
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingNail()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-afterdonedisabletimer" /><code>{"private float afterDoneDisableTimer"}</code> | <span className="api-desc">Seconds after the nail is done before its collider turns off on clients. 2 by default.</span> |
| <Link id="m-deviance" /><code>{"private Quaternion deviance"}</code> | <span className="api-desc">Backing field for `Deviance`: how bent the nail is, capped at `maxDeviance` degrees.</span> |
| <Link id="m-disablecollider" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" disableCollider"}</code> | <span className="api-desc">Timeline entry for the pending `DisableCollider` call.</span> |
| <Link id="m-donedistance" /><code>{"private float doneDistance"}</code> | <span className="api-desc">Extra distance the mesh sits out while not done. 0.02 by default.</span> |
| <Link id="m-hitreceiver" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver"}</code> | <span className="api-desc">The `INailable` that set up this nail and gets its hits and completion.</span> |
| <Link id="m-impactcollider" /><code>{"private Collider impactCollider"}</code> | <span className="api-desc">Collider that takes hammer hits. Turned off once the nail is done.</span> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">Backing field for `ImpactDetector`, whose hits drive the nail.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">How far the mesh sticks out at 0 progress. 0.04 by default.</span> |
| <Link id="m-maxdeviance" /><code>{"private float maxDeviance"}</code> | <span className="api-desc">Most the nail can bend, in degrees. Set by `Setup`.</span> |
| <Link id="m-meshtransform" /><code>{"private Transform meshTransform"}</code> | <span className="api-desc">The nail mesh, moved in as progress rises.</span> |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> | <span className="api-desc">Pivot rotated by the deviance.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Position passed to `Setup`. Not read in this class.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Backing field for `Progress`, from 0 to 1. The nail is done at 0.99 or more.</span> |
| <Link id="m-shell" /><code>{"private Renderer shell"}</code> | <span className="api-desc">Renderer hidden once the nail is done.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviance-2" /><code>{"Quaternion Deviance { get; }"}</code> | <span className="api-desc">How far the nail is tilted from straight.</span> |
| <Link id="m-devianceangles" /><code>{"float DevianceAngles { get; }"}</code> | <span className="api-desc">Tilt in degrees.</span> |
| <Link id="m-deviantdirection" /><code>{"Vector3 DeviantDirection { get; }"}</code> | <span className="api-desc">Nail direction with the tilt applied.</span> |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; }"}</code> | <span className="api-desc">Straight direction of the nail.</span> |
| <Link id="m-impactdetector-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> | <span className="api-desc">The impact detector that receives hammer hits.</span> |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | <span className="api-desc">Position of the nail in its piece.</span> |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | <span className="api-desc">True once fully hammered in.</span> |
| <Link id="m-lasthittingplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LastHittingPlayer { get; set; }"}</code> | <span className="api-desc">Server: the player whose tool last hit the nail. Credited when the piece completes.</span> |
| <Link id="m-progress-2" /><code>{"float Progress { get; private set; }"}</code> | <span className="api-desc">How far in the nail is, 0 to 1. Setting it moves the mesh.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydamage" /><code>{"void ApplyDamage(float progressDamage)"}</code> | <span className="api-desc">Drives the nail in by some progress and adds tilt (capped). At full progress it marks itself done and tells the piece.</span> |
| <Link id="m-applydamage-2" /><code>{"void ApplyDamage(float progressDamage, Quaternion deviance)"}</code> | <span className="api-desc">Drives the nail in by some progress and adds tilt (capped). At full progress it marks itself done and tells the piece.</span> |
| <Link id="m-emptyserialize" /><code>{"static void EmptySerialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or skips the data of an empty nail, keeping the stream in step.</span> |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> | <span className="api-desc">Marks the nail fully in, with no effects.</span> |
| <Link id="m-resetprogress" /><code>{"void ResetProgress()"}</code> | <span className="api-desc">Pulls the nail back out, straight, and hides it.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads done, progress and tilt.</span> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | <span className="api-desc">Shows or hides the nail.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver, int index, Vector3 position, float maxDeviance)"}</code> | <span className="api-desc">Links the nail to its piece with an index, position and maximum tilt, and resets it.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Cancels the collider-off timer.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `DisableTimer` to the nail being released back to its pool.</span> |
| <Link id="m-disablecollider-2" /><code>{"private void DisableCollider()"}</code> | <span className="api-desc">Turns off the impact collider. Runs `afterDoneDisableTimer` seconds after the nail is done.</span> |
| <Link id="m-disabletimer" /><code>{"private void DisableTimer("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Cancels the pending collider disable when the nail is released to the pool.</span> |
| <Link id="m-icclientsideimpact" /><code>{"private bool IcClientSideImpact("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact, out "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" resultHit)"}</code> | <span className="api-desc">True when the hit is from a tool held by a real player, so the player's client resolves it.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws a line along the nail's direction.</span> |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Hit handler hooked by `Setup` (never unhooked). Server applies non-client hits; the local wielder's client syncs its hit and plays the effect.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Moves the nail mesh in by progress and tilts the pivot by the deviance.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingNail`:

<div className="api-used-in">

[`ConfirmationCraftingPart.HasOverflow`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-hasoverflow), [`ConfirmationCraftingPart.nails`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-nails), [`ConfirmationCraftingPart.OnComplete`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-oncomplete), [`ConfirmationCraftingPart.ReceiveHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-receivehit), [`ConfirmationCraftingPart.SyncHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-synchit), [`GenericCraftingPiece.HasOverflow`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-hasoverflow), [`GenericCraftingPiece.Nails`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-nails), [`GenericCraftingPiece.OnComplete`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-oncomplete), [`GenericCraftingPiece.ReceiveHit`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-receivehit), [`GenericCraftingPiece.SyncHit`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-synchit), [`INailable.HasOverflow`](/mod/game-api/types/alta-crafting/inailable#m-hasoverflow), [`INailable.OnComplete`](/mod/game-api/types/alta-crafting/inailable#m-oncomplete), [`INailable.ReceiveHit`](/mod/game-api/types/alta-crafting/inailable#m-receivehit), [`INailable.SyncHit`](/mod/game-api/types/alta-crafting/inailable#m-synchit), [`NailIdentifier.Setup`](/mod/game-api/types/alta-crafting/nailidentifier#m-setup), [`NailSettings.CalculateNailDamage`](/mod/game-api/types/alta-crafting/nailsettings#m-calculatenaildamage), [`NailSettings.SetupNails`](/mod/game-api/types/alta-crafting/nailsettings#m-setupnails).

</div>
