---
title: "ColliderExtension"
description: "Extension methods for finding a component on a collider or its attached rigidbody."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColliderExtension

A **static class** in `Root.Township`, no namespace.

Extension methods for finding a component on a collider or its attached rigidbody.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getbodycomponent" /><code>{"static T GetBodyComponent<T>(Collider collider)"}</code> | Gets the component from the attached rigidbody, or from the collider if it has none. |
| <Link id="m-getcomponentincludingbody" /><code>{"static T GetComponentIncludingBody<T>(Collider collider)"}</code> | Gets the component from the collider, then from the attached rigidbody if not found. |
