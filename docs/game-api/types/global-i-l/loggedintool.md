---
title: "LoggedInTool"
description: "Base for menu tools that only work while logged in to Alta's account services, such as the shop and cosmetics interfaces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggedInTool

An **abstract class** in `Root.Township`, no namespace.

Base for menu tools that only work while logged in to Alta's account services, such as the shop and cosmetics interfaces. It follows `LoginManager`'s login and logout events.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AdminTool`](/game-api/types/global-a-b/admintool), [`CosmeticPresetsManager`](/game-api/types/alta-customization/cosmeticpresetsmanager), [`MainMenuCustomizationInterface`](/game-api/types/alta-customization/mainmenucustomizationinterface), [`MainMenuShopInterface`](/game-api/types/alta-customization/mainmenushopinterface), [`ShopInterface`](/game-api/types/alta-customization/shopinterface), [`FriendsManager`](/game-api/types/alta-menus/friendsmanager), [`ServersManager`](/game-api/types/alta-networking/serversmanager), [`EmailVerificationController`](/game-api/types/global-e-h/emailverificationcontroller), [`IAPViewModel`](/game-api/types/game-other-namespaces/iapviewmodel), [`LogoutAction`](/game-api/types/global-i-l/logoutaction), [`PlayTutorialChecker`](/game-api/types/global-p/playtutorialchecker), [`StoreRotationPopup`](/game-api/types/global-s/storerotationpopup), [`SubscriptionManager`](/game-api/types/global-s/subscriptionmanager), [`UserGreeter`](/game-api/types/global-t-x/usergreeter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LoggedInTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected abstract void LoggedIn()"}</code> | Called on login, and on `Start` if already logged in. |
| <Link id="m-loggedout" /><code>{"protected abstract void LoggedOut()"}</code> | Called on logout. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Unsubscribes from the login events. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Subscribes to the login events. |
