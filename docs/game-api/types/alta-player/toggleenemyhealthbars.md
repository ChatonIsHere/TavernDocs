---
title: "ToggleEnemyHealthBars"
description: "class ToggleEnemyHealthBars in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleEnemyHealthBars

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ToggleEnemyHealthBars()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |
| <Link id="m-barscale" /><code>{"private Vector3 barScale"}</code> |
| <Link id="m-healthbarmapping" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-player/healthbar">{"HealthBar"}</Link>{"> healthBarMapping"}</code> |
| <Link id="m-healthshader" /><code>{"private Shader healthShader"}</code> |
| <Link id="m-rotationupdater" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" rotationUpdater"}</code> |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkenemyneedshealthbar" /><code>{"private bool CheckEnemyNeedsHealthBar("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" enemy, out "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |
| <Link id="m-managerdispose" /><code>{"private void ManagerDispose("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-updaterotations" /><code>{"private IEnumerator UpdateRotations() (iterator)"}</code> |

</details>
