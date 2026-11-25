---
title: "ActiveDig"
description: "class ActiveDig in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveDig

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Wyrm, WyrmDigSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveDig()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-duration" /><code>{"private const float Duration"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activedig">{"ActiveDig"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/wyrmdigsettings">{"WyrmDigSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/wyrmdigsettings">{"WyrmDigSettings"}</Link>{" settings)"}</code> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-changesenses" /><code>{"private void ChangeSenses()"}</code> |
| <Link id="m-digfinished" /><code>{"private void DigFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |

</details>
