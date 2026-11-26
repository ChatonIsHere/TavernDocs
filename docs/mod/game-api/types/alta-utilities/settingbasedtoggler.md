---
title: "SettingBasedToggler"
description: "Component that turns its GameObject on or off to match the current player mode and a set of expected game setting values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingBasedToggler

A **class** in `Root.Township`, `Alta.Utilities`.

Component that turns its GameObject on or off to match the current player mode and a set of expected game setting values. Client side.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingBasedToggler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-expectedboolvalues" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/boolsettingvalue">{"BoolSettingValue"}</Link>{"[] expectedBoolValues"}</code> | Bool setting values that must all hold. |
| <Link id="m-expectedmodes" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" expectedModes"}</code> | Player modes the object is shown in. Default all. |
| <Link id="m-expectedstringvalues" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/stringsettingvalue">{"StringSettingValue"}</Link>{"[] expectedStringValues"}</code> | String setting values that must all hold. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to game settings changes and applies the current state. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from game settings changes. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue(Settings settings)"}</code> | Sets the object active only if the player mode matches and every expected setting value holds. |

</details>
