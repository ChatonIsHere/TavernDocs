---
title: "EquipmentModeQuickAccess"
description: "Quick access action that switches the local player between playing and equipment mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentModeQuickAccess

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access action that switches the local player between playing and equipment mode. Client only.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EquipmentModeQuickAccess()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | Whether a playing/equipment transition was available at the last check. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True while the player is in the equipment state. |
| <Link id="m-isvalid-2" /><code>{"override bool IsValid { get; }"}</code> | True if a playing/equipment transition is available and the player isn't downed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> | Stops watching player state changes. |
| <Link id="m-open" /><code>{"override void Open()"}</code> | Watches player state changes and checks whether a switch is possible. |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Triggers the switch into or out of equipment mode. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatestate" /><code>{"private void UpdateState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | On a state change, rechecks whether a switch is possible and refreshes the bubble. |

</details>
