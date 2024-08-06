"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93403],{15213:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>gt,data:()=>pt});var i=n(57305);const a=(0,i.Fv)('<h1 id="zigbee-network" tabindex="-1"><a class="header-anchor" href="#zigbee-network"><span>Zigbee network</span></a></h1><h2 id="device-types" tabindex="-1"><a class="header-anchor" href="#device-types"><span>Device types</span></a></h2><p>In Zigbee, there are three different types of devices: end device, router, and coordinator. A Zigbee network always has <strong>one</strong> (and no more) coordinator, and can have multiple routers and end devices. In the case of Zigbee2MQTT, the coordinator is your CC2531 USB stick.</p><h3 id="end-device" tabindex="-1"><a class="header-anchor" href="#end-device"><span>End Device</span></a></h3><p>End devices do not route traffic. They may also sleep, which makes end devices a suitable choice for battery operated devices. An end device only has one parent, either the coordinator or a router, generally the closest device when it was paired. All communications to and from the end device is via their parent. If a parent router goes offline all traffic to its children will cease until those end devices time out and attempt to find a new parent. Some models of end device, notably Xiaomi, don&#39;t attempt to find a new parent so will remain isolated until re-paired with the network.</p><p><em>Examples: WXKG01LM, RTCGQ01LM, MCCGQ11LM</em></p><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>Router</span></a></h3><p>Routers are responsible for routing traffic between different nodes. Routers may not sleep. As such, routers are not a suitable choice for battery operated devices. Routers are also responsible for receiving and storing messages intended for their children. In addition to this, routers are the gate keepers to the network. They are responsible for allowing new nodes to join the network.</p><p><em>Examples: LED1545G12, 7146060PH, ZNCZ02LM, <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer">CC2531 USB sniffer flashed with the router firmware</a>, <a href="https://www.zigbee2mqtt.io/devices/ZBDongle-E.html" target="_blank" rel="noopener noreferrer">SONOFF ZBDongle-E-based router</a></em></p><p><em>Note: Some devices advertising router functionality in a Zigbee network perform poorly and can thus effectively lower the stability of your Zigbee network.</em></p><h3 id="coordinator" tabindex="-1"><a class="header-anchor" href="#coordinator"><span>Coordinator</span></a></h3><p>A coordinator is a special router. In addition to all of the router capabilities, the coordinator is responsible for forming the network. To do that, it must select the appropriate channel, PAN ID, and extended network address. It is also responsible for selecting the security mode of the network.</p><p><em>Examples: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default" target="_blank" rel="noopener noreferrer">CC2531 USB sniffer flashed with the coordinator firmware</a></em></p><h3 id="finding-out-the-type-of-your-device" tabindex="-1"><a class="header-anchor" href="#finding-out-the-type-of-your-device"><span>Finding out the type of your device</span></a></h3><p>Zigbee2MQTT logs the device type of your devices on startup, e.g.:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug ZigBee (Router)</span>\n<span class="line">2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature &amp; humidity sensor (EndDevice)</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="green-power-devices" tabindex="-1"><a class="header-anchor" href="#green-power-devices"><span>Green Power devices</span></a></h3><p>Zigbee Green Power devices are special end devices that are designed to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first by a Green Power &quot;proxy&quot;. This means the Green Power device must be in range of a regular Zigbee device that supports the Green Power proxy role. Examples are Philips Hue and (at least some) Ikea Tradfri bulbs.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p>',19),r=(0,i.Lk)("em",null,"a lot",-1),l=(0,i.Lk)("p",null,[(0,i.Lk)("em",null,"Example Green Power devices: PTM 215Z, SR-ZGP2801K-5C, SR-ZGP2801K2-DIM, SR-ZGP2801K4-DIM")],-1),s=(0,i.Lk)("h4",{id:"gp-proxies-sinks",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#gp-proxies-sinks"},[(0,i.Lk)("span",null,"GP Proxies & Sinks")])],-1),o=(0,i.Lk)("p",null,"The following Zigbee routers have already been confirmed to support (at least some) ZGP features. Other devices very likely also work without issues, they just haven't been added to this table yet.",-1),d=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",{style:{"text-align":"left"}},"Zigbee Router"),(0,i.Lk)("th",{style:{"text-align":"center"}},"GP Proxy"),(0,i.Lk)("th",{style:{"text-align":"center"}},"GP Sink"),(0,i.Lk)("th",{style:{"text-align":"center"}},"Unicast")])],-1),c={style:{"text-align":"left"}},h=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),g=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),p=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),u={style:{"text-align":"left"}},k=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),f=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),y=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),m={style:{"text-align":"left"}},b=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),v=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),L=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),w={style:{"text-align":"left"}},x=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Z=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),T=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),P={style:{"text-align":"left"}},_=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Y=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),E=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),I={style:{"text-align":"left"}},W=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),C=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),S=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),M={style:{"text-align":"left"}},F=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),G=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),N=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),A={style:{"text-align":"left"}},D=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),H=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Q=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),z={style:{"text-align":"left"}},q=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),R=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),K=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),B={style:{"text-align":"left"}},U=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),O=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),j=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),X={style:{"text-align":"left"}},V=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),J=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),$=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ee={style:{"text-align":"left"}},te=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ne=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ie=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),ae={style:{"text-align":"left"}},re=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),le=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),se=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),oe={style:{"text-align":"left"}},de=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ce=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),he=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),ge={style:{"text-align":"left"}},pe=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ue=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),ke=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),fe={style:{"text-align":"left"}},ye=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),me=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),be=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ve={style:{"text-align":"left"}},Le=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),we=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),xe=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ze={style:{"text-align":"left"}},Te=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Pe=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),_e=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ye={style:{"text-align":"left"}},Ee=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ie=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),We=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ce={style:{"text-align":"left"}},Se=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Me=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Fe=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1),Ge={style:{"text-align":"left"}},Ne=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ae=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),De=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),He={style:{"text-align":"left"}},Qe=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ze=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),qe=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Re={style:{"text-align":"left"}},Ke=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Be=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ue=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Oe={style:{"text-align":"left"}},je=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Xe=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Ve=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),Je={style:{"text-align":"left"}},$e=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),et=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1),tt=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),nt={style:{"text-align":"left"}},it=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),at=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),rt=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),lt={style:{"text-align":"left"}},st=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ot=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),dt=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1),ct=(0,i.Fv)('<p><em>ⁱ ZGP frames are always being re-transmitted as broadcast, even if unicast was requested by the coordinator. Might be a <a href="https://github.com/Koenkk/zigbee2mqtt/issues/22897#issuecomment-2158291085" target="_blank" rel="noopener noreferrer">firmware bug</a>.</em></p><p><em>² Only ICPSHC24-10EU-IL-2 (new version) is able to translate ZGP frames.</em></p><h2 id="zigbee-networking" tabindex="-1"><a class="header-anchor" href="#zigbee-networking"><span>Zigbee networking</span></a></h2><p>This section is an overview of how the Zigbee protocol stack divides into layers (See <a href="https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature" target="_blank" rel="noopener noreferrer">Wikipedia - IP layers</a> ). The number of layers in this type of description often varies; this discussion uses 4:</p><ol><li>the physical and MAC layers,</li><li>the network and transport layer,</li><li>the application layer, and</li><li>the Zigbee2MQTT layer.</li></ol><p>Most of the focus will be on the last two layers.</p><h3 id="physical-and-mac-layers" tabindex="-1"><a class="header-anchor" href="#physical-and-mac-layers"><span>Physical and MAC layers</span></a></h3><p>The Physical and MAC layers of the Zigbee protocol are defined by <a href="https://en.wikipedia.org/wiki/IEEE_802.15.4" target="_blank" rel="noopener noreferrer">IEEE 802.15.4</a>. This is a common set of standards that are used by multiple protocol stacks, including Zigbee, 6LoWPAN, Thread and Z-Wave. There are actually a few different frequency bands that IEEE 802.15.4 can use; the same 2.4 GHz band that WiFi can use, and then an 800 MhZ and a 900MhZ band whose use varies by country. In general, devices using one stack choose one of these and avoid the others. For example, Zigbee devices generally use the 2.4 GHz band and Z-Wave devices generally use the 8/900 MHz bands (depending on country).</p><h3 id="the-network-and-transport-layers" tabindex="-1"><a class="header-anchor" href="#the-network-and-transport-layers"><span>The Network and Transport layers</span></a></h3><p>The Network and Transport layers are where the routing, security and transport between the various nodes in a Zigbee network are defined. This includes things like the network encryption model. This is also where the difference between the controller, routers and end-nodes is defined in the Zigbee network - see <a href="#device-types">device types</a>. There is one other Zigbee concept that I’ll put at the transport layer; the concept of Endpoints. Similar to ports in TCP/IP, Endpoints allow each physical device to have multiple virtual devices on the network. For example, a 3-gang Zigbee switch might have a single radio, and hence only one MAC address and only one Zigbee network address, but have three endpoints - one for each switch. Each endpoint can then run a single ‘switch’ interface.</p><h3 id="the-application-layer" tabindex="-1"><a class="header-anchor" href="#the-application-layer"><span>The application layer</span></a></h3><p>Zigbee is more than just a networking technology; it defines a bunch of standard applications that run on the network. These applications are defined in the Zigbee Cluster Library specification (see <a href="https://github.com/Koenkk/zigbee-herdsman/blob/master/docs/07-5123-08-Zigbee-Cluster-Library.pdf" target="_blank" rel="noopener noreferrer">Zigbee Cluster Library Specification v7</a>). Each ‘cluster’ defines one type of application communication. Each cluster type has its own integer ID, and comes in two flavours; client and server. There are clusters for low-level information gathering - getting the device model number, listing the endpoints and the clusters each endpoint implements (each endpoint can implement multiple clusters). There are clusters for simple network setup purposes, such as the Identify cluster which allows someone to ask a device to identify itself, e.g. a light asked to identify itself might start pulsing. There are clusters for on/off light control, where a light might implement the on/off server cluster and a switch might implement the on/off client cluster. There are clusters for configuration that allow a controller to configure devices in various ways.</p><p>As noted above, each cluster comes in two flavours; client and server. Generally the server is the endpoint that is running more frequently, and the client chooses to connect to the server. In many cases this isn’t clear-cut when considering the cluster functionality, so the spec decides pretty much arbitrarily.</p><p>The Zigbee controller can ‘bind’ the clusters for two endpoints together. It will connect one endpoint that implements the client variant of a cluster to another endpoint that implements the server variant of the same cluster.</p><p>There are also some special clusters. The ‘group’ cluster allows the definition of ‘groups’ - each defined by a small integer. If an endpoint implements the group cluster then it can be configured to be part of some number of groups. The device remembers which groups it is a member of. A group can then be treated like a virtual endpoint. Messages sent to a particular group ID are broadcast over the network and all devices that are part of that group will respond to the message. Similarly, a client can be bound to a group rather than another endpoint, so that, for example, a single switch can control a whole group of lights.</p><p>Similarly, the scene cluster allows a device to be configured to remember parameters from other clusters implemented on that device. A light might remember brightness. A roller blind might remember a set height. Each device can remember a small number of scenes, identified by ID.</p><p>Scenes and groups are designed to work together. One might imagine setting up a bunch of different devices, then joining them all into a group, then sending the group a ‘remember scene’ command. One could then send a ‘recall scene’ command to the group with the appropriate scene ID to cause many devices to configure themselves in a given way with minimal network traffic, and hence minimal latency.</p><h3 id="zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt"><span>Zigbee2MQTT</span></a></h3><p>The Zigbee stack has a certain amount of home automation protocol already defined; as discussed, devices can be formed into groups and scenes defined, switches can be bound to those groups. In such a setup the Zigbee controller might help configure the network, but afterwards it is passive at the application level.</p><p>If more flexibility is required than comes in the pre-defined Zigbee clusters, for example “Turn on the fan when the relative humidity is over 70%.”, then you need more clever control. It is here that Zigbee2MQTT comes in. It translates between Zigbee and MQTT.</p><p>When a device is added to the network with a Zigbee-Herdsman controller, the controller uses the low-level configuration clusters to interview the device and find out what the device is, what endpoints it has, and what clusters each of those endpoints implements. The Zigbee-Herdsman-Converters then record, for each model of device, which clusters the controller should bind to, and how the conversion to MQTT should be handled. Most devices in Zigbee-Herdsman-Converters use generic converters that bind to each Zigbee cluster and provide a standard MQTT interface for that cluster.</p><p>With this setup, when a switch is activated, it sends a message to the Zigbee2MQTT controller. The controller then sends out an MQTT message. The MQTT controller (which is different to the Zigbee controller. e.g. the Home Assistant package) then decides what to do based on that message. It might, for example, decide to turn on a particular light, so it would send an MQTT message requesting the light to turn on. Zigbee2MQTT would receive that message, then send a Zigbee message to the light’s endpoint using the appropriate Zigbee cluster.</p><p>This system is significantly more flexible than the base Zigbee system. But it also has higher latency (it takes longer for the system to react to a switch being toggled) and it has more points of failure. With the base Zigbee setup, not even the controller is involved once setup is complete. With the Zigbee2MQTT setup there are two Zigbee messages, two MQTT messages, and three extra processing steps (the main controller deciding what to do, and MQTT processing the messages in each direction).</p><p>Note that in some commercial Zigbee systems, such as Phillips Hue, the controller node in the Zigbee network is also the automation controller that can add additional smarts on top of the base Zigbee setup. Zigbee2MQTT inserts MQTT between the two, allowing them to be decoupled.</p>',24),ht={},gt=(0,n(36920).A)(ht,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("p",null,[(0,i.eW)("When pairing a Green Power device, you must choose whether translated messages should be re-transmitted by unicast or broadcast. Only "),(0,i.bF)(n,{to:"/guide/usage/pairing_devices.html"},{default:(0,i.k6)((()=>[(0,i.eW)("enable join")])),_:1}),(0,i.eW)(' on a specific device to use unicast for this Green Power device. Enable join on all devices to use broadcast. Do note that each proxy will generate a unique broadcast for each Green Power event, and a single keypress may generate more than one event (e.g. "key down" then "key up"). If there are multiple proxies paired with a Green Power device, this may generate '),r,(0,i.eW)(" of traffic.")]),l,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.eW)("Note: Heavy use of broadcasts can negatively impact performance of your network (See "),(0,i.bF)(n,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Broadcasts")])),_:1}),(0,i.eW)(").")])]),s,o,(0,i.Lk)("table",null,[d,(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("td",c,[(0,i.bF)(n,{to:"/devices/ICPSHC24-10EU-IL-1_ICPSHC24-10EU-IL-2.html"},{default:(0,i.k6)((()=>[(0,i.eW)("IKEA ICPSHC24-10EU-IL-2")])),_:1}),(0,i.eW)("²")]),h,g,p]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",u,[(0,i.bF)(n,{to:"/devices/LED2101G4.html"},{default:(0,i.k6)((()=>[(0,i.eW)("IKEA LED2101G4")])),_:1})]),k,f,y]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",m,[(0,i.bF)(n,{to:"/devices/LED2103G5.html"},{default:(0,i.k6)((()=>[(0,i.eW)("IKEA LED2103G5")])),_:1})]),b,v,L]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",w,[(0,i.bF)(n,{to:"/devices/LED2109G6.html"},{default:(0,i.k6)((()=>[(0,i.eW)("IKEA LED2109G6")])),_:1})]),x,Z,T]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",P,[(0,i.bF)(n,{to:"/devices/E1603_E1702_E1708.html"},{default:(0,i.k6)((()=>[(0,i.eW)("IKEA E1603/E1702/E1708")])),_:1})]),_,Y,E]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",I,[(0,i.bF)(n,{to:"/devices/1742930P7.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 1742930P7")])),_:1})]),W,C,S]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",M,[(0,i.bF)(n,{to:"/devices/3216131P5.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 3216131P5")])),_:1})]),F,G,N]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",A,[(0,i.bF)(n,{to:"/devices/3261030P7.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 3261030P7")])),_:1})]),D,H,Q]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",z,[(0,i.bF)(n,{to:"/devices/3261031P6.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 3261031P6")])),_:1})]),q,R,K]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",B,[(0,i.bF)(n,{to:"/devices/3261331P7.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 3261331P7")])),_:1})]),U,O,j]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",X,[(0,i.bF)(n,{to:"/devices/3418931P6.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 3418931P6")])),_:1})]),V,J,$]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",ee,[(0,i.bF)(n,{to:"/devices/4023330P7.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 4023330P7")])),_:1})]),te,ne,ie]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",ae,[(0,i.bF)(n,{to:"/devices/4034031P7.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 4034031P7")])),_:1})]),re,le,se]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",oe,[(0,i.bF)(n,{to:"/devices/4090230P9.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 4090230P9")])),_:1})]),de,ce,he]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",ge,[(0,i.bF)(n,{to:"/devices/5047130P9.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 5047130P9")])),_:1})]),pe,ue,ke]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",fe,[(0,i.bF)(n,{to:"/devices/5062131P7.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 5062131P7")])),_:1})]),ye,me,be]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",ve,[(0,i.bF)(n,{to:"/devices/9290024896.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 9290024896")])),_:1})]),Le,we,xe]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Ze,[(0,i.bF)(n,{to:"/devices/9290022169.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 9290022169")])),_:1})]),Te,Pe,_e]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Ye,[(0,i.bF)(n,{to:"/devices/929001953301.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 929001953301")])),_:1})]),Ee,Ie,We]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Ce,[(0,i.bF)(n,{to:"/devices/8718696548738.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 8718696548738")])),_:1})]),Se,Me,Fe]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Ge,[(0,i.bF)(n,{to:"/devices/8719514491106.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Philips 8719514491106")])),_:1})]),Ne,Ae,De]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",He,[(0,i.bF)(n,{to:"/devices/ZBDongle-E.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Sonoff ZBDongle-E")])),_:1})]),Qe,ze,qe]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Re,[(0,i.bF)(n,{to:"/devices/SR-ZG9040A.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Sunricher SR-ZG9040A")])),_:1})]),Ke,Be,Ue]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Oe,[(0,i.bF)(n,{to:"/devices/SR-ZG9101SAC-HP-SWITCH-2CH.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Sunricher SR-ZG9101SAC-HP-SWITCH-2CH")])),_:1})]),je,Xe,Ve]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Je,[(0,i.bF)(n,{to:"/devices/C4.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Ubisys C4")])),_:1})]),$e,et,tt]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",nt,[(0,i.bF)(n,{to:"/devices/S2.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Ubisys S2")])),_:1})]),it,at,rt]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",lt,[(0,i.bF)(n,{to:"/devices/VES-ZB-SWI-015.html"},{default:(0,i.k6)((()=>[(0,i.eW)("Vesternet VES-ZB-SWI-015")])),_:1})]),st,ot,dt])])]),ct])}]]),pt=JSON.parse('{"path":"/advanced/zigbee/01_zigbee_network.html","title":"Zigbee network","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Device types","slug":"device-types","link":"#device-types","children":[{"level":3,"title":"End Device","slug":"end-device","link":"#end-device","children":[]},{"level":3,"title":"Router","slug":"router","link":"#router","children":[]},{"level":3,"title":"Coordinator","slug":"coordinator","link":"#coordinator","children":[]},{"level":3,"title":"Finding out the type of your device","slug":"finding-out-the-type-of-your-device","link":"#finding-out-the-type-of-your-device","children":[]},{"level":3,"title":"Green Power devices","slug":"green-power-devices","link":"#green-power-devices","children":[]}]},{"level":2,"title":"Zigbee networking","slug":"zigbee-networking","link":"#zigbee-networking","children":[{"level":3,"title":"Physical and MAC layers","slug":"physical-and-mac-layers","link":"#physical-and-mac-layers","children":[]},{"level":3,"title":"The Network and Transport layers","slug":"the-network-and-transport-layers","link":"#the-network-and-transport-layers","children":[]},{"level":3,"title":"The application layer","slug":"the-application-layer","link":"#the-application-layer","children":[]},{"level":3,"title":"Zigbee2MQTT","slug":"zigbee2mqtt","link":"#zigbee2mqtt","children":[]}]}],"git":{"updatedTime":1722969898000},"filePathRelative":"advanced/zigbee/01_zigbee_network.md"}')}}]);