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

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Nested in** [`AuthPayloads`](/tavernlib-api/types/backend-auth/authpayloads)
- **Attributes** `IsReadOnly`
- **Documented in** [AuthPayloads.AuthenticateOk](/tavernlib-api/types/backend-auth/authpayloads-authenticateok)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthenticateOk(ulong userId, bool questSceneRequired, bool tutorialSceneRequired, int gamePort, int webPort)"}</code> | Sets every field of the join reply. |

## Properties

<details>
<summary>6 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameport" /><code>{"private int GamePort { get; }"}</code> | The game port. |
| <Link id="m-questscenerequired" /><code>{"private bool QuestSceneRequired { get; }"}</code> | Whether the server runs the quest scene. |
| <Link id="m-status" /><code>{"private string Status { get; }"}</code> | Always `ok`. |
| <Link id="m-tutorialscenerequired" /><code>{"private bool TutorialSceneRequired { get; }"}</code> | Whether the server runs the tutorial scene. |
| <Link id="m-userid" /><code>{"private ulong UserId { get; }"}</code> | The player's user id. |
| <Link id="m-webport" /><code>{"private int WebPort { get; }"}</code> | The web port. |

</details>
