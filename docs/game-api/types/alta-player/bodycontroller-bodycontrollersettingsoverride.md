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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`BodyController`](/game-api/types/alta-player/bodycontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BodyControllerSettingsOverride("}<Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings, Func<bool> relevantCheck)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-relevantcheck" /><code>{"private Func<bool> relevantCheck"}</code> | The function that says whether the override still applies. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrelevant" /><code>{"bool IsRelevant { get; }"}</code> | Runs the check. Once it returns false, `BodyController.Settings` drops this override. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" Settings { get; private set; }"}</code> | The settings to use while the override is relevant. |

## Used in

Members of other types that take, return or hold a `BodyControllerSettingsOverride`:

[`BodyController.activeSettings`](/game-api/types/alta-player/bodycontroller#m-activesettings).
