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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IValidVersionService`](/game-api/types/assembly-other/ivalidversionservice)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakeValidVersionService()"}</code> | Creates a `FakeValidVersionService` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcode" /><code>{"int CurrentCode { get; }"}</code> | Always -1. |
| <Link id="m-latestcode" /><code>{"int LatestCode { get; }"}</code> | Always -1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isversionvalid" /><code>{"async Task<IResult> IsVersionValid()"}</code> | Always returns success with true. |
