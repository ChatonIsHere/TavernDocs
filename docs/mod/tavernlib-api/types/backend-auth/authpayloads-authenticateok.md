---
title: "AuthPayloads.AuthenticateOk"
description: "The answer to an accepted join: the player's user id, whether the Quest or tutorial scene is needed, and the game and web ports."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthPayloads.AuthenticateOk

A **struct** in `TavernLib`, `TavernLib.Backend.Auth`.

The answer to an accepted join: the player's user id, whether the Quest or tutorial scene is needed, and the game and web ports.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`
- **Documented in** [AuthPayloads.AuthenticateOk](/mod/tavernlib-api/types/backend-auth/authpayloads-authenticateok)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthenticateOk(ulong userId, bool questSceneRequired, bool tutorialSceneRequired, int gamePort, int webPort)"}</code> | <span className="api-desc">Sets every field of the join reply.</span> |

## Properties

<details className="api-private">
<summary>6 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameport" /><code>{"private int GamePort { get; }"}</code> | <span className="api-desc">The game port.</span> |
| <Link id="m-questscenerequired" /><code>{"private bool QuestSceneRequired { get; }"}</code> | <span className="api-desc">Whether the server runs the quest scene.</span> |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> | <span className="api-desc">Always `ok`.</span> |
| <Link id="m-tutorialscenerequired" /><code>{"private bool TutorialSceneRequired { get; }"}</code> | <span className="api-desc">Whether the server runs the tutorial scene.</span> |
| <Link id="m-userid" /><code>{"private ulong UserId { get; }"}</code> | <span className="api-desc">The player's user id.</span> |
| <Link id="m-webport" /><code>{"private int WebPort { get; }"}</code> | <span className="api-desc">The web port.</span> |

</details>
