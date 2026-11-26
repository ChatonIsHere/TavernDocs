---
title: "EditorLink"
description: "Serializable link to an asset by GUID, meant for editor use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorLink

A **class** in `Root.Township`, no namespace.

Serializable link to an asset by GUID, meant for editor use. In the game build every method is a stub.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorLink()"}</code> | Creates an `EditorLink` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-guid" /><code>{"private string guid"}</code> | GUID of the linked asset. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"T Load<T>()"}</code> | Logs an error and returns null outside the editor. |
| <Link id="m-set" /><code>{"void Set(Object value)"}</code> | Does nothing in the game build. |
| <Link id="m-setifnull" /><code>{"void SetIfNull(Func<Object> getValue)"}</code> | Does nothing in the game build. |
| <Link id="m-setifnull-2" /><code>{"void SetIfNull(Object value)"}</code> | Does nothing in the game build. |

## Used in

Members of other types that take, return or hold a `EditorLink`:

[`CosmeticMeshPartBase<T>.originalLink`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-originallink).
