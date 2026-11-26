---
title: "ArrayPoolManager"
description: "Keeps track of every power-of-two array pool in the game so they can be logged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrayPoolManager

A **static class** in `Alta.ArrayPools.Runtime`, `Alta.ArrayPools`.

Keeps track of every power-of-two array pool in the game so they can be logged.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allpools" /><code>{"static List<"}<Link to="/game-api/types/assembly-other/iunclearedpower2arraypool">{"IUnclearedPower2ArrayPool"}</Link>{"> AllPools"}</code> | Every array pool made; each pool adds itself when created. |
| <Link id="m-minimumpower" /><code>{"const int MinimumPower"}</code> | Smallest bucket size as a power of two (4, so 16 items). |
| <Link id="m-numberofbuckets" /><code>{"const int NumberOfBuckets"}</code> | How many size buckets each pool has (27). |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Class logger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logallpools" /><code>{"static void LogAllPools(bool isPrintingEachArraysLength = false)"}</code> | Logs how many arrays each pool holds per size, and optionally each array's length. |
