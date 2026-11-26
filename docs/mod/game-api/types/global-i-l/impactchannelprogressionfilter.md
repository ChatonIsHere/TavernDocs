---
title: "ImpactChannelProgressionFilter"
description: "Progression filter that sends experience from matching impact hits to one fixed progression path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactChannelProgressionFilter

A **class** in `Root.Township`, the global namespace.

Progression filter that sends experience from matching impact hits to one fixed progression path.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`BaseImpactChannelProgressionFilter`](/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter)
- **Derived types** [`ImpactChannelProgressionFilter.Create`](/mod/game-api/types/global-i-l/impactchannelprogressionfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-i-l/impactchannelprogressionfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactChannelProgressionFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | The progression path the experience goes to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyimpact" /><code>{"override void ApplyImpact("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Outputs the set path and gives experience on it if asked. |
