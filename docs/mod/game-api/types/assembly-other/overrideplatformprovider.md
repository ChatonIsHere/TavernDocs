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
| <Link id="m-ctor" /><code>{"OverridePlatformProvider()"}</code> | <span className="api-desc">Creates an `OverridePlatformProvider` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isruntimeoverride" /><code>{"bool IsRuntimeOverride { get; }"}</code> | <span className="api-desc">True only in the editor when an override is set.</span> |
| <Link id="m-overrideruntime" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" OverrideRuntime { get; private set; }"}</code> | <span className="api-desc">The overriding platform flags, or 0 for none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearclientruntimeoverride" /><code>{"void ClearClientRuntimeOverride()"}</code> | <span className="api-desc">Clears the override.</span> |
| <Link id="m-setclientruntimeoverride" /><code>{"void SetClientRuntimeOverride("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform)"}</code> | <span className="api-desc">Sets the override platform.</span> |

## Used in

Members of other types that take, return or hold a `OverridePlatformProvider`:

<div className="api-used-in">

[`PlatformProvider.OverrideProvider`](/mod/game-api/types/assembly-other/platformprovider#m-overrideprovider).

</div>
