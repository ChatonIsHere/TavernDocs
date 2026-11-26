---
title: "ProfessionSkillDelegate"
description: "Handler for a player and a ProfessionSkill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkillDelegate

A **delegate** in `Root.Township`, no namespace.

Handler for a player and a `ProfessionSkill`. Used by the static `ProfessionSkill.OnSkillExecuted` event, which fires when a skill runs its effect for a player.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfessionSkillDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |

## Used in

Members of other types that take, return or hold a `ProfessionSkillDelegate`:

[`ProfessionSkill.OnSkillExecuted`](/game-api/types/global-p/professionskill#m-onskillexecuted).
