---
title: "FinishSpawnProjectTask"
description: "Game task action that counts finishing a spawn project for one target prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FinishSpawnProjectTask

A **class** in `Root.Township`, no namespace.

Game task action that counts finishing a spawn project for one target prefab. Asset made from the Game Tasks menu.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`CustomArgumentGameAction<FinishSpawnProjectTaskArgument>`](/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FinishSpawnProjectTask()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawningtarget" /><code>{"private uint spawningTarget"}</code> | Prefab hash the spawned object must match. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Listens on `GameActionChannel.FinishRepair`, the same channel as repair tasks. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-e-h/finishspawnprojecttaskargument">{"FinishSpawnProjectTaskArgument"}</Link>{" argument)"}</code> | True when the finished project spawned the prefab with hash `spawningTarget`. |
