---
title: "QuickDrawApplication"
description: "class QuickDrawApplication in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickDrawApplication

A **class** in `Root.Township`, `Alta.Enchantments`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`EnchantmentTriggerApplication<QuickDrawTrigger>`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickDrawApplication("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" enchantment, "}<Link to="/game-api/types/alta-crafting/quickdrawtrigger">{"QuickDrawTrigger"}</Link>{" settings)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |  |
| <Link id="m-nextcharge" /><code>{"private TimeSpan nextCharge"}</code> |  |
| <Link id="m-tool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyinternal" /><code>{"protected override void ApplyInternal()"}</code> |  |
| <Link id="m-cancel" /><code>{"private void Cancel()"}</code> |  |
| <Link id="m-charge" /><code>{"private void Charge("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-execute" /><code>{"private void Execute()"}</code> |  |
| <Link id="m-proc" /><code>{"private void Proc("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-removeinternal" /><code>{"protected override void RemoveInternal()"}</code> |  |
| <Link id="m-uncharge" /><code>{"private void Uncharge()"}</code> |  |
| <Link id="m-validatehit" /><code>{"private void ValidateHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
