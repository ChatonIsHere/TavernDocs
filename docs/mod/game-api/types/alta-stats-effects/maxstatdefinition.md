---
title: "MaxStatDefinition"
description: "A stat definition whose value sets the maximum of other stats (its control definitions)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxStatDefinition

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat definition whose value sets the maximum of other stats (its control definitions). Changes are batched and applied at the end of the frame.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`MaxStatDefinition.Create`](/mod/game-api/types/alta-stats-effects/maxstatdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/maxstatdefinition-create)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxStatDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controldefinitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] controlDefinitions"}</code> | <span className="api-desc">Stats whose maximum this stat drives.</span> |
| <Link id="m-endofframebuffer" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> endOfFrameBuffer"}</code> | <span className="api-desc">Static queue of changed stats and their managers, waiting to be applied.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">If the manager has any control stat, binds this stat so changes queue an update, and hooks the manager's reset.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidformanager" /><code>{"private bool IsValidForManager("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">True if the manager has at least one of the control stats.</span> |
| <Link id="m-onreset" /><code>{"private void OnReset("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">On a stat manager reset, sets each control stat's maximum and base to this stat's base.</span> |
| <Link id="m-processchangebuffer" /><code>{"private static void ProcessChangeBuffer()"}</code> | <span className="api-desc">Applies every queued change, then clears the buffer. Runs one frame after the first change.</span> |
| <Link id="m-updatemanager" /><code>{"private static void UpdateManager("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Sets the maximum of each control stat in a manager to this stat's base.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MaxStatDefinition`:

<div className="api-used-in">

[`PlayerUnlock.UnlockingPermissionsSetup.statToModify`](/mod/game-api/types/global-p/playerunlock-unlockingpermissionssetup#m-stattomodify), [`PlayerUnlock.UnlockingPermissionsSetup.StatToModify`](/mod/game-api/types/global-p/playerunlock-unlockingpermissionssetup#m-stattomodify-2).

</div>
