---
title: "ChiselingTool"
description: "Impact detector on a chisel that finds the nearest chiselable piece ahead of its tip and passes hits to it, scaled by the chisel's material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselingTool

A **class** in `Root.Township`, `Alta.Carpentry`.

Impact detector on a chisel that finds the nearest chiselable piece ahead of its tip and passes hits to it, scaled by the chisel's material. Also gives touch haptics near chiselable pieces.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`CraftableImpactDetectorBase`](/mod/game-api/types/alta-items/craftableimpactdetectorbase)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselingTool()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chiselingdirection" /><code>{"private Vector3 chiselingDirection"}</code> | <span className="api-desc">Local direction the chisel cuts in. Backs `ChiselingDirection`.</span> |
| <Link id="m-chiselingpoint" /><code>{"private Vector3 chiselingPoint"}</code> | <span className="api-desc">Local position of the chisel tip. Backs `ChiselingPoint`.</span> |
| <Link id="m-collisioncount" /><code>{"private int collisionCount"}</code> | <span className="api-desc">Not used in this class.</span> |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | <span className="api-desc">Multiplies hit damage dealt to the chiseled piece. 3 by default.</span> |
| <Link id="m-dotprecision" /><code>{"private float dotPrecision"}</code> | <span className="api-desc">Power applied to the piece's direction multiplier, so off-angle hits count less. 1 by default.</span> |
| <Link id="m-haptic" /><code>{"private Coroutine haptic"}</code> | <span className="api-desc">The running `TouchHaptic` coroutine, or null.</span> |
| <Link id="m-hapticraycastdistance" /><code>{"private float hapticRayCastDistance"}</code> | <span className="api-desc">How far ahead of the tip haptics check for a chiselable. 0 checks only at the tip.</span> |
| <Link id="m-hapticsoverdistancefromghosthand" /><code>{"private AnimationCurve hapticsOverDistanceFromGhostHand"}</code> | <span className="api-desc">Haptic strength by squared distance between the hand and its ghost hand.</span> |
| <Link id="m-hitcollider" /><code>{"private Collider hitCollider"}</code> | <span className="api-desc">Collider of the piece found by the last `CheckForPiece`.</span> |
| <Link id="m-hitpiece" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/ichiselable">{"IChiselable"}</Link>{" hitPiece"}</code> | <span className="api-desc">Chiselable found by the last `CheckForPiece`, used and cleared by the next hit.</span> |
| <Link id="m-hitposition" /><code>{"private Vector3 hitPosition"}</code> | <span className="api-desc">Point on the piece found by the last `CheckForPiece`.</span> |
| <Link id="m-layermask" /><code>{"private int layerMask"}</code> | <span className="api-desc">Mask of the Default layer, which the chisel casts check.</span> |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> | <span className="api-desc">Physical material part on the tool, whose damage multiplier scales chisel damage.</span> |
| <Link id="m-maxchiselingdistance" /><code>{"private float maxChiselingDistance"}</code> | <span className="api-desc">Length of the sphere cast from the tip when looking for a piece.</span> |
| <Link id="m-nonalloccolliders" /><code>{"private static Collider[] nonAllocColliders"}</code> | <span className="api-desc">Shared buffer for overlap checks.</span> |
| <Link id="m-nonallocraycasthits" /><code>{"private static RaycastHit[] nonAllocRaycastHits"}</code> | <span className="api-desc">Shared buffer for sphere casts.</span> |
| <Link id="m-physicalmaterialmultiplier" /><code>{"private float physicalMaterialMultiplier"}</code> | <span className="api-desc">The tool material's damage multiplier. 1 when there is no material.</span> |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> | <span className="api-desc">Radius of the chisel casts. 0.01 by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselingdirection-2" /><code>{"Vector3 ChiselingDirection { get; }"}</code> | <span className="api-desc">World direction the chisel points.</span> |
| <Link id="m-chiselingpoint-2" /><code>{"Vector3 ChiselingPoint { get; }"}</code> | <span className="api-desc">World position of the chisel's tip.</span> |
| <Link id="m-lasthit" /><code><Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" LastHit { get; private set; }"}</code> | <span className="api-desc">The last impact that hit a piece, or null if the last impact missed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforpiece" /><code>{"bool CheckForPiece(out float directionMultiplier)"}</code> | <span className="api-desc">Sphere-casts from the tip for the closest enabled chiselable piece and works out the direction multiplier. True if one was found.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks the hit event and the material part so the damage multiplier follows the chisel's material.</span> |
| <Link id="m-prereceivesyncedhit" /><code>{"protected override void PreReceiveSyncedHit()"}</code> | <span className="api-desc">Looks for a piece again before applying a hit synced from elsewhere.</span> |
| <Link id="m-updatetool" /><code>{"protected override void UpdateTool("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" registeringTool)"}</code> | <span className="api-desc">Moves the haptic and collision filter hooks to a new impact tool.</span> |
| <Link id="m-validatecontatpoint" /><code>{"protected override bool ValidateContatPoint(ContactPoint point)"}</code> | <span className="api-desc">Accepts every contact point.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatetouchhapitcs" /><code>{"private void CalculateTouchHapitcs()"}</code> | <span className="api-desc">Pulses the holding hands when the chisel tip touches a chiselable that triggers haptics.</span> |
| <Link id="m-consumefilter" /><code>{"private void ConsumeFilter(ref bool isHitconsumed)"}</code> | <span className="api-desc">Tool collision filter: marks the hit as consumed when a chiselable is in front of the tip.</span> |
| <Link id="m-hitpiece-2" /><code>{"private void HitPiece("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Hit handler: damages the chiselable found by `CheckForPiece`, scaled by damage and material multipliers. Server also wears the tool.</span> |
| <Link id="m-newmaterial" /><code>{"private void NewMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> | <span className="api-desc">Updates `physicalMaterialMultiplier` when the tool's material changes.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the tip, the chisel cast and the haptic cast.</span> |
| <Link id="m-startcheckhaptic" /><code>{"private void StartCheckHaptic("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts the `TouchHaptic` loop when a local hand grabs the tool.</span> |
| <Link id="m-stopcheckhaptic" /><code>{"private void StopCheckHaptic("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the haptic loop when the tool is no longer held.</span> |
| <Link id="m-touchhaptic" /><code>{"private IEnumerator TouchHaptic() (iterator)"}</code> | <span className="api-desc">Coroutine that runs `CalculateTouchHapitcs` every frame while the tool is held.</span> |
| <Link id="m-triggerhaptic" /><code>{"private void TriggerHaptic("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Pulses a local hand, stronger the further the real hand is from its ghost hand.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChiselingTool`:

<div className="api-used-in">

[`Chiselable.ReceiveDamage`](/mod/game-api/types/alta-crafting/chiselable#m-receivedamage), [`ChiselHit.BeginInvoke`](/mod/game-api/types/alta-crafting/chiselhit#m-begininvoke), [`ChiselHit.Invoke`](/mod/game-api/types/alta-crafting/chiselhit#m-invoke), [`IChiselable.ReceiveDamage`](/mod/game-api/types/alta-crafting/ichiselable#m-receivedamage), [`TimberPiece.ReceiveDamage`](/mod/game-api/types/alta-crafting/timberpiece#m-receivedamage), [`TimberPieceBase.ReceiveDamage`](/mod/game-api/types/alta-crafting/timberpiecebase#m-receivedamage), [`TimberPieceGroup.ReceiveDamage`](/mod/game-api/types/alta-crafting/timberpiecegroup#m-receivedamage), [`CraftingPieceChiselable.ReceiveDamage`](/mod/game-api/types/alta-crafting/craftingpiecechiselable#m-receivedamage), [`DecraftingComponent.TryDecraft`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-trydecraft), [`BasicChiselable.OnBrokenServer`](/mod/game-api/types/game-other-namespaces/basicchiselable#m-onbrokenserver), [`BasicChiselable.OnDamageTakenServer`](/mod/game-api/types/game-other-namespaces/basicchiselable#m-ondamagetakenserver), [`BasicChiselable.ReceiveDamage`](/mod/game-api/types/game-other-namespaces/basicchiselable#m-receivedamage), [`ChiselableSurfaceDock.OnBrokenServer`](/mod/game-api/types/game-other-namespaces/chiselablesurfacedock#m-onbrokenserver), [`ChiselableSurfaceDock.OnDamageTakenServer`](/mod/game-api/types/game-other-namespaces/chiselablesurfacedock#m-ondamagetakenserver).

</div>
