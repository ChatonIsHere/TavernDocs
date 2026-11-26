---
title: "CombatImpactProgressionFilter"
description: "Progression filter that gives combat experience for hitting a combatant: melee if the weapon was held, ranged if it was thrown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatImpactProgressionFilter

A **class** in `Root.Township`, no namespace.

Progression filter that gives combat experience for hitting a combatant: melee if the weapon was held, ranged if it was thrown.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`BaseImpactChannelProgressionFilter`](/game-api/types/global-a-b/baseimpactchannelprogressionfilter)
- **Derived types** [`CombatImpactProgressionFilter.Create`](/game-api/types/global-c-d/combatimpactprogressionfilter-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/combatimpactprogressionfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatImpactProgressionFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyimpact" /><code>{"override void ApplyImpact("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | On a tool hit on a combatant, gives Melee XP when held or Ranged XP when not. The path defaults to Melee. |
