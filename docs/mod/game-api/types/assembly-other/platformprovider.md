---
title: "PlatformProvider"
description: "Static helper that tells which platform the game is running on (Windows, Linux, Android, Quest, Pico), with an optional client override for testing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformProvider

A **static class** in `Alta.PlatformInformation.Runtime`, `Alta.PlatformInformation`.

Static helper that tells which platform the game is running on (Windows, Linux, Android, Quest, Pico), with an optional client override for testing.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-android-define" /><code>{"const string ANDROID_DEFINE"}</code> | <span className="api-desc">Scripting define for Android builds.</span> |
| <Link id="m-linux-define" /><code>{"const string LINUX_DEFINE"}</code> | <span className="api-desc">Scripting define for Linux builds.</span> |
| <Link id="m-pico-define" /><code>{"const string PICO_DEFINE"}</code> | <span className="api-desc">Scripting define for Pico builds.</span> |
| <Link id="m-quest-define" /><code>{"const string QUEST_DEFINE"}</code> | <span className="api-desc">Scripting define for Quest builds.</span> |
| <Link id="m-windows-define" /><code>{"const string WINDOWS_DEFINE"}</code> | <span className="api-desc">Scripting define for Windows builds.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidname" /><code>{"private const string AndroidName"}</code> | <span className="api-desc">Name returned for Android.</span> |
| <Link id="m-androidpreviewname" /><code>{"private const string AndroidPreviewName"}</code> | <span className="api-desc">Name returned for Android preview.</span> |
| <Link id="m-linuxname" /><code>{"private const string LinuxName"}</code> | <span className="api-desc">Name returned for Linux.</span> |
| <Link id="m-localprovider" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-other/localplatformprovider">{"LocalPlatformProvider"}</Link>{" LocalProvider"}</code> | <span className="api-desc">Detects the real platform.</span> |
| <Link id="m-overrideprovider" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-other/overrideplatformprovider">{"OverridePlatformProvider"}</Link>{" OverrideProvider"}</code> | <span className="api-desc">Holds the client runtime override, if set.</span> |
| <Link id="m-piconame" /><code>{"private const string PicoName"}</code> | <span className="api-desc">Name returned for Pico.</span> |
| <Link id="m-questname" /><code>{"private const string QuestName"}</code> | <span className="api-desc">Name returned for Quest.</span> |
| <Link id="m-unknownname" /><code>{"private const string UnknownName"}</code> | <span className="api-desc">Name returned for an unknown platform.</span> |
| <Link id="m-windowsname" /><code>{"private const string WindowsName"}</code> | <span className="api-desc">Name returned for Windows.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platformflags" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" { get; }"}</code> | <span className="api-desc">The current platform: the override if one is set, otherwise the detected one.</span> |
| <Link id="m-platformname" /><code>{"static string PlatformName { get; }"}</code> | <span className="api-desc">The current platform as a string, such as "Quest" or "Windows".</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onoverrideruntimeplatform" /><code>{"static event Action OnOverrideRuntimePlatform"}</code> | <span className="api-desc">Raised after `SetClientRuntimeOverride` changes the reported platform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearclientruntimeoverride" /><code>{"static void ClearClientRuntimeOverride()"}</code> | <span className="api-desc">Removes the runtime override so the real platform is reported again.</span> |
| <Link id="m-isactiveruntime" /><code>{"static bool IsActiveRuntime("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> | <span className="api-desc">Extension: true if the current platform matches the given flags.</span> |
| <Link id="m-isandroid" /><code>{"static bool IsAndroid()"}</code> | <span className="api-desc">True on Quest or Pico. On a plain Android runtime it returns false, because of how the flag check works.</span> |
| <Link id="m-isandroidorandroidpreview" /><code>{"static bool IsAndroidOrAndroidPreview()"}</code> | <span className="api-desc">True for `IsAndroid` or `IsAndroidPreview`.</span> |
| <Link id="m-isandroidpreview" /><code>{"static bool IsAndroidPreview()"}</code> | <span className="api-desc">True when running as Android preview.</span> |
| <Link id="m-isclient" /><code>{"static bool IsClient()"}</code> | <span className="api-desc">True on anything except Linux.</span> |
| <Link id="m-islinux" /><code>{"static bool IsLinux()"}</code> | <span className="api-desc">True on the Linux platform.</span> |
| <Link id="m-ispico" /><code>{"static bool IsPico()"}</code> | <span className="api-desc">True on Pico.</span> |
| <Link id="m-isquest" /><code>{"static bool IsQuest()"}</code> | <span className="api-desc">True on Quest.</span> |
| <Link id="m-isserver" /><code>{"static bool IsServer()"}</code> | <span className="api-desc">True on Linux. The dedicated server is the Linux build, so this is a platform check, not a network role.</span> |
| <Link id="m-iswindows" /><code>{"static bool IsWindows()"}</code> | <span className="api-desc">True on Windows.</span> |
| <Link id="m-setclientruntimeoverride" /><code>{"static void SetClientRuntimeOverride("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> | <span className="api-desc">Makes the game report a different platform and raises `OnOverrideRuntimePlatform`. Throws for plain Android; use Quest or Pico.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasflag" /><code>{"private static bool HasFlag("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> | <span className="api-desc">True if the current platform matches any of the given flags. Treats the Android bit as matching Quest and Pico.</span> |
| <Link id="m-isandroidsubplatform" /><code>{"private static bool IsAndroidSubPlatform("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> | <span className="api-desc">True if the given flags mean Android in general and the platform is Quest or Pico.</span> |

</details>
