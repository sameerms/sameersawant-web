import React, { Component } from 'react'

export default class Skatteetatenkomponent extends Component {
  render() {
    return (
      <div>
        <dl className="card">
                  <dt className="u-visually-hidden">Company:</dt>
                  <dd className="h3">Skatteetaten</dd>
                  <dt className="u-visually-hidden">Role:</dt>
                  <dd className="h4">Minerva </dd>
                  <dt className="u-visually-hidden">Period:</dt>
                  <dd className="card__date">
                    <time dateTime="2018-08-18">Aug 18</time>
                    -
                    <time> Nåværende </time>
                  </dd>
                  <dt className="u-visually-hidden">Details:</dt>
                  <dd className="card__details">
                  <p><h2>Rolle</h2>	Backend utvikler, testansvarlig </p>

                  <p><h2>Omfang</h2>Stort prosjekt med ca 100 deltagere.</p>

                  <p><h2>Beskrivelse</h2>- Oppdraget er å utvikle integrasjonsplattform og sammensette forskjellige systemer levert av IBM og Atea. Og utvikle videre på plattformen for integrasjon med forskjellige fagsystemer i Skattediretoratet.<br /> 
                  -Utvikling av modeller for AI watson explorer.<br /> 
                  -Funkjonaliteten holdes konfedensielt pga taushetsplikt til prosjektet er ferdig. </p>

                  
                  <p><h2>Kompetanseområder</h2>	 Big Data, DevOps, Java, IIS, Datavarehus</p>
                  <p><h2>Verktøy/ teknologi	</h2>IBM db2 big sql, Watson Explorer, IBM inforsphere, Apache Kafka, Neo4j, MettleCI, Xray, Jira, Bamboo</p>

                  </dd>
                </dl>
      </div>
    )
  }
}
