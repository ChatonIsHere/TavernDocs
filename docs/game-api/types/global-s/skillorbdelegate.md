---
title: "SkillOrbDelegate"
description: "delegate SkillOrbDelegate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbDelegate

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbDelegate(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SkillOrbDelegate`:

[`PlayerProgressionManager.OnPracticingChanged`](/game-api/types/global-p/playerprogressionmanager#m-onpracticingchanged).
