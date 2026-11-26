---
title: "ArrowFlightSettingsDevianceMultiplierModifier"
description: "Arrow flight modifier asset that only changes the deviance multiplier (how far an arrow strays)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettingsDevianceMultiplierModifier

A **class** in `Root.Township`, the global namespace.

Arrow flight modifier asset that only changes the deviance multiplier (how far an arrow strays).

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`ArrowFlightSettingsModifier`](/mod/game-api/types/global-a-b/arrowflightsettingsmodifier)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArrowFlightSettingsDevianceMultiplierModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deviancemultiplier" /><code>{"private float devianceMultiplier"}</code> | <span className="api-desc">Backing field for `DevianceMultiplier` (1 by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviancemultiplier-2" /><code>{"override float DevianceMultiplier { get; }"}</code> | <span className="api-desc">Multiplier applied to the arrow's flight deviance.</span> |
