---
title: "ProgressStatChangeHook.TopicProgress"
description: "Tracks one agent's stat change over time for a ProgressStatChangeHook, adding the curve's value to the stat's base each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressStatChangeHook.TopicProgress

A **private struct** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks one agent's stat change over time for a `ProgressStatChangeHook`, adding the curve's value to the stat's base each frame.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`ProgressStatChangeHook`](/game-api/types/alta-intelligence/progressstatchangehook)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TopicProgress(float inverseDuration, "}<Link to="/game-api/types/alta-intelligence/progressstatchangehook">{"ProgressStatChangeHook"}</Link>{" hook, "}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Creates a `ProgressStatChangeHook.TopicProgress` from `inverseDuration`, `hook` and `topic`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat"}</code> | The agent's stat being changed. |
| <Link id="m-currentlyadded" /><code>{"private float currentlyAdded"}</code> | Total amount added to the stat so far. |
| <Link id="m-hook" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/progressstatchangehook">{"ProgressStatChangeHook"}</Link>{" hook"}</code> | The hook that owns this progress and supplies the curve. |
| <Link id="m-inverseduration" /><code>{"private float inverseDuration"}</code> | Time scale for the curve: one over the action duration when time is normalized, else 1. |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | Real time the progress started. |
| <Link id="m-updatestat" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateStat"}</code> | Handle for the registered update method. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool removeOnEnd)"}</code> | Stops the update and, if asked, takes back everything it added. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatestat-2" /><code>{"private void UpdateStat()"}</code> | Each frame, moves the stat's base by the change in the hook's curve since the last frame. |

</details>

## Used in

Members of other types that take, return or hold a `TopicProgress`:

[`ProgressStatChangeHook.progresses`](/game-api/types/alta-intelligence/progressstatchangehook#m-progresses).
