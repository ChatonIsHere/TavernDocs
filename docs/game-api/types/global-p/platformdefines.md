---
title: "PlatformDefines"
description: "The scripting define symbols used when building for each platform (Linux, Windows, Quest, Pico)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDefines

A **static class** in `Root.Township`, no namespace.

The scripting define symbols used when building for each platform (Linux, Windows, Quest, Pico).

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedefines" /><code>{"private static readonly string[] baseDefines"}</code> | Defines every platform gets, such as `__MEGASPLAT__` and `TextMeshPro`. Linux uses only these. |
| <Link id="m-picodefines" /><code>{"private static readonly string[] picoDefines"}</code> | Base defines plus `UNITY_PICO`. |
| <Link id="m-questdefines" /><code>{"private static readonly string[] questDefines"}</code> | Base defines plus `UNITY_QUEST` and `OVR_PLATFORM_ASYNC_MESSAGES`. |
| <Link id="m-windowsdefines" /><code>{"private static readonly string[] windowsDefines"}</code> | Base defines plus `UNITY_XR_MANAGEMENT`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdefines" /><code>{"static string[] GetDefines("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> | Returns the define list for a platform, from `PlatformFlags` or its name. Throws for anything else. |
| <Link id="m-getdefines-2" /><code>{"static string[] GetDefines(string runtimeAsString)"}</code> | Returns the define list for a platform, from `PlatformFlags` or its name. Throws for anything else. |
