---
title: "ImpactTypeFilter"
description: "Inspector list of allowed impact types."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTypeFilter

A **class** in `Root.Township`, `Alta.Impact`.

Inspector list of allowed impact types. An empty list allows everything.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactTypeFilter()"}</code> | <span className="api-desc">Creates an `ImpactTypeFilter` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-types" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{"[] types"}</code> | <span className="api-desc">The allowed impact types.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type)"}</code> | <span className="api-desc">Whether the impact type is in the list (always true if the list is empty).</span> |
| <Link id="m-validateimpactool" /><code>{"bool ValidateImpacTool("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Whether any of the tool's impactors has an allowed impact type (always true if the list is empty).</span> |

## Used in

Members of other types that take, return or hold a `ImpactTypeFilter`:

<div className="api-used-in">

[`ImpactHitTrigger.impactTypeFilter`](/mod/game-api/types/alta-items/impacthittrigger#m-impacttypefilter), [`TargetBasedSkill.impactTypeFilter`](/mod/game-api/types/global-t-x/targetbasedskill#m-impacttypefilter).

</div>
