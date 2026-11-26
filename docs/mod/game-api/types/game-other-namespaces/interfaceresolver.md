---
title: "InterfaceResolver"
description: "Obsolete static service locator for platform services, used until dependency injection covers them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InterfaceResolver

A **class** in `Root.Township`, `Features.Meta.Resolvers`.

Obsolete static service locator for platform services, used until dependency injection covers them. In this build only `IVoiceChat` gets a real instance; the shop, Oculus, purchase and friend services resolve to null unless overridden.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InterfaceResolver()"}</code> | <span className="api-desc">Creates an `InterfaceResolver` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instanceoverrides" /><code>{"private static readonly HashSet<Type> instanceOverrides"}</code> | <span className="api-desc">Service types replaced through `SetInstanceOverride`.</span> |
| <Link id="m-ioculuswrapper" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" iOculusWrapper"}</code> | <span className="api-desc">Backing field for `IOculusWrapper`.</span> |
| <Link id="m-iplatformfriendservice" /><code>{"private static "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" iPlatformFriendService"}</code> | <span className="api-desc">Backing field for `IPlatformFriendService`.</span> |
| <Link id="m-ipurchaseconsumer" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" iPurchaseConsumer"}</code> | <span className="api-desc">Backing field for `IPurchaseConsumer`.</span> |
| <Link id="m-ishopcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" iShopController"}</code> | <span className="api-desc">Backing field for `IShopController`.</span> |
| <Link id="m-ivoicechat" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" iVoiceChat"}</code> | <span className="api-desc">Backing field for `IVoiceChat`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ioculuswrapper-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" { get; }"}</code> | <span className="api-desc">The Oculus wrapper, created on first use. Null in this build unless overridden.</span> |
| <Link id="m-iplatformfriendservice-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" { get; }"}</code> | <span className="api-desc">The platform friend service, created on first use. Null in this build unless overridden.</span> |
| <Link id="m-ipurchaseconsumer-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" { get; }"}</code> | <span className="api-desc">The purchase consumer, created on first use. Null in this build unless overridden.</span> |
| <Link id="m-ishopcontroller-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" { get; }"}</code> | <span className="api-desc">The shop controller, created on first use. Null in this build unless overridden.</span> |
| <Link id="m-ivoicechat-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" { get; }"}</code> | <span className="api-desc">The voice chat service, a `VoiceChat` created on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearinstanceoverrides" /><code>{"static void ClearInstanceOverrides()"}</code> | <span className="api-desc">Resets every service that was overridden back to null, so it is created again on next use.</span> |
| <Link id="m-setinstanceoverride" /><code>{"static void SetInstanceOverride<T>(object instance)"}</code> | <span className="api-desc">Replaces the service of type `T` with the given instance, by reflection over the static fields. Meant for tests, handy for mods.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createoculuswrapper" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" CreateOculusWrapper()"}</code> | <span className="api-desc">Returns null in this build.</span> |
| <Link id="m-createplatformfriendservice" /><code>{"private static "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" CreatePlatformFriendService()"}</code> | <span className="api-desc">Returns null in this build.</span> |
| <Link id="m-createpurchaseconsumer" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" CreatePurchaseConsumer()"}</code> | <span className="api-desc">Returns null in this build.</span> |
| <Link id="m-createshopcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" CreateShopController()"}</code> | <span className="api-desc">Returns null in this build.</span> |
| <Link id="m-createvoicechat" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" CreateVoiceChat()"}</code> | <span className="api-desc">Creates a new `VoiceChat`.</span> |

</details>
