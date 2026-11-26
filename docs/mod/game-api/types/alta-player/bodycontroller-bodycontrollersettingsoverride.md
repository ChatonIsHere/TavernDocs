---
title: "BodyController.BodyControllerSettingsOverride"
description: "A temporary BodyControllerSettings override on a BodyController, kept while a check returns true."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BodyController.BodyControllerSettingsOverride

A **private class** in `Root.Township`, `Alta.Character`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A temporary `BodyControllerSettings` override on a `BodyController`, kept while a check returns true. Added with `AddOverrideSetting`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`BodyController`](/mod/game-api/types/alta-player/bodycontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BodyControllerSettingsOverride("}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings, Func<bool> relevantCheck)"}</code> | <span className="api-desc">Creates a `BodyController.BodyControllerSettingsOverride` from `settings` and `relevantCheck`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-relevantcheck" /><code>{"private Func<bool> relevantCheck"}</code> | <span className="api-desc">The function that says whether the override still applies.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrelevant" /><code>{"bool IsRelevant { get; }"}</code> | <span className="api-desc">Runs the check. Once it returns false, `BodyController.Settings` drops this override.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" Settings { get; private set; }"}</code> | <span className="api-desc">The settings to use while the override is relevant.</span> |

## Used in

Members of other types that take, return or hold a `BodyControllerSettingsOverride`:

<div className="api-used-in">

[`BodyController.activeSettings`](/mod/game-api/types/alta-player/bodycontroller#m-activesettings).

</div>
