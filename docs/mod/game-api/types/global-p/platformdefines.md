---
title: "PlatformDefines"
description: "The scripting define symbols used when building for each platform (Linux, Windows, Quest, Pico)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDefines

A **static class** in `Root.Township`, the global namespace.

The scripting define symbols used when building for each platform (Linux, Windows, Quest, Pico).

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedefines" /><code>{"private static readonly string[] baseDefines"}</code> | <span className="api-desc">Defines every platform gets, such as `__MEGASPLAT__` and `TextMeshPro`. Linux uses only these.</span> |
| <Link id="m-picodefines" /><code>{"private static readonly string[] picoDefines"}</code> | <span className="api-desc">Base defines plus `UNITY_PICO`.</span> |
| <Link id="m-questdefines" /><code>{"private static readonly string[] questDefines"}</code> | <span className="api-desc">Base defines plus `UNITY_QUEST` and `OVR_PLATFORM_ASYNC_MESSAGES`.</span> |
| <Link id="m-windowsdefines" /><code>{"private static readonly string[] windowsDefines"}</code> | <span className="api-desc">Base defines plus `UNITY_XR_MANAGEMENT`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdefines" /><code>{"static string[] GetDefines("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> | <span className="api-desc">Returns the define list for a platform, from `PlatformFlags` or its name. Throws for anything else.</span> |
| <Link id="m-getdefines-2" /><code>{"static string[] GetDefines(string runtimeAsString)"}</code> | <span className="api-desc">Returns the define list for a platform, from `PlatformFlags` or its name. Throws for anything else.</span> |
