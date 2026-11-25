---
title: "CraftingOptions"
description: "class CraftingOptions in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingOptions

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private CraftingOptions("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slotPart)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bestmatch" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" bestMatch"}</code> |  |
| <Link id="m-craftvisualupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" craftVisualUpdate"}</code> |  |
| <Link id="m-insert" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" insert"}</code> |  |
| <Link id="m-insertpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-maximumallowedcraftdistance" /><code>{"private const float MaximumAllowedCraftDistance"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |  |
| <Link id="m-possibleslotpools" /><code>{"private static Stack<HashSet<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{">> possibleSlotPools"}</code> |  |
| <Link id="m-possibleslots" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> possibleSlots"}</code> |  |
| <Link id="m-slotpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slotPart"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static bool Create("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" primaryCraftingPart, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" secondaryCraftingPart)"}</code> |  |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> |  |
| <Link id="m-involves" /><code>{"bool Involves("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |  |
| <Link id="m-attemptcraft" /><code>{"private void AttemptCraft("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-cancel" /><code>{"private void Cancel("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-compilepossibilities" /><code>{"private void CompilePossibilities("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |  |
| <Link id="m-evaluatebestmatch" /><code>{"private void EvaluateBestMatch()"}</code> |  |
| <Link id="m-hidecraftvisuals" /><code>{"private void HideCraftVisuals()"}</code> |  |
| <Link id="m-requestcraft" /><code>{"private void RequestCraft("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-showcraftvisuals" /><code>{"private void ShowCraftVisuals()"}</code> |  |
| <Link id="m-updatecraftvisuals" /><code>{"private void UpdateCraftVisuals()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CraftingOptions`:

[`CraftingPart.PotentialConnection`](/game-api/types/alta-crafting/craftingpart#m-potentialconnection).
