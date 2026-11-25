---
title: "GenericCraftingNail"
description: "class GenericCraftingNail in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingNail

A **class** in `Root.Township`, `Alta.Crafting`.

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
| <Link id="m-deviance-2" /><code>{"Quaternion Deviance { get; }"}</code> |  |
| <Link id="m-devianceangles" /><code>{"float DevianceAngles { get; }"}</code> |  |
| <Link id="m-deviantdirection" /><code>{"Vector3 DeviantDirection { get; }"}</code> |  |
| <Link id="m-direction" /><code>{"Vector3 Direction { get; }"}</code> |  |
| <Link id="m-impactdetector-2" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> |  |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> |  |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> |  |
| <Link id="m-lasthittingplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LastHittingPlayer { get; set; }"}</code> |  |
| <Link id="m-progress-2" /><code>{"float Progress { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydamage" /><code>{"void ApplyDamage(float progressDamage)"}</code> |  |
| <Link id="m-applydamage-2" /><code>{"void ApplyDamage(float progressDamage, Quaternion deviance)"}</code> |  |
| <Link id="m-emptyserialize" /><code>{"static void EmptySerialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete()"}</code> |  |
| <Link id="m-resetprogress" /><code>{"void ResetProgress()"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-crafting/inailable">{"INailable"}</Link>{" hitReceiver, int index, Vector3 position, float maxDeviance)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-disablecollider-2" /><code>{"private void DisableCollider()"}</code> |  |
| <Link id="m-disabletimer" /><code>{"private void DisableTimer("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-icclientsideimpact" /><code>{"private bool IcClientSideImpact("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact, out "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" resultHit)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-receivehit" /><code>{"private void ReceiveHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingNail`:

[`ConfirmationCraftingPart.HasOverflow`](/game-api/types/alta-crafting/confirmationcraftingpart#m-hasoverflow), [`ConfirmationCraftingPart.nails`](/game-api/types/alta-crafting/confirmationcraftingpart#m-nails), [`ConfirmationCraftingPart.OnComplete`](/game-api/types/alta-crafting/confirmationcraftingpart#m-oncomplete), [`ConfirmationCraftingPart.ReceiveHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-receivehit), [`ConfirmationCraftingPart.SyncHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-synchit), [`GenericCraftingPiece.HasOverflow`](/game-api/types/alta-crafting/genericcraftingpiece#m-hasoverflow), [`GenericCraftingPiece.Nails`](/game-api/types/alta-crafting/genericcraftingpiece#m-nails), [`GenericCraftingPiece.OnComplete`](/game-api/types/alta-crafting/genericcraftingpiece#m-oncomplete), [`GenericCraftingPiece.ReceiveHit`](/game-api/types/alta-crafting/genericcraftingpiece#m-receivehit), [`GenericCraftingPiece.SyncHit`](/game-api/types/alta-crafting/genericcraftingpiece#m-synchit), [`INailable.HasOverflow`](/game-api/types/alta-crafting/inailable#m-hasoverflow), [`INailable.OnComplete`](/game-api/types/alta-crafting/inailable#m-oncomplete), [`INailable.ReceiveHit`](/game-api/types/alta-crafting/inailable#m-receivehit), [`INailable.SyncHit`](/game-api/types/alta-crafting/inailable#m-synchit), [`NailIdentifier.Setup`](/game-api/types/alta-crafting/nailidentifier#m-setup), [`NailSettings.CalculateNailDamage`](/game-api/types/alta-crafting/nailsettings#m-calculatenaildamage), [`NailSettings.SetupNails`](/game-api/types/alta-crafting/nailsettings#m-setupnails).
