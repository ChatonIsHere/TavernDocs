---
title: "Timeline.SerializedEntryState"
description: "Result of Timeline.LoadEntry for a saved timer: None (no time saved), Past (already due, callback run if asked) or Future (registered on the timeline)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline.SerializedEntryState

An **enum** in `Alta.Timing.Runtime`, `Alta.Timing`.

Result of `Timeline.LoadEntry` for a saved timer: None (no time saved), Past (already due, callback run if asked) or Future (registered on the timeline).

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/game-api/types/assembly-other/timeline)

## Values

| Member |
| --- |
| <Link id="m-future" /><code>{"Future = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-past" /><code>{"Past = 1"}</code> |

## Used in

Members of other types that take, return or hold a `SerializedEntryState`:

[`Timeline.GetSerializedState`](/game-api/types/assembly-other/timeline#m-getserializedstate), [`Timeline.LoadEntry`](/game-api/types/assembly-other/timeline#m-loadentry), [`Timeline.SerializeEntry`](/game-api/types/assembly-other/timeline#m-serializeentry).
