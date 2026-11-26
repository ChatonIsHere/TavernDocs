---
title: "UnityQualitySettingsController"
description: "Sets Unity quality settings for the platform at start up: Android (Quest) gets lighter settings than PC."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityQualitySettingsController

A **static class** in `Root.Township`, `Alta.UnityWrappers`.

Sets Unity quality settings for the platform at start up: Android (Quest) gets lighter settings than PC.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-skinnedmeshweights" /><code>{"private static SkinWeights SkinnedMeshWeights { get; set; }"}</code> | Wraps `QualitySettings.skinWeights`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"static void Initialize()"}</code> | Sets 2x anti-aliasing, picks the platform's shader variants and applies the Android or PC settings. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateandroidsettings" /><code>{"private static void UpdateAndroidSettings()"}</code> | Shader LOD 250, two bone skinning, LOD bias 0.8 and no shadows. |
| <Link id="m-updatestandalonesettings" /><code>{"private static void UpdateStandaloneSettings()"}</code> | Full shader LOD, four bone skinning, LOD bias 1 and all shadows. |

</details>
