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
| <Link id="m-ctor" /><code>{"GenericCraftingNail()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-afterdonedisabletimer" /><code>{"private float afterDoneDisableTimer"}</code> | Seconds after the nail is done before its collider turns off on clients. 2 by default. |
| <Link id="m-deviance" /><code>{"private Quaternion deviance"}</code> | Backing field for `Deviance`: how bent the nail is, capped at `maxDeviance` degrees. |
| <Link id="m-disablecollider" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" disableCollider"}</code> | Timeline entry for the pending `DisableCollider` call. |
| <Link id="m-donedistance" /><code>{"private float doneDistance"}</code> | Extra distance the mesh sits out while not done. 0.02 by default. |
| <Link id="m-hitreceiver" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver"}</code> | The `INailable` that set up this nail and gets its hits and completion. |
| <Link id="m-impactcollider" /><code>{"private Collider impactCollider"}</code> | Collider that takes hammer hits. Turned off once the nail is done. |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | Backing field for `ImpactDetector`, whose hits drive the nail. |
| <Link id="m-length" /><code>{"private float length"}</code> | How far the mesh sticks out at 0 progress. 0.04 by default. |
| <Link id="m-maxdeviance" /><code>{"private float maxDeviance"}</code> | Most the nail can bend, in degrees. Set by `Setup`. |
| <Link id="m-meshtransform" /><code>{"private Transform meshTransform"}</code> | The nail mesh, moved in as progress rises. |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> | Pivot rotated by the deviance. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Position passed to `Setup`. Not read in this class. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Backing field for `Progress`, from 0 to 1. The nail is done at 0.99 or more. |
| <Link id="m-shell" /><code>{"private Renderer shell"}</code> | Renderer hidden once the nail is done. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviance-2" /><code>{"Quaternion Deviance { get; }"}</code> | How far the nail is tilted from straight. |
| <Link id="m-devianceangles" /><code>{"float DevianceAngles { get; }"}</code> | Tilt in degrees. |
| <Link id="m-deviantdirection" /><code>{"Vector3 DeviantDirection { get; }"}</code> | Nail direction with the tilt applied. |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; }"}</code> | Straight direction of the nail. |
| <Link id="m-impactdetector-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> | The impact detector that receives hammer hits. |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | Position of the nail in its piece. |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | True once fully hammered in. |
| <Link id="m-lasthittingplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LastHittingPlayer { get; set; }"}</code> | Server: the player whose tool last hit the nail. Credited when the piece completes. |
| <Link id="m-progress-2" /><code>{"float Progress { get; private set; }"}</code> | How far in the nail is, 0 to 1. Setting it moves the mesh. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydamage" /><code>{"void ApplyDamage(float progressDamage)"}</code> | Drives the nail in by some progress and adds tilt (capped). At full progress it marks itself done and tells the piece. |
| <Link id="m-applydamage-2" /><code>{"void ApplyDamage(float progressDamage, Quaternion deviance)"}</code> | Drives the nail in by some progress and adds tilt (capped). At full progress it marks itself done and tells the piece. |
| <Link id="m-emptyserialize" /><code>{"static void EmptySerialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or skips the data of an empty nail, keeping the stream in step. |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> | Marks the nail fully in, with no effects. |
| <Link id="m-resetprogress" /><code>{"void ResetProgress()"}</code> | Pulls the nail back out, straight, and hides it. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads done, progress and tilt. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Shows or hides the nail. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver, int index, Vector3 position, float maxDeviance)"}</code> | Links the nail to its piece with an index, position and maximum tilt, and resets it. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Cancels the collider-off timer. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `DisableTimer` to the nail being released back to its pool. |
| <Link id="m-disablecollider-2" /><code>{"private void DisableCollider()"}</code> | Turns off the impact collider. Runs `afterDoneDisableTimer` seconds after the nail is done. |
| <Link id="m-disabletimer" /><code>{"private void DisableTimer("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Cancels the pending collider disable when the nail is released to the pool. |
| <Link id="m-icclientsideimpact" /><code>{"private bool IcClientSideImpact("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact, out "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" resultHit)"}</code> | True when the hit is from a tool held by a real player, so the player's client resolves it. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws a line along the nail's direction. |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Hit handler hooked by `Setup` (never unhooked). Server applies non-client hits; the local wielder's client syncs its hit and plays the effect. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | Moves the nail mesh in by progress and tilts the pivot by the deviance. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingNail`:

[`ConfirmationCraftingPart.HasOverflow`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-hasoverflow), [`ConfirmationCraftingPart.nails`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-nails), [`ConfirmationCraftingPart.OnComplete`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-oncomplete), [`ConfirmationCraftingPart.ReceiveHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-receivehit), [`ConfirmationCraftingPart.SyncHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-synchit), [`GenericCraftingPiece.HasOverflow`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-hasoverflow), [`GenericCraftingPiece.Nails`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-nails), [`GenericCraftingPiece.OnComplete`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-oncomplete), [`GenericCraftingPiece.ReceiveHit`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-receivehit), [`GenericCraftingPiece.SyncHit`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-synchit), [`INailable.HasOverflow`](/mod/game-api/types/alta-crafting/inailable#m-hasoverflow), [`INailable.OnComplete`](/mod/game-api/types/alta-crafting/inailable#m-oncomplete), [`INailable.ReceiveHit`](/mod/game-api/types/alta-crafting/inailable#m-receivehit), [`INailable.SyncHit`](/mod/game-api/types/alta-crafting/inailable#m-synchit), [`NailIdentifier.Setup`](/mod/game-api/types/alta-crafting/nailidentifier#m-setup), [`NailSettings.CalculateNailDamage`](/mod/game-api/types/alta-crafting/nailsettings#m-calculatenaildamage), [`NailSettings.SetupNails`](/mod/game-api/types/alta-crafting/nailsettings#m-setupnails).
