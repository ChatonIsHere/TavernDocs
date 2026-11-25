---
title: "JointInsert"
description: "class JointInsert in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointInsert

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`JointPoint`](/game-api/types/alta-crafting/jointpoint)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointInsert()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-insertlength" /><code>{"private Vector3 insertLength"}</code> |  |
| <Link id="m-isshowinglines" /><code>{"private bool isShowingLines"}</code> |  |
| <Link id="m-linesplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" linesPlayer"}</code> |  |
| <Link id="m-particlespool" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{", "}<Link to="/game-api/types/global-s/splineparticlespooled">{"SplineParticlesPooled"}</Link>{"> particlesPool"}</code> |  |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/global-p/pickuptypesettings">{"PickupTypeSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" type"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedslot" /><code><Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" ConnectedSlot { get; set; }"}</code> |  |
| <Link id="m-generaltypes" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> |  |
| <Link id="m-insertlength-2" /><code>{"Vector3 InsertLength { get; }"}</code> |  |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-crafting/jointinserttype">{"JointInsertType"}</Link>{" Type { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hidelines" /><code>{"void HideLines()"}</code> |  |
| <Link id="m-showlines" /><code>{"void ShowLines(HashSet<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> slots, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" active)"}</code> |  |
| <Link id="m-swaplines" /><code>{"void SwapLines("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" previousBest, "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" newBest)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"protected override void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-tryadd" /><code>{"private void TryAdd(List<GameObject> list, params string[] names)"}</code> |  |

## Used in

Members of other types that take, return or hold a `JointInsert`:

[`CraftingOptions.insert`](/game-api/types/alta-crafting/craftingoptions#m-insert), [`CraftingPart.insert`](/game-api/types/alta-crafting/craftingpart#m-insert), [`CraftingPart.Insert`](/game-api/types/alta-crafting/craftingpart#m-insert-2), [`MainMenuCraft.insert`](/game-api/types/global-m-o/mainmenucraft#m-insert).
