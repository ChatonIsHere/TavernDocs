---
title: "OneTimeEventTest"
description: "Developer test component that exercises OneTimeEvent by adding and removing handlers in Awake and logging the results."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeEventTest

A **class** in `Root.Township`, no namespace.

Developer test component that exercises `OneTimeEvent` by adding and removing handlers in `Awake` and logging the results.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`IntTest`](/game-api/types/global-m-o/onetimeeventtest-inttest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OneTimeEventTest()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onetimeevent" /><code>{"private "}<Link to="/game-api/types/global-m-o/onetimeevent-t">{"OneTimeEvent"}</Link>{"<"}<Link to="/game-api/types/global-m-o/onetimeeventtest-inttest">{"OneTimeEventTest.IntTest"}</Link>{"> oneTimeEvent"}</code> | The `OneTimeEvent` instance under test. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Adds and removes handlers on `oneTimeEvent` and invokes it twice, as a test. |
| <Link id="m-testhandler" /><code>{"private void TestHandler(int number)"}</code> | Test handler that logs the number it receives. |

</details>
