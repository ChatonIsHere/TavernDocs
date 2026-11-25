---
title: "SpacePoint"
description: "A point in a network of connected points that defines an area attribute, such as darkness or ambience, by weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpacePoint

A **class** in `Root.Township`, no namespace.

A point in a network of connected points that defines an area attribute, such as darkness or ambience, by weight.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AmbienceSpacePoint`](/game-api/types/alta-world/ambiencespacepoint), [`DarknessArea`](/game-api/types/global-c-d/darknessarea), [`TriggerArea`](/game-api/types/global-t-x/triggerarea)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpacePoint()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-updatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared update module for space defined attributes, also used by forest atmosphere. |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-connectedto" /><code>{"private "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] connectedTo"}</code> |
| <Link id="m-setweight" /><code>{"private float setWeight"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedto-2" /><code><Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] ConnectedTo { get; }"}</code> | The neighbouring points. Drawn as lines in the editor. |
| <Link id="m-setweight-2" /><code>{"float SetWeight { get; }"}</code> | The attribute value at this point. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SpacePoint`:

[`DarknessArea.Points`](/game-api/types/global-c-d/darknessarea#m-points), [`DarknessArea.SendNewCloserPoint`](/game-api/types/global-c-d/darknessarea#m-sendnewcloserpoint), [`DarknessArea.spacePoints`](/game-api/types/global-c-d/darknessarea#m-spacepoints), [`TriggerArea.Points`](/game-api/types/global-t-x/triggerarea#m-points), [`TriggerArea.SendNewCloserPoint`](/game-api/types/global-t-x/triggerarea#m-sendnewcloserpoint), [`TriggerArea.spacePoints`](/game-api/types/global-t-x/triggerarea#m-spacepoints).
