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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SummonActionItemQuickAccess()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ignoredefaultsfx" /><code>{"private bool ignoreDefaultSfx"}</code> | Backing field for `IgnoreDefaultSfx`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ignoredefaultsfx-2" /><code>{"override bool IgnoreDefaultSfx { get; }"}</code> | Skips the menu's default sound when set. |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Whether this item is currently summoned for the local player. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | False while the local player is downed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles the item for the controller's player, or the local player if there is no controller. |

## Used in

Members of other types that take, return or hold a `SummonActionItemQuickAccess`:

[`ActionItemData.action`](/game-api/types/alta-player/actionitemdata#m-action), [`ActionItemData.Action`](/game-api/types/alta-player/actionitemdata#m-action-2), [`ActionItemsManager.ItemIsActiveForLocalPlayer`](/game-api/types/alta-player/actionitemsmanager#m-itemisactiveforlocalplayer), [`ActionItemsManager.TryGetActionIndex`](/game-api/types/alta-player/actionitemsmanager#m-trygetactionindex), [`ActionItemsManager.UpdateActionItemStatusForPlayer`](/game-api/types/alta-player/actionitemsmanager#m-updateactionitemstatusforplayer).
