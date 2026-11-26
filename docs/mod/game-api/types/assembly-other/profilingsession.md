---
title: "ProfilingSession"
description: "A timed, nestable profiling scope."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingSession

A **class** in `Alta.Profiling.Runtime`, `Alta.Profiling`.

A timed, nestable profiling scope. Making one starts it and makes it the current session; sessions made inside become its children. Dispose it to stop.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfilingSession(string name, params string[] groups)"}</code> | Creates a `ProfilingSession` from `name` and `groups`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{"> children"}</code> | Sessions started while this one was current. |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" current"}</code> | The innermost running session. |
| <Link id="m-failure" /><code>{"private const string Failure"}</code> | Status text "FAILURE". |
| <Link id="m-groupassociations" /><code>{"private readonly Dictionary<string, List<"}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{">> groupAssociations"}</code> | Child sessions per group, filled for a report. |
| <Link id="m-groupms" /><code>{"private readonly Dictionary<string, double> groupMs"}</code> | Total ms per group, filled for a report. |
| <Link id="m-status" /><code>{"private string status"}</code> | Cached status text. |
| <Link id="m-stopwatch" /><code>{"private readonly Stopwatch stopwatch"}</code> | Times the session. |
| <Link id="m-success" /><code>{"private const string Success"}</code> | Status text "SUCCESS". |
| <Link id="m-wassuccess" /><code>{"private bool wasSuccess"}</code> | False once the session is cancelled. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elapsed" /><code>{"TimeSpan Elapsed { get; }"}</code> | Time the session has run. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The session's name; also used as the profile marker name. |

<details>
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groups" /><code>{"private string[] Groups { get; }"}</code> | Group names this session counts towards in the report. |
| <Link id="m-isended" /><code>{"private bool IsEnded { get; set; }"}</code> | Whether the session has stopped. |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" Parent { get; }"}</code> | The session that was current when this one started. |
| <Link id="m-status-2" /><code>{"private string Status { get; }"}</code> | "SUCCESS" or "FAILURE". |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Marks this session and its children as failed and stops them. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Stops the session. |
| <Link id="m-generatereport" /><code>{"string GenerateReport(float summaryPercentThreshold = 0.2)"}</code> | Builds a text tree of the session and its children, leaving out successful ones under the threshold (a percentage of total time, default 0.2%). |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-populatereport" /><code>{"private void PopulateReport(StringBuilder stringBuilder, double msLimit, int indentCount)"}</code> | Writes this session's line, its notable groups and its children into the report. |
| <Link id="m-preparegroupsforreport" /><code>{"private void PrepareGroupsForReport()"}</code> | Totals the time of children (and their children) per group before a report. |
| <Link id="m-processrecursively" /><code>{"private void ProcessRecursively("}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" child)"}</code> | Adds one child's time to this session's group totals, including groups found deeper down. |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | Ends the profile marker, stops the timer and makes the parent current again. |

</details>

## Used in

Members of other types that take, return or hold a `ProfilingSession`:

[`AbstractAltaLifetimeScope.profileSession`](/mod/game-api/types/assembly-other/abstractaltalifetimescope#m-profilesession).
