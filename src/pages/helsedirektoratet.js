
import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'


export default class helsedirektoratet extends React.Component 
  {
    constructor(props, context) {
        super(props, context);

        // Define some Markdown content
      
  this.ContentMarkdown =` **Prosjektnavn :**
 EESSI- Electronic Exchange of Social Security Information
 

 
 **Rolle :**
 Utvikler, teknisk tester, testutvikler
 
 
 **Omfang :**
 
 100% stilling med proskjektarbeid. Projektet bestod av 13 deltakere.
 
 **Beskrivelse **
 
 Hovedmålet med prosjektet er å etablere en IT-plattform som vil hjelpe de sosiale trygdeordningene (social security institutions) på tvers av 32 land (de 28 EU landene og i tillegg Island, Liechtenstein, Norge og Sveits) med å utveksle strukturerte elektroniske dokumenter (SEDs). Prosjektet vil levere det sentrale IT-nettverket for å støtte de internasjonale utvekslingene, samt en nasjonalt applikasjon som kan brukes av de nasjonale institusjonene til å opprette, sende, motta og behandle elektroniske meldinger. -- Testleder, teknisk tester og test utvikler for utvkling av saksbehandling løsning «ESLA» og integrasjonsplattform i helsedirektoratet.
 
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
        <Link to="/">Tilbake </Link>
      </div>);
    }
  }
