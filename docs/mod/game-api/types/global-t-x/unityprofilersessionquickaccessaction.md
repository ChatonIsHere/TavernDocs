---
title: "UnityProfilerSessionQuickAccessAction"
description: "Quick access menu action that records a 600-frame profiler sample and tells the player when it starts and finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityProfilerSessionQuickAccessAction

A **class** in `Root.Township`, the global namespace.

Quick access menu action that records a 600-frame profiler sample and tells the player when it starts and finishes. Only shown to devs or in debug builds.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityProfilerSessionQuickAccessAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdfiles" /><code>{"private int createdFiles"}</code> | <span className="api-desc">Counter added to each profile name so files do not overwrite each other.</span> |
| <Link id="m-profileframes" /><code>{"private const int ProfileFrames"}</code> | <span className="api-desc">Number of frames sampled, 600.</span> |
| <Link id="m-profilename" /><code>{"private const string ProfileName"}</code> | <span className="api-desc">Base name for the profile files, `QAM_Profile`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | <span className="api-desc">Hidden unless the user is a dev or it is a debug build.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Usable only while no profiling is already running.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Starts a profiler sample named with a running number and shows a message to the player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaycompletionmessage" /><code>{"private void DisplayCompletionMessage()"}</code> | <span className="api-desc">Shows `Profiler Session Completed` to the local player.</span> |

</details>
