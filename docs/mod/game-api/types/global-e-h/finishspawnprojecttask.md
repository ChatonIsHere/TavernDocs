---
title: "FinishSpawnProjectTask"
description: "Game task action that counts finishing a spawn project for one target prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FinishSpawnProjectTask

A **class** in `Root.Township`, the global namespace.

Game task action that counts finishing a spawn project for one target prefab. Asset made from the Game Tasks menu.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`CustomArgumentGameAction<FinishSpawnProjectTaskArgument>`](/mod/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FinishSpawnProjectTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawningtarget" /><code>{"private uint spawningTarget"}</code> | <span className="api-desc">Prefab hash the spawned object must match.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Listens on `GameActionChannel.FinishRepair`, the same channel as repair tasks.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-e-h/finishspawnprojecttaskargument">{"FinishSpawnProjectTaskArgument"}</Link>{" argument)"}</code> | <span className="api-desc">True when the finished project spawned the prefab with hash `spawningTarget`.</span> |
