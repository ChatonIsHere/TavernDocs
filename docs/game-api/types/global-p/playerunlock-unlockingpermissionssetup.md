---
title: "PlayerUnlock.UnlockingPermissionsSetup"
description: "What a PlayerUnlock changes while active: optional teleport and climb layer overrides and an optional bump to a max stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlock.UnlockingPermissionsSetup

A **class** in `Root.Township`, no namespace.

What a `PlayerUnlock` changes while active: optional teleport and climb layer overrides and an optional bump to a max stat.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerUnlock`](/game-api/types/global-p/playerunlock)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnlockingPermissionsSetup()"}</code> | Creates a `PlayerUnlock.UnlockingPermissionsSetup` with default values. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-climblayer" /><code>{"private LayerMask climbLayer"}</code> | Backing field for `Climb`. |
| <Link id="m-overrideclimb" /><code>{"private bool overrideClimb"}</code> | Backing field for `OverrideClimb`. |
| <Link id="m-overrideteleport" /><code>{"private bool overrideTeleport"}</code> | Backing field for `OverrideTeleport`. |
| <Link id="m-shouldmodifymaxstat" /><code>{"private bool shouldModifyMaxStat"}</code> | Backing field for `ShouldModifyStat`. |
| <Link id="m-stattomodify" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/maxstatdefinition">{"MaxStatDefinition"}</Link>{" statToModify"}</code> | Backing field for `StatToModify`. |
| <Link id="m-teleportlayer" /><code>{"private LayerMask teleportLayer"}</code> | Backing field for `Teleport`. |
| <Link id="m-valuetoaddtomaxstat" /><code>{"private float valueToAddToMaxStat"}</code> | Backing field for `ValueToAddToMaxStat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-climb" /><code>{"LayerMask Climb { get; }"}</code> | Layers the player may climb when `OverrideClimb` is set. |
| <Link id="m-overrideclimb-2" /><code>{"bool OverrideClimb { get; }"}</code> | If true, `ClimbingHandler` uses `Climb` instead of the normal climbable layers. |
| <Link id="m-overrideteleport-2" /><code>{"bool OverrideTeleport { get; }"}</code> | If true, the unlock overrides which layers the player can teleport onto, using `Teleport`. |
| <Link id="m-shouldmodifystat" /><code>{"bool ShouldModifyStat { get; }"}</code> | If true, applying the unlock raises `StatToModify` by `ValueToAddToMaxStat`, and removing it lowers it again. |
| <Link id="m-stattomodify-2" /><code><Link to="/game-api/types/alta-stats-effects/maxstatdefinition">{"MaxStatDefinition"}</Link>{" StatToModify { get; }"}</code> | Max stat changed when `ShouldModifyStat` is set. |
| <Link id="m-teleport" /><code>{"LayerMask Teleport { get; }"}</code> | Layers the player may teleport onto when `OverrideTeleport` is set. |
| <Link id="m-valuetoaddtomaxstat-2" /><code>{"float ValueToAddToMaxStat { get; }"}</code> | Amount added to both the stat's maximum and its base value. |

## Used in

Members of other types that take, return or hold a `UnlockingPermissionsSetup`:

[`PlayerUnlock.unlockingPermissions`](/game-api/types/global-p/playerunlock#m-unlockingpermissions), [`PlayerUnlock.UnlockingPermissions`](/game-api/types/global-p/playerunlock#m-unlockingpermissions-2).
