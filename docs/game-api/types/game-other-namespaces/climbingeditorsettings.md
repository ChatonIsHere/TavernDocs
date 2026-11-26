---
title: "ClimbingEditorSettings"
description: "A ScriptableObject holding climbing tuning values (jump distances, stamina per distance, arm span)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingEditorSettings

A **class** in `Root.Township`, `Township.Climbing`.

A ScriptableObject holding climbing tuning values (jump distances, stamina per distance, arm span). Nothing in the server code reads it, so it is probably editor tooling.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingEditorSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagejumpdistance" /><code>{"private float averageJumpDistance"}</code> | Backing field for `AverageJumpDistance`. |
| <Link id="m-maxarmspan" /><code>{"private float maxArmSpan"}</code> | Backing field for `MaxArmSpan`. |
| <Link id="m-maximumjumpdistance" /><code>{"private float maximumJumpDistance"}</code> | Backing field for `MaximumJumpDistance`. |
| <Link id="m-staminaconsumedbydistance" /><code>{"private float staminaConsumedByDistance"}</code> | Backing field for `StaminaConsumedByDistance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-averagejumpdistance-2" /><code>{"float AverageJumpDistance { get; }"}</code> | Read-only access to `averageJumpDistance`. |
| <Link id="m-maxarmspan-2" /><code>{"float MaxArmSpan { get; }"}</code> | Read-only access to `maxArmSpan`. |
| <Link id="m-maximumjumpdistance-2" /><code>{"float MaximumJumpDistance { get; }"}</code> | Read-only access to `maximumJumpDistance`. |
| <Link id="m-staminaconsumedbydistance-2" /><code>{"float StaminaConsumedByDistance { get; }"}</code> | Read-only access to `staminaConsumedByDistance`. |
