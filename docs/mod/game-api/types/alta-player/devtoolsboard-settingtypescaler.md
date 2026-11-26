---
title: "DevToolsBoard.SettingTypeScaler"
description: "Private: a scale factor for controls of one setting type on the dev tools board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevToolsBoard.SettingTypeScaler

A **private struct** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: a scale factor for controls of one setting type on the dev tools board.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`DevToolsBoard`](/mod/game-api/types/alta-player/devtoolsboard)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-scaler" /><code>{"float scaler"}</code> | <span className="api-desc">Multiplier applied to the control's local scale.</span> |
| <Link id="m-settingtype" /><code><Link to="/mod/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" settingType"}</code> | <span className="api-desc">Setting type the scale applies to.</span> |

## Used in

Members of other types that take, return or hold a `SettingTypeScaler`:

<div className="api-used-in">

[`DevToolsBoard.settingTypeScalers`](/mod/game-api/types/alta-player/devtoolsboard#m-settingtypescalers).

</div>
