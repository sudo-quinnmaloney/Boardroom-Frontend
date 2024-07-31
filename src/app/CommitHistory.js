import React, { useState, useEffect } from 'react';
import getCommitHistory from '../functions/FetchCommits';

function MakeCommitRows() {
  const [commitRows, setCommitRows] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await getCommitHistory();
        const rows = response.map((commit) => {
          let date = new Date(Date.parse(commit.commit.author.date));
          let details =`${date.getMonth()}/${date.getDate()}: ${commit.commit.message}`;
          return (
            <li style={{'listStyle': 'none', 'color': '#5e4f4e'}} key={commit.sha}>
              {details}
            </li>
          );
        });
        setCommitRows(rows);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCommits();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {commitRows}
      </ul>
    </div>
  );
}

export default function CommitHistory() {
  return (
    <div>
      <MakeCommitRows />
    </div>
  );
}
