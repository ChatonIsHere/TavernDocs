---
title: "FeatureSetFlags"
description: "Flags for which platform feature set a server runs: PC, mobile or both."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FeatureSetFlags

An **enum** in `Root.Township`, `ATT.TownshipServer`.

Flags for which platform feature set a server runs: PC, mobile or both. Chosen by `ServerFeatureSetProvider`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-mobilefeatureset" /><code>{"MobileFeatureSet = 2"}</code> |
| <Link id="m-pcfeatureset" /><code>{"PcFeatureSet = 1"}</code> |

## Used in

Members of other types that take, return or hold a `FeatureSetFlags`:

[`ServerFeatureSetProvider.FeatureSet`](/mod/game-api/types/game-other-namespaces/serverfeaturesetprovider#m-featureset), [`ServerFeatureSetProvider.GetEditorServerType`](/mod/game-api/types/game-other-namespaces/serverfeaturesetprovider#m-geteditorservertype), [`ServerFeatureSetProvider.GetServerType`](/mod/game-api/types/game-other-namespaces/serverfeaturesetprovider#m-getservertype), [`ServerFeatureSetProvider.serverType`](/mod/game-api/types/game-other-namespaces/serverfeaturesetprovider#m-servertype).
