---
title: "PlatformDriver"
description: "class PlatformDriver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDriver

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`SingletonBehaviour<PlatformDriver>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`PlatformDriver`](/game-api/types/global-p/platformdriver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDriver()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activedevice" /><code><Link to="/game-api/types/global-i-l/ixrdevicesdkcontroller">{"IXrDeviceSdkController"}</Link>{" ActiveDevice { get; private set; }"}</code> |  |
| <Link id="m-mode-2" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-platformset" /><code>{"static event "}<Link to="/game-api/types/global-p/platformmodehandler">{"PlatformModeHandler"}</Link>{" PlatformSet"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupplatform" /><code>{"IEnumerator SetupPlatform("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player) (iterator)"}</code> |  |
| <Link id="m-stopactiveplatform" /><code>{"void StopActivePlatform()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-startplatform" /><code>{"private Coroutine StartPlatform("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-startplatformcoroutine" /><code>{"private IEnumerator StartPlatformCoroutine("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" newMode, "}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player) (iterator)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
