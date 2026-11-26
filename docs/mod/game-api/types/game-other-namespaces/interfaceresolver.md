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
| <Link id="m-ctor" /><code>{"InterfaceResolver()"}</code> | Creates an `InterfaceResolver` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instanceoverrides" /><code>{"private static readonly HashSet<Type> instanceOverrides"}</code> | Service types replaced through `SetInstanceOverride`. |
| <Link id="m-ioculuswrapper" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" iOculusWrapper"}</code> | Backing field for `IOculusWrapper`. |
| <Link id="m-iplatformfriendservice" /><code>{"private static "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" iPlatformFriendService"}</code> | Backing field for `IPlatformFriendService`. |
| <Link id="m-ipurchaseconsumer" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" iPurchaseConsumer"}</code> | Backing field for `IPurchaseConsumer`. |
| <Link id="m-ishopcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" iShopController"}</code> | Backing field for `IShopController`. |
| <Link id="m-ivoicechat" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" iVoiceChat"}</code> | Backing field for `IVoiceChat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ioculuswrapper-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" { get; }"}</code> | The Oculus wrapper, created on first use. Null in this build unless overridden. |
| <Link id="m-iplatformfriendservice-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" { get; }"}</code> | The platform friend service, created on first use. Null in this build unless overridden. |
| <Link id="m-ipurchaseconsumer-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" { get; }"}</code> | The purchase consumer, created on first use. Null in this build unless overridden. |
| <Link id="m-ishopcontroller-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" { get; }"}</code> | The shop controller, created on first use. Null in this build unless overridden. |
| <Link id="m-ivoicechat-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" { get; }"}</code> | The voice chat service, a `VoiceChat` created on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearinstanceoverrides" /><code>{"static void ClearInstanceOverrides()"}</code> | Resets every service that was overridden back to null, so it is created again on next use. |
| <Link id="m-setinstanceoverride" /><code>{"static void SetInstanceOverride<T>(object instance)"}</code> | Replaces the service of type `T` with the given instance, by reflection over the static fields. Meant for tests, handy for mods. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createoculuswrapper" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ioculuswrapper">{"IOculusWrapper"}</Link>{" CreateOculusWrapper()"}</code> | Returns null in this build. |
| <Link id="m-createplatformfriendservice" /><code>{"private static "}<Link to="/mod/game-api/types/alta-menus/iplatformfriendservice">{"IPlatformFriendService"}</Link>{" CreatePlatformFriendService()"}</code> | Returns null in this build. |
| <Link id="m-createpurchaseconsumer" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ipurchaseconsumer">{"IPurchaseConsumer"}</Link>{" CreatePurchaseConsumer()"}</code> | Returns null in this build. |
| <Link id="m-createshopcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/ishopcontroller">{"IShopController"}</Link>{" CreateShopController()"}</code> | Returns null in this build. |
| <Link id="m-createvoicechat" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" CreateVoiceChat()"}</code> | Creates a new `VoiceChat`. |

</details>
