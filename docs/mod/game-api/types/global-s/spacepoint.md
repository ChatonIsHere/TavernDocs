---
title: "SpacePoint"
description: "A point in a network of connected points that defines an area attribute, such as darkness or ambience, by weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpacePoint

A **class** in `Root.Township`, the global namespace.

A point in a network of connected points that defines an area attribute, such as darkness or ambience, by weight.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AmbienceSpacePoint`](/mod/game-api/types/alta-world/ambiencespacepoint), [`DarknessArea`](/mod/game-api/types/global-c-d/darknessarea), [`TriggerArea`](/mod/game-api/types/global-t-x/triggerarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpacePoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-updatemodule" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared update module for space defined attributes, also used by forest atmosphere.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectedto" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] connectedTo"}</code> | <span className="api-desc">Neighbouring points this one links to. Backing field for `ConnectedTo`.</span> |
| <Link id="m-setweight" /><code>{"private float setWeight"}</code> | <span className="api-desc">Weight value for this point. Backing field for `SetWeight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedto-2" /><code><Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] ConnectedTo { get; }"}</code> | <span className="api-desc">The neighbouring points. Drawn as lines in the editor.</span> |
| <Link id="m-setweight-2" /><code>{"float SetWeight { get; }"}</code> | <span className="api-desc">The attribute value at this point.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws a line to each connected point.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SpacePoint`:

<div className="api-used-in">

[`DarknessArea.Points`](/mod/game-api/types/global-c-d/darknessarea#m-points), [`DarknessArea.SendNewCloserPoint`](/mod/game-api/types/global-c-d/darknessarea#m-sendnewcloserpoint), [`DarknessArea.spacePoints`](/mod/game-api/types/global-c-d/darknessarea#m-spacepoints), [`TriggerArea.Points`](/mod/game-api/types/global-t-x/triggerarea#m-points), [`TriggerArea.SendNewCloserPoint`](/mod/game-api/types/global-t-x/triggerarea#m-sendnewcloserpoint), [`TriggerArea.spacePoints`](/mod/game-api/types/global-t-x/triggerarea#m-spacepoints).

</div>
