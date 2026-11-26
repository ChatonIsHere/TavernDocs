---
title: Other Alta assemblies
description: "Types in the small Alta.* assemblies next to Root.Township."
sidebar_position: 26
---

# Other Alta assemblies

Types in the smaller `Alta.*` assemblies, one section per assembly. 288 types, 38 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Analytics.Runtime

### Alta.Analytics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AbstractAnalyticsDispatcher`](/game-api/types/assembly-other/abstractanalyticsdispatcher) | abstract class | `IInitializable` | 1 | Base for classes that receive every analytics event sent through the `IAnalyticsService` and send it somewhere. Built by VContainer; `AltaAnalyticsDispatcher` is the game's one. |
| [`AnalyticsData`](/game-api/types/assembly-other/analyticsdata) | class | `IAnalyticsData`, `IAnalyticsPropertyWriter`, `IReadonlyAnalyticsData`, +3 more | 7 | The payload of one analytics event: its name, optional user ID and a list of name and value properties. Built by `AnalyticsEvent`. |
| [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent) | abstract class | `IAnalyticsEvent`, `IAnalyticsPropertyWriter` | 6 | Base class for analytics events in the current system. Holds the event data and lets instruments add extra properties once VContainer injects the event. |
| [`AnalyticsProperty`](/game-api/types/assembly-other/analyticsproperty) | struct | `IAnalyticsProperty` | 3 | One name and value pair in an analytics event. |
| [`AnalyticsService`](/game-api/types/assembly-other/analyticsservice) | class | `IAnalyticsService`, `IEventSource<IReadonlyAnalyticsData>` | 5 | The analytics hub: events sent to it are injected and their data passed to every listener. Registered in VContainer; listeners are dispatchers like `AltaAnalyticsDispatcher`. |
| [`IAnalyticsData`](/game-api/types/assembly-other/ianalyticsdata) | interface | `IAnalyticsPropertyWriter`, `IReadonlyAnalyticsData`, `IReadOnlyCollection<IAnalyticsProperty>`, +2 more | 1 | A writable set of analytics properties for one event, which can also be tagged with a user. |
| [`IAnalyticsEvent`](/game-api/types/assembly-other/ianalyticsevent) | interface | `IAnalyticsPropertyWriter` | 4 | An analytics event: a name, an optional user id and its properties, plus instruments that add extra data. Sent through `IAnalyticsService.Send`. |
| [`IAnalyticsInstrument`](/game-api/types/assembly-other/ianalyticsinstrument) | interface |  | 1 | Something that adds data to an analytics event when it is sent. Added to an event with `IAnalyticsEvent.AddInstrument`. |
| [`IAnalyticsProperty`](/game-api/types/assembly-other/ianalyticsproperty) | interface |  | 2 | One named value on an analytics event. |
| [`IAnalyticsPropertyWriter`](/game-api/types/assembly-other/ianalyticspropertywriter) | interface |  | 1 | Something you can add analytics properties to. Implemented by `AnalyticsData` and `AnalyticsEvent`. |
| [`IAnalyticsService`](/game-api/types/assembly-other/ianalyticsservice) | interface | `IEventSource<IReadonlyAnalyticsData>` | 1 | The game's analytics event bus. Listeners (dispatchers) receive each event's data. |
| [`IReadonlyAnalyticsData`](/game-api/types/assembly-other/ireadonlyanalyticsdata) | interface | `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md): `string EventName`, `int? UserId`, and the properties (`IAnalyticsProperty`) as a collection. |

## Alta.ArrayPools.Runtime

### Alta.ArrayPools

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ArrayPoolManager`](/game-api/types/assembly-other/arraypoolmanager) | static class |  | 4 | Keeps track of every power-of-two array pool in the game so they can be logged. |
| [`IUnclearedPower2ArrayPool`](/game-api/types/assembly-other/iunclearedpower2arraypool) | interface |  | 1 | Non-generic view of an `UnclearedPower2ArrayPool` so `ArrayPoolManager.LogAllPools` can list every pool's arrays. |
| [`UnclearedPower2ArrayPool<T>`](/game-api/types/assembly-other/unclearedpower2arraypool-t) | class | `IUnclearedPower2ArrayPool` | 7 | Thread-safe pool of arrays in power-of-two sizes (16 and up). Arrays are not cleared, so a requested array can be larger than asked for and hold old data. Use `Shared` for the common pool. |

