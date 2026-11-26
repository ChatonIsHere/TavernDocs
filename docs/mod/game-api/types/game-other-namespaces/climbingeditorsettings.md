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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingEditorSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagejumpdistance" /><code>{"private float averageJumpDistance"}</code> | <span className="api-desc">Backing field for `AverageJumpDistance`.</span> |
| <Link id="m-maxarmspan" /><code>{"private float maxArmSpan"}</code> | <span className="api-desc">Backing field for `MaxArmSpan`.</span> |
| <Link id="m-maximumjumpdistance" /><code>{"private float maximumJumpDistance"}</code> | <span className="api-desc">Backing field for `MaximumJumpDistance`.</span> |
| <Link id="m-staminaconsumedbydistance" /><code>{"private float staminaConsumedByDistance"}</code> | <span className="api-desc">Backing field for `StaminaConsumedByDistance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-averagejumpdistance-2" /><code>{"float AverageJumpDistance { get; }"}</code> | <span className="api-desc">Read-only access to `averageJumpDistance`.</span> |
| <Link id="m-maxarmspan-2" /><code>{"float MaxArmSpan { get; }"}</code> | <span className="api-desc">Read-only access to `maxArmSpan`.</span> |
| <Link id="m-maximumjumpdistance-2" /><code>{"float MaximumJumpDistance { get; }"}</code> | <span className="api-desc">Read-only access to `maximumJumpDistance`.</span> |
| <Link id="m-staminaconsumedbydistance-2" /><code>{"float StaminaConsumedByDistance { get; }"}</code> | <span className="api-desc">Read-only access to `staminaConsumedByDistance`.</span> |
