---
title: "LocalPlatformProvider"
description: "Internal: works out which platform the game is running on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlatformProvider

A **internal class** in `Alta.PlatformInformation.Runtime`, `Alta.PlatformInformation`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: works out which platform the game is running on. In this build the Quest, Pico and Android preview checks always return false.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlatformProvider()"}</code> | Creates a `LocalPlatformProvider` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getruntimeplatform" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" GetRuntimePlatform()"}</code> | Returns the platform flag: Android, Linux, or Windows for anything else. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getandroidsubplatform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" GetAndroidSubPlatform()"}</code> | Returns Quest, Pico or Android; always Android in this build. |
| <Link id="m-geteditorbuildtargetplatform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" GetEditorBuildTargetPlatform()"}</code> | Throws in this build. |
| <Link id="m-isandroidpreview" /><code>{"private bool IsAndroidPreview()"}</code> | Always false in this build. |
| <Link id="m-ispico" /><code>{"private bool IsPico()"}</code> | Always false in this build. |
| <Link id="m-isquest" /><code>{"private bool IsQuest()"}</code> | Always false in this build. |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlatformProvider`:

[`PlatformProvider.LocalProvider`](/mod/game-api/types/assembly-other/platformprovider#m-localprovider).
