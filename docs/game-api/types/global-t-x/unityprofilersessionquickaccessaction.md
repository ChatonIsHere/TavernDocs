---
title: "UnityProfilerSessionQuickAccessAction"
description: "Quick access menu action that records a 600-frame profiler sample and tells the player when it starts and finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityProfilerSessionQuickAccessAction

A **class** in `Root.Township`, no namespace.

Quick access menu action that records a 600-frame profiler sample and tells the player when it starts and finishes. Only shown to devs or in debug builds.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnityProfilerSessionQuickAccessAction()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdfiles" /><code>{"private int createdFiles"}</code> | Counter added to each profile name so files do not overwrite each other. |
| <Link id="m-profileframes" /><code>{"private const int ProfileFrames"}</code> | Number of frames sampled, 600. |
| <Link id="m-profilename" /><code>{"private const string ProfileName"}</code> | Base name for the profile files, `QAM_Profile`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always true. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden unless the user is a dev or it is a debug build. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Usable only while no profiling is already running. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Starts a profiler sample named with a running number and shows a message to the player. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaycompletionmessage" /><code>{"private void DisplayCompletionMessage()"}</code> | Shows `Profiler Session Completed` to the local player. |

</details>
