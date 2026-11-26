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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPoint`](/game-api/types/alta-crafting/jointpoint)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"JointInsert()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insertlength" /><code>{"private Vector3 insertLength"}</code> | Backing field for `InsertLength`. |
| <Link id="m-isshowinglines" /><code>{"private bool isShowingLines"}</code> | True while guide lines to slots are shown. |
| <Link id="m-linesplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" linesPlayer"}</code> | Player the guide lines are shown for. |
| <Link id="m-particlespool" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{", "}<Link to="/game-api/types/global-s/splineparticlespooled">{"SplineParticlesPooled"}</Link>{"> particlesPool"}</code> | Pooled spline particles drawing a line to each slot. |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/global-p/pickuptypesettings">{"PickupTypeSettings"}</Link>{" settings"}</code> | Shared `PickupTypeSettings` (line pool and colours). |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" type"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedslot" /><code><Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" ConnectedSlot { get; set; }"}</code> | The slot this insert is plugged into, or null. Set by `JointSlot` when connecting and disconnecting. |
| <Link id="m-generaltypes" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> | The insert's joint type, as a one-item list, for slot matching. |
| <Link id="m-insertlength-2" /><code>{"Vector3 InsertLength { get; }"}</code> | Local offset for how far the insert reaches into a slot. Used by `CraftingOptions` when it is non-zero. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" Type { get; }"}</code> | The insert type that decides which slots it fits. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hidelines" /><code>{"void HideLines()"}</code> | Client: releases all guide lines. |
| <Link id="m-showlines" /><code>{"void ShowLines(HashSet<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> slots, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" active)"}</code> | Client: draws a glowing line from each candidate slot to this insert, highlighting the active one. |
| <Link id="m-swaplines" /><code>{"void SwapLines("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" previousBest, "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" newBest)"}</code> | Client: moves the active highlight from the previous best slot to the new one. |
| <Link id="m-ondrawgizmosselected" /><code>{"protected override void OnDrawGizmosSelected()"}</code> | Editor: draws the insert length as a yellow line. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: renames the GameObject to match the insert type. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches the global `PickupTypeSettings` used for line colours. |
| <Link id="m-tryadd" /><code>{"private void TryAdd(List<GameObject> list, params string[] names)"}</code> | Adds named children of the crafting part to a list if found. Not called in this build. |

</details>

## Used in

Members of other types that take, return or hold a `JointInsert`:

[`CraftingOptions.insert`](/game-api/types/alta-crafting/craftingoptions#m-insert), [`CraftingPart.insert`](/game-api/types/alta-crafting/craftingpart#m-insert), [`CraftingPart.Insert`](/game-api/types/alta-crafting/craftingpart#m-insert-2), [`MainMenuCraft.insert`](/game-api/types/global-m-o/mainmenucraft#m-insert).