## Alta.Attributes

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BoolValueLabeling`](/game-api/types/assembly-other/boolvaluelabeling) | class | `ConditionalLabeling` | 3 | Inspector attribute that labels a field one of two ways depending on a named bool, with optional default values for each case. Extends `ConditionalLabeling`. |
| [`BuildTestAttribute`](/game-api/types/assembly-other/buildtestattribute) | class | `Attribute` | 0 | Marks a method as a build test. Nothing in the server build looks for it, so it's probably read by an editor build check. |
| [`ButtonAttribute`](/game-api/types/assembly-other/buttonattribute) | class | `PropertyAttribute` | 5 | Inspector attribute that draws a button for a bool field and calls a method on the component when it's clicked. Editor only in effect. |
| [`CacheTransformAttribute`](/game-api/types/assembly-other/cachetransformattribute) | class | `PrefabApplyAttribute` | 1 | Prefab-apply attribute for a `Transform` field: when the prefab is applied, sets the field to the component's own transform. |
| [`CacheTransformIfEmptyAttribute`](/game-api/types/assembly-other/cachetransformifemptyattribute) | class | `PrefabApplyAttribute` | 1 | Prefab-apply attribute for a `Transform` field: fills it with the component's own transform only when the field is empty. |
| [`CleanNullsAttribute`](/game-api/types/assembly-other/cleannullsattribute) | class | `PrefabApplyAttribute` | 1 | Prefab-apply attribute meant for removing null entries from a list field. In this build `HandleApply` does nothing. |
| [`CleanRange`](/game-api/types/assembly-other/cleanrange) | class | `PropertyAttribute` | 5 | Inspector attribute for a range slider on a number field, with an optional line under it. |
| [`CommentAttribute`](/game-api/types/assembly-other/commentattribute) | class | `PropertyAttribute` | 4 | Inspector attribute that shows a comment box above a field. |
| [`CommentAttribute.MessageType`](/game-api/types/assembly-other/commentattribute-messagetype) | enum |  | 4 | Icon style for a `CommentAttribute` note in the inspector: none, info, warning or error. |
| [`ConditionalLabeling`](/game-api/types/assembly-other/conditionallabeling) | abstract class | `PropertyAttribute` | 7 | Base inspector attribute that labels a field one of two ways depending on a condition, with optional default values for each case. Used by `BoolValueLabeling` and `HasComponentLabel`. |
| [`ConditionAttribute`](/game-api/types/assembly-other/conditionattribute) | class | `PropertyAttribute` | 4 | Inspector attribute that shows, hides or locks a field depending on a bool member of the same object. |
| [`CustomMethodApplyAttribute`](/game-api/types/assembly-other/custommethodapplyattribute) | class | `PrefabApplyAttribute` | 3 | Prefab apply attribute that calls a named method on the component when the prefab is applied. The method should return bool (true means it applied); methods are looked up by reflection and cached. |
| [`DegreeToRadian`](/game-api/types/assembly-other/degreetoradian) | class | `PropertyAttribute` | 0 | Inspector attribute for a float field, probably so it is edited in degrees and stored in radians. It has no members; the drawer isn't in the server build. |
| [`DotFromAngle`](/game-api/types/assembly-other/dotfromangle) | class | `PropertyAttribute` | 0 | Property attribute with no fields, probably used by an editor drawer to edit a dot product value as an angle. |
| [`EnumFlagsAttribute`](/game-api/types/assembly-other/enumflagsattribute) | class | `PropertyAttribute` | 0 | Property attribute that marks an enum field to be edited as flags in the inspector. |
| [`FloatRangeSettings`](/game-api/types/assembly-other/floatrangesettings) | class | `PropertyAttribute` | 4 | Property attribute that stores a min and max for an inspector float range. |
| [`ForcedCapitalizationAttribute`](/game-api/types/assembly-other/forcedcapitalizationattribute) | class | `PropertyAttribute` | 0 | Marker property attribute, probably for an editor drawer that forces a string field's capitalisation. Not used in this build. |
| [`FormattedBytesFieldAttribute`](/game-api/types/assembly-other/formattedbytesfieldattribute) | class | `PropertyAttribute` | 0 | Marks a field to be shown as a byte size (KB, MB) in the inspector. Used on network statistics. |
| [`GetComponentAttribute`](/game-api/types/assembly-other/getcomponentattribute) | class | `PrefabApplyAttribute` | 6 | Field attribute that fills the field with a component from the same object when the prefab is applied, probably in the editor (the caller isn't in this build). Base for the other `GetComponent` attributes. |
| [`GetComponentIfEmptyAttribute`](/game-api/types/assembly-other/getcomponentifemptyattribute) | class | `GetComponentAttribute` | 1 | Like `GetComponentAttribute`, but only fills the field when it is empty. |
| [`GetComponentInChildrenAttribute`](/game-api/types/assembly-other/getcomponentinchildrenattribute) | class | `GetComponentAttribute` | 2 | Like `GetComponentAttribute`, but searches this object and its children. |
| [`GetComponentInParentAttribute`](/game-api/types/assembly-other/getcomponentinparentattribute) | class | `GetComponentAttribute` | 1 | Like `GetComponentAttribute`, but searches this object and its parents. |
| [`GetComponentsAttribute`](/game-api/types/assembly-other/getcomponentsattribute) | class | `PrefabApplyAttribute` | 5 | Array field attribute that fills the field with all matching components on the same object when the prefab is applied. Base for the plural `GetComponents` attributes. |
| [`GetComponentsInChildrenAttribute`](/game-api/types/assembly-other/getcomponentsinchildrenattribute) | class | `GetComponentsAttribute` | 1 | Like `GetComponentsAttribute`, but collects components from this object and its children. |
| [`GetComponentsInChildrenInterfaceAttribute`](/game-api/types/assembly-other/getcomponentsinchildreninterfaceattribute) | class | `GetComponentsInterfaceAttribute` | 2 | Like `GetComponentsInterfaceAttribute`, but collects from this object and its children. |
| [`GetComponentsInParentAttribute`](/game-api/types/assembly-other/getcomponentsinparentattribute) | class | `GetComponentsAttribute` | 1 | Like `GetComponentsAttribute`, but collects components from this object and its parents. |
| [`GetComponentsInterfaceAttribute`](/game-api/types/assembly-other/getcomponentsinterfaceattribute) | class | `PrefabApplyAttribute` | 6 | Array field attribute that fills the field with every component implementing an interface. The field must hold `MonoBehaviour` elements. |
| [`HasComponentLabel`](/game-api/types/assembly-other/hascomponentlabel) | class | `ConditionalLabeling` | 3 | Conditional label attribute that picks one of two labels (and default values) based on whether the object has a given component. |
| [`HashedObjectAttribute`](/game-api/types/assembly-other/hashedobjectattribute) | class | `PropertyAttribute` | 2 | Inspector attribute that marks a field as a hash pointing to an object of a given type. |
| [`HasMethodApplyAttribute`](/game-api/types/assembly-other/hasmethodapplyattribute) | class | `Attribute` | 0 | Marker attribute for classes; it holds no data. |
| [`HasReferenceValueAttribute`](/game-api/types/assembly-other/hasreferencevalueattribute) | class | `PrefabApplyAttribute` | 2 | Prefab apply attribute for a bool field: keeps it set to whether another named field holds a non-null object. |
| [`InversedIntAttribute`](/game-api/types/assembly-other/inversedintattribute) | class | `PropertyAttribute` | 2 | Property attribute with a label, probably for an editor drawer that shows an int inverted. Nothing in the decompiled code uses it. |
| [`LabelAdd`](/game-api/types/assembly-other/labeladd) | class | `PropertyAttribute` | 2 | Property attribute that adds text to a field's inspector label, such as a unit like `(°/s)` or a hint like `: -1 to disable`. |
| [`MaxAttribute`](/game-api/types/assembly-other/maxattribute) | class | `PropertyAttribute` | 2 | Inspector attribute that sets a maximum for a float field. The drawer that enforces it is not in the server build. |
| [`MethodApplyAttribute`](/game-api/types/assembly-other/methodapplyattribute) | class | `Attribute` | 0 | Empty marker attribute for methods. Nothing in the server build reads it; probably part of the prefab apply tooling with `HasMethodApplyAttribute`. |
| [`MinAttribute`](/game-api/types/assembly-other/minattribute) | class | `PropertyAttribute` | 2 | Inspector attribute that sets a minimum for a float field. The drawer that enforces it is not in the server build. |
| [`NormalizedVector`](/game-api/types/assembly-other/normalizedvector) | class | `PropertyAttribute` | 0 | Inspector attribute for a vector field that should be normalized. No behaviour of its own. |
| [`NotConditionAttribute`](/game-api/types/assembly-other/notconditionattribute) | class | `ConditionAttribute` | 1 | Inspector attribute: hides the field while the named bool is true and shows it while it is false. The reverse of `ConditionAttribute`'s default. |
| [`NullConditionAttribute`](/game-api/types/assembly-other/nullconditionattribute) | class | `PropertyAttribute` | 4 | Inspector attribute that shows, hides or locks a field depending on whether another object field is null. |
| [`ObsoleteFieldAttribute`](/game-api/types/assembly-other/obsoletefieldattribute) | class | `PropertyAttribute` | 0 | Inspector attribute that marks a serialized field as obsolete. No behaviour of its own. |
| [`PlatformConditionAttribute`](/game-api/types/assembly-other/platformconditionattribute) | class | `PropertyAttribute` | 3 | Inspector attribute that marks a field as only relevant on certain platforms, either from `PlatformFlags` or an Android or desktop flag. |
| [`PostHeaderAttribute`](/game-api/types/assembly-other/postheaderattribute) | class | `PropertyAttribute` | 2 | Inspector attribute carrying header text, probably drawn after the field it is on. |
| [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute) | abstract class | `PropertyAttribute` | 1 | Base for field attributes that fill in or check a field when a prefab is applied in the editor, such as `GetComponent` and `CacheTransform`. |
| [`QuaternionVector3Attribute`](/game-api/types/assembly-other/quaternionvector3attribute) | class | `PropertyAttribute` | 0 | Inspector attribute with no members; probably shows a `Quaternion` field as Euler angles through an editor drawer. |
| [`ReadOnlyAttribute`](/game-api/types/assembly-other/readonlyattribute) | class | `PropertyAttribute` | 4 | Inspector attribute that shows a field as read only, with separate modes for in and out of play mode. |
| [`ReadOnlyInDebugAttribute`](/game-api/types/assembly-other/readonlyindebugattribute) | class | `PropertyAttribute` | 0 | Inspector attribute with no members; probably makes a field read only in the inspector's debug view. |
| [`ReadOnlyMode`](/game-api/types/assembly-other/readonlymode) | enum |  | 3 | How an inspector field shows under a condition (`ReadOnlyAttribute`, `ValueConditionAttribute`): hidden, read-only or editable. Editor only. |
| [`ReorderableListAttribute`](/game-api/types/assembly-other/reorderablelistattribute) | class | `PropertyAttribute` | 5 | Inspector attribute that shows a list as a reorderable list, with options for dragging, header and add and remove buttons. |
| [`SceneNameAttribute`](/game-api/types/assembly-other/scenenameattribute) | class | `PropertyAttribute` | 0 | Property attribute that marks a string field as a scene name, probably so the inspector shows a scene picker. |
| [`SerializedInterfaceAttribute`](/game-api/types/assembly-other/serializedinterfaceattribute) | class | `PropertyAttribute` | 2 | Property attribute that marks a serialized field as holding an object that must implement a given interface, probably for an inspector picker. |
| [`SquaredValue`](/game-api/types/assembly-other/squaredvalue) | class | `PropertyAttribute` | 0 | Marker attribute for a serialized float that is stored as a squared value, such as a squared velocity threshold. Has no members of its own. |
| [`StepAnimationCurveAttribute`](/game-api/types/assembly-other/stepanimationcurveattribute) | class | `PropertyAttribute` | 0 | Inspector attribute for an `AnimationCurve` field, probably to draw it as a stepped curve. No code of its own. |
| [`SubInspectorAttribute`](/game-api/types/assembly-other/subinspectorattribute) | class | `PropertyAttribute` | 0 | Inspector attribute, probably to draw a referenced object's fields inline. No code of its own. |
| [`TanFromAngle`](/game-api/types/assembly-other/tanfromangle) | class | `PropertyAttribute` | 0 | Inspector attribute, probably to edit a tangent value as an angle. No code of its own. |
| [`TimeInSecondsAttribute`](/game-api/types/assembly-other/timeinsecondsattribute) | class | `PropertyAttribute` | 0 | Inspector attribute, probably to show a float as a time in seconds. No code of its own. |
| [`TypeExtensions`](/game-api/types/assembly-other/typeextensions) | static class |  | 4 | Reflection helpers that look up fields and methods on a type and all its base types, so private members of base classes are found too. |
| [`ValidatePrefabApplyAttribute`](/game-api/types/assembly-other/validateprefabapplyattribute) | class | `PrefabApplyAttribute` | 2 | Prefab-apply attribute for a bool field: when a prefab is applied, sets the field to the result of a named method on the component. |
| [`ValueConditionAttribute`](/game-api/types/assembly-other/valueconditionattribute) | class | `PropertyAttribute` | 5 | Inspector attribute that shows, hides or locks a field based on whether another number field is above a threshold. |

## Alta.Authentication

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`PlayerSubscriberStatus`](/game-api/types/assembly-other/playersubscriberstatus) | enum |  | 4 | [Player](../networking/player.md#playersubscriberstatus), [Alta assemblies](../console-and-utilities/alta-assemblies.md): `None`, `Subscriber`, `Developer`, `AltaMod` (0 to 3). |
| [`UserPermissions`](/game-api/types/assembly-other/userpermissions) | static class |  | 7 | Permission name constants and checks against the logged-in user's API policies. Checks the local logged-in account, so it is mainly a client thing. |

### Alta.Authentication

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AuthenticationUtility`](/game-api/types/assembly-other/authenticationutility) | class | `IAuthenticationUtility` | 6 | [Alta assemblies](../console-and-utilities/alta-assemblies.md), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Logs in from the command line (`/login`, `/login_hash`, `/access_token`, `/oauth_login`), with a username and password, or with a stored refresh token. |
| [`Constants`](/game-api/types/assembly-other/constants) | static class |  | 3 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The `PlayerPreferences` key names for the three tokens. |
| [`IAuthenticationUtility`](/game-api/types/assembly-other/iauthenticationutility) | interface |  | 5 | Ways to log in to the Alta web API: saved refresh token, command line, username and password, or OAuth client credentials. `AuthenticationUtility` implements it. |
| [`ILoginPreferences`](/game-api/types/assembly-other/iloginpreferences) | interface |  | 5 | [Alta assemblies](../console-and-utilities/alta-assemblies.md) |
| [`LoginPreferences`](/game-api/types/assembly-other/loginpreferences) | class | `ILoginPreferences`, `IInitializable`, `IDisposable` | 8 | [Alta assemblies](../console-and-utilities/alta-assemblies.md) |

