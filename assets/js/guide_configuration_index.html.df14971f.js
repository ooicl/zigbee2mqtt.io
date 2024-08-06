"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1624],{88447:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>d,data:()=>u});var s=a(57305);const t=(0,s.Fv)('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1><p>Zigbee2MQTT is configured using <a href="https://en.wikipedia.org/wiki/YAML" target="_blank" rel="noopener noreferrer">YAML</a> based <code>configuration.yaml</code> file. The file have to be located in the <code>data</code> directory within your installation. The <code>data</code> directory and the <code>configuration.yaml</code> has to be writeable for Zigbee2MQTT process because it can get updated - e.g. if you change the settings in the frontend. It&#39;s possible specify a custom data directory by setting the <code>ZIGBEE2MQTT_DATA</code> environment variable.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Minimal configuration.yml example</span></span>\n<span class="line"><span class="token key atrule">permit_join</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"><span class="token key atrule">mqtt</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> mqtt<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">1883</span></span>\n<span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Could be either USB port (/dev/ttyUSB0), network Zigbee adapters (tcp://192.168.1.1:6638) or mDNS adapter (mdns://my-adapter).</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyUSB0</span>\n<span class="line"><span class="token comment"># Will run frontend on port 8080</span></span>\n<span class="line"><span class="token key atrule">frontend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">CONVENTION</p><p>The <em>dot-notation</em> of a config-key like <code>mqtt.server</code> means <code>server</code> property within the <code>mqtt</code> section. All <em>dot-notation</em> references are absolute.</p></div>',4),i={class:"custom-container warning"},o=(0,s.Lk)("p",{class:"custom-container-title"},"ATTENTION",-1),l=(0,s.Lk)("code",null,"permit_join: true",-1),r=(0,s.Fv)('<h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables"><span>Environment variables</span></a></h2><p>It is possible to override the values in <code>configuration.yaml</code> via environment variables. The name of the environment variable should start with <code>ZIGBEE2MQTT_CONFIG_</code> followed by the path to the property you want to set in uppercase split by a <code>_</code>.</p><p>In case you want to for example override:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">mqtt</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>set <code>ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC</code> to the desired value.</p><h2 id="config-changes-at-runtime" tabindex="-1"><a class="header-anchor" href="#config-changes-at-runtime"><span>Config changes at runtime</span></a></h2>',6),c=(0,s.Lk)("code",null,"zigbee2mqtt/bridge/request/options",-1),p={},d=(0,a(36920).A)(p,[["render",function(e,n){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t,(0,s.Lk)("div",i,[o,(0,s.Lk)("p",null,[(0,s.eW)("Be aware of the implications using "),l,(0,s.eW)(" and read the details in the "),(0,s.bF)(a,{to:"/guide/configuration/zigbee-network.html#permit-join"},{default:(0,s.k6)((()=>[(0,s.eW)("Permit join")])),_:1}),(0,s.eW)(" documentation.")])]),r,(0,s.Lk)("p",null,[(0,s.eW)("Some configuration options can be changed at runtime by issuing a MQTT-publish at the topic "),c,(0,s.eW)(". See "),(0,s.bF)(a,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request"},{default:(0,s.k6)((()=>[(0,s.eW)("MQTT Topics and Messages")])),_:1}),(0,s.eW)(" for details.")])])}]]),u=JSON.parse('{"path":"/guide/configuration/","title":"Configuration","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"adapter-settings.md"},"headers":[{"level":2,"title":"Environment variables","slug":"environment-variables","link":"#environment-variables","children":[]},{"level":2,"title":"Config changes at runtime","slug":"config-changes-at-runtime","link":"#config-changes-at-runtime","children":[]}],"git":{"updatedTime":1722969898000},"filePathRelative":"guide/configuration/README.md"}')}}]);