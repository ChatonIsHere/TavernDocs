---
title: "SkillOrbDelegate"
description: "Handler for a skill orb, whether it is being practised, and the player's progression manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbDelegate

A **delegate** in `Root.Township`, the global namespace.

Handler for a skill orb, whether it is being practised, and the player's progression manager. Used by `PlayerProgressionManager.OnPracticingChanged`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbDelegate(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `SkillOrbDelegate`:

<div className="api-used-in">

[`PlayerProgressionManager.OnPracticingChanged`](/mod/game-api/types/global-p/playerprogressionmanager#m-onpracticingchanged).

</div>
