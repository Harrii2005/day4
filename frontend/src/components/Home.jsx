import { TableCell, TableContainer, TableHead, TableRow,Table,TableBody } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [stu, setStu] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3004/")
            .then((res) => {
                console.log(res)
                setStu(res.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Name</TableCell>
                            <TableCell> Age</TableCell>
                            <TableCell> Course</TableCell>
                            <TableCell> Place</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stu.map((val, i) => {
                            return (<TableRow key={i}>
                                <TableCell> {val.name}</TableCell>
                                <TableCell> {val.age}</TableCell>
                                <TableCell> {val.place}</TableCell>
                                <TableCell> {val.course}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default Home

