---
title: "SummonActionItemQuickAccess"
description: "Quick access menu action that summons or dismisses an action item for the player through ActionItemsManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SummonActionItemQuickAccess

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access menu action that summons or dismisses an action item for the player through `ActionItemsManager`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SummonActionItemQuickAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ignoredefaultsfx" /><code>{"private bool ignoreDefaultSfx"}</code> | <span className="api-desc">Backing field for `IgnoreDefaultSfx`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ignoredefaultsfx-2" /><code>{"override bool IgnoreDefaultSfx { get; }"}</code> | <span className="api-desc">Skips the menu's default sound when set.</span> |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Whether this item is currently summoned for the local player.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">False while the local player is downed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Toggles the item for the controller's player, or the local player if there is no controller.</span> |

## Used in

Members of other types that take, return or hold a `SummonActionItemQuickAccess`:

<div className="api-used-in">

[`ActionItemData.action`](/mod/game-api/types/alta-player/actionitemdata#m-action), [`ActionItemData.Action`](/mod/game-api/types/alta-player/actionitemdata#m-action-2), [`ActionItemsManager.ItemIsActiveForLocalPlayer`](/mod/game-api/types/alta-player/actionitemsmanager#m-itemisactiveforlocalplayer), [`ActionItemsManager.TryGetActionIndex`](/mod/game-api/types/alta-player/actionitemsmanager#m-trygetactionindex), [`ActionItemsManager.UpdateActionItemStatusForPlayer`](/mod/game-api/types/alta-player/actionitemsmanager#m-updateactionitemstatusforplayer).

</div>
