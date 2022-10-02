import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../../redux/drivers/action";
import { useState } from "react";
import {addToFavsAction} from '../../redux/favourites/action'

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";


function Index() {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.listOfDrivers);
  const favs = useSelector((state)=> state.favourites)
  
  useEffect(() => {
    dispatch(getAllDrivers(0));
    console.log(drivers);
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(getAllDrivers(newPage * 30));
  };

  const addToFavaourites = (driver) => {
    dispatch(addToFavsAction(driver))
    console.log(favs)
  }


  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      {drivers && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 170 }}>Driver Name</TableCell>
                  <TableCell style={{ minWidth: 170 }}>
                    Permanent Number
                  </TableCell>
                  <TableCell style={{ minWidth: 170 }}>Nationality</TableCell>
                  <TableCell style={{ minWidth: 170 }}>DOB</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Information</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Favs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {drivers?.data?.DriverTable?.Drivers.map((driver, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      style={
                        driver.permanentNumber
                          ? { backgroundColor: "white" }
                          : { backgroundColor: "red" }
                      }
                    >
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >{`${driver.givenName} ${driver.familyName}`}</TableCell>
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >
                        {driver.permanentNumber}
                      </TableCell>
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >
                        {driver.nationality}
                      </TableCell>
                      <TableCell
                        style={
                          driver.permanentNumber
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      >
                        {driver.dateOfBirth}
                      </TableCell>
                      <TableCell>
                        <a
                          href={driver.url}
                          style={
                            driver.permanentNumber
                              ? { color: "black", textDecoration: 'underline' }
                              : { color: "white", textDecoration: 'underline' }
                          }
                          target="_blank"
                        >
                          Info
                        </a>
                      </TableCell>
                      <TableCell style={{ cursor: "pointer" }} onClick={()=> addToFavaourites(driver)}>🤍</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={drivers.data ? drivers.data?.total : 0}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={30}
          />
        </Paper>
      )}
    </Container>
  );
}

export default Index;
