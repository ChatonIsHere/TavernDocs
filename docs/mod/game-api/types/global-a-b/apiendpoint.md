---
title: "ApiEndpoint"
description: "Which Alta web API environment to connect to: production, development, latest, test, local or a custom URL."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiEndpoint

An **enum** in `Root.Township`, the global namespace.

Which Alta web API environment to connect to: production, development, latest, test, local or a custom URL.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Values

| Member |
| --- |
| <Link id="m-custom" /><code>{"Custom = 5"}</code> |
| <Link id="m-development" /><code>{"Development = 1"}</code> |
| <Link id="m-latest" /><code>{"Latest = 2"}</code> |
| <Link id="m-local" /><code>{"Local = 4"}</code> |
| <Link id="m-production" /><code>{"Production = 0"}</code> |
| <Link id="m-test" /><code>{"Test = 3"}</code> |

## Used in

Members of other types that take, return or hold a `ApiEndpoint`:

[`GameSettings.ApiEndpoint`](/mod/game-api/types/alta-utilities/gamesettings#m-apiendpoint), [`EditorApiSettings.endpointInEditor`](/mod/game-api/types/global-e-h/editorapisettings#m-endpointineditor), [`EditorApiSettings.EndpointInEditor`](/mod/game-api/types/global-e-h/editorapisettings#m-endpointineditor-2).
