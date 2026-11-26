---
title: "StalactiteFall"
description: "Drops stalactites one at a time: each call frees a random one that hasn't fallen yet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StalactiteFall

A **class** in `Root.Township`, no namespace.

Drops stalactites one at a time: each call frees a random one that hasn't fallen yet.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StalactiteFall()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stalactites" /><code>{"private "}<Link to="/game-api/types/global-t-x/togglekinematiclogic">{"ToggleKinematicLogic"}</Link>{"[] stalactites"}</code> | The stalactites, each with a kinematic toggle. |
| <Link id="m-triggeredvalues" /><code>{"private bool[] triggeredValues"}</code> | Which stalactites have dropped. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendonetrue" /><code>{"void SendOneTrue()"}</code> | Turns off kinematic on a random undropped stalactite, or logs if all have dropped. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alltriggered" /><code>{"private bool AllTriggered()"}</code> | True once every stalactite has dropped. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets up the dropped flags. |

</details>
