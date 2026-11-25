---
title: "IndirectStatModifier"
description: "class IndirectStatModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndirectStatModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndirectStatModifier("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" targetStat, "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-appliedmodifier" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{" appliedModifier"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager"}</code> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" targetStat"}</code> |
| <Link id="m-trackedmodifiers" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> trackedModifiers"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |

</details>

## Events

<details>
<summary>1 private and internal event</summary>

| Member |
| --- |
| <Link id="m-updated" /><code>{"private event Action Updated"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{" data)"}</code> |
| <Link id="m-registermodifier" /><code>{"void RegisterModifier("}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{" Save()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-changed" /><code>{"private void Changed()"}</code> |
| <Link id="m-changedmodifier" /><code>{"private void ChangedModifier("}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |
| <Link id="m-finishedmodifier" /><code>{"private void FinishedModifier("}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{" modifier)"}</code> |
| <Link id="m-update" /><code>{"private void Update("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `IndirectStatModifier`:

[`StatManager.indirectModifiers`](/game-api/types/alta-stats-effects/statmanager#m-indirectmodifiers).