## Alta.Build

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable) | abstract class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 3 | Base for components that bake renderer setup at build time and then remove themselves. `BakeBuildBakeables` runs them; `StaticObjectCombiner` calls it. |
| [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable) | interface |  | 0 | Empty marker interface for components that the build process bakes. `IBuildRendererBakeable` and `IBuildRendererPostBake` extend it. |
| [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable) | interface | `IBuildBakeable` | 3 | Build-time hook for components that bake renderer data into a prefab. Bakers run in `SortingOrder` order. |
| [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake) | interface | `IBuildBakeable` | 1 | For components that need a step after a build renderer bake. `BuildRendererBakeable` calls `PostBake` on every one under the target once baking finishes. Build-time only. |

## Alta.CommandLine

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CommandLineArguments`](/game-api/types/assembly-other/commandlinearguments) | static class |  | 45 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#commandlinearguments): Reads `Environment.GetCommandLineArgs()` once, on first use. |
| [`CommandLineArgumentsInEditor`](/game-api/types/assembly-other/commandlineargumentsineditor) | class | `GlobalSettings<CommandLineArgumentsInEditor>` | 1 | Global settings asset with extra command line arguments to use when running in the Unity editor. |

## Alta.Core.Runtime

### Alta.Core.Runtime

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AverageNumber`](/game-api/types/assembly-other/averagenumber) | class |  | 8 | Keeps a running total, count, min and max of recorded numbers. Used for simple stats and timing. |

## Alta.Coroutines

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaCoroutine`](/game-api/types/assembly-other/altacoroutine) | class |  | 14 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine), [Alta assemblies](../console-and-utilities/alta-assemblies.md): A wrapper around a Unity coroutine that catches exceptions and tells you how it ended. |
| [`AltaCoroutineState`](/game-api/types/assembly-other/altacoroutinestate) | enum |  | 5 | State of an `AltaCoroutine`: not started, running, stopped, finished or error. |
| [`CoroutineYields`](/game-api/types/assembly-other/coroutineyields) | static class |  | 3 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#coroutineyields-and-taskyield) |
| [`EditorCoroutine`](/game-api/types/assembly-other/editorcoroutine) | class | `AltaCoroutine` | 1 | `AltaCoroutine` subclass with a helper that runs a coroutine to the end in one call, for editor code. |
| [`TaskYield<T>`](/game-api/types/assembly-other/taskyield-t) | class | `CustomYieldInstruction` | 4 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#coroutineyields-and-taskyield) |

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaCoroutineHandler`](/game-api/types/assembly-other/altacoroutinehandler) | internal class | `SingletonBehaviour<AltaCoroutineHandler>` | 0 | Internal singleton behaviour that `AltaCoroutine` runs its coroutines on when no target object is given. |
| [`RateLimiter`](/game-api/types/assembly-other/ratelimiter) | class |  | 2 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#ratelimiter), [Alta assemblies](../console-and-utilities/alta-assemblies.md): `new RateLimiter(float targetTickRate)` then `bool IsRateLimited()`: false at most `targetTickRate` times a second (by `Time.realtimeSinceStartup`), true in between. |

## Alta.EventBus.Runtime

### Alta.EventBusSystem

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EventBus<T>`](/game-api/types/assembly-other/eventbus-t) | class | `IEventBus<T>`, `IEventSource<T>` | 4 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`IEventBus<T>`](/game-api/types/assembly-other/ieventbus-t) | interface | `IEventSource<T>` | 1 | An event source that can also send: anything holding it can raise `T` events to every listener. |
| [`IEventSource<T>`](/game-api/types/assembly-other/ieventsource-t) | interface |  | 2 | The listen-only side of an event bus: lets code subscribe to `T` events without being able to send them. |

## Alta.Global.Runtime

### Alta.Global

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GlobalSettings`](/game-api/types/assembly-other/globalsettings) | abstract class | `ScriptableObject` | 1 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| [`GlobalSettings<T>`](/game-api/types/assembly-other/globalsettings-t) | class | `GlobalSettings` | 2 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| [`GlobalSettings<TConcrete, TInterface>`](/game-api/types/assembly-other/globalsettings-tconcrete-tinterface) | class | `GlobalSettings` | 3 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| [`GlobalSettingsAttribute`](/game-api/types/assembly-other/globalsettingsattribute) | class | `Attribute` | 2 | Marks a `GlobalSettings` class with the name of its settings asset, for example `[GlobalSettings("Mining Settings")]`. |
| [`GlobalSettingsInitializer`](/game-api/types/assembly-other/globalsettingsinitializer) | class | `MonoBehaviour` | 0 | Scene component that sets up a list of global settings assets on `Awake`, so their static `Instance` is ready. |

