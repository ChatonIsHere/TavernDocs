---
title: "QuickDrawApplication"
description: "Server-side quick draw trigger on one item: pulling the tool out of a valid dock charges it, and a good enough hit within the time limit fires the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickDrawApplication

A **class** in `Root.Township`, `Alta.Enchantments`.

Server-side quick draw trigger on one item: pulling the tool out of a valid dock charges it, and a good enough hit within the time limit fires the enchantment's effects.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentTriggerApplication<QuickDrawTrigger>`](/mod/game-api/types/alta-crafting/enchantmenttriggerapplication-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickDrawApplication("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, "}<Link to="/mod/game-api/types/alta-crafting/quickdrawtrigger">{"QuickDrawTrigger"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `QuickDrawApplication` from `enchantment` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">Timeline entry for the pending timeout.</span> |
| <Link id="m-nextcharge" /><code>{"private TimeSpan nextCharge"}</code> | <span className="api-desc">Game time before which the trigger can't charge again.</span> |
| <Link id="m-tool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool"}</code> | <span className="api-desc">The item's impact tool, from the entity or a parent.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyinternal" /><code>{"protected override void ApplyInternal()"}</code> | <span className="api-desc">Listens for the item being undocked, if it has an impact tool.</span> |
| <Link id="m-removeinternal" /><code>{"protected override void RemoveInternal()"}</code> | <span className="api-desc">Stops listening for undocks.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private void Cancel()"}</code> | <span className="api-desc">Fires the cancelled events and uncharges when the time to hit runs out.</span> |
| <Link id="m-charge" /><code>{"private void Charge("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On undock by a player from a valid dock, after the cooldown: listens for hits, fires the charged events and starts the timeout.</span> |
| <Link id="m-execute" /><code>{"private void Execute()"}</code> | <span className="api-desc">Fires the executed events; uncharges if the trigger is one hit only.</span> |
| <Link id="m-proc" /><code>{"private void Proc("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Invokes the effects with the hit, runs `Execute` and starts the cooldown.</span> |
| <Link id="m-uncharge" /><code>{"private void Uncharge()"}</code> | <span className="api-desc">Cancels the timeout and stops listening for hits.</span> |
| <Link id="m-validatehit" /><code>{"private void ValidateHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Procs when a hit's effectiveness is above the trigger's minimum.</span> |

</details>
