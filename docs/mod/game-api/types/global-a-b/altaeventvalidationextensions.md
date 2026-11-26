---
title: "AltaEventValidationExtensions"
description: "Extension that cleans broken persistent listeners out of an AltaEvent's inspector UnityEvent, using reflection on Unity internals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEventValidationExtensions

A **static class** in `Root.Township`, the global namespace.

Extension that cleans broken persistent listeners out of an `AltaEvent`'s inspector `UnityEvent`, using reflection on Unity internals.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validate" /><code>{"static void Validate("}<Link to="/mod/game-api/types/global-i-l/ialtaeventvalidation">{"IAltaEventValidation"}</Link>{" altaEvent)"}</code> | Removes inspector listeners whose target is missing but still name a method, by rebuilding Unity's persistent call list. |
