---
title: "IOculusWrapper"
description: "interface IOculusWrapper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOculusWrapper

An **interface** in `Root.Township`, `Features.Meta.Platform.Oculus`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deeplinklogresult" /><code>{"void DeeplinkLogResult(string trackingId, "}<Link to="/game-api/types/alta-menus/platformlaunchresult">{"PlatformLaunchResult"}</Link>{" launchResult)"}</code> |  |
| <Link id="m-getoculusid" /><code>{"Task<ulong> GetOculusId()"}</code> |  |
| <Link id="m-getoculusproof" /><code>{"Task<string> GetOculusProof()"}</code> |  |
| <Link id="m-getoculususername" /><code>{"Task<string> GetOculusUsername()"}</code> |  |
| <Link id="m-getplatformagnosticlaunchdetails" /><code><Link to="/game-api/types/alta-menus/platformlaunchdetails">{"PlatformLaunchDetails"}</Link>{" GetPlatformAgnosticLaunchDetails()"}</code> |  |
| <Link id="m-getplatformlaunchtype" /><code><Link to="/game-api/types/global-p/platformlaunchtype">{"PlatformLaunchType"}</Link>{" GetPlatformLaunchType()"}</code> |  |
| <Link id="m-getproofsucceed" /><code>{"Task<bool> GetProofSucceed()"}</code> |  |
| <Link id="m-getserverid" /><code>{"int GetServerId()"}</code> |  |
| <Link id="m-hasinputfocus" /><code>{"bool HasInputFocus()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-initializedeeplink" /><code>{"void InitializeDeeplink(int serverId)"}</code> |  |
| <Link id="m-oculusapplifecyclesetlaunchintentchangednotificationcallback" /><code>{"void OculusAppLifecycleSetLaunchIntentChangedNotificationCallback(Action callback)"}</code> |  |
| <Link id="m-playerrichpresencesetisjoinable" /><code>{"void PlayerRichPresenceSetIsJoinable(bool isJoinable)"}</code> |  |
| <Link id="m-richpresenceclear" /><code>{"void RichPresenceClear()"}</code> |  |
| <Link id="m-richpresenceset" /><code>{"void RichPresenceSet()"}</code> |  |
| <Link id="m-richpresencesetapiname" /><code>{"void RichPresenceSetApiName(string newApiName)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IOculusWrapper`:

[`InterfaceResolver.CreateOculusWrapper`](/game-api/types/game-other-namespaces/interfaceresolver#m-createoculuswrapper), [`InterfaceResolver.iOculusWrapper`](/game-api/types/game-other-namespaces/interfaceresolver#m-ioculuswrapper), [`InterfaceResolver.IOculusWrapper`](/game-api/types/game-other-namespaces/interfaceresolver#m-ioculuswrapper-2).
