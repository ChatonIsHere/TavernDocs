---
title: "ArrowFlightSettingsDevianceMultiplierModifier"
description: "Arrow flight modifier asset that only changes the deviance multiplier (how far an arrow strays)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettingsDevianceMultiplierModifier

A **class** in `Root.Township`, no namespace.

Arrow flight modifier asset that only changes the deviance multiplier (how far an arrow strays).

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`ArrowFlightSettingsModifier`](/game-api/types/global-a-b/arrowflightsettingsmodifier)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ArrowFlightSettingsDevianceMultiplierModifier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deviancemultiplier" /><code>{"private float devianceMultiplier"}</code> | Backing field for `DevianceMultiplier` (1 by default). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviancemultiplier-2" /><code>{"override float DevianceMultiplier { get; }"}</code> | Multiplier applied to the arrow's flight deviance. |
