---
title: "SkillOrbStatusUpdateDelegate"
description: "Handler for a skill orb and its new SkillStatus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbStatusUpdateDelegate

A **delegate** in `Root.Township`, no namespace.

Handler for a skill orb and its new `SkillStatus`. Used by `SkillOrb.AlowedUpdated`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbStatusUpdateDelegate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, "}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, "}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SkillOrbStatusUpdateDelegate`:

[`SkillOrb.AlowedUpdated`](/game-api/types/global-s/skillorb#m-alowedupdated).
