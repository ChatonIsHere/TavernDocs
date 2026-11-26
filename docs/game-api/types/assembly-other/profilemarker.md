---
title: "ProfileMarker"
description: "Static helper that keeps named Unity profiler markers, only in debug builds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileMarker

A **static class** in `Alta.Profiling.Runtime`, `Alta.Profiling`.

Static helper that keeps named Unity profiler markers, only in debug builds. As decompiled it never begins or ends a marker sample.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-markers" /><code>{"private static readonly Dictionary<string, ProfilerMarker> Markers"}</code> | The markers by name. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addprofile" /><code>{"static void AddProfile(string name)"}</code> | Debug builds: creates a `ProfilerMarker` named "[ProfilingSession] " plus the name if it doesn't exist yet. |
| <Link id="m-endprofile" /><code>{"static void EndProfile(string name)"}</code> | Debug builds: looks up the named marker but does nothing with it. |
