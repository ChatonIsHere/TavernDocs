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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private CraftingOptions("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart, "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slotPart)"}</code> | <span className="api-desc">Creates a `CraftingOptions` from `player`, `insertPart` and `slotPart`.</span> |

</details>

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bestmatch" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" bestMatch"}</code> | <span className="api-desc">The slot the insert would go into right now.</span> |
| <Link id="m-craftvisualupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" craftVisualUpdate"}</code> | <span className="api-desc">Handle for the registered late update.</span> |
| <Link id="m-insert" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" insert"}</code> | <span className="api-desc">The joint insert being placed.</span> |
| <Link id="m-insertpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" insertPart"}</code> | <span className="api-desc">The part with the free insert.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumallowedcraftdistance" /><code>{"private const float MaximumAllowedCraftDistance"}</code> | <span className="api-desc">0.1 m. Not used; the best-match check has the same distance written in directly.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">The player doing the craft.</span> |
| <Link id="m-possibleslotpools" /><code>{"private static Stack<HashSet<"}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{">> possibleSlotPools"}</code> | <span className="api-desc">Pool of reused slot sets, so options don't allocate each time.</span> |
| <Link id="m-possibleslots" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{"> possibleSlots"}</code> | <span className="api-desc">Free slots that the insert could go into.</span> |
| <Link id="m-slotpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slotPart"}</code> | <span className="api-desc">The part that has the slots.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static bool Create("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" primaryCraftingPart, "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" secondaryCraftingPart)"}</code> | <span className="api-desc">Starts a crafting option when exactly one of the two parts has a free insert. Returns false otherwise.</span> |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Unhooks the release events, clears both parts' `PotentialConnection` and hides the visuals.</span> |
| <Link id="m-involves" /><code>{"bool Involves("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">True if the part is either side of this option.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptcraft" /><code>{"private void AttemptCraft("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Runs when the insert part is released. Requests the craft if both parts can still craft, otherwise cleans up.</span> |
| <Link id="m-cancel" /><code>{"private void Cancel("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Runs when the slot part is released. Cleans up without crafting.</span> |
| <Link id="m-compilepossibilities" /><code>{"private void CompilePossibilities("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">Walks the slot part and every part connected to it, collecting free slots that support the insert's type.</span> |
| <Link id="m-evaluatebestmatch" /><code>{"private void EvaluateBestMatch()"}</code> | <span className="api-desc">Picks the free slot closest to the insert (along its insert length), within 0.1 m.</span> |
| <Link id="m-hidecraftvisuals" /><code>{"private void HideCraftVisuals()"}</code> | <span className="api-desc">Client: turns off glow and guide lines and stops the visual update.</span> |
| <Link id="m-requestcraft" /><code>{"private void RequestCraft("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dropped, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Finds the best slot, cleans up, then asks the insert part to craft into that slot.</span> |
| <Link id="m-showcraftvisuals" /><code>{"private void ShowCraftVisuals()"}</code> | <span className="api-desc">Client: makes the insert and possible slots glow, draws guide lines and starts updating them every late update.</span> |
| <Link id="m-updatecraftvisuals" /><code>{"private void UpdateCraftVisuals()"}</code> | <span className="api-desc">Late update while showing: re-picks the best slot and moves the highlighted line if it changed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CraftingOptions`:

<div className="api-used-in">

[`CraftingPart.PotentialConnection`](/mod/game-api/types/alta-crafting/craftingpart#m-potentialconnection).

</div>
