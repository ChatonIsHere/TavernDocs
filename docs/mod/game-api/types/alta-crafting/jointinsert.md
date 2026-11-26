---
title: "JointInsert"
description: "The plug end of a crafting part that goes into another part's JointSlot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointInsert

A **class** in `Root.Township`, `Alta.Crafting`.

The plug end of a crafting part that goes into another part's `JointSlot`. Also draws the guide lines to nearby slots while the player holds the part (client only).

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPoint`](/mod/game-api/types/alta-crafting/jointpoint)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointInsert()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insertlength" /><code>{"private Vector3 insertLength"}</code> | <span className="api-desc">Backing field for `InsertLength`.</span> |
| <Link id="m-isshowinglines" /><code>{"private bool isShowingLines"}</code> | <span className="api-desc">True while guide lines to slots are shown.</span> |
| <Link id="m-linesplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" linesPlayer"}</code> | <span className="api-desc">Player the guide lines are shown for.</span> |
| <Link id="m-particlespool" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{", "}<Link to="/mod/game-api/types/global-s/splineparticlespooled">{"SplineParticlesPooled"}</Link>{"> particlesPool"}</code> | <span className="api-desc">Pooled spline particles drawing a line to each slot.</span> |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/global-p/pickuptypesettings">{"PickupTypeSettings"}</Link>{" settings"}</code> | <span className="api-desc">Shared `PickupTypeSettings` (line pool and colours).</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedslot" /><code><Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" ConnectedSlot { get; set; }"}</code> | <span className="api-desc">The slot this insert is plugged into, or null. Set by `JointSlot` when connecting and disconnecting.</span> |
| <Link id="m-generaltypes" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> | <span className="api-desc">The insert's joint type, as a one-item list, for slot matching.</span> |
| <Link id="m-insertlength-2" /><code>{"Vector3 InsertLength { get; }"}</code> | <span className="api-desc">Local offset for how far the insert reaches into a slot. Used by `CraftingOptions` when it is non-zero.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The insert type that decides which slots it fits.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hidelines" /><code>{"void HideLines()"}</code> | <span className="api-desc">Client: releases all guide lines.</span> |
| <Link id="m-showlines" /><code>{"void ShowLines(HashSet<"}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> slots, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" active)"}</code> | <span className="api-desc">Client: draws a glowing line from each candidate slot to this insert, highlighting the active one.</span> |
| <Link id="m-swaplines" /><code>{"void SwapLines("}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" previousBest, "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" newBest)"}</code> | <span className="api-desc">Client: moves the active highlight from the previous best slot to the new one.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"protected override void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the insert length as a yellow line.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: renames the GameObject to match the insert type.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches the global `PickupTypeSettings` used for line colours.</span> |
| <Link id="m-tryadd" /><code>{"private void TryAdd(List<GameObject> list, params string[] names)"}</code> | <span className="api-desc">Adds named children of the crafting part to a list if found. Not called in this build.</span> |

</details>

## Used in

Members of other types that take, return or hold a `JointInsert`:

<div className="api-used-in">

[`CraftingOptions.insert`](/mod/game-api/types/alta-crafting/craftingoptions#m-insert), [`CraftingPart.insert`](/mod/game-api/types/alta-crafting/craftingpart#m-insert), [`CraftingPart.Insert`](/mod/game-api/types/alta-crafting/craftingpart#m-insert-2), [`MainMenuCraft.insert`](/mod/game-api/types/global-m-o/mainmenucraft#m-insert).

</div>
