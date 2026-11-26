---
title: "CraftingOptions"
description: "A possible connection between two crafting parts the local player is holding together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingOptions

A **class** in `Root.Township`, `Alta.Crafting`.

A possible connection between two crafting parts the local player is holding together. It finds free slots that fit the insert, shows glow and guide lines, and requests the craft when the insert part is let go.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private CraftingOptions("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slotPart)"}</code> |

</details>

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bestmatch" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" bestMatch"}</code> | The slot the insert would go into right now. |
| <Link id="m-craftvisualupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" craftVisualUpdate"}</code> | Handle for the registered late update. |
| <Link id="m-insert" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" insert"}</code> | The joint insert being placed. |
| <Link id="m-insertpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart"}</code> | The part with the free insert. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumallowedcraftdistance" /><code>{"private const float MaximumAllowedCraftDistance"}</code> | 0.1 m. Not used; the best-match check has the same distance written in directly. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | The player doing the craft. |
| <Link id="m-possibleslotpools" /><code>{"private static Stack<HashSet<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{">> possibleSlotPools"}</code> | Pool of reused slot sets, so options don't allocate each time. |
| <Link id="m-possibleslots" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> possibleSlots"}</code> | Free slots that the insert could go into. |
| <Link id="m-slotpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slotPart"}</code> | The part that has the slots. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static bool Create("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" primaryCraftingPart, "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" secondaryCraftingPart)"}</code> | Starts a crafting option when exactly one of the two parts has a free insert. Returns false otherwise. |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Unhooks the release events, clears both parts' `PotentialConnection` and hides the visuals. |
| <Link id="m-involves" /><code>{"bool Involves("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | True if the part is either side of this option. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptcraft" /><code>{"private void AttemptCraft("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Runs when the insert part is released. Requests the craft if both parts can still craft, otherwise cleans up. |
| <Link id="m-cancel" /><code>{"private void Cancel("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Runs when the slot part is released. Cleans up without crafting. |
| <Link id="m-compilepossibilities" /><code>{"private void CompilePossibilities("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Walks the slot part and every part connected to it, collecting free slots that support the insert's type. |
| <Link id="m-evaluatebestmatch" /><code>{"private void EvaluateBestMatch()"}</code> | Picks the free slot closest to the insert (along its insert length), within 0.1 m. |
| <Link id="m-hidecraftvisuals" /><code>{"private void HideCraftVisuals()"}</code> | Client: turns off glow and guide lines and stops the visual update. |
| <Link id="m-requestcraft" /><code>{"private void RequestCraft("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Finds the best slot, cleans up, then asks the insert part to craft into that slot. |
| <Link id="m-showcraftvisuals" /><code>{"private void ShowCraftVisuals()"}</code> | Client: makes the insert and possible slots glow, draws guide lines and starts updating them every late update. |
| <Link id="m-updatecraftvisuals" /><code>{"private void UpdateCraftVisuals()"}</code> | Late update while showing: re-picks the best slot and moves the highlighted line if it changed. |

</details>

## Used in

Members of other types that take, return or hold a `CraftingOptions`:

[`CraftingPart.PotentialConnection`](/game-api/types/alta-crafting/craftingpart#m-potentialconnection).
