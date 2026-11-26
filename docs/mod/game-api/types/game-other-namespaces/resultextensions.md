---
title: "ResultExtensions"
description: "Extension for logging a failed IResult to a micro tutorial logger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ResultExtensions

A **static class** in `Root.Township`, `ATT.MicroTutorial`.

Extension for logging a failed `IResult` to a micro tutorial logger.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logerror" /><code>{"static void LogError(IResult result, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger)"}</code> | <span className="api-desc">Logs the result's exception if it has one, otherwise its error message.</span> |
