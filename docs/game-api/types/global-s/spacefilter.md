---
title: "SpaceFilter"
description: "class SpaceFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceFilter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`SpaceFilter.Create`](/game-api/types/global-s/spacefilter-create)
- **Nested types** [`Create`](/game-api/types/global-s/spacefilter-create), [`Redirect`](/game-api/types/global-s/spacefilter-redirect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpaceFilter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allowedtypes" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" allowedTypes"}</code> |  |
| <Link id="m-isnonspaceallowed" /><code>{"private bool isNonSpaceAllowed"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-redirects" /><code>{"private "}<Link to="/game-api/types/global-s/spacefilter-redirect">{"SpaceFilter.Redirect"}</Link>{"[] redirects"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> |  |
