---
title: "MaxStatDefinition"
description: "Its Base becomes the Maximum of other stats (applied a frame later through AltaCoroutine.DelayCall, and again on death reset)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxStatDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

Its `Base` becomes the `Maximum` of other stats (applied a frame later through `AltaCoroutine.DelayCall`, and again on death reset).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`MaxStatDefinition.Create`](/game-api/types/alta-stats-effects/maxstatdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/maxstatdefinition-create)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxStatDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controldefinitions" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] controlDefinitions"}</code> |  |
| <Link id="m-endofframebuffer" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> endOfFrameBuffer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-isvalidformanager" /><code>{"private bool IsValidForManager("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-onreset" /><code>{"private void OnReset("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-processchangebuffer" /><code>{"private static void ProcessChangeBuffer()"}</code> |  |
| <Link id="m-updatemanager" /><code>{"private static void UpdateManager("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MaxStatDefinition`:

[`PlayerUnlock.UnlockingPermissionsSetup.statToModify`](/game-api/types/global-p/playerunlock-unlockingpermissionssetup#m-stattomodify), [`PlayerUnlock.UnlockingPermissionsSetup.StatToModify`](/game-api/types/global-p/playerunlock-unlockingpermissionssetup#m-stattomodify-2).
