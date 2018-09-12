import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons'
import {Element} from 'react-stylesheet'



export default class ProfileTekst extends React.Component 
  {
  constructor(props, context) {
    super(props, context);

   
  
this.ContentMarkdown = ` 


Sameer er en fullstack utvikler med mange års internasjonal, utvikler bakgrunn fra IT, elektronikk, telecom, skatt, helse og olje industri og har arbeidet med systemutvikling siden 2007.<br/>
Han har erfaring med utvikling av forretnigskritiske systemer og integrasjoner både fra .net og java miljøene.
Han har deltatt i forskjellige utviklingsprosjekter hvor en har brukt DevOps, smidig, v-modell og fossefall som metodikk. Han har erfaring i testdrevet utvikling og automatisering både på .net og java stacken.<br/> Han har jobbet med angular, Asp.NET, MVC, C#, WebServices/XML, JavaScript inkl. ES6, React/redux, REST samt SQL Server, gulp, node.js og git.<br/>
Han har også vært involvert i STAR prosjektet i Telenor hvor han jobbet med Java teknologi som java servlets, JDBC, Swing, J2EE rammeverk som Struts2 MVC, Spring 3.x, hibernet. Også for tiden jobber han hos skattetaten i ett omfattende prosjekt består av big data 
Sameer har bred erfaring i å jobbe med databaser som Oracle, SQL server. Han behersker Windows, Unix og Linux. Han har meget bra erfaring med continuerlig utvikling med TFS/VSTS, Jenkins. Videre har han gode programmeringskunnskaper og behersker c#, java og python. Han har bred erafring i .NET Core og ASP.NET applikasjoner.
<br/>Sameer har utdannelse i informatikk med en bachelorgrad i programmering og nettverk fra Universitet i Oslo. I tillegg har en annen bachelorgrad i elektronikk of telekommunikasjon fra Universitet i mumbai. 
<br/>Som person har han mye teknisk innsikt. Han er analytisk og opptatt av både detaljer og helhet, og liker orden og struktur.<br/> Ellers er han en person som er opptatt av nært samarbeid, er proaktiv, effektiv, løsningsorientert og setter seg raskt inn i nye arbeidsoppgaver.


`
  }


render(){
  return( <div>
   <this.ContentMarkdown/>
  </div> );
}
  
  }
