---
title: "WebInterface"
description: "Static helper that posts a JSON string to a URL in the background and ignores the result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebInterface

A **class** in `Root.Township`, no namespace.

Static helper that posts a JSON string to a URL in the background and ignores the result. Nothing in the decompiled code calls it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WebInterface()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private static WebClient client"}</code> | Shared `WebClient` with a JSON content type header. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofflinemode" /><code>{"static bool IsOfflineMode { get; set; }"}</code> | When true, `FireAndForget` sends nothing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fireandforget" /><code>{"static void FireAndForget(string uri, string data)"}</code> | Posts the data to the URI on a background task with the shared `WebClient`. Does nothing in offline mode; errors are swallowed. |
