
import React from 'react'
import {Element} from 'react-stylesheet'

import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons'



export default class Helsedirektoratet extends React.Component 
  {
    constructor(props, context) {
        super(props, context);

        // Define some Markdown content
        this.element = <FontAwesomeIcon icon={faCoffee} />
      
  this.ContentMarkdown =` 
  
**Kunde** : **Helsedirektoratet** 
Avdeling: Utvikling og Forvaltning  
  Helsedirektoratet er er et fag- og myndighetsorgan som er underlagt Helse- og omsorgsdepartementet. Direktoratet har også oppgaver fra Kommunal- og regionaldepartementet. 
 Direktoratet er faglig rådgiver, iverksetter av vedtatt politikk og forvalter av lov og regelverk innenfor helse- og omsorgssektoren.
I tillegg har Helsedirektoratet et helhetlig ansvar for den nasjonale helseberedskapen i Norge.

**Referanse**: Aleksandra Pesaljevic                                                                                                   
*Epost*: [Aleksandra.Pesaljevic@helsedir.no](mailto:Aleksandra.Pesaljevic@helsedir.no)

**Prosjektnavn :**
 EESSI- Electronic Exchange of Social Security Information
 
**Rolle :**
 Utvikler, teknisk tester, testutvikler
 
**Omfang :** 100% stilling med proskjektarbeid. Projektet bestod av 13 deltakere.
 
 **Beskrivelse **

 - Utviklet integrasjon tester med JEST og Enzyme.
 
 - Skrevet selenium rammeverk ved bruk av SpecFlow (Cucumber for .NET), Fluent syntaks i C# og automatiserte akseptanse tester for react baserte «ELSA» frontend .
 
 - Skrevet rammeverk for automatisert akseptanse testing ved bruk av RobotFramework.
 
 - Testutvikling med metodikk som følger TDD ( Testdrevet utvikling) og BDD ( Behaviour Driven Developement).
 
 - Skrevet automatiserte backend tester mot databaser og mot APIet. Automatiserte tester ved bruk av JQuery.
 
 - Utviklet tester for integrasjonsplattform basert på Azure Stack og RabbitMq (meldings orientert arkitektur).
 
 - Gjennomførte POC testing av «ELSA saksbehandling Løsning» i Azure Service Bus « Microsoft private cloud» av Norsk Helsenett(NHN). Utviklet tester for å opprette  køer, emner, sende og motta meldinger i service busen.
 
 - Utviklet tester for leseliste for blindpersonas ved bruk av JAWS.
 
 - Utarbeidet performance test scenioer med jmeter.
 
 - Gjennomførte code review i utvkling ved bruk av SONAR qube.
 
 - Anvarlig for test data management og test miljøer.
 
 - Utarbeidet automatisert sikkerheststesing med OWASP (ZED) attack proxy.
 
 - Brukte Lean og kanban metodikk i test driven utvikling av ELSA og Integrasjonsplattform
 
 - Brukte TFS 2017, Swagger UI, Visual studio 2017, confluence for forskjellige test aktiviteter.
 
 
 **Kompetanseområder**
 
 
 Frontend , Backend, Teknisk testing, test automatisering, akseptanse testing, verdikjede testing, BDD, TDD, funksjonell testing, kontinuerlig integrasjon, ytelsetesting, universal utforming WCAG 2.0 AA.
 
 **Verktøy/ teknologi**
 
 
 .NET Core, ASP.NET Framework, JEST, TFS 2017, jmeter, Selenium,  SonarQube, confluence, Visual Studio 2017, MS Test Manager, SpecFlow(Cucumber for .NET), RobotFramework.
 
  `
    }
    render(){
      return( <div>
        <h1>Helsedirektoratet: Full stack utvikler,</h1>
        <h1> test utvikler</h1>
        <p><Markdown 
                        escapeHtml={true}
                        source={this.ContentMarkdown} 
                    />
     </p>
        <Link to="/"><Element
  background="blue"
  backgroundOnHover="yellow"
  color="yellow"
  colorOnHover="Blue"
  padding={10}>{this.element}</Element></Link>
      </div>);
    }
  }