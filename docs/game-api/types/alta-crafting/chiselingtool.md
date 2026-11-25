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
| <Link id="m-ctor" /><code>{"ChiselingTool()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chiselingdirection" /><code>{"private Vector3 chiselingDirection"}</code> |  |
| <Link id="m-chiselingpoint" /><code>{"private Vector3 chiselingPoint"}</code> |  |
| <Link id="m-collisioncount" /><code>{"private int collisionCount"}</code> |  |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> |  |
| <Link id="m-dotprecision" /><code>{"private float dotPrecision"}</code> |  |
| <Link id="m-haptic" /><code>{"private Coroutine haptic"}</code> |  |
| <Link id="m-hapticraycastdistance" /><code>{"private float hapticRayCastDistance"}</code> |  |
| <Link id="m-hapticsoverdistancefromghosthand" /><code>{"private AnimationCurve hapticsOverDistanceFromGhostHand"}</code> |  |
| <Link id="m-hitcollider" /><code>{"private Collider hitCollider"}</code> |  |
| <Link id="m-hitpiece" /><code>{"private "}<Link to="/game-api/types/alta-crafting/ichiselable">{"IChiselable"}</Link>{" hitPiece"}</code> |  |
| <Link id="m-hitposition" /><code>{"private Vector3 hitPosition"}</code> |  |
| <Link id="m-layermask" /><code>{"private int layerMask"}</code> |  |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> |  |
| <Link id="m-maxchiselingdistance" /><code>{"private float maxChiselingDistance"}</code> |  |
| <Link id="m-nonalloccolliders" /><code>{"private static Collider[] nonAllocColliders"}</code> |  |
| <Link id="m-nonallocraycasthits" /><code>{"private static RaycastHit[] nonAllocRaycastHits"}</code> |  |
| <Link id="m-physicalmaterialmultiplier" /><code>{"private float physicalMaterialMultiplier"}</code> |  |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> |  |

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
| <Link id="m-calculatetouchhapitcs" /><code>{"private void CalculateTouchHapitcs()"}</code> |  |
| <Link id="m-consumefilter" /><code>{"private void ConsumeFilter(ref bool isHitconsumed)"}</code> |  |
| <Link id="m-hitpiece-2" /><code>{"private void HitPiece("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-newmaterial" /><code>{"private void NewMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-prereceivesyncedhit" /><code>{"protected override void PreReceiveSyncedHit()"}</code> | Looks for a piece again before applying a hit synced from elsewhere. |
| <Link id="m-startcheckhaptic" /><code>{"private void StartCheckHaptic("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopcheckhaptic" /><code>{"private void StopCheckHaptic("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-touchhaptic" /><code>{"private IEnumerator TouchHaptic() (iterator)"}</code> |  |
| <Link id="m-triggerhaptic" /><code>{"private void TriggerHaptic("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-updatetool" /><code>{"protected override void UpdateTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" registeringTool)"}</code> | Moves the haptic and collision filter hooks to a new impact tool. |
| <Link id="m-validatecontatpoint" /><code>{"protected override bool ValidateContatPoint(ContactPoint point)"}</code> | Accepts every contact point. |

## Used in

Members of other types that take, return or hold a `ChiselingTool`:

[`Chiselable.ReceiveDamage`](/game-api/types/alta-crafting/chiselable#m-receivedamage), [`ChiselHit.BeginInvoke`](/game-api/types/alta-crafting/chiselhit#m-begininvoke), [`ChiselHit.Invoke`](/game-api/types/alta-crafting/chiselhit#m-invoke), [`IChiselable.ReceiveDamage`](/game-api/types/alta-crafting/ichiselable#m-receivedamage), [`TimberPiece.ReceiveDamage`](/game-api/types/alta-crafting/timberpiece#m-receivedamage), [`TimberPieceBase.ReceiveDamage`](/game-api/types/alta-crafting/timberpiecebase#m-receivedamage), [`TimberPieceGroup.ReceiveDamage`](/game-api/types/alta-crafting/timberpiecegroup#m-receivedamage), [`CraftingPieceChiselable.ReceiveDamage`](/game-api/types/alta-crafting/craftingpiecechiselable#m-receivedamage), [`DecraftingComponent.TryDecraft`](/game-api/types/alta-crafting/decraftingcomponent#m-trydecraft), [`BasicChiselable.OnBrokenServer`](/game-api/types/game-other-namespaces/basicchiselable#m-onbrokenserver), [`BasicChiselable.OnDamageTakenServer`](/game-api/types/game-other-namespaces/basicchiselable#m-ondamagetakenserver), [`BasicChiselable.ReceiveDamage`](/game-api/types/game-other-namespaces/basicchiselable#m-receivedamage), [`ChiselableSurfaceDock.OnBrokenServer`](/game-api/types/game-other-namespaces/chiselablesurfacedock#m-onbrokenserver), [`ChiselableSurfaceDock.OnDamageTakenServer`](/game-api/types/game-other-namespaces/chiselablesurfacedock#m-ondamagetakenserver).
