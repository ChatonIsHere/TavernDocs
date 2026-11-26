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
| <Link id="m-ctor" /><code>{"ProfilingSession(string name, params string[] groups)"}</code> | <span className="api-desc">Creates a `ProfilingSession` from `name` and `groups`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{"> children"}</code> | <span className="api-desc">Sessions started while this one was current.</span> |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" current"}</code> | <span className="api-desc">The innermost running session.</span> |
| <Link id="m-failure" /><code>{"private const string Failure"}</code> | <span className="api-desc">Status text "FAILURE".</span> |
| <Link id="m-groupassociations" /><code>{"private readonly Dictionary<string, List<"}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{">> groupAssociations"}</code> | <span className="api-desc">Child sessions per group, filled for a report.</span> |
| <Link id="m-groupms" /><code>{"private readonly Dictionary<string, double> groupMs"}</code> | <span className="api-desc">Total ms per group, filled for a report.</span> |
| <Link id="m-status" /><code>{"private string status"}</code> | <span className="api-desc">Cached status text.</span> |
| <Link id="m-stopwatch" /><code>{"private readonly Stopwatch stopwatch"}</code> | <span className="api-desc">Times the session.</span> |
| <Link id="m-success" /><code>{"private const string Success"}</code> | <span className="api-desc">Status text "SUCCESS".</span> |
| <Link id="m-wassuccess" /><code>{"private bool wasSuccess"}</code> | <span className="api-desc">False once the session is cancelled.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elapsed" /><code>{"TimeSpan Elapsed { get; }"}</code> | <span className="api-desc">Time the session has run.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The session's name; also used as the profile marker name.</span> |

<details className="api-private">
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groups" /><code>{"private string[] Groups { get; }"}</code> | <span className="api-desc">Group names this session counts towards in the report.</span> |
| <Link id="m-isended" /><code>{"private bool IsEnded { get; set; }"}</code> | <span className="api-desc">Whether the session has stopped.</span> |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" Parent { get; }"}</code> | <span className="api-desc">The session that was current when this one started.</span> |
| <Link id="m-status-2" /><code>{"private string Status { get; }"}</code> | <span className="api-desc">"SUCCESS" or "FAILURE".</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | <span className="api-desc">Marks this session and its children as failed and stops them.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Stops the session.</span> |
| <Link id="m-generatereport" /><code>{"string GenerateReport(float summaryPercentThreshold = 0.2)"}</code> | <span className="api-desc">Builds a text tree of the session and its children, leaving out successful ones under the threshold (a percentage of total time, default 0.2%).</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-populatereport" /><code>{"private void PopulateReport(StringBuilder stringBuilder, double msLimit, int indentCount)"}</code> | <span className="api-desc">Writes this session's line, its notable groups and its children into the report.</span> |
| <Link id="m-preparegroupsforreport" /><code>{"private void PrepareGroupsForReport()"}</code> | <span className="api-desc">Totals the time of children (and their children) per group before a report.</span> |
| <Link id="m-processrecursively" /><code>{"private void ProcessRecursively("}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" child)"}</code> | <span className="api-desc">Adds one child's time to this session's group totals, including groups found deeper down.</span> |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | <span className="api-desc">Ends the profile marker, stops the timer and makes the parent current again.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ProfilingSession`:

<div className="api-used-in">

[`AbstractAltaLifetimeScope.profileSession`](/mod/game-api/types/assembly-other/abstractaltalifetimescope#m-profilesession).

</div>
