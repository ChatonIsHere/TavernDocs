---
title: "CombatImpactProgressionFilter"
description: "Progression filter that gives combat experience for hitting a combatant: melee if the weapon was held, ranged if it was thrown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatImpactProgressionFilter

A **class** in `Root.Township`, the global namespace.

Progression filter that gives combat experience for hitting a combatant: melee if the weapon was held, ranged if it was thrown.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`BaseImpactChannelProgressionFilter`](/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter)
- **Derived types** [`CombatImpactProgressionFilter.Create`](/mod/game-api/types/global-c-d/combatimpactprogressionfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/combatimpactprogressionfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatImpactProgressionFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyimpact" /><code>{"override void ApplyImpact("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">On a tool hit on a combatant, gives Melee XP when held or Ranged XP when not. The path defaults to Melee.</span> |
