---
title: "BaseImpactChannelProgressionFilter"
description: "Base for ScriptableObjects that turn impact hits on one impact channel into progression experience."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseImpactChannelProgressionFilter

An **abstract class** in `Root.Township`, the global namespace.

Base for ScriptableObjects that turn impact hits on one impact channel into progression experience. `ProgressionSettings` maps each channel to one; subclasses include `ImpactChannelProgressionFilter` and `CombatImpactProgressionFilter`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CombatImpactProgressionFilter`](/mod/game-api/types/global-c-d/combatimpactprogressionfilter), [`ImpactChannelProgressionFilter`](/mod/game-api/types/global-i-l/impactchannelprogressionfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BaseImpactChannelProgressionFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel"}</code> | <span className="api-desc">Backing field for `Channel`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">The impact channel this filter handles.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyimpact" /><code>{"abstract void ApplyImpact("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Implemented by subclasses: handles a hit on this channel, gives experience if asked, and returns the progression path.</span> |
| <Link id="m-gainexperience" /><code>{"protected void GainExperience("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">If a player made the hit, gives them damage experience on the path based on hit effectiveness.</span> |

## Used in

Members of other types that take, return or hold a `BaseImpactChannelProgressionFilter`:

<div className="api-used-in">

[`ProgressionSettings.impactChannel`](/mod/game-api/types/global-p/progressionsettings#m-impactchannel), [`ProgressionSettings.pathImpactChannelMap`](/mod/game-api/types/global-p/progressionsettings#m-pathimpactchannelmap).

</div>
