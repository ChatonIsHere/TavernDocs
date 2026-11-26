---
title: "LocomotionModifierVolumeTrigger"
description: "Volume trigger that applies a LocomotionModifierCheck to players while they are inside it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionModifierVolumeTrigger

A **class** in `Root.Township`, the global namespace.

Volume trigger that applies a `LocomotionModifierCheck` to players while they are inside it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`VolumeTrigger`](/mod/game-api/types/global-t-x/volumetrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocomotionModifierVolumeTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifiercheck">{"LocomotionModifierCheck"}</Link>{" check"}</code> | The locomotion modifier to apply. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforplayer" /><code>{"override bool IsCheckingForPlayer { get; }"}</code> | Always true; this volume reacts to players. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playerentered" /><code>{"protected override void PlayerEntered("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Applies the check to the entering player. |
| <Link id="m-playerleft" /><code>{"protected override void PlayerLeft("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Removes the check from the leaving player. |
