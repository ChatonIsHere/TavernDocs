---
title: "DistanceLOD"
description: "One distance level in a DistanceLODGroup: a set of renderers turned on or off together, and the squared distance it applies from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceLOD

A **class** in `Root.Township`, the global namespace.

One distance level in a `DistanceLODGroup`: a set of renderers turned on or off together, and the squared distance it applies from.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceLOD()"}</code> | <span className="api-desc">Creates a `DistanceLOD` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distancesquared" /><code>{"float distanceSquared"}</code> | <span className="api-desc">Squared distance at which this level applies.</span> |
| <Link id="m-renderers" /><code>{"List<Renderer> renderers"}</code> | <span className="api-desc">Renderers in this level.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether the level was last turned on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool enabled)"}</code> | <span className="api-desc">Turns every renderer in the level on or off, dropping any that have been destroyed.</span> |
| <Link id="m-setrenderers" /><code>{"void SetRenderers(IEnumerable<Renderer> newRenderers, "}<Link to="/mod/game-api/types/global-c-d/distancelod">{"DistanceLOD"}</Link>{"[] all, int thisIndex)"}</code> | <span className="api-desc">Replaces the renderer list. If the level is off, hides the new renderers that no other level also uses.</span> |

## Used in

Members of other types that take, return or hold a `DistanceLOD`:

<div className="api-used-in">

[`DistanceLODGroup.lods`](/mod/game-api/types/global-c-d/distancelodgroup#m-lods), [`DistanceLODGroup.LODs`](/mod/game-api/types/global-c-d/distancelodgroup#m-lods-2).

</div>
