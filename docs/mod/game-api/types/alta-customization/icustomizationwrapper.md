---
title: "ICustomizationWrapper"
description: "Holds a character's set of cosmetic items and their arguments, and loads their assets in sessions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationWrapper

An **interface** in `Root.Township`, `Alta.Customization`.

Holds a character's set of cosmetic items and their arguments, and loads their assets in sessions.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Derived types** [`CustomizationWrapper`](/mod/game-api/types/alta-customization/customizationwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"IEnumerable<uint> Items { get; }"}</code> | <span className="api-desc">Hashes of the cosmetic items in the set.</span> |
| <Link id="m-overrideset" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> OverrideSet { get; set; }"}</code> | <span className="api-desc">Map that swaps one cosmetic definition for another.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applystreamitems" /><code>{"void ApplyStreamItems(IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> items)"}</code> | <span className="api-desc">Replaces the set with items read from a stream.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the set.</span> |
| <Link id="m-finishload" /><code>{"void FinishLoad(CancellationTokenSource source)"}</code> | <span className="api-desc">Ends the load started with that token.</span> |
| <Link id="m-getarguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] GetArguments(uint hash)"}</code> | <span className="api-desc">Arguments (colours and so on) for an item's parts.</span> |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> | <span className="api-desc">Loads a cosmetic definition by hash.</span> |
| <Link id="m-startload" /><code>{"CancellationTokenSource StartLoad()"}</code> | <span className="api-desc">Starts a load and returns a token to cancel it.</span> |
| <Link id="m-startsession" /><code>{"Task StartSession("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" serializeSession)"}</code> | <span className="api-desc">Starts using an addressable session to load assets.</span> |
| <Link id="m-stopsession" /><code>{"void StopSession("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" serializeSession)"}</code> | <span className="api-desc">Stops using an addressable session.</span> |

## Used in

Members of other types that take, return or hold a `ICustomizationWrapper`:

<div className="api-used-in">

[`CustomizationWrapperSerializer.ForceBasicBodyParts`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-forcebasicbodyparts), [`CustomizationWrapperSerializer.GetDefaults`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-getdefaults), [`CustomizationWrapperSerializer.LoadAsync`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-loadasync), [`CustomizationWrapperSerializer.ReadStreamAsync`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-readstreamasync), [`CustomizationWrapperSerializer.Save`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-save), [`CustomizationWrapperSerializer.SerializeStreamAsync`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-serializestreamasync), [`CustomizationWrapperSerializer.WriteStream`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-writestream), [`CustomizationWrapperSerializer.WriteStreamRestricted`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-writestreamrestricted).

</div>
