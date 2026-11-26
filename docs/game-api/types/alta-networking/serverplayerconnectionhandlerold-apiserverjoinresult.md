---
title: "ServerPlayerConnectionHandlerOld.ApiServerJoinResult"
description: "Result of a join check with the web API: whether it passed and an error message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPlayerConnectionHandlerOld.ApiServerJoinResult

A **struct** in `Root.Township`, `Alta.Networking.Servers`.

Result of a join check with the web API: whether it passed and an error message. Not used anywhere in this build.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`ServerPlayerConnectionHandlerOld`](/game-api/types/alta-networking/serverplayerconnectionhandlerold)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-errormessage" /><code>{"string ErrorMessage { get; set; }"}</code> | Why the join failed. |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; set; }"}</code> | Whether the join is allowed. |
