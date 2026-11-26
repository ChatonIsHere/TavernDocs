---
title: "UFloatBytes"
description: "Internal helper that sends a float as its raw 32 bits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UFloatBytes

A **internal struct** in `Alta.Serialization.Runtime`, `Alta.Serialization`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal helper that sends a float as its raw 32 bits.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floatvalue" /><code>{"private static readonly float[] floatValue"}</code> | <span className="api-desc">Static one-float buffer for the byte copy.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/ufloatbytes">{"UFloatBytes"}</Link>{" instance"}</code> | <span className="api-desc">Unused default instance.</span> |
| <Link id="m-intvalue" /><code>{"private static readonly uint[] intValue"}</code> | <span className="api-desc">Static one-uint buffer for the byte copy.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize(ref float value, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Copies the float's bytes into a uint and serializes that, then back on read. Uses static buffers, so it is not thread safe.</span> |