## Alta.IO

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IPlayerPreferenceValue<T>`](/game-api/types/assembly-other/iplayerpreferencevalue-t) | interface |  | 1 | A single player preference value. |
| [`PlayerPreferenceBool`](/game-api/types/assembly-other/playerpreferencebool) | class | `PlayerPreferenceValue<bool>` | 1 | A bool player preference stored under a key with `PlayerPreferences.SetBool` and `GetBool`. |
| [`PlayerPreferenceFloat`](/game-api/types/assembly-other/playerpreferencefloat) | class | `PlayerPreferenceValue<float>` | 1 | A float stored in `PlayerPreferences` under a fixed key. Not used in this build. |
| [`PlayerPreferenceInt`](/game-api/types/assembly-other/playerpreferenceint) | class | `PlayerPreferenceValue<int>` | 1 | An int stored in `PlayerPreferences` under a fixed key. Not used in this build. |
| [`PlayerPreferences`](/game-api/types/assembly-other/playerpreferences) | static class |  | 12 | [Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences): The game's replacement for Unity's `PlayerPrefs`: a dictionary saved to `player.prefs` in `StorageFolder`. |
| [`PlayerPreferenceString`](/game-api/types/assembly-other/playerpreferencestring) | class | `PlayerPreferenceValue<string>` | 1 | A string player preference stored under a key through `PlayerPreferences`. |
| [`PlayerPreferenceValue<T>`](/game-api/types/assembly-other/playerpreferencevalue-t) | abstract class | `IPlayerPreferenceValue<T>` | 2 | Base for a typed value stored in `PlayerPreferences` (the local `player.prefs` file) under one key. |
| [`PlayerSettingsNames`](/game-api/types/assembly-other/playersettingsnames) | class |  | 2 | Preference key names for the login screen. |

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaFile`](/game-api/types/assembly-other/altafile) | class | `IAltaFile` | 24 | A file on disk with cached typed content (`IAltaFileFormat`), background reads, and saves that go through a `_temp` file and keep a `_backup` copy. Get one from `AltaFolder.GetFile`. |
| [`AltaFolder`](/game-api/types/assembly-other/altafolder) | class | `IAltaFolder` | 16 | A folder on disk that caches its `AltaFile` and `AltaFolder` children by name. Creates the directory if it is missing. |
| [`AltaIO`](/game-api/types/assembly-other/altaio) | class |  | 7 | [Settings and files](../console-and-utilities/settings-and-files.md#altaio), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md): Static folders, set up the first time anything touches the class. |
| [`DigitalOceanUtility`](/game-api/types/assembly-other/digitaloceanutility) | static class |  | 3 | Static access to a DigitalOcean Spaces (S3-compatible, sfo2 region) client. Keys must be set with `SetupKeys` before first use. |
| [`FileInfoWrapper`](/game-api/types/assembly-other/fileinfowrapper) | class | `IFileAccess` | 8 | `IFileAccess` over a plain `FileInfo` on disk. |
| [`FileSystemExtensions`](/game-api/types/assembly-other/filesystemextensions) | static class |  | 2 | File system helpers. |
| [`IAltaFile`](/game-api/types/assembly-other/ialtafile) | interface |  | 19 | [Settings and files](../console-and-utilities/settings-and-files.md#ialtafolder-and-ialtafile) |
| [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat) | abstract class | `IDisposable` | 5 | Base for a file format the game can read from and write to a stream, such as a save file's contents. Disposable. |
| [`IAltaFolder`](/game-api/types/assembly-other/ialtafolder) | interface |  | 15 | [Settings and files](../console-and-utilities/settings-and-files.md#ialtafolder-and-ialtafile) |
| [`IFileAccess`](/game-api/types/assembly-other/ifileaccess) | interface |  | 7 | Minimal file handle: existence, names, delete and refresh. `FileInfoWrapper` is the plain disk version. |
| [`IRemoteAltaFile`](/game-api/types/assembly-other/iremotealtafile) | interface |  | 4 | A local file mirrored to a remote copy, as used by `RemoteFiles`. `RemoteFiles.BackupAllChanged` backs up every changed one. |
| [`RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile) | class | `RemoteFiles.RemoteAltaFile<FileInfoWrapper>` | 1 | Remote-backed save file where the remote copy is another path on disk (a mounted or network folder). Used when the server starts with `/remote_saves` and a type other than `s3`. |
| [`RemoteAltaFolder`](/game-api/types/assembly-other/remotealtafolder) | class | `AltaFolder` | 6 | Save folder that mirrors a local folder to a second directory on disk. Files and subfolders it hands out are `RemoteAltaFile` and `RemoteAltaFolder`. Set up by `AltaIO` from `/remote_saves`. |
| [`RemoteFiles`](/game-api/types/assembly-other/remotefiles) | static class |  | 1 | Static registry of every remote-backed save file, so changed files can be backed up together. The `backup` console command calls `BackupAllChanged`. |
| [`RemoteFiles.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype) | abstract class | `IAltaFile`, `IRemoteAltaFile` | 23 | Base for a save file that works on a local copy and syncs it with a remote store (disk path or S3). The local copy is pulled from remote on first read and pushed back on backup. |
| [`S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile) | class | `RemoteFiles.RemoteAltaFile<S3StorageFile>` | 1 | Remote-backed save file stored as an S3 object. Used when the server starts with `/remote_saves s3 bucket:path`. |
| [`S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder) | class | `AltaFolder` | 9 | Save folder that mirrors a local folder to an S3 prefix. Hands out `S3CloudStorageRemoteFile` files and `S3RemoteFolder` subfolders. `AltaIO` makes the root one for `/remote_saves s3`. |
| [`S3StorageFile`](/game-api/types/assembly-other/s3storagefile) | class | `S3StorageObject`, `IFileAccess` | 7 | A file object in an S3 bucket, used through the `IFileAccess` storage interface. Probably server or tooling only, as it needs S3 credentials. |
| [`S3StorageFolder`](/game-api/types/assembly-other/s3storagefolder) | class | `S3StorageObject` | 5 | A key prefix in an S3 bucket treated as a folder, for listing and deleting the objects under it. |
| [`S3StorageObject`](/game-api/types/assembly-other/s3storageobject) | class |  | 6 | Base for an S3 file or folder: a bucket name and object key, with delete calls through `S3Utility.S3Client`. |
| [`S3Utility`](/game-api/types/assembly-other/s3utility) | static class |  | 3 | Static holder for the AWS S3 clients used for remote saves. Keys come from the `/s3_credentials` command line argument; the region is fixed to US West 1. |
| [`TextFileFormat`](/game-api/types/assembly-other/textfileformat) | class | `IAltaFileFormat` | 4 | File format that stores a file's whole content as one string. |

## Alta.LifecycleManagement.Runtime

### Alta.LifecycleManagement

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CompositeDisposable`](/game-api/types/assembly-other/compositedisposable) | class | `ICollection<IDisposable>`, `IEnumerable<IDisposable>`, `IEnumerable`, +2 more | 14 | Thread-safe group of disposables that are disposed together. Anything added after it's disposed is disposed at once. |
| [`Disposable`](/game-api/types/assembly-other/disposable) | static class |  | 3 | Helpers for making `IDisposable` objects from actions. |
| [`Disposer`](/game-api/types/assembly-other/disposer) | class | `IDisposer`, `IDisposable` | 3 | `IDisposer` that tracks disposables and disposes them all when it is disposed. Not thread-safe. |
| [`DisposerExtensions`](/game-api/types/assembly-other/disposerextensions) | static class |  | 2 | Extension methods for adding things to an `IDisposer`. |
| [`ICancelable`](/game-api/types/assembly-other/icancelable) | interface | `IDisposable` | 1 | A disposable that can report whether it has been disposed. |
| [`IIsolate`](/game-api/types/assembly-other/iisolate) | interface |  | 0 | Marker for classes registered as standalone entry points in a dependency injection container with `InjectAndIsolate`. |
| [`SerialDisposable`](/game-api/types/assembly-other/serialdisposable) | class | `ICancelable`, `IDisposable` | 3 | Holds one disposable at a time: setting a new one disposes the old one. Thread-safe. |

### System

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IDisposer`](/game-api/types/assembly-other/idisposer) | interface | `IDisposable` | 1 | A disposable that collects other disposables and disposes them together. |

## Alta.LifetimeScopes

### Alta.ATT.LifetimeScopes

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AbstractAltaLifetimeScope`](/game-api/types/assembly-other/abstractaltalifetimescope) | abstract class | `LifetimeScope` | 1 | Base for the game's VContainer lifetime scopes. Subclasses register their bindings in `ConfigureScope`; debug builds log and profile the setup. |
| [`AnalyticsInstaller`](/game-api/types/assembly-other/analyticsinstaller) | class |  | 1 | VContainer installer for analytics: registers `AnalyticsService` and the `AltaAnalyticsDispatcher` entry point, and injects the zone enter and exit analytics events. |
| [`ApplicationLifetimeScope`](/game-api/types/assembly-other/applicationlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`Binder`](/game-api/types/assembly-other/binder) | abstract class |  | 0 | Non-generic base of `Binder<TContract>`, the fluent binding helper used with `builder.Bind<T>()`. |
| [`Binder<TContract>`](/game-api/types/assembly-other/binder-tcontract) | class | `Binder` | 7 | Fluent helper for registering a type in a VContainer container, made by `container.Bind<TContract>()`. Registers as a singleton by default and picks up VContainer entry point interfaces (like `ITickable`) by itself. |
| [`Binder<TContract>.AltaRegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder) | class | `RegistrationBuilder` | 2 | VContainer registration builder used by `Binder<TContract>`. Builds the registration from the binder's types and lifetime, or from a bound instance. |
| [`ContainerBuilderExtensions`](/game-api/types/assembly-other/containerbuilderextensions) | static class |  | 2 | Extension methods on VContainer's `IContainerBuilder` used by the game's installers. |
| [`DependencyInjectionEditorInitializer`](/game-api/types/assembly-other/dependencyinjectioneditorinitializer) | class | `ScriptableObject` | 0 | Editor asset holding a reference to the project lifetime scope. Has no behaviour in this build. |
| [`DependencyInjectionInitializer`](/game-api/types/assembly-other/dependencyinjectioninitializer) | class | `MonoBehaviour` | 0 | Runs very early (execution order -15000) and creates the project lifetime scope in built players. |
| [`GameLifetimeScope`](/game-api/types/assembly-other/gamelifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`GameObjectLifetimeScope`](/game-api/types/assembly-other/gameobjectlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`GlobalSettingsInstaller`](/game-api/types/assembly-other/globalsettingsinstaller) | class | `ScriptableObject` | 1 | ScriptableObject that runs platform-specific installers and registers a list of `GlobalSettings` assets in a VContainer scope. |
| [`MainMenuVrLifetimeScope`](/game-api/types/assembly-other/mainmenuvrlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`PlatformSpecificScriptableObjectInstaller`](/game-api/types/assembly-other/platformspecificscriptableobjectinstaller) | class | `ScriptableObject` | 1 | Base ScriptableObject for an installer that registers platform-specific services. Run by `GlobalSettingsInstaller`. |
| [`PlayerControllerLifetimeScope`](/game-api/types/assembly-other/playercontrollerlifetimescope) | class | `GameObjectLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`ProjectLifetimeScope`](/game-api/types/assembly-other/projectlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`WindowsGlobalSettingsInstaller`](/game-api/types/assembly-other/windowsglobalsettingsinstaller) | class | `PlatformSpecificScriptableObjectInstaller` | 1 | Windows installer asset that keeps the XR general settings referenced and binds the Windows XR loader settings. |
| [`WindowsInstaller`](/game-api/types/assembly-other/windowsinstaller) | class |  | 1 | Registers the Windows platform services: user service, post-process controller, analytics readers, the SteamVR XR setup, and fake platform services. |

## Alta.MenuItem

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaMenuItem`](/game-api/types/assembly-other/altamenuitem) | abstract class | `ISearchableTool` | 12 | Base for Alta's editor menu commands. Subclasses nest inside an `AltaMenuItemBase` path class, and editor tooling generates a Unity menu entry for each one. Editor only, does nothing in a running server. |
| [`AltaMenuItemBase`](/game-api/types/assembly-other/altamenuitembase) (and 172 nested types) | class |  | 1 | Root of a nested class tree that mirrors Unity editor menu paths. Menu items inherit from a nested class, and the class path (underscores as spaces) becomes the menu path. Editor tooling. |

