---
title: "OneTimeEventTest"
description: "Developer test component that exercises OneTimeEvent by adding and removing handlers in Awake and logging the results."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeEventTest

A **class** in `Root.Township`, the global namespace.

Developer test component that exercises `OneTimeEvent` by adding and removing handlers in `Awake` and logging the results.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`IntTest`](/mod/game-api/types/global-m-o/onetimeeventtest-inttest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeEventTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onetimeevent" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<"}<Link to="/mod/game-api/types/global-m-o/onetimeeventtest-inttest">{"OneTimeEventTest.IntTest"}</Link>{"> oneTimeEvent"}</code> | <span className="api-desc">The `OneTimeEvent` instance under test.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Adds and removes handlers on `oneTimeEvent` and invokes it twice, as a test.</span> |
| <Link id="m-testhandler" /><code>{"private void TestHandler(int number)"}</code> | <span className="api-desc">Test handler that logs the number it receives.</span> |

</details>
