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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentModeQuickAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | <span className="api-desc">Whether a playing/equipment transition was available at the last check.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True while the player is in the equipment state.</span> |
| <Link id="m-isvalid-2" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">True if a playing/equipment transition is available and the player isn't downed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> | <span className="api-desc">Stops watching player state changes.</span> |
| <Link id="m-open" /><code>{"override void Open()"}</code> | <span className="api-desc">Watches player state changes and checks whether a switch is possible.</span> |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Triggers the switch into or out of equipment mode.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatestate" /><code>{"private void UpdateState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">On a state change, rechecks whether a switch is possible and refreshes the bubble.</span> |

</details>
