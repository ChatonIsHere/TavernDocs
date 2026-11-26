---
title: "AnalyticalButtonGroupAutoEnabler"
description: "Enables every AnalyticalButton among its children (inactive ones too) when it's enabled, and disables them when it's disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticalButtonGroupAutoEnabler

A **class** in `Root.Township`, the global namespace.

Enables every `AnalyticalButton` among its children (inactive ones too) when it's enabled, and disables them when it's disabled.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticalButtonGroupAutoEnabler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttons" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"[] buttons"}</code> | Child `AnalyticalButton` components, filled automatically including inactive children. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Sets `IsEnabled` false on all child buttons. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets `IsEnabled` true on all child buttons. |

</details>
