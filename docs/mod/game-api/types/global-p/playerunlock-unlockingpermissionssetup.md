---
title: "PlayerUnlock.UnlockingPermissionsSetup"
description: "What a PlayerUnlock changes while active: optional teleport and climb layer overrides and an optional bump to a max stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlock.UnlockingPermissionsSetup

A **class** in `Root.Township`, the global namespace.

What a `PlayerUnlock` changes while active: optional teleport and climb layer overrides and an optional bump to a max stat.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerUnlock`](/mod/game-api/types/global-p/playerunlock)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnlockingPermissionsSetup()"}</code> | <span className="api-desc">Creates a `PlayerUnlock.UnlockingPermissionsSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-climblayer" /><code>{"private LayerMask climbLayer"}</code> | <span className="api-desc">Backing field for `Climb`.</span> |
| <Link id="m-overrideclimb" /><code>{"private bool overrideClimb"}</code> | <span className="api-desc">Backing field for `OverrideClimb`.</span> |
| <Link id="m-overrideteleport" /><code>{"private bool overrideTeleport"}</code> | <span className="api-desc">Backing field for `OverrideTeleport`.</span> |
| <Link id="m-shouldmodifymaxstat" /><code>{"private bool shouldModifyMaxStat"}</code> | <span className="api-desc">Backing field for `ShouldModifyStat`.</span> |
| <Link id="m-stattomodify" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/maxstatdefinition">{"MaxStatDefinition"}</Link>{" statToModify"}</code> | <span className="api-desc">Backing field for `StatToModify`.</span> |
| <Link id="m-teleportlayer" /><code>{"private LayerMask teleportLayer"}</code> | <span className="api-desc">Backing field for `Teleport`.</span> |
| <Link id="m-valuetoaddtomaxstat" /><code>{"private float valueToAddToMaxStat"}</code> | <span className="api-desc">Backing field for `ValueToAddToMaxStat`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-climb" /><code>{"LayerMask Climb { get; }"}</code> | <span className="api-desc">Layers the player may climb when `OverrideClimb` is set.</span> |
| <Link id="m-overrideclimb-2" /><code>{"bool OverrideClimb { get; }"}</code> | <span className="api-desc">If true, `ClimbingHandler` uses `Climb` instead of the normal climbable layers.</span> |
| <Link id="m-overrideteleport-2" /><code>{"bool OverrideTeleport { get; }"}</code> | <span className="api-desc">If true, the unlock overrides which layers the player can teleport onto, using `Teleport`.</span> |
| <Link id="m-shouldmodifystat" /><code>{"bool ShouldModifyStat { get; }"}</code> | <span className="api-desc">If true, applying the unlock raises `StatToModify` by `ValueToAddToMaxStat`, and removing it lowers it again.</span> |
| <Link id="m-stattomodify-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/maxstatdefinition">{"MaxStatDefinition"}</Link>{" StatToModify { get; }"}</code> | <span className="api-desc">Max stat changed when `ShouldModifyStat` is set.</span> |
| <Link id="m-teleport" /><code>{"LayerMask Teleport { get; }"}</code> | <span className="api-desc">Layers the player may teleport onto when `OverrideTeleport` is set.</span> |
| <Link id="m-valuetoaddtomaxstat-2" /><code>{"float ValueToAddToMaxStat { get; }"}</code> | <span className="api-desc">Amount added to both the stat's maximum and its base value.</span> |

## Used in

Members of other types that take, return or hold a `UnlockingPermissionsSetup`:

<div className="api-used-in">

[`PlayerUnlock.unlockingPermissions`](/mod/game-api/types/global-p/playerunlock#m-unlockingpermissions), [`PlayerUnlock.UnlockingPermissions`](/mod/game-api/types/global-p/playerunlock#m-unlockingpermissions-2).

</div>
