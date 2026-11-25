---
title: "ProfilingSession"
description: "class ProfilingSession in Alta.Profiling.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingSession

A **class** in `Alta.Profiling.Runtime`, `Alta.Profiling`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfilingSession(string name, params string[] groups)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-children" /><code>{"private readonly List<"}<Link to="/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{"> children"}</code> |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" current"}</code> |
| <Link id="m-failure" /><code>{"private const string Failure"}</code> |
| <Link id="m-groupassociations" /><code>{"private readonly Dictionary<string, List<"}<Link to="/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{">> groupAssociations"}</code> |
| <Link id="m-groupms" /><code>{"private readonly Dictionary<string, double> groupMs"}</code> |
| <Link id="m-status" /><code>{"private string status"}</code> |
| <Link id="m-stopwatch" /><code>{"private readonly Stopwatch stopwatch"}</code> |
| <Link id="m-success" /><code>{"private const string Success"}</code> |
| <Link id="m-wassuccess" /><code>{"private bool wasSuccess"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-elapsed" /><code>{"TimeSpan Elapsed { get; }"}</code> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |

<details>
<summary>4 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-groups" /><code>{"private string[] Groups { get; }"}</code> |
| <Link id="m-isended" /><code>{"private bool IsEnded { get; set; }"}</code> |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" Parent { get; }"}</code> |
| <Link id="m-status-2" /><code>{"private string Status { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-generatereport" /><code>{"string GenerateReport(float summaryPercentThreshold = 0.2)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-populatereport" /><code>{"private void PopulateReport(StringBuilder stringBuilder, double msLimit, int indentCount)"}</code> |
| <Link id="m-preparegroupsforreport" /><code>{"private void PrepareGroupsForReport()"}</code> |
| <Link id="m-processrecursively" /><code>{"private void ProcessRecursively("}<Link to="/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" child)"}</code> |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ProfilingSession`:

[`AbstractAltaLifetimeScope.profileSession`](/game-api/types/assembly-other/abstractaltalifetimescope#m-profilesession).
