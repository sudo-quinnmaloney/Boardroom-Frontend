import * as React from "react";


const MissionStatement = () => {
  let citationCount = 0;
  let citationMap = new Map();

  function onLinkClick(key) {
    document.getElementsByClassName('reference')[key - 1].scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'smooth'});
  }

  const addCitation = (reference, description) => {
    // TODO: check if reference exists in citationMap
    for (let [key, value] of citationMap) {
      if (value.reference === reference) {
        return (
          <span className={'citation'}> <a className={'citation-link'} onClick={() => {
            onLinkClick(key);
          }}>[{key}]</a></span>
        );
      }
    }

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
        While it may not sound sexy, we hope that filling this desperately vacant niche will provide a powerful tool in guiding, resisting, or rewarding corporations that all too often disregard their ethics in their efforts to maximize profits.</p>

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
        consequential as those of any government today. While the vast majority of these users have had no say in how Google operates,
        here are just a few of the shareholder proposals that have been shot down in recent years:
      </p>
      <ul>
        <li><p>Proposing a Transition from Dual-Class to Single-Class Shares, Allowing Equal Voting Rights for All
          Shareholders
          {addCitation(
            'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000130817924000612/lgoog2024_def14a.htm#lgooga059',
            'Google 2024 Proxy Materials - Stockholder Proposal Regarding Equal Shareholder Voting'
          )}
        </p></li>
        <li><p>Requesting an Examination of the Company’s Climate Lobbying in Regards to the Paris Agreement
          {addCitation(
            'https://www.sec.gov/ix?doc=/Archives/edgar/data/1652044/000130817923000736/lgoog2023_def14a.htm#lgooga056',
            'Google 2023 Proxy Materials - Stockholder Proposal Regarding a Climate Lobbying Report'
          )}
        </p></li>
        <li><p>Requesting a Report on Data Privacy in Defense of Reproductive Rights
          {addCitation(
            'https://www.sec.gov/ix?doc=/Archives/edgar/data/1652044/000130817923000736/lgoog2023_def14a.htm#lgooga057',
            'Google 2023 Proxy Materials - Stockholder Proposal Regarding a Report on Reproductive Rights and Data Privacy'
          )}
        </p></li>
        <li><p>Requesting a Human Rights Assessment of AI-Driven Targeted Ad Policies
          {addCitation(
            'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000130817924000612/lgoog2024_def14a.htm#lgooga063',
            'Google 2024 Proxy Materials - Stockholder Proposal Regarding a Human Rights Assessment of AI-Driven Targeted Ad Policies'
          )}
        </p></li>
        <li><p>Requesting a Report on Online Safety for Children
          {addCitation(
            'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000130817924000612/lgoog2024_def14a.htm#lgooga064',
            'Google 2024 Proxy Materials - Stockholder Proposal Regarding a Report on Online Safety for Children'
          )}
        </p></li>
      </ul>

      <p>Or how about Apple:</p>
      <ul>
        <li><p>Requesting a Report on Supply Chain Forced Labor
          {addCitation(
            'https://www.sec.gov/Archives/edgar/data/320193/000119312522003583/d222670ddef14a.htm#tx222670_36b',
            'Apple 2022 Proxy Materials - Report on Supply Chain Forced Labor'
          )}
        </p></li>
        <li><p>Requesting a Report on Congruency of Privacy and Human Rights Policies
          {addCitation(
            'https://www.sec.gov/ix?doc=/Archives/edgar/data/320193/000130817924000010/laapl2024_def14a.htm#laapl2024a041',
            'Apple 2024 Proxy Materials - Congruency Report on Privacy and Human Rights'
          )}
        </p></li>
      </ul>
      <p>Most of these proposals are simple requests for transparent third-party analysis; but if given an opportunity to
        crowdsource, receive feedback on a broader scale, and garner support globally, these proposals could become
        valuable tools for change and regulation. In pursuit of this, our mission at Boardroom is to provide
        the means to educate, debate, criticize, support, unify, and hold corporate leaders accountable for
        their actions - or lack thereof.</p>
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