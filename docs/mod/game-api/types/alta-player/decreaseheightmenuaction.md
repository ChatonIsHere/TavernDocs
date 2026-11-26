---
title: "DecreaseHeightMenuAction"
description: "Accessibility quick access action that lowers the player's adjusted height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecreaseHeightMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Accessibility quick access action that lowers the player's adjusted height. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DecreaseHeightMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playeradjustableheightfixersettings">{"PlayerAdjustableHeightFixerSettings"}</Link>{" settings"}</code> | The adjustable height settings it changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden unless accessibility features are on and the height can be lowered. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True while the height settings allow lowering. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Lowers the height one step. |
