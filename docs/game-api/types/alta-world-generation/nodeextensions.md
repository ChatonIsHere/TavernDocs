---
title: "NodeExtensions"
description: "Helpers for sequences of PAGaC grid Nodes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NodeExtensions

A **static class** in `Root.Township`, `Alta.PAGaC`.

Helpers for sequences of PAGaC grid `Node`s.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-within" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> Within(IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> nodes, int minX, int minY, int minZ, int maxX, int maxY, int maxZ) (iterator)"}</code> | Yields the nodes whose coordinates fall inside the given box, bounds included. |
