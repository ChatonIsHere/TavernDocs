---
title: "Region"
description: "Which Alta platform region an account belongs to: Global or China."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Region

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

Which Alta platform region an account belongs to: Global or China.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-china" /><code>{"China = 1"}</code> |
| <Link id="m-global" /><code>{"Global = 0"}</code> |

## Used in

Members of other types that take, return or hold a `Region`:

[`IPicoClient.GetLinkedAccount`](/game-api/types/assembly-api-client/ipicoclient#m-getlinkedaccount), [`IPicoClient.HasLinkedAccount`](/game-api/types/assembly-api-client/ipicoclient#m-haslinkedaccount), [`IPicoClient.LinkLoggedInAccount`](/game-api/types/assembly-api-client/ipicoclient#m-linkloggedinaccount), [`PicoClient.GetLinkedAccount`](/game-api/types/assembly-api-client/picoclient#m-getlinkedaccount), [`PicoClient.HasLinkedAccount`](/game-api/types/assembly-api-client/picoclient#m-haslinkedaccount), [`PicoClient.LinkLoggedInAccount`](/game-api/types/assembly-api-client/picoclient#m-linkloggedinaccount), [`AccountLinkData.Region`](/game-api/types/assembly-api-models/accountlinkdata#m-region), [`AccountRequestBase.Region`](/game-api/types/assembly-api-models/accountrequestbase#m-region).
