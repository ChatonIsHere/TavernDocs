---
title: "FullEmptyStatTrigger"
description: "class FullEmptyStatTrigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullEmptyStatTrigger

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`SerializedFullEmptyStatTrigger`](/game-api/types/alta-stats-effects/serializedfullemptystattrigger)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FullEmptyStatTrigger()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-wasfull" /><code>{"protected bool wasFull"}</code> |

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-onempty" /><code>{"private UnityEvent onEmpty"}</code> |
| <Link id="m-onemptyeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onEmptyEffect"}</code> |
| <Link id="m-onfull" /><code>{"private UnityEvent onFull"}</code> |
| <Link id="m-onfulleffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFullEffect"}</code> |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onstatchanged" /><code>{"private void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>
