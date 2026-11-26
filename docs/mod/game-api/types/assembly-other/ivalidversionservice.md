---
title: "IValidVersionService"
description: "Checks whether the game version is still allowed to play."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IValidVersionService

An **interface** in `Alta.Platform`, `Alta.Platform`.

Checks whether the game version is still allowed to play. `ApplicationStartupManager` runs it on startup; on Windows a fake always says yes.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`FakeValidVersionService`](/mod/game-api/types/assembly-other/fakevalidversionservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcode" /><code>{"int CurrentCode { get; }"}</code> | This build's version code. -1 in the Windows fake. |
| <Link id="m-latestcode" /><code>{"int LatestCode { get; }"}</code> | The newest version code known. -1 in the Windows fake. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isversionvalid" /><code>{"Task<IResult> IsVersionValid()"}</code> | Checks the version. The Windows fake always returns success. |

## Used in

Members of other types that take, return or hold a `IValidVersionService`:

[`ApplicationStartupManager.Inject`](/mod/game-api/types/global-a-b/applicationstartupmanager#m-inject), [`ApplicationStartupManager.validVersionService`](/mod/game-api/types/global-a-b/applicationstartupmanager#m-validversionservice), [`GameModeManager.validVersionService`](/mod/game-api/types/global-e-h/gamemodemanager#m-validversionservice).
