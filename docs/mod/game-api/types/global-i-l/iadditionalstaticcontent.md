---
title: "IAdditionalStaticContent"
description: "Extra static content that can be instantiated under a transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAdditionalStaticContent

An **interface** in `Root.Township`, the global namespace.

Extra static content that can be instantiated under a transform.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`AdditionalStaticContent`](/mod/game-api/types/global-a-b/additionalstaticcontent), [`ModifiableAdditionalStaticContent`](/mod/game-api/types/global-m-o/modifiableadditionalstaticcontent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The content's transform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatecontent" /><code>{"void InstantiateContent(Transform parent, HideFlags hideFlags = 0)"}</code> | <span className="api-desc">Creates the content under the given parent, with optional hide flags.</span> |
