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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`CraftableImpactDetectorBase`](/game-api/types/alta-items/craftableimpactdetectorbase)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselingTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chiselingdirection" /><code>{"private Vector3 chiselingDirection"}</code> | Local direction the chisel cuts in. Backs `ChiselingDirection`. |
| <Link id="m-chiselingpoint" /><code>{"private Vector3 chiselingPoint"}</code> | Local position of the chisel tip. Backs `ChiselingPoint`. |
| <Link id="m-collisioncount" /><code>{"private int collisionCount"}</code> | Not used in this class. |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | Multiplies hit damage dealt to the chiseled piece. 3 by default. |
| <Link id="m-dotprecision" /><code>{"private float dotPrecision"}</code> | Power applied to the piece's direction multiplier, so off-angle hits count less. 1 by default. |
| <Link id="m-haptic" /><code>{"private Coroutine haptic"}</code> | The running `TouchHaptic` coroutine, or null. |
| <Link id="m-hapticraycastdistance" /><code>{"private float hapticRayCastDistance"}</code> | How far ahead of the tip haptics check for a chiselable. 0 checks only at the tip. |
| <Link id="m-hapticsoverdistancefromghosthand" /><code>{"private AnimationCurve hapticsOverDistanceFromGhostHand"}</code> | Haptic strength by squared distance between the hand and its ghost hand. |
| <Link id="m-hitcollider" /><code>{"private Collider hitCollider"}</code> | Collider of the piece found by the last `CheckForPiece`. |
| <Link id="m-hitpiece" /><code>{"private "}<Link to="/game-api/types/alta-crafting/ichiselable">{"IChiselable"}</Link>{" hitPiece"}</code> | Chiselable found by the last `CheckForPiece`, used and cleared by the next hit. |
| <Link id="m-hitposition" /><code>{"private Vector3 hitPosition"}</code> | Point on the piece found by the last `CheckForPiece`. |
| <Link id="m-layermask" /><code>{"private int layerMask"}</code> | Mask of the Default layer, which the chisel casts check. |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> | Physical material part on the tool, whose damage multiplier scales chisel damage. |
| <Link id="m-maxchiselingdistance" /><code>{"private float maxChiselingDistance"}</code> | Length of the sphere cast from the tip when looking for a piece. |
| <Link id="m-nonalloccolliders" /><code>{"private static Collider[] nonAllocColliders"}</code> | Shared buffer for overlap checks. |
| <Link id="m-nonallocraycasthits" /><code>{"private static RaycastHit[] nonAllocRaycastHits"}</code> | Shared buffer for sphere casts. |
| <Link id="m-physicalmaterialmultiplier" /><code>{"private float physicalMaterialMultiplier"}</code> | The tool material's damage multiplier. 1 when there is no material. |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> | Radius of the chisel casts. 0.01 by default. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chiselingdirection-2" /><code>{"Vector3 ChiselingDirection { get; }"}</code> | World direction the chisel points. |
| <Link id="m-chiselingpoint-2" /><code>{"Vector3 ChiselingPoint { get; }"}</code> | World position of the chisel's tip. |
| <Link id="m-lasthit" /><code><Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" LastHit { get; private set; }"}</code> | The last impact that hit a piece, or null if the last impact missed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforpiece" /><code>{"bool CheckForPiece(out float directionMultiplier)"}</code> | Sphere-casts from the tip for the closest enabled chiselable piece and works out the direction multiplier. True if one was found. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks the hit event and the material part so the damage multiplier follows the chisel's material. |
| <Link id="m-prereceivesyncedhit" /><code>{"protected override void PreReceiveSyncedHit()"}</code> | Looks for a piece again before applying a hit synced from elsewhere. |
| <Link id="m-updatetool" /><code>{"protected override void UpdateTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" registeringTool)"}</code> | Moves the haptic and collision filter hooks to a new impact tool. |
| <Link id="m-validatecontatpoint" /><code>{"protected override bool ValidateContatPoint(ContactPoint point)"}</code> | Accepts every contact point. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatetouchhapitcs" /><code>{"private void CalculateTouchHapitcs()"}</code> | Pulses the holding hands when the chisel tip touches a chiselable that triggers haptics. |
| <Link id="m-consumefilter" /><code>{"private void ConsumeFilter(ref bool isHitconsumed)"}</code> | Tool collision filter: marks the hit as consumed when a chiselable is in front of the tip. |
| <Link id="m-hitpiece-2" /><code>{"private void HitPiece("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Hit handler: damages the chiselable found by `CheckForPiece`, scaled by damage and material multipliers. Server also wears the tool. |
| <Link id="m-newmaterial" /><code>{"private void NewMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> | Updates `physicalMaterialMultiplier` when the tool's material changes. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the tip, the chisel cast and the haptic cast. |
| <Link id="m-startcheckhaptic" /><code>{"private void StartCheckHaptic("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts the `TouchHaptic` loop when a local hand grabs the tool. |
| <Link id="m-stopcheckhaptic" /><code>{"private void StopCheckHaptic("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the haptic loop when the tool is no longer held. |
| <Link id="m-touchhaptic" /><code>{"private IEnumerator TouchHaptic() (iterator)"}</code> | Coroutine that runs `CalculateTouchHapitcs` every frame while the tool is held. |
| <Link id="m-triggerhaptic" /><code>{"private void TriggerHaptic("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Pulses a local hand, stronger the further the real hand is from its ghost hand. |

</details>

## Used in

Members of other types that take, return or hold a `ChiselingTool`:

[`Chiselable.ReceiveDamage`](/game-api/types/alta-crafting/chiselable#m-receivedamage), [`ChiselHit.BeginInvoke`](/game-api/types/alta-crafting/chiselhit#m-begininvoke), [`ChiselHit.Invoke`](/game-api/types/alta-crafting/chiselhit#m-invoke), [`IChiselable.ReceiveDamage`](/game-api/types/alta-crafting/ichiselable#m-receivedamage), [`TimberPiece.ReceiveDamage`](/game-api/types/alta-crafting/timberpiece#m-receivedamage), [`TimberPieceBase.ReceiveDamage`](/game-api/types/alta-crafting/timberpiecebase#m-receivedamage), [`TimberPieceGroup.ReceiveDamage`](/game-api/types/alta-crafting/timberpiecegroup#m-receivedamage), [`CraftingPieceChiselable.ReceiveDamage`](/game-api/types/alta-crafting/craftingpiecechiselable#m-receivedamage), [`DecraftingComponent.TryDecraft`](/game-api/types/alta-crafting/decraftingcomponent#m-trydecraft), [`BasicChiselable.OnBrokenServer`](/game-api/types/game-other-namespaces/basicchiselable#m-onbrokenserver), [`BasicChiselable.OnDamageTakenServer`](/game-api/types/game-other-namespaces/basicchiselable#m-ondamagetakenserver), [`BasicChiselable.ReceiveDamage`](/game-api/types/game-other-namespaces/basicchiselable#m-receivedamage), [`ChiselableSurfaceDock.OnBrokenServer`](/game-api/types/game-other-namespaces/chiselablesurfacedock#m-onbrokenserver), [`ChiselableSurfaceDock.OnDamageTakenServer`](/game-api/types/game-other-namespaces/chiselablesurfacedock#m-ondamagetakenserver).
