import React, { useState, useEffect } from 'react';
import getCommitHistory from '../functions/FetchCommits';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(date, time, description) {
  return { date, time, description };
}

function MakeCommitRows({loadingCallback}) {
  const [commitRows, setCommitRows] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await getCommitHistory();
        const rows = response.map((commit) => {
          let date = new Date(Date.parse(commit.commit.author.date));
          let dateString = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
          let timeString = `${
            date.getHours()
              .toString().length < 2 ? '0' + date.getHours().toString() : date.getHours()
          }:${
            date.getMinutes()
              .toString()
              .length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes()}`;
          let details =`${commit.commit.message}`;
          const row = createData(dateString, timeString, details);

          return (
            <TableRow
              hover={true}
              key={commit.sha}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          );
        });
        setCommitRows(rows);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        loadingCallback(false);
      }
    }
    fetchCommits();
  }, [loadingCallback]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={'div'}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className={'table-head'}>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={'table-body'} sx={{ marginTop: '0%'}}>
          {commitRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function CommitHistory({loadingCallback}) {
  return (
    <MakeCommitRows loadingCallback={loadingCallback}/>
  );
}