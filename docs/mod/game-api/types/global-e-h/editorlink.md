---
title: "EditorLink"
description: "Serializable link to an asset by GUID, meant for editor use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorLink

A **class** in `Root.Township`, the global namespace.

Serializable link to an asset by GUID, meant for editor use. In the game build every method is a stub.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorLink()"}</code> | <span className="api-desc">Creates an `EditorLink` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-guid" /><code>{"private string guid"}</code> | <span className="api-desc">GUID of the linked asset.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"T Load<T>()"}</code> | <span className="api-desc">Logs an error and returns null outside the editor.</span> |
| <Link id="m-set" /><code>{"void Set(Object value)"}</code> | <span className="api-desc">Does nothing in the game build.</span> |
| <Link id="m-setifnull" /><code>{"void SetIfNull(Func<Object> getValue)"}</code> | <span className="api-desc">Does nothing in the game build.</span> |
| <Link id="m-setifnull-2" /><code>{"void SetIfNull(Object value)"}</code> | <span className="api-desc">Does nothing in the game build.</span> |

## Used in

Members of other types that take, return or hold a `EditorLink`:

<div className="api-used-in">

[`CosmeticMeshPartBase<T>.originalLink`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-originallink).

</div>
