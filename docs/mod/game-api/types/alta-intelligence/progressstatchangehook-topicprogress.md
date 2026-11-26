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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`ProgressStatChangeHook`](/mod/game-api/types/alta-intelligence/progressstatchangehook)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TopicProgress(float inverseDuration, "}<Link to="/mod/game-api/types/alta-intelligence/progressstatchangehook">{"ProgressStatChangeHook"}</Link>{" hook, "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Creates a `ProgressStatChangeHook.TopicProgress` from `inverseDuration`, `hook` and `topic`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" affectedStat"}</code> | <span className="api-desc">The agent's stat being changed.</span> |
| <Link id="m-currentlyadded" /><code>{"private float currentlyAdded"}</code> | <span className="api-desc">Total amount added to the stat so far.</span> |
| <Link id="m-hook" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/progressstatchangehook">{"ProgressStatChangeHook"}</Link>{" hook"}</code> | <span className="api-desc">The hook that owns this progress and supplies the curve.</span> |
| <Link id="m-inverseduration" /><code>{"private float inverseDuration"}</code> | <span className="api-desc">Time scale for the curve: one over the action duration when time is normalized, else 1.</span> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | <span className="api-desc">Real time the progress started.</span> |
| <Link id="m-updatestat" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateStat"}</code> | <span className="api-desc">Handle for the registered update method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool removeOnEnd)"}</code> | <span className="api-desc">Stops the update and, if asked, takes back everything it added.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatestat-2" /><code>{"private void UpdateStat()"}</code> | <span className="api-desc">Each frame, moves the stat's base by the change in the hook's curve since the last frame.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TopicProgress`:

<div className="api-used-in">

[`ProgressStatChangeHook.progresses`](/mod/game-api/types/alta-intelligence/progressstatchangehook#m-progresses).

</div>