## Alta.NetworkTransport.Runtime

### Alta.NetworkingTransport

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaNetworkError`](/game-api/types/assembly-other/altanetworkerror) | enum |  | 9 | Network errors a transport can report, such as DNS failure, timeout, congestion, bad send or receive, and closed connection. |
| [`INetworkTransportResult`](/game-api/types/assembly-other/inetworktransportresult) | interface |  | 2 | Result of a network transport operation such as a send or processing incoming packets. |
| [`IPacketProcessor`](/game-api/types/assembly-other/ipacketprocessor) | interface |  | 1 | Handles packets the network transport receives. |
| [`IParallelPacketProcessor`](/game-api/types/assembly-other/iparallelpacketprocessor) | interface | `IPacketProcessor` | 1 | An `IPacketProcessor` that may handle packets in parallel and can say how many it has not finished yet. Nothing implements it in this build. |
| [`ITransport`](/game-api/types/assembly-other/itransport) | interface |  | 6 | A low-level network transport that `Socket` sends packets over. `KcpTransport` is the implementation in this build. |
| [`ITransportClient`](/game-api/types/assembly-other/itransportclient) | interface | `ITransportSocket` | 3 | Client side of a transport: one connection to a server. `ITransport.Connect` returns one. |
| [`ITransportConnection`](/game-api/types/assembly-other/itransportconnection) | interface |  | 8 | One player's connection on the server-side network transport (KCP in this build): send data, disconnect and read traffic counters. |
| [`ITransportServer`](/game-api/types/assembly-other/itransportserver) | interface | `ITransportSocket` | 2 | The listening side of a network transport, made by `ITransport.CreateServer`. Raises events as client connections come and go. The KCP transport's `KcpServerWrapper` implements it. |
| [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket) | interface |  | 9 | A network socket in Alta's transport layer, with traffic counters and process calls. KCP client and server wrappers implement it. |
| [`MessageReceivePool`](/game-api/types/assembly-other/messagereceivepool) | static class |  | 4 | Thread-safe pool of 64 KB byte arrays for received network messages, so the receive path doesn't allocate a new buffer each time. |
| [`NetworkTransportResult`](/game-api/types/assembly-other/networktransportresult) | class | `INetworkTransportResult` | 5 | Simple success or error result returned by transport calls such as `ProcessIncoming` and `Terminate`. |

### Alta.NetworkingTransport.Kcp

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`KcpClientConnection`](/game-api/types/assembly-other/kcpclientconnection) | class | `ITransportConnection` | 10 | Client: the `ITransportConnection` for the client's single KCP connection to the server. |
| [`KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper) | class | `ITransportClient`, `ITransportSocket` | 14 | Client side of the KCP transport: wraps a kcp2k `KcpClient` as an `ITransportClient`, so the game's networking can connect, tick and receive through it. |
| [`KcpErrorConverter`](/game-api/types/assembly-other/kcperrorconverter) | static class |  | 1 | Maps kcp2k error codes to the game's own `AltaNetworkError` values. Used by the KCP client and server wrappers. |
| [`KcpServerConnection`](/game-api/types/assembly-other/kcpserverconnection) | class | `ITransportConnection` | 10 | Server: the `ITransportConnection` for one client's KCP connection, wrapping a kcp2k server connection by id. |
| [`KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper) | class | `ITransportServer`, `ITransportSocket` | 13 | Server side of the KCP transport: wraps a kcp2k `KcpServer` as an `ITransportServer` and keeps one `KcpServerConnection` per connected player. |
| [`KcpSettings`](/game-api/types/assembly-other/kcpsettings) | class | `GlobalSettings<KcpSettings>` | 11 | Global settings asset for the KCP network transport: latency, timeout, window and buffer options used by the KCP client and server wrappers. |
| [`KcpTransport`](/game-api/types/assembly-other/kcptransport) | class | `ITransport` | 9 | The KCP (reliable UDP) network transport the game uses by default. `NetworkManager` creates it from `KcpSettings`; both sides use it to open servers and client connections. |

### Alta.NetworkingTransport.Parallel

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`LlapiMetric`](/game-api/types/assembly-other/llapimetric) | class |  | 6 | Holds running averages of send and process timings for client and server transport loops. Nothing else in this build references it. |

## Alta.Platform

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FfvSource`](/game-api/types/assembly-other/ffvsource) | enum |  | 4 | Flags for why a platform effect called FFV should be on: movement, hurt, low performance or character baking (probably fixed foveated rendering). Passed to `IPlatformDevice.SetFfvSource`; the server's fake device ignores it. |
| [`PlatformTarget`](/game-api/types/assembly-other/platformtarget) | enum |  | 2 | [Player](../networking/player.md#platformtarget): `PC = 1`, `Quest = 2` (flags, in `Alta.Platform.dll`). The client sends it in its join request. |
| [`PlayerMode`](/game-api/types/assembly-other/playermode) | enum |  | 8 | [Player](../networking/player.md#playermode): `PlayerMode` (no namespace, in `Alta.Platform.dll`), a flags enum: |
| [`PlayerModeExtensions`](/game-api/types/assembly-other/playermodeextensions) | static class |  | 2 | Extension methods on the `PlayerMode` flags. |

### Alta.Platform

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccessTokenMode`](/game-api/types/assembly-other/accesstokenmode) | enum |  | 3 | Whether a platform's authentication can hand out access tokens: not at all, single use or multi use. Reported by `IAuthenticationFeatures`. |
| [`IAuthenticationFeatures`](/game-api/types/assembly-other/iauthenticationfeatures) | interface |  | 3 | What the current platform's login supports. Read from `IAuthenticationService.Features`; the generic (PC) one supports none of it. |
| [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice) | interface |  | 9 | Signs the player in to the Alta account service and supplies access tokens. Client side; `AuthenticationService` in Alta.Platform.Generic implements it. |
| [`IPlatformDevice`](/game-api/types/assembly-other/iplatformdevice) | interface |  | 1 | Platform hook for device-level settings. Only `FakePlatformDevice` (does nothing) is bound in the Windows build. |
| [`IPlatformService`](/game-api/types/assembly-other/iplatformservice) | interface |  | 2 | Starts up the platform SDK (such as Oculus) at launch. `FakePlatformService` is the stand-in where there is none. |
| [`IUserService`](/game-api/types/assembly-other/iuserservice) | interface | `IAuthenticationService` | 4 | Platform service for the signed-in Alta user: login state, the current user and lookups of other users by ID. |
| [`IValidVersionService`](/game-api/types/assembly-other/ivalidversionservice) | interface |  | 3 | Checks whether the game version is still allowed to play. `ApplicationStartupManager` runs it on startup; on Windows a fake always says yes. |

### Alta.Platform.Fakes

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FakePlatformDevice`](/game-api/types/assembly-other/fakeplatformdevice) | class | `IPlatformDevice` | 1 | Do-nothing `IPlatformDevice` for platforms without device features. |
| [`FakePlatformService`](/game-api/types/assembly-other/fakeplatformservice) | class | `IPlatformService` | 2 | Stand-in `IPlatformService` for platforms with no platform SDK to start. Always reports initialized. |
| [`FakeValidVersionService`](/game-api/types/assembly-other/fakevalidversionservice) | class | `IValidVersionService` | 3 | Stand-in `IValidVersionService` that always says the game version is valid, used where there's no store version check (such as Windows). |

### Alta.Platform.Models

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IUser`](/game-api/types/assembly-other/iuser) | interface |  | 2 | Minimal user shape from the Alta platform layer: an id and a display name. |

## Alta.Platform.Generic

### Alta.Platform.Generic

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AuthenticationFeatures`](/game-api/types/assembly-other/authenticationfeatures) | class | `IAuthenticationFeatures` | 3 | Authentication features for the generic (non-store) platform: no access tokens, no account linking, no platform login. |
| [`AuthenticationService`](/game-api/types/assembly-other/authenticationservice) | class | `IAuthenticationService` | 10 | Authentication for the generic platform (Windows and the server build): logs in to the Alta API with command line arguments, a refresh token or editor credentials. Platform login and linking aren't supported. |
| [`UserService`](/game-api/types/assembly-other/userservice) | class | `IUserService`, `IAuthenticationService` | 15 | `IUserService` for the generic platform. There is no platform user, so the user parts are empty or throw; authentication calls go to an inner `AuthenticationService`. |

