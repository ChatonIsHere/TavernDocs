---
title: "AutoFestiveAchievement"
description: "Achievement that can only complete while its festivity is active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoFestiveAchievement

A **class** in `Root.Township`, `ATT.TaskTracking`.

Achievement that can only complete while its festivity is active.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GameAchievement`](/mod/game-api/types/global-e-h/gameachievement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoFestiveAchievement()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-festivity" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity"}</code> | The festivity that must be active. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"override void Complete("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Completes the achievement only if the festivity is active. Logs an error if none is set. |
