---
title: "SenderInputArrayConverter"
description: "Extension helper that turns a list of sender inputs into an array of their linked data, for saving array receivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenderInputArrayConverter

A **static class** in `Root.Township`, `Alta.Logic`.

Extension helper that turns a list of sender inputs into an array of their linked data, for saving array receivers.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convert" /><code>{"static TData[] Convert<TType, TData, TSender>(List<TType> input)"}</code> | Removes inputs with no linked data from the list (it changes the list), then returns the remaining inputs' data as an array. |