## Alta.PlatformInformation.Runtime

### Alta.PlatformInformation

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`LocalPlatformProvider`](/game-api/types/assembly-other/localplatformprovider) | internal class |  | 1 | Internal: works out which platform the game is running on. In this build the Quest, Pico and Android preview checks always return false. |
| [`OverridePlatformProvider`](/game-api/types/assembly-other/overrideplatformprovider) | internal class |  | 4 | Internal: holds a platform override for testing. The override only counts in the Unity editor. |
| [`PlatformFlags`](/game-api/types/assembly-other/platformflags) | enum |  | 7 | Flags for the platform the game runs on: Windows, Linux, Android, Android preview, and Quest and Pico (both include the Android bit), or Unknown. |
| [`PlatformProvider`](/game-api/types/assembly-other/platformprovider) | static class |  | 20 | Static helper that tells which platform the game is running on (Windows, Linux, Android, Quest, Pico), with an optional client override for testing. |

## Alta.Profiling.Runtime

### Alta.Profiling

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ProfileMarker`](/game-api/types/assembly-other/profilemarker) | static class |  | 2 | Static helper that keeps named Unity profiler markers, only in debug builds. As decompiled it never begins or ends a marker sample. |
| [`ProfilingSession`](/game-api/types/assembly-other/profilingsession) | class | `IDisposable` | 6 | A timed, nestable profiling scope. Making one starts it and makes it the current session; sessions made inside become its children. Dispose it to stop. |

## Alta.SearchableTools

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ISearchableTool`](/game-api/types/assembly-other/isearchabletool) | interface |  | 6 | An editor tool or menu item that can be found by search. `AltaMenuItem` implements it. |

## Alta.Serialization.Runtime

### Alta.Serialization

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BitDisplay`](/game-api/types/assembly-other/bitdisplay) | static class |  | 2 | Debug helper that turns integers into binary strings. |
| [`BitReader`](/game-api/types/assembly-other/bitreader) | class |  | 12 | Reads values bit by bit from a buffer of 32 bit words, the reading half of the game's network and save serialization. Used by `Stream` on both sides. |
| [`BitWriter`](/game-api/types/assembly-other/bitwriter) | class |  | 14 | Writes values bit by bit into a buffer of 32 bit words, the writing half of the game's network and save serialization. Used by `Stream` on both sides. |
| [`BitWriter.GetMoreData`](/game-api/types/assembly-other/bitwriter-getmoredata) | delegate |  | 0 | Callback a `BitWriter` calls when its buffer is full to get a bigger one. Called with null at start to get the first buffer. Without it, a full buffer logs a fatal error and corrupts the write. |
| [`Compressor`](/game-api/types/assembly-other/compressor) | class | `Stream` | 10 | A dummy `Stream` that reads and writes at once but stores nothing. Code passes `Compressor.Instance` to the quantizing serialize helpers to round a value to what the network would send. |
| [`Stream`](/game-api/types/assembly-other/stream) | abstract class | `IDisposable`, `ICloneable` | 51 | [Stream](../networking/stream.md): Every network message and every save file in the game is written with this: a bit stream with one abstract base and two concrete types, `StreamWriter` and `StreamReader`. |
| [`Stream.StringEncoding`](/game-api/types/assembly-other/stream-stringencoding) | enum |  | 2 | Text encoding used when writing strings to a network stream: ASCII or UTF8. |
| [`StreamCounter`](/game-api/types/assembly-other/streamcounter) | class | `Stream` | 10 | A write-only `Stream` that only counts bits, used to measure how big a serialized block will be (for example by `SavingSystem` and `NetworkPrefab`). |
| [`StreamReader`](/game-api/types/assembly-other/streamreader) | class | `Stream` | 14 | [Stream](../networking/stream.md#streamwriter-and-streamreader) |
| [`StreamWriter`](/game-api/types/assembly-other/streamwriter) | class | `Stream` | 20 | [Stream](../networking/stream.md#streamwriter-and-streamreader) |
| [`UFloatBytes`](/game-api/types/assembly-other/ufloatbytes) | internal struct |  | 1 | Internal helper that sends a float as its raw 32 bits. |
| [`ULongBytes`](/game-api/types/assembly-other/ulongbytes) | internal struct |  | 1 | Internal helper that sends a `long` as two raw 32-bit uints. |

## Alta.Singletons

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SingletonBehaviour<T>`](/game-api/types/assembly-other/singletonbehaviour-t) | class | `MonoBehaviour` | 2 | Base for a component that should exist once. The first one to wake becomes `Instance`; any later copy destroys itself. |

## Alta.Timing.Runtime

