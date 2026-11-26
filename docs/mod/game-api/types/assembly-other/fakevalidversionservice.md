---
title: "FakeValidVersionService"
description: "Stand-in IValidVersionService that always says the game version is valid, used where there's no store version check (such as Windows)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakeValidVersionService

A **class** in `Alta.Platform`, `Alta.Platform.Fakes`.

Stand-in `IValidVersionService` that always says the game version is valid, used where there's no store version check (such as Windows).

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IValidVersionService`](/mod/game-api/types/assembly-other/ivalidversionservice)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakeValidVersionService()"}</code> | <span className="api-desc">Creates a `FakeValidVersionService` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcode" /><code>{"int CurrentCode { get; }"}</code> | <span className="api-desc">Always -1.</span> |
| <Link id="m-latestcode" /><code>{"int LatestCode { get; }"}</code> | <span className="api-desc">Always -1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isversionvalid" /><code>{"async Task<IResult> IsVersionValid()"}</code> | <span className="api-desc">Always returns success with true.</span> |
