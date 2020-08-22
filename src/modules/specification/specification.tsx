import React, { Component } from 'react';
import { Callout, H1, H2, Divider, UL, Code } from "@blueprintjs/core";

export default class Specification extends Component {
  render() {
    return (
      <div>
        <Callout intent="warning">
            This specification is a <b>work in progress</b> and is subject to change without notice.
        </Callout>

        <H1 className="mt4">Introduction</H1>
        <Divider />
        <H2 className="mt2">What is it?</H2>
        <p>
          <b>LIME Protocol</b> (acronym for <i>Lightweight Messaging Protocol</i>) is a JSON based protocol for messaging,
          inspired by the XMPP protocol. It aims to be simple but extensible, with little verbosity but yet providing good
          readability.
        </p>

        <H2 className="mt4">And why not just use XMPP?</H2>
        <p>
          XMPP is a protocol widely used for real-time communication but is complex due to the number of features and extensions
          that it implements. Just take a look at its <a target="blank" href="http://xmpp.org/xmpp-protocols/xmpp-core/">
          specification</a> to understand that XMPP goes far beyond what LIME proposes.
        </p>
        <p>
          This protocol defines only a basic message structure and makes use of the MIME content type declarations to remain
          extensible, but is not mean to cover all the scenarios that XMPP supports.
        </p>

        <H1 className="mt4">Definitons</H1>
        <Divider />
        <H2 className="mt2">Concepts</H2>
        <p>
          The basic idea of the protocol is the exchange of JSON documents between elements in a network. These documents are
          called <b>envelopes</b> and the elements <b>nodes</b>.
        </p>
        <p>
          The protocol defines four types of envelopes:
        </p>
        <UL>
          <li>
            <a href="#specification/#message">Message</a> -
            Provides the transport of a content between nodes in a network.
          </li>
          <li>
            <a href="#specification/#notification">Notification</a> -
            Notify events related to a message.
          </li>
          <li>
            <a href="#specification/#command">Command</a> -
            Allows the manipulation of node resources, like server session parameters or information related to network nodes.
          </li>
          <li>
            <a href="#specification/#session">Session</a> -
            Allows the configuration and establishment of the communication channel between nodes.
          </li>
        </UL>
        <p>
          The nodes communicate with each other over persistent connections, like TCP or Websockets. The protocol is asynchronous,
          so there's no guarantee of delivery order of the envelopes, except during the session negotiation, where only session
          envelopes are allowed.
        </p>
        <p>
          Every connected node must have an identity, presented in the <Code>name@domain</Code> format, as defined by the <a target="blank"
          href="http://tools.ietf.org/html/rfc2822#section-3.4.1">RFC 2822, section 3.4.1.</a> The domain name should be a valid
          domain (i.e. can be resolved by a DNS server) and the name a valid user account identifier in the domain. The identity is
          authenticated by the server during the establishment of the session.
        </p>
        <p>
          In addition to the identity, the connected node can suggest a name to the particular connection using a identifier called
          <b> instance</b>. This identifier should appears after the identity, separated by a slash (/) symbol, during the session
          authentication process. One identity can have more than one active connection in a domain so the instance should be used to
          differentiate these connections. Usually is used the name of the device (John-Cellphone, John-PC) but can be any valid
          string. If not provided, the server will set a default value.
        </p>
        <p>
          Therewith, the complete format of a node identifier is <Code>name@domain/instance</Code>, similar to the
          <a target="blank" href="https://xmpp.org/rfcs/rfc3920.html#rfc.section.3"> XMPP's Jabber ID </a>
          (the difference is that the identifier located after the slash is called instance instead of resource).
        </p>
        <p>
          During a connection, there's a <b>server</b> which is the node that received the connection and the <b>client</b>, the node
          which started it. The only difference between these roles is related to the session state management, where the server has
          full control of it. Besides that, they share the same set of functionality. During the session establishment, the server provides
          an session id, its own node identifier and the client node identifier. It can optionally authenticate the client using an
          authentication scheme or provide an arbitrary node identifier without asking any information of the client.
        </p>
        <p>
          Although both parties of a session knows each other's node identifier, they can receive and send envelopes with distinct
          node information of the remote party. This means that a node can act as intermediate to be a envelopes switcher for nodes that
          are not directly connected. But it must be trusted by both sender and destination nodes for that.
        </p>
        <p>
          For instance, in a session between client@domain/instance and <Code>server@domain/instance</Code> the first one can receive an
          envelope that the sender is someone@domain/instance in that session. In this case, the client must decide if it trusts the remote
          party to send envelopes with that node identifier. Specifically, it should look if the remote party is trusted to originate envelopes
          in behalf of the specified node domain. This trust should be built outside the protocol, using techniques like a DNS query to look
          for a SRV entry to connect in a specified domain and transport TLS authentication. You can trust a remote party if the remote
          certificate is a valid <b>domain certificate</b>, emitted by a trusted issuer. In the case of receiving an envelope addressed to a
          different node, the party that received it can forward to the destination, but only if it can directly reach it. This means that
          the node must have a direct connection with that node or with a node that is trusted to receive this envelope, in the same conditions
          that are illustrated above. And after the envelope has been forwarded, the actual envelope destination should decides if it trusts
          the remote party in the same way.
        </p>

        <H2 className="mt4">Envelope</H2>
        <p>
          The JSON documents exchanged in a LIME conversation are called envelopes. The JSON data must be compliant with the <a target="blank"
          href="http://tools.ietf.org/html/rfc4627">RFC 4627</a> specification, using the <a target="blank" href="http://tools.ietf.org/html/rfc3629">
          UTF-8</a> encoding.
        </p>
        <p>
          Every envelope may contains the following properties:
        </p>
        <UL>
          <li>
            <b>from</b> - Identifier of the sender node of the envelope, in the <Code>name@domain/instance</Code> format. If a node receives
            an envelope without this value, it means that the envelope was originated by the remote party.
          </li>
          <li>
            <b>to</b> - Identifier of the destination node of the envelope, in the same format of the sender. If a node receives an envelope
            without this value, it means that the envelope is addressed to itself.
          </li>
          <li>
            <b>pp</b> - Acronym for per procurationem. Identifier of a delegate node (a node that received a permission to send on behalf of another),
            in the <Code>name@domain/instance</Code> format. Allows a node to send an envelope on behalf of another identity.
          </li>
          <li>
            <b>id</b> - Identifier of the envelope, which can be any relevant value for the caller.
          </li>
          <li>
            <b>metadata</b> - Allows the transport of generic information, in the <Code>"name": "value"</Code> format. This property is optional
            for all envelopes. Any value set in this property should not change the behavior of the server.
          </li>
        </UL>
      </div>
    );
  };
};