---
title: "BaseImpactChannelProgressionFilter"
description: "Base for ScriptableObjects that turn impact hits on one impact channel into progression experience."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseImpactChannelProgressionFilter

An **abstract class** in `Root.Township`, no namespace.

Base for ScriptableObjects that turn impact hits on one impact channel into progression experience. `ProgressionSettings` maps each channel to one; subclasses include `ImpactChannelProgressionFilter` and `CombatImpactProgressionFilter`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CombatImpactProgressionFilter`](/game-api/types/global-c-d/combatimpactprogressionfilter), [`ImpactChannelProgressionFilter`](/game-api/types/global-i-l/impactchannelprogressionfilter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BaseImpactChannelProgressionFilter()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" channel"}</code> | Backing field for `Channel`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" Channel { get; }"}</code> | The impact channel this filter handles. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyimpact" /><code>{"abstract void ApplyImpact("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, bool isGettingExperience, out "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Implemented by subclasses: handles a hit on this channel, gives experience if asked, and returns the progression path. |
| <Link id="m-gainexperience" /><code>{"protected void GainExperience("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | If a player made the hit, gives them damage experience on the path based on hit effectiveness. |

## Used in

Members of other types that take, return or hold a `BaseImpactChannelProgressionFilter`:

[`ProgressionSettings.impactChannel`](/game-api/types/global-p/progressionsettings#m-impactchannel), [`ProgressionSettings.pathImpactChannelMap`](/game-api/types/global-p/progressionsettings#m-pathimpactchannelmap).
