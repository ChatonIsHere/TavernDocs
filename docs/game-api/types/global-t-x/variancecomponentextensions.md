---
title: "VarianceComponentExtensions"
description: "GameObject extensions that get components of one base type and keep those that also implement another type (such as an interface)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VarianceComponentExtensions

A **static class** in `Root.Township`, no namespace.

GameObject extensions that get components of one base type and keep those that also implement another type (such as an interface).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvariantcomponents" /><code>{"static IEnumerable<TVariant> GetVariantComponents<TBase, TVariant>(GameObject gameObject)"}</code> | Components of type `TBase` on the object that are also `TVariant`. |
| <Link id="m-getvariantcomponentsinchildren" /><code>{"static IEnumerable<TVariant> GetVariantComponentsInChildren<TBase, TVariant>(GameObject gameObject)"}</code> | Components of type `TBase` on the object and its children that are also `TVariant`. |
