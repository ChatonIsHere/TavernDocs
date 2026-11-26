---
title: "StatList"
description: "A list of stat and player pairs, with a type converter so console commands can take one as an argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatList

A **class** in `Root.Township`, `Alta.StatSystem`.

A list of stat and player pairs, with a type converter so console commands can take one as an argument.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `IEnumerable<StatPlayerPair>`, `IEnumerable`
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatList(IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/statplayerpair">{"StatPlayerPair"}</Link>{"> range)"}</code> | <span className="api-desc">Creates a `StatList` from `range`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stats" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/statplayerpair">{"StatPlayerPair"}</Link>{"> stats"}</code> | <span className="api-desc">The pairs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/alta-stats-effects/statplayerpair">{"StatPlayerPair"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the stat and player pairs. The non generic version casts to `IEnumerable<Stat>` and probably throws.</span> |
| <Link id="m-name" /><code>{"string Name()"}</code> | <span className="api-desc">Name of the first entry's stat definition.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the stat and player pairs. The non generic version casts to `IEnumerable<Stat>` and probably throws.</span> |

</details>
