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
| <Link id="m-ctor" /><code>{"LocomotionModifierVolumeTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionmodifiercheck">{"LocomotionModifierCheck"}</Link>{" check"}</code> | <span className="api-desc">The locomotion modifier to apply.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforplayer" /><code>{"override bool IsCheckingForPlayer { get; }"}</code> | <span className="api-desc">Always true; this volume reacts to players.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playerentered" /><code>{"protected override void PlayerEntered("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Applies the check to the entering player.</span> |
| <Link id="m-playerleft" /><code>{"protected override void PlayerLeft("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Removes the check from the leaving player.</span> |
