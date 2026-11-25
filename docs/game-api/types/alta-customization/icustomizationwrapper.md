---
title: "ICustomizationWrapper"
description: "interface ICustomizationWrapper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationWrapper

An **interface** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CustomizationWrapper`](/game-api/types/alta-customization/customizationwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"IEnumerable<uint> Items { get; }"}</code> |  |
| <Link id="m-overrideset" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{", "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> OverrideSet { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applystreamitems" /><code>{"void ApplyStreamItems(IEnumerable<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> items)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-finishload" /><code>{"void FinishLoad(CancellationTokenSource source)"}</code> |  |
| <Link id="m-getarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] GetArguments(uint hash)"}</code> |  |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> |  |
| <Link id="m-startload" /><code>{"CancellationTokenSource StartLoad()"}</code> |  |
| <Link id="m-startsession" /><code>{"Task StartSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" serializeSession)"}</code> |  |
| <Link id="m-stopsession" /><code>{"void StopSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" serializeSession)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ICustomizationWrapper`:

[`CustomizationWrapperSerializer.ForceBasicBodyParts`](/game-api/types/alta-customization/customizationwrapperserializer#m-forcebasicbodyparts), [`CustomizationWrapperSerializer.GetDefaults`](/game-api/types/alta-customization/customizationwrapperserializer#m-getdefaults), [`CustomizationWrapperSerializer.LoadAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-loadasync), [`CustomizationWrapperSerializer.ReadStreamAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-readstreamasync), [`CustomizationWrapperSerializer.Save`](/game-api/types/alta-customization/customizationwrapperserializer#m-save), [`CustomizationWrapperSerializer.SerializeStreamAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-serializestreamasync), [`CustomizationWrapperSerializer.WriteStream`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestream), [`CustomizationWrapperSerializer.WriteStreamRestricted`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestreamrestricted).
