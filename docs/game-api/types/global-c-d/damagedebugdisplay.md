---
title: "DamageDebugDisplay"
description: "class DamageDebugDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDebugDisplay

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DamageHolder`](/game-api/types/global-c-d/damagedebugdisplay-damageholder)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageDebugDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-automaticcleancooldown" /><code>{"private float automaticCleanCooldown"}</code> |  |
| <Link id="m-basetext" /><code>{"private const string baseText"}</code> |  |
| <Link id="m-btnclean" /><code>{"private bool btnClean"}</code> |  |
| <Link id="m-holderpairs" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{", "}<Link to="/game-api/types/global-c-d/damagedebugdisplay-damageholder">{"DamageDebugDisplay.DamageHolder"}</Link>{"> holderPairs"}</code> |  |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |  |
| <Link id="m-targetclean" /><code>{"private float targetClean"}</code> |  |
| <Link id="m-text" /><code>{"private Text text"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattack" /><code>{"static void AddAttack("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, float damage, float followValue, float followMultiplier, float directionValue, float directionMultiplier, float weight, float weightPenaulty, "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" dmgType)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-clean" /><code>{"private void Clean()"}</code> |  |
| <Link id="m-clean-2" /><code>{"private void Clean("}<Link to="/game-api/types/global-c-d/damagedebugdisplay-damageholder">{"DamageDebugDisplay.DamageHolder"}</Link>{" holder)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-togglefpsdisplay" /><code>{"private void ToggleFPSDisplay("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