### Alta.Timing

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ITimeline`](/game-api/types/assembly-other/itimeline) | interface |  | 1 | Something that `TimelineUpdater` advances each frame. `Timeline` is the only implementation. |
| [`Timeline`](/game-api/types/assembly-other/timeline) | class | `ITimeline` | 21 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline), [Time and environment](../world/time-and-environment.md#timeline): A scheduler for "call this in N seconds" and "every N seconds", used for respawns, decay, loot refills, taxes, timed stat changes and the like. Main thread. |
| [`Timeline.IEntry`](/game-api/types/assembly-other/timeline-ientry) | interface |  | 2 | Handle to a callback scheduled on the game `Timeline` (from `CallAfterDuration`, `CallRepeatableAfterDuration` and so on). Pass it to `Timeline.Cancel` to stop it. |
| [`Timeline.SerializedEntryState`](/game-api/types/assembly-other/timeline-serializedentrystate) | enum |  | 3 | Result of `Timeline.LoadEntry` for a saved timer: None (no time saved), Past (already due, callback run if asked) or Future (registered on the timeline). |
| [`TimelineUpdater`](/game-api/types/assembly-other/timelineupdater) | class | `MonoBehaviour` | 0 | Hidden object that `Timeline.Instance` creates to drive the timeline with real time each frame. Kept across scene loads. |

### Alta.Timing.PriorityQueue

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FastPriorityQueue<T>`](/game-api/types/assembly-other/fastpriorityqueue-t) | class | `IFixedSizePriorityQueue<T, float>`, `IPriorityQueue<T, float>`, `IEnumerable<T>`, +1 more | 14 | Fixed size binary heap of nodes with a float priority, lowest value first. Nodes store their own index, and there are no safety checks. |
| [`FastPriorityQueueNode`](/game-api/types/assembly-other/fastpriorityqueuenode) | class |  | 2 | Base class for items in a `FastPriorityQueue` with a float priority. The queue sets both properties. |
| [`FastPriorityQueueNodeTimeSpan`](/game-api/types/assembly-other/fastpriorityqueuenodetimespan) | class |  | 2 | Base class for items in a `FastPriorityQueueTimeSpan`, with a `TimeSpan` priority. `Timeline` entries use it. |
| [`FastPriorityQueueTimeSpan<T>`](/game-api/types/assembly-other/fastpriorityqueuetimespan-t) | class | `IFixedSizePriorityQueue<T, TimeSpan>`, `IPriorityQueue<T, TimeSpan>`, `IEnumerable<T>`, +1 more | 13 | Copy of `FastPriorityQueue` that uses a `TimeSpan` priority, earliest first. `Timeline` uses it to order its scheduled calls. |
| [`GenericPriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority) | class | `IFixedSizePriorityQueue<TItem, TPriority>`, `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, +1 more | 15 | Fixed size binary heap with any comparable priority. Ties go to whichever node was enqueued first, so equal priorities come out in order. |
| [`GenericPriorityQueueNode<TPriority>`](/game-api/types/assembly-other/genericpriorityqueuenode-tpriority) | class |  | 3 | Base class for items in a `GenericPriorityQueue`, with any comparable priority type. |
| [`IFixedSizePriorityQueue<TItem, in TPriority>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority) | internal interface | `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, `IEnumerable` | 2 | Internal interface for priority queues with a fixed capacity that has to be resized by hand. |
| [`IPriorityQueue<TItem, in TPriority>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority) | interface | `IEnumerable<TItem>`, `IEnumerable` | 8 | Common interface of the priority queues in this namespace (a copy of the BlueRaja priority queue library). The lowest priority value comes out first. |
| [`SimplePriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority) | class | `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, `IEnumerable` | 20 | Thread-safe priority queue for any item type: it wraps items in nodes for you, grows as needed and locks on every call. The lowest priority value comes out first; equal priorities keep their order. |
| [`SimplePriorityQueue<TItem>`](/game-api/types/assembly-other/simplepriorityqueue-titem) | class | `SimplePriorityQueue<TItem, float>` | 3 | `SimplePriorityQueue` with a float priority. |
| [`StablePriorityQueue<T>`](/game-api/types/assembly-other/stablepriorityqueue-t) | class | `IFixedSizePriorityQueue<T, float>`, `IPriorityQueue<T, float>`, `IEnumerable<T>`, +1 more | 13 | Fast fixed-size priority queue of `StablePriorityQueueNode` items with float priorities. Equal priorities come out in the order they went in. No safety checks: queuing past `MaxSize`, or passing a node that is not in this queue, breaks it. |
| [`StablePriorityQueueNode`](/game-api/types/assembly-other/stablepriorityqueuenode) | class | `FastPriorityQueueNode` | 1 | Base class for items in a `StablePriorityQueue`. |

## Alta.VContainerLayer.Runtime

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Factory`](/game-api/types/assembly-other/factory) | abstract class | `IFactory`, `IDisposable` | 1 | Base for the VContainer factories. Holds the injected container and a disposer, and disposes everything it created when it is disposed. |
| [`Factory<TInterface>`](/game-api/types/assembly-other/factory-tinterface) | abstract class | `Factory`, `IFactory<TInterface>`, `IFactory`, +1 more | 1 | Synchronous factory with no parameters. Subclasses build the object in `CreateInstance`; `Create` then injects it and tracks it for disposal. |
| [`Factory<TParam, TInterface>`](/game-api/types/assembly-other/factory-tparam-tinterface) | abstract class | `Factory`, `IFactory<TParam, TInterface>`, `IFactory`, +1 more | 1 | Synchronous factory taking one parameter. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal. |
| [`Factory<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tinterface) | abstract class | `Factory`, `IFactory<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 | Synchronous factory taking two parameters. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal. |
| [`Factory<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tparam3-tinterface) | abstract class | `Factory`, `IFactory<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 | Synchronous factory taking three parameters. Subclasses build the object in `CreateInstance`; `Create` injects it and tracks it for disposal. |
| [`FactoryAsync`](/game-api/types/assembly-other/factoryasync) | abstract class | `Factory` | 1 | Base for factories that spawn a prefab loaded through Addressables. The prefab's `AssetReference` is injected, and loaded handles are released on dispose. |
| [`FactoryAsync<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TInterface>`, `IFactory`, +1 more | 1 | Async prefab factory with no parameters. Loads the prefab, instantiates it through the container and calls `FactoryConstruct` on its `TConcrete` component. |
| [`FactoryAsync<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TParam, TInterface>`, `IFactory`, +1 more | 1 | Async prefab factory taking one parameter, passed to the component's `FactoryConstruct`. |
| [`FactoryAsync<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 | Async prefab factory taking two parameters, passed to the component's `FactoryConstruct`. |
| [`FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tparam3-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 | Async prefab factory taking three parameters, passed to the component's `FactoryConstruct`. |
| [`FactoryAsyncPooled<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface) | abstract class | `Factory` | 2 | Async Addressables prefab factory that pools its instances. `Spawn` reuses a despawned instance when there is one; `Dispose` destroys every instance it made. |
| [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface) | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam, TInterface>`, `IFactory`, +1 more | 1 | Pooled async prefab factory whose instances take one parameter on spawn through `IPooledInstance.OnSpawn`. |
| [`FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tconcrete-tinterface) | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 | Pooled async prefab factory whose instances take two parameters on spawn through `IPooledInstance.OnSpawn`. |
| [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface) | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 | Pooled async prefab factory whose instances take three parameters on spawn through `IPooledInstance.OnSpawn`. |
| [`IDespawnable`](/game-api/types/assembly-other/idespawnable) | interface |  | 1 | An object a pooled factory can return to its pool. |
| [`IFactory`](/game-api/types/assembly-other/ifactory) | interface | `IDisposable` | 0 | Base interface for the VContainer layer's factories. The generic versions add `Create` with zero to three parameters; all are disposable. |
| [`IFactory<in TParam, out TInterface>`](/game-api/types/assembly-other/ifactory-intparam-outtinterface) | interface | `IFactory`, `IDisposable` | 1 | Factory that takes one parameter, for the VContainer layer. |
| [`IFactory<in TParam1, in TParam2, in TParam3, out TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-intparam3-outtinterface) | interface | `IFactory`, `IDisposable` | 1 | Factory that takes three parameters, for the VContainer layer. |
| [`IFactory<in TParam1, in TParam2, out TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-outtinterface) | interface | `IFactory`, `IDisposable` | 1 | Factory that takes two parameters, for the VContainer layer. |
| [`IFactory<out TInstance>`](/game-api/types/assembly-other/ifactory-outtinstance) | interface | `IFactory`, `IDisposable` | 1 | Factory with no parameters, for the VContainer layer. |
| [`IFactoryAsync<in TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam-tinterface) | interface | `IFactory`, `IDisposable` | 1 | Async factory that takes one parameter, for the VContainer layer. |
| [`IFactoryAsync<in TParam1, in TParam2, in TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-intparam3-tinterface) | interface | `IFactory`, `IDisposable` | 1 | Async factory that takes three parameters, for the VContainer layer. |
| [`IFactoryAsync<in TParam1, in TParam2, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-tinterface) | interface | `IFactory`, `IDisposable` | 1 | Async factory that takes two parameters, for the VContainer layer. |
| [`IFactoryAsync<TInterface>`](/game-api/types/assembly-other/ifactoryasync-tinterface) | interface | `IFactory`, `IDisposable` | 1 | Async factory with no parameters, for the VContainer layer. `FactoryAsync` implements it by instantiating a MonoBehaviour. |
| [`IFactoryAsyncPooled<in TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam-tinterface) | interface | `IFactory`, `IDisposable` | 2 | Async pooled factory that passes one parameter to each spawned instance. |
| [`IFactoryAsyncPooled<in TParam1, in TParam2, in TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-intparam3-tinterface) | interface | `IFactory`, `IDisposable` | 2 | Async pooled factory that passes three parameters to each spawned instance. |
| [`IFactoryAsyncPooled<in TParam1, in TParam2, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-tinterface) | interface | `IFactory`, `IDisposable` | 2 | Async pooled factory that passes two parameters to each spawned instance. |
| [`IFactoryAsyncPooled<TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-tinterface) | interface | `IFactory`, `IDisposable` | 2 | Async factory that reuses instances from a pool, with no spawn parameters. |
| [`IFactoryConstructable`](/game-api/types/assembly-other/ifactoryconstructable) | interface |  | 1 | MonoBehaviour that an async factory sets up straight after creating it, in place of a constructor. |
| [`IFactoryConstructable<in TParam1, in TParam2, in TParam3>`](/game-api/types/assembly-other/ifactoryconstructable-intparam1-intparam2-intparam3) | interface |  | 1 | MonoBehaviour that an async factory sets up with three parameters straight after creating it. |
| [`IFactoryConstructable<in TParam1, in TParam2>`](/game-api/types/assembly-other/ifactoryconstructable-intparam1-intparam2) | interface |  | 1 | MonoBehaviour that an async factory sets up with two parameters straight after creating it. |
| [`IFactoryConstructable<in TParam>`](/game-api/types/assembly-other/ifactoryconstructable-intparam) | interface |  | 1 | MonoBehaviour that an async factory sets up with one parameter straight after creating it. |
| [`IPooledInstance`](/game-api/types/assembly-other/ipooledinstance) | interface | `IDespawnable` | 1 | Object from a pooled factory that is told when it is spawned and despawned. |
| [`IPooledInstance<in TParam1, in TParam2, in TParam3>`](/game-api/types/assembly-other/ipooledinstance-intparam1-intparam2-intparam3) | interface | `IDespawnable` | 1 | Pooled object that gets three parameters each time it is spawned. |
| [`IPooledInstance<in TParam1, in TParam2>`](/game-api/types/assembly-other/ipooledinstance-intparam1-intparam2) | interface | `IDespawnable` | 1 | Pooled object that gets two parameters each time it is spawned. |
| [`IPooledInstance<in TParam>`](/game-api/types/assembly-other/ipooledinstance-intparam) | interface | `IDespawnable` | 1 | Pooled object that gets one parameter each time it is spawned. |

## Alta.Values

### Alta

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GeneralValue`](/game-api/types/assembly-other/generalvalue) | abstract class | `ScriptableObject` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `ScriptableObject` with a `Description` and a `Type`. |
| [`HashedGeneralValue`](/game-api/types/assembly-other/hashedgeneralvalue) | abstract class | `GeneralValue` | 2 | Base for game data assets identified by a hash. `HashedGeneralValue<T>` builds on it to load every asset of a type from Resources and look them up by hash or name. |
| [`HashedGeneralValue<T>`](/game-api/types/assembly-other/hashedgeneralvalue-t) | abstract class | `HashedGeneralValue` | 8 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `GeneralValue` with a stable `uint Hash`. `Item`, `PageCollection`, `PopulationDefinition`, `MouldDefinition`, `Festivity`, `GameAction` and many more derive from it. |
| [`HashedGeneralValueComparer`](/game-api/types/assembly-other/hashedgeneralvaluecomparer) | class | `IEqualityComparer<HashedGeneralValue>` | 1 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): Compares by hash. |
| [`HashedGeneralValueConverter<T>`](/game-api/types/assembly-other/hashedgeneralvalueconverter-t) | class | `TypeConverter` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The console converter for those types: a hash, or a name. |
| [`HashedPathAttribute`](/game-api/types/assembly-other/hashedpathattribute) | class | `Attribute` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): Which `Resources` folders hold a type's assets. |

### Alta.Networking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`HashHelper`](/game-api/types/assembly-other/hashhelper) | static class |  | 7 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The hashing the game uses: `Hash(string)`, `HashCompressed`, `GetHashCodeForString`, and the editor-side hash validation. Hashes are 16 bits (`MaxHash` 65535). |

## Alta.XRManagement

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`XRUtility`](/game-api/types/assembly-other/xrutility) | static class |  | 1 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |

### Alta.XRLoaders

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IXRLoaderInitializer`](/game-api/types/assembly-other/ixrloaderinitializer) | interface |  | 0 | Empty marker interface for the platform class that picks and starts the XR loader, such as `WindowsXRLoaderInitializer`. |
| [`IXRManagerSettingsController`](/game-api/types/assembly-other/ixrmanagersettingscontroller) | interface |  | 3 | Client: starts and stops Unity's XR manager. Implemented by `XRManagerSettingsController`, injected through VContainer. |
| [`TownshipXRMode`](/game-api/types/assembly-other/townshipxrmode) | enum |  | 3 | Which XR backend the game runs with: OpenXR, Valve (SteamVR) or no VR. |
| [`XRLoaderStaticData`](/game-api/types/assembly-other/xrloaderstaticdata) | static class |  | 6 | Type names of the Unity XR loaders the game knows about, grouped by platform. |
| [`XRManagerSettingsController`](/game-api/types/assembly-other/xrmanagersettingscontroller) | class | `IXRManagerSettingsController`, `IInitializable` | 4 | Startup service (VContainer) that finds Unity's XR manager and starts or shuts down its active loader and subsystems. |

## Alta.XRManagement.Windows

### Alta.XRLoaders

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IWindowsXRLoaderSettings`](/game-api/types/assembly-other/iwindowsxrloadersettings) | interface |  | 3 | Client (Windows): settings the XR loader initializer reads to pick between OpenXR and SteamVR (OpenVR) loaders. |
| [`IXRSupportSystem`](/game-api/types/assembly-other/ixrsupportsystem) | interface |  | 2 | Client (Windows): extra setup for one XR mode, run before XR starts. `SteamOpenVrInitializer` is one; the Windows loader initializer runs each one that is valid for the mode. |
| [`SteamOpenVrInitializer`](/game-api/types/assembly-other/steamopenvrinitializer) | class | `IXRSupportSystem` | 2 | XR support system for Valve OpenVR mode. Touches the SteamVR settings and instance before the XR manager starts. |
| [`WindowsXRLoaderInitializer`](/game-api/types/assembly-other/windowsxrloaderinitializer) | class | `IInitializable`, `IXRLoaderInitializer` | 3 | PC startup service (VContainer) that picks OpenXR, Valve OpenVR or no VR, swaps the XR loaders to match, runs support systems and starts the XR manager. |
| [`WindowsXRLoaderSettings`](/game-api/types/assembly-other/windowsxrloadersettings) | class | `GlobalSettings<WindowsXRLoaderSettings>`, `IWindowsXRLoaderSettings` | 4 | Global settings for the Windows build's XR loaders: which XR mode to use and the OpenXR and OpenVR loaders. Read by `WindowsXRLoaderInitializer`. Client only. |
