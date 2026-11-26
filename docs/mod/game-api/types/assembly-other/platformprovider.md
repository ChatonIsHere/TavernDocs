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
| <Link id="m-android-define" /><code>{"const string ANDROID_DEFINE"}</code> | Scripting define for Android builds. |
| <Link id="m-linux-define" /><code>{"const string LINUX_DEFINE"}</code> | Scripting define for Linux builds. |
| <Link id="m-pico-define" /><code>{"const string PICO_DEFINE"}</code> | Scripting define for Pico builds. |
| <Link id="m-quest-define" /><code>{"const string QUEST_DEFINE"}</code> | Scripting define for Quest builds. |
| <Link id="m-windows-define" /><code>{"const string WINDOWS_DEFINE"}</code> | Scripting define for Windows builds. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidname" /><code>{"private const string AndroidName"}</code> | Name returned for Android. |
| <Link id="m-androidpreviewname" /><code>{"private const string AndroidPreviewName"}</code> | Name returned for Android preview. |
| <Link id="m-linuxname" /><code>{"private const string LinuxName"}</code> | Name returned for Linux. |
| <Link id="m-localprovider" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-other/localplatformprovider">{"LocalPlatformProvider"}</Link>{" LocalProvider"}</code> | Detects the real platform. |
| <Link id="m-overrideprovider" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-other/overrideplatformprovider">{"OverridePlatformProvider"}</Link>{" OverrideProvider"}</code> | Holds the client runtime override, if set. |
| <Link id="m-piconame" /><code>{"private const string PicoName"}</code> | Name returned for Pico. |
| <Link id="m-questname" /><code>{"private const string QuestName"}</code> | Name returned for Quest. |
| <Link id="m-unknownname" /><code>{"private const string UnknownName"}</code> | Name returned for an unknown platform. |
| <Link id="m-windowsname" /><code>{"private const string WindowsName"}</code> | Name returned for Windows. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platformflags" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" { get; }"}</code> | The current platform: the override if one is set, otherwise the detected one. |
| <Link id="m-platformname" /><code>{"static string PlatformName { get; }"}</code> | The current platform as a string, such as "Quest" or "Windows". |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onoverrideruntimeplatform" /><code>{"static event Action OnOverrideRuntimePlatform"}</code> | Raised after `SetClientRuntimeOverride` changes the reported platform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearclientruntimeoverride" /><code>{"static void ClearClientRuntimeOverride()"}</code> | Removes the runtime override so the real platform is reported again. |
| <Link id="m-isactiveruntime" /><code>{"static bool IsActiveRuntime("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> | Extension: true if the current platform matches the given flags. |
| <Link id="m-isandroid" /><code>{"static bool IsAndroid()"}</code> | True on Quest or Pico. On a plain Android runtime it returns false, because of how the flag check works. |
| <Link id="m-isandroidorandroidpreview" /><code>{"static bool IsAndroidOrAndroidPreview()"}</code> | True for `IsAndroid` or `IsAndroidPreview`. |
| <Link id="m-isandroidpreview" /><code>{"static bool IsAndroidPreview()"}</code> | True when running as Android preview. |
| <Link id="m-isclient" /><code>{"static bool IsClient()"}</code> | True on anything except Linux. |
| <Link id="m-islinux" /><code>{"static bool IsLinux()"}</code> | True on the Linux platform. |
| <Link id="m-ispico" /><code>{"static bool IsPico()"}</code> | True on Pico. |
| <Link id="m-isquest" /><code>{"static bool IsQuest()"}</code> | True on Quest. |
| <Link id="m-isserver" /><code>{"static bool IsServer()"}</code> | True on Linux. The dedicated server is the Linux build, so this is a platform check, not a network role. |
| <Link id="m-iswindows" /><code>{"static bool IsWindows()"}</code> | True on Windows. |
| <Link id="m-setclientruntimeoverride" /><code>{"static void SetClientRuntimeOverride("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> | Makes the game report a different platform and raises `OnOverrideRuntimePlatform`. Throws for plain Android; use Quest or Pico. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasflag" /><code>{"private static bool HasFlag("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> | True if the current platform matches any of the given flags. Treats the Android bit as matching Quest and Pico. |
| <Link id="m-isandroidsubplatform" /><code>{"private static bool IsAndroidSubPlatform("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> | True if the given flags mean Android in general and the platform is Quest or Pico. |

</details>
