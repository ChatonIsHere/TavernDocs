---
title: "IValidVersionService"
description: "interface IValidVersionService in Alta.Platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IValidVersionService

An **interface** in `Alta.Platform`, `Alta.Platform`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`FakeValidVersionService`](/game-api/types/assembly-other/fakevalidversionservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcode" /><code>{"int CurrentCode { get; }"}</code> |  |
| <Link id="m-latestcode" /><code>{"int LatestCode { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isversionvalid" /><code>{"Task<IResult> IsVersionValid()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IValidVersionService`:

[`ApplicationStartupManager.Inject`](/game-api/types/global-a-b/applicationstartupmanager#m-inject), [`ApplicationStartupManager.validVersionService`](/game-api/types/global-a-b/applicationstartupmanager#m-validversionservice), [`GameModeManager.validVersionService`](/game-api/types/global-e-h/gamemodemanager#m-validversionservice).
