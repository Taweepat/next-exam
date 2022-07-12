import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Link from 'next/link';
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const index = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setPost(res.data.results)
    })
  }, [])
  if (!post) return null;
  return (
    <Container>
      <TableContainer component={Paper} sx={{ width: '1024px', margin: 5,}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Table>
            <TableHead sx={{backgroundColor: "#D3D3D3"}}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                post.filter((r, index) => {return index <10}).map((result, index)=>{
                  return(
              <TableRow key={result.name}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{result.name}</TableCell>
                <TableCell><Link href={result.url}>{result.url}</Link></TableCell>
              </TableRow>
              )
                  })
              }
            </TableBody>
          </Table>
        </Table>
      </TableContainer>
    </Container>
  )
}
export default index