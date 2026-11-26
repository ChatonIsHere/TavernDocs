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
| <Link id="m-ctor" /><code>{"SettingBasedToggler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-expectedboolvalues" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/boolsettingvalue">{"BoolSettingValue"}</Link>{"[] expectedBoolValues"}</code> | <span className="api-desc">Bool setting values that must all hold.</span> |
| <Link id="m-expectedmodes" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" expectedModes"}</code> | <span className="api-desc">Player modes the object is shown in. Default all.</span> |
| <Link id="m-expectedstringvalues" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/stringsettingvalue">{"StringSettingValue"}</Link>{"[] expectedStringValues"}</code> | <span className="api-desc">String setting values that must all hold.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to game settings changes and applies the current state.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from game settings changes.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue(Settings settings)"}</code> | <span className="api-desc">Sets the object active only if the player mode matches and every expected setting value holds.</span> |

</details>
