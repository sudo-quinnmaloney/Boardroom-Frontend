import * as React from "react";


const MissionStatement = () => {
  let citationCount = 0;
  let citationMap = new Map();

  function onLinkClick(key) {
    document.getElementsByClassName('reference')[key - 1].scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'smooth'});
  }

  const addCitation = (reference, description) => {
    citationCount += 1;
    const thisKey = citationCount;
    citationMap.set(citationCount, {reference, description});
    return (
      <span className={'citation'}> <a className={'citation-link'} onClick={ () => { onLinkClick(thisKey); }}>[{thisKey}]</a></span>
    );
  }

  const listCitations = () => {
    return (
      <div>
        {Array.from(citationMap).map(([key, value]) => {
          return (
            <p className={'reference'} id={`reference-${key}`} key={key}><a href={value.reference}>[{key}]</a>: {value.description}</p>
          );
        })}
      </div>
    );
  }

  return (
    <div id={'mission-statement'}>
      <h1>What is Boardroom?</h1>
      <p>Plain and simple, Boardroom is a platform for the public distribution and discussion of corporate proxy voting materials.
        While it may not sound very sexy, we hope that filling this desperately vacant niche will provide a powerful tool in guiding, resisting, or rewarding corporations that all too often disregard their ethics in their efforts to maximize profits.</p>

      <h2>What is proxy voting?</h2>
      <p className={'text-in-progress'}>Working on an effective explanation...</p>
      <h2>Why does it matter?</h2>
      <p>Let's look towards Google (GOOGL) for an example. Estimated to have over 3 billion monthly active users (MAU) for YouTube alone
        {addCitation(
          'https://datareportal.com/reports/digital-2023-october-global-statshot',
          'DataReportal - Digital 2023 October Global Statshot'
        )},
        1+ billion MAU for Gmail, 1+ billion MAU for Google Drive, 1+ billion MAU for Google Maps,
        2.5+ billion active Android devices, 265+ million smart speakers
        {addCitation(
          'https://zipdo.co/google-user-statistics/',
          'Zipdo - Google User Statistics'
        )}, and countless other impressive measures of influence, Google policies and behaviors are arguably as
        consequential as those of any government today. </p>

      <p>Not only are these voting materials absent from public discourse, but even when shareholders do collectivize, executive interests can be almost impossible to overcome.</p>
      <p>One of their 2023 shareholder proposals says it well:</p>
      <blockquote>
        <p className={'quotation'}>"In our company’s multi-class voting structure, Class B stock has 10 times the voting rights of Class A. As a result, Mr. Page and Mr. Brin currently control over 51% of our company’s total voting power while owning less than 12% of stock – and will continue to retain voting control even though they have stepped down from leading the company. This raises concerns that the interests of public shareholders may be subordinated to those of our co-founders.



Due to this voting structure, our company takes public shareholder money but refuses shareholders an equal voice in the company’s management. For example, it was primarily the weight of the insiders’ 10 votes per share that permitted the creation of a non-voting class of stock (class C) despite the fact that the “majority of [shareholders] voted to oppose the maneuver.” The New York Times reported that “only about 12.7 percent of Google’s Class A stockholders — other than Mr. Brin, Mr. Page and other Google directors and employees — voted in support of issuing the Class C stock … With little regard for the shareholders’ opinion, Google continued with the plan.”
          {addCitation("https://www.sec.gov/ix?doc=/Archives/edgar/data/1652044/000130817923000736/lgoog2023_def14a.htm#lgooga066", "Google 2023 proxy materials - Stockholder Proposal Regarding Equal Shareholder Voting")}</p>
      </blockquote>
      <p>Predictably, this proposal failed to correct Google's voting structure, receiving 30.73% of votes.
        And failed again in 2024 with 31.28%. That should inspire some hope though! These proposals are recurring, our window of opportunity to enact serious change is not yet closed, and currently only a small fraction of shareholders actually vote.<br/> Boardroom can change that.
      </p>
      <p>This is just one of many, many proposals from many, many influential public companies that have been squashed by voting structures, 'board recommendations', and a pointed lack of publicity, despite being transparently beneficial to the consumer and the general public. Our mission with Boardroom is to break this pattern by providing the means to educate, debate, criticize, support, unify, and hold corporate leaders accountable for their actions - or lack thereof.</p>
      <h3>References</h3>
      {listCitations()}
      <style>{`
      .citation { 
        font-size: 75%; 
        vertical-align: top; 
       } 
       
       a {
        text-decoration: none;
        color: rgba(225,45,50,0.8);
       }
       
       a:hover, a:active {
        color: rgb(114,47,47);
       }
       
       #mission-statement { 
        height: 100vh;
       }
       
       p {
        color: #333333;
       }
       
       .text-in-progress {
        color: #666666;
       }
       `}</style>
    </div>
  );
}

export default MissionStatement;