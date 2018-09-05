import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons'
import {Element} from 'react-stylesheet'



export default class Novo extends React.Component 
  {
  constructor(props, context) {
    super(props, context);

    // Define some Markdown content
    this.element = <FontAwesomeIcon icon={faCoffee} />
  
this.ContentMarkdown = ` 

**Kunde** : **Bra bank ** 
Bra bank er bråthens bank som tilbyr kreditkort og andre bank tjenester til reisende og ansatte


**Referanse**: marianne.sorlie@capgemini.com
**Prosjektnavn :**
Novo



**Rolle :**
Fullstack utvikler, teknisk tester


**Omfang :**

100% stilling med proskjektarbeid. Projektet bestod av 7 deltakere.

**Beskrivelse **

- Oppdraget er å utvikle kredittkort løsning for Bra bankenes web applikasjon og  integrere dette med NETS, Bisnode, Lindorff og SDC

- Frontend var basert på CMS umbraco og backend på Azure cloud.

- Utviklet REST Api og mikotjenester. 

**Kompetanseområder**


DevOps, .net core, umbraco

**Verktøy/ teknologi**

Vsts, Azure 

`
  }


render(){
  return( <div>
    <h1>Bra bank: Full stack utvikler,</h1>
    <h1> testutvikler</h1>
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
