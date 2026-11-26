---
title: "DayTimeManager"
description: "Client: the atmosphere plugin for the day and night cycle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DayTimeManager

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Client: the atmosphere plugin for the day and night cycle. Turns the sun and moon and sets sky, ambient light, fog and ambience audio from game time. Follows the server's fixed daytime setting when set.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)
- **Nested types** [`ChangedState`](/mod/game-api/types/alta-world/daytimemanager-changedstate)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DayTimeManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullcycle" /><code>{"float fullCycle"}</code> | <span className="api-desc">Editor readout: position in the full day cycle.</span> |
| <Link id="m-halfcycle" /><code>{"float halfCycle"}</code> | <span className="api-desc">Editor readout: position in the sun's half cycle.</span> |
| <Link id="m-quartercycle" /><code>{"float quarterCycle"}</code> | <span className="api-desc">Editor readout: how high the moon is.</span> |

<details className="api-private">
<summary>59 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmoondistance" /><code>{"private float androidMoonDistance"}</code> | <span className="api-desc">Distance the Android moon is drawn from the player.</span> |
| <Link id="m-androidmoonmaterial" /><code>{"private Material androidMoonMaterial"}</code> | <span className="api-desc">Material for the Android moon quad.</span> |
| <Link id="m-androidmoonsize" /><code>{"private float androidMoonSize"}</code> | <span className="api-desc">Size of the Android moon quad.</span> |
| <Link id="m-audiosplittowardsday" /><code>{"private AnimationCurve audioSplitTowardsDay"}</code> | <span className="api-desc">Share of ambience volume given to day audio over sun progress; the rest goes to night audio.</span> |
| <Link id="m-btnconvert" /><code>{"private bool btnConvert"}</code> | <span className="api-desc">Editor button field, "Convert Sky Color".</span> |
| <Link id="m-btnstopupdating" /><code>{"private bool btnStopUpdating"}</code> | <span className="api-desc">Editor button field, "Stop Updating".</span> |
| <Link id="m-cloudscoloroverday" /><code>{"private Gradient cloudsColorOverDay"}</code> | <span className="api-desc">Cloud colour over sun progress.</span> |
| <Link id="m-currentambience" /><code>{"private Color currentAmbience"}</code> | <span className="api-desc">Backing field for `CurrentAmbience`.</span> |
| <Link id="m-currentvolumesplit" /><code>{"private float currentVolumeSplit"}</code> | <span className="api-desc">Private: current share of volume for day audio.</span> |
| <Link id="m-debugdayprogress" /><code>{"private float debugDayProgress"}</code> | <span className="api-desc">Editor: day progress used when `useDebugValueAtRuntime` is set.</span> |
| <Link id="m-debugmonthprogress" /><code>{"private float debugMonthProgress"}</code> | <span className="api-desc">Editor: month progress used when `useDebugValueAtRuntime` is set.</span> |
| <Link id="m-dotmoonup" /><code>{"private float dotMoonUp"}</code> | <span className="api-desc">Private: how high the moon is, used for the moon ambience and light curves.</span> |
| <Link id="m-fogandroidmultiplier" /><code>{"private float fogAndroidMultiplier"}</code> | <span className="api-desc">Fog density multiplier on Android.</span> |
| <Link id="m-fogcolorduringday" /><code>{"private Gradient fogColorDuringDay"}</code> | <span className="api-desc">Fog colour over the full day cycle.</span> |
| <Link id="m-fogdensityduringday" /><code>{"private AnimationCurve fogDensityDuringDay"}</code> | <span className="api-desc">Fog density over the full day cycle.</span> |
| <Link id="m-gametimemanager" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" gameTimeManager"}</code> | <span className="api-desc">Source of day progress, month progress and the day to night ratio.</span> |
| <Link id="m-haloinversesizeoverday" /><code>{"private AnimationCurve haloInverseSizeOverDay"}</code> | <span className="api-desc">Sun halo size value over the full cycle, sent to the skybox.</span> |
| <Link id="m-instantiatedandroidmoonmaterial" /><code>{"private Material instantiatedAndroidMoonMaterial"}</code> | <span className="api-desc">Private: editor copy of the Android moon material.</span> |
| <Link id="m-instantiatedskyboxmaterial" /><code>{"private Material instantiatedSkyboxMaterial"}</code> | <span className="api-desc">Private: editor copy of the skybox material.</span> |
| <Link id="m-isrenderinggizmos" /><code>{"private bool isRenderingGizmos"}</code> | <span className="api-desc">Serialized editor flag. Not read in the server build.</span> |
| <Link id="m-isupdatingdaytime" /><code>{"private bool isUpdatingDaytime"}</code> | <span className="api-desc">Private: false when the server's `FixedDaytime` setting is 0 or more, so the sun stays put.</span> |
| <Link id="m-lastdayprogress" /><code>{"private float lastDayProgress"}</code> | <span className="api-desc">Private: full cycle position from the last ambience update, used for fog.</span> |
| <Link id="m-lastfixeddaytime" /><code>{"private float lastFixedDaytime"}</code> | <span className="api-desc">Private: last fixed daytime seen. Starts at -1 and is not updated in this build.</span> |
| <Link id="m-lightintensitymodifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" LightIntensityModifier"}</code> | <span className="api-desc">Private: lerps the sun and moon light strength when the plugin is enabled or disabled.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Private: logger.</span> |
| <Link id="m-moonambience" /><code>{"private Gradient moonAmbience"}</code> | <span className="api-desc">Ambient colour by moon height.</span> |
| <Link id="m-moonfadeintime" /><code>{"private float moonFadeInTime"}</code> | <span className="api-desc">Seconds the moonlight takes to fade in after the sun goes off. Defaults to 30.</span> |
| <Link id="m-moonlerpinmodifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatgetvalue">{"LerpingFloatGetValue"}</Link>{" MoonLerpInModifier"}</code> | <span className="api-desc">Private: fades the moonlight in over `moonFadeInTime` once the sun sets.</span> |
| <Link id="m-moonlight" /><code>{"private Light moonLight"}</code> | <span className="api-desc">The moon's directional light.</span> |
| <Link id="m-moonlightintensitycurve" /><code>{"private AnimationCurve moonLightIntensityCurve"}</code> | <span className="api-desc">Moonlight strength by moon height.</span> |
| <Link id="m-moonmesh" /><code>{"private static Mesh moonMesh"}</code> | <span className="api-desc">Private static: the quad drawn as the Android moon.</span> |
| <Link id="m-moonrotator" /><code>{"private Transform moonRotator"}</code> | <span className="api-desc">Transform turned by month progress to move the moon.</span> |
| <Link id="m-moonspiningaxis" /><code>{"private Vector3 moonSpiningAxis"}</code> | <span className="api-desc">Axis the moon turns around.</span> |
| <Link id="m-moontosundotshift" /><code>{"private float moonToSunDotShift"}</code> | <span className="api-desc">Sun height (negative, below the horizon) where ambience starts blending from moon to sun.</span> |
| <Link id="m-moonvector" /><code>{"private Vector3 moonVector"}</code> | <span className="api-desc">Private: direction to the moon.</span> |
| <Link id="m-nightsource" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" nightSource"}</code> | <span className="api-desc">Night ambience audio, mixed against the main source. Destroyed on headless.</span> |
| <Link id="m-nighttimeshift" /><code>{"private float nightTimeShift"}</code> | <span className="api-desc">Serialized value, defaults to -0.004. Not read in this build.</span> |
| <Link id="m-skybotcolor" /><code>{"private Gradient skyBotcolor"}</code> | <span className="api-desc">Bottom sky colour over the full cycle.</span> |
| <Link id="m-skyboxmaterial" /><code>{"private Material skyBoxMaterial"}</code> | <span className="api-desc">The skybox material this manager drives.</span> |
| <Link id="m-skycolorbotbending" /><code>{"private AnimationCurve skyColorBotBending"}</code> | <span className="api-desc">Bottom sky gradient bend over the full cycle.</span> |
| <Link id="m-skycolorfade" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" skyColorFade"}</code> | <span className="api-desc">Private: lerps the sky in and out when the plugin is enabled or disabled.</span> |
| <Link id="m-skycolormidpointposition" /><code>{"private AnimationCurve skyColorMidPointPosition"}</code> | <span className="api-desc">Where the middle sky colour sits over the full cycle.</span> |
| <Link id="m-skycolorrelatedtosun" /><code>{"private Gradient skyColorRelatedToSun"}</code> | <span className="api-desc">Editor reference gradient only.</span> |
| <Link id="m-skycolortopbending" /><code>{"private AnimationCurve skyColorTopBending"}</code> | <span className="api-desc">Top sky gradient bend over the full cycle.</span> |
| <Link id="m-skymidcolor" /><code>{"private Gradient skyMidcolor"}</code> | <span className="api-desc">Middle sky colour over the full cycle.</span> |
| <Link id="m-skytopcolor" /><code>{"private Gradient skyTopcolor"}</code> | <span className="api-desc">Top sky colour over the full cycle.</span> |
| <Link id="m-sunambience" /><code>{"private Gradient sunAmbience"}</code> | <span className="api-desc">Ambient colour over sun progress.</span> |
| <Link id="m-suncolor" /><code>{"private Gradient sunColor"}</code> | <span className="api-desc">Sun disc colour over sun progress, sent to the skybox.</span> |
| <Link id="m-suninversesizeoverday" /><code>{"private AnimationCurve sunInverseSizeOverDay"}</code> | <span className="api-desc">Sun disc size value over sun progress, sent to the skybox.</span> |
| <Link id="m-sunlight" /><code>{"private Light sunLight"}</code> | <span className="api-desc">The sun's directional light.</span> |
| <Link id="m-sunlightduringday" /><code>{"private Gradient sunlightDuringDay"}</code> | <span className="api-desc">Sunlight colour over sun progress.</span> |
| <Link id="m-sunlightintensitycurve" /><code>{"private AnimationCurve sunLightIntensityCurve"}</code> | <span className="api-desc">Sunlight strength over sun progress.</span> |
| <Link id="m-sunprogress" /><code>{"private float sunProgress"}</code> | <span className="api-desc">Private: where the sun is in its half cycle, used by most day curves.</span> |
| <Link id="m-sunrotator" /><code>{"private Transform sunRotator"}</code> | <span className="api-desc">Transform turned by day progress to move the sun.</span> |
| <Link id="m-sunspiningaxis" /><code>{"private Vector3 sunSpiningAxis"}</code> | <span className="api-desc">Axis the sun turns around.</span> |
| <Link id="m-sunupskew" /><code>{"private float sunUpSkew"}</code> | <span className="api-desc">Degrees added so the sun spends longer above the horizon.</span> |
| <Link id="m-syncfixeddaytime" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFixedDaytime"}</code> | <span className="api-desc">Private: message for `SyncFixedDaytime`, sent on the atmosphere manager's entity.</span> |
| <Link id="m-usedebugvalueatruntime" /><code>{"private bool useDebugValueAtRuntime"}</code> | <span className="api-desc">Editor: use the debug day and month progress while playing.</span> |
| <Link id="m-wasenabled" /><code>{"private bool wasEnabled"}</code> | <span className="api-desc">Private: whether the moonlight is on, so its fade in runs once per night.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencevolume" /><code>{"override float AmbienceVolume { get; set; }"}</code> | <span className="api-desc">Total ambience volume, split between day and night sources by time of day. 0 on a headless server.</span> |
| <Link id="m-currentambience-2" /><code>{"override Color CurrentAmbience { get; }"}</code> | <span className="api-desc">The ambient light colour for the current time.</span> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | <span className="api-desc">The fog colour for the current time.</span> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The fog density for the current time, scaled on Android.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmoonmaterial-2" /><code>{"private Material AndroidMoonMaterial { get; }"}</code> | <span className="api-desc">Private: the Android moon material (a copy in the editor).</span> |
| <Link id="m-skyboxmaterial-2" /><code>{"private Material SkyboxMaterial { get; }"}</code> | <span className="api-desc">Private: the skybox material (a copy in the editor).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Fades the lights and sky colour out when another atmosphere takes over.</span> |
| <Link id="m-evaluatefogcolor" /><code>{"Color EvaluateFogColor()"}</code> | <span className="api-desc">Fog colour for the last worked out time of day.</span> |
| <Link id="m-evaluatefogdensity" /><code>{"float EvaluateFogDensity()"}</code> | <span className="api-desc">Fog density for the last worked out time of day.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager)"}</code> | <span className="api-desc">Reads the server's fixed daytime (below 0 means the normal cycle) and sets the starting sun and moon.</span> |
| <Link id="m-mute" /><code>{"override void Mute(bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes the night source as well.</span> |
| <Link id="m-onconnect" /><code>{"override void OnConnect("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the fixed daytime state to a joining player.</span> |
| <Link id="m-startaudio" /><code>{"override void StartAudio()"}</code> | <span className="api-desc">Starts the night source as well.</span> |
| <Link id="m-stopaudio" /><code>{"override void StopAudio()"}</code> | <span className="api-desc">Stops the night source as well.</span> |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | <span className="api-desc">Fades the lights and sky back in when this atmosphere becomes active.</span> |

<details className="api-private">
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns itself and both lights off on a headless server. Otherwise sets up fog, the skybox, the Android moon mesh and the lerpers.</span> |
| <Link id="m-createmoonmeshifneeded" /><code>{"private void CreateMoonMeshIfNeeded()"}</code> | <span className="api-desc">Private: builds the shared quad mesh used to draw the moon on Android.</span> |
| <Link id="m-disableskycolor" /><code>{"private void DisableSkyColor()"}</code> | <span className="api-desc">Private: once the sky has faded out, clears the skybox on Android or disables it elsewhere.</span> |
| <Link id="m-getdotproductbetweensunandmoonvectors" /><code>{"private float GetDotProductBetweenSunAndMoonVectors(Vector3 sunVector)"}</code> | <span className="api-desc">Private: how closely the sun and moon line up, sharpened for the skybox shader.</span> |
| <Link id="m-getsunrotation" /><code>{"private float GetSunRotation(float dayProgress)"}</code> | <span className="api-desc">Private: sun angle for a day progress, with the day half and night half split by the day to night ratio.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Private: updates the lerpers, ambience audio split, sun and moon rotation (unless daytime is fixed) and ambience.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Private: unhooks the scene change handler.</span> |
| <Link id="m-rendermoon" /><code>{"private void RenderMoon(Vector3 position, float scaleMultiplier)"}</code> | <span className="api-desc">Private: draws the moon quad at a position and scale.</span> |
| <Link id="m-rendermoononandroid" /><code>{"private void RenderMoonOnAndroid()"}</code> | <span className="api-desc">Private: draws the moon around the player's head on Android, pulled inside the camera's far clip if needed.</span> |
| <Link id="m-setlightintensity" /><code>{"private void SetLightIntensity(Light light, float intensity)"}</code> | <span className="api-desc">Private: sets a light's intensity, or turns it off when 0.01 or less.</span> |
| <Link id="m-setshadersunvector" /><code>{"private void SetShaderSunVector(Vector3 sunVector, float sunUp)"}</code> | <span className="api-desc">Private: sends the sun direction and strength to the skybox shader.</span> |
| <Link id="m-setupsceneskyboxinbuilds" /><code>{"private void SetupSceneSkyboxInBuilds()"}</code> | <span className="api-desc">Private: sets the skybox now, or once this object's scene becomes active.</span> |
| <Link id="m-setupskybox" /><code>{"private void SetupSkybox(Scene currentScene, Scene activatingScene)"}</code> | <span className="api-desc">Private: sets `RenderSettings.skybox` to this manager's material.</span> |
| <Link id="m-setupskybox-2" /><code>{"private void SetupSkybox()"}</code> | <span className="api-desc">Private: sets `RenderSettings.skybox` to this manager's material.</span> |
| <Link id="m-setupvariablelerpers" /><code>{"private void SetupVariableLerpers()"}</code> | <span className="api-desc">Private: creates the light, moon and sky fade lerpers.</span> |
| <Link id="m-syncfixeddaytime-2" /><code>{"private void SyncFixedDaytime("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs whether daytime is fixed and its value from the server settings. Clients move the sun to match.</span> |
| <Link id="m-updateambience" /><code>{"private void UpdateAmbience()"}</code> | <span className="api-desc">Private: works out sun progress and moon height, then sets ambient, fog, sky colours and light strength from the curves.</span> |
| <Link id="m-updatelightintensity" /><code>{"private void UpdateLightIntensity(float intensityModifier)"}</code> | <span className="api-desc">Private: sets sun and moon light strength from their curves. The moon only shines when the sun is off.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation(float dayProgress, float monthProgress)"}</code> | <span className="api-desc">Private: turns the sun and moon for a day and month progress and updates the skybox vectors.</span> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Private, server: when the server's `FixedDaytime` setting changes, switches fixed time on or off and syncs it.</span> |
| <Link id="m-updateskycolorfade" /><code>{"private void UpdateSkyColorFade(float fadeValue)"}</code> | <span className="api-desc">Private: sends the sky fade value to the skybox shader.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DayTimeManager`:

<div className="api-used-in">

[`IndoorAmbienceBoost.dayTimeManager`](/mod/game-api/types/alta-intelligence/indoorambienceboost#m-daytimemanager), [`ForestAmbience.dayTimeManager`](/mod/game-api/types/alta-world/forestambience#m-daytimemanager).

</div>
