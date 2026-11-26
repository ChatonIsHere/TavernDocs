---
title: "ULongBytes"
description: "Internal helper that sends a long as two raw 32-bit uints."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ULongBytes

A **internal struct** in `Alta.Serialization.Runtime`, `Alta.Serialization`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal helper that sends a `long` as two raw 32-bit uints.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decimalvalue" /><code>{"private static readonly long[] decimalValue"}</code> | Static one-long buffer for the byte copy. |
| <Link id="m-intvalue" /><code>{"private static readonly uint[] intValue"}</code> | Static two-uint buffer for the byte copy. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize(ref long value, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Copies the long's 8 bytes into two uints and serializes them, then back on read. Uses static buffers, so it is not thread safe. |
