---
title: "NotAllowedInRemoteAttribute"
description: "Console requirement: the command can only be run by the locally logged-in user, not by a remote console user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NotAllowedInRemoteAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command can only be run by the locally logged-in user, not by a remote console user.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NotAllowedInRemoteAttribute()"}</code> | <span className="api-desc">Creates a `NotAllowedInRemoteAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">True with no API client, otherwise only if the caller is the user logged in on this game.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "Not Allowed in Remote".</span> |
