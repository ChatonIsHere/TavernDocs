---
title: "ProgressStatChangeHook.TopicProgress"
description: "struct ProgressStatChangeHook.TopicProgress in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressStatChangeHook.TopicProgress

A **private struct** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`ProgressStatChangeHook`](/game-api/types/alta-intelligence/progressstatchangehook)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TopicProgress(float inverseDuration, "}<Link to="/game-api/types/alta-intelligence/progressstatchangehook">{"ProgressStatChangeHook"}</Link>{" hook, "}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-affectedstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat"}</code> |
| <Link id="m-currentlyadded" /><code>{"private float currentlyAdded"}</code> |
| <Link id="m-hook" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/progressstatchangehook">{"ProgressStatChangeHook"}</Link>{" hook"}</code> |
| <Link id="m-inverseduration" /><code>{"private float inverseDuration"}</code> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> |
| <Link id="m-updatestat" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateStat"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool removeOnEnd)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-updatestat-2" /><code>{"private void UpdateStat()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TopicProgress`:

[`ProgressStatChangeHook.progresses`](/game-api/types/alta-intelligence/progressstatchangehook#m-progresses).
