---
title: "PlatformProvider"
description: "static class PlatformProvider in Alta.PlatformInformation.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformProvider

A **static class** in `Alta.PlatformInformation.Runtime`, `Alta.PlatformInformation`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-android-define" /><code>{"const string ANDROID_DEFINE"}</code> |  |
| <Link id="m-linux-define" /><code>{"const string LINUX_DEFINE"}</code> |  |
| <Link id="m-pico-define" /><code>{"const string PICO_DEFINE"}</code> |  |
| <Link id="m-quest-define" /><code>{"const string QUEST_DEFINE"}</code> |  |
| <Link id="m-windows-define" /><code>{"const string WINDOWS_DEFINE"}</code> |  |
| <Link id="m-androidname" /><code>{"private const string AndroidName"}</code> |  |
| <Link id="m-androidpreviewname" /><code>{"private const string AndroidPreviewName"}</code> |  |
| <Link id="m-linuxname" /><code>{"private const string LinuxName"}</code> |  |
| <Link id="m-localprovider" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-other/localplatformprovider">{"LocalPlatformProvider"}</Link>{" LocalProvider"}</code> |  |
| <Link id="m-overrideprovider" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-other/overrideplatformprovider">{"OverridePlatformProvider"}</Link>{" OverrideProvider"}</code> |  |
| <Link id="m-piconame" /><code>{"private const string PicoName"}</code> |  |
| <Link id="m-questname" /><code>{"private const string QuestName"}</code> |  |
| <Link id="m-unknownname" /><code>{"private const string UnknownName"}</code> |  |
| <Link id="m-windowsname" /><code>{"private const string WindowsName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platformflags" /><code>{"static "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" { get; }"}</code> |  |
| <Link id="m-platformname" /><code>{"static string PlatformName { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onoverrideruntimeplatform" /><code>{"static event Action OnOverrideRuntimePlatform"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearclientruntimeoverride" /><code>{"static void ClearClientRuntimeOverride()"}</code> |  |
| <Link id="m-isactiveruntime" /><code>{"static bool IsActiveRuntime("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> |  |
| <Link id="m-isandroid" /><code>{"static bool IsAndroid()"}</code> |  |
| <Link id="m-isandroidorandroidpreview" /><code>{"static bool IsAndroidOrAndroidPreview()"}</code> |  |
| <Link id="m-isandroidpreview" /><code>{"static bool IsAndroidPreview()"}</code> |  |
| <Link id="m-isclient" /><code>{"static bool IsClient()"}</code> |  |
| <Link id="m-islinux" /><code>{"static bool IsLinux()"}</code> |  |
| <Link id="m-ispico" /><code>{"static bool IsPico()"}</code> |  |
| <Link id="m-isquest" /><code>{"static bool IsQuest()"}</code> |  |
| <Link id="m-isserver" /><code>{"static bool IsServer()"}</code> |  |
| <Link id="m-iswindows" /><code>{"static bool IsWindows()"}</code> |  |
| <Link id="m-setclientruntimeoverride" /><code>{"static void SetClientRuntimeOverride("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime)"}</code> |  |
| <Link id="m-hasflag" /><code>{"private static bool HasFlag("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> |  |
| <Link id="m-isandroidsubplatform" /><code>{"private static bool IsAndroidSubPlatform("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" input)"}</code> |  |
