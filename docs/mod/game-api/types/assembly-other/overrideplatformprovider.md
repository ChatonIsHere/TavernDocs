---
title: "OverridePlatformProvider"
description: "Internal: holds a platform override for testing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverridePlatformProvider

A **internal class** in `Alta.PlatformInformation.Runtime`, `Alta.PlatformInformation`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: holds a platform override for testing. The override only counts in the Unity editor.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OverridePlatformProvider()"}</code> | Creates an `OverridePlatformProvider` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isruntimeoverride" /><code>{"bool IsRuntimeOverride { get; }"}</code> | True only in the editor when an override is set. |
| <Link id="m-overrideruntime" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" OverrideRuntime { get; private set; }"}</code> | The overriding platform flags, or 0 for none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearclientruntimeoverride" /><code>{"void ClearClientRuntimeOverride()"}</code> | Clears the override. |
| <Link id="m-setclientruntimeoverride" /><code>{"void SetClientRuntimeOverride("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform)"}</code> | Sets the override platform. |

## Used in

Members of other types that take, return or hold a `OverridePlatformProvider`:

[`PlatformProvider.OverrideProvider`](/mod/game-api/types/assembly-other/platformprovider#m-overrideprovider).
