---
title: "WwiseExtensions"
description: "Extension methods for Wwise sound events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WwiseExtensions

A **static class** in `Root.Township`, no namespace.

Extension methods for Wwise sound events.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-seek" /><code>{"static bool Seek(Event soundEvent, GameObject gameObject, float timePercentage)"}</code> | Seeks an event playing on a game object to a fraction of its length. Below 0 does nothing; 1 or more stops it and returns false. |
